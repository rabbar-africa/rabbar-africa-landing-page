"use client";

import { Fragment, useState } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan, PlanLimit } from "@/lib/plans";
import { EVERY_PLAN_INCLUDES, FEATURE_LABELS, PLAN_COPY } from "@/data/pricing";
import { StartLink } from "@/components/platform/StartLink";

const money = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

/** A limit as a table cell: "Unlimited", "100 a month" or "15". */
function limitCell(limit?: PlanLimit) {
  if (!limit) return "—";
  if (limit.max === null) return "Unlimited";
  const n = limit.max.toLocaleString("en-NG");
  if (limit.key === "templates") return `${n} per document type`;
  return limit.per === "month" ? `${n} a month` : n;
}

type Cell = boolean | string;

interface Row {
  feature: string;
  description?: string;
  values: Cell[];
}

function CellValue({ value, featured }: { value: Cell; featured?: boolean }) {
  if (value === true) {
    return (
      <>
        <Check
          size={18}
          className={cn(
            "mx-auto",
            featured ? "text-[#001F3E]" : "text-[#049020]",
          )}
          aria-hidden="true"
        />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus size={18} className="mx-auto text-gray-300" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-sm font-medium text-[#001F3E]">{value}</span>;
}

/**
 * Every plan, feature by feature, built from the backend's plans so it always
 * matches what is sold. On phones there isn't room for five columns, so a
 * picker shows one plan at a time beside the feature names.
 */
export function ComparisonTable({
  plans,
  contactLink,
}: {
  plans: Plan[];
  contactLink: string;
}) {
  const [selected, setSelected] = useState(
    Math.max(
      0,
      plans.findIndex((p) => PLAN_COPY[p.tier]?.featured),
    ),
  );
  const columnClass = (i: number) =>
    cn(i !== selected && "hidden md:table-cell");
  const featuredIndex = plans.findIndex((p) => PLAN_COPY[p.tier]?.featured);

  const limitKeys =
    plans[0]?.limits.filter((l) => !l.comingSoon).map((l) => l.key) ?? [];
  const featureKeys =
    plans[0]?.features.filter((f) => !f.comingSoon).map((f) => f.key) ?? [];
  const soonKeys =
    plans[0]?.features.filter((f) => f.comingSoon).map((f) => f.key) ?? [];

  const labelOf = (key: string) =>
    FEATURE_LABELS[key] ??
    plans[0]?.features.find((f) => f.key === key)?.label ??
    key;

  const groups: { group: string; rows: Row[] }[] = [
    {
      group: "In every plan",
      rows: EVERY_PLAN_INCLUDES.map(({ feature, description }) => ({
        feature,
        description,
        values: plans.map(() => true),
      })),
    },
    {
      group: "Limits",
      rows: limitKeys.map((key) => ({
        feature: plans[0].limits.find((l) => l.key === key)!.label,
        values: plans.map((p) =>
          limitCell(p.limits.find((l) => l.key === key)),
        ),
      })),
    },
    {
      group: "Features",
      rows: featureKeys.map((key) => ({
        feature: labelOf(key),
        values: plans.map(
          (p) => p.features.find((f) => f.key === key)?.included ?? false,
        ),
      })),
    },
  ];
  if (soonKeys.length) {
    groups.push({
      group: "Coming soon",
      rows: soonKeys.map((key) => ({
        feature: labelOf(key),
        values: plans.map((p) =>
          p.features.find((f) => f.key === key)?.included ? "Soon" : false,
        ),
      })),
    });
  }

  return (
    <div>
      {/* Plan picker, phones only */}
      <div
        className="md:hidden mb-6 flex gap-1 overflow-x-auto rounded-lg border border-gray-200 bg-[#F4F4F4] p-1"
        role="group"
        aria-label="Choose a plan to compare"
      >
        {plans.map((plan, i) => (
          <button
            key={plan.tier}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            className={cn(
              "shrink-0 rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]",
              selected === i
                ? "bg-[#001F3E] text-white"
                : "text-gray-600 hover:text-[#001F3E]",
            )}
          >
            {plan.name}
          </button>
        ))}
      </div>

      <table className="w-full table-auto border-collapse text-left">
        <caption className="sr-only">What each Rabbar plan includes</caption>
        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="w-[58%] md:w-[28%] py-4 pr-4 align-bottom"
            >
              <span className="sr-only">Feature</span>
            </th>
            {plans.map((plan, i) => (
              <th
                key={plan.tier}
                scope="col"
                className={cn(
                  "w-[42%] md:w-[14.4%] px-2 py-4 text-center align-bottom",
                  i === featuredIndex && "bg-[#DAE648]/15 rounded-t-xl",
                  columnClass(i),
                )}
              >
                <span className="block text-base font-semibold text-[#001F3E]">
                  {plan.name}
                </span>
                <span className="mt-1 block text-sm font-normal text-gray-500">
                  {plan.contactSales
                    ? "Talk to us"
                    : plan.monthlyPrice
                      ? `${money(plan.monthlyPrice, plan.currency)}/month`
                      : "Free"}
                </span>
                {plan.contactSales ? (
                  <a
                    href={contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-[#001F3E] transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]"
                  >
                    Talk to us
                  </a>
                ) : (
                  <StartLink
                    className={cn(
                      "mt-3 inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]",
                      i === featuredIndex
                        ? "bg-[#001F3E] text-white hover:bg-[#013064]"
                        : "border border-gray-300 text-[#001F3E] hover:bg-gray-50",
                    )}
                  >
                    {plan.monthlyPrice ? "Get started" : "Start free"}
                  </StartLink>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {groups.map(({ group, rows }) => (
            <Fragment key={group}>
              <tr>
                <th
                  scope="colgroup"
                  colSpan={plans.length + 1}
                  className="pt-10 pb-3 text-sm font-semibold uppercase tracking-wider text-[#013064]"
                >
                  {group}
                </th>
              </tr>
              {rows.map((row) => (
                <tr key={row.feature} className="border-t border-gray-200">
                  <th scope="row" className="py-4 pr-4 align-top font-normal">
                    <span className="block font-semibold text-[#001F3E]">
                      {row.feature}
                    </span>
                    {row.description && (
                      <span className="mt-0.5 block text-sm text-gray-500">
                        {row.description}
                      </span>
                    )}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={plans[i].tier}
                      className={cn(
                        "px-2 py-4 text-center align-top",
                        i === featuredIndex && "bg-[#DAE648]/15",
                        columnClass(i),
                      )}
                    >
                      <CellValue value={value} featured={i === featuredIndex} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

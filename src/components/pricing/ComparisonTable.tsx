"use client";

import { Fragment, useState } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  COMPARISON,
  PRICING_TIERS,
  type ComparisonValue,
} from "@/data/pricing";
import { StartLink } from "@/components/platform/StartLink";

function Cell({
  value,
  featured,
}: {
  value: ComparisonValue;
  featured?: boolean;
}) {
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
 * Every feature, plan by plan. On phones there isn't room for three plan
 * columns, so a picker shows one plan at a time beside the feature names; from
 * `md` up all columns show and the picker hides.
 */
export function ComparisonTable() {
  const [selected, setSelected] = useState(
    Math.max(
      0,
      PRICING_TIERS.findIndex((t) => t.featured),
    ),
  );
  const columnClass = (i: number) =>
    cn(i !== selected && "hidden md:table-cell");

  return (
    <div>
      {/* Plan picker, phones only */}
      <div
        className="md:hidden mb-6 grid grid-cols-3 rounded-lg border border-gray-200 bg-[#F4F4F4] p-1"
        role="group"
        aria-label="Choose a plan to compare"
      >
        {PRICING_TIERS.map((tier, i) => (
          <button
            key={tier.name}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            className={cn(
              "rounded-md px-2 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]",
              selected === i
                ? "bg-[#001F3E] text-white"
                : "text-gray-600 hover:text-[#001F3E]",
            )}
          >
            {tier.name}
          </button>
        ))}
      </div>

      <table className="w-full table-auto border-collapse text-left">
        <caption className="sr-only">
          Features included in each Rabbar plan
        </caption>

        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="w-[58%] md:w-[40%] py-4 pr-4 align-bottom"
            >
              <span className="sr-only">Feature</span>
            </th>
            {PRICING_TIERS.map((tier, i) => (
              <th
                key={tier.name}
                scope="col"
                className={cn(
                  "w-[42%] md:w-[20%] px-3 py-4 text-center align-bottom",
                  tier.featured && "bg-[#DAE648]/15 rounded-t-xl",
                  columnClass(i),
                )}
              >
                <span className="block text-base font-semibold text-[#001F3E]">
                  {tier.name}
                </span>
                <span className="mt-1 block text-sm font-normal text-gray-500">
                  {tier.monthly === "Free" ? "Free" : `${tier.monthly}/month`}
                </span>
                <StartLink
                  className={cn(
                    "mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]",
                    tier.featured
                      ? "bg-[#001F3E] text-white hover:bg-[#013064]"
                      : "border border-gray-300 text-[#001F3E] hover:bg-gray-50",
                  )}
                >
                  {tier.monthly === "Free" ? "Start free" : "Get started"}
                </StartLink>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {COMPARISON.map(({ group, rows }) => (
            <Fragment key={group}>
              <tr>
                <th
                  scope="colgroup"
                  colSpan={PRICING_TIERS.length + 1}
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
                      key={PRICING_TIERS[i].name}
                      className={cn(
                        "px-3 py-4 text-center align-top",
                        PRICING_TIERS[i].featured && "bg-[#DAE648]/15",
                        columnClass(i),
                      )}
                    >
                      <Cell
                        value={value}
                        featured={PRICING_TIERS[i].featured}
                      />
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

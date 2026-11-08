"use client";

import { useState } from "react";
import { ArrowRight, Check, Info, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan } from "@/lib/plans";
import { CARD_LIMITS, FEATURE_LABELS, PLAN_COPY } from "@/data/pricing";
import { StartLink } from "@/components/platform/StartLink";

// Formatting is repeated here (not imported from lib/plans) because that
// module is server-only.
const money = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

/** Features this plan has that the plan before it doesn't. */
function newFeatures(plan: Plan, previous?: Plan) {
  return plan.features.filter(
    (f) =>
      f.included &&
      !f.comingSoon &&
      !previous?.features.find((p) => p.key === f.key)?.included,
  );
}

function Price({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const featured = PLAN_COPY[plan.tier]?.featured;
  const muted = featured ? "text-gray-400" : "text-gray-500";
  const strong = featured ? "text-white" : "text-[#001F3E]";

  if (!plan.monthlyPrice) {
    return (
      <p className="mt-6">
        <span className={cn("text-4xl font-semibold tracking-tight", strong)}>
          Free
        </span>
        <span className={cn("mt-2 block text-sm", muted)}>No card needed</span>
      </p>
    );
  }

  if (yearly && plan.annualPrice) {
    return (
      <p className="mt-6">
        <span className="flex items-baseline gap-1.5">
          <span
            className={cn(
              "text-4xl font-semibold tabular-nums tracking-tight",
              strong,
            )}
          >
            {money(plan.annualPrice, plan.currency)}
          </span>
          <span className={cn("text-sm", muted)}>/year</span>
        </span>
        <span className={cn("mt-2 block text-sm", muted)}>
          {money(Math.round(plan.annualPrice / 12), plan.currency)} a month,
          billed yearly
          {plan.annualMonthsFree
            ? ` · ${plan.annualMonthsFree} months free`
            : ""}
        </span>
      </p>
    );
  }

  return (
    <p className="mt-6">
      <span className="flex items-baseline gap-1.5">
        <span
          className={cn(
            "text-4xl font-semibold tabular-nums tracking-tight",
            strong,
          )}
        >
          {money(plan.monthlyPrice, plan.currency)}
        </span>
        <span className={cn("text-sm", muted)}>/month</span>
      </span>
      <span className={cn("mt-2 block text-sm", muted)}>
        {plan.annualPrice
          ? `or ${money(plan.annualPrice, plan.currency)} a year`
          : "Billed monthly"}
      </span>
    </p>
  );
}

/**
 * Monthly/yearly toggle and a card per plan on sale. Plans sold by talking to
 * us (Enterprise) get a strip under the cards instead.
 */
export function PlanCards({
  plans,
  contactLink,
}: {
  plans: Plan[];
  /** WhatsApp link for "Talk to us". */
  contactLink: string;
}) {
  const [yearly, setYearly] = useState(false);
  const onSale = plans.filter((p) => !p.contactSales);
  const contactPlans = plans.filter((p) => p.contactSales);
  const monthsFree = Math.max(
    0,
    ...onSale.map((p) => (p.annualPrice ? (p.annualMonthsFree ?? 0) : 0)),
  );
  const sellsYearly = onSale.some((p) => p.annualPrice);

  return (
    <div>
      {sellsYearly && (
        <div className="mt-8 inline-flex items-center rounded-lg border border-gray-200 bg-[#F4F4F4] p-1">
          {[
            { label: "Monthly", value: false },
            {
              label: monthsFree
                ? `Yearly · ${monthsFree} months free`
                : "Yearly",
              value: true,
            },
          ].map(({ label, value }) => (
            <button
              key={label}
              type="button"
              onClick={() => setYearly(value)}
              aria-pressed={yearly === value}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]",
                yearly === value
                  ? "bg-[#001F3E] text-white"
                  : "text-gray-600 hover:text-[#001F3E]",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div
        className={cn(
          "mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch",
          onSale.length >= 4 ? "xl:grid-cols-4" : "lg:grid-cols-3",
        )}
      >
        {onSale.map((plan, i) => {
          const copy = PLAN_COPY[plan.tier];
          const featured = copy?.featured;
          const previous = onSale[i - 1];
          const added = newFeatures(plan, previous);
          // "Everything in X" is only true if nothing of X's is missing.
          const dropsSome = previous?.features.some(
            (f) =>
              f.included &&
              !f.comingSoon &&
              !plan.features.find((p) => p.key === f.key)?.included,
          );
          const webOnly = plan.features.find((f) => f.key === "webEditing");
          const limits = CARD_LIMITS.map((key) =>
            plan.limits.find((l) => l.key === key && !l.comingSoon),
          ).filter(Boolean);

          return (
            <div
              key={plan.tier}
              className={cn(
                "relative rounded-2xl border p-7 flex flex-col",
                featured
                  ? "border-[#001F3E] bg-[#001F3E] shadow-xl"
                  : "border-gray-200 bg-white",
              )}
            >
              {featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-[#DAE648] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#001F3E]">
                  Most popular
                </span>
              )}

              <h3
                className={cn(
                  "text-xl font-semibold",
                  featured ? "text-white" : "text-[#001F3E]",
                )}
              >
                {plan.name}
              </h3>
              {copy?.tagline && (
                <p
                  className={cn(
                    "mt-1 text-sm",
                    featured ? "text-gray-300" : "text-gray-500",
                  )}
                >
                  {copy.tagline}
                </p>
              )}

              <Price plan={plan} yearly={yearly} />

              <ul className="mt-6 space-y-2.5 grow text-sm">
                {limits.map((limit) => (
                  <li key={limit!.key} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={cn(
                        "mt-0.5 shrink-0",
                        featured ? "text-[#DAE648]" : "text-[#049020]",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={featured ? "text-gray-200" : "text-gray-700"}
                    >
                      {limit!.phrase}
                    </span>
                  </li>
                ))}

                {webOnly && !webOnly.included && (
                  <li className="flex items-start gap-2.5">
                    <Info
                      size={16}
                      className="mt-0.5 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span
                      className={featured ? "text-gray-300" : "text-gray-500"}
                    >
                      Work through WhatsApp; the web app is view only
                    </span>
                  </li>
                )}

                {/* Premium-style plans add nothing but higher limits, so
                    they still say "Everything in Standard". */}
                {previous && (added.length > 0 || !dropsSome) && (
                  <li
                    className={cn(
                      "pt-2 font-semibold",
                      featured ? "text-white" : "text-[#013064]",
                    )}
                  >
                    {dropsSome
                      ? "Also includes:"
                      : added.length > 0
                        ? `Everything in ${previous.name}, plus:`
                        : `Everything in ${previous.name}`}
                  </li>
                )}
                {(previous ? added : []).map((feature) => (
                  <li key={feature.key} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={cn(
                        "mt-0.5 shrink-0",
                        featured ? "text-[#DAE648]" : "text-[#049020]",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={featured ? "text-gray-200" : "text-gray-700"}
                    >
                      {FEATURE_LABELS[feature.key] ?? feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <StartLink
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  featured
                    ? "bg-[#DAE648] text-[#001F3E] hover:bg-[#E8F34F] focus-visible:ring-[#DAE648] focus-visible:ring-offset-[#001F3E]"
                    : "bg-[#001F3E] text-white hover:bg-[#013064] focus-visible:ring-[#013064]",
                )}
              >
                {plan.monthlyPrice ? "Get started" : "Start free"}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </StartLink>
            </div>
          );
        })}
      </div>

      {contactPlans.map((plan) => (
        <div
          key={plan.tier}
          className="mt-6 rounded-2xl border border-gray-200 bg-[#F4F4F4] p-7 flex flex-col md:flex-row md:items-center gap-6 justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-[#001F3E]">
              {plan.name}
            </h3>
            <p className="mt-1 text-gray-600">{plan.description}</p>
          </div>
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-[#001F3E] px-6 py-3 font-semibold text-[#001F3E] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Talk to us
          </a>
        </div>
      ))}
    </div>
  );
}

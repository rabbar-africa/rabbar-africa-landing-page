"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { jobcardStartIsApp, jobcardStartLink } from "@/data/constant";
import {
  BILLING_OPTIONS,
  PRICING_TIERS,
  isFeatureHeading,
} from "@/data/pricing";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            Priced per workshop
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Not per car, and not a cut of your takings. Pay yearly and two
            months are on us.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 inline-flex items-center rounded-lg border border-gray-200 bg-[#F4F4F4] p-1">
          {BILLING_OPTIONS.map(({ label, annual: value }) => (
            <button
              key={label}
              type="button"
              onClick={() => setAnnual(value)}
              aria-pressed={annual === value}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064]",
                annual === value
                  ? "bg-[#001F3E] text-white"
                  : "text-gray-600 hover:text-[#001F3E]",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl border p-8 h-full flex flex-col",
                tier.featured
                  ? "border-[#001F3E] bg-[#001F3E] shadow-xl lg:-mt-4 lg:pb-12"
                  : "border-gray-200 bg-white",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[#DAE648] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#001F3E]">
                  Most popular
                </span>
              )}

              <h3
                className={cn(
                  "text-xl font-semibold",
                  tier.featured ? "text-white" : "text-[#001F3E]",
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  tier.featured ? "text-gray-300" : "text-gray-500",
                )}
              >
                {tier.tagline}
              </p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={cn(
                    "text-4xl font-semibold tabular-nums tracking-tight",
                    tier.featured ? "text-white" : "text-[#001F3E]",
                  )}
                >
                  {annual ? tier.annual : tier.monthly}
                </span>
                {tier.monthly !== "Free" && (
                  <span
                    className={cn(
                      "text-sm",
                      tier.featured ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    /{annual ? "year" : "month"}
                  </span>
                )}
              </p>
              <p
                className={cn(
                  "mt-2 text-sm font-medium",
                  tier.featured ? "text-[#DAE648]" : "text-[#013064]",
                )}
              >
                {tier.users}
              </p>

              <ul className="mt-6 space-y-3 grow">
                {tier.features.map((feature) => {
                  const isHeading = isFeatureHeading(feature);
                  return (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        isHeading && "font-semibold",
                      )}
                    >
                      {!isHeading && (
                        <Check
                          size={16}
                          className={cn(
                            "mt-0.5 shrink-0",
                            tier.featured ? "text-[#DAE648]" : "text-[#049020]",
                          )}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={cn(
                          tier.featured ? "text-gray-200" : "text-gray-700",
                          isHeading && "text-[#013064]",
                          isHeading && tier.featured && "text-white",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={jobcardStartLink}
                {...(jobcardStartIsApp
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  tier.featured
                    ? "bg-[#DAE648] text-[#001F3E] hover:bg-[#E8F34F] focus-visible:ring-[#DAE648] focus-visible:ring-offset-[#001F3E]"
                    : "bg-[#001F3E] text-white hover:bg-[#013064] focus-visible:ring-[#013064]",
                )}
              >
                {tier.monthly === "Free" ? "Start free" : `Get started`}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Start on Starter for free, no card needed. Moving from a pad, a
          notebook or a spreadsheet? Message us and we&apos;ll help you bring it
          across.
        </p>
      </div>
    </section>
  );
}

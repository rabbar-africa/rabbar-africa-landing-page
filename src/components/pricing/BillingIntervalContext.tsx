"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { BillingInterval } from "@/components/platform/StartLink";
import type { Plan } from "@/lib/plans";

interface BillingIntervalState {
  yearly: boolean;
  setYearly: (yearly: boolean) => void;
}

const BillingIntervalContext = createContext<BillingIntervalState>({
  yearly: false,
  setYearly: () => {},
});

/**
 * The monthly/yearly choice, shared by the plan cards (which own the toggle)
 * and the comparison table, so both show the same prices and send the same
 * billing interval to signup.
 */
export function BillingIntervalProvider({ children }: { children: ReactNode }) {
  const [yearly, setYearly] = useState(false);
  return (
    <BillingIntervalContext.Provider value={{ yearly, setYearly }}>
      {children}
    </BillingIntervalContext.Provider>
  );
}

export const useBillingInterval = () => useContext(BillingIntervalContext);

/**
 * The interval to send to signup for this plan: none for free and
 * talk-to-us plans, ANNUAL only when yearly is chosen and the plan is sold
 * by the year.
 */
export function intervalFor(
  plan: Plan,
  yearly: boolean,
): BillingInterval | undefined {
  if (!plan.monthlyPrice || plan.contactSales) return undefined;
  return yearly && plan.annualPrice ? "ANNUAL" : "MONTHLY";
}

/**
 * The plan to send to signup: only paid plans. Free (Starter) and talk-to-us
 * plans get the plain signup link, with no query.
 */
export const planQueryFor = (plan: Plan): string | undefined =>
  plan.monthlyPrice && !plan.contactSales ? plan.tier : undefined;

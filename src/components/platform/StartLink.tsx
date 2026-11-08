import type { ReactNode } from "react";
import { appIsConfigured, appSignupLink } from "@/data/constant";

export type BillingInterval = "MONTHLY" | "ANNUAL";

/**
 * The signup link, with the chosen plan in the query when there is one:
 *
 *   /auth/signup?planTier=STANDARD&billingInterval=ANNUAL
 *
 * The names and values match the backend's checkout request (CheckoutDto:
 * `planTier`, `billingInterval`), so the web app can pass them straight to
 * checkout after signup. Free plans send `planTier` only. When the app URL
 * isn't configured the link is the WhatsApp fallback, which takes no query.
 */
export function signupHref(plan?: string, interval?: BillingInterval) {
  if (!appIsConfigured || !plan) return appSignupLink;
  const url = new URL(appSignupLink);
  url.searchParams.set("planTier", plan);
  if (interval) url.searchParams.set("billingInterval", interval);
  return url.toString();
}

/**
 * The "Get started" link: the web app's signup page. The app opens in the
 * same tab like any signup flow; the WhatsApp fallback (used when the app URL
 * isn't configured) opens in a new one so the page isn't lost.
 */
export function StartLink({
  className,
  children,
  plan,
  interval,
}: {
  className?: string;
  children: ReactNode;
  /** Backend plan tier, e.g. "STANDARD". Omit for a plain signup. */
  plan?: string;
  /** Only for paid plans; omit for free ones. */
  interval?: BillingInterval;
}) {
  return (
    <a
      href={signupHref(plan, interval)}
      {...(appIsConfigured
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={className}
    >
      {children}
    </a>
  );
}

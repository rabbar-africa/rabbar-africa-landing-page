import "server-only";
import fallbackPlans from "@/data/plans-fallback.json";

/**
 * Rabbar's plans, read from the backend's public `GET /plans` endpoint
 * (internal-tool-backend: PlansPublicController → PlansService
 * .listWithEntitlements).
 *
 * Prices, yearly prices and what each plan includes are all edited in the
 * back office and take effect without a deploy, so the site reads them
 * rather than keeping its own copy. Pages that call getPlans() set
 * `export const revalidate = PLANS_REVALIDATE_SECONDS`: they are prerendered
 * like any static page and rebuilt in the background at most once an hour,
 * so search engines and visitors still get plain HTML.
 *
 * When RABBAR_API_URL is unset, or the API fails, the page falls back to
 * src/data/plans-fallback.json: the backend's own defaults (DEFAULT_PLANS
 * and DEFAULT_ENTITLEMENTS in plan-config.ts) as of 10 November 2026. Refresh
 * it when the defaults change, by saving the output of GET /plans
 * ?contactSales=true from a backend with no back-office edits.
 */

export interface PlanFeature {
  key: string;
  label: string;
  included: boolean;
  /** On the roadmap: shown as "coming soon", never as included today. */
  comingSoon: boolean;
}

export interface PlanLimit {
  key: string;
  label: string;
  /** null: unlimited. */
  max: number | null;
  /** `month` resets on the 1st, `year` on 1 January. */
  per: "total" | "month" | "year";
  /** Ready to show, e.g. "100 invoices a month" or "30,000 invoices a year". */
  phrase: string;
  comingSoon: boolean;
}

export interface Plan {
  tier: string;
  name: string;
  description: string;
  currency: string;
  /** null for plans sold by talking to us (Enterprise). */
  monthlyPrice: number | null;
  /** A year paid at once; null when the plan isn't sold by the year. */
  annualPrice: number | null;
  /** What a year saves over 12 monthly payments. */
  annualSaving: number | null;
  /** The saving in whole months ("2 months free"), when it is one. */
  annualMonthsFree: number | null;
  /** Sold by talking to us, not by checkout. */
  contactSales: boolean;
  features: PlanFeature[];
  limits: PlanLimit[];
}

export const PLANS_REVALIDATE_SECONDS = 3600;

/** The API sends Decimal columns as strings; the page wants numbers. */
const num = (value: unknown): number | null =>
  value === null || value === undefined || value === ""
    ? null
    : Number.isFinite(Number(value))
      ? Number(value)
      : null;

function normalise(raw: unknown): Plan[] | null {
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const plans: Plan[] = [];
  for (const p of raw as Record<string, unknown>[]) {
    if (
      typeof p?.tier !== "string" ||
      typeof p?.name !== "string" ||
      !Array.isArray(p.features) ||
      !Array.isArray(p.limits)
    ) {
      return null;
    }
    plans.push({
      tier: p.tier,
      name: p.name,
      description: typeof p.description === "string" ? p.description : "",
      currency: typeof p.currency === "string" ? p.currency : "NGN",
      monthlyPrice: num(p.monthlyPrice),
      annualPrice: num(p.annualPrice),
      annualSaving: num(p.annualSaving),
      annualMonthsFree: num(p.annualMonthsFree),
      contactSales: p.contactSales === true,
      features: p.features as PlanFeature[],
      limits: (p.limits as PlanLimit[]).map((l) => ({
        ...l,
        max: num(l.max),
      })),
    });
  }
  return plans;
}

export async function getPlans(): Promise<Plan[]> {
  const base = process.env.RABBAR_API_URL?.trim().replace(/\/+$/, "");
  if (base) {
    try {
      const res = await fetch(`${base}/plans?contactSales=true`, {
        next: { revalidate: PLANS_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        const body = await res.json();
        // The backend wraps responses as { data } (ResponseInterceptor).
        const plans = normalise(body?.data ?? body);
        if (plans) return plans;
      }
      console.warn(`[plans] GET /plans returned ${res.status}; using fallback`);
    } catch (error) {
      console.warn("[plans] GET /plans failed; using fallback", error);
    }
  }
  return normalise(fallbackPlans) ?? [];
}

/** "₦5,000". Whole naira, as the plans are priced. */
export function formatPrice(amount: number, currency = "NGN"): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** The cheapest paid monthly price, for "Paid plans from …". */
export function lowestPaidMonthly(plans: Plan[]): Plan | undefined {
  return plans
    .filter((p) => !p.contactSales && (p.monthlyPrice ?? 0) > 0)
    .sort((a, b) => (a.monthlyPrice ?? 0) - (b.monthlyPrice ?? 0))[0];
}

/**
 * schema.org offers for the plans on sale, for structured data: a monthly
 * offer per plan, plus a yearly one where the plan is sold by the year.
 */
export function planOffers(plans: Plan[]) {
  return plans
    .filter((p) => !p.contactSales && p.monthlyPrice !== null)
    .flatMap((p) => {
      const monthly = {
        "@type": "Offer",
        name: p.name,
        price: String(p.monthlyPrice),
        priceCurrency: p.currency,
        ...(p.monthlyPrice
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: String(p.monthlyPrice),
                priceCurrency: p.currency,
                unitCode: "MON",
              },
            }
          : {}),
      };
      if (!p.annualPrice) return [monthly];
      return [
        monthly,
        {
          "@type": "Offer",
          name: `${p.name} (yearly)`,
          price: String(p.annualPrice),
          priceCurrency: p.currency,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(p.annualPrice),
            priceCurrency: p.currency,
            unitCode: "ANN",
          },
        },
      ];
    });
}

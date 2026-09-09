import { UMBRELLA_NAME } from "@/data/products";

/**
 * Jobcard pricing.
 *
 * Single source of truth for the tiers: names, prices, seat limits and what is
 * included. Feature lists are taken verbatim from the product brief, so edit
 * them here rather than in the component.
 *
 * A feature ending in "plus:" is rendered as a sub-heading rather than a
 * ticked item, which is how the "Everything in X, plus:" lines read.
 */
export interface PricingTier {
  /** Tier name, also used in the WhatsApp enquiry message. */
  name: string;
  /** One-line positioning under the tier name. */
  tagline: string;
  /** Displayed price when billing monthly. "Free" renders without a period suffix. */
  monthly: string;
  /** Displayed price when billing annually (two months free). */
  annual: string;
  /** Seat allowance, shown in the tier's accent colour. */
  users: string;
  /** What the tier includes, in display order. */
  features: string[];
  /** Marks the visually promoted tier. Exactly one should set this. */
  featured?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    tagline: "Get off the carbon-copy pad",
    monthly: "Free",
    annual: "Free",
    users: "1 user",
    features: [
      "Up to 50 customers and their vehicles",
      "30 job cards a month",
      "Invoices and payments",
      "Parts & services catalogue",
      "Basic dashboard",
      `PDFs comes with ${UMBRELLA_NAME} watermark`,
    ],
  },
  {
    name: "Standard",
    tagline: "The full workshop",
    monthly: "₦5,000",
    annual: "₦50,000",
    users: "Up to 5 users",
    featured: true,
    features: [
      "Everything in Starter, plus:",
      "Unlimited job cards, customers and invoices",
      "Expense tracking and per-job profit",
      "Inspections with photo findings",
      "AI-drafted customer advisories",
      "Paperwork expiry tracking",
      "Service reminders by date or mileage",
      "Carry-forward invoices and write-offs",
      "Your logo and colours on every PDF",
      "Full dashboard: top debtors, profit trend",
      "WhatsApp support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Bigger teams, tighter control",
    monthly: "₦15,000",
    annual: "₦150,000",
    users: "Unlimited users",
    features: [
      "Everything in Standard, plus:",
      "Custom roles and permission matrix",
      "Custom document numbering per module",
      "Multiple currencies and tax rates",
      "Multiple addresses and bank accounts",
      "Guided onboarding and data migration",
      "Priority WhatsApp support",
    ],
  },
];

/** Billing period toggle, annual carries two months free. */
export const BILLING_OPTIONS = [
  { label: "Monthly", annual: false },
  { label: "Annual · 2 months free", annual: true },
] as const;

/** Marks an "Everything in X, plus:" line, which renders as a sub-heading. */
export const isFeatureHeading = (feature: string) => feature.endsWith("plus:");

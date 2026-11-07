import { UMBRELLA_NAME } from "@/data/products";

/**
 * Rabbar Africa (invoicing platform) pricing.
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

/**
 * A comparison cell: true is included, false is not, and a string is a limit
 * or a short note ("30 a month", "Unlimited").
 */
export type ComparisonValue = boolean | string;

export interface ComparisonRow {
  feature: string;
  /** One line under the feature name, saying what it means. */
  description?: string;
  /** One value per tier, in PRICING_TIERS order. */
  values: [ComparisonValue, ComparisonValue, ComparisonValue];
}

export interface ComparisonGroup {
  group: string;
  rows: ComparisonRow[];
}

/**
 * The feature comparison on /pricing. It restates PRICING_TIERS row by row,
 * so keep the two in step: a change to a tier's features belongs in both.
 * Job cards, WhatsApp invoicing, inspections and paperwork lead, as they do
 * on the homepage.
 */
export const COMPARISON: ComparisonGroup[] = [
  {
    group: "Job cards",
    rows: [
      {
        feature: "Job cards",
        description:
          "Status, priority, technicians and promised date on every job",
        values: ["30 a month", "Unlimited", "Unlimited"],
      },
      {
        feature: "Customers and vehicles",
        values: ["Up to 50", "Unlimited", "Unlimited"],
      },
      {
        feature: "Profit per job",
        description: "Parts, labour and other costs set against the invoice",
        values: [false, true, true],
      },
    ],
  },
  {
    group: "Invoices and receipts",
    rows: [
      {
        feature: "Invoices, payments and receipts",
        values: [true, "Unlimited", "Unlimited"],
      },
      {
        feature: "Invoices and receipts on WhatsApp",
        description: "Type the job in one message and get the PDF back",
        values: [true, true, true],
      },
      {
        feature: "Parts and services catalogue",
        values: [true, true, true],
      },
      {
        feature: "Carry-forward invoices and write-offs",
        description: "Move an old balance onto the next invoice",
        values: [false, true, true],
      },
      {
        feature: "Your logo and colours on every PDF",
        values: ["With Rabbar watermark", true, true],
      },
      {
        feature: "Custom document numbering per module",
        values: [false, false, true],
      },
      {
        feature: "Multiple currencies and tax rates",
        values: [false, false, true],
      },
    ],
  },
  {
    group: "Inspections and paperwork",
    rows: [
      {
        feature: "Vehicle inspections with photo findings",
        values: [false, true, true],
      },
      {
        feature: "AI-drafted customer advisories",
        description: "Reviewed by your technician before they go out",
        values: [false, true, true],
      },
      {
        feature: "Paperwork expiry tracking",
        description: "Insurance, vehicle licence, roadworthiness and more",
        values: [false, true, true],
      },
      {
        feature: "Service reminders by date or mileage",
        values: [false, true, true],
      },
    ],
  },
  {
    group: "Money and reports",
    rows: [
      {
        feature: "Dashboard",
        values: ["Basic", "Full: top debtors, profit trend", "Full"],
      },
      {
        feature: "Expense tracking",
        values: [false, true, true],
      },
    ],
  },
  {
    group: "Team and business",
    rows: [
      { feature: "Users", values: ["1", "Up to 5", "Unlimited"] },
      {
        feature: "Custom roles and permissions",
        description: "Decide what each person can see and do",
        values: [false, false, true],
      },
      {
        feature: "Multiple addresses and bank accounts",
        values: [false, false, true],
      },
    ],
  },
  {
    group: "Support",
    rows: [
      {
        feature: "WhatsApp support",
        values: [false, true, "Priority"],
      },
      {
        feature: "Guided onboarding and data migration",
        values: [false, false, true],
      },
    ],
  },
];

/**
 * Billing questions on /pricing. Answers follow the Terms of Service
 * ("Plans, billing and renewal") and how billing actually works, so update
 * them together.
 */
export const BILLING_FAQS = [
  {
    q: "Is there a free plan?",
    a: "Yes. Starter is free for as long as you like, with no card needed. Move up to a paid plan when the business outgrows it.",
  },
  {
    q: "How do I pay?",
    a: "Through Paystack, by card, bank transfer or USSD, in naira. If you save a card, your plan renews automatically; if you don't, we email you a payment link before each renewal.",
  },
  {
    q: "Why was my card charged ₦50?",
    a: "When you save a card we charge ₦50 to check it works, and refund it straight away.",
  },
  {
    q: "Can I change plans?",
    a: "Yes, at any time in the app. An upgrade takes effect straight away and you pay the full price of the new plan from that day. A downgrade takes effect at the end of the period you've already paid for.",
  },
  {
    q: "What happens if a payment fails?",
    a: "We retry it, and your plan keeps working for a 7-day grace period. If payment still hasn't gone through, your business moves to the free Starter plan. Your data is kept, and Starter limits apply until you pay.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Stop renewing at any time and you keep your plan until the end of the period you've paid for, then move to Starter. Fees already paid aren't refunded.",
  },
];

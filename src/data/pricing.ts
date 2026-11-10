/**
 * Pricing copy that the backend doesn't hold.
 *
 * Prices, yearly prices, limits and which features each plan includes come
 * from the backend (see src/lib/plans.ts), because they're edited in the back
 * office. This file only adds what a visitor needs around them: a tagline per
 * plan, which plan to promote, the features every plan has, and the billing
 * questions.
 */

export interface PlanCopy {
  /** One line under the plan name on the card. */
  tagline: string;
  /** The promoted plan. Exactly one should set this. */
  featured?: boolean;
}

/** Keyed by the backend's plan tier. A tier missing here still shows. */
export const PLAN_COPY: Record<string, PlanCopy> = {
  STARTER: { tagline: "Try everything, free" },
  WHATSAPP: { tagline: "Run the business from WhatsApp" },
  STANDARD: { tagline: "For a busy workshop or business", featured: true },
  PREMIUM: { tagline: "Room to grow, for bigger teams" },
  ENTERPRISE: { tagline: "For large operators, on agreed terms" },
};

/**
 * Friendlier names for some backend feature labels. Anything not listed
 * shows the backend's own label, so a new feature appears without a change
 * here.
 */
export const FEATURE_LABELS: Record<string, string> = {
  webEditing: "Create and edit in the web app",
  myNumbers: "Who owes you, and your numbers on WhatsApp",
  noRabbarBranding: 'No "Powered by Rabbar" footer on documents',
};

/**
 * The limits shown on each plan card, in this order. The comparison table
 * shows every live limit.
 */
export const CARD_LIMITS = [
  "jobCards",
  "invoices",
  "inspections",
  "customers",
  "users",
];

/**
 * What every plan includes, so they aren't plan limits or features in the
 * backend. Shown at the top of the comparison table. Keep to what is true on
 * the free plan.
 */
export const EVERY_PLAN_INCLUDES = [
  {
    feature: "Invoices and receipts on WhatsApp",
    description: "Type the job in one message and get the PDF back",
  },
  {
    feature: "Digital job cards",
    description: "Status, technicians, promised date and profit per job",
  },
  {
    feature: "Vehicle inspection reports",
    description: "Checklist, photos and an AI-drafted advisory, as a PDF",
  },
  {
    feature: "Paperwork expiry tracking",
    description: "Insurance, vehicle licence, roadworthiness and more",
  },
  { feature: "Payments, expenses and profit" },
];

/**
 * Billing questions on /pricing. Answers follow the backend's billing rules
 * (billing.service.ts, billing-interval.ts) and the Terms of Service, so
 * update them together.
 */
export const BILLING_FAQS = [
  {
    q: "Is there a free plan?",
    a: "Yes. Starter is free for as long as you like, with no card needed. Move up to a paid plan when the business outgrows its limits.",
  },
  {
    q: "What is Chat Lite?",
    a: "Chat Lite is for businesses that run everything from WhatsApp. You create invoices, receipts and records through the Rabbar assistant, with higher limits than Starter, and the web app is view only.",
  },
  {
    q: "Can I pay yearly?",
    a: "Yes. Paid plans can be paid by the year, which costs less than twelve monthly payments; the saving is shown on each plan. Promo codes apply to monthly payments only, because the yearly price is already discounted. We remind you 14 days before a yearly renewal.",
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
    a: "Yes, in the app. An upgrade takes effect straight away and you pay for the new plan from that day; a downgrade takes effect at the end of the period you've paid for. If you've paid for a year, talk to us to change plan before the year ends.",
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

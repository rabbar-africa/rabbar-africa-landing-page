import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ, FinalCTA } from "@/components/platform";
import { PlanCards } from "@/components/pricing/PlanCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { BILLING_FAQS } from "@/data/pricing";
import { UMBRELLA_NAME } from "@/data/products";
import { enterpriseLink } from "@/data/constant";
import { getPlans, planOffers } from "@/lib/plans";

// Plans and prices come from the backend: rebuild the page at most once an
// hour. A literal, because Next reads it at build time; keep it equal to
// PLANS_REVALIDATE_SECONDS in src/lib/plans.ts.
export const revalidate = 3600;

const SITE_URL = "https://www.rabbar.africa";
const title = "Pricing — Job Card Software & WhatsApp Invoicing";
const description = `${UMBRELLA_NAME} plans and prices, monthly or yearly: start free, then pay per business for more job cards, invoices and receipts on WhatsApp, vehicle inspection reports and paperwork tracking. Compare every plan.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing", type: "website" },
};

const TRUST = [
  "Free plan, no card needed",
  "Pay monthly or yearly",
  "Cancel any time",
  "Secure payments by Paystack",
];

export default async function PricingPage() {
  const plans = await getPlans();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: UMBRELLA_NAME,
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, WhatsApp",
        offers: planOffers(plans),
      },
      {
        "@type": "FAQPage",
        mainEntity: BILLING_FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main>
        <section className="bg-[#001F3E]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#DAE648]">
              Pricing
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Simple pricing that grows with your business.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-300 leading-relaxed">
              Every plan has job cards, invoices and receipts on WhatsApp,
              inspection reports and paperwork tracking. Start free, and pay per
              business, not per job, when you need more.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              {TRUST.map((point) => (
                <li key={point} className="inline-flex items-center gap-2">
                  <Check
                    size={16}
                    className="text-[#DAE648]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white pb-20 sm:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <PlanCards plans={plans} contactLink={enterpriseLink} />
          </div>
        </section>

        <section
          id="compare"
          className="bg-white border-t border-gray-200 py-20 sm:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
              Compare all plans.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              What each plan includes, side by side.
            </p>
            <div className="mt-10">
              <ComparisonTable plans={plans} contactLink={enterpriseLink} />
            </div>
          </div>
        </section>

        <FAQ items={BILLING_FAQS} heading="Billing questions." />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

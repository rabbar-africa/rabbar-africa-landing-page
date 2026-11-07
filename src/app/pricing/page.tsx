import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ, FinalCTA, PlanCards } from "@/components/platform";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { BILLING_FAQS } from "@/data/pricing";
import { UMBRELLA_NAME } from "@/data/products";

const title = "Pricing — Job Card Software & WhatsApp Invoicing";
const description = `${UMBRELLA_NAME} plans and prices: start free, then pay per business for unlimited job cards, invoices and receipts on WhatsApp, vehicle inspection reports and paperwork tracking. Compare every feature.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BILLING_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const TRUST = [
  "Cancel any time",
  "Secure payments by Paystack",
  "Support on WhatsApp",
];

export default function PricingPage() {
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
              Start free. Pay per business, not per job, when you need unlimited
              job cards, inspection reports, paperwork tracking and your own
              branding on every invoice and receipt.
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
            <PlanCards />
          </div>
        </section>

        <section
          id="compare"
          className="bg-white border-t border-gray-200 py-20 sm:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
              Compare all features.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Everything in each plan, side by side.
            </p>
            <div className="mt-10">
              <ComparisonTable />
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

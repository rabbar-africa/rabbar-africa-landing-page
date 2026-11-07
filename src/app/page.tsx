import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  FAQ,
  FAQS,
  Features,
  FinalCTA,
  PainPoints,
  Pillars,
  PlatformHero,
  Pricing,
  WhatsAppInvoice,
  WhoItsFor,
} from "@/components/platform";
import {
  CrossLinks,
  PLATFORM_CROSS_LINKS,
} from "@/components/umbrella/CrossLinks";
import { COMPANY } from "@/data/legal";
import { UMBRELLA_NAME } from "@/data/products";

/**
 * Lead with what ranks: "job card" is where Rabbar wins searches, while plain
 * "invoicing" is crowded. Keep job cards, WhatsApp invoices and receipts,
 * vehicle inspection reports and paperwork management in the title and
 * description.
 */
const title = `${UMBRELLA_NAME} — Job Card Software, WhatsApp Invoices & Vehicle Inspection Reports`;
const description =
  "Digital job cards, invoices and receipts on WhatsApp, branded vehicle inspection report PDFs and vehicle paperwork management. Built for Nigerian mechanics and workshops, and used by laundries, solar installers, electricians and tailors. Free to start.";

export const metadata: Metadata = {
  // `absolute` so the layout's "| Rabbar Africa" template isn't appended.
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "website" },
};

const SITE_URL = "https://rabbar.africa";

/**
 * Structured data for search engines and AI assistants: what the product is,
 * that it is free to start, and the FAQ answers, word for word.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: UMBRELLA_NAME,
      legalName: COMPANY.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "49 Akinwunmi Street, Alagomeji, Yaba",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: UMBRELLA_NAME,
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, WhatsApp",
      description,
      featureList: [
        "Digital job cards with status, priority, technicians and profit per job",
        "Invoices and receipts from a WhatsApp message",
        "Vehicle inspection checklists and branded inspection report PDFs with AI-drafted advisories",
        "Vehicle paperwork management with expiry tracking",
        "Payments, receipts, debtors and expenses",
      ],
      offers: {
        "@type": "Offer",
        name: "Starter",
        price: "0",
        priceCurrency: "NGN",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function Home() {
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
        <PlatformHero />
        <Pillars />
        <WhoItsFor />
        <WhatsAppInvoice />
        <PainPoints />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <CrossLinks
          heading={`Also from ${UMBRELLA_NAME}`}
          links={PLATFORM_CROSS_LINKS}
        />
      </main>

      <Footer />
    </div>
  );
}

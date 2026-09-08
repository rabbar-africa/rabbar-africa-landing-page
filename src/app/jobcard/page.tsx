import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import {
  CrossLinks,
  JOBCARD_CROSS_LINKS,
} from "@/components/umbrella/CrossLinks";
import {
  CredibilityStrip,
  FAQ,
  Features,
  FinalCTA,
  ForTechnicians,
  PainPoints,
  Pricing,
  SoftwareHero,
} from "@/components/software";

const { name, slug } = PRODUCTS.jobcard;

export const metadata: Metadata = {
  title: `${name} — Workshop Management Software for Nigerian Garages | ${UMBRELLA_NAME}`,
  description: `${name} handles job cards, photo-backed inspections with AI-drafted advisories, branded invoices and profit on every car. Built for Nigerian workshops, and used every day in our own Lagos garage.`,
  alternates: { canonical: slug },
  openGraph: {
    title: `${name} — Workshop Management Software for Nigerian Garages`,
    description: PRODUCTS.jobcard.pitch,
    url: slug,
    type: "website",
  },
};

export default function JobcardPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <SoftwareHero />
        <CredibilityStrip />
        <PainPoints />
        <Features />
        <ForTechnicians />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <CrossLinks links={JOBCARD_CROSS_LINKS} />
      </main>

      <Footer />
    </div>
  );
}

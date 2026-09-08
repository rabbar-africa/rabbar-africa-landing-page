import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import {
  CrossLinks,
  FLEET_CROSS_LINKS,
} from "@/components/umbrella/CrossLinks";
import {
  FleetCTA,
  FleetHero,
  FleetIncluded,
  FleetProblems,
  FleetWhoAndHow,
  FleetWhy,
} from "@/components/fleet/FleetSections";

const { name, slug } = PRODUCTS.fleet;

export const metadata: Metadata = {
  title: `${name} — Corporate Fleet Maintenance & Management in Lagos | ${UMBRELLA_NAME}`,
  description:
    "Scheduled maintenance, repairs, compliance and reporting for company vehicles in Lagos. One accountable partner, itemised and approved work, and a proper record for every vehicle.",
  alternates: { canonical: slug },
  openGraph: {
    title: `${name} — Corporate Fleet Maintenance & Management`,
    description: PRODUCTS.fleet.pitch,
    url: slug,
    type: "website",
  },
};

export default function FleetPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <FleetHero />
        <FleetProblems />
        <FleetIncluded />
        <FleetWhy />
        <FleetWhoAndHow />
        <FleetCTA />
        <CrossLinks links={FLEET_CROSS_LINKS} />
      </main>

      <Footer />
    </div>
  );
}

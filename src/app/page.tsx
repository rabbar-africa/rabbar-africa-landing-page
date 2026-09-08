import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OSHero } from "@/components/umbrella/OSHero";
import { ProductCards } from "@/components/umbrella/ProductCards";
import { HowItFits, UmbrellaCTA, WhyUs } from "@/components/umbrella/HowItFits";
import { UMBRELLA_NAME } from "@/data/products";

export const metadata: Metadata = {
  title: `${UMBRELLA_NAME} — The Operating System for Auto in Nigeria`,
  description:
    "Software for workshops, a workshop of our own, and fleet management for companies. Rabbar Africa builds and runs all three from Lagos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${UMBRELLA_NAME} — The Operating System for Auto in Nigeria`,
    description:
      "Software for workshops, a workshop of our own, and fleet management for companies.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <OSHero />
        <ProductCards />
        <HowItFits />
        <WhyUs />
        <UmbrellaCTA />
      </main>

      <Footer />
    </div>
  );
}

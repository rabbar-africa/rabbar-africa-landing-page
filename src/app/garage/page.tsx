import type { Metadata } from "next";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About, BlogSection, Contact, Hero, Services } from "@/components/home";
import {
  CrossLinks,
  GARAGE_CROSS_LINKS,
} from "@/components/umbrella/CrossLinks";

export const metadata: Metadata = {
  title: `${PRODUCTS.garage.name} — Car Repair, Servicing & Documentation in Lagos | ${UMBRELLA_NAME}`,
  description:
    "Rabbar Africa's own Lagos workshop — repairs, maintenance, vehicle documentation and insurance. The workshop Rabbar's software was built in and is used in every day.",
  alternates: {
    canonical: PRODUCTS.garage.slug,
  },
};

export default function GaragePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />
      <Services />
      <About />
      <BlogSection />
      <Contact />

      <CrossLinks links={GARAGE_CROSS_LINKS} />

      <Footer />
    </div>
  );
}

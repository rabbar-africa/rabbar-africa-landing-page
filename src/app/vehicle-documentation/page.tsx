import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  VehicleDocHero,
  DocumentServices,
  DocumentBenefits,
  DocumentProcess,
  DocumentTestimonials,
  DocumentCTA,
} from "@/components/vehicle-documentation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Documentation Services in Lagos - Fast & Reliable",
  description:
    "Get all your Lagos vehicle paperwork done hassle-free. Vehicle license renewal, insurance, proof of ownership, driver's license, hackney permit & more. 100% legitimate, fast processing.",
  keywords: [
    "vehicle documentation Lagos",
    "vehicle license renewal Lagos",
    "car insurance Nigeria",
    "driver's license renewal",
    "hackney permit Lagos",
    "proof of ownership Nigeria",
    "vehicle paperwork Lagos",
    "car documentation services",
    "Lagos vehicle registration",
    "number plate Nigeria",
    "change of ownership Lagos",
  ],
  openGraph: {
    title: "Vehicle Documentation Services in Lagos - Rabbar Africa",
    description:
      "Skip the queues! Get vehicle license, insurance, driver's license & all paperwork processed in 24hrs. 47+ documents processed. 98% success rate.",
    url: "https://rabbarafrica.com/vehicle-documentation",
    siteName: "Rabbar Africa",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Documentation Services in Lagos - Rabbar Africa",
    description:
      "Fast & reliable vehicle paperwork services. License renewal, insurance, permits & more. WhatsApp us today!",
  },
  alternates: {
    canonical: "https://rabbarafrica.com/vehicle-documentation",
  },
};

export default function VehicleDocumentation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Documentation Services",
    provider: {
      "@type": "Organization",
      name: "Rabbar Africa",
      url: "https://rabbarafrica.com",
      logo: "https://rabbarafrica.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-916-000-2836",
        contactType: "Customer Service",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    },
    serviceType: "Vehicle Documentation",
    areaServed: {
      "@type": "State",
      name: "Lagos",
      "@id": "https://en.wikipedia.org/wiki/Lagos_State",
    },
    description:
      "Professional vehicle documentation services in Lagos including license renewal, insurance, proof of ownership, driver's license, and hackney permits.",
    offers: [
      {
        "@type": "Offer",
        name: "Vehicle License Renewal",
        price: "15000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "Vehicle Insurance",
        price: "25000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "Proof of Ownership",
        price: "50000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "Driver's License Renewal",
        price: "20000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "Hackney Permit",
        price: "35000",
        priceCurrency: "NGN",
      },
      {
        "@type": "Offer",
        name: "Number Plate",
        price: "30000",
        priceCurrency: "NGN",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rabbarafrica.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vehicle Documentation",
        item: "https://rabbarafrica.com/vehicle-documentation",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <VehicleDocHero />
      <DocumentServices />
      <DocumentBenefits />
      <DocumentProcess />
      <DocumentTestimonials />
      <DocumentCTA />

      <Footer />
    </div>
  );
}

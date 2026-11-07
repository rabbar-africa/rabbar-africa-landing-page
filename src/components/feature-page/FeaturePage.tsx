import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  FAQ,
  FeatureBlock,
  FinalCTA,
  PhoneShot,
  StartLink,
  type Feature,
} from "@/components/platform";
import { platformDemoLink } from "@/data/constant";
import { FEATURE_PAGES } from "@/data/feature-pages";

const SITE_URL = "https://www.rabbar.africa";

interface ImageSpec {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeaturePageProps {
  /** This page's path, e.g. "/jobcard". */
  path: string;
  /** Breadcrumb and eyebrow label, e.g. "Job card software". */
  eyebrow: string;
  /** The page's single H1. Lead with the search phrase. */
  heading: string;
  intro: string;
  heroImage: ImageSpec;
  /** Optional phone shot, overlapping the hero image on wide screens. */
  heroPhone?: { src: string; alt: string };
  /** H2 above the feature blocks. */
  sectionsHeading: string;
  sections: Feature[];
  /** Anything page-specific, rendered after the hero (e.g. the chat mock). */
  children?: ReactNode;
  faqHeading: string;
  faqs: { q: string; a: string }[];
}

const PROMISES = ["Free to start", "No card needed", "Works on your phone"];

/**
 * Shared layout for the feature pages (/jobcard, /whatsapp-invoicing, ...).
 * Each page has its own URL, title, H1, FAQs and structured data so it can
 * rank on its own search terms, and links to the other three.
 */
export function FeaturePage({
  path,
  eyebrow,
  heading,
  intro,
  heroImage,
  heroPhone,
  sectionsHeading,
  sections,
  children,
  faqHeading,
  faqs,
}: FeaturePageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Rabbar Africa",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: eyebrow,
            item: `${SITE_URL}${path}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
  const related = FEATURE_PAGES.filter((p) => p.href !== path);

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
        <section className="relative bg-[#001F3E] overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#DAE648]/10 blur-3xl"
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
              <Link href="/" className="hover:text-white">
                Rabbar Africa
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-[#DAE648]">{eyebrow}</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="mt-5 text-4xl sm:text-5xl font-display font-bold text-white leading-[1.08] tracking-tight">
                {heading}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                {intro}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <StartLink className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#DAE648] px-7 py-3.5 font-semibold text-[#001F3E] transition-all hover:bg-[#E8F34F] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAE648] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3E]">
                  Get started free
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </StartLink>
                <a
                  href={platformDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Talk to us on WhatsApp
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                {PROMISES.map((promise) => (
                  <li key={promise} className="inline-flex items-center gap-2">
                    <Check
                      size={16}
                      className="text-[#DAE648]"
                      aria-hidden="true"
                    />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-14 sm:mt-16 lg:pr-24">
              <div className="rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-2xl">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  priority
                  sizes="(max-width: 1023px) 100vw, 1000px"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              {heroPhone && (
                <PhoneShot
                  src={heroPhone.src}
                  alt={heroPhone.alt}
                  className="hidden lg:block absolute -bottom-10 right-0 w-56"
                />
              )}
            </div>
          </div>
        </section>

        {children}

        <section className="bg-[#F4F4F4] py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
              {sectionsHeading}
            </h2>
            <div className="mt-16 space-y-20 sm:space-y-24">
              {sections.map((feature, i) => (
                <FeatureBlock key={feature.id} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faqs} heading={faqHeading} />

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#013064]">
              Also in Rabbar
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group rounded-xl border border-gray-200 bg-[#F4F4F4]/60 p-6 transition-all hover:border-[#001F3E] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
                >
                  <h3 className="font-semibold text-[#001F3E]">{page.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {page.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#013064]">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-gray-600">
              See every plan and compare features on the{" "}
              <Link
                href="/pricing"
                className="font-semibold text-[#013064] underline underline-offset-4"
              >
                pricing page
              </Link>
              .
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

/** Open Graph image for a feature page: its own product screenshot. */
export const ogImage = (img: ImageSpec) => ({
  url: img.src,
  width: img.width,
  height: img.height,
  alt: img.alt,
});

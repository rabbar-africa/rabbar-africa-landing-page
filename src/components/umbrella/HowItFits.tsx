"use client";

import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { contactEmail, softwareDemoLink } from "@/data/constant";
import {
  HoverLift,
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/ui/motion";

const STEPS = [
  {
    n: "01",
    title: "We run a workshop",
    body: "Repairs, servicing, revamping and vehicle documentation out of Yaba, Lagos. Real cars, real customers, every day.",
    accent: PRODUCTS.garage.accent,
    href: PRODUCTS.garage.slug,
    link: PRODUCTS.garage.name,
  },
  {
    n: "02",
    title: "We built the software to run it",
    body: "Job cards, inspections, invoices and per-job profit. What started as our own tooling is now sold to other workshops.",
    accent: PRODUCTS.jobcard.accent,
    href: PRODUCTS.jobcard.slug,
    link: PRODUCTS.jobcard.name,
  },
  {
    n: "03",
    title: "We offer the whole operation",
    body: "Companies with vehicles hand us the fleet. Same workshop, same system, run as a managed service.",
    accent: PRODUCTS.fleet.accent,
    href: PRODUCTS.fleet.slug,
    link: PRODUCTS.fleet.name,
  },
];

export function HowItFits() {
  return (
    <section className="relative bg-[#F4F4F4] py-20 sm:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#013064]">
            How it fits together
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F3E] tracking-[-0.02em]">
            One company, built in order
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Nothing here was designed in a meeting room. Each product came out
            of the one before it.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <RevealItem key={step.n} className="h-full">
              <HoverLift>
                <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-7">
                  <span
                    className="font-display text-4xl font-bold"
                    style={{ color: step.accent.hex }}
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#001F3E]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-gray-600 leading-relaxed">
                    {step.body}
                  </p>
                  <Link
                    href={step.href}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#001F3E] hover:text-[#013064] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm"
                  >
                    {step.link}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </HoverLift>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

const PROOF = [
  {
    icon: MapPin,
    title: "Lagos, Island and Mainland",
    body: "Workshops on both sides of the city, so a car never crosses Lagos for routine work.",
  },
  {
    icon: Sparkles,
    title: "Software we actually use",
    body: "Jobcard runs our own workshop before it runs anyone else's. Every feature earned its place on a real job.",
  },
  {
    icon: Users,
    title: "Technicians, not just developers",
    body: "The people who diagnose the cars and the people who build the software work for the same company.",
  },
  {
    icon: ShieldCheck,
    title: "A registered Nigerian company",
    body: "Rabbar Africa Ltd, RC 8468516, headquartered in Yaba, Lagos.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-[#001F3E] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#DAE648]">
              Why Rabbar
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em]">
              A workshop that writes software, not the other way round
            </h2>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Most workshop software is built by people who have never quoted a
              gearbox or argued with a customer about a fault. Ours is built
              between jobs, by the people doing them.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROOF.map(({ icon: Icon, title, body }) => (
              <RevealItem key={title}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DAE648]">
                    <Icon
                      size={19}
                      className="text-[#001F3E]"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

export function UmbrellaCTA() {
  return (
    <section className="relative overflow-hidden bg-[#DAE648]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/25 blur-3xl"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F3E] tracking-[-0.02em]">
            Whichever one you came for, start with a conversation
          </h2>
          <p className="mt-5 text-lg text-[#013064] max-w-2xl mx-auto leading-relaxed">
            A workshop to run, a car to fix, or a fleet to hand over, message us
            and we&apos;ll point you at the right one.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={softwareDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#001F3E] px-8 py-4 font-semibold text-white transition-all hover:bg-[#013064] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DAE648]"
            >
              Message us on WhatsApp
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#001F3E]/25 px-8 py-4 font-semibold text-[#001F3E] transition-colors hover:border-[#001F3E]/50 hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E]"
            >
              Email us
            </a>
          </div>
          {/* <p className="mt-6 text-sm font-medium text-[#013064]">
            +234 916 000 2836 · Yaba, Lagos
          </p> */}
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";
import { contactEmail, fleetProposalLink } from "@/data/constant";

export function FleetHero() {
  return (
    <section className="relative bg-[#001F3E] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#DAE648]/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#DAE648]">
          {PRODUCTS.fleet.name}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-display font-bold text-white leading-[1.1] tracking-tight">
          Your vehicles, maintained on a schedule and on the record
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed">
          Most organisations manage vehicles reactively: a car breaks down,
          someone finds a mechanic, a repair is paid for, and there is no record
          of what was done or why. We replace that with a single accountable
          partner.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a
            href={fleetProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DAE648] px-7 py-3.5 font-semibold text-[#001F3E] transition-all hover:bg-[#E8F34F] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAE648] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3E]"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Request a proposal
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = [
  {
    title: "Unpredictable downtime",
    body: "Vehicles break down without warning because maintenance only happens after something has already gone wrong. A car is needed and it is simply not available.",
  },
  {
    title: "No single point of accountability",
    body: "Different vehicles go to different mechanics. Nobody owns the overall condition of the fleet, so problems slip through the cracks.",
  },
  {
    title: "Costs that cannot be verified",
    body: "Bills arrive with no way to confirm the work was necessary or the parts genuine, and without service history the same fault gets paid for twice.",
  },
  {
    title: "Administrative burden on your staff",
    body: "Your people lose time sourcing mechanics, chasing quotes and approving repairs — time that should go to their actual work.",
  },
];

export function FleetProblems() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            The problems we solve
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            These are the issues we see most often across corporate fleets in
            Lagos. Every one comes back to the same root cause: there is no
            system and no proper record.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-[#F4F4F4]/60 p-6"
            >
              <h3 className="font-semibold text-[#001F3E] text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const INCLUDED = [
  {
    icon: Wrench,
    title: "Routine and preventive maintenance",
    body: "Servicing, oil, filters, brakes, tyres, batteries and related work, scheduled rather than reactive.",
  },
  {
    icon: ClipboardCheck,
    title: "Diagnostics and repairs",
    body: "Computerised diagnostics, fault resolution, and corrective and accident repairs.",
  },
  {
    icon: FileCheck2,
    title: "Documentation and compliance",
    body: "Roadworthiness, insurance and vehicle paperwork tracked with expiry dates, so renewals are handled before they lapse.",
  },
  {
    icon: Truck,
    title: "Breakdown, towing and recovery",
    body: "Response within Lagos, with pickup and delivery of vehicles from your office scheduled around your operations.",
  },
  {
    icon: ShieldCheck,
    title: "Health checks and condition reporting",
    body: "Regular checks on every vehicle, with faults flagged early rather than after they become expensive.",
  },
  {
    icon: Building2,
    title: "One account manager",
    body: "A single dedicated contact for everything fleet-related, plus a written monthly fleet status and cost report.",
  },
];

export function FleetIncluded() {
  return (
    <section className="bg-[#F4F4F4] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            What&apos;s included
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            You hand us the vehicle and we handle everything — one partner, one
            contact. Work is itemised and approved by you before it begins.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDED.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#001F3E]">
                <Icon size={20} className="text-[#DAE648]" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-[#001F3E]">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FleetWhy() {
  return (
    <section className="bg-[#001F3E] py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Why {UMBRELLA_NAME}
        </h2>
        <div className="mt-8 space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            This is where we differ from an ordinary workshop. The same system
            we built to run our own garage —{" "}
            <Link
              href={PRODUCTS.jobcard.slug}
              className="font-semibold text-[#DAE648] underline underline-offset-4 hover:text-[#E8F34F]"
            >
              {PRODUCTS.jobcard.name}
            </Link>{" "}
            — is the operational backbone behind the service. Every vehicle, its
            service history, its next service due and its condition sit on a
            record rather than in someone&apos;s head.
          </p>
          <p>
            That means you get real visibility of your fleet: what has been done
            to each vehicle, what it costs to run, and which faults were caught
            early. It also means we are not a loose network of mechanics — there
            is a real system behind the work, and a single team accountable for
            it.
          </p>
          <p>
            We operate workshops on both the Island and the Mainland, so your
            vehicles do not cross Lagos for routine work.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="font-semibold text-white text-lg">
            Cost control you can verify
          </h3>
          <ul className="mt-4 space-y-2.5 text-gray-300">
            <li>
              No work begins without an itemised quotation approved by your
              authorised officer.
            </li>
            <li>
              Genuine or manufacturer-approved parts, and we tell you in advance
              if one is unavailable.
            </li>
            <li>
              Every part we remove is returned to you or held for your
              inspection.
            </li>
            <li>
              Consolidated monthly invoicing, so your finance team reconciles
              once.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const AUDIENCES = [
  "Banks and financial institutions with pool and executive vehicles",
  "Insurance companies managing their own fleets",
  "Corporates running staff, sales or logistics vehicles in Lagos",
];

const STEPS = [
  {
    n: "1",
    title: "A short conversation",
    body: "Twenty minutes with your team to understand how your fleet is run today, how many vehicles are involved, and where the pain actually is. Nothing is committed.",
  },
  {
    n: "2",
    title: "A free health assessment",
    body: "We assess a small number of your vehicles at no cost and give you a written report on each: condition, faults found, what is urgent, and what it would cost to put right. You keep the report either way.",
  },
  {
    n: "3",
    title: "A trial group of vehicles",
    body: "Assign us a small group for an agreed period at normal commercial rates, so you can judge our turnaround and reporting on real work before committing further.",
  },
  {
    n: "4",
    title: "Full fleet management",
    body: "Once the arrangement has proved itself, we take on the rest of the fleet under a formal service agreement.",
  },
];

export function FleetWhoAndHow() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            Who it&apos;s for
          </h2>
          <ul className="mt-6 space-y-3">
            {AUDIENCES.map((a) => (
              <li key={a} className="flex items-start gap-3 text-gray-700">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DAE648]"
                />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            How we start
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            We are not asking you to hand over a fleet on the strength of a web
            page. We would suggest a staged approach.
          </p>

          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, body }) => (
              <li
                key={n}
                className="rounded-xl border border-gray-200 bg-[#F4F4F4]/60 p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DAE648] font-bold text-[#001F3E]">
                  {n}
                </span>
                <h3 className="mt-4 font-semibold text-[#001F3E]">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function FleetCTA() {
  return (
    <section className="bg-[#DAE648]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
          Tell us about your fleet
        </h2>
        <p className="mt-4 text-lg text-[#013064] max-w-2xl mx-auto">
          Send us the size and shape of it and we&apos;ll put a written proposal
          together, including a rate card and the standards we would work to.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={fleetProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#001F3E] px-8 py-4 font-semibold text-white transition-all hover:bg-[#013064] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DAE648]"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Request a proposal
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#001F3E]/25 px-8 py-4 font-semibold text-[#001F3E] transition-colors hover:border-[#001F3E]/50 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E]"
          >
            Email us
          </a>
        </div>
        <p className="mt-6 text-sm text-[#013064]">+234 916 000 2836</p>
      </div>
    </section>
  );
}

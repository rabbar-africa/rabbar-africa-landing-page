import Image from "next/image";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { platformDemoLink } from "@/data/constant";
import { StartLink } from "./StartLink";

const PROMISES = ["Free to start", "No card needed", "Works on your phone"];

export function PlatformHero() {
  return (
    <section id="hero" className="relative bg-[#001F3E] overflow-hidden">
      {/* Accent wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#DAE648]/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-[#DAE648]">
            Job card software for Nigerian businesses
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            Run every job on a job card.{" "}
            <span className="text-[#DAE648]">Get paid on WhatsApp.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Digital job cards, invoices and receipts on WhatsApp, branded
            vehicle inspection reports and paperwork management, in one app.
            Built in our own Lagos workshop for mechanics, and used by
            laundries, solar installers, electricians and tailors too.
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

        {/* Product shot */}
        <div className="mt-14 sm:mt-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-2xl">
            <Image
              src="/product/dashboard-full.png"
              alt="The Rabbar dashboard with job cards, inspections, paperwork and invoices in the menu, showing amounts invoiced, net profit, overdue and top debtors"
              width={1800}
              height={913}
              priority
              sizes="(max-width: 1023px) 100vw, 1100px"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

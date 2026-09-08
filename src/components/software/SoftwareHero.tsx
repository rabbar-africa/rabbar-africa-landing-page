import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { softwareDemoLink } from "@/data/constant";
import { PRODUCTS, UMBRELLA_NAME } from "@/data/products";

export function SoftwareHero() {
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
            {PRODUCTS.jobcard.name}
            <span className="text-gray-400">by {UMBRELLA_NAME}</span>
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            Run your workshop off your phone, not a{" "}
            <span className="text-[#DAE648]">carbon-copy pad</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Job cards, inspections and invoices in one place — and for the first
            time, a straight answer to which car actually made you money.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={softwareDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DAE648] px-7 py-3.5 font-semibold text-[#001F3E] transition-all hover:bg-[#E8F34F] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAE648] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3E]"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Book a Demo on WhatsApp
            </a>

            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              See Features
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Product shot */}
        <div className="mt-14 sm:mt-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-2xl">
            <Image
              src="/product/dashboard.png"
              alt="The Rabbar dashboard showing invoiced, net profit, expenses, overdue, total revenue and customer totals for the last 60 days"
              width={1800}
              height={518}
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

import { ArrowRight, MessageCircle } from "lucide-react";
import { platformDemoLink } from "@/data/constant";
import { COMPANY } from "@/data/legal";
import { StartLink } from "./StartLink";

export function FinalCTA() {
  return (
    <section className="bg-[#DAE648]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
          Open your first job card today
        </h2>
        <p className="mt-4 text-lg text-[#013064] max-w-2xl mx-auto">
          Set up your business in a couple of minutes, then open a job card or
          send an invoice from WhatsApp. Free to start, no card needed. Prefer
          to be walked through it? Message us and we&apos;ll set it up with you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <StartLink className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#001F3E] px-8 py-4 font-semibold text-white transition-all hover:bg-[#013064] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DAE648]">
            Get started free
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </StartLink>

          <a
            href={platformDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#001F3E]/25 px-8 py-4 font-semibold text-[#001F3E] transition-colors hover:border-[#001F3E]/50 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E]"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Talk to us on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-[#013064]">{COMPANY.phone}</p>
      </div>
    </section>
  );
}

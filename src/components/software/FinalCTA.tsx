import { ArrowRight, MessageCircle } from "lucide-react";
import {
  jobcardStartIsApp,
  jobcardStartLink,
  softwareDemoLink,
} from "@/data/constant";
import { PRODUCTS } from "@/data/products";

export function FinalCTA() {
  return (
    <section className="bg-[#DAE648]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
          Start running your workshop on {PRODUCTS.jobcard.name} today
        </h2>
        <p className="mt-4 text-lg text-[#013064] max-w-2xl mx-auto">
          Create your workshop and raise your first job card in minutes. Free to
          start, no card needed. Prefer to be walked through it? Book a demo and
          we&apos;ll set it up with you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={jobcardStartLink}
            {...(jobcardStartIsApp
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#001F3E] px-8 py-4 font-semibold text-white transition-all hover:bg-[#013064] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DAE648]"
          >
            Get started free
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <a
            href={softwareDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#001F3E]/25 px-8 py-4 font-semibold text-[#001F3E] transition-colors hover:border-[#001F3E]/50 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E]"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Book a demo
          </a>
        </div>

        <p className="mt-6 text-sm text-[#013064]">+234 916 000 2836</p>
      </div>
    </section>
  );
}

import { Mail, MessageCircle } from "lucide-react";
import { contactEmail, softwareDemoLink } from "@/data/constant";
import { PRODUCTS } from "@/data/products";

export function FinalCTA() {
  return (
    <section className="bg-[#DAE648]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
          Show us your workshop, we&apos;ll show you {PRODUCTS.jobcard.name}
        </h2>
        <p className="mt-4 text-lg text-[#013064] max-w-2xl mx-auto">
          A short demo over WhatsApp, on your own numbers. No card, no signup
          form — we set the workshop up with you by hand.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={softwareDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#001F3E] px-8 py-4 font-semibold text-white transition-all hover:bg-[#013064] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DAE648]"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Book a Demo on WhatsApp
          </a>

          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#001F3E]/25 px-8 py-4 font-semibold text-[#001F3E] transition-colors hover:border-[#001F3E]/50 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3E]"
          >
            <Mail size={20} aria-hidden="true" />
            Email us instead
          </a>
        </div>

        <p className="mt-6 text-sm text-[#013064]">+234 916 000 2836</p>
      </div>
    </section>
  );
}

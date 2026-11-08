import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

/**
 * The homepage's pointer to /pricing, where the plans and the full feature
 * comparison live. `fromPrice` is the cheapest paid monthly price, read from
 * the backend's plans by the page, so it never disagrees with /pricing.
 */
export function PricingTeaser({ fromPrice }: { fromPrice?: string }) {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#001F3E] px-6 py-10 sm:px-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Free to start.{" "}
              {fromPrice && (
                <span className="text-[#DAE648]">
                  Paid plans from {fromPrice} a month.
                </span>
              )}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-gray-300">
              {[
                "Priced per business, not per job",
                "No card needed to start",
                "Cancel any time",
              ].map((point) => (
                <li key={point} className="inline-flex items-center gap-2">
                  <Check
                    size={16}
                    className="text-[#DAE648]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#DAE648] px-7 py-3.5 font-semibold text-[#001F3E] transition-all hover:bg-[#E8F34F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAE648] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3E]"
          >
            See plans and compare features
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

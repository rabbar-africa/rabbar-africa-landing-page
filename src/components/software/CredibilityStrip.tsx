import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export function CredibilityStrip() {
  return (
    <section className="bg-[#F4F4F4] border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#001F3E]">
              <Wrench size={18} className="text-[#DAE648]" aria-hidden="true" />
            </span>
            <p className="text-[#001F3E] text-base sm:text-lg">
              This isn&apos;t software built by people who have never held a
              spanner. We built it for{" "}
              <strong className="font-semibold">our own Lagos workshop</strong>,
              and it runs there every day.
            </p>
          </div>

          <Link
            href="/workshop"
            className="group inline-flex shrink-0 items-center gap-2 font-semibold text-[#013064] hover:text-[#001F3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm"
          >
            See it running in a real workshop
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

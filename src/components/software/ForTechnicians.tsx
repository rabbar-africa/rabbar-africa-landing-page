import Image from "next/image";
import { Camera, Smartphone, Sparkles, ToggleRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";

const STEPS = [
  {
    icon: Smartphone,
    title: "Open the job card",
    body: "Everything for that car on one screen. No pad, no clipboard.",
  },
  {
    icon: ToggleRight,
    title: "Work the checklist",
    body: "OK, needs fix, or not applicable. Tap through it as you go.",
  },
  {
    icon: Camera,
    title: "Snap two photos",
    body: "Attach them to the finding so nobody argues about it later.",
  },
  {
    icon: Sparkles,
    title: `Let ${PRODUCTS.jobcard.name} write it up`,
    body: "The advisory drafts itself. You read it, fix anything, send it.",
  },
];

export function ForTechnicians() {
  return (
    <section className="bg-[#001F3E] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#DAE648]">
              For your technicians
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Built for the person holding the spanner
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Your techs won&apos;t use software that fights them.{" "}
              {PRODUCTS.jobcard.name} is mobile-first because the work happens
              under a bonnet, not at a desk — and because the advisory that wins
              you the job gets written on the shop floor.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STEPS.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DAE648]">
                    <Icon
                      size={20}
                      className="text-[#001F3E]"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl">
              <Image
                src="/product/inspection-report.png"
                alt="A branded Rabbar vehicle inspection report showing immediate attention, monitor and passed counts alongside per-component findings"
                width={1020}
                height={915}
                sizes="(max-width: 1023px) 100vw, 460px"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-400">
              The report your customer receives — generated from the checklist
              your technician just worked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

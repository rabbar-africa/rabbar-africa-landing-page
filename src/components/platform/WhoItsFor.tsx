import {
  Scissors,
  Store,
  Sun,
  WashingMachine,
  Wrench,
  Zap,
} from "lucide-react";

/** The trades Rabbar is used by today. Keep it to ones we actually serve. */
const TRADES = [
  { icon: Wrench, label: "Mechanics & workshops" },
  { icon: WashingMachine, label: "Laundry & dry cleaning" },
  { icon: Sun, label: "Solar installers" },
  { icon: Zap, label: "Electricians" },
  { icon: Scissors, label: "Tailors & fashion designers" },
  { icon: Store, label: "Any business that sends invoices" },
];

export function WhoItsFor() {
  return (
    <section className="bg-[#F4F4F4] border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#013064]">
          Built in a workshop. Used by businesses like yours
        </p>
        <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRADES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#001F3E]">
                <Icon size={18} className="text-[#DAE648]" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-[#001F3E] leading-snug">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

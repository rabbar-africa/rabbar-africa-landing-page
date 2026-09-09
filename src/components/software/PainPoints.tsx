import {
  AlertTriangle,
  BellRing,
  Camera,
  ClipboardList,
  FileWarning,
  TrendingUp,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

/**
 * Owner's-own-words framing, taken from the product brief's problem table.
 * Their complaint first, the mechanism that answers it second.
 */
const PAINS = [
  {
    icon: TrendingUp,
    quote: "I don't know if this job made money.",
    answer:
      "Parts, sublet, labour and towing attach to the job card and net against the invoice. Profit per car, in real time.",
  },
  {
    icon: AlertTriangle,
    quote: "Customers owe me and I've lost track.",
    answer:
      "Top debtors ranked by days overdue. Carry an old unpaid invoice onto the next visit so the debt physically follows the customer.",
  },
  {
    icon: Camera,
    quote: "The customer says I invented the fault.",
    answer:
      "Photo-backed findings and a branded advisory sent over WhatsApp before work starts. Arguments become approvals.",
  },
  {
    icon: ClipboardList,
    quote: "Which car is where, and what did I promise?",
    answer:
      "A job card board with status, priority, promised date, odometer and the technicians assigned to each car.",
  },
  {
    icon: FileWarning,
    quote: "Their insurance expired and they blame me.",
    answer:
      "Roadworthiness, insurance and full paperwork tracked with scans, renewal history and an expiring-soon view.",
  },
  {
    icon: BellRing,
    quote: "I never get customers back.",
    answer:
      "Service reminders by date or mileage that regenerate the moment you complete one.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            The things that actually keep you up at night
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Not a feature list. These are the sentences we hear from workshop
            owners, and what {PRODUCTS.jobcard.name} does about each one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAINS.map(({ icon: Icon, quote, answer }) => (
            <div
              key={quote}
              className="rounded-xl border border-gray-200 bg-[#F4F4F4]/60 p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#001F3E]">
                <Icon size={20} className="text-[#DAE648]" aria-hidden="true" />
              </span>
              <blockquote className="mt-4 text-lg font-semibold text-[#001F3E] leading-snug">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

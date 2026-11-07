import {
  AlertTriangle,
  Camera,
  ClipboardList,
  FileWarning,
  MessageSquareText,
  TrendingUp,
} from "lucide-react";

/**
 * Owner's-own-words framing: their complaint first, what Rabbar does about it
 * second. Led by the things only Rabbar answers (job cards, inspection
 * reports, paperwork, WhatsApp), then the money questions every business has.
 */
const PAINS = [
  {
    icon: ClipboardList,
    quote: "Which job is where, and what did I promise?",
    answer:
      "Every job gets a job card with its status, priority, promised date and the people working on it. One board shows the whole shop.",
  },
  {
    icon: Camera,
    quote: "The customer says I invented the fault.",
    answer:
      "Photo-backed findings in a branded vehicle inspection report, sent before work starts. Arguments become approvals.",
  },
  {
    icon: FileWarning,
    quote: "Their insurance expired and they blame me.",
    answer:
      "Insurance, vehicle licence and roadworthiness tracked with scans and expiry dates, and an expiring-soon list to work through.",
  },
  {
    icon: MessageSquareText,
    quote: "Writing invoices and receipts takes too long.",
    answer:
      "Send one WhatsApp message and get the invoice PDF back. Record the payment the same way and the receipt follows.",
  },
  {
    icon: AlertTriangle,
    quote: "Customers owe me and I've lost track.",
    answer:
      "Every unpaid invoice in one list, top debtors ranked by how long they've owed, and old balances carried onto the next invoice.",
  },
  {
    icon: TrendingUp,
    quote: "I don't know if this job made money.",
    answer:
      "Attach parts, labour and other costs to the job card, and Rabbar shows the profit on that job as soon as it's paid.",
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
            Not a feature list. These are the things owners tell us, and what
            Rabbar does about each one.
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

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  ClipboardCheck,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

/**
 * The four things Rabbar does that plain invoicing apps don't. This is the
 * page's main SEO block: each heading carries a phrase people search for, so
 * keep "job card", "WhatsApp", "inspection report" and "paperwork" in them.
 */
const PILLARS = [
  {
    icon: ClipboardList,
    title: "Job cards",
    body: "A digital job card for every job: the customer, the complaint, who's on it, the promised date, and the profit when it's done.",
    href: "#job-cards",
  },
  {
    icon: MessageSquareText,
    title: "Invoices and receipts on WhatsApp",
    body: "Type the job in one WhatsApp message and get a branded invoice PDF back. Record the payment the same way and the receipt follows.",
    href: "#whatsapp",
  },
  {
    icon: ClipboardCheck,
    title: "Vehicle inspection reports",
    body: "Work the checklist on a phone, photograph each fault, and send the customer a branded inspection report PDF with an AI-drafted advisory.",
    href: "#inspections",
  },
  {
    icon: ShieldCheck,
    title: "Paperwork management",
    body: "Insurance, vehicle licence, roadworthiness and more, with scans and expiry dates, so nothing lapses before your customer notices.",
    href: "#paperwork",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            Job cards, WhatsApp invoicing, inspection reports and paperwork, in
            one app
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Plenty of apps can make an invoice. Rabbar runs the whole job, from
            the moment a customer walks in to the receipt in their WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,26rem)] gap-10 lg:gap-14 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map(({ icon: Icon, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-xl border border-gray-200 bg-[#F4F4F4]/60 p-6 transition-all hover:border-[#001F3E] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#001F3E]">
                  <Icon
                    size={20}
                    className="text-[#DAE648]"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#001F3E] leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#013064]">
                  See how it works
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <figure>
            <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              <Image
                src="/product/inspection-report.png"
                alt="A branded Rabbar vehicle inspection report PDF showing immediate attention, monitor and passed counts alongside per-component findings"
                width={1020}
                height={915}
                sizes="(max-width: 1023px) 100vw, 416px"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-gray-500">
              The vehicle inspection report your customer receives, generated
              from the checklist your technician just worked.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

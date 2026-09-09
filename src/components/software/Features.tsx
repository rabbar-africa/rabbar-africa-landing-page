import Image from "next/image";
import { Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface Feature {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image?: { src: string; alt: string; width: number; height: number };
}

/**
 * Priority order from the brief: the two genuine differentiators first, then
 * the rest. Every claim here is backed by a shipped module, nothing from the
 * product brief's "not built" list appears.
 */
const FEATURES: Feature[] = [
  {
    id: "advisories",
    eyebrow: "The differentiator",
    title: "AI-drafted inspection advisories",
    body: `Your technician works the checklist on a phone, flags what they find and snaps up to two photos per fault. ${PRODUCTS.jobcard.name} drafts the customer-facing advisory in plain English, what's wrong, and what happens if it's left. The technician reviews and edits it, then sends it over WhatsApp before a single bolt is turned.`,
    points: [
      "Writing an advisory drops from an hour to minutes",
      "Each finding carries its own status, note and photos",
      "Required checklist items block a half-finished inspection",
      "Branded PDF, shared straight to WhatsApp or email",
    ],
    image: {
      src: "/product/inspection-advisory.png",
      alt: "An inspection in Rabbar showing a safety-critical O2 sensor advisory explaining the fault and its consequences, above a brakes checklist",
      width: 1800,
      height: 625,
    },
  },
  {
    id: "profit",
    eyebrow: "The owner's number",
    title: "Profit on every single job",
    body: `Attach expenses, parts, sublet, labour, consumables, towing, to the job card as you incur them. ${PRODUCTS.jobcard.name} nets them against what you invoiced and what you actually collected, so the profit on that car is sitting there on the job card. No spreadsheet, no month-end guesswork.`,
    points: [
      "Invoiced, collected, outstanding, expenses and profit per job",
      "Expense categories built for a workshop, not an office",
      "Rolls up into a net-profit figure and a 12-month trend",
    ],
    image: {
      src: "/product/job-card-profit.png",
      alt: "A delivered job card in Rabbar showing invoiced, collected, outstanding, expenses and profit figures",
      width: 1800,
      height: 525,
    },
  },
  {
    id: "job-cards",
    eyebrow: "The workshop floor",
    title: "A job card board that matches how the shop runs",
    body: "Every car gets a job card: the complaint in the customer's own words, diagnosis notes, odometer in and out, and a promised date you can be held to. Move it through the pipeline as work happens, and assign as many technicians as the job needs with one flagged as lead.",
    points: [
      "Open → In Progress → Awaiting Approval → Awaiting Parts → Completed → Delivered",
      "Low, normal, high and urgent priority",
      "Invoices, payments, inspections, expenses and files all hang off the job",
      "Job numbers from your own numbering series",
    ],
    image: {
      src: "/product/job-card-tabs.png",
      alt: "A Rabbar job card showing linked invoices, payments, inspections and expenses, with two technicians assigned and one marked as lead",
      width: 1800,
      height: 719,
    },
  },
  {
    id: "invoicing",
    eyebrow: "Getting paid",
    title: "Invoices that look like a business, not a market receipt",
    body: "Your logo, your colours, your bank details and your own numbering series on every PDF. Share to WhatsApp or email in a tap. And for the customer who still owes you from last time, carry that old invoice forward onto the new one, the balance follows them, and a payment clears the oldest debt first.",
    points: [
      "Line items pulled from your parts and services catalogue",
      "Discounts, taxes and adjustments at item or invoice level",
      "Carried-forward invoices for repeat debtors",
      "Write-off and cancel write-off for bad debt",
      "Cash, transfer, card, cheque and POS payments with receipts",
    ],
    image: {
      src: "/product/invoice-pdf.png",
      alt: "A branded Rabbar invoice PDF with line items, discount, VAT, balance due and bank details",
      width: 1100,
      height: 1332,
    },
  },
  {
    id: "paperwork",
    eyebrow: "Very Nigerian",
    title: "Paperwork that expires before your customer notices",
    body: "Roadworthiness, insurance, full paperwork or any document type you define. Store the scans, record issue and expiry dates, and work the expiring-soon view. When a document is renewed, the old one is kept as history rather than overwritten.",
    points: [
      "Valid, expiring soon, expired and no-expiry states computed for you",
      "Multiple scans per document",
      "Renewal history snapshotted on every renewal",
    ],
  },
  {
    id: "reminders",
    eyebrow: "Getting them back",
    title: "Reminders by date or by mileage",
    body: "The easiest money in a workshop is the customer who comes back. Set a service reminder for three months' time or three thousand kilometres, whichever the car reaches first, and complete it to have the next one generated automatically.",
    points: [
      "Service, follow-up, paperwork and insurance reminders",
      "Recurring intervals in months, days or mileage",
      "Overdue flags and days-until-due computed server-side",
    ],
  },
  {
    id: "roles",
    eyebrow: "Control",
    title: "Decide exactly what your service advisor sees",
    body: `${PRODUCTS.jobcard.name} doesn't ship three fixed roles. You build them, ticking a grid of what each role can create, read, update and delete. Your front desk can raise invoices without ever seeing your profit margins. Invite your team by email, and deactivate someone without deleting their history.`,
    points: [
      "Permissions across job cards, invoices, expenses, clients and more",
      "Technicians can be records without being login users",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[#F4F4F4] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            What you get
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every screen below is the real product, running in a real workshop.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {FEATURES.map((feature, i) => (
            <FeatureBlock key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const { eyebrow, title, body, points, image } = feature;
  // Alternate which side the screenshot sits on, for rhythm down the page.
  const imageFirst = index % 2 === 1;

  const copy = (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[#013064]">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-[#001F3E] tracking-tight">
        {title}
      </h3>
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">{body}</p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <Check
              size={18}
              className="mt-1 shrink-0 text-[#049020]"
              aria-hidden="true"
            />
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (!image) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 sm:p-10">
        <div className="max-w-3xl">{copy}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div className={imageFirst ? "lg:order-2" : undefined}>{copy}</div>
      <div className={imageFirst ? "lg:order-1" : undefined}>
        <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1023px) 100vw, 560px"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

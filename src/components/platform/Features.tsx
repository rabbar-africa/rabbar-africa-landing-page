import Image from "next/image";
import { Check } from "lucide-react";

export interface Feature {
  /** Anchor id: the nav and the pillars section link to these. */
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image?: { src: string; alt: string; width: number; height: number };
}

/**
 * The four things that set Rabbar apart come first: job cards, invoices and
 * receipts on WhatsApp, vehicle inspection reports and paperwork management.
 * Plain invoicing has plenty of competitors; these don't. Headings use the
 * words people search for ("job card", "inspection report", "WhatsApp
 * invoice"), so keep them when editing.
 *
 * Every claim here is backed by a shipped module.
 */
const FEATURES: Feature[] = [
  {
    id: "job-cards",
    eyebrow: "Job cards",
    title: "A digital job card for every job",
    body: "Open a job card the moment work comes in: the customer, the complaint in their own words, diagnosis notes, the promised date and who is working on it. For a car, add the vehicle and odometer reading. Move it from open to delivered as work happens, and everything for that job, from invoices and payments to inspections, expenses and photos, stays on the job card.",
    points: [
      "Open, in progress, awaiting approval, awaiting parts, completed and delivered",
      "Low, normal, high and urgent priority",
      "Assign several technicians, with one marked as lead",
      "Your own job card numbers",
    ],
    image: {
      src: "/product/job-card-tabs.png",
      alt: "A Rabbar job card with linked invoices, payments, inspections and expenses, and two technicians assigned with one marked as lead",
      width: 1800,
      height: 719,
    },
  },
  {
    id: "job-profit",
    eyebrow: "Profit per job",
    title: "See the profit on every job card",
    body: "Attach parts, labour, sublet work, towing and other costs to the job card as you spend them. Rabbar sets them against what you invoiced and what you collected, so the profit on that job is right there on the job card. No spreadsheet, no month-end guesswork.",
    points: [
      "Invoiced, collected, outstanding, expenses and profit per job",
      "Rolls up into net profit and a 12-month trend on the dashboard",
    ],
    image: {
      src: "/product/job-card-profit.png",
      alt: "A delivered job card in Rabbar showing invoiced, collected, outstanding, expenses and profit figures",
      width: 1800,
      height: 525,
    },
  },
  {
    id: "inspections",
    eyebrow: "Vehicle inspection reports",
    title: "Vehicle inspection reports your customers trust",
    body: "Work through the inspection checklist on a phone, mark each item OK or needs fixing, and attach photos of every fault. Rabbar uses AI to draft the customer advisory in plain English: what's wrong, and what happens if it's left. The technician checks it, and the customer gets a branded inspection report PDF before work starts.",
    points: [
      "A full vehicle inspection checklist, with your own items added",
      "Photos and notes on every finding",
      "AI-drafted advisories, always reviewed by the technician",
      "A branded inspection report PDF, shared to WhatsApp or email",
    ],
    image: {
      src: "/product/inspection-advisory.png",
      alt: "A vehicle inspection in Rabbar showing a safety-critical O2 sensor advisory explaining the fault and its consequences, above a brakes checklist",
      width: 1800,
      height: 625,
    },
  },
  {
    id: "paperwork",
    eyebrow: "Paperwork management",
    title: "Vehicle paperwork that never expires unnoticed",
    body: "Keep each customer's vehicle papers in one place: insurance, vehicle licence, roadworthiness, proof of ownership, hackney permit or any document type you add. Store the scans with issue and expiry dates, and work the expiring-soon list before your customer gets stopped on the road. Renewals keep the old document as history.",
    points: [
      "Valid, expiring soon and expired, worked out for you",
      "Several scans per document",
      "Renewal history kept on every renewal",
      "Service reminders by date or mileage to bring customers back",
    ],
  },
  {
    id: "invoices",
    eyebrow: "Invoices and receipts",
    title: "Invoices and receipts that look like a business",
    body: "Your logo, your bank details and your own numbering on every invoice and receipt PDF. Raise one from a job card, from your saved price list, or from a single WhatsApp message, and share it to WhatsApp or email in a tap. For the customer who still owes you from last time, carry the old balance onto the new invoice.",
    points: [
      "Invoices and receipts on WhatsApp, or in the app",
      "Discounts and VAT on an item or the whole invoice",
      "Carry old balances forward, and write off bad debt",
      "Cash, transfer, POS, card and cheque payments, each with a receipt",
    ],
    image: {
      src: "/product/invoice-pdf.png",
      alt: "A branded Rabbar invoice PDF with line items, discount, VAT, balance due and bank details",
      width: 1100,
      height: 1332,
    },
  },
  {
    id: "debtors",
    eyebrow: "Who owes you",
    title: "Know who owes you, and what you made",
    body: "The dashboard shows what you invoiced, collected and spent, what's overdue, and your top debtors ranked by how much they owe and for how long. Log expenses with a photo of the receipt, and send customers a statement of everything they owe.",
    points: [
      "Overdue invoices and top debtors at a glance",
      "Expenses with categories and receipt photos",
      "Customer statements, and exports to a spreadsheet",
    ],
    image: {
      src: "/product/dashboard-1.png",
      alt: "The Rabbar dashboard showing amounts invoiced, net profit, expenses, overdue invoices, total revenue and customer count",
      width: 1800,
      height: 518,
    },
  },
  {
    id: "team",
    eyebrow: "Your team",
    title: "Let staff work without seeing everything",
    body: "Invite your team and decide what each person can create, see, change and delete. Your front desk can open job cards and raise invoices without ever seeing your profit. Technicians can be assigned to job cards without needing a login.",
    points: [
      "Roles you define, not three fixed ones",
      "Team members can use the WhatsApp assistant too",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[#F4F4F4] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#001F3E] tracking-tight">
            Everything in one app
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Job cards, inspection reports, paperwork, invoices and receipts.
            Every screen below is the real product, running in our own Lagos
            workshop.
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
  const { id, eyebrow, title, body, points, image } = feature;
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
      <div
        id={id}
        className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-8 sm:p-10"
      >
        <div className="max-w-3xl">{copy}</div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
    >
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

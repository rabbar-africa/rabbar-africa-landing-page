/**
 * The four feature pages. Each targets the searches for one selling point, so
 * keep each page's own address: /jobcard in particular is the URL ChatGPT and
 * Google already rank for "job card", and must never redirect.
 */
export interface FeaturePageLink {
  href: string;
  /** Short name, used in the nav and footer. */
  label: string;
  /** Card title in the "Explore more" strip. */
  title: string;
  blurb: string;
}

export const FEATURE_PAGES: FeaturePageLink[] = [
  {
    href: "/jobcard",
    label: "Job cards",
    title: "Job card software",
    blurb:
      "A digital job card for every job, with technicians, status and the profit when it's done.",
  },
  {
    href: "/whatsapp-invoicing",
    label: "WhatsApp invoices",
    title: "Invoices and receipts on WhatsApp",
    blurb:
      "Type the job in one WhatsApp message and get a branded invoice PDF back.",
  },
  {
    href: "/vehicle-inspection-reports",
    label: "Inspection reports",
    title: "Vehicle inspection reports",
    blurb:
      "A checklist on the phone, photos of every fault, and a branded report PDF.",
  },
  {
    href: "/paperwork-management",
    label: "Paperwork",
    title: "Vehicle paperwork management",
    blurb:
      "Insurance, vehicle licence and roadworthiness tracked, with an expiring-soon list.",
  },
];

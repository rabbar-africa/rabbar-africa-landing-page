/**
 * Main navigation. The homepage is the platform, so the links are its four
 * selling points, worded as people search for them. Rabbar Garage and Rabbar
 * Fleet are linked from the homepage's "Also from Rabbar Africa" strip and the
 * footer instead.
 */
export const NAV_LINKS = [
  { label: "Job cards", href: "/#job-cards" },
  { label: "WhatsApp invoices", href: "/#whatsapp" },
  { label: "Inspection reports", href: "/#inspections" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blogs" },
] as const;

/** The footer also lists paperwork, which doesn't fit in the header. */
export const FOOTER_LINKS = [
  ...NAV_LINKS.slice(0, 3),
  { label: "Paperwork management", href: "/#paperwork" },
  ...NAV_LINKS.slice(3),
] as const;

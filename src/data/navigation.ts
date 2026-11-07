import { FEATURE_PAGES } from "@/data/feature-pages";

/**
 * Main navigation. The selling points link to their own pages (not homepage
 * anchors), because a page with its own URL, title and H1 is what ranks for
 * "job card software", "WhatsApp invoice" and so on. Rabbar Garage and Rabbar
 * Fleet are linked from the homepage's "Also from Rabbar Africa" strip and the
 * footer instead.
 */
const page = (href: string) => {
  const p = FEATURE_PAGES.find((f) => f.href === href)!;
  return { label: p.label, href: p.href };
};

export const NAV_LINKS = [
  page("/jobcard"),
  page("/whatsapp-invoicing"),
  page("/vehicle-inspection-reports"),
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blogs" },
];

/** The footer also lists paperwork, which doesn't fit in the header. */
export const FOOTER_LINKS = [
  ...NAV_LINKS.slice(0, 3),
  page("/paperwork-management"),
  ...NAV_LINKS.slice(3),
];

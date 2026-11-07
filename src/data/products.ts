/**
 * Single source of truth for the Rabbar Africa product family.
 *
 * The invoicing platform is the main product: it is the homepage and carries
 * the company name. Rabbar Garage and Rabbar Fleet are side services with
 * their own pages, linked low-key from the homepage and the footer.
 *
 * Names, slugs and one-line pitches are all read from here. Slugs are used as
 * route paths, so changing one means renaming the matching directory under
 * `src/app/`.
 */

export const UMBRELLA_NAME = "Rabbar Africa";

/**
 * The platform in running copy and on buttons ("Send your first invoice with
 * Rabbar"), matching how the WhatsApp assistant introduces itself. Titles,
 * the logo and legal text use the full name.
 */
export const SHORT_NAME = "Rabbar";

export interface Product {
  /** Public-facing product name. */
  name: string;
  /** Route path. Must match a directory under src/app/. */
  slug: string;
  /** Short pitch used on the homepage product card. */
  pitch: string;
  /** One-line description of who it is for. */
  audience: string;
  /** Longer supporting line for the homepage card. */
  blurb: string;
  /** Three concrete capabilities, for the card's chip row. */
  highlights?: string[];
  /**
   * Accent colour, used to distinguish the three products across cards, chips
   * and hover states. All three sit on the same navy ground.
   */
  accent: { hex: string; onLight: string };
}

export const PRODUCTS = {
  platform: {
    name: UMBRELLA_NAME,
    slug: "/",
    pitch: "Run every job on a job card. Get paid on WhatsApp.",
    audience: "For workshops and small businesses",
    blurb:
      "Job cards, invoices and receipts on WhatsApp, vehicle inspection reports and paperwork management.",
    accent: { hex: "#DAE648", onLight: "#5C6606" },
  },
  garage: {
    name: "Rabbar Garage",
    slug: "/garage",
    pitch: "Bring us your car. We handle the rest.",
    audience: "For car owners",
    blurb:
      "Repairs, servicing, revamping and vehicle documentation from our own workshop in Lagos.",
    accent: { hex: "#FF8A3D", onLight: "#B4471A" },
  },
  fleet: {
    name: "Rabbar Fleet",
    slug: "/fleet",
    pitch: "Fleet maintenance and compliance, handled for you.",
    audience: "For companies with vehicles",
    blurb:
      "Scheduled maintenance, repairs and compliance for company vehicles, with one accountable partner.",
    accent: { hex: "#4CC9E8", onLight: "#0E6E88" },
  },
} satisfies Record<string, Product>;

/** The side services, linked from the homepage strip and the footer. */
export const SIDE_PRODUCTS: Product[] = [PRODUCTS.garage, PRODUCTS.fleet];

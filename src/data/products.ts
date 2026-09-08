/**
 * Single source of truth for the Rabbar Africa product family.
 *
 * Names, slugs and one-line pitches are all read from here — nav, product
 * cards, page metadata and body copy. Renaming a product means editing this
 * file only. Slugs are used as route paths, so changing one means renaming the
 * matching directory under `src/app/`.
 */

export const UMBRELLA_NAME = "Rabbar Africa";

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
  highlights: string[];
  /**
   * Accent colour, used to distinguish the three products across cards, chips
   * and hover states. All three sit on the same navy ground.
   */
  accent: { hex: string; onLight: string };
}

export const PRODUCTS = {
  jobcard: {
    name: "Jobcard",
    slug: "/jobcard",
    pitch: "Run a workshop off your phone, not a carbon-copy pad.",
    audience: "For workshop owners",
    blurb:
      "Job cards, photo-backed inspections with AI-drafted advisories, branded invoices — and profit on every car.",
    highlights: ["Job cards", "AI advisories", "Per-job profit"],
    accent: { hex: "#DAE648", onLight: "#5C6606" },
  },
  garage: {
    name: "Rabbar Garage",
    slug: "/garage",
    pitch: "Bring us your car. We handle the rest.",
    audience: "For car owners",
    blurb:
      "Repairs, servicing, revamping and vehicle documentation from our own workshop in Yaba, Lagos.",
    highlights: ["Repairs", "Documentation", "Insurance"],
    accent: { hex: "#FF8A3D", onLight: "#B4471A" },
  },
  fleet: {
    name: "Rabbar Fleet",
    slug: "/fleet",
    pitch: "Fleet maintenance and compliance, handled for you.",
    audience: "For companies with vehicles",
    blurb:
      "Scheduled maintenance, repairs and compliance for company vehicles, with one accountable partner.",
    highlights: ["Scheduled upkeep", "Compliance", "Monthly reporting"],
    accent: { hex: "#4CC9E8", onLight: "#0E6E88" },
  },
} satisfies Record<string, Product>;

export const PRODUCT_LIST: Product[] = [
  PRODUCTS.jobcard,
  PRODUCTS.garage,
  PRODUCTS.fleet,
];

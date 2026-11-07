import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface CrossLink {
  name: string;
  slug: string;
  body: string;
}

/**
 * Sibling-product pointers. Each page links to the other two, so the site
 * reads as one company. On the homepage this is the low-key "Also from Rabbar
 * Africa" strip for the side services.
 */
export function CrossLinks({
  links,
  heading,
}: {
  links: CrossLink[];
  heading?: string;
}) {
  return (
    <section className="bg-[#F4F4F4] border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#013064]">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map(({ name, slug, body }) => (
            <Link
              key={slug}
              href={slug}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#001F3E] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
            >
              <p className="text-gray-600 leading-relaxed">{body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-[#001F3E]">
                {name}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The homepage's "Also from Rabbar Africa" strip. */
export const PLATFORM_CROSS_LINKS: CrossLink[] = [
  {
    name: PRODUCTS.garage.name,
    slug: PRODUCTS.garage.slug,
    body: "Need your own car looked after? Our Lagos workshop handles repairs, servicing and vehicle documentation.",
  },
  {
    name: PRODUCTS.fleet.name,
    slug: PRODUCTS.fleet.slug,
    body: "Run a company fleet? We handle maintenance and compliance for organisations, with one accountable partner.",
  },
];

export const GARAGE_CROSS_LINKS: CrossLink[] = [
  {
    name: `Job cards with ${PRODUCTS.platform.name}`,
    slug: PRODUCTS.platform.slug,
    body: "Run a workshop of your own? This one runs on Rabbar: job cards, inspection reports, paperwork, and invoices and receipts on WhatsApp.",
  },
  {
    name: PRODUCTS.fleet.name,
    slug: PRODUCTS.fleet.slug,
    body: `Manage a company fleet instead of a single car? ${PRODUCTS.fleet.name} handles maintenance and compliance for organisations.`,
  },
];

export const FLEET_CROSS_LINKS: CrossLink[] = [
  {
    name: PRODUCTS.garage.name,
    slug: PRODUCTS.garage.slug,
    body: "Bringing in a single car rather than a fleet? That is what our own workshop does.",
  },
  {
    name: `Job cards with ${PRODUCTS.platform.name}`,
    slug: PRODUCTS.platform.slug,
    body: "Run a workshop of your own? Rabbar is the job card software behind this service, with inspection reports, paperwork and WhatsApp invoices.",
  },
];

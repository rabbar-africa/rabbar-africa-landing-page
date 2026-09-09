import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface CrossLink {
  name: string;
  slug: string;
  body: string;
}

/**
 * Sibling-product pointers. Each product page carries links to the other two so
 * the umbrella reads as one company rather than three disconnected sites.
 */
export function CrossLinks({ links }: { links: CrossLink[] }) {
  return (
    <section className="bg-[#F4F4F4] border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

export const GARAGE_CROSS_LINKS: CrossLink[] = [
  {
    name: PRODUCTS.jobcard.name,
    slug: PRODUCTS.jobcard.slug,
    body: `Curious how we run this workshop day to day? We built ${PRODUCTS.jobcard.name} for that, and now other workshops run on it too.`,
  },
  {
    name: PRODUCTS.fleet.name,
    slug: PRODUCTS.fleet.slug,
    body: `Manage a company fleet instead of a single car? ${PRODUCTS.fleet.name} handles maintenance and compliance for organisations.`,
  },
];

export const JOBCARD_CROSS_LINKS: CrossLink[] = [
  {
    name: PRODUCTS.garage.name,
    slug: PRODUCTS.garage.slug,
    body: `See the workshop ${PRODUCTS.jobcard.name} was built in and is used in every day.`,
  },
  {
    name: PRODUCTS.fleet.name,
    slug: PRODUCTS.fleet.slug,
    body: `Run a company fleet? We offer the same operation as a managed service.`,
  },
];

export const FLEET_CROSS_LINKS: CrossLink[] = [
  {
    name: PRODUCTS.garage.name,
    slug: PRODUCTS.garage.slug,
    body: `Bringing in a single car rather than a fleet? That is what our own workshop does.`,
  },
  {
    name: PRODUCTS.jobcard.name,
    slug: PRODUCTS.jobcard.slug,
    body: `Run a workshop of your own? ${PRODUCTS.jobcard.name} is the software behind this service.`,
  },
];

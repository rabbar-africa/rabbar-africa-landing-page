"use client";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/ui/nav-link";
import { MobileNav } from "@/components/MobileNav";
import { PRODUCT_LIST } from "@/data/products";
import { softwareDemoLink } from "@/data/constant";

/**
 * Umbrella navigation. The logo goes to the Rabbar Africa homepage, which
 * routes into the three products; nav items come from `@/data/products` so a
 * rename there propagates here.
 */
export function Header() {
  return (
    <header
      className="border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50 shadow-sm"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Logo isLink={true} width={150} priority={true} />
          </div>

          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {PRODUCT_LIST.map((product) => (
              <NavLink key={product.slug} href={product.slug}>
                {product.name}
              </NavLink>
            ))}
            <NavLink href="/blogs">Blog</NavLink>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={softwareDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DAE648] text-[#001F3E] px-6 py-2 rounded-lg hover:bg-[#E8F34F] font-semibold transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
            >
              Talk to us
            </a>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

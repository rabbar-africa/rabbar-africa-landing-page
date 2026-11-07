"use client";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/ui/nav-link";
import { MobileNav } from "@/components/MobileNav";
import { StartLink } from "@/components/platform/StartLink";
import { NAV_LINKS } from "@/data/navigation";
import { appLoginLink } from "@/data/constant";

/**
 * Site navigation. The logo goes to the homepage, which is the invoicing
 * platform; "Get started" opens the web app's signup.
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
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            {appLoginLink && (
              <a
                href={appLoginLink}
                className="font-semibold text-[#001F3E] hover:text-[#013064] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm"
              >
                Sign in
              </a>
            )}
            <StartLink className="bg-[#DAE648] text-[#001F3E] px-6 py-2 rounded-lg hover:bg-[#E8F34F] font-semibold transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2">
              Get started
            </StartLink>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

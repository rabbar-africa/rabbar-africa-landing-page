"use client";

import { useState } from "react";
import { NavLink } from "@/components/ui/nav-link";
import { StartLink } from "@/components/platform/StartLink";
import { appLoginLink } from "@/data/constant";
import { NAV_LINKS } from "@/data/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] rounded"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#030213] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#030213] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#030213] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <nav
            id="mobile-menu"
            className="fixed top-[73px] left-0 right-0 bg-white border-b shadow-lg z-50 animate-in slide-in-from-top duration-300"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map(({ label, href }) => (
                <NavLink
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-lg py-2"
                >
                  {label}
                </NavLink>
              ))}

              <div className="pt-4 space-y-3">
                <StartLink className="block w-full text-center bg-[#DAE648] text-[#001F3E] px-6 py-3 rounded-lg hover:bg-[#E8F34F] font-semibold transition-colors">
                  Get started
                </StartLink>
                {appLoginLink && (
                  <a
                    href={appLoginLink}
                    className="block w-full text-center border border-gray-300 text-[#001F3E] px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold transition-colors"
                  >
                    Sign in
                  </a>
                )}
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

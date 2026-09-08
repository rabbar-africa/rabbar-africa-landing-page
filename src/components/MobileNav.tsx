"use client";

import { useState } from "react";
import { NavLink } from "@/components/ui/nav-link";
import { softwareDemoLink } from "@/data/constant";
import { PRODUCT_LIST } from "@/data/products";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
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
              {PRODUCT_LIST.map((product) => (
                <NavLink
                  key={product.slug}
                  href={product.slug}
                  onClick={closeMenu}
                  className="text-lg py-2"
                >
                  {product.name}
                </NavLink>
              ))}

              <NavLink
                href="/blogs"
                onClick={closeMenu}
                className="text-lg py-2"
              >
                Blog
              </NavLink>

              <div className="pt-4">
                <a
                  href={softwareDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block w-full text-center bg-[#DAE648] text-[#001F3E] px-6 py-3 rounded-lg hover:bg-[#E8F34F] font-semibold transition-colors"
                >
                  Talk to us
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

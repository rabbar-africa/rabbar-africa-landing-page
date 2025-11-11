"use client";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/ui/nav-link";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";

/**
 * Header Component
 *
 * A responsive, accessible header component with navigation links
 * and a mobile-friendly hamburger menu. Implements SEO best practices
 * and ARIA attributes for screen readers.
 *
 * Features:
 * - Sticky positioning for persistent navigation
 * - Mobile-responsive with hamburger menu
 * - Keyboard navigation support
 * - ARIA landmarks for accessibility
 * - Brand color scheme integration
 */
export function Header() {
  const handleContactClick = () => {
    // Scroll to contact section or open contact form
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50 shadow-sm"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Logo isLink={true} width={150} height={50} priority={true} />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavLink href="/">Home</NavLink>

            <NavLink href="#services">Services</NavLink>

            <NavLink href="#contact">About</NavLink>

            <NavLink href="/blogs">Blog</NavLink>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={handleContactClick}
              className="bg-[#E8F34F] text-[#030213] px-6 py-2 rounded-lg hover:bg-[#DAE648] font-semibold transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
              aria-label="Contact us"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav onContactClick={handleContactClick} />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Returns true when `href` addresses the page currently being viewed.
 *
 * Query strings and hashes are ignored so `/jobcard#pricing` still counts as
 * the Jobcard page, and a nested route marks its parent active. Links that are
 * only a hash (an in-page anchor) never match.
 */
function useIsActive(href: string) {
  const pathname = usePathname();
  const [path] = href.split(/[?#]/);

  if (!path) return false;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const isActive = useIsActive(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "transition-colors",
        // Weight is reserved for the active page, so it does not shift on
        // hover and bold always means "you are here".
        isActive
          ? "font-semibold text-[#001F3E]"
          : "font-medium text-gray-700 hover:text-[#001F3E]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm",
        className,
      )}
    >
      {/* Inline wrapper so the marker hugs the text rather than the link box,
          which is full-width in the mobile menu. */}
      <span className="relative inline-block">
        {children}
        {isActive && (
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-[#DAE648]"
          />
        )}
      </span>
    </Link>
  );
}

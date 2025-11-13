"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-gray-700 transition-all font-medium",
        "hover:font-semibold hover:text-[#030213]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:rounded-sm",
        "active:text-[#013064]",
        className,
      )}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </Link>
  );
}

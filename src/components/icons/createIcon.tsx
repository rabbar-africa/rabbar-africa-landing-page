import * as React from "react";
import { cn } from "@/lib/utils";

interface CreateIconOptions {
  displayName: string;
  viewBox?: string;
  path: React.ReactNode;
}

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & {
  /** Accessible name. Omit to mark the icon as decorative (aria-hidden). */
  label?: string;
};

export function createIcon({
  displayName,
  viewBox = "0 0 24 24",
  path,
}: CreateIconOptions) {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
    { className, label, ...rest },
    ref,
  ) {
    const a11y = label
      ? { role: "img" as const, "aria-label": label }
      : { "aria-hidden": true, focusable: false };

    return (
      <svg
        ref={ref}
        viewBox={viewBox}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        // size-[1em] makes the icon scale with surrounding font-size, like a glyph.
        className={cn("inline-block size-[1em] shrink-0", className)}
        {...a11y}
        {...rest}
      >
        {path}
      </svg>
    );
  });
  Icon.displayName = displayName;
  return Icon;
}

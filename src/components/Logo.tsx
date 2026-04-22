import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const INTRINSIC_WIDTH = 136;
const INTRINSIC_HEIGHT = 24;

const SOURCES = {
  black: "/logo.svg",
  white: "/logo.svg",
} as const;

type LogoColor = keyof typeof SOURCES;

interface LogoProps {
  isLink?: boolean;
  href?: string;
  /** Rendered width in px. Height is derived from the logo's aspect ratio. */
  width?: number;
  color?: LogoColor;
  /** Eager-load. Use only for an above-the-fold logo (e.g. header on landing). */
  priority?: boolean;
  /** Alt text used when the logo renders standalone. Ignored when `isLink` is true. */
  alt?: string;
  /** Accessible name for the wrapping link. */
  linkLabel?: string;
  className?: string;
}

export function Logo({
  isLink = false,
  href = "/",
  width = INTRINSIC_WIDTH,
  color = "white",
  priority = false,
  alt = "Rabbar Africa — Premier Automobile Services",
  linkLabel = "Rabbar Africa — homepage",
  className,
}: LogoProps) {
  const height = Math.round((width * INTRINSIC_HEIGHT) / INTRINSIC_WIDTH);

  const image = (
    <Image
      src={SOURCES[color]}
      alt={isLink ? "" : alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      sizes={`${width}px`}
      className={cn("block h-auto w-auto max-w-full select-none", className)}
      draggable={false}
    />
  );

  if (!isLink) return image;

  return (
    <Link
      href={href}
      aria-label={linkLabel}
      className="inline-block transition-opacity hover:opacity-80 focus-visible:opacity-80"
    >
      {image}
    </Link>
  );
}

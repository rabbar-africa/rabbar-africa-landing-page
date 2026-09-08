import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Intrinsic size of public/logo.png (4475x844) and public/white-logo.png
// (4493x843) — both ~5.3:1. Height is derived from this so the declared
// dimensions match the file and next/image can reserve the right box.
const LOGO_ASPECT_RATIO = 4475 / 844;

interface LogoProps {
  isLink?: boolean;
  href?: string;
  /** Rendered width in px. Height is derived from the logo's aspect ratio. */
  width?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
  color?: "black" | "white";
}

export function Logo({
  isLink = false,
  href = "/",
  width = 180,
  className,
  priority = false,
  alt = "Rabbar Africa - Premier Automobile Services",
  color = "black",
}: LogoProps) {
  const height = Math.round(width / LOGO_ASPECT_RATIO);

  const logoImage = (
    <Image
      src={color === "white" ? "/white-logo.png" : "/logo.png"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto", className)}
      sizes={`(max-width: 768px) ${Math.round(width * 0.8)}px, ${width}px`}
      quality={90}
    />
  );

  if (isLink) {
    return (
      <Link
        href={href}
        className="inline-block transition-opacity hover:opacity-80"
        aria-label="Go to Rabbar Africa homepage"
      >
        {logoImage}
      </Link>
    );
  }

  return logoImage;
}

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  isLink?: boolean;
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
  color?: "black" | "white";
}

export function Logo({
  isLink = false,
  href = "/",
  width = 180,
  height = 60,
  className,
  priority = false,
  alt = "Rabbar Africa - Premier Automobile Services",
  color = "black",
}: LogoProps) {
  const logoImage = (
    <Image
      src={color === "white" ? "/white-logo.png" : "/logo.png"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      sizes={`(max-width: 768px) ${width * 0.8}px, ${width}px`}
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

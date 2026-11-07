import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A phone-sized screenshot of the app in a simple device frame. Most Rabbar
 * users work from their phones, so these show the app as they see it.
 * Screenshots are 780×1688 (390pt wide at 2x).
 */
export function PhoneShot({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[2.25rem] bg-[#0B1220] p-2.5 shadow-2xl ring-1 ring-black/10",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-white">
        <Image
          src={src}
          alt={alt}
          width={780}
          height={1688}
          priority={priority}
          sizes="(max-width: 639px) 45vw, 240px"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

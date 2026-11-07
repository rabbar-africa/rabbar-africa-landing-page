import type { ReactNode } from "react";
import { appIsConfigured, appSignupLink } from "@/data/constant";

/**
 * The "Get started" link: the web app's signup page. The app opens in the
 * same tab like any signup flow; the WhatsApp fallback (used when the app URL
 * isn't configured) opens in a new one so the page isn't lost.
 */
export function StartLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={appSignupLink}
      {...(appIsConfigured
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={className}
    >
      {children}
    </a>
  );
}

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { GA_ID, pageview } from "@/lib/gtag";

function GoogleAnalyticsComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Does nothing until the visitor accepts cookies: pageview() needs
    // window.gtag, which CookieConsent only loads after Accept.
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsComponent />
    </Suspense>
  );
}

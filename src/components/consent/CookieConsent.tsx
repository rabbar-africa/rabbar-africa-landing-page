"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { Cookie } from "lucide-react";
import { ADS_ID, GA_ID } from "@/lib/gtag";
import {
  clearGoogleCookies,
  OPEN_SETTINGS_EVENT,
  readConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

const GRANTED = {
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
};
const DENIED = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

/**
 * Cookie banner, and the only place Google Analytics and Google Ads are
 * loaded.
 *
 * Nothing from Google loads until the visitor taps Accept: not even Consent
 * Mode's cookieless pings, which still send data to Google. Accept loads both
 * tags with consent granted and records the current page view. Decline loads
 * nothing. The footer's "Cookie settings" link reopens the banner; declining
 * after accepting withdraws consent, deletes Google's cookies and reloads the
 * page so the scripts stop.
 */
export function CookieConsent() {
  // The saved choice. On the server, and in the first render, it's
  // undefined ("not known yet"), so the banner never flashes for someone
  // who has already chosen and the server never renders a choice.
  const choice = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => undefined,
  );
  // Reopened from the footer's "Cookie settings".
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const reopen = () => setSettingsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const open = choice === null || settingsOpen;

  const accept = useCallback(() => {
    saveConsent("accepted");
    setSettingsOpen(false);
  }, []);

  const decline = useCallback(() => {
    const hadAccepted = choice === "accepted";
    saveConsent("declined");
    setSettingsOpen(false);
    if (hadAccepted) {
      window.gtag?.("consent", "update", DENIED);
      clearGoogleCookies();
      window.location.reload();
    }
  }, [choice]);

  const loadGoogle = choice === "accepted" && Boolean(GA_ID || ADS_ID);
  const firstTag = GA_ID || ADS_ID;

  return (
    <>
      {loadGoogle && (
        <>
          <Script id="google-tags" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('consent', 'default', ${JSON.stringify(DENIED)});
              gtag('consent', 'update', ${JSON.stringify(GRANTED)});
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}', { page_path: window.location.pathname + window.location.search });` : ""}
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${firstTag}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {open && (
        <div
          role="region"
          aria-label="Cookie choice"
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:pb-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-start gap-3">
              <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#001F3E]">
                <Cookie
                  size={20}
                  className="text-[#DAE648]"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h2 className="font-semibold text-[#001F3E]">
                  Can we use cookies for analytics and ads?
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  With your permission, Google Analytics and Google Ads set
                  cookies to count visits and measure our adverts. Nothing is
                  set unless you accept, and the website works either way. You
                  can change your mind at any time from{" "}
                  <span className="whitespace-nowrap">“Cookie settings”</span>{" "}
                  at the bottom of every page. See our{" "}
                  <Link
                    href="/privacy#cookies"
                    className="font-medium text-[#013064] underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            {/* Equal-sized buttons: declining is as easy as accepting. */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:ml-13 sm:max-w-sm">
              <button
                type="button"
                onClick={decline}
                className="rounded-lg border-2 border-[#001F3E] px-4 py-2.5 font-semibold text-[#001F3E] transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-lg border-2 border-[#001F3E] bg-[#001F3E] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#013064] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013064] focus-visible:ring-offset-2"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** "Cookie settings" in the footer: reopens the banner to change the choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}

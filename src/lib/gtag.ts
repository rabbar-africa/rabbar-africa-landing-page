/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AnalyticsEventConfig } from "./analytics-events";
import { getEventParams } from "./analytics-events";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!;

export const pageview = (url: string) => {
  if (!window.gtag) return;
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};

export const trackEvent = (action: string, params: Record<string, any>) => {
  if (!window.gtag) return;
  window.gtag("event", action, params);
};

// Track event using centralized config
export const trackConfiguredEvent = (
  eventConfig: AnalyticsEventConfig,
  additionalParams?: Record<string, any>,
) => {
  if (!window.gtag) return;

  const params = getEventParams(eventConfig, additionalParams);

  // If it's a conversion event, also track it as a conversion
  if (eventConfig.isConversion) {
    window.gtag("event", "conversion", {
      ...params,
      send_to: GA_ID,
    });
  }

  // Always track the main event
  window.gtag("event", eventConfig.action, params);
};

// export const conversion = (label: string, value?: number, currency = "NGN") => {
//   if (!window.gtag) return;
//   window.gtag("event", "conversion", {
//     send_to: `${ADS_ID}/${label}`,
//     value,
//     currency,
//   });
// };

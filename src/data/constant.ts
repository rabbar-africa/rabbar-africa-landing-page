export const whatsappNumber = "2349160002836";

export const whatsappMessage = encodeURIComponent(
  "Hello Rabbar Africa! I'm interested in your vehicle documentation services.",
);
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

/** Platform enquiries: the secondary CTA ("Talk to us") on the homepage. */
export const platformDemoMessage = encodeURIComponent(
  "Hello Rabbar! I'd like to know more about using Rabbar for invoicing in my business.",
);
export const platformDemoLink = `https://wa.me/${whatsappNumber}?text=${platformDemoMessage}`;

/**
 * The Rabbar web app (https://app.rabbar.africa in production).
 *
 * Set NEXT_PUBLIC_SOFTWARE_APP_URL to the app's origin. It is read statically
 * so Next can inline it at build time, which means changing it requires a
 * rebuild, not just a restart. A trailing slash is tolerated.
 */
const appUrl = process.env.NEXT_PUBLIC_SOFTWARE_APP_URL?.trim().replace(
  /\/+$/,
  "",
);

/** True when the app URL is configured. */
export const appIsConfigured = Boolean(appUrl);

/**
 * "Get started": the app's signup page, the primary CTA everywhere.
 *
 * When the app URL is unset the CTA falls back to the WhatsApp enquiry link
 * rather than rendering a dead button, so an unconfigured preview deploy
 * still converts. Callers open the app in the same tab, like any signup flow,
 * and the WhatsApp fallback in a new one (see `appIsConfigured`).
 */
export const appSignupLink = appUrl
  ? `${appUrl}/auth/signup`
  : platformDemoLink;

/** "Sign in": the app's login page, or null when the app URL is unset. */
export const appLoginLink = appUrl ? `${appUrl}/auth/login` : null;

/** Fleet enquiries are an enterprise sales motion, a proposal request, not a demo. */
export const fleetProposalMessage = encodeURIComponent(
  "Hello Rabbar Africa! We have a company fleet and I'd like to request a fleet management proposal.",
);
export const fleetProposalLink = `https://wa.me/${whatsappNumber}?text=${fleetProposalMessage}`;

/**
 * Public contact address. Must stay on the rabbar.africa domain: a free
 * webmail address undermines business verification (AWS Activate, for one,
 * automatically rejects applications from @gmail.com addresses).
 */
export const contactEmail = "info@rabbar.africa";

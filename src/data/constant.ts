export const whatsappNumber = "2349160002836";

export const whatsappMessage = encodeURIComponent(
  "Hello Rabbar Africa! I'm interested in your vehicle documentation services.",
);
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

/** Software enquiries, the primary CTA on the software landing page. */
export const softwareDemoMessage = encodeURIComponent(
  "Hello Rabbar! I run a workshop and I'd like a demo of the workshop management software.",
);
export const softwareDemoLink = `https://wa.me/${whatsappNumber}?text=${softwareDemoMessage}`;

/**
 * Where "Get started" sends a workshop owner: the Jobcard app itself.
 *
 * Set NEXT_PUBLIC_SOFTWARE_APP_URL to the app's entry point. It is read
 * statically so Next can inline it at build time, which means changing it
 * requires a rebuild, not just a restart.
 *
 * When it is unset the CTA falls back to the WhatsApp demo link rather than
 * rendering a dead button, so an unconfigured preview deploy still converts.
 */
const softwareAppUrl = process.env.NEXT_PUBLIC_SOFTWARE_APP_URL?.trim();

export const jobcardStartLink = softwareAppUrl || softwareDemoLink;

/**
 * True when the app URL is configured. Callers use it to decide the link
 * target: the app opens in the same tab like any signup flow, while the
 * WhatsApp fallback opens in a new one so the page is not lost.
 */
export const jobcardStartIsApp = Boolean(softwareAppUrl);

/** Fleet enquiries are an enterprise sales motion, a proposal request, not a demo. */
export const fleetProposalMessage = encodeURIComponent(
  "Hello Rabbar Africa! We have a company fleet and I'd like to request a fleet management proposal.",
);
export const fleetProposalLink = `https://wa.me/${whatsappNumber}?text=${fleetProposalMessage}`;

export const contactEmail = "contact.rabbar@gmail.com";

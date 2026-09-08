export const whatsappNumber = "2349160002836";

export const whatsappMessage = encodeURIComponent(
  "Hello Rabbar Africa! I'm interested in your vehicle documentation services.",
);
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

/** Software enquiries — the primary CTA on the software landing page. */
export const softwareDemoMessage = encodeURIComponent(
  "Hello Rabbar! I run a workshop and I'd like a demo of the workshop management software.",
);
export const softwareDemoLink = `https://wa.me/${whatsappNumber}?text=${softwareDemoMessage}`;

/** Pricing-tier enquiries. Every tier CTA goes to WhatsApp — there is no self-serve billing. */
export const pricingEnquiryLink = (tier: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Rabbar! I'd like to know more about the ${tier} plan for my workshop.`,
  )}`;

/** Fleet enquiries are an enterprise sales motion — a proposal request, not a demo. */
export const fleetProposalMessage = encodeURIComponent(
  "Hello Rabbar Africa! We have a company fleet and I'd like to request a fleet management proposal.",
);
export const fleetProposalLink = `https://wa.me/${whatsappNumber}?text=${fleetProposalMessage}`;

export const contactEmail = "contact.rabbar@gmail.com";

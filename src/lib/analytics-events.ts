/**
 * Analytics Event Configuration
 * Centralized configuration for all tracking events across the application
 */

export const ANALYTICS_EVENTS = {
  // WhatsApp Conversion Events
  WHATSAPP: {
    HERO: {
      action: "whatsapp_click",
      category: "conversion",
      label: "hero_whatsapp_button",
      location: "home_hero",
      isConversion: true,
    },
    VEHICLE_DOC_HERO: {
      action: "whatsapp_click",
      category: "conversion",
      label: "vehicle_doc_hero_whatsapp_button",
      location: "vehicle_documentation_hero",
      isConversion: true,
    },
    DOCUMENT_SERVICES: {
      action: "whatsapp_click",
      category: "conversion",
      label: "document_services_request_button",
      location: "vehicle_documentation_services",
      isConversion: true,
    },
    DOCUMENT_CTA: {
      action: "whatsapp_click",
      category: "conversion",
      label: "document_cta_whatsapp_button",
      location: "vehicle_documentation_cta",
      isConversion: true,
    },
  },

  // Phone Call Conversion Events
  PHONE: {
    DOCUMENT_CTA: {
      action: "phone_click",
      category: "conversion",
      label: "document_cta_phone_button",
      location: "vehicle_documentation_cta",
      isConversion: true,
    },
  },

  // Form Submission Events
  FORM: {
    CONTACT_SUBMISSION: {
      action: "form_submission",
      category: "conversion",
      label: "contact_form",
      location: "contact_section",
      isConversion: true,
    },
  },

  // Engagement Events
  ENGAGEMENT: {
    SERVICE_CARD_CLICK: {
      action: "service_card_click",
      category: "engagement",
      location: "home_services",
    },
    BLOG_CARD_CLICK: {
      action: "blog_card_click",
      category: "engagement",
      location: "blog_listing",
    },
  },

  // CTA Events
  CTA: {
    BLOG_READ_MORE: {
      action: "cta_click",
      category: "engagement",
      label: "blog_read_more_articles",
      location: "blog_article",
    },
    BLOG_SCHEDULE_SERVICE: {
      action: "cta_click",
      category: "engagement",
      label: "blog_schedule_service",
      location: "blog_article",
    },
  },
} as const;

// Type helper for event parameters
export type AnalyticsEventConfig = {
  action: string;
  category: "conversion" | "engagement";
  label?: string;
  location?: string;
  isConversion?: boolean;
};

// Helper function to track events with proper conversion labeling
export const getEventParams = (
  eventConfig: AnalyticsEventConfig,
  additionalParams?: Record<string, unknown>,
) => {
  return {
    event_category: eventConfig.category,
    event_label: eventConfig.label,
    page_location: eventConfig.location,
    ...additionalParams,
  };
};

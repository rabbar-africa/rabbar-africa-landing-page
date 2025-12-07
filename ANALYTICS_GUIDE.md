# Analytics Tracking Guide

This document explains how analytics tracking is configured in the Rabbar Africa application.

## Configuration File

All tracking events are centralized in `/src/lib/analytics-events.ts`. This provides a single source of truth for all analytics events across the application.

## Event Categories

### 1. **Conversion Events** (Category: `conversion`)

These are high-value actions that indicate customer intent or completion of desired actions:

#### WhatsApp Clicks

- `WHATSAPP.HERO` - WhatsApp button on home hero section
- `WHATSAPP.VEHICLE_DOC_HERO` - WhatsApp button on vehicle documentation hero
- `WHATSAPP.DOCUMENT_SERVICES` - Request service button on document services
- `WHATSAPP.DOCUMENT_CTA` - WhatsApp button on document CTA section

#### Phone Calls

- `PHONE.DOCUMENT_CTA` - Phone call button on document CTA section

#### Form Submissions

- `FORM.CONTACT_SUBMISSION` - Contact form submissions

> **Note**: All conversion events automatically trigger both a specific event AND a Google Analytics conversion event, making them easy to track in Google Analytics and Google Ads.

### 2. **Engagement Events** (Category: `engagement`)

These track user interactions and content engagement:

- `SERVICE_CARD_CLICK` - Clicks on service cards
- `BLOG_CARD_CLICK` - Clicks on blog article cards

### 3. **CTA Events** (Category: `engagement`)

Call-to-action button clicks:

- `CTA.BLOG_READ_MORE` - "Read More Articles" button
- `CTA.BLOG_SCHEDULE_SERVICE` - "Schedule Service" button

## How to Use

### Basic Usage

```typescript
import { trackConfiguredEvent } from "@/lib/gtag";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

// Simple tracking
const handleClick = () => {
  trackConfiguredEvent(ANALYTICS_EVENTS.WHATSAPP.HERO);
};
```

### With Additional Parameters

```typescript
const handleClick = () => {
  trackConfiguredEvent(ANALYTICS_EVENTS.FORM.CONTACT_SUBMISSION, {
    form_subject: "Sales Inquiry",
    user_type: "returning",
  });
};
```

## Adding New Events

1. Open `/src/lib/analytics-events.ts`
2. Add your event to the appropriate category:

```typescript
export const ANALYTICS_EVENTS = {
  WHATSAPP: {
    // ... existing events
    NEW_LOCATION: {
      action: "whatsapp_click",
      category: "conversion",
      label: "new_location_whatsapp",
      location: "page_name",
      isConversion: true, // Set to true for conversion events
    },
  },
};
```

3. Use it in your component:

```typescript
trackConfiguredEvent(ANALYTICS_EVENTS.WHATSAPP.NEW_LOCATION);
```

## Event Structure

Each event configuration includes:

```typescript
{
  action: string;           // The event action (e.g., 'whatsapp_click')
  category: 'conversion' | 'engagement';  // Event category
  label?: string;           // Event label for identification
  location?: string;        // Page/section where event occurs
  isConversion?: boolean;   // If true, also tracks as a conversion
}
```

## Viewing Analytics

### In Google Analytics 4:

1. Go to **Events** in your GA4 property
2. Look for events like `whatsapp_click`, `phone_click`, `form_submission`
3. Conversion events will appear under **Conversions**

### In Google Ads:

1. Conversion events will automatically be tracked
2. Set up conversion goals in Google Ads using the event names
3. Track ROI on your advertising campaigns

## Best Practices

1. **Always use the config**: Don't hardcode event parameters
2. **Mark conversions correctly**: Set `isConversion: true` for revenue-generating actions
3. **Use descriptive labels**: Make it easy to identify events in reports
4. **Include relevant data**: Add custom parameters for deeper insights
5. **Test before deploying**: Verify events are firing in GA4's DebugView

## Conversion Tracking for Payment Collection

All WhatsApp clicks and phone calls are tracked as conversions because they lead to your payment collection points. This allows you to:

- Measure conversion rate from website visits
- Track ROI on marketing campaigns
- Optimize pages for conversion
- Set up conversion-based bidding in Google Ads

---

**Last Updated**: December 7, 2025

/**
 * Company particulars used on the legal pages. Kept in one place so the
 * Privacy Policy, Terms of Service and Data Processing Terms never disagree
 * about who "we" are.
 */
export const COMPANY = {
  legalName: "Rabbar Africa Limited",
  rcNumber: "8468516",
  address: "49 Akinwunmi Street, Alagomeji, Yaba, Lagos, Nigeria",
  phone: "+234 916 000 2836",
} as const;

/**
 * When each document last changed. Update the date whenever the wording of
 * the matching page changes, so readers can tell a revision has happened.
 */
export const LEGAL_LAST_UPDATED = {
  privacy: "7 November 2026",
  terms: "7 November 2026",
  dataProcessing: "7 November 2026",
} as const;

/**
 * The version an owner accepts at signup, recorded as
 * organizations.termsVersion. Must match LEGAL_VERSION in
 * internal-tool-backend/src/shared/constants/legal.ts. Bump both when a change
 * needs owners to accept it again.
 */
export const LEGAL_VERSION = "2026-11-07";

export interface Subprocessor {
  name: string;
  /** What it does for us, and what data it receives. */
  purpose: string;
  /** Where the data is stored or processed. */
  location: string;
}

/**
 * The providers that process personal data for us. Shared by the Privacy
 * Policy and the Data Processing Terms so the two lists cannot drift. Adding a
 * provider that handles businesses' customer data is a change owners must be
 * told about (Data Processing Terms, "Sub-processors").
 */
export const SUBPROCESSORS: Subprocessor[] = [
  {
    name: "Supabase",
    purpose:
      "Hosts our database: all Jobcard account and business records, and WhatsApp assistant activity.",
    location: "Ireland (EU)",
  },
  {
    name: "Microsoft Azure",
    purpose: "Runs the servers that power Jobcard and the WhatsApp assistant.",
    location: "Outside Nigeria",
  },
  {
    name: "Amazon Web Services",
    purpose: "Stores our encrypted daily database backups.",
    location: "Ireland (EU)",
  },
  {
    name: "Vercel",
    purpose: "Hosts our website and the Jobcard web app.",
    location: "United States and global edge network",
  },
  {
    name: "Anthropic",
    purpose:
      "AI that drafts inspection advisories and notes, and reads messages sent to the WhatsApp assistant.",
    location: "United States",
  },
  {
    name: "Cloudinary",
    purpose:
      "Stores uploaded files: logos, inspection photos, job card attachments, document scans and receipts.",
    location: "United States",
  },
  {
    name: "Meta (WhatsApp)",
    purpose: "Carries messages between you and the WhatsApp assistant.",
    location: "United States and other countries",
  },
  {
    name: "Resend",
    purpose:
      "Sends our emails: verification codes, password resets, billing notices and statements.",
    location: "United States",
  },
  {
    name: "Paystack",
    purpose:
      "Processes subscription payments and saved cards, and confirms bank account names.",
    location: "Nigeria",
  },
  {
    name: "Google",
    purpose:
      "Our business email, and analytics and advertising measurement on our website (not in the Jobcard app).",
    location: "United States",
  },
];

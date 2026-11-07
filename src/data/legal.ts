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
 * The version of the Terms of Service, Privacy Policy and Data Processing
 * Terms, as the ISO date they last changed. All three share it, and each page
 * shows it with the date written out ("Last updated 7 November 2026").
 *
 * The backend records it as organizations.termsVersion when an owner accepts
 * the terms, so it must match LEGAL_VERSION in
 * internal-tool-backend/src/shared/constants/legal.ts. Bump both whenever the
 * wording of any of the three pages changes.
 */
export const LEGAL_VERSION = "2026-11-07";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * "2026-11-07" → "7 November 2026". Parsed by hand rather than with Date so
 * the result never shifts a day with the server's timezone.
 */
export function formatLegalVersion(version: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(version);
  const month = match ? MONTHS[Number(match[2]) - 1] : undefined;
  if (!match || !month) {
    throw new Error(`Legal version must be YYYY-MM-DD, got "${version}"`);
  }
  return `${Number(match[3])} ${month} ${match[1]}`;
}

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
      "Hosts our database: all Rabbar Africa account and business records, and WhatsApp assistant activity.",
    location: "Ireland (EU)",
  },
  {
    name: "Microsoft Azure",
    purpose:
      "Runs the servers that power the Rabbar Africa app and the WhatsApp assistant.",
    location: "Outside Nigeria",
  },
  {
    name: "Amazon Web Services",
    purpose: "Stores our encrypted daily database backups.",
    location: "Ireland (EU)",
  },
  {
    name: "Vercel",
    purpose: "Hosts our website and the Rabbar Africa web app.",
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
      "Our business email, and analytics and advertising measurement on our website (not in the Rabbar Africa app).",
    location: "United States",
  },
];

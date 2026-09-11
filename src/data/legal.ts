/**
 * Company particulars used on the legal pages. Kept in one place so the
 * Privacy Policy and Terms of Service never disagree about who "we" are.
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
  privacy: "11 September 2026",
  terms: "11 September 2026",
} as const;

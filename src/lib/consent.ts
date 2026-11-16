/**
 * The visitor's cookie choice, kept in this browser only.
 *
 * Google Analytics and Google Ads set cookies, which the NDPC's General
 * Application and Implementation Directive (GAID, 2025) expects visitors to
 * accept or decline first. Until the choice is "accepted", no Google script
 * is loaded at all (see CookieConsent).
 *
 * Bump CONSENT_VERSION when what we ask consent for changes (a new tracker,
 * say), so everyone is asked again.
 */

export type ConsentChoice = "accepted" | "declined";

const STORAGE_KEY = "rabbar_cookie_consent";
export const CONSENT_VERSION = 1;

/** Fired on window when the footer's "Cookie settings" link is clicked. */
export const OPEN_SETTINGS_EVENT = "rabbar:open-cookie-settings";

/** Fired on window whenever the saved choice changes in this tab. */
const CHANGED_EVENT = "rabbar:cookie-consent-changed";

/**
 * Subscribe to the saved choice, for useSyncExternalStore: changes in this
 * tab (saveConsent) and in other tabs (the storage event).
 */
export function subscribeConsent(onChange: () => void) {
  window.addEventListener(CHANGED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * The choice made on this page, for when storage is blocked (some private
 * modes): the banner still closes and the choice holds until the page is
 * left.
 */
let memoryChoice: ConsentChoice | null = null;

interface StoredConsent {
  choice: ConsentChoice;
  version: number;
  /** ISO timestamp: when the choice was made. */
  at: string;
}

/** The saved choice, or null if none has been made. */
export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return memoryChoice;
    const stored = JSON.parse(raw) as StoredConsent;
    if (stored.version !== CONSENT_VERSION) return memoryChoice;
    return stored.choice === "accepted" || stored.choice === "declined"
      ? stored.choice
      : memoryChoice;
  } catch {
    return memoryChoice;
  }
}

export function saveConsent(choice: ConsentChoice) {
  memoryChoice = choice;
  try {
    const stored: StoredConsent = {
      choice,
      version: CONSENT_VERSION,
      at: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Private mode or blocked storage: memoryChoice holds it for this page.
  }
  window.dispatchEvent(new Event(CHANGED_EVENT));
}

/**
 * Delete the cookies Google Analytics and Google Ads set (_ga, _ga_<id>,
 * _gid, _gat, _gcl_*), on this host and its parent domains, after someone
 * who had accepted changes their mind.
 */
export function clearGoogleCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => /^(_ga|_gid|_gat|_gcl_)/.test(name));
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=.${parts.slice(i).join(".")}`);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GA_ID, ADS_ID } from "@/lib/gtag";
import GoogleAnalytics from "@/components/GoogleAnalyticsWrapper";
/** Display face — geometric and slightly technical, to match the wordmark. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

/** Body face — Inter for long-form legibility at small sizes. */
const inter = Inter({
  variable: "--font-body-face",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE =
  "Rabbar Africa — Job Card Software, WhatsApp Invoices & Inspection Reports";
const SITE_DESCRIPTION =
  "Digital job cards, invoices and receipts on WhatsApp, vehicle inspection reports and paperwork management, for Nigerian workshops and businesses. Free to start.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rabbar.africa"),
  title: {
    default: SITE_TITLE,
    template: "%s | Rabbar Africa",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "job card software",
    "job card app",
    "digital job card",
    "mechanic job card",
    "workshop job card Nigeria",
    "vehicle inspection report",
    "car inspection checklist PDF",
    "vehicle paperwork management",
    "vehicle document expiry tracking",
    "WhatsApp invoice",
    "send invoice on WhatsApp",
    "receipt generator WhatsApp",
    "workshop management software Nigeria",
    "auto repair shop software Nigeria",
    "garage management software",
    "invoicing app Nigeria",
  ],
  authors: [{ name: "Rabbar Africa" }],
  creator: "Rabbar Africa",
  publisher: "Rabbar Africa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rabbar.africa",
    siteName: "Rabbar Africa",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@rabbarafrica",
  },

  icons: {
    icon: [
      {
        url: "/favicon-light.ico",
        media: "(prefers-color-scheme: light)",
        type: "image/x-icon",
      },
      {
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
        type: "image/x-icon",
      },
      // Fallback ICO for browsers that don't support media queries or SVG
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_ID}', { send_page_view: false });
            gtag('config', '${ADS_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

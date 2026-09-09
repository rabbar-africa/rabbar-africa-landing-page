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

export const metadata: Metadata = {
  metadataBase: new URL("https://rabbar.africa"),
  title: {
    default: "Rabbar Africa - Premier Automobile Services in Nigeria",
    template: "%s | Rabbar Africa",
  },
  description:
    "Professional automobile services across Nigeria. Expert repairs, maintenance, documentation, and insurance services. Your trusted partner for all vehicle needs.",
  keywords: [
    "auto repair Nigeria",
    "car maintenance",
    "vehicle documentation",
    "car insurance Nigeria",
    "automobile services",
    "vehicle inspection",
    "car repairs",
    "automotive services Nigeria",
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
    url: "https://rabbar.africa",
    siteName: "Rabbar Africa",
    title: "Rabbar Africa - Premier Automobile Services in Nigeria",
    description:
      "Professional automobile services across Nigeria. Expert repairs, maintenance, documentation, and insurance services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rabbar Africa - Automobile Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabbar Africa - Premier Automobile Services in Nigeria",
    description:
      "Professional automobile services across Nigeria. Expert repairs, maintenance, documentation, and insurance services.",
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

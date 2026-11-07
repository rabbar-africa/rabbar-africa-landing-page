import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The invoicing platform used to be "Jobcard" at /jobcard; it is now the
      // homepage. Free-plan invoices, receipts and statements already sent to
      // customers print rabbar.africa/jobcard, so this must stay permanent.
      { source: "/jobcard", destination: "/", permanent: true },
    ];
  },
  turbopack: {
    // Pin the workspace root so Turbopack ignores stray lockfiles in parent dirs.
    root: path.resolve(__dirname),
  },
  images: {
    // Next 16 only serves qualities listed here (defaults to [75]).
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

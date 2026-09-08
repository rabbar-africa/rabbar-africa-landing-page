import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

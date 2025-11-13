import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  hostname: "rabbar.africa",
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"],
  },
};

export default nextConfig;

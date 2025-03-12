import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty for default
        pathname: "/**", // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;

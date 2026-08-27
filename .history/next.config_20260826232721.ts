import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Add this experimental block right here:
  experimental: {
    cacheComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

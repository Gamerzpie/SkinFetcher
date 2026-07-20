import type { NextConfig } from "next";

// Loader path from @ideavo/webpack-tagger
const loaderPath = require.resolve("@ideavo/webpack-tagger");

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  allowedDevOrigins: ["*.e2b.app", "*.ideavo.app", "*.ideavo.ai"],

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath],
      },
    },
  },
};

export default nextConfig;

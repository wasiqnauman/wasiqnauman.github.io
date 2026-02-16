import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization
  },
};

export default nextConfig;

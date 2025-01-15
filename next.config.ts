import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shieldpoint', // Replace with your repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

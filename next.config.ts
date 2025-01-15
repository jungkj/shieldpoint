import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shieldpoint',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/shieldpoint/',
  trailingSlash: true,
};

export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // For LAN testing, run: npm run dev -- -H 0.0.0.0
  // Then access via your local IP (check with ipconfig/ifconfig)
  devIndicators: {
    allowedDevOrigins: ['192.168.22.152:3000'],
  } as any,
};

export default withNextIntl(nextConfig);

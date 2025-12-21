import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-expect-error - allowedDevOrigins is required for cross-device testing but types might be strict
    allowedDevOrigins: ["192.168.22.152:3000", "localhost:3000"],
  },
};

export default withNextIntl(nextConfig);

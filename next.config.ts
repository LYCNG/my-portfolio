import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  // For LAN testing, run: npm run dev -- -H 0.0.0.0
  // Then access via your local IP (check with ipconfig/ifconfig)
};

export default withNextIntl(nextConfig);

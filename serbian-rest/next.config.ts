import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Fix “inferred workspace root” warnings on some Windows setups.
    root: __dirname,
  },
};

export default nextConfig;

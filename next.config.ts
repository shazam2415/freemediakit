import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform.ilke.org.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "idsb.org",
        pathname:"/**",
      },
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname:"/**",
      }
    ],
  },
};

export default nextConfig;
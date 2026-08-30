import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lithavifrontend.vercel.app",
          },
        ],
        destination: "https://www.lithavi.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
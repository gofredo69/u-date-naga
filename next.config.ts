import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/main', destination: '/core/main', permanent: false },
      { source: '/messages', destination: '/core/messages', permanent: false },
      { source: '/profile', destination: '/core/profile', permanent: false },
      { source: '/settings', destination: '/core/settings', permanent: false },
    ];
  },
};

export default nextConfig;

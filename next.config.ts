import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'motionsites.ai',
      },
      {
        protocol: 'https',
        hostname: 'shrug-person-78902957.figma.site',
      },
      {
        protocol: 'https',
        hostname: 'images.higgs.ai',
      },
      {
        protocol: 'https',
        hostname: 'd8j0ntlcm91z4.cloudfront.net',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  // Cấu hình origin cho dev server.
  allowedDevOrigins: ['192.168.2.15', 'localhost:3000', '127.0.0.1:3000'],
};

export default nextConfig;

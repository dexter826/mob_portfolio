import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  // Cấu hình origin cho dev server.
  allowedDevOrigins: ['192.168.2.15', 'localhost:3000', '127.0.0.1:3000'],
};

export default nextConfig;

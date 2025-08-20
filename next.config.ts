import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.example.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.foo.com', pathname: '/**' },
    ],
    unoptimized: true,
  },
};
export default nextConfig;

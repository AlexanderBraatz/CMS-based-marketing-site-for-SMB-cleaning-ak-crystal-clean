import { withNextVideo } from 'next-video/process';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [5, 20, 40, 75],
    remotePatterns: [
      {
        protocol: 'https',

        hostname: 'assets.tina.io',

        pathname: '/**',
      },
    ],
  },
};

export default withNextVideo(nextConfig);

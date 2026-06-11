import { withNextVideo } from 'next-video/process';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [5, 20, 75],
  },
};

export default withNextVideo(nextConfig);

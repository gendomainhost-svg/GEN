/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow external images and data
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
};

export default nextConfig;


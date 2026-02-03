/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages (no Node server)
  output: "export",
  trailingSlash: false,
  // Unoptimized images for static hosting (no image API)
  images: {
    unoptimized: true,
  },
  // Allow build to succeed on Cloudflare (fix lint in IDE)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;


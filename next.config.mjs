/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: Vercel serves plain HTML/CSS/JS, no server, no env vars.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

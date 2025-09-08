/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid SWC minification bug that can corrupt `return true` in production
  swcMinify: false,
};

module.exports = nextConfig;

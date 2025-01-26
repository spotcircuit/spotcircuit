/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['blog.spotcircuit.com', 'static.ghost.org', 'example.com', 'anotherdomain.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
    serverActions: true,
  },
  transpilePackages: ['@spotcircuit/ui'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

module.exports = nextConfig

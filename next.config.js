/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['blog.spotcircuit.com', 'static.ghost.org', 'example.com', 'anotherdomain.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3006']
    },
  },
  transpilePackages: ['@spotcircuit/ui'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

module.exports = nextConfig

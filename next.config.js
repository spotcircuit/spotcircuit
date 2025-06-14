/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "spotcircuit.ghost.io",
      },
      {
        protocol: "https",
        hostname: "**.carrier.com",
      },
      {
        protocol: "https",
        hostname: "**.trane.com",
      },
      {
        protocol: "https",
        hostname: "**.lennox.com",
      },
      {
        protocol: "https",
        hostname: "**.rheem.com",
      },
      {
        protocol: "https",
        hostname: "**.goodmanmfg.com",
      },
      {
        protocol: "https",
        hostname: "**.york.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'localhost:3006',
        'spotcircuit.vercel.app',
        '*.spotcircuit.com'
      ]
    }
  },
  typescript: {
    ignoreBuildErrors: true
  },
  transpilePackages: ['@spotcircuit/ui'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
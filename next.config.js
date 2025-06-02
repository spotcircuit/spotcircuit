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
  },
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "localhost:3006",
        "spotcircuit.vercel.app",
        "*.spotcircuit.com",
      ],
    },
  },
  transpilePackages: ["@spotcircuit/ui"],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };

    // Fix for CSS extraction in production builds
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            styles: {
              name: "styles",
              test: /\.css$/,
              chunks: "all",
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;

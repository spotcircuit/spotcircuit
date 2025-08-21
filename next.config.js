/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
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
      // AI Marketing Tools
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https", 
        hostname: "**.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
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
  // Redirects configuration
  async redirects() {
    return [
      { source: '/api', destination: '/api-docs', permanent: true },
      { source: '/downloads', destination: '/resources/downloads', permanent: true },
      { source: '/downloads/:path*', destination: '/resources/downloads/:path*', permanent: true },
      { source: '/local-services', destination: '/local-marketing', permanent: true },
      { source: '/local-services/:path*', destination: '/local-marketing/:path*', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy', permanent: true },
      { source: '/pricing', destination: '/services', permanent: true },
      { source: '/local-seo', destination: '/resources/local-seo-guide', permanent: true },
      { source: '/testimonials', destination: '/case-studies', permanent: true },
      { source: '/integrations', destination: '/services', permanent: true },
      { source: '/automotive', destination: '/industries', permanent: true },
      { source: '/hvac', destination: '/industries/hvac', permanent: true },
      { source: '/contractors', destination: '/industries/contracting', permanent: true },
      { source: '/careers', destination: '/contact', permanent: true },
      { source: '/results', destination: '/case-studies', permanent: true },
      { source: '/case-studies/hvac-success', destination: '/case-studies', permanent: true },
      { source: '/thank-you', destination: '/', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/professional-plan', destination: '/services', permanent: true },
      { source: '/standard-plan', destination: '/services', permanent: true },
      { source: '/home-page261030', destination: '/', permanent: true },
      { source: '/terms-conditions', destination: '/terms', permanent: true },
      { source: '/terms-conditions/', destination: '/terms', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/feed/', destination: '/blog', permanent: true },
      { source: '/effective-strategies-for-local-advertising', destination: '/blog', permanent: true },
      { source: '/insurance-roi-calculator', destination: '/roi-calculator', permanent: true },
      { source: '/saas-roi-calculator', destination: '/roi-calculator', permanent: true },
      // Collapse locale-prefixed URLs that 404
      { source: '/en-US', destination: '/', permanent: true },
      { source: '/en-us', destination: '/', permanent: true },
      // New fixes for broken links
      { source: '/faq', destination: '/local-marketing', permanent: true },
      { source: '/audit', destination: '/contact', permanent: true },
    ];
  }
};

module.exports = nextConfig;
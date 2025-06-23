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
  // TEMPORARILY DISABLED ALL REDIRECTS
  /*
  async redirects() {
    return [
      // Redirect from www to non-www (Note: HTTP to HTTPS is handled by Vercel automatically)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.spotcircuit.com',
          },
        ],
        destination: 'https://spotcircuit.com/:path*',
        permanent: true,
      },
      
      // 404 Fixes - Redirect common 404 errors to their correct pages
      // Home page redirect
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Privacy policy redirect
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy',
        permanent: true,
      },
      // Pricing page redirect
      {
        source: '/pricing',
        destination: '/services',
        permanent: true,
      },
      // Local SEO redirect
      {
        source: '/local-seo',
        destination: '/resources/local-seo-guide',
        permanent: true,
      },
      // Email subdomain redirect - Note: subdomain redirects need to be handled in Vercel dashboard
      // Testimonials redirect
      {
        source: '/testimonials',
        destination: '/case-studies',
        permanent: true,
      },
      // Integrations redirect
      {
        source: '/integrations',
        destination: '/services',
        permanent: true,
      },
      // Industry pages redirects
      {
        source: '/automotive',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/hvac',
        destination: '/industries/hvac',
        permanent: true,
      },
      {
        source: '/contractors',
        destination: '/industries/contracting',
        permanent: true,
      },
      // Careers redirect
      {
        source: '/careers',
        destination: '/contact',
        permanent: true,
      },
      // Results redirect
      {
        source: '/results',
        destination: '/case-studies',
        permanent: true,
      },
      // Case study specific redirect
      {
        source: '/case-studies/hvac-success',
        destination: '/case-studies',
        permanent: true,
      },
      // Thank you page redirect
      {
        source: '/thank-you',
        destination: '/',
        permanent: true,
      },
      // About page redirect
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      // Plan pages redirects
      {
        source: '/professional-plan',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/standard-plan',
        destination: '/services',
        permanent: true,
      },
      // Old home page redirect
      {
        source: '/home-page261030',
        destination: '/',
        permanent: true,
      },
      // Terms redirect
      {
        source: '/terms-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-conditions/',
        destination: '/terms',
        permanent: true,
      },
      // RSS feed redirect
      {
        source: '/feed',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/blog',
        permanent: true,
      },
      // Old blog post redirect
      {
        source: '/effective-strategies-for-local-advertising',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  */
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
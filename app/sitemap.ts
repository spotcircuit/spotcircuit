import { MetadataRoute } from 'next';

// Helper function to get staggered dates for more natural lastModified values
function getStaggeredDate(daysAgo: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.spotcircuit.com';
  
  // Define your main routes with priority and update frequency
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily', lastMod: getStaggeredDate(0) },  // Homepage - highest priority, updated daily
    { path: '/blog', priority: 0.9, changeFreq: 'daily', lastMod: getStaggeredDate(0) },  // Blog - high priority, updated daily
    { path: '/services', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(2) },
    { path: '/seo2', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(3) },
    { path: '/answercircuit', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(4) },
    { path: '/schema-test', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(0) },  // Schema test page - high priority, just created
    { path: '/industries', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(5) },
    { path: '/industries/hvac', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(5) },
    { path: '/industries/plumbing', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(6) },
    { path: '/industries/electrical', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(7) },
    { path: '/industries/roofing', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(8) },
    { path: '/industries/contracting', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(9) },
    { path: '/process', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(14) },
    { path: '/case-studies', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(12) },
    { path: '/launch', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(10) },
    { path: '/resources', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(0) },  // Resources hub page
    { path: '/resources/ai-search-optimization', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(0) },  // Updated recently
    { path: '/resources/local-seo-guide', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(20) },
    { path: '/resources/technical-seo-checklist', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(0) },  // New resource
    { path: '/resources/content-strategy-blueprint', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(0) },  // New resource
    { path: '/resources/analytics-conversion-guide', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(1) },  // New resource
    { path: '/resources/ai-marketing-tools', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(1) },  // New resource
    { path: '/booking', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(25) },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(30) },
    { path: '/local-services', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(35) },
    { path: '/privacy', priority: 0.5, changeFreq: 'yearly', lastMod: getStaggeredDate(60) },
    { path: '/terms', priority: 0.5, changeFreq: 'yearly', lastMod: getStaggeredDate(60) },
    { path: '/cookies', priority: 0.5, changeFreq: 'yearly', lastMod: getStaggeredDate(60) },
    { path: '/accessibility', priority: 0.5, changeFreq: 'yearly', lastMod: getStaggeredDate(60) },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastMod,
    changeFrequency: route.changeFreq as "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
    priority: route.priority,
  }));
}
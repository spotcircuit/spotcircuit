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
    // Core pages
    { path: '', priority: 1.0, changeFreq: 'daily', lastMod: getStaggeredDate(0) },  // Homepage - highest priority, updated daily
    { path: '/services', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(0) },  // Updated today with AI automation
    { path: '/blog', priority: 0.9, changeFreq: 'daily', lastMod: getStaggeredDate(0) },  // Blog - high priority, updated daily
    
    // Main service/solution pages
    { path: '/seo2', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(3) },
    { path: '/answercircuit', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(4) },
    { path: '/local-services', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(5) },
    { path: '/process', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(14) },
    
    // Industries hub and pages
    { path: '/industries', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(0) },  // Updated today
    { path: '/industries/hvac', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(5) },
    { path: '/industries/plumbing', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(6) },
    { path: '/industries/electrical', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(7) },
    { path: '/industries/roofing', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(8) },
    { path: '/industries/contracting', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(9) },
    { path: '/industries/recruiting', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(0) },  // New
    { path: '/industries/legal', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(10) },
    { path: '/industries/medical', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(11) },
    { path: '/industries/medical-spas', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(12) },
    
    // Solution pages
    { path: '/solutions/clientcircuit', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(15) },
    { path: '/solutions/contentcircuit', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(16) },
    { path: '/solutions/analyticscircuit', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(17) },
    { path: '/solutions/chatcircuit', priority: 0.8, changeFreq: 'weekly', lastMod: getStaggeredDate(18) },
    
    // Resources
    { path: '/resources', priority: 0.9, changeFreq: 'weekly', lastMod: getStaggeredDate(0) },  // Resources hub page
    { path: '/resources/ai-search-optimization', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(0) },  // Updated recently
    { path: '/resources/local-seo-guide', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(20) },
    { path: '/resources/technical-seo-checklist', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(0) },  // New resource
    { path: '/resources/content-strategy-blueprint', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(0) },  // New resource
    { path: '/resources/analytics-conversion-guide', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(1) },  // New resource
    { path: '/resources/ai-marketing-tools', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(1) },  // New resource
    
    // Other important pages
    { path: '/case-studies', priority: 0.8, changeFreq: 'monthly', lastMod: getStaggeredDate(12) },
    { path: '/booking', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(25) },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly', lastMod: getStaggeredDate(30) },
    
    // Less important pages
    { path: '/launch', priority: 0.6, changeFreq: 'monthly', lastMod: getStaggeredDate(10) },
    { path: '/schema-test', priority: 0.3, changeFreq: 'yearly', lastMod: getStaggeredDate(0) },  // Test page - low priority
    { path: '/sitemap-visual', priority: 0.2, changeFreq: 'yearly', lastMod: getStaggeredDate(40) },  // Visual sitemap - very low priority
    
    // Legal/footer pages
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
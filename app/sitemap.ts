import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://spotcircuit.com';
  
  // Define your main routes
  const routes = [
    '',
    '/services',
    '/industries',
    '/industries/hvac',
    '/pricing',
    '/about',
    '/contact',
    '/booking',
    '/blog',
    '/case-studies',
    '/process',
    '/launch',
    '/terms',
    '/privacy',
    '/cookies',
    '/accessibility',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

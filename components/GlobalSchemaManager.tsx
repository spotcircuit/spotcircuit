'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Global Schema Manager
 * Manages all site-wide schema.org structured data
 * Prevents duplicates and ensures proper schema hierarchy
 */
export default function GlobalSchemaManager() {
  const pathname = usePathname();
  
  const schemaData = useMemo(() => {
    const baseUrl = 'https://www.spotcircuit.com';
    
    // Organization Schema (site-wide)
    const organizationSchema = {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'SpotCircuit',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/spotcircuit-logo.png`,
        width: 200,
        height: 60
      },
      description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
      sameAs: [
        'https://www.linkedin.com/company/spotcircuit',
        'https://twitter.com/spotcircuit'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'info@spotcircuit.com',
        availableLanguage: ['en-US']
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      }
    };
    
    // Website Schema (site-wide)
    const websiteSchema = {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'SpotCircuit',
      description: 'AI-Powered Local SEO & Marketing Solutions',
      publisher: {
        '@id': `${baseUrl}/#organization`
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
    
    // WebPage Schema (for current page)
    const webPageSchema = {
      '@type': 'WebPage',
      '@id': `${baseUrl}${pathname}#webpage`,
      url: `${baseUrl}${pathname}`,
      name: getPageTitle(pathname),
      isPartOf: {
        '@id': `${baseUrl}/#website`
      },
      about: {
        '@id': `${baseUrl}/#organization`
      },
      description: getPageDescription(pathname)
    };
    
    // Combine all schemas in a graph
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        websiteSchema,
        webPageSchema
      ]
    };
  }, [pathname]);
  
  return (
    <Script 
      id="global-schema-jsonld" 
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}

// Helper functions to get page-specific information
function getPageTitle(pathname: string): string {
  const titles: Record<string, string> = {
    '/': 'SpotCircuit - AI-Powered Local SEO & Marketing',
    '/blog': 'Blog - SpotCircuit',
    '/contact': 'Contact Us - SpotCircuit',
    '/process': 'Our Process - SpotCircuit',
    '/answercircuit': 'AnswerCircuit - AI Optimization Platform',
    '/booking': 'Book a Consultation - SpotCircuit',
    '/case-studies': 'Case Studies - SpotCircuit',
    '/resources': 'Resources - SpotCircuit',
  };
  
  // Handle dynamic routes
  if (pathname.startsWith('/industries/')) {
    const industry = pathname.split('/')[2];
    return `${industry.charAt(0).toUpperCase() + industry.slice(1)} Marketing Solutions - SpotCircuit`;
  }
  
  if (pathname.startsWith('/resources/')) {
    const resource = pathname.split('/')[2];
    return `${resource.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - SpotCircuit`;
  }
  
  return titles[pathname] || 'SpotCircuit';
}

function getPageDescription(pathname: string): string {
  const descriptions: Record<string, string> = {
    '/': 'Transform your business with AI-powered SEO and marketing solutions from SpotCircuit.',
    '/blog': 'Insights on AI-First SEO, LLM optimization, and growth strategies for ambitious businesses.',
    '/contact': 'Get in touch with SpotCircuit to discuss your AI-powered marketing needs.',
    '/process': 'Learn about our proven process for implementing AI-powered marketing solutions.',
    '/answercircuit': 'AnswerCircuit ensures your brand is prominently featured in AI assistant responses.',
    '/booking': 'Schedule a consultation with our AI marketing experts.',
    '/case-studies': 'Real results from real businesses using SpotCircuit.',
  };
  
  // Handle dynamic routes
  if (pathname.startsWith('/industries/')) {
    return 'Industry-specific AI-powered marketing solutions tailored for your business.';
  }
  
  if (pathname.startsWith('/resources/')) {
    return 'Expert resources and guides for AI-powered marketing and SEO optimization.';
  }
  
  return descriptions[pathname] || 'AI-Powered Local SEO & Marketing Solutions from SpotCircuit.';
}
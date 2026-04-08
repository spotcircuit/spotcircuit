'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function GlobalSchemaManager() {
  const pathname = usePathname();

  const schemaData = useMemo(() => {
    const baseUrl = 'https://www.spotcircuit.com';

    const organizationSchema = {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'SpotCircuit',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/static/images/sclogo.png`,
        width: 200,
        height: 200
      },
      description: 'Agentic AI engineering for teams that ship. Framework licensing, Claude Code implementation, knowledge bases, and data pipelines.',
      sameAs: [
        'https://github.com/spotcircuit',
        'https://www.linkedin.com/company/spotcircuit',
        'https://twitter.com/spotcircuit'
      ],
      founder: {
        '@type': 'Person',
        name: 'Brian Pyatt'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@spotcircuit.com',
        availableLanguage: ['English']
      }
    };

    const websiteSchema = {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'SpotCircuit',
      description: 'Agentic AI Engineering',
      publisher: {
        '@id': `${baseUrl}/#organization`
      }
    };

    const titles: Record<string, string> = {
      '/': 'SpotCircuit - Agentic AI Engineering',
      '/services': 'Services - SpotCircuit',
      '/clarity': 'Clarity Framework - SpotCircuit',
      '/about': 'About - SpotCircuit',
      '/blog': 'Blog - SpotCircuit',
      '/contact': 'Contact - SpotCircuit',
    };

    const descriptions: Record<string, string> = {
      '/': 'Agentic AI engineering for teams that ship.',
      '/services': 'Agentic AI engineering services: frameworks, Claude Code, knowledge bases, data pipelines.',
      '/clarity': 'Open-source agentic intelligence framework based on Karpathy\'s LLM Wiki pattern.',
      '/about': 'SpotCircuit builds agentic AI systems for engineering teams.',
      '/blog': 'Technical blog on agentic AI patterns, Claude Code, and knowledge systems.',
      '/contact': 'Get in touch with SpotCircuit.',
    };

    const webPageSchema = {
      '@type': 'WebPage',
      '@id': `${baseUrl}${pathname}#webpage`,
      url: `${baseUrl}${pathname}`,
      name: titles[pathname] || 'SpotCircuit',
      isPartOf: {
        '@id': `${baseUrl}/#website`
      },
      about: {
        '@id': `${baseUrl}/#organization`
      },
      description: descriptions[pathname] || 'Agentic AI engineering for teams that ship.'
    };

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

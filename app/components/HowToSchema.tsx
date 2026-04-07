import Script from 'next/script';

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToTool {
  name: string;
  description?: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT2H30M")
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tools?: HowToTool[];
  steps: HowToStep[];
  image?: string;
}

export default function HowToSchema(props: HowToSchemaProps) {
  const {
    name,
    description,
    totalTime,
    estimatedCost,
    supply,
    tools,
    steps,
    image
  } = props;

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `#howto-${name.replace(/\s+/g, '-').toLowerCase()}`,
    name,
    description,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      '@id': 'https://www.spotcircuit.com/#organization',
      name: 'SpotCircuit'
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.spotcircuit.com/#organization',
      name: 'SpotCircuit'
    },
    datePublished: new Date().toISOString().split('T')[0],
    ...(totalTime && {
      totalTime,
      performTime: totalTime
    }),
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        '@id': `#cost-${name.replace(/\s+/g, '-').toLowerCase()}`,
        currency: estimatedCost.currency,
        value: estimatedCost.value
      }
    }),
    ...(supply && {
      supply: supply.map((item, index) => ({
        '@type': 'HowToSupply',
        '@id': `#supply-${index + 1}`,
        name: item
      }))
    }),
    ...(tools && {
      tool: tools.map((tool, index) => ({
        '@type': 'HowToTool',
        '@id': `#tool-${index + 1}`,
        name: tool.name,
        ...(tool.description && { description: tool.description }),
        ...(tool.url && { url: tool.url }),
        ...(tool.image && {
          image: {
            '@type': 'ImageObject',
            url: tool.image
          }
        })
      }))
    }),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        '@id': `#howto-image-${name.replace(/\s+/g, '-').toLowerCase()}`,
        url: image
      }
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      '@id': `#step-${index + 1}`,
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image
        }
      })
    })),
    totalSteps: steps.length
  };

  return (
    <Script id="howto-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(howToSchema)}
    </Script>
  );
}

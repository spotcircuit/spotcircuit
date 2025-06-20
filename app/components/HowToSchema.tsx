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
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: estimatedCost.currency,
        value: estimatedCost.value
      }
    }),
    ...(supply && {
      supply: supply.map(item => ({
        '@type': 'HowToSupply',
        name: item
      }))
    }),
    ...(tools && {
      tool: tools.map(tool => ({
        '@type': 'HowToTool',
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
        url: image
      }
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
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
    }))
  };

  return (
    <Script id="howto-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(howToSchema)}
    </Script>
  );
}

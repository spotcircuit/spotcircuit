import React from 'react';
import Script from 'next/script';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
  schemaType?: string;
  id?: string;
}

export default function FaqSchema({ faqs, schemaType = 'FAQPage', id = 'faq-schema' }: FaqSchemaProps) {
  // Using FAQPage as the default schema type for better Google Rich Results support
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': `#${id}`,
    name: 'Frequently Asked Questions',
    inLanguage: 'en-US',
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `#question-${index + 1}`,
      name: faq.question,
      text: faq.question,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': `#answer-${index + 1}`,
        text: faq.answer,
        inLanguage: 'en-US',
        author: {
          '@type': 'Organization',
          '@id': 'https://www.spotcircuit.com/#organization',
          name: 'SpotCircuit'
        }
      },
      author: {
        '@type': 'Organization',
        '@id': 'https://www.spotcircuit.com/#organization',
        name: 'SpotCircuit'
      }
    }))
  };

  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(faqSchema)}
    </Script>
  );
}

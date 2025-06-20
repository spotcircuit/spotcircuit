import React from 'react';
import Script from 'next/script';

interface ImageObjectSchemaProps {
  url: string;
  name: string;
  description: string;
  width?: number;
  height?: number;
  contentUrl?: string;
}

export default function ImageObjectSchema({
  url,
  name,
  description,
  width,
  height,
  contentUrl
}: ImageObjectSchemaProps) {
  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: contentUrl || url,
    url,
    name,
    description,
    ...(width && { width }),
    ...(height && { height })
  };

  return (
    <Script id="image-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(imageSchema)}
    </Script>
  );
}
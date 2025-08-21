import { Metadata } from 'next';

/**
 * Generate proper hreflang alternates for a page
 * Fixes the issues with missing self-referencing links and x-default
 */
export function generateAlternates(pathname: string): Metadata['alternates'] {
  const baseUrl = 'https://www.spotcircuit.com';
  const fullUrl = `${baseUrl}${pathname}`;
  
  return {
    canonical: fullUrl,
    languages: {
      'x-default': fullUrl,
      'en': fullUrl,
    },
  };
}

/**
 * Create metadata with proper hreflang tags
 */
export function createMetadata(
  title: string,
  description: string,
  pathname: string,
  additionalMetadata?: Partial<Metadata>
): Metadata {
  const baseUrl = 'https://www.spotcircuit.com';
  const fullUrl = `${baseUrl}${pathname}`;
  
  return {
    title,
    description,
    alternates: generateAlternates(pathname),
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'SpotCircuit',
      locale: 'en_US',
      type: 'website',
      ...additionalMetadata?.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...additionalMetadata?.twitter,
    },
    ...additionalMetadata,
  };
}
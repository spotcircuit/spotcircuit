import Script from 'next/script';

interface AggregateRatingSchemaProps {
  itemName: string;
  itemType: string; // e.g., 'Service', 'Product', 'LocalBusiness'
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  description?: string;
  url?: string;
  image?: string;
}

/**
 * AggregateRatingSchema component for adding aggregate rating schema markup
 * This follows Google's guidelines for review snippets
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */
export default function AggregateRatingSchema({
  itemName,
  itemType,
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
  description,
  url,
  image
}: AggregateRatingSchemaProps) {
  // Ensure rating value is within range
  const safeRatingValue = Math.max(worstRating, Math.min(bestRating, ratingValue));
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: safeRatingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating
    },
    ...(description && { description }),
    ...(url && { url }),
    ...(image && { image })
  };

  return (
    <Script id="aggregate-rating-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

import Script from 'next/script';
import { sanitizeSchema, validateNumericValue, validateUrl, validateISODate } from '@/lib/schema-validation';

interface ClaimReviewSchemaProps {
  claimReviewed: string;
  reviewRating: {
    ratingValue: number | string;
    bestRating: number | string;
    worstRating: number | string;
    alternateName?: string; // e.g., "True", "Mostly False", etc.
  };
  itemReviewed: {
    name?: string;
    description?: string;
    author?: {
      name: string;
      type?: string; // 'Person' or 'Organization'
      url?: string;
    };
    datePublished?: string; // ISO 8601 format
    appearance?: {
      type: string; // e.g., 'WebPage', 'TVEpisode'
      url: string;
    }[];
  };
  author: {
    name: string;
    type?: string; // 'Person' or 'Organization'
    url?: string;
  };
  url: string; // Changed from reviewUrl for consistency
  datePublished?: string; // ISO 8601 format - made optional
}

export default function ClaimReviewSchema(props: ClaimReviewSchemaProps) {
  const {
    claimReviewed,
    reviewRating,
    itemReviewed,
    author,
    url,
    datePublished
  } = props;

  // Convert rating values to numbers if they're strings
  const ratingValue = typeof reviewRating.ratingValue === 'string' 
    ? parseFloat(reviewRating.ratingValue) 
    : reviewRating.ratingValue;
  
  const bestRating = typeof reviewRating.bestRating === 'string'
    ? parseFloat(reviewRating.bestRating)
    : reviewRating.bestRating;
    
  const worstRating = typeof reviewRating.worstRating === 'string'
    ? parseFloat(reviewRating.worstRating)
    : reviewRating.worstRating;

  const claimReviewSchema = sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed,
    reviewRating: {
      '@type': 'Rating',
      ratingValue,
      bestRating,
      worstRating,
      ...(reviewRating.alternateName && { alternateName: reviewRating.alternateName })
    },
    itemReviewed: {
      '@type': 'Claim',
      ...(itemReviewed.name && { name: itemReviewed.name }),
      ...(itemReviewed.description && { description: itemReviewed.description }),
      ...(itemReviewed.datePublished && { datePublished: itemReviewed.datePublished }),
      ...(itemReviewed.author && {
        author: {
          '@type': itemReviewed.author.type || 'Person',
          name: itemReviewed.author.name,
          ...(itemReviewed.author.url && { url: itemReviewed.author.url })
        }
      }),
      ...(itemReviewed.appearance && itemReviewed.appearance.length > 0 && {
        appearance: itemReviewed.appearance.map(app => ({
          '@type': app.type,
          url: app.url
        }))
      })
    },
    author: {
      '@type': author.type || 'Organization',
      name: author.name,
      ...(author.url && { url: author.url })
    },
    url,
    ...(datePublished && { datePublished })
  });

  return (
    <Script id="claim-review-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(claimReviewSchema)}
    </Script>
  );
}

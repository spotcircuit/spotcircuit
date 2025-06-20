import Script from 'next/script';

interface ClaimReviewSchemaProps {
  claimReviewed: string;
  reviewRating: {
    ratingValue: number;
    bestRating: number;
    worstRating: number;
    alternateName?: string; // e.g., "True", "Mostly False", etc.
  };
  itemReviewed: {
    name?: string;
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
  reviewUrl: string;
  datePublished: string; // ISO 8601 format
}

export default function ClaimReviewSchema(props: ClaimReviewSchemaProps) {
  const {
    claimReviewed,
    reviewRating,
    itemReviewed,
    author,
    reviewUrl,
    datePublished
  } = props;

  const claimReviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating,
      worstRating: reviewRating.worstRating,
      ...(reviewRating.alternateName && { alternateName: reviewRating.alternateName })
    },
    itemReviewed: {
      '@type': 'Claim',
      ...(itemReviewed.name && { name: itemReviewed.name }),
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
    url: reviewUrl,
    datePublished
  };

  return (
    <Script id="claim-review-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(claimReviewSchema)}
    </Script>
  );
}

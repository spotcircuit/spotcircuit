export interface Organization {
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: {
    '@type': 'ImageObject';
    url: string;
    width: string;
    height: string;
  };
}

export interface WebPage {
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  publisher: Organization;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export interface LegalDocument extends WebPage {
  '@context': string;
}

export interface FAQPage {
  '@context': string;
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

export interface BreadcrumbList {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }[];
}

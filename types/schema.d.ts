// Type definitions for schema.org structured data
declare namespace Schema {
  interface Organization {
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

  interface WebPage {
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

  interface LegalDocument extends WebPage {
    '@context': string;
  }
}

export = Schema;
export as namespace Schema;

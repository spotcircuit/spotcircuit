import type { Metadata } from 'next';

export interface PageContext {
  pageType: 'home' | 'industry' | 'service' | 'resource' | 'blog' | 'blog-category' | 'blog-tag' | 'legal' | 'contact' | 'about';
  industry?: string;
  service?: string;
  category?: string;
  tag?: string;
  query?: string;
  title?: string;
  customContext?: Record<string, any>;
}

export interface MetadataTemplate {
  title: string;
  description: string;
  keywords?: string[];
}

// Industry-specific templates
const INDUSTRY_TEMPLATES: Record<string, MetadataTemplate> = {
  hvac: {
    title: 'AI Marketing Solutions for HVAC Contractors | SpotCircuit',
    description: 'Transform your HVAC business with AI-powered marketing that drives qualified leads, automates scheduling, and grows your customer base.',
    keywords: ['hvac marketing', 'hvac contractor leads', 'hvac seo', 'hvac automation']
  },
  plumbing: {
    title: 'AI Marketing Solutions for Plumbing Contractors | SpotCircuit',
    description: 'Boost your plumbing business with AI-driven marketing automation, lead generation, and customer acquisition strategies.',
    keywords: ['plumbing marketing', 'plumber leads', 'plumbing seo', 'plumbing automation']
  },
  electrical: {
    title: 'AI Marketing Solutions for Electrical Contractors | SpotCircuit',
    description: 'Power up your electrical contracting business with AI marketing that generates qualified leads and automates customer outreach.',
    keywords: ['electrical contractor marketing', 'electrician leads', 'electrical seo']
  },
  roofing: {
    title: 'AI Marketing Solutions for Roofing Contractors | SpotCircuit',
    description: 'Elevate your roofing business with AI-powered marketing that captures storm leads, automates follow-ups, and scales your operations.',
    keywords: ['roofing marketing', 'roofing leads', 'storm damage leads', 'roofing seo']
  },
  contracting: {
    title: 'AI Marketing Solutions for General Contractors | SpotCircuit',
    description: 'Scale your contracting business with AI marketing automation that generates commercial and residential project leads consistently.',
    keywords: ['contractor marketing', 'construction leads', 'contractor automation']
  },
  legal: {
    title: 'AI Marketing Solutions for Law Firms | SpotCircuit',
    description: 'Grow your law firm with AI-powered marketing that attracts quality clients, automates intake, and builds your legal authority.',
    keywords: ['law firm marketing', 'legal marketing', 'attorney leads', 'legal seo']
  },
  medical: {
    title: 'AI Marketing Solutions for Healthcare Practices | SpotCircuit',
    description: 'Expand your medical practice with AI marketing that attracts patients, manages appointments, and enhances online reputation.',
    keywords: ['medical marketing', 'healthcare marketing', 'patient acquisition']
  },
  'medical-spas': {
    title: 'AI Marketing Solutions for Medical Spas | SpotCircuit',
    description: 'Beautify your med spa business with AI marketing that books appointments, showcases treatments, and drives aesthetic consultations.',
    keywords: ['medical spa marketing', 'aesthetic marketing', 'med spa leads']
  },
  recruiting: {
    title: 'AI Marketing Solutions for Recruiting Agencies | SpotCircuit',
    description: 'Supercharge your recruiting agency with AI that sources candidates, nurtures client relationships, and accelerates placements.',
    keywords: ['recruiting marketing', 'staffing agency automation', 'talent acquisition']
  },
  saas: {
    title: 'AI Marketing Solutions for SaaS Companies | SpotCircuit',
    description: 'Scale your SaaS with AI marketing automation that drives trial signups, reduces churn, and optimizes customer lifetime value.',
    keywords: ['saas marketing', 'software marketing', 'saas automation', 'b2b marketing']
  },
  consulting: {
    title: 'AI Marketing Solutions for Consulting Firms | SpotCircuit',
    description: 'Grow your consulting practice with AI marketing that positions your expertise, generates leads, and builds thought leadership.',
    keywords: ['consulting marketing', 'professional services marketing', 'consultant leads']
  },
  insurance: {
    title: 'AI Marketing Solutions for Insurance Agencies | SpotCircuit',
    description: 'Protect and grow your insurance agency with AI marketing that nurtures leads, cross-sells policies, and retains clients.',
    keywords: ['insurance marketing', 'insurance leads', 'insurance agency automation']
  },
  'financial-advisors': {
    title: 'AI Marketing Solutions for Financial Advisors | SpotCircuit',
    description: 'Build wealth and your practice with AI marketing that attracts high-value clients and automates relationship management.',
    keywords: ['financial advisor marketing', 'wealth management marketing', 'financial planning leads']
  },
  'marketing-agencies': {
    title: 'AI Marketing Solutions for Marketing Agencies | SpotCircuit',
    description: 'Amplify your agency with AI marketing tools that deliver better client results, automate reporting, and scale operations.',
    keywords: ['agency marketing', 'marketing agency automation', 'agency growth']
  },
  landscaping: {
    title: 'AI Marketing Solutions for Landscaping Companies | SpotCircuit',
    description: 'Cultivate your landscaping business with AI marketing that generates seasonal leads, showcases projects, and retains clients.',
    keywords: ['landscaping marketing', 'lawn care marketing', 'landscaping leads']
  }
};

// Service-specific templates
const SERVICE_TEMPLATES: Record<string, MetadataTemplate> = {
  'local-marketing': {
    title: 'AI-Powered Local Marketing Solutions | SpotCircuit',
    description: 'Dominate local search with AI marketing automation that drives foot traffic, generates local leads, and builds community presence.',
    keywords: ['local marketing', 'local seo', 'local business marketing']
  },
  'lead-generation': {
    title: 'AI Lead Generation Services | SpotCircuit',
    description: 'Generate qualified leads automatically with AI-powered systems that identify, nurture, and convert prospects into customers.',
    keywords: ['lead generation', 'ai lead generation', 'automated lead capture']
  },
  'ai-automation': {
    title: 'AI Marketing Automation Services | SpotCircuit',
    description: 'Automate your marketing with AI workflows that handle lead nurturing, customer communications, and campaign optimization.',
    keywords: ['marketing automation', 'ai automation', 'workflow automation']
  },
  'ai-search-visibility': {
    title: 'AI Search Visibility Optimization | SpotCircuit',
    description: 'Maximize visibility across AI platforms like ChatGPT, Claude, and Perplexity while dominating traditional search results.',
    keywords: ['ai search optimization', 'ai visibility', 'llm optimization']
  }
};

// Blog category templates
const BLOG_CATEGORY_TEMPLATES: Record<string, MetadataTemplate> = {
  'marketing-automation': {
    title: 'Marketing Automation Insights | SpotCircuit Blog',
    description: 'Discover cutting-edge marketing automation strategies, tools, and best practices to streamline your campaigns and boost ROI.',
    keywords: ['marketing automation', 'automation strategies', 'marketing tools']
  },
  'ai-marketing': {
    title: 'AI Marketing Insights | SpotCircuit Blog',
    description: 'Explore how artificial intelligence is transforming marketing with practical insights, case studies, and implementation guides.',
    keywords: ['ai marketing', 'artificial intelligence marketing', 'ai tools']
  },
  'local-seo': {
    title: 'Local SEO Tips & Strategies | SpotCircuit Blog',
    description: 'Master local search optimization with expert tips, Google My Business strategies, and local marketing best practices.',
    keywords: ['local seo', 'local search', 'google my business']
  },
  'lead-generation': {
    title: 'Lead Generation Strategies | SpotCircuit Blog',
    description: 'Learn proven lead generation tactics, conversion optimization techniques, and nurturing strategies that drive revenue.',
    keywords: ['lead generation', 'conversion optimization', 'sales funnel']
  }
};

// Resource-specific templates
const RESOURCE_TEMPLATES: Record<string, MetadataTemplate> = {
  'ai-search-optimization': {
    title: 'AI Search Optimization Guide | SpotCircuit',
    description: 'Complete guide to optimizing your content for AI search engines like ChatGPT, Claude, and Perplexity with proven strategies.',
    keywords: ['ai search optimization', 'ai seo guide', 'llm optimization']
  },
  'technical-seo-checklist': {
    title: 'Technical SEO Checklist | SpotCircuit Resources',
    description: 'Comprehensive technical SEO checklist covering site speed, crawlability, indexing, and Core Web Vitals optimization.',
    keywords: ['technical seo', 'seo checklist', 'site optimization']
  },
  'content-strategy-blueprint': {
    title: 'Content Strategy Blueprint | SpotCircuit Resources',
    description: 'Strategic framework for creating content that drives engagement, builds authority, and converts visitors into customers.',
    keywords: ['content strategy', 'content marketing', 'content planning']
  },
  'analytics-conversion-guide': {
    title: 'Analytics & Conversion Guide | SpotCircuit Resources',
    description: 'Data-driven guide to tracking, analyzing, and optimizing your marketing campaigns for maximum conversion rates.',
    keywords: ['analytics', 'conversion optimization', 'marketing metrics']
  },
  'ai-marketing-tools': {
    title: 'AI Marketing Tools Guide | SpotCircuit Resources',
    description: 'Comprehensive guide to the best AI marketing tools for automation, content creation, and customer engagement.',
    keywords: ['ai marketing tools', 'marketing automation tools', 'ai tools']
  }
};

export function generateDynamicDescription(context: PageContext): string {
  const { pageType, industry, service, category, tag, query, title } = context;

  // Industry pages
  if (pageType === 'industry' && industry) {
    const template = INDUSTRY_TEMPLATES[industry];
    if (template) {
      return template.description;
    }
    return `Transform your ${industry} business with AI-powered marketing solutions that drive qualified leads and accelerate growth.`;
  }

  // Service pages
  if (pageType === 'service' && service) {
    const template = SERVICE_TEMPLATES[service];
    if (template) {
      return template.description;
    }
    return `Advanced ${service} solutions powered by AI to optimize your marketing performance and business growth.`;
  }

  // Blog categories
  if (pageType === 'blog-category' && category) {
    const template = BLOG_CATEGORY_TEMPLATES[category?.toLowerCase() || ''];
    if (template) {
      return template.description;
    }
    return `Explore ${category} insights, strategies, and expert advice from SpotCircuit's marketing professionals and industry leaders.`;
  }

  // Blog tags
  if (pageType === 'blog-tag' && tag) {
    return `Discover comprehensive ${tag} content including guides, case studies, and actionable strategies from SpotCircuit experts.`;
  }

  // Resource pages
  if (pageType === 'resource' && service) {
    const template = RESOURCE_TEMPLATES[service];
    if (template) {
      return template.description;
    }
    return `Essential ${service} resource with actionable insights, templates, and strategies to improve your marketing results.`;
  }

  // Legal pages
  if (pageType === 'legal') {
    switch (service) {
      case 'privacy':
        return 'Privacy policy for SpotCircuit outlining how we collect, use, and protect your personal information and data.';
      case 'terms':
        return 'Terms of service for SpotCircuit defining the conditions of use for our AI marketing platform and services.';
      case 'cookies':
        return 'Cookie policy explaining how SpotCircuit uses cookies to enhance your browsing experience and platform functionality.';
      case 'accessibility':
        return 'Accessibility statement detailing SpotCircuit\'s commitment to digital accessibility and inclusive design practices.';
      default:
        return 'Legal information and policies for SpotCircuit\'s AI-powered marketing platform and services.';
    }
  }

  // Contact page
  if (pageType === 'contact') {
    return 'Get in touch with SpotCircuit for AI-powered marketing solutions. Schedule a consultation to discuss how we can help grow your business.';
  }

  // Generic fallback with context
  if (title) {
    return `${title} - Advanced AI marketing solutions and insights from SpotCircuit to help grow your business effectively.`;
  }

  // Ultimate fallback (should rarely be used)
  return 'AI-powered marketing solutions and business growth strategies from SpotCircuit\'s team of experts and industry professionals.';
}

export function generatePageMetadata(context: PageContext): Metadata {
  const { pageType, industry, service, category, tag } = context;

  // Generate dynamic title
  let title = '';
  if (pageType === 'industry' && industry && INDUSTRY_TEMPLATES[industry]) {
    title = INDUSTRY_TEMPLATES[industry].title;
  } else if (pageType === 'service' && service && SERVICE_TEMPLATES[service]) {
    title = SERVICE_TEMPLATES[service].title;
  } else if (pageType === 'blog-category' && category && BLOG_CATEGORY_TEMPLATES[category?.toLowerCase() || '']) {
    title = BLOG_CATEGORY_TEMPLATES[category?.toLowerCase() || ''].title;
  } else if (pageType === 'blog-tag' && tag) {
    title = `${tag} Content & Resources | SpotCircuit Blog`;
  } else if (pageType === 'resource' && service && RESOURCE_TEMPLATES[service]) {
    title = RESOURCE_TEMPLATES[service].title;
  } else {
    title = context.title || 'AI-Powered Marketing Solutions | SpotCircuit';
  }

  // Generate dynamic description
  const description = generateDynamicDescription(context);

  // Generate keywords
  let keywords: string[] = [];
  if (pageType === 'industry' && industry && INDUSTRY_TEMPLATES[industry]) {
    keywords = INDUSTRY_TEMPLATES[industry].keywords || [];
  } else if (pageType === 'service' && service && SERVICE_TEMPLATES[service]) {
    keywords = SERVICE_TEMPLATES[service].keywords || [];
  } else if (pageType === 'blog-category' && category && BLOG_CATEGORY_TEMPLATES[category?.toLowerCase() || '']) {
    keywords = BLOG_CATEGORY_TEMPLATES[category?.toLowerCase() || ''].keywords || [];
  }

  // Construct URL path
  let urlPath = '';
  if (pageType === 'industry' && industry) {
    urlPath = `/industries/${industry}`;
  } else if (pageType === 'service' && service) {
    urlPath = `/${service}`;
  } else if (pageType === 'blog-category' && category) {
    urlPath = `/blog/category/${category}`;
  } else if (pageType === 'blog-tag' && tag) {
    urlPath = `/blog/tag/${tag}`;
  } else if (pageType === 'resource' && service) {
    urlPath = `/resources/${service}`;
  }

  const canonicalUrl = `https://www.spotcircuit.com${urlPath}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': canonicalUrl,
        'en': canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'SpotCircuit',
      type: 'website',
      locale: 'en_US',
      images: [{
        url: `/static/images/${service || industry || 'default'}-og.webp`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/static/images/${service || industry || 'default'}-og.webp`],
      creator: '@spotcircuit',
    },
  };
}

// Utility function to validate description length
export function validateDescriptionLength(description: string): { isValid: boolean; length: number; issues: string[] } {
  const length = description.length;
  const issues: string[] = [];

  if (length < 120) {
    issues.push('Description too short (< 120 characters)');
  }
  if (length > 155) {
    issues.push('Description too long (> 155 characters)');
  }

  return {
    isValid: issues.length === 0,
    length,
    issues
  };
}
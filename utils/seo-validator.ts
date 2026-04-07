import type { Metadata } from 'next';

interface SEOValidationResult {
  isValid: boolean;
  issues: string[];
  warnings: string[];
}

interface MetaDescriptionCheck {
  length: number;
  isValid: boolean;
  issues: string[];
}

export function validateMetaDescription(description: string | undefined): MetaDescriptionCheck {
  const issues: string[] = [];

  if (!description) {
    return {
      length: 0,
      isValid: false,
      issues: ['Meta description is missing']
    };
  }

  const length = description.length;

  if (length < 120) {
    issues.push('Meta description is too short (< 120 characters)');
  }

  if (length > 155) {
    issues.push('Meta description is too long (> 155 characters)');
  }

  return {
    length,
    isValid: issues.length === 0,
    issues
  };
}

export function validateMetadata(metadata: Metadata): SEOValidationResult {
  const issues: string[] = [];
  const warnings: string[] = [];

  // Check title
  if (!metadata.title) {
    issues.push('Title is missing');
  } else if (typeof metadata.title === 'string') {
    if (metadata.title.length < 30) {
      warnings.push('Title is short (< 30 characters)');
    }
    if (metadata.title.length > 60) {
      issues.push('Title is too long (> 60 characters)');
    }
  }

  // Check meta description
  const descCheck = validateMetaDescription(metadata.description);
  issues.push(...descCheck.issues);

  // Check for duplicate meta descriptions (comparing with OpenGraph)
  if (metadata.description && metadata.openGraph?.description) {
    if (metadata.description !== metadata.openGraph.description) {
      warnings.push('Meta description differs from OpenGraph description');
    }
  }

  // Check OpenGraph
  if (!metadata.openGraph) {
    warnings.push('OpenGraph metadata is missing');
  } else {
    if (!metadata.openGraph.title) {
      warnings.push('OpenGraph title is missing');
    }
    if (!metadata.openGraph.description) {
      warnings.push('OpenGraph description is missing');
    }
    if (!metadata.openGraph.images || metadata.openGraph.images.length === 0) {
      warnings.push('OpenGraph image is missing');
    }
  }

  // Check Twitter
  if (!metadata.twitter) {
    warnings.push('Twitter metadata is missing');
  } else {
    if (!metadata.twitter.card) {
      warnings.push('Twitter card type is missing');
    }
    if (!metadata.twitter.title) {
      warnings.push('Twitter title is missing');
    }
    if (!metadata.twitter.description) {
      warnings.push('Twitter description is missing');
    }
  }

  // Check canonical URL
  if (!metadata.alternates?.canonical) {
    warnings.push('Canonical URL is missing');
  }

  return {
    isValid: issues.length === 0,
    issues,
    warnings
  };
}

export function optimizeMetaDescription(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Try to cut at sentence boundary
  const sentences = text.split('. ');
  let result = '';

  for (const sentence of sentences) {
    const testResult = result + (result ? '. ' : '') + sentence;
    if (testResult.length > maxLength) {
      break;
    }
    result = testResult;
  }

  // If we have a result, use it
  if (result && result.length >= 120) {
    return result + (result.endsWith('.') ? '' : '.');
  }

  // Otherwise, cut at word boundary
  const words = text.split(' ');
  result = '';

  for (const word of words) {
    const testResult = result + (result ? ' ' : '') + word;
    if (testResult.length > maxLength - 3) {
      break;
    }
    result = testResult;
  }

  return result.trim() + '...';
}
# Canonical URL Fix Summary

## Issue
Nytro Support correctly identified that all pages were canonicalizing to the homepage due to this line in `app/layout.tsx`:
```typescript
alternates: {
  canonical: '/',  // This was applying to ALL pages!
}
```

## What Was Fixed

1. **Removed the global canonical from layout.tsx** - This was causing all pages to inherit the homepage canonical

2. **Fixed individual page metadata** - Added proper canonical URLs to:
   - `/` (homepage) - canonical: '/'
   - `/accessibility` - canonical: '/accessibility'
   - `/blog` - canonical: '/blog'
   - `/services` - canonical: '/services'

## Pages That Still Need Canonical URLs Added

The following pages need their metadata files updated with the `alternates.canonical` property:

### Legal Pages
- `/cookies` - app/cookies/page-metadata.ts
- `/privacy` - app/privacy/page-metadata.ts
- `/terms` - app/terms/page-metadata.ts

### Main Pages
- `/answercircuit` - app/answercircuit/metadata.ts
- `/local-marketing` - app/local-marketing/metadata.ts
- `/medical-spa-ai-audit` - app/medical-spa-ai-audit/metadata.ts
- `/seo2` - app/seo2/metadata.ts

### Industry Pages
- `/industries` - app/industries/page-metadata.ts
- `/industries/roofing` - app/industries/roofing/metadata.ts

### Resource Pages
- `/resources` - app/resources/metadata.ts
- `/resources/ai-search-optimization` - app/resources/ai-search-optimization/metadata.ts
- `/resources/content-strategy-blueprint` - app/resources/content-strategy-blueprint/metadata.ts
- `/resources/local-seo-guide` - app/resources/local-seo-guide/metadata.ts
- `/resources/technical-seo-checklist` - app/resources/technical-seo-checklist/metadata.ts

## How to Fix

For each metadata file, add the `alternates` property with the correct canonical URL:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keywords',
  alternates: {
    canonical: '/page-path',  // Add this!
  },
  openGraph: {
    // ... rest of metadata
  }
};
```

## Important Notes

1. **Use relative URLs** for canonical in the metadata (e.g., `/blog` not `https://spotcircuit.com/blog`)
2. **Every page needs its own canonical** - Next.js will prepend your domain automatically
3. **The issue was inheritance** - The root layout canonical was being inherited by all child pages
4. **This is a critical SEO issue** - It was telling search engines that all your pages are duplicates of the homepage

## Verification

After deploying these changes, you can verify by:
1. View page source and check the `<link rel="canonical"` tag
2. Use SEO tools to crawl your site
3. Check Google Search Console for duplicate content warnings

## Response to Nytro

You can tell Nytro Support:
"Thank you for identifying this issue. We found the problem was in our root layout.tsx file which was setting a global canonical URL to the homepage. We've removed this and are adding individual canonical URLs to each page's metadata. The changes will be deployed shortly."
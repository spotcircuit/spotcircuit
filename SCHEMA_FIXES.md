# Schema.org Structured Data Fixes

## Summary of Issues Fixed

### 1. Global Issues
- **Duplicate Schemas**: Organization and Website schemas were being rendered on both the layout and individual pages
- **Missing Context**: Some schemas lacked proper @context declarations
- **Type Mismatches**: Various properties had incorrect types (strings instead of numbers, etc.)

### 2. Specific Fixes Implemented

#### ClaimReviewSchema
- Fixed rating values to be numbers instead of strings
- Added proper type conversion for backward compatibility
- Added sanitization to remove undefined values
- Fixed prop naming (reviewUrl → url)

#### EntitySchema
- Fixed prop naming (entityType → type)
- Updated all page implementations to use correct prop name

#### Global Schema Manager
- Created centralized schema management in `GlobalSchemaManager.tsx`
- Prevents duplicate Organization/Website schemas
- Uses @graph structure for proper schema relationships
- Dynamically generates page-specific WebPage schemas

#### New Schema Components Created
- `LocalBusinessSchema.tsx` - For local business pages
- `FAQPageSchema.tsx` - Improved FAQ page schema with validation
- `ServiceSchema.tsx` - Enhanced service schema with proper structure

### 3. Validation Library
Created `lib/schema-validation.ts` with utilities for:
- Numeric value validation
- URL validation
- ISO date validation
- Required field validation
- Schema sanitization (removes undefined/null values)

## Pages Requiring Manual Updates

### Industry Pages (All need schema updates)
- `/industries/hvac` ✓ (example provided)
- `/industries/plumbing`
- `/industries/electrical`
- `/industries/roofing`
- `/industries/consulting`
- `/industries/financial-advisors`
- `/industries/insurance`
- `/industries/marketing-agencies`
- `/industries/landscaping`

### Resource Pages
- `/resources/ai-search-optimization`
- `/resources/local-seo-guide`
- `/resources/technical-seo-checklist`
- `/resources/ai-marketing-tools`
- `/resources/content-strategy-blueprint`
- `/resources/analytics-conversion-guide`

## Recommended Schema Structure for Each Page Type

### Industry Pages
```tsx
import FAQPageSchema from '@/components/schemas/FAQPageSchema';
import ServiceSchema from '@/components/schemas/ServiceSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';

// Use ServiceSchema with proper types
<ServiceSchema
  name="Service Name"
  description="Description"
  url="https://www.spotcircuit.com/industries/example"
  serviceType="ProfessionalService"
  provider={{
    '@type': 'Organization',
    name: 'SpotCircuit',
    url: 'https://www.spotcircuit.com'
  }}
  areaServed={['United States']}
/>

// Use FAQPageSchema for FAQ sections
<FAQPageSchema
  faqs={faqItems}
  url="https://www.spotcircuit.com/industries/example"
/>
```

### Resource Pages
```tsx
import ArticleSchema from '@/components/schemas/ArticleSchema';
import HowToSchema from '@/components/schemas/HowToSchema';

// For guide/article pages
<ArticleSchema
  headline="Article Title"
  description="Article description"
  datePublished={datePublished}
  dateModified={dateModified}
  author={{
    '@type': 'Organization',
    name: 'SpotCircuit'
  }}
/>
```

### Blog Pages
```tsx
import BlogSchema from '@/app/components/BlogSchema';

// Blog listing page
<BlogSchema
  blogPosts={posts}
  blogUrl="https://www.spotcircuit.com/blog"
/>

// Individual blog posts should use ArticleSchema
```

## Testing Schema Validation

1. Use Google's Rich Results Test: https://search.google.com/test/rich-results
2. Use Schema.org Validator: https://validator.schema.org/
3. Check Chrome DevTools for JSON-LD output
4. Verify no duplicate schemas in page source

## Next Steps

1. Apply schema updates to all industry pages
2. Update resource pages with appropriate schemas
3. Test all pages with validation tools
4. Monitor Google Search Console for structured data improvements
5. Add schema testing to CI/CD pipeline

## Common Pitfalls to Avoid

1. **Never use string values for numeric properties** (rating values, prices, etc.)
2. **Avoid duplicate @id values** across schemas
3. **Always include @context** in root schema objects
4. **Use proper schema types** (Service, LocalBusiness, ProfessionalService, etc.)
5. **Sanitize all schema data** to remove undefined/null values
6. **Use ISO 8601 format** for all dates
7. **Validate URLs** before including in schemas

## Benefits of These Fixes

- ✅ Improved search engine understanding
- ✅ Better AI platform citations (ChatGPT, Claude, Perplexity)
- ✅ Enhanced rich snippets in search results
- ✅ Higher chance of featured snippets
- ✅ Better local SEO performance
- ✅ Improved click-through rates from search
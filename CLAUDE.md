# SpotCircuit Development Guide

## Commands
- **Development**: `npm run dev` (http://localhost:3006)
- **Build**: `npm run build` 
- **Type check**: `npm run typecheck`
- **Lint**: `npm run lint`
- **Clean cache**: `npm run clean`
- **Deep clean**: `npm run clean:all`
- **Test**: No dedicated test command found in package.json

## Blog Generator
- **Generate post**: `npm run generate`
- **Publish to Ghost**: `npm run publish`
- **Generate & publish**: `npm run generate-and-publish`

## Code Style Guidelines
- **Framework**: Next.js 14 (App Router) with TypeScript (strict mode)
- **Components**:
  - Shared components in `/components`, page-specific in `/app/components`
  - Client components: Add 'use client' directive at top, Server components: No directive needed
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for routes
- **Imports**: Group by: 1) React 2) External libraries 3) Internal components/utils
  - Use absolute imports with `@/` prefix
- **Styling**: Tailwind CSS with custom configuration
- **Error handling**: Use try/catch with appropriate messages and fallback UI
- **Types**: Always use explicit TypeScript types, avoid `any`
- **Images**: Use Next.js Image component with WebP format
- **Schema Markup**: JSON-LD for structured data (see app/components/FaqSchema.tsx)
- **SEO**: Metadata in separate metadata.tsx or page-metadata.ts files

## Environment Setup
- Create `.env.local` with required variables (see README.md)

## AI Search Best Practices
- Structure content in FAQ format for better AI citation
- Use proper schema markup (FAQPage, HowTo, Article) for AI comprehension
- Include semantic relationships and contextual signals rather than just keywords
- Optimize for both traditional search engines and AI platforms
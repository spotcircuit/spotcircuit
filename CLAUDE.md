# SpotCircuit Development Guide

## Commands
- **Development**: `npm run dev` (http://localhost:3006)
- **Build**: `npm run build`
- **Type check**: `npm run typecheck`
- **Lint**: `npm run lint`
- **Clean cache**: `npm run clean`
- **Deep clean**: `npm run clean:all`

## Blog Generator (Ghost CMS)
- **Generate post**: `npm run generate`
- **Publish to Ghost**: `npm run publish`
- **Generate & publish**: `npm run generate-and-publish`

## Code Style
- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS, dark theme (bg-black text-white)
- **Components**: Shared in `/components`, page-specific co-located
- **Naming**: PascalCase components, camelCase functions, kebab-case routes
- **Imports**: Absolute with `@/` prefix
- **Types**: Explicit TypeScript types, avoid `any`

## Site Structure
```
app/
  page.tsx          # Homepage - agentic AI hero + 6 service cards
  services/         # 6 revenue streams
  clarity/          # Clarity Framework showcase
  about/            # Brian's story
  blog/             # Ghost CMS integration
  contact/          # Contact form + booking link
  privacy/          # Privacy policy
  terms/            # Terms of service
components/
  Header.tsx        # Flat nav: Services, Clarity, About, Blog, Contact
  Footer.tsx        # Simple links + social
  GlobalSchemaManager.tsx  # Site-wide structured data
  ContactForm.tsx   # Contact form component
```

## Positioning
SpotCircuit = Agentic AI Engineering. NOT a marketing agency.
Six revenue streams: Clarity Framework, AI Integration Consulting,
Claude Code Implementation, Knowledge Base Builder, Doc Pipelines, Build in Public.

## SEO Notes
- All old pages 301 redirect via vercel.json
- Sitemap at /sitemap.xml (8 core pages only)
- Schema via GlobalSchemaManager (Organization + WebSite + WebPage graph)
- No hreflang (English-only site)

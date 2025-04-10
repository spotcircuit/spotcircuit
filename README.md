# SpotCircuit - AI-First SEO & LLM Optimization Platform

## Overview

SpotCircuit is transitioning from a general web services focus to **specializing in AI-First Search Engine Optimization (SEO) and Large Language Model (LLM) Optimization**. This strategic pivot recognizes the fundamental shift in how information is discovered and consumed in the age of AI.

Our goal is to equip businesses with the strategies and tools needed to make their content not just visible, but **authoritative and preferred** by LLMs like ChatGPT, Perplexity, Google AI Overviews, and others. We move beyond traditional keyword ranking to focus on semantic understanding, content structuring for AI, and dynamic relevance.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **UI Components:** Headless UI
- **Icons:** Heroicons
- **Booking:** Cal.com
- **Charts:** Recharts
- **Blog CMS:** Ghost
- **Content Generation:** DeepSeek AI
- **Image Integration:** Unsplash API
- **Deployment:** Vercel

## Core Strategy & Features (AI-First Focus)

Our approach is built on several key pillars derived from understanding how LLMs process information:

*   **Content as Conversation (FAQ-Driven):**
    *   Structuring content around questions and answers directly mirrors user interaction with LLMs.
    *   Automated extraction/generation of FAQs from existing content (demonstrated in the "AnswerCircuit" prototype) helps scale this process.
    *   *Value Add:* This makes content highly digestible for AI and directly answers potential user queries surfaced by LLMs.

*   **Dynamic Relevance & Trend Integration:**
    *   Monitoring emerging questions and topics on platforms like Quora and Reddit using tools like Perplexity AI.
    *   Automated workflows (e.g., using n8n, as shown in prototype) to update or generate content based on these trends.
    *   *Value Add:* Ensures content remains fresh, relevant, and addresses the *current* information needs being surfaced by AI, preventing content decay.

*   **Structured Data for AI Comprehension:**
    *   Implementing advanced Schema.org markup beyond basic types.
    *   Exploring custom JSON-LD formats specifically designed to feed LLMs detailed context, relationships, and entity recognition.
    *   *Value Add:* Helps LLMs accurately understand, categorize, and trust the content, increasing the likelihood of it being used as a source.

*   **Building Topical Authority & AI-Readable Architecture:**
    *   Focusing on **content depth and semantic relationships** rather than just keyword breadth.
    *   Implementing **topic clusters** with clear internal linking to demonstrate comprehensive coverage.
    *   Structuring content with clear hierarchies (headings, lists) that are easily parsable by AI.
    *   Mapping content to both traditional search queries and conversational AI query patterns.
    *   *Value Add:* Signals to LLMs that the content is comprehensive, well-organized, and trustworthy on a specific subject.

*   **"AnswerCircuit" Prototype Insights:**
    *   This internal prototype validated the feasibility of automated FAQ generation, trend analysis integration (Quora/Reddit via Perplexity), popularity scoring, and workflow automation (n8n) for publishing.

## Roadmap & Areas for Refinement

Based on the strategic direction and prototype findings, the following areas are priorities:

*   **[In Progress] New Launch Page:** Finalize the front-end (`/launch`) showcasing AI-First SEO services.
*   **Enhance Content Templates:** Integrate AI-optimized structures (Q&A headings, structured data blocks, topic metadata) directly into blog/content templates (leveraging existing Ghost CMS integration if applicable).
*   **Develop Trend Detection System:** Build robust integrations with Reddit/Quora APIs (or similar sources) for real-time topic/question monitoring and analysis.
*   **Refine Content Automation Workflow:** Mature the content update/generation workflow (potentially expanding on the n8n example) for reliability and scalability.
*   **Implement Advanced Schema Markup:** Systematically add enhanced schema (FAQPage, Article, potentially custom types) across relevant content.
*   **Develop Semantic Linking Tools:** Explore or build mechanisms to easily create and manage topic clusters and internal links that represent semantic relationships.
*   **Refine AI Insights Generation:** Improve the analysis of trending topics to provide more actionable strategic direction for content creation.
*   **API for Real-Time Q&A:** Consider adding API endpoints to leverage the generated FAQ database for programmatic access or chatbot integration.
*   **Content Authority Signals:** Research and potentially implement methods for citation networks or expert verification signals within content.

## LLM Optimization Implementation Areas

Based on further research and Gemini API analysis, the following areas represent concrete implementation strategies for our AI-First SEO approach:

### Content Creation & Enhancement

*   **AI-Assisted Content Workflows:**
    *   Generate high-quality content drafts with specific prompts including target audience, keywords, tone, and key points
    *   Implement content refreshing systems that update old blog posts with current information
    *   Build readability enhancement tools that ensure consistent brand voice and improved flow
    *   Create brainstorming interfaces for blog topics, content angles, and marketing campaigns
    *   Develop carefully reviewed translation/localization capabilities for international audiences

### SEO & Marketing Tools

*   **Technical SEO Automation:**
    *   Implement keyword research and analysis tools that identify relevant keywords, group by intent, and suggest LSI keywords
    *   Develop meta description and title tag generators that improve click-through rates
    *   Create automated schema markup generation for FAQs, products, articles, and events with validation
    *   Build competitor content analysis tools that identify gaps and differentiation opportunities
    *   Design ad copy and email subject line generation with A/B testing variations

### User Experience & Engagement Features

*   **Interactive AI Components:**
    *   Develop intelligent chatbots and virtual assistants with LLM APIs and fine-tuning on website content
    *   Implement personalized content recommendation systems based on user behavior or stated interests
    *   Create on-the-fly content summarization features for long articles
    *   Design interactive Q&A components that leverage the FAQ database

### Development & Data Analysis Support

*   **Backend Tooling:**
    *   Provide code generation assistance for common development tasks
    *   Create automated reporting and analytics summaries from website data
    *   Develop data visualization tools that make metrics accessible to non-analysts

All implementation areas will incorporate crucial human oversight and quality control measures to ensure accuracy, brand alignment, and genuine value delivery. This human-in-the-loop approach is essential for leveraging AI capabilities while maintaining content integrity and strategic alignment.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/spotcircuit/marketing-ecommerce.git
   cd marketing-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file with the following variables:
   ```
   GHOST_API_URL=your_ghost_url
   GHOST_CONTENT_API_KEY=your_content_key
   GHOST_ADMIN_API_KEY=your_admin_key
   DEEPSEEK_API_KEY=your_deepseek_key
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   NEXT_PUBLIC_CALCOM_EMBED_KEY=your_calcom_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3006](http://localhost:3006) in your browser.**

## Blog Content Generation

The platform includes automated blog content generation using DeepSeek AI. The process includes:

1. **Content Generation:**
   - Run `npm run generate-post` to create a new blog post
   - Uses AI to generate SEO-optimized content
   - Automatically fetches relevant images from Unsplash

2. **Ghost Integration:**
   - Posts are automatically published to Ghost CMS
   - Supports draft and published states
   - Includes feature images and tags
   - Maintains proper markdown formatting

3. **Blog Display:**
   - Dynamic blog page using Ghost Content API
   - Responsive image handling
   - SEO-optimized meta tags
   - Proper navigation between blog and main site

## Project Structure

```
/
├── app/                    # Next.js 14 app directory
│   ├── layout.tsx         # Root layout
│   ├── blog/              # Blog pages and components
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Booking.tsx       # Cal.com integration
│   ├── FAQ.tsx           # FAQ section
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Site header
│   ├── Hero.tsx          # Hero section
│   ├── Problem.tsx       # Problem statement
│   ├── Results.tsx       # Results showcase
│   └── Services.tsx      # Services section
├── lib/                   # Utility functions and API clients
├── scripts/              # Blog generation and posting scripts
│   ├── generate-blog-post.ts    # AI content generation
│   ├── post-to-ghost.ts         # Ghost CMS integration
│   └── blog-templates.json      # Content templates
├── public/               # Static assets
└── styles/              # Global styles
```

## Environment Variables

The following environment variables are required:

- `GHOST_API_URL`: Your Ghost CMS URL
- `GHOST_CONTENT_API_KEY`: Ghost Content API key for fetching posts
- `GHOST_ADMIN_API_KEY`: Ghost Admin API key for creating posts
- `UNSPLASH_ACCESS_KEY`: Unsplash API key for fetching images
- `DEEPSEEK_API_KEY`: DeepSeek API key for AI content generation
- `NEXT_PUBLIC_CALCOM_EMBED_KEY`: Cal.com embed key

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright 2024 SpotCircuit. All rights reserved.

## Blog Generator

### Overview

The blog generator is a separate module that automates the process of generating and publishing blog posts.

### Features

- AI-powered blog post generation using DeepSeek
- Smart tagging system with SEO optimization
- Automatic internal and external linking
- Ghost CMS integration
- TypeScript support with strict type checking

### Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env.local`:
```env
GHOST_API_URL=your_ghost_url
GHOST_ADMIN_API_KEY=your_admin_key
GHOST_CONTENT_API_KEY=your_content_key
DEEPSEEK_API_KEY=your_deepseek_key
```

### Usage

#### Generate and Publish Blog Post
```bash
npm run generate-and-publish
```
This will:
1. Generate a new blog post
2. Add smart internal/external links
3. Post to Ghost as a draft

#### Individual Scripts

- `generate-blog-post.ts`: Generate new blog content
- `smart-linker.ts`: Add intelligent internal/external links
- `post-to-ghost.ts`: Publish content to Ghost
- `process-content.ts`: Analyze and tag existing content

Run individual scripts with:
```bash
npx ts-node scripts/<script-name>.ts
```

### Development

- TypeScript strict mode enabled
- Run type checking: `npm run typecheck`
- All code changes must pass TypeScript checks

### Architecture

#### Blog Generation Flow
1. Content generation with AI (DeepSeek)
2. Smart linking system
   - Internal links to tag pages
   - External links to referenced tools/platforms
3. Ghost CMS integration
   - Draft posts
   - Automatic tag creation
   - SEO metadata

#### File Structure
```
scripts/
  ├── generate-blog-post.ts    # Blog content generation
  ├── smart-linker.ts          # Link processing
  ├── post-to-ghost.ts         # Ghost CMS integration
  ├── process-content.ts       # Content analysis
  ├── generate-and-publish.ts  # Main workflow
  └── blog-templates.json      # Content templates
```

### Error Handling

- Comprehensive error handling for API calls
- Graceful fallbacks for tag creation
- Detailed error logging
- TypeScript type safety

### Contributing

1. Ensure all TypeScript checks pass
2. Follow existing code patterns
3. Keep changes focused and documented
4. Test thoroughly before submitting

## Usage

### Content Generation

Generate a new blog post:
```bash
npm run generate
# or
pnpm run generate
```

Publish to Ghost CMS:
```bash
npm run publish
# or
pnpm run publish
```

Generate and publish in one step:
```bash
npm run generate-and-publish
# or
pnpm run generate-and-publish
```

Process tags and smart linking:
```bash
npm run process-tags
npm run smart-link
```

### Development

Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

Run type checking:
```bash
npm run typecheck
# or
pnpm run typecheck
```

## Deployment

The project is configured for deployment on Vercel. Here's how to deploy:

1. **Push your code to GitHub**

2. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure the following environment variables in Vercel:
     - `GHOST_API_URL`
     - `GHOST_CONTENT_API_KEY`
     - `GHOST_ADMIN_API_KEY`
     - `DEEPSEEK_API_KEY`
     - `UNSPLASH_ACCESS_KEY`

3. **Deploy:**
   - Vercel will automatically detect the Next.js project
   - The build command is already configured in `vercel.json`
   - Your site will be deployed and available at a Vercel URL

### Deployment Configuration

The project includes a `vercel.json` configuration:
```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": ".next"
}
```

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint
- `typecheck`: Run TypeScript type checking
- `generate`: Generate a new blog post
- `publish`: Publish to Ghost CMS
- `generate-and-publish`: Generate and publish in one step
- `process-tags`: Process content tags
- `smart-link`: Add smart internal/external links

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
*This README reflects the strategic pivot towards AI-First SEO as of March 2025, incorporating insights from internal discussions and prototype development.*

# SpotCircuit Marketing & E-commerce Platform

A modern, AI-powered SEO automation platform for Shopify stores, built with Next.js 14, React 18, and Tailwind CSS. Features integrated blog content generation with DeepSeek AI and Ghost CMS integration.

## Features

- AI-Powered Product Descriptions
- Smart Category Optimization
- Technical SEO Automation
- Integrated Booking System with Cal.com
- Automated Blog Content Generation with DeepSeek AI
- Ghost CMS Integration for Blog Management
- Dynamic Blog with Ghost Content API
- Fully Responsive Design
- Server-Side Rendering with Next.js
- Modern UI with Tailwind CSS and Framer Motion
- Automatic Image Integration with Unsplash API

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

# SpotCircuit Marketing & E-commerce Platform

A modern, AI-powered SEO automation platform for Shopify stores, built with Next.js 14, React 18, and Tailwind CSS. Features integrated blog content generation and Ghost CMS integration.

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
   GHOST_CONTENT_API_KEY=your_content_api_key
   GHOST_ADMIN_API_KEY=your_admin_api_key
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   DEEPSEEK_API_KEY=your_deepseek_key
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

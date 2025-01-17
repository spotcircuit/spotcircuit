# SpotCircuit Marketing & E-commerce Platform

A modern, AI-powered SEO automation platform for Shopify stores, built with Next.js 14, React 18, and Tailwind CSS.

## Features

- AI-Powered Product Descriptions
- Smart Category Optimization
- Technical SEO Automation
- Integrated Booking System with Cal.com
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

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3006](http://localhost:3006) in your browser.**

## Project Structure

```
/
├── app/                    # Next.js 14 app directory
│   ├── layout.tsx         # Root layout
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
├── public/               # Static assets
└── styles/              # Global styles
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CALCOM_EMBED_KEY=your_calcom_key
```

## Deployment

The project is configured for deployment on Vercel. Simply push to the main branch and Vercel will automatically deploy the changes.

## Development Notes

- All components using client-side features (like framer-motion) are marked with 'use client' directive
- The app uses the new Next.js 14 App Router
- Custom configurations are in next.config.js
- Tailwind configurations are in tailwind.config.js

## License

Copyright 2024 SpotCircuit. All rights reserved.

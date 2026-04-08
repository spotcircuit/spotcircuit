import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ClientLayout from './layout-client';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spotcircuit.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'SpotCircuit - Agentic AI Engineering',
  description: 'Agentic AI engineering for teams that ship. Framework licensing, Claude Code implementation, knowledge bases, and data pipelines.',
  keywords: ['agentic AI', 'AI engineering', 'Claude Code', 'knowledge base', 'LLM framework', 'Clarity Framework'],
  authors: [{ name: 'Brian Pyatt' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  generator: 'Next.js',
  applicationName: 'SpotCircuit',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship. Frameworks, Claude Code, knowledge bases, and data pipelines.',
    url: baseUrl,
    siteName: 'SpotCircuit',
    images: [
      {
        url: new URL('/og-image.jpg', baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: 'SpotCircuit - Agentic AI Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship.',
    images: [{
      url: new URL('/og-image.jpg', baseUrl).toString(),
      alt: 'SpotCircuit - Agentic AI Engineering',
    }],
    creator: '@spotcircuit',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  // These properties are set in the head section below
};

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Microsoft Clarity tracking code for https://spotcircuit.com/ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sxycvij64k");
            `
          }}
        />
        
        <Script src="https://plugin.nytsys.com/api/site/0fb07629-302a-4e33-ba82-04eccb80b732/nytsys.min.js" strategy="afterInteractive" />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="a18DINjK2SMdjS3jMyt+Mg" strategy="afterInteractive" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
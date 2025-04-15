import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpotCircuit - AI-Powered SEO Automation for Shopify',
  description: 'Boost your Shopify store\'s organic traffic with AI-powered SEO automation',
  keywords: 'SEO automation, Shopify SEO, AI SEO, e-commerce optimization, organic traffic',
  authors: [{ name: 'SpotCircuit Team' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spotcircuit.com',
    title: 'SpotCircuit - AI-Powered SEO Automation for Shopify',
    description: 'Boost your Shopify store\'s organic traffic with AI-powered SEO automation',
    siteName: 'SpotCircuit',
    images: [
      {
        url: '/static/images/headerimage.png',
        width: 1200,
        height: 630,
        alt: 'SpotCircuit - AI-Powered SEO Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - AI-Powered SEO Automation for Shopify',
    description: 'Boost your Shopify store\'s organic traffic with AI-powered SEO automation',
    images: ['/static/images/headerimage.png'],
    creator: '@spotcircuit',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <Script
          src="https://plugin.nytsys.com/api/site/0fb07629-302a-4e33-ba82-04eccb80b732/nytsys.min.js"
          strategy="afterInteractive"
        />
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SpotCircuit",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "operatingSystem": "Web-based",
              "description": "AI-Powered SEO Automation for Shopify stores to boost organic traffic",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127"
              },
              "creator": {
                "@type": "Organization",
                "name": "SpotCircuit",
                "url": "https://spotcircuit.com",
                "logo": "https://spotcircuit.com/static/images/logo.png",
                "sameAs": [
                  "https://twitter.com/spotcircuit",
                  "https://www.linkedin.com/company/spotcircuit"
                ]
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}

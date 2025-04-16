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
            [
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "SpotCircuit",
                "image": "https://spotcircuit.com/static/images/sclogo.png",
                "@id": "https://spotcircuit.com",
                "url": "https://spotcircuit.com",
                "telephone": "+15714790455",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "19309 Winmeade Dr STE 200",
                  "addressLocality": "Leesburg",
                  "addressRegion": "VA",
                  "postalCode": "20176",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 39.0768,
                  "longitude": -77.4675
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "sameAs": [
                  "https://twitter.com/spotcircuit",
                  "https://www.linkedin.com/company/spotcircuit"
                ],
                "priceRange": "$$",
                "servesCuisine": "Digital Marketing",
                "containedInPlace": {
                  "@type": "LocalBusiness",
                  "name": "Lansdowne Town Center"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "SpotCircuit",
                "description": "AI-powered SEO solutions for home service businesses including plumbing, HVAC, electrical, landscaping, roofing, and more.",
                "url": "https://spotcircuit.com",
                "logo": "https://spotcircuit.com/static/images/sclogo.png",
                "image": "https://spotcircuit.com/static/images/headerimage.png",
                "telephone": "+15714790455",
                "email": "info@spotcircuit.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "19309 Winmeade Dr STE 200",
                  "addressLocality": "Leesburg",
                  "addressRegion": "VA",
                  "postalCode": "20176",
                  "addressCountry": "US"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "serviceType": [
                  "SEO Optimization",
                  "Local Marketing",
                  "Content Strategy",
                  "Technical SEO",
                  "AI Automation",
                  "Analytics & Reporting"
                ],
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 39.0768,
                    "longitude": -77.4675
                  },
                  "geoRadius": "50000"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "127",
                  "bestRating": "5"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://spotcircuit.com",
                "name": "SpotCircuit - AI-Powered SEO for Home Service Businesses",
                "description": "AI-powered SEO solutions that transform your online presence and drive qualified leads to your service business.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://spotcircuit.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What makes SpotCircuit different from other digital marketing agencies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SpotCircuit is unique in our AI-first approach to digital marketing and business optimization. Unlike traditional agencies that apply generic strategies, we build custom AI systems tailored to your specific business needs, focusing on measurable outcomes and ROI rather than vanity metrics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see results from your services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While every business is different, most clients begin seeing measurable improvements within 30-60 days. Our AI systems continuously learn and optimize, so results typically accelerate over time. We provide transparent reporting so you can track progress from day one."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What industries do you specialize in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While we have expertise across many sectors, we specialize in home service businesses including roofing, HVAC, plumbing, electrical, pest control, landscaping, and similar trades. Our solutions are particularly effective for businesses that rely on local lead generation and field service operations."
                    }
                  }
                ]
              }
            ]
          `}
        </Script>
      </body>
    </html>
  )
}

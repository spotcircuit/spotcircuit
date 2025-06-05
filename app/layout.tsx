import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import '../styles/chatbot-custom.css'
import ChatbotWidget from '@/components/ChatbotWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://spotcircuit.com'),
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
        <ChatbotWidget 
          userData={{
            // You can dynamically set these values based on user authentication
            // name: 'Visitor',
            // email: 'visitor@example.com',
            info: 'SpotCircuit Website Visitor'
          }}
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
                "potentialAction": {
                  "@type": "ReserveAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://calendar.app.google/Lh8TY5PBrDSZvjR87",
                    "inLanguage": "en-US",
                    "actionPlatform": [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/IOSPlatform",
                      "http://schema.org/AndroidPlatform"
                    ]
                  },
                  "result": {
                    "@type": "Reservation",
                    "name": "Book a Free Consultation"
                  }
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
                    "name": "Do I need technical knowledge to work with SpotCircuit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not at all. We handle all the technical aspects of implementation and provide user-friendly dashboards and reports. Our team works closely with you to ensure you understand the strategies and results without needing to dive into technical details."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you price your services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer flexible pricing models based on your business size and specific needs. After an initial consultation, we'll provide a customized quote that aligns with your budget and expected ROI. We believe in transparent pricing with no hidden fees."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you integrate with my existing software and tools?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our solutions are designed to integrate seamlessly with your existing tech stack. Whether you're using CRMs, marketing automation tools, or industry-specific software, we can connect with them to enhance functionality rather than replace what's working."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What industries do you specialize in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While we have expertise across many sectors, we specialize in home service businesses including roofing, HVAC, plumbing, electrical, pest control, landscaping, and similar trades. Our solutions are particularly effective for businesses that rely on local lead generation and field service operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you measure success and ROI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We establish clear KPIs at the beginning of our engagement based on your business goals. Typical metrics include lead quality and quantity, customer acquisition cost, conversion rates, and revenue growth. Our reporting dashboards provide full transparency into these metrics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What support do you provide after implementation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer ongoing support including regular check-ins, performance monitoring, troubleshooting, and system updates. Our team is available via email, phone, and chat to address any questions or concerns that arise."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is AI used in your solutions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We leverage AI across all aspects of our services, from predictive analytics for lead generation to automated workflow optimization. Our AI systems analyze vast amounts of data to identify patterns and opportunities that humans might miss, enabling more precise targeting and efficient operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the process for getting started with SpotCircuit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Getting started is simple: <ol><li>Schedule a free consultation through our website</li><li>We'll conduct a comprehensive analysis of your current situation</li><li>Our team will develop a customized strategy and proposal</li><li>Once approved, we begin implementation with regular updates</li><li>We continuously monitor, optimize, and scale based on results</li></ol>"
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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import '../styles/chatbot-custom.css'
import ChatbotWidget from '@/components/ChatbotWidget'
import OrganizationSchema from './components/OrganizationSchema'
import WebsiteSchema from './components/WebsiteSchema'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://spotcircuit.com'),
  title: 'SpotCircuit - AI-First SEO & LLM Optimization Platform',
  description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
  openGraph: {
    title: 'SpotCircuit - AI-First SEO & LLM Optimization Platform',
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
    type: 'website',
    siteName: 'SpotCircuit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - AI-First SEO & LLM Optimization Platform',
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
  },
  verification: {
    google: 'ADD_YOUR_VERIFICATION_CODE_HERE',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/spotcircuit-logo.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Core Schema Markup */}
        <OrganizationSchema />
        <WebsiteSchema />
        
        {/* Tracking Pixel */}
        <Script async src="https://pub-64d7c9742ee54006ae9f38e02aa8539e.r2.dev/2544cee0-03a6-4807-b840-922cdd7ba178/script.min.js" data-pid="2544cee0-03a6-4807-b840-922cdd7ba178" />
        
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  )
}
'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Dynamic imports with type safety
const ChatbotWidget = dynamic(
  () => import('@/components/ChatbotWidget').then(mod => mod.default),
  { ssr: false }
);

const GlobalSchemaManager = dynamic(
  () => import('@/components/GlobalSchemaManager').then(mod => mod.default),
  { ssr: false }
);

const Header = dynamic(
  () => import('@/components/Header'),
  { ssr: false }
);

const Footer = dynamic(
  () => import('@/components/Footer'),
  { ssr: false }
);

// Client component wrapper for client-side functionality
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Global Schema.org markup for SEO */}
      <GlobalSchemaManager />
      
      {/* Header with built-in mobile navigation */}
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      
      {/* Back to top button for mobile */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:hidden w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      {/* Chatbot Widget - already client-side only via dynamic import */}
      <ChatbotWidget />
      
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}

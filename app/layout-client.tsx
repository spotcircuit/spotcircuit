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

const OrganizationSchema = dynamic(
  () => import('@/components/schemas/OrganizationSchema').then(mod => mod.default),
  { ssr: false }
);

const WebsiteSchema = dynamic(
  () => import('@/components/schemas/WebsiteSchema').then(mod => mod.default),
  { ssr: false }
);

const Header = dynamic(
  () => import('@/components/Header'),
  { ssr: false }
);

// Client component wrapper for client-side functionality
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Schema.org markup for SEO */}
      <OrganizationSchema />
      <WebsiteSchema />
      
      {/* Header with built-in mobile navigation */}
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} SpotCircuit. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          
          {/* Mobile app badges */}
          <div className="md:hidden mt-8 pt-6 border-t border-gray-700">
            <p className="text-center text-gray-400 mb-4">Download our app</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="block" aria-label="Download on the App Store">
                <img 
                  src="/app-store-badge.svg" 
                  alt="Download on the App Store" 
                  className="h-10 w-auto"
                  width={135}
                  height={40}
                />
              </a>
              <a href="#" className="block" aria-label="Get it on Google Play">
                <img 
                  src="/google-play-badge.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                  width={135}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
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

'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import dynamic from 'next/dynamic';

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

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <GlobalSchemaManager />
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

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

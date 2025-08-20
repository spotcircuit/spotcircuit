import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface CanonicalUrlProps {
  path?: string; // Optional override path
}

/**
 * Component to add canonical URL tags to pages
 * 
 * @param path Optional path override (without domain)
 * @returns Head component with canonical link
 */
export default function CanonicalUrl({ path }: CanonicalUrlProps) {
  const pathname = usePathname();
  const canonicalPath = path || pathname || '';
  
  // Ensure path starts with / and remove any trailing /
  const formattedPath = canonicalPath
    .replace(/^\/?/, '/') // Ensure starts with /
    .replace(/\/$/, ''); // Remove trailing /
  
  // For homepage, use root domain without trailing slash
  const canonicalUrl = formattedPath === '/' 
    ? 'https://www.spotcircuit.com' 
    : `https://www.spotcircuit.com${formattedPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

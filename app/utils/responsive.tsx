// Responsive utility functions and hooks
import { useEffect, useState } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`);
    
    const handleResize = () => {
      setIsMatch(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Add event listener
    mediaQuery.addEventListener('change', handleResize);

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [breakpoint]);

  return isMatch;
}

export function useIsMobile(): boolean {
  const isMd = useBreakpoint('md');
  return !isMd;
}

export function useIsTablet(): boolean {
  const isMd = useBreakpoint('md');
  const isLg = useBreakpoint('lg');
  return isMd && !isLg;
}

export function useIsDesktop(): boolean {
  return useBreakpoint('lg');
}

// Responsive container component
export function ResponsiveContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Responsive section component
export function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </section>
  );
}

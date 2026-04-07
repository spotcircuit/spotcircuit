'use client';

import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function PageContent({ children, className = '', noPadding = false }: PageContentProps) {
  // Calculate top spacing based on whether announcement banner is shown
  // Header height: ~72px on mobile, ~80px on desktop
  // Announcement banner height: ~36px on mobile, ~44px on desktop
  const baseTopSpacing = 'pt-24 sm:pt-28 md:pt-32';
  const topSpacingWithBanner = 'pt-32 sm:pt-36 md:pt-40';
  
  // Assume banner is shown by default (can be made dynamic if needed)
  const topSpacing = topSpacingWithBanner;
  
  if (noPadding) {
    return (
      <div className={`${topSpacing} ${className}`}>
        {children}
      </div>
    );
  }
  
  return (
    <div className={`${topSpacing} px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}

// Export a variant for hero sections that need full width
export function PageHero({ children, className = '' }: { children: ReactNode; className?: string }) {
  const topSpacingWithBanner = 'pt-32 sm:pt-36 md:pt-40';
  
  return (
    <div className={`${topSpacingWithBanner} ${className}`}>
      {children}
    </div>
  );
}
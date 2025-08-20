'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { lockBodyScroll } from '../utils/mobile-utils';

type NavItem = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Tools', href: '/tools' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'API Docs', href: '/api-docs' },
  { name: 'Downloads', href: '/resources/downloads' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  
  // Lock body scroll when mobile menu is open
  lockBodyScroll(isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/80 backdrop-blur-sm md:hidden" 
         role="dialog" 
         aria-modal="true">
      <div className="fixed inset-0" onClick={onClose}></div>
      
      <div 
        ref={navRef}
        className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out"
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              SpotCircuit
            </Link>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="pt-6 mt-auto border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/login"
                className="px-4 py-3 text-lg font-medium text-center text-blue-600 transition-colors bg-blue-50 rounded-lg dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50"
              >
                Log in
              </Link>
              <Link
                href="/get-started"
                className="px-4 py-3 text-lg font-medium text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

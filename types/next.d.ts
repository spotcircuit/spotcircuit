// Next.js type declarations for version 15

declare module 'next' {
  // PageProps interface for app router
  export interface PageProps {
    params?: any;
    searchParams?: any;
  }

  // Metadata types
  export interface Metadata {
    title?: string | null;
    description?: string | null;
    applicationName?: string | null;
    authors?: Array<{ name: string; url?: string }> | null;
    generator?: string | null;
    keywords?: string | Array<string> | null;
    referrer?: 'no-referrer' | 'origin' | 'no-referrer-when-downgrade' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | null;
    themeColor?: string | null;
    colorScheme?: 'normal' | 'only light' | 'only dark' | 'light dark' | 'dark light' | null;
    viewport?: string | null;
    creator?: string | null;
    publisher?: string | null;
    robots?: string | null;
    alternates?: {
      canonical?: string;
      languages?: Record<string, string>;
      media?: Record<string, string>;
      types?: Record<string, string>;
    } | null;
    icons?: string | Array<string> | null;
    openGraph?: {
      type?: string;
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }> | string;
      locale?: string;
      audio?: string;
      videos?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }> | string;
    } | null;
    twitter?: {
      card?: 'summary' | 'summary_large_image' | 'app' | 'player';
      title?: string;
      description?: string;
      site?: string;
      creator?: string;
      images?: Array<{
        url: string;
        alt?: string;
      }> | string;
    } | null;
    verification?: {
      google?: string | Array<string>;
      yahoo?: string | Array<string>;
      yandex?: string | Array<string>;
      me?: string | Array<string>;
      other?: Record<string, string | Array<string>>;
    } | null;
    appleWebApp?: {
      capable?: boolean;
      title?: string;
      statusBarStyle?: 'default' | 'black' | 'black-translucent';
    } | null;
    formatDetection?: {
      telephone?: boolean;
      date?: boolean;
      address?: boolean;
      email?: boolean;
      url?: boolean;
    } | null;
    itunes?: {
      appId: string;
      appArgument?: string;
    } | null;
    appLinks?: {
      ios?: {
        url: string;
        appStoreId?: string;
      };
      android?: {
        package: string;
        url: string;
      };
      web?: {
        url: string;
      };
    } | null;
    archives?: string | Array<string> | null;
    assets?: string | Array<string> | null;
    bookmarks?: string | Array<string> | null;
    category?: string | null;
    classification?: string | null;
    other?: Record<string, string | Array<string>> | null;
  }

  // Metadata Route type
  export type MetadataRoute = {
    sitemap: () => Array<{
      url: string;
      lastModified?: string | Date;
      changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
      priority?: number;
    }>;
    robots: () => {
      rules: Array<{
        userAgent?: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
        crawlDelay?: number;
      }>;
      sitemap?: string | string[];
      host?: string;
    };
    manifest: () => {
      name: string;
      short_name?: string;
      description?: string;
      start_url: string;
      display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
      background_color?: string;
      theme_color?: string;
      icons?: Array<{
        src: string;
        sizes?: string;
        type?: string;
      }>;
    };
  }
}
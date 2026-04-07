import Link from 'next/link';
import { useMemo } from 'react';
import { GhostTag } from '@/lib/ghost';

interface TagLinkProps {
    tag: GhostTag;
}

// Known external platforms and their base URLs
const PLATFORM_URLS: Record<string, string> = {
    github: 'https://github.com',
    npm: 'https://www.npmjs.com/package',
    python: 'https://python.org',
    react: 'https://react.dev',
    nextjs: 'https://nextjs.org',
    vercel: 'https://vercel.com',
    typescript: 'https://www.typescriptlang.org',
    javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    // Add more platforms as needed
};

export default function TagLink({ tag }: TagLinkProps) {
    const linkInfo = useMemo(() => {
        // Check if it's a platform/technology reference
        const lowercaseTag = tag.name.toLowerCase();
        const platformMatch = Object.entries(PLATFORM_URLS).find(([platform]) => 
            lowercaseTag.includes(platform)
        );

        if (platformMatch) {
            const [platform, baseUrl] = platformMatch;
            // If the tag has a specific version or package name
            const parts = tag.name.split('/');
            const path = parts.length > 1 ? parts[1] : '';
            return {
                href: path ? `${baseUrl}/${path}` : baseUrl,
                external: true
            };
        }

        // If the tag has a custom URL defined
        if (tag.url) {
            return {
                href: tag.url,
                external: true
            };
        }

        // Default to internal tag page
        return {
            href: `/tag/${tag.slug}`,
            external: false
        };
    }, [tag]);

    return (
        <Link
            href={linkInfo.href}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors mr-2 mb-2"
            {...(linkInfo.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            {tag.name}
            {linkInfo.external && (
                <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            )}
        </Link>
    );
}

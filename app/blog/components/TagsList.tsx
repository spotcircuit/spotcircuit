'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BlogTag } from '../utils/blogLoader';

interface TagsListProps {
  tags: BlogTag[];
}

export default function TagsList({ tags }: TagsListProps) {
  const searchParams = useSearchParams();
  const currentTag = searchParams ? searchParams.get('tag') : null;

  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
      <h3 className="text-lg font-medium text-white mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Link 
            key={tag.name} 
            href={tag.name === currentTag ? '/blog' : `/blog?tag=${encodeURIComponent(tag.name)}`}
            className={`px-3 py-1 text-sm rounded-full ${
              tag.name === currentTag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition-colors`}
          >
            {tag.name}
            <span className="ml-1 text-xs opacity-70">({tag.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

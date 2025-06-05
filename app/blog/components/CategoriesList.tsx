'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BlogCategory } from '../utils/blogLoader';

interface CategoriesListProps {
  categories: BlogCategory[];
}

export default function CategoriesList({ categories }: CategoriesListProps) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams?.get('category') || null;

  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
      <h3 className="text-lg font-medium text-white mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.name}>
            <Link 
              href={category.name === currentCategory ? '/blog' : `/blog?category=${encodeURIComponent(category.name)}`}
              className={`flex items-center justify-between ${
                category.name === currentCategory
                  ? 'text-blue-400 font-medium'
                  : 'text-gray-300 hover:text-blue-300'
              } transition-colors`}
            >
              <span>{category.name}</span>
              <span className="bg-gray-800 text-xs rounded-full px-2 py-1">{category.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

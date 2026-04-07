'use client';

import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import { BlogPost } from '../utils/blogLoader';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('${post.coverImage}')` }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-blue-300 mb-4">
              <FaTag className="h-4 w-4" />
              {post.tags.slice(0, 3).map((tag, index) => (
                <div key={tag}>
                  <Link href={`/blog?tag=${encodeURIComponent(tag)}`} className="text-sm font-medium hover:text-blue-200 transition-colors">
                    {tag}
                  </Link>
                  {index < Math.min(post.tags.length, 3) - 1 && (
                    <span className="text-sm font-medium mx-1">•</span>
                  )}
                </div>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight hover:text-blue-200 transition-colors">
                {post.title}
              </h1>
            </Link>
            <div className="flex items-center text-blue-200 text-sm">
              <div className="flex items-center mr-6">
                <FaCalendarAlt className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-colors group">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${post.coverImage}')` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
          {/* Gradient overlay */}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-blue-400 text-xs mb-3">
          <FaTag className="mr-1" />
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag, index) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="hover:text-blue-300 transition-colors">
                {tag}{index < Math.min(post.tags.length, 2) - 1 && ','}
              </Link>
            ))}
            {post.tags.length > 2 && (
              <span className="text-gray-400">+{post.tags.length - 2}</span>
            )}
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <FaCalendarAlt className="mr-1 text-xs" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1 text-xs" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

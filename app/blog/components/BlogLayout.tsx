"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaTag, FaFolder } from "react-icons/fa";
import { categories, blogPosts } from "../lib/blog-data";
import { BlogPost, Category } from "../lib/types";

interface BlogLayoutProps {
  children?: React.ReactNode;
  currentPost?: BlogPost;
  showSidebar?: boolean;
}

export default function BlogLayout({
  children,
  currentPost,
  showSidebar = true,
}: BlogLayoutProps) {
  // Get recent posts (excluding current if provided)
  const recentPosts = blogPosts
    .filter((post) => (currentPost ? post.slug !== currentPost.slug : true))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);

  // Extract all unique tags from all posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Count posts per category
  const categoriesWithCounts = categories.map((category) => {
    const postCount = blogPosts.filter((post) =>
      post.categories.some(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === category.slug
      )
    ).length;

    return {
      ...category,
      postCount,
    };
  });

  if (!showSidebar) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="sticky top-24 space-y-6">
            {/* Recent Posts */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-400">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categoriesWithCounts.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center">
                      <FaFolder className="text-purple-400 mr-2" />
                      <span className="text-gray-300">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {category.postCount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 20).map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors"
                  >
                    <FaTag className="mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 order-1 lg:order-2">{children}</div>
      </div>
    </div>
  );
}

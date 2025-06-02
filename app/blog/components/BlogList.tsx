import { blogPosts } from "../lib/blog-data";
import BlogCard from "./BlogCard";
import { BlogPost } from "../lib/types";

interface BlogListProps {
  posts?: BlogPost[];
  title?: string;
  showFeatured?: boolean;
  limit?: number;
  excludeSlugs?: string[];
  className?: string;
  emptyMessage?: string;
}

export default function BlogList({
  posts = blogPosts,
  title,
  showFeatured = false,
  limit,
  excludeSlugs = [],
  className = "",
  emptyMessage = "No blog posts found.",
}: BlogListProps) {
  // Filter out excluded posts
  let filteredPosts = posts.filter((post) => !excludeSlugs.includes(post.slug));

  // Sort by date (newest first)
  filteredPosts = filteredPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Apply limit if specified
  if (limit) {
    filteredPosts = filteredPosts.slice(0, limit);
  }

  // Separate featured and regular posts if showFeatured is true
  const featuredPosts = showFeatured
    ? filteredPosts.filter((post) => post.featured)
    : [];
  const regularPosts = showFeatured
    ? filteredPosts.filter((post) => !post.featured)
    : filteredPosts;

  if (filteredPosts.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-400 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
      )}

      <div className="space-y-8">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured={true} />
            ))}
            {regularPosts.length > 0 && (
              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  More Articles
                </h3>
              </div>
            )}
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.map((post) => (
          <BlogCard key={post.slug} post={post} featured={false} />
        ))}
      </div>
    </div>
  );
}

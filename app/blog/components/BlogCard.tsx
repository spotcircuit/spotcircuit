import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaTag, FaFolder } from "react-icons/fa";
import { BlogPost } from "../lib/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  showImage?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

export default function BlogCard({
  post,
  featured = false,
  showImage = true,
  showExcerpt = true,
  className = "",
}: BlogCardProps) {
  if (featured) {
    return (
      <article
        className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 ${className}`}
      >
        <div className="flex flex-col lg:flex-row">
          {showImage && (
            <div className="lg:w-2/5">
              <Link href={`/blog/${post.slug}`}>
                <div className="h-64 lg:h-full relative">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:opacity-90 transition-opacity"
                  />
                </div>
              </Link>
            </div>
          )}
          <div className="lg:w-3/5 p-8">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.categories.map((category, index) => (
                <Link
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-600/30 transition-colors"
                >
                  <FaFolder className="mr-1" />
                  {category}
                </Link>
              ))}
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover:text-blue-300 transition-colors">
                {post.title}
              </h2>
            </Link>

            {showExcerpt && (
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {post.excerpt.length > 150
                  ? post.excerpt.substring(0, 150) + "..."
                  : post.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-400 text-sm space-x-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 ${className}`}
    >
      <div className="flex flex-col md:flex-row">
        {showImage && (
          <div className="md:w-1/3">
            <Link href={`/blog/${post.slug}`}>
              <div className="h-48 md:h-full relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>
          </div>
        )}
        <div className="md:w-2/3 p-6">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 text-blue-300 mb-3">
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <Link
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                key={tagIndex}
                className="flex items-center space-x-1 hover:text-blue-200 text-xs"
              >
                <FaTag className="h-2.5 w-2.5 mr-1" />
                <span className="font-medium">{tag}</span>
              </Link>
            ))}
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
              {post.title}
            </h3>
          </Link>

          {showExcerpt && (
            <p className="text-gray-300 mb-4">
              {post.excerpt.length > 120
                ? post.excerpt.substring(0, 120) + "..."
                : post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm">
              <FaCalendarAlt className="mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <FaClock className="mr-2" />
              <span>{post.readTime}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

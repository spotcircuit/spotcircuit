import Link from "next/link";
import { FaTag, FaFolder } from "react-icons/fa";
import { BlogPost } from "../lib/types";

interface BlogMetaProps {
  post: BlogPost;
  showCategories?: boolean;
  showTags?: boolean;
  layout?: "horizontal" | "vertical";
  maxTags?: number;
  maxCategories?: number;
}

export default function BlogMeta({
  post,
  showCategories = true,
  showTags = true,
  layout = "vertical",
  maxTags = 10,
  maxCategories = 3,
}: BlogMetaProps) {
  const containerClass =
    layout === "horizontal" ? "flex flex-wrap items-center gap-4" : "space-y-6";

  const sectionClass = layout === "horizontal" ? "flex items-center gap-2" : "";

  return (
    <div className={containerClass}>
      {/* Categories */}
      {showCategories && post.categories.length > 0 && (
        <div className={sectionClass}>
          {layout === "vertical" && (
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <FaFolder className="mr-2 text-purple-400" />
              Categories
            </h3>
          )}
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, maxCategories).map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-600/30 transition-colors"
              >
                <FaFolder className="mr-2 text-xs" />
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {showTags && post.tags.length > 0 && (
        <div className={sectionClass}>
          {layout === "vertical" && (
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <FaTag className="mr-2 text-blue-400" />
              Tags
            </h3>
          )}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, maxTags).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-600/30 transition-colors"
              >
                <FaTag className="mr-1 text-xs" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

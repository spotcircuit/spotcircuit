import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaFolder,
  FaEnvelope,
} from "react-icons/fa";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, blogPosts } from "../../lib/blog-data";
import { BlogLayout, BlogList } from "../../components";

export const revalidate = 60;

// Extract all unique tags
const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

// Generate metadata for the tag page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Convert slug to tag name
  const tagName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${tagName} Articles - SpotCircuit Blog`,
    description: `Articles related to ${tagName}`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Convert slug back to tag name (approximately)
  const tagName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Find posts with this tag
  const tagPosts = blogPosts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase().replace(/\s+/g, "-") === slug)
  );

  if (tagPosts.length === 0) {
    notFound();
  }

  return (
    <>
      <Header />
      <BlogLayout>
        {/* Tag Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <FaTag className="text-blue-300 mr-2" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {tagName}
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {tagPosts.length} {tagPosts.length === 1 ? "Article" : "Articles"}
          </p>
        </div>
      </div>

      {/* Posts List */}
      <div className="container mx-auto px-4 py-12">
        <BlogList
          posts={tagPosts}
          emptyMessage="No articles found with this tag. Check back soon for new content."
        />
      </div>
      </BlogLayout>
      <Footer />
    </>
  );
}

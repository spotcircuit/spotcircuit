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

// Generate metadata for the category page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Find category from predefined list
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Articles - SpotCircuit Blog`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Find category from predefined list
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Find posts in this category
  const categoryPosts = blogPosts.filter((post) =>
    post.categories.some(
      (cat) => cat.toLowerCase().replace(/\s+/g, "-") === slug
    )
  );

  return (
    <>
      <BlogLayout>
        {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-blue-100 mb-4">{category.description}</p>
          <p className="text-lg text-blue-100">
            {categoryPosts.length}{" "}
            {categoryPosts.length === 1 ? "Article" : "Articles"}
          </p>
        </div>
      </div>

      {/* Posts List */}
      <div className="container mx-auto px-4 py-12">
        <BlogList
          posts={categoryPosts}
          emptyMessage="No articles found in this category. Check back soon for new content."
        />
      </div>
      </BlogLayout>
    </>
  );
}

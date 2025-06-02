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
import ReactMarkdown from "react-markdown";
import { categories, blogPosts } from "./lib/blog-data"; // Updated import path
import { BlogLayout, BlogCard, NewsletterSignup } from "./components";

export const revalidate = 60;

// Extract all unique categories
const allCategories = Array.from(
  new Set(blogPosts.flatMap((post) => post.categories))
).sort();

export default function BlogPage() {
  // Get most recent post to display as featured
  const latestPost = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  // Get other posts for the list
  const otherPosts = blogPosts
    .filter((post) => post.slug !== latestPost.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24">
        {/* Blog Header */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SpotCircuit Blog
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              AI-driven insights for service businesses
            </p>
          </div>
        </div>

        <BlogLayout>
          {/* Featured Post */}
          <div className="mb-12">
            <BlogCard post={latestPost} featured={true} />
          </div>

          {/* Other Posts */}
          {otherPosts.length > 0 && (
            <div className="space-y-8">
              <div className="border-t border-gray-800 pt-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  More Articles
                </h2>
              </div>
              {otherPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured={false} />
              ))}
            </div>
          )}
        </BlogLayout>
      </main>
      <Footer />
    </div>
  );
}

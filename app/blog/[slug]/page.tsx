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
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, blogPosts } from "../lib/blog-data";
import { BlogLayout, BlogMeta } from "../components";
import { getBlogPostContent } from "../lib/content-loader";

export const revalidate = 60;

// Generate metadata for the blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} - SpotCircuit Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Find the specific blog post
  const currentPost = blogPosts.find((post) => post.slug === slug);

  if (!currentPost) {
    notFound();
  }

  // Get content for the current post using the content loader
  const postContent = getBlogPostContent(currentPost.slug);

  return (
    <BlogLayout>
      {/* Blog Post Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentPost.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              {currentPost.date}
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              {currentPost.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <article className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          {/* Categories and Tags */}
          <BlogMeta
            post={currentPost}
            showCategories={true}
            showTags={true}
            layout="horizontal"
          />

          {/* Blog Content */}
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-white mb-4 mt-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-white mb-3 mt-5">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="text-gray-300 mb-4 pl-6 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => <li className="list-disc">{children}</li>,
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-400 hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {postContent}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </BlogLayout>
  );
}

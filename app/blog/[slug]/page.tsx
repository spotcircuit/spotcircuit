import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaFolder, FaEnvelope } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { categories, blogPosts } from '@/app/lib/blog-data';
import { seoArticleContent } from './seo-isnt-dead/content';

export const revalidate = 60;

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts.find(p => p.slug === slug);
	
	if (!post) {
		return {
			title: 'Blog Post Not Found',
		};
	}
	
	return {
		title: `${post.title} - SpotCircuit Blog`,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	// Find the specific blog post
	const currentPost = blogPosts.find(post => post.slug === slug);
	
	if (!currentPost) {
		notFound();
	}

	// Get recent posts (excluding current)
	const recentPosts = blogPosts
		.filter((post) => post.slug !== currentPost.slug)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 10);

	// Extract all unique tags from all posts
	const allTags = Array.from(
		new Set(blogPosts.flatMap((post) => post.tags))
	).sort();

	// Count posts per category
	const categoriesWithCounts = categories.map((category) => {
		const postCount = blogPosts.filter((post) =>
			post.categories.some(
				(cat) => cat.toLowerCase().replace(/\s+/g, '-') === category.slug
			)
		).length;

		return {
			...category,
			postCount,
		};
	});

	// Get content for the current post
	const getPostContent = (slug: string) => {
		switch (slug) {
			case 'seo-isnt-dead':
				return seoArticleContent;
			case 'ai-transforming-service-businesses':
				return `# How AI is Transforming Service Businesses: A Strategic Guide for 2025

In today's rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it's a present-day competitive advantage.

## The AI Revolution in Service Industries

Service businesses across all sectors are discovering that AI isn't just about automation—it's about amplification. From customer service to operational efficiency, AI is helping businesses deliver better outcomes while reducing costs.

## Key Areas of Transformation

### 1. Customer Experience Enhancement
AI-powered chatbots and virtual assistants can handle routine inquiries 24/7, freeing up human staff for complex problem-solving.

### 2. Predictive Analytics
Service businesses can now anticipate customer needs, optimize resource allocation, and prevent issues before they occur.

### 3. Process Automation
Repetitive tasks like scheduling, invoicing, and follow-ups can be automated, allowing teams to focus on high-value activities.

## Getting Started with AI

The key to successful AI adoption isn't about implementing the most advanced technology—it's about identifying the right opportunities for your specific business needs.

Start small, measure results, and scale what works. The businesses that thrive in 2025 will be those that view AI as a strategic partner, not just a tool.`;
			default:
				return 'Content coming soon...';
		}
	};

	return (
		<div className="min-h-screen bg-black">
			<Header />

			<main className="pt-24">
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

				{/* Main Content Container */}
				<div className="container mx-auto px-4 py-12">
					<div className="grid lg:grid-cols-4 gap-8">
						{/* Sidebar - Now on Left */}
						<div className="lg:col-span-1 order-2 lg:order-1">
							{/* Recent Posts */}
							<div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mb-6">
								<h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
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
							<div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mb-6">
								<h3 className="text-xl font-bold text-white mb-4">Categories</h3>
								<div className="space-y-2">
									{categoriesWithCounts.map((category) => (
										<Link
											key={category.slug}
											href={`/category/${category.slug}`}
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
									{allTags.map((tag) => (
										<Link
											key={tag}
											href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
											className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors"
										>
											<FaTag className="mr-1" />
											{tag}
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Main Blog Content - Now on Right */}
						<div className="lg:col-span-3 order-1 lg:order-2">
							<article className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
								{/* Categories and Tags Section */}
								<div className="mb-8 space-y-6">
									{/* Categories */}
									<div>
										<h3 className="text-lg font-semibold text-white mb-3 flex items-center">
											<FaFolder className="mr-2 text-purple-400" />
											Categories
										</h3>
										<div className="flex flex-wrap gap-2">
											{currentPost.categories.map((category) => (
												<Link
													key={category}
													href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
													className="inline-flex items-center px-4 py-2 rounded-lg text-sm bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-600/30 transition-colors"
												>
													<FaFolder className="mr-2 text-xs" />
													{category}
												</Link>
											))}
										</div>
									</div>

									{/* Tags */}
									<div>
										<h3 className="text-lg font-semibold text-white mb-3 flex items-center">
											<FaTag className="mr-2 text-blue-400" />
											Tags
										</h3>
										<div className="flex flex-wrap gap-2">
											{currentPost.tags.map((tag) => (
												<Link
													key={tag}
													href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
													className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-600/30 transition-colors"
												>
													<FaTag className="mr-1 text-xs" />
													{tag}
												</Link>
											))}
										</div>
									</div>
								</div>

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
											li: ({ children }) => (
												<li className="list-disc">{children}</li>
											),
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
										{getPostContent(currentPost.slug)}
									</ReactMarkdown>
								</div>
							</article>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

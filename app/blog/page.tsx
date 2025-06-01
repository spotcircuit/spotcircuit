import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaFolder, FaEnvelope } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { categories, blogPosts } from '@/app/lib/blog-data'; // Import from the shared file

export const revalidate = 60;

// Extract all unique categories
const allCategories = Array.from(
	new Set(blogPosts.flatMap((post) => post.categories))
).sort();

export default function BlogPage() {
	// Get most recent post to display fully
	const latestPost = [...blogPosts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)[0];

	// Get related posts (based on tag similarity)
	const relatedPosts = blogPosts
		.filter((post) => post.slug !== latestPost.slug)
		.map((post) => {
			// Count matching tags
			const matchingTags = post.tags.filter((tag) =>
				latestPost.tags.includes(tag)
			).length;
			return { ...post, matchingTags };
		})
		.sort((a, b) => b.matchingTags - a.matchingTags) // Sort by most matching tags
		.slice(0, 3); // Top 3 related posts

	// Get recent posts (excluding latest)
	const recentPosts = blogPosts
		.filter((post) => post.slug !== latestPost.slug)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 10);

	return (
		<div className="min-h-screen bg-black">
			<Header />

			<main className="pt-24">
				{/* Latest Post Header with more spacing */}
				<div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
					<div className="container mx-auto px-4">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							{latestPost.title}
						</h1>
						<div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
							<div className="flex items-center">
								<FaCalendarAlt className="mr-2" />
								<span>{latestPost.date}</span>
							</div>
							<div className="flex items-center">
								<FaClock className="mr-2" />
								<span>{latestPost.readTime}</span>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content Area - FLIPPED layout (sidebar on left) */}
				<div className="container mx-auto px-4 py-12">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Sidebar - NOW ON LEFT */}
						<div className="lg:w-1/3 order-2 lg:order-1">
							<div className="sticky top-24 space-y-8">
								{/* All Categories */}
								<div className="bg-gray-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">
										Categories
									</h3>
									<div className="flex flex-wrap gap-2">
										{allCategories.map((category, index) => (
											<Link
												href={`/category/${category
													.toLowerCase()
													.replace(/\s+/g, '-')}`}
												key={index}
												className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
											>
												{category}
											</Link>
										))}
									</div>
								</div>

								{/* Related Posts */}
								<div className="bg-gray-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">
										Related Articles
									</h3>
									<div className="space-y-4">
										{relatedPosts.map((post, index) => (
											<div key={index} className="flex items-start gap-3">
												<div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden relative">
													<Image
														src={post.coverImage}
														alt={post.title}
														fill
														style={{ objectFit: 'cover' }}
													/>
												</div>
												<div>
													<Link href={`/blog/${post.slug}`}>
														<h4 className="text-sm font-medium text-white hover:text-blue-300 transition-colors">
															{post.title}
														</h4>
													</Link>
													<div className="text-gray-400 text-xs mt-1">
														{post.date}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Recent Posts - Explicitly sorted by date */}
								<div className="bg-gray-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">
										Recent Posts
									</h3>
									<div className="space-y-4">
										{recentPosts.map((post, index) => (
											<div key={index} className="flex items-start gap-3">
												<div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden relative">
													<Image
														src={post.coverImage}
														alt={post.title}
														fill
														style={{ objectFit: 'cover' }}
													/>
												</div>
												<div>
													<Link href={`/blog/${post.slug}`}>
														<h4 className="text-sm font-medium text-white hover:text-blue-300 transition-colors">
															{post.title}
														</h4>
													</Link>
													<div className="text-gray-400 text-xs mt-1">
														{post.date}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Subscribe Section - Now at bottom of sidebar */}
								<div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">
										Subscribe to Our Newsletter
									</h3>
									<p className="text-blue-100 mb-4">
										Get the latest AI insights for service businesses delivered to your inbox.
									</p>
									<form className="space-y-3">
										<div>
											<input
												type="email"
												placeholder="Your email address"
												className="w-full bg-white/10 border border-blue-400/30 rounded-md px-4 py-2 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
											/>
										</div>
										<button
											type="submit"
											className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
										>
											<FaEnvelope className="mr-2" />
											Subscribe
										</button>
									</form>
								</div>
							</div>
						</div>

						{/* Main Content - NOW ON RIGHT */}
						<div className="lg:w-2/3 order-1 lg:order-2">
							{/* Tags section moved here for better visibility */}
							<div className="flex flex-wrap items-center gap-2 text-blue-300 mb-6">
								{latestPost.tags.map((tag, tagIndex) => (
									<Link
										href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
										key={tagIndex}
										className="flex items-center space-x-1 hover:text-blue-200 text-xs"
									>
										<FaTag className="h-2.5 w-2.5 mr-1" />
										<span className="font-medium">{tag}</span>
									</Link>
								))}
							</div>

							{/* Feature Image */}
							<div className="mb-8 rounded-xl overflow-hidden">
								<div className="h-80 relative">
									<Image
										src={latestPost.coverImage}
										alt={latestPost.title}
										fill
										style={{ objectFit: 'cover' }}
										priority
									/>
								</div>
							</div>

							{/* Categories */}
							<div className="flex flex-wrap items-center gap-3 mb-6">
								{latestPost.categories.map((category, index) => (
									<Link
										href={`/category/${category
											.toLowerCase()
											.replace(/\s+/g, '-')}`}
										key={index}
										className="bg-purple-900/30 hover:bg-purple-800/50 text-purple-300 px-3 py-1 rounded-full text-sm transition-colors"
									>
										{category}
									</Link>
								))}
							</div>

							{/* Post Content - Full article displayed here */}
							<div className="prose prose-invert max-w-none">
								<ReactMarkdown>{latestPost.content}</ReactMarkdown>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

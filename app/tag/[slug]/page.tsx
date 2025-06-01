import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaFolder, FaEnvelope } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { categories, blogPosts } from '@/app/lib/blog-data'; // Import from the shared file

export const revalidate = 60;

// Extract all unique tags
const allTags = Array.from(
	new Set(blogPosts.flatMap((post) => post.tags))
).sort();

// Generate metadata for the tag page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	// Convert slug to tag name
	const tagName = slug
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
	
	return {
		title: `${tagName} Articles - SpotCircuit Blog`,
		description: `Articles related to ${tagName}`,
	};
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	// Convert slug back to tag name (approximately)
	const tagName = slug
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
	
	// Find posts with this tag
	const tagPosts = blogPosts.filter(post => 
		post.tags.some(tag => 
			tag.toLowerCase().replace(/\s+/g, '-') === slug
		)
	);

	if (tagPosts.length === 0) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-black">
			<Header />
			<main className="pt-24">
				<div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
					<div className="container mx-auto px-4 text-center">
						<div className="inline-flex items-center justify-center mb-4">
							<FaTag className="text-blue-300 mr-2" />
							<h1 className="text-4xl md:text-5xl font-bold text-white">
								{tagName}
							</h1>
						</div>
						<p className="text-xl text-blue-100">
							{tagPosts.length} {tagPosts.length === 1 ? 'Article' : 'Articles'}
						</p>
					</div>
				</div>

				{/* Posts List */}
				<div className="container mx-auto px-4 py-12">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Main Content */}
						<div className="lg:w-2/3">
							<div className="space-y-10">
								{tagPosts.map((post, index) => (
									<div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
										<div className="flex flex-col md:flex-row">
											<div className="md:w-1/3">
												<Link href={`/blog/${post.slug}`}>
													<div className="h-48 md:h-full relative">
														<Image 
															src={post.coverImage} 
															alt={post.title}
															fill
															style={{objectFit: "cover"}}
															className="hover:opacity-90 transition-opacity"
														/>
													</div>
												</Link>
											</div>
											<div className="md:w-2/3 p-6">
												{/* Other related tags */}
												<div className="flex flex-wrap items-center gap-2 text-blue-300 mb-3">
													{post.tags
														.filter(tag => tag.toLowerCase().replace(/\s+/g, '-') !== slug)
														.slice(0, 3)
														.map((tag, tagIndex) => (
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
												<Link href={`/blog/${post.slug}`}>
													<h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
														{post.title}
													</h3>
												</Link>
												<p className="text-gray-300 mb-4">{post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}</p>
												<div className="flex items-center justify-between">
													<div className="flex items-center text-gray-400 text-sm">
														<FaCalendarAlt className="mr-2" />
														<span>{post.date}</span>
														<span className="mx-2">•</span>
														<FaClock className="mr-2" />
														<span>{post.readTime}</span>
													</div>
													<Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 font-medium">
														Read more →
													</Link>
												</div>
												
												{/* Categories - different styling from tags */}
												<div className="flex flex-wrap items-center gap-3 mt-4">
													{post.categories.map((category, index) => (
														<Link 
															href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
															key={index}
															className="bg-purple-900/30 hover:bg-purple-800/50 text-purple-300 px-3 py-1 rounded-full text-sm transition-colors"
														>
															<FaFolder className="inline mr-1 h-2.5 w-2.5" />
															{category}
														</Link>
													))}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						
						{/* Sidebar */}
						<div className="lg:w-1/3">
							<div className="sticky top-24 space-y-8">
								{/* Popular Tags */}
								<div className="bg-gray-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
									<div className="flex flex-wrap gap-2">
										{allTags.map((tag, index) => {
											const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
											return (
												<Link 
													href={`/tag/${tagSlug}`} 
													key={index}
													className={`flex items-center text-xs px-3 py-1 rounded-full transition-colors ${
														tagSlug === slug
															? "bg-blue-700 text-white"
															: "bg-gray-800 hover:bg-gray-700 text-gray-300"
													}`}
												>
													<FaTag className="h-2 w-2 mr-1" />
													<span>{tag}</span>
												</Link>
											);
										})}
									</div>
								</div>
								
								{/* Categories - showing the distinction */}
								<div className="bg-gray-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">Categories</h3>
									<div className="flex flex-wrap gap-2">
										{categories.map((cat) => (
											<Link 
												href={`/category/${cat.slug}`} 
												key={cat.slug}
												className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
											>
												{cat.name}
											</Link>
										))}
									</div>
								</div>
								
								{/* Subscribe Section */}
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
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

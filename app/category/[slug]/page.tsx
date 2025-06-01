import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaFolder, FaEnvelope } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { categories, blogPosts } from '@/app/lib/blog-data'; // Import from the shared file

export const revalidate = 60;

// Generate metadata for the category page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	// Find category from predefined list
	const category = categories.find(cat => cat.slug === slug);
	
	if (!category) {
		return {
			title: 'Category Not Found',
		};
	}
	
	return {
		title: `${category.name} Articles - SpotCircuit Blog`,
		description: category.description,
	};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	// Find category from predefined list
	const category = categories.find(cat => cat.slug === slug);
	
	if (!category) {
		notFound();
	}
	
	// Find posts in this category
	const categoryPosts = blogPosts.filter(post => 
		post.categories.some(cat => 
			cat.toLowerCase().replace(/\s+/g, '-') === slug
		)
	);

	return (
		<div className="min-h-screen bg-black">
			<Header />
			<main className="pt-24">
				<div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							{category.name}
						</h1>
						<p className="text-xl text-blue-100 mb-4">
							{category.description}
						</p>
						<p className="text-lg text-blue-100">
							{categoryPosts.length} {categoryPosts.length === 1 ? 'Article' : 'Articles'}
						</p>
					</div>
				</div>

				{/* Posts List */}
				<div className="container mx-auto px-4 py-12">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Main Content - Use the same layout as the blog page */}
						<div className="lg:w-2/3">
							<div className="space-y-10">
								{categoryPosts.length > 0 ? (
									categoryPosts.map((post, index) => (
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
													{/* Tags - NOT categories */}
													<div className="flex flex-wrap items-center gap-2 text-blue-300 mb-3">
														{post.tags.slice(0, 3).map((tag, tagIndex) => (
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
												</div>
											</div>
										</div>
									))
								) : (
									<div className="text-center py-12">
										<h3 className="text-xl text-white mb-2">No articles found</h3>
										<p className="text-gray-400">Check back soon for new content in this category.</p>
									</div>
								)}
							</div>
						</div>
						
						{/* Sidebar */}
						<div className="lg:w-1/3">
							<div className="sticky top-24 space-y-8">
								{/* All Categories */}
								<div className="bg-gray-900 rounded-xl p-6">
									<h3 className="text-xl font-bold text-white mb-4">Categories</h3>
									<div className="flex flex-wrap gap-2">
										{categories.map((cat) => (
											<Link 
												href={`/category/${cat.slug}`} 
												key={cat.slug}
												className={`px-3 py-1 rounded-full text-sm transition-colors ${
													cat.slug === slug
														? "bg-blue-700 text-white"
														: "bg-gray-800 hover:bg-gray-700 text-gray-300"
												}`}
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
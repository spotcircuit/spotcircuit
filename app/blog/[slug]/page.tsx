import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaFolder } from 'react-icons/fa';

export const revalidate = 60;

// Predefined list of categories (these are the only valid categories)
export const categories = [
	{
		slug: 'technology',
		name: 'Technology',
		description: 'Articles about AI, automation, and emerging tech trends',
		postCount: 0, // Will be calculated dynamically
	},
	{
		slug: 'business-strategy',
		name: 'Business Strategy',
		description: 'Strategic insights for service business growth and optimization',
		postCount: 0,
	},
	{
		slug: 'marketing',
		name: 'Marketing',
		description: 'Modern marketing approaches for digital and AI-first businesses',
		postCount: 0,
	},
];

// Blog posts data for counting
const blogPosts = [
	{
		slug: 'seo-isnt-dead',
		categories: ['Marketing', 'Technology'],
	},
	{
		slug: 'ai-transforming-service-businesses',
		categories: ['Technology', 'Business Strategy'],
	},
];

export default function CategoryIndexPage() {
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

	return (
		<div className="min-h-screen bg-black">
			<Header />

			<main className="pt-24">
				<div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Categories
						</h1>
						<p className="text-xl text-blue-100">
							Browse articles by topic
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-12">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{categoriesWithCounts.map((category) => (
							<Link
								href={`/category/${category.slug}`}
								key={category.slug}
								className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-700 transition-colors"
							>
								<div className="p-6">
									<div className="flex items-center mb-4">
										<FaFolder className="text-blue-400 mr-3 text-xl" />
										<h3 className="text-xl font-bold text-white">
											{category.name}
										</h3>
									</div>
									<p className="text-gray-300 mb-4">
										{category.description}
									</p>
									<div className="text-blue-300 font-medium">
										{category.postCount}{' '}
										{category.postCount === 1
											? 'Article'
											: 'Articles'}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

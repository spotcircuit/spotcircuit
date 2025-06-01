import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaSearch, FaFolder } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 60;

// Blog posts data structure (same as in blog page)
const blogPosts = [
  {
    slug: 'ai-transforming-service-businesses',
    title: 'How AI is Transforming Service Businesses: A Strategic Guide for 2025',
    date: 'May 12, 2025',
    readTime: '8 min read',
    excerpt: 'In today\'s rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it\'s a present-day competitive advantage.',
    coverImage: '/static/images/blog.webp',
    tags: ['AI', 'Automation', 'Business Strategy', 'Digital Transformation', 'Service Business'],
    categories: ['Technology', 'Business Strategy'],
    featured: true
  },
  {
    slug: 'seo-isnt-dead',
    title: 'SEO Isn't Dead: Take a Masterclass in Fighting Yesterday's War',
    date: 'May 15, 2025',
    readTime: '10 min read',
    excerpt: 'As AI reshapes search, businesses clinging to outdated SEO strategies are being left behind. Here\'s how to adapt to the new landscape.',
    coverImage: '/static/images/seo-cover.webp',
    tags: ['SEO', 'AI Search', 'Content Strategy', 'Digital Marketing', 'LLM Optimization'],
    categories: ['Marketing', 'Technology'],
    featured: false
  }
];

// Extract all unique categories
const allCategories = Array.from(
  new Set(blogPosts.flatMap(post => post.categories))
).sort();

// Generate metadata for the category page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${categoryName} Articles | SpotCircuit Blog`,
    description: `Browse our collection of articles in the ${categoryName} category`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Convert slug to category name format
  const categorySlug = params.slug.toLowerCase();
  const categoryName = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Find posts in this category
  const categoryPosts = blogPosts.filter(post => 
    post.categories.some(category => category.toLowerCase() === categoryName.toLowerCase() || 
                                    category.toLowerCase().replace(/\s+/g, '-') === categorySlug)
  );
  
  // If no posts found in this category, show 404
  if (categoryPosts.length === 0) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-purple-500/20 rounded-full px-3 py-1 text-purple-300 text-sm font-medium mb-4">
              Category
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {categoryName}
            </h1>
            <p className="text-xl text-blue-100">
              {categoryPosts.length} {categoryPosts.length === 1 ? 'Article' : 'Articles'}
            </p>
          </div>
        </div>

        {/* Posts List */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="space-y-10">
                {categoryPosts.map((post, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
                    <div className="h-60 relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      ></div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-blue-300 mb-3">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Link href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} key={tagIndex} className="flex items-center space-x-1 hover:text-blue-200 text-xs">
                            <FaTag className="h-2.5 w-2.5" />
                            <span className="font-medium">{tag}</span>
                          </Link>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
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
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* All Categories */}
                <div className="bg-gray-900 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map((category, index) => (
                      <Link 
                        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          category.toLowerCase() === categoryName.toLowerCase() 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        }`}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Return to Blog */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Explore More</h3>
                  <Link 
                    href="/blog"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block transition-colors"
                  >
                    Back to All Articles
                  </Link>
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
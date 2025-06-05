import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts, getAllTags, getAllCategories } from './utils/blogLoader';
import PostCard from './components/PostCard';
import TagsList from './components/TagsList';
import CategoriesList from './components/CategoriesList';

export const revalidate = 60;

interface SearchParams {
  tag?: string;
  category?: string;
}

interface BlogPageProps {
  searchParams: SearchParams;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Get all blog posts
  const allPosts = await getAllPosts();
  const allTags = await getAllTags();
  const allCategories = await getAllCategories();
  
  // Filter posts based on search params
  const filteredPosts = allPosts.filter(post => {
    // Filter by tag if specified
    if (searchParams.tag && !post.tags.includes(searchParams.tag)) {
      return false;
    }
    
    // Filter by category if specified
    if (searchParams.category && post.category !== searchParams.category) {
      return false;
    }
    
    return true;
  });
  
  // Get the first post for the featured section
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  // Get the remaining posts
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        {/* Featured Post Header */}
        {featuredPost ? (
          <PostCard post={featuredPost} featured={true} />
        ) : (
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ backgroundImage: "url('/static/images/blog.webp')" }}
            ></div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-20">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {searchParams.tag ? `Posts tagged with "${searchParams.tag}"` : 
                   searchParams.category ? `Posts in "${searchParams.category}" category` : 
                   'Blog Posts'}
                </h1>
                <p className="text-xl text-blue-300 font-medium">
                  {searchParams.tag || searchParams.category ? 
                  'Browse our articles filtered by your selection' : 
                  'Explore our latest articles on AI, automation, and business growth'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Current Filter Info */}
              {(searchParams.tag || searchParams.category) && (
                <div className="mb-8 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      {searchParams.tag && (
                        <p className="text-gray-300">
                          Viewing posts tagged with <span className="text-blue-400 font-medium">{searchParams.tag}</span>
                        </p>
                      )}
                      {searchParams.category && (
                        <p className="text-gray-300">
                          Viewing posts in category <span className="text-blue-400 font-medium">{searchParams.category}</span>
                        </p>
                      )}
                      <p className="text-sm text-gray-400 mt-1">
                        Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                      </p>
                    </div>
                    <Link 
                      href="/blog" 
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm"
                    >
                      Clear filters
                    </Link>
                  </div>
                </div>
              )}
            
              {/* Posts List */}
              {remainingPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {remainingPosts.map(post => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : featuredPost ? (
                <p className="text-gray-300 text-lg">No additional posts found.</p>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-blue-300 text-3xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No posts found</h3>
                  <p className="text-gray-400 mb-6">We couldn't find any blog posts matching your criteria.</p>
                  <Link 
                    href="/blog" 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
                  >
                    View all posts
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Tags Cloud */}
              <TagsList tags={allTags} />
              
              {/* Categories List */}
              <CategoriesList categories={allCategories} />
              
              {/* About Blog Section */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-medium text-white mb-4">About Our Blog</h3>
                <p className="text-gray-400 mb-4">
                  Discover insights on AI strategy, business automation, and service optimization. 
                  Our experts share practical advice to help your business thrive in the digital age.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-center transition-colors"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

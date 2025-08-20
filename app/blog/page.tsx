import Link from 'next/link';
import { getAllPosts, getAllTags, getAllCategories } from './utils/blogLoader';
import PostCard from './components/PostCard';
import TagsList from './components/TagsList';
import CategoriesList from './components/CategoriesList';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import BlogPageSchema from '../components/BlogSchema';
import SpeakableSchema from '../components/SpeakableSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import EntitySchema from '../components/EntitySchema';
import ClaimReviewSchema from '../components/ClaimReviewSchema';

export const revalidate = 60;

type FilterType = {
  type: 'tag' | 'category';
  value: string;
} | null;

interface BlogPageParams {
  searchParams: {
    tag?: string;
    category?: string;
  };
}

// This is a Server Component
export default async function BlogPage({ searchParams }: BlogPageParams) {
  // Get all blog posts
  const allPosts = await getAllPosts();
  const allTags = await getAllTags();
  const allCategories = await getAllCategories();
  
  // Filter posts based on search params
  let filteredPosts = allPosts;
  let currentFilter: FilterType = null;
  
  if (searchParams.tag) {
    filteredPosts = allPosts.filter(post => post.tags.includes(searchParams.tag || ''));
    currentFilter = { type: 'tag', value: searchParams.tag || '' };
  } else if (searchParams.category) {
    filteredPosts = allPosts.filter(post => post.category === searchParams.category);
    currentFilter = { type: 'category', value: searchParams.category || '' };
  }
  
  // Get the latest post for the main display
  const latestPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  // Get the remaining posts for the recent posts section
  const recentPosts = filteredPosts.slice(1, 4);

  // Prepare data for schema
  const blogPostSchemaItems = filteredPosts.map(post => ({
    title: post.title,
    url: `https://www.spotcircuit.com/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    description: post.excerpt,
    author: {
      name: post.author || 'SpotCircuit Team'
    },
    image: post.coverImage
  }));

  return (
    <div className="min-h-screen bg-black">      
      {/* Schema Markup */}
      <BlogPageSchema 
        blogPosts={blogPostSchemaItems}
        blogUrl="https://www.spotcircuit.com/blog"
      />
      <SpeakableSchema cssSelectors={[".blog-summary"]} />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.spotcircuit.com", position: 1 },
          { name: "Blog", url: "https://www.spotcircuit.com/blog", position: 2 },
          ...(currentFilter ? [{ 
            name: currentFilter.value, 
            url: `https://www.spotcircuit.com/blog?${currentFilter.type}=${encodeURIComponent(currentFilter.value)}`, 
            position: 3 
          }] : [])
        ]} 
      />
      <EntitySchema 
        name="SpotCircuit Blog"
        description="Insights on AI-First SEO, LLM optimization, home service business automation, and growth strategies for ambitious businesses."
        url="https://www.spotcircuit.com/blog"
        entityType="Blog"
        relatedEntities={[
          {
            name: "AI-First SEO",
            url: "https://www.spotcircuit.com/seo2",
            description: "Modern approach to SEO focused on AI platform optimization."
          },
          {
            name: "Home Service Business Automation",
            url: "https://www.spotcircuit.com/services",
            description: "AI automation solutions for home service businesses."
          }
        ]}
      />
      <ClaimReviewSchema 
        claimReviewed="AI-First SEO produces better results than traditional SEO in the age of AI search assistants"
        author={{
          name: "SpotCircuit Research Team",
          url: "https://www.spotcircuit.com/about"
        }}
        reviewRating={{
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1"
        }}
        url="https://www.spotcircuit.com/blog"
        itemReviewed={{
          name: "AI-First SEO Methodology",
          description: "Modern approach to SEO focusing on AI and LLM optimization"
        }}
      />
      
      <main className="pt-24">
        {/* Blog Header */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/static/images/blog.webp')" }}
            aria-label="Blog header image showing AI and business growth concepts"
          ></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {currentFilter ? 
                  (currentFilter.type === 'tag' ? 
                    `Posts tagged with "${currentFilter.value}"` : 
                    `Posts in "${currentFilter.value}" category`) : 
                  'Our Blog'}
              </h1>
              
              {/* Blog Summary (Speakable) - Important for AI */}
              <div className="blog-summary mb-4">
                <p className="text-xl text-blue-300 font-medium">
                  {currentFilter ? 
                    'Browse our articles filtered by your selection' : 
                    'Insights on AI-First SEO, LLM optimization, home service business automation, and growth strategies for ambitious businesses.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Now on left */}
            <div className="lg:w-1/3 space-y-8">
              {/* Recent Posts */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-medium text-white mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {allPosts.slice(0, 3).map(post => (
                    <div key={post.slug} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="text-white hover:text-blue-400 transition-colors font-medium block mb-2"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories List */}
              <CategoriesList categories={allCategories} />
              
              {/* Tags Cloud */}
              <TagsList tags={allTags} />
              
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

            {/* Main Content - Now on right */}
            <div className="lg:w-2/3">
              {/* Current Filter Info */}
              {currentFilter && (
                <div className="mb-8 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-300">
                        Viewing posts {currentFilter.type === 'tag' ? 'tagged with' : 'in category'} <span className="text-blue-400 font-medium">{currentFilter.value}</span>
                      </p>
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
            
              {/* Latest Post Display */}
              {latestPost ? (
                <>
                  <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden mb-8">
                    {/* Post Image */}
                    <div className="relative w-full h-[300px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                      <div 
                        className="absolute inset-0 bg-cover bg-center z-0" 
                        style={{ backgroundImage: `url('${latestPost.coverImage}')` }}
                      ></div>
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <Link 
                          href={`/blog?category=${encodeURIComponent(latestPost.category)}`}
                          className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs text-white font-medium mb-3">
                          {latestPost.category}
                        </Link>
                        <h2 className="text-3xl font-bold text-white">{latestPost.title}</h2>
                        <div className="flex items-center text-gray-300 mt-2 text-sm">
                          <FaCalendarAlt className="mr-1" /> 
                          <span className="mr-4">{new Date(latestPost.date).toLocaleDateString()}</span>
                          <FaClock className="mr-1" /> 
                          <span>{latestPost.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Post Content */}
                    <div className="p-6">
                      <p className="text-gray-300 mb-6">{latestPost.excerpt}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {latestPost.tags.map(tag => (
                          <Link 
                            key={tag} 
                            href={`/blog?tag=${encodeURIComponent(tag)}`}
                            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-blue-300 text-sm rounded-full flex items-center"
                          >
                            <FaTag className="mr-1 text-xs" /> {tag}
                          </Link>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/blog/${latestPost.slug}`}
                        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  
                  {/* Recent Posts Grid (only show if there are multiple posts) */}
                  {recentPosts.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6">More Recent Posts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {recentPosts.map(post => (
                          <PostCard key={post.slug} post={post} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
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
          </div>
        </div>
      </main>    </div>
  );
}
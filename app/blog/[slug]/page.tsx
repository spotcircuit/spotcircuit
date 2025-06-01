import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaTag, FaShare, FaTwitter, FaLinkedin, FaFacebook, FaBookmark } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 60;

// Blog post data structure
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
  tags: string[];
  categories: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
}

// Blog posts database (in-memory for now)
const blogPosts: Record<string, BlogPost> = {
  'ai-transforming-service-businesses': {
    slug: 'ai-transforming-service-businesses',
    title: 'How AI is Transforming Service Businesses: A Strategic Guide for 2025',
    date: 'May 12, 2025',
    readTime: '8 min read',
    excerpt: 'In today\'s rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it\'s a present-day competitive advantage.',
    content: (
      <>
        <p className="text-xl text-blue-300 font-medium mb-8">
          In today's rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it's a present-day competitive advantage that's reshaping how service businesses operate, market, and deliver value to their customers.
        </p>

        <h2>The AI Revolution in Service Industries</h2>
        <p>
          Service businesses—from plumbing and HVAC to legal and financial services—are discovering that AI isn't just for tech giants. Small and medium-sized service providers are leveraging AI to streamline operations, enhance customer experiences, and drive growth in ways that were previously unimaginable.
        </p>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl my-8 border-l-4 border-blue-500">
          <p className="text-xl italic text-blue-100 m-0">
            "AI has completely transformed how we schedule and dispatch our technicians. What used to take hours of manual work is now automated, saving us over 20 hours per week and improving our response times by 35%." — Sarah Johnson, Operations Manager at Premier Plumbing Services
          </p>
        </div>

        <h2>Key AI Applications for Service Businesses</h2>

        <h3>1. Intelligent Lead Generation and Qualification</h3>
        <p>
          AI-powered tools can now analyze vast amounts of data to identify potential customers who are most likely to need your services. These systems go beyond basic demographic targeting to consider behavioral patterns, service history, and even predictive maintenance schedules.
        </p>

        <h2>Conclusion: The Competitive Imperative</h2>

        <p>
          For service businesses, AI adoption is rapidly shifting from a competitive advantage to a competitive necessity. Those who embrace these technologies thoughtfully and strategically will find themselves well-positioned to thrive in an increasingly digital marketplace.
        </p>
        <p>
          The good news is that the barrier to entry for AI implementation has never been lower. With the right partners and approach, service businesses of all sizes can begin leveraging AI to enhance their operations, improve customer experiences, and drive sustainable growth.
        </p>
        <p>
          The future of service businesses is intelligent, automated, and proactive. Is your business ready?
        </p>
      </>
    ),
    tags: ['AI', 'Automation', 'Business Strategy', 'Digital Transformation', 'Service Business'],
    categories: ['Technology', 'Business Strategy'],
    author: {
      name: 'SpotCircuit Team',
      role: 'AI Strategy Specialists for Service Businesses',
      avatar: '/static/images/avatar.png'
    },
    coverImage: '/static/images/blog.webp'
  },
  
  'seo-isnt-dead': {
    slug: 'seo-isnt-dead',
    title: 'SEO Isn\'t Dead: Take a Masterclass in Fighting Yesterday\'s War',
    date: 'May 15, 2025',
    readTime: '10 min read',
    excerpt: 'As AI reshapes search, businesses clinging to outdated SEO strategies are being left behind. Here\'s how to adapt to the new landscape.',
    content: (
      <>
        <p className="text-xl text-blue-300 font-medium mb-8">
          The SEO landscape has fundamentally changed. While traditional rankings still matter, businesses must now optimize for AI understanding and citation to remain visible in an increasingly AI-mediated world.
        </p>

        <h2>The Evolution of Search</h2>
        <p>
          Search is no longer just about blue links. AI-driven search experiences like ChatGPT, Claude, and Google's AI Overview now mediate information discovery, often bypassing traditional websites entirely.
        </p>
        
        <p>
          This shift represents both a challenge and an opportunity for businesses that understand how to adapt their SEO strategies for the AI era.
        </p>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl my-8 border-l-4 border-blue-500">
          <p className="text-xl italic text-blue-100 m-0">
            "The companies that understand AI aren't eliminating SEO—it's evolving SEO into something more sophisticated and impactful than ever before." 
          </p>
        </div>

        <h2>Why Traditional SEO Is Failing</h2>

        <h3>1. Keyword Blindness</h3>
        <p>
          Traditional SEO focuses on keywords, but AI search understands context and intent. Your content needs to speak the language of AI to be truly visible in modern search environments.
        </p>
        
        <h3>2. Invisible to AI</h3>
        <p>
          Your competitors are getting AI mentions while you're invisible to ChatGPT, Claude, and other AI systems despite ranking well on Google. This requires a fundamental shift in how content is structured.
        </p>

        <h2>SEO 2.0: The Path Forward</h2>

        <p>
          The future of SEO combines traditional best practices with AI-specific optimization strategies:
        </p>
        
        <ul>
          <li>Semantic structuring for AI comprehension</li>
          <li>FAQ and How-to formats that mirror conversational queries</li>
          <li>Proper schema markup for machine understanding</li>
          <li>Entity recognition and relationship mapping</li>
          <li>Content freshness and citation optimization</li>
        </ul>

        <h2>Conclusion: Adapting to the New Reality</h2>

        <p>
          SEO isn't dead—it's evolving. Businesses that adapt their strategies to account for AI-mediated search will thrive in this new landscape, while those clinging to outdated practices will find themselves increasingly invisible.
        </p>
        <p>
          The time to evolve your approach is now, before the gap between AI-optimized and traditional content becomes too wide to bridge.
        </p>
      </>
    ),
    tags: ['SEO', 'AI Search', 'Content Strategy', 'Digital Marketing', 'LLM Optimization'],
    categories: ['Marketing', 'Technology'],
    author: {
      name: 'Brian Pyatt',
      role: 'SEO Strategist & Digital Marketing Expert',
      avatar: '/static/images/brian-avatar.png' 
    },
    coverImage: '/static/images/seo-cover.webp'
  }
};

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found | SpotCircuit Blog',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | SpotCircuit Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author.name],
      images: [{
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.title
      }]
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  // If post doesn't exist, show 404
  if (!post) {
    notFound();
  }
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        {/* Featured Post Header */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url('${post.coverImage}')` }}
          ></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-blue-300 mb-4">
                {post.tags.map((tag, index) => (
                  <Link href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="flex items-center space-x-2 hover:text-blue-200">
                    <FaTag className="h-3 w-3" />
                    <span className="text-sm font-medium">{tag}</span>
                  </Link>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-blue-200 text-sm">
                <div className="flex items-center mr-6">
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="prose prose-invert prose-lg max-w-none">
                {post.content}
              </article>

              {/* Author Section */}
              <div className="mt-12 flex items-center p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                  {post.author.name.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                  <FaShare className="mr-2" /> Share this article
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Categories */}
                <div className="bg-gray-900 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                      <Link 
                        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                        key={index}
                        className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-blue-300 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-blue-200 mb-4">Get the latest AI insights for service businesses delivered to your inbox.</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Related Posts */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {Object.values(blogPosts)
                      .filter(relatedPost => relatedPost.slug !== post.slug)
                      .map((relatedPost, index) => (
                        <Link href={`/blog/${relatedPost.slug}`} key={index} className="block group">
                          <div className="flex items-start">
                            <div className="w-16 h-16 bg-gray-800 rounded-lg flex-shrink-0 mr-3 overflow-hidden">
                              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${relatedPost.coverImage}')` }}></div>
                            </div>
                            <div>
                              <h4 className="text-white group-hover:text-blue-400 transition-colors font-medium line-clamp-2">{relatedPost.title}</h4>
                              <p className="text-xs text-gray-400 mt-1">{relatedPost.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
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

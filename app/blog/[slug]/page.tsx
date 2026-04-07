import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaTag, FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarkdownContent from '../components/MarkdownContent';
import { getPostBySlug, getAllPosts } from '../utils/blogLoader';
import { Metadata } from 'next';

export const revalidate = 60;

// Generate metadata including canonical URL
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | SpotCircuit Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title + ' | SpotCircuit Blog',
    description: post.excerpt,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://www.spotcircuit.com/blog/${params.slug}`,
      languages: {
        'x-default': `https://www.spotcircuit.com/blog/${params.slug}`,
        'en': `https://www.spotcircuit.com/blog/${params.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.spotcircuit.com/blog/${params.slug}`,
      type: 'article',
      images: post.coverImage ? [{
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : [],
      siteName: 'SpotCircuit',
      locale: 'en_US',
      publishedTime: post.date,
      authors: ['SpotCircuit Team'],
      section: 'Blog',
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      creator: '@spotcircuit',
    },
  };
}

interface BlogPostParams {
    params: {
        slug: string;
    };
}

// This is a Server Component
export default async function BlogPost({ params }: BlogPostParams) {
    const post = await getPostBySlug(params.slug);
    
    // If post not found, show 404
    if (!post) {
        notFound();
    }
    
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-black">
            <main className="pt-24">
                {/* Post Header */}
                <div className="relative w-full h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
                    <div 
                        className="absolute inset-0 bg-cover bg-center z-0" 
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                    ></div>
                    <div className="container mx-auto px-4 h-full flex items-center relative z-20">
                        <div className="max-w-3xl">
                            <div className="flex flex-wrap items-center space-x-2 text-blue-300 mb-4">
                                <FaTag className="h-4 w-4" />
                                {post.tags.map((tag, index) => (
                                    <div key={tag} className="flex items-center">
                                        <Link href={`/blog?tag=${encodeURIComponent(tag)}`} className="text-sm font-medium hover:text-blue-200 transition-colors">
                                            {tag}
                                        </Link>
                                        {index < post.tags.length - 1 && (
                                            <span className="text-sm font-medium mx-1">•</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center text-blue-200 text-sm">
                                <div className="flex items-center mr-6">
                                    <FaCalendarAlt className="mr-2" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="mr-2" />
                                    <span>{post.readTime} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar - Now on left */}
                        <div className="lg:w-1/3 space-y-8">
                            {/* About this article */}
                            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                                <h3 className="text-lg font-medium text-white mb-4">About this article</h3>
                                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Category:</span>
                                        <Link 
                                            href={`/blog?category=${encodeURIComponent(post.category)}`}
                                            className="text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            {post.category}
                                        </Link>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Published:</span>
                                        <span>{formattedDate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Reading time:</span>
                                        <span>{post.readTime} minutes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                                <h3 className="text-lg font-medium text-white mb-4">Recent Posts</h3>
                                <div className="space-y-4">
                                    {(await getAllPosts()).filter(p => p.slug !== post.slug).slice(0, 3).map(recentPost => (
                                        <div key={recentPost.slug} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                                            <Link 
                                                href={`/blog/${recentPost.slug}`} 
                                                className="text-white hover:text-blue-400 transition-colors font-medium block mb-2"
                                            >
                                                {recentPost.title}
                                            </Link>
                                            <div className="flex items-center text-sm text-gray-400">
                                                <span>{new Date(recentPost.date).toLocaleDateString()}</span>
                                                <span className="mx-2">•</span>
                                                <span>{recentPost.readTime} min read</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Get a free consultation */}
                            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                                <h3 className="text-lg font-medium text-white mb-4">Get a free consultation</h3>
                                <p className="text-gray-400 mb-4">Want to learn more about how we can help your business with AI solutions?</p>
                                <Link 
                                    href="/contact" 
                                    className="inline-block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-center transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Main Content - Now on right */}
                        <div className="lg:w-2/3">
                            <article>
                                <MarkdownContent content={post.content} />
                                
                                {/* Tags */}
                                <div className="mt-12 pt-6 border-t border-gray-800">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-gray-400">Tags:</span>
                                        {post.tags.map(tag => (
                                            <Link 
                                                key={tag} 
                                                href={`/blog?tag=${encodeURIComponent(tag)}`}
                                                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-blue-300 hover:bg-gray-700 transition-colors"
                                            >
                                                {tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Share */}
                                <div className="mt-8 pt-6 border-t border-gray-800">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <FaShare className="mr-2 text-blue-400" /> 
                                        Share this article
                                    </h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                                            <FaTwitter size={18} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                                            <FaLinkedin size={18} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                                            <FaFacebook size={18} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = await getAllPosts();
    
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
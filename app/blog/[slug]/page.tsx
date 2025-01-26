import { getSinglePost } from '@/lib/ghost';
import { notFound } from 'next/navigation';
import BlogHeader from '~/components/BlogHeader';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPost({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const post = await getSinglePost(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black">
            <BlogHeader />
            <main className="pt-24">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M15 19l-7-7 7-7" 
                            />
                        </svg>
                        Back to Blog
                    </Link>

                    {post.feature_image && (
                        <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
                            <Image 
                                src={post.feature_image} 
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-8">
                        <time dateTime={post.published_at}>
                            {new Date(post.published_at).toLocaleDateString()}
                        </time>
                        {post.reading_time && (
                            <span className="ml-3">{post.reading_time} min read</span>
                        )}
                    </div>

                    <div 
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.html || '' }}
                    />
                </article>
            </main>
        </div>
    );
}

import { getPosts } from '@/lib/ghost';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const revalidate = 60;

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold mb-8 text-white">Latest Posts</h1>
                    {!posts || posts.length === 0 ? (
                        <p className="text-gray-400">
                            No posts found. Check back soon!
                        </p>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <article 
                                    key={post.id} 
                                    className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
                                >
                                    {post.feature_image && (
                                        <div className="relative h-48 w-full">
                                            <Image 
                                                src={post.feature_image} 
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold mb-2">
                                            <Link 
                                                href={`/blog/${post.slug}`} 
                                                className="text-white hover:text-gray-300 transition-colors"
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-400 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <time dateTime={post.published_at}>
                                                {new Date(post.published_at).toLocaleDateString()}
                                            </time>
                                            {post.reading_time && (
                                                <span className="ml-3">{post.reading_time} min read</span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

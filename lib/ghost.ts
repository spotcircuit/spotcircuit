import fetch from 'cross-fetch';

const ghostUrl = process.env.GHOST_API_URL || 'http://localhost:2368';
const ghostKey = process.env.GHOST_CONTENT_API_KEY || '';

export interface GhostTag {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    feature_image?: string | null;
    visibility: string;
    meta_title?: string | null;
    meta_description?: string | null;
    url?: string;
}

export interface GhostAuthor {
    id: string;
    name: string;
    slug: string;
    profile_image?: string | null;
    bio?: string | null;
    website?: string | null;
    location?: string | null;
    meta_title?: string | null;
    meta_description?: string | null;
}

export interface GhostPost {
    id: string;
    slug: string;
    title: string;
    html: string;
    feature_image: string | null;
    excerpt: string;
    reading_time: number;
    published_at: string;
    tags: GhostTag[];
    authors: GhostAuthor[];
}

interface GhostResponse {
    posts: GhostPost[];
}

interface GhostSinglePostResponse {
    posts: [GhostPost];
}

export async function getPosts(): Promise<GhostPost[]> {
    try {
        if (!process.env.GHOST_API_URL || !process.env.GHOST_CONTENT_API_KEY) {
            console.error('Ghost API URL or Content API Key not set');
            return [];
        }

        const res = await fetch(
            `${ghostUrl}/ghost/api/v3/content/posts/?key=${ghostKey}&include=tags,authors&limit=all`,
            { next: { revalidate: 60 } }
        );
        
        if (!res.ok) {
            console.error(`Failed to fetch posts: ${res.status}`);
            return [];
        }

        const data = await res.json() as GhostResponse;
        return data.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getSinglePost(postSlug: string): Promise<GhostPost | null> {
    try {
        const res = await fetch(
            `${ghostUrl}/ghost/api/v3/content/posts/slug/${postSlug}/?key=${ghostKey}&include=tags,authors`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            console.error(`Failed to fetch post: ${res.status}`);
            return null;
        }

        const data = await res.json() as GhostSinglePostResponse;
        return data.posts[0] || null;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

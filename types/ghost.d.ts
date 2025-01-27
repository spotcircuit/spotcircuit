declare module '@tryghost/content-api' {
    export interface Tag {
        id: string;
        name: string;
        slug: string;
        description?: string;
    }

    export interface Post {
        id: string;
        uuid: string;
        title: string;
        slug: string;
        html: string;
        comment_id?: string;
        feature_image?: string;
        featured: boolean;
        visibility: string;
        created_at: string;
        updated_at: string;
        published_at: string;
        custom_excerpt?: string;
        codeinjection_head?: string;
        codeinjection_foot?: string;
        custom_template?: string;
        canonical_url?: string;
        tags?: Tag[];
        authors?: Author[];
        primary_author?: Author;
        primary_tag?: Tag;
        url: string;
        excerpt: string;
        reading_time: number;
        og_image?: string;
        og_title?: string;
        og_description?: string;
        twitter_image?: string;
        twitter_title?: string;
        twitter_description?: string;
        meta_title?: string;
        meta_description?: string;
    }

    export interface Author {
        id: string;
        name: string;
        slug: string;
        profile_image?: string;
        cover_image?: string;
        bio?: string;
        website?: string;
        location?: string;
        facebook?: string;
        twitter?: string;
        meta_title?: string;
        meta_description?: string;
    }

    export type PostsOrPages = Post[];

    export interface BrowseParams {
        include?: string[];
        limit?: string | number;
        page?: number;
        order?: string;
        filter?: string;
    }

    export interface GhostAPI {
        posts: {
            browse: (params?: BrowseParams) => Promise<PostsOrPages>;
            read: (params: { id: string } | { slug: string }) => Promise<Post>;
        };
        authors: {
            browse: (params?: BrowseParams) => Promise<Author[]>;
            read: (params: { id: string } | { slug: string }) => Promise<Author>;
        };
        tags: {
            browse: (params?: BrowseParams) => Promise<Tag[]>;
            read: (params: { id: string } | { slug: string }) => Promise<Tag>;
        };
    }

    export interface GhostAPIOptions {
        url: string;
        key: string;
        version: string;
    }

    export default function GhostContentAPI(options: GhostAPIOptions): GhostAPI;
}

declare module '@tryghost/admin-api' {
    export interface GhostAdminAPI {
        posts: {
            browse: (params?: any) => Promise<any>;
            read: (params: any) => Promise<any>;
            edit: (params: any) => Promise<any>;
            add: (params: any) => Promise<any>;
            delete: (params: any) => Promise<any>;
        };
        tags: {
            browse: (params?: any) => Promise<any>;
            read: (params: any) => Promise<any>;
            edit: (params: any) => Promise<any>;
            add: (params: any) => Promise<any>;
            delete: (params: any) => Promise<any>;
        };
    }

    export interface GhostAdminAPIOptions {
        url: string;
        key: string;
        version: string;
    }

    export default class GhostAdminAPI {
        constructor(options: GhostAdminAPIOptions);
    }
}

interface GhostTag {
    id?: string;
    name: string;
    slug: string;
    description?: string;
    visibility?: 'public' | 'internal';
    meta_title?: string;
    meta_description?: string;
}

interface GhostPost {
    id?: string;
    title: string;
    slug?: string;
    mobiledoc: string;
    html?: string;
    status: 'draft' | 'published' | 'scheduled';
    tags?: GhostTag[];
    canonical_url?: string;
    meta_title?: string;
    meta_description?: string;
    og_title?: string;
    og_description?: string;
    twitter_title?: string;
    twitter_description?: string;
    codeinjection_head?: string;
    codeinjection_foot?: string;
    feature_image?: string;
    custom_excerpt?: string;
}

export { GhostTag, GhostPost };

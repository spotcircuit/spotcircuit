declare module '@tryghost/admin-api' {
    interface Tag {
        id?: string;
        name?: string;
        slug?: string;
        description?: string;
        feature_image?: string;
        visibility?: string;
        meta_title?: string;
        meta_description?: string;
        url?: string;
    }

    interface PostOrPage {
        id?: string;
        uuid?: string;
        title?: string;
        slug?: string;
        html?: string;
        comment_id?: string;
        feature_image?: string;
        featured?: boolean;
        status?: string;
        visibility?: string;
        created_at?: string;
        updated_at?: string;
        published_at?: string;
        custom_excerpt?: string;
        codeinjection_head?: string;
        codeinjection_foot?: string;
        custom_template?: string;
        canonical_url?: string;
        tags?: Array<Tag>;
        authors?: Array<any>;
        primary_author?: any;
        primary_tag?: any;
        url?: string;
        excerpt?: string;
        og_image?: string;
        og_title?: string;
        og_description?: string;
        twitter_image?: string;
        twitter_title?: string;
        twitter_description?: string;
        meta_title?: string;
        meta_description?: string;
        email_subject?: string;
    }

    interface GhostAdminAPI {
        posts: {
            add: (post: PostOrPage) => Promise<PostOrPage>;
            edit: (post: PostOrPage) => Promise<PostOrPage>;
            browse: (options?: any) => Promise<PostOrPage[]>;
            read: (options: { id: string } | { slug: string }) => Promise<PostOrPage>;
            delete: (options: { id: string }) => Promise<void>;
        };
        tags: {
            add: (tag: Tag) => Promise<Tag>;
            edit: (tag: Tag) => Promise<Tag>;
            browse: (options?: any) => Promise<Tag[]>;
            read: (options: { id: string } | { slug: string }) => Promise<Tag>;
            delete: (options: { id: string }) => Promise<void>;
        };
    }

    interface GhostAdminAPIOptions {
        url: string;
        key: string;
        version: string;
    }

    export default class {
        constructor(options: GhostAdminAPIOptions);
        posts: GhostAdminAPI['posts'];
        tags: GhostAdminAPI['tags'];
    }
}

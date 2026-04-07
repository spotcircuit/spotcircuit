// Type definitions for blog system
export interface Category {
  slug: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  postCount?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  categories: string[];
  featured: boolean;
}

export interface CategoriesData {
  categories: Category[];
}

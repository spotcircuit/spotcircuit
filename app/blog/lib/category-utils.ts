// Utility functions for category management
import { categories } from './blog-data';
import { Category } from './types';

// Get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

// Get all category slugs
export function getAllCategorySlugs(): string[] {
  return categories.map(category => category.slug);
}

// Get categories with post counts
export function getCategoriesWithCounts(posts: any[]): Category[] {
  return categories.map(category => {
    const postCount = posts.filter(post => 
      post.categories.some((cat: string) => 
        cat.toLowerCase().replace(/\s+/g, '-') === category.slug
      )
    ).length;
    
    return {
      ...category,
      postCount
    };
  });
}

// Validate if a category exists
export function isValidCategory(categoryName: string): boolean {
  return categories.some(category => 
    category.name === categoryName || 
    category.slug === categoryName.toLowerCase().replace(/\s+/g, '-')
  );
}

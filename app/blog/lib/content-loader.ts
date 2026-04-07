import fs from "fs";
import path from "path";

export interface BlogPostContent {
  slug: string;
  content: string;
}

export function getBlogPostContent(slug: string): string {
  try {
    // Check if content file exists in the content directory
    const contentPath = path.join(
      process.cwd(),
      "app",
      "blog",
      "content",
      `${slug}.md`
    );

    if (fs.existsSync(contentPath)) {
      return fs.readFileSync(contentPath, "utf8");
    }

    // Fallback to inline content for specific posts
    switch (slug) {
      case "seo-isnt-dead":
        // Import the existing SEO content
        return require("../[slug]/seo-isnt-dead/content").seoArticleContent;
      default:
        return "Content coming soon...";
    }
  } catch (error) {
    console.error(`Error loading content for ${slug}:`, error);
    return "Content coming soon...";
  }
}

export function getAllBlogPostContent(): BlogPostContent[] {
  try {
    const contentDir = path.join(process.cwd(), "app", "blog", "content");

    if (!fs.existsSync(contentDir)) {
      return [];
    }

    const files = fs.readdirSync(contentDir);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    return markdownFiles.map((file) => {
      const slug = file.replace(".md", "");
      const content = fs.readFileSync(path.join(contentDir, file), "utf8");
      return { slug, content };
    });
  } catch (error) {
    console.error("Error loading blog post content:", error);
    return [];
  }
}

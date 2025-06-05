# Creating a New Blog Post for SpotCircuit

This guide walks you through the process of creating and publishing a new blog post for the SpotCircuit website. Follow these steps to ensure your content is properly formatted, categorized, and ready for publication.

## Table of Contents
- [Step 1: Setting Up Your Markdown File](#step-1-setting-up-your-markdown-file)
- [Step 2: Writing Frontmatter](#step-2-writing-frontmatter)
- [Step 3: Creating Effective Content](#step-3-creating-effective-content)
- [Step 4: Adding Images and Media](#step-4-adding-images-and-media)
- [Step 5: Internal Linking Strategy](#step-5-internal-linking-strategy)
- [Step 6: External Linking Best Practices](#step-6-external-linking-best-practices)
- [Step 7: Review and Publish](#step-7-review-and-publish)
- [Templates and Examples](#templates-and-examples)
- [Troubleshooting](#troubleshooting)

## Step 1: Setting Up Your Markdown File

1. **Create a new Markdown file** in the `/app/blog/posts/` directory
2. **Name your file** using kebab-case that reflects your post's topic (e.g., `ai-automation-strategy.md`)
3. **File structure requirements:**
   - Use `.md` extension
   - Ensure filename is unique and descriptive

Example:
```
/app/blog/posts/your-new-post-title.md
```

## Step 2: Writing Frontmatter

Every blog post requires frontmatter at the beginning of the file. This metadata helps categorize and display your content properly.

```markdown
---
title: "Your Blog Post Title"
excerpt: "A compelling 1-2 sentence description of your post that will appear in previews."
date: "2025-06-05"
author: "Your Name"
category: "AI Strategy"
tags: ["automation", "business growth", "productivity"]
coverImage: "/static/images/blog/your-cover-image.webp"
---
```

### Required Frontmatter Fields:

| Field | Description | Example |
|-------|-------------|---------|
| title | The title of your blog post | "10 AI Tools for Business Growth" |
| excerpt | Brief description (150-200 characters) | "Discover how these AI tools can transform your business operations and drive growth." |
| date | Publication date (YYYY-MM-DD) | "2025-06-05" |
| category | Main category (choose one from existing categories) | "AI Strategy" |
| tags | Array of relevant tags | ["automation", "AI tools", "productivity"] |
| coverImage | Path to cover image | "/static/images/blog/ai-tools-cover.webp" |

> **Note:** The category should match one of our existing categories for proper filtering and navigation.

## Step 3: Creating Effective Content

After the frontmatter, write your blog post content using Markdown formatting.

### Content Structure Best Practices:

1. **Start with a strong introduction** that sets context and outlines what readers will learn
2. **Use headings (H2, H3, H4)** to organize your content logically
3. **Keep paragraphs short and focused** (3-5 sentences maximum)
4. **Include bulleted or numbered lists** for better readability
5. **Conclude with actionable takeaways** or next steps

### Markdown Formatting Examples:

```markdown
## Main Heading (H2)

Introduction paragraph goes here...

### Subheading (H3)

Content for this section...

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered step one
2. Numbered step two
3. Numbered step three

**Bold text** for emphasis
*Italic text* for slight emphasis

> Blockquote for important quotes or callouts
```

## Step 4: Adding Images and Media

Images enhance your content and improve engagement. Follow these guidelines:

1. **Store images** in `/public/static/images/blog/` directory
2. **Optimize images** before adding (recommended size: 1200x630px for covers)
3. **Use WebP format** whenever possible for better performance
4. **Include alt text** for accessibility

### Image Syntax:

```markdown
![Alt text describing the image](/static/images/blog/your-image-file.webp)
```

For more complex image formatting:

```markdown
<div className="blog-image-container">
  <img 
    src="/static/images/blog/your-image-file.webp" 
    alt="Descriptive alt text" 
    width="800" 
    height="450" 
  />
  <p className="image-caption">Caption text for the image</p>
</div>
```

## Step 5: Internal Linking Strategy

Internal links help readers discover more of your content and improve SEO. Follow these best practices:

### How to Add Internal Links:

1. **Link to related blog posts** using the format:
   ```markdown
   [Read our guide on AI implementation](/blog/ai-implementation-guide)
   ```

2. **Link to relevant categories** using:
   ```markdown
   [Explore more AI Strategy articles](/blog?category=AI%20Strategy)
   ```

3. **Link to tag pages** for topic exploration:
   ```markdown
   [Check out more content about #automation](/blog?tag=automation)
   ```

### Internal Linking Best Practices:

- Include 3-5 internal links per post
- Use descriptive anchor text (not "click here")
- Link to your cornerstone content when relevant
- Create a natural reading flow around links

### Popular Posts to Consider Linking:

- [AI Automation Guide](/blog/ai-automation-guide)
- [Marketing Automation Strategy](/blog/marketing-automation-strategy)
- [SEO Trends for 2025](/blog/seo-trends-2025)

## Step 6: External Linking Best Practices

External links to authoritative sources add credibility to your content and provide additional value to readers.

### Guidelines for External Links:

1. **Link to reputable sources** that support your claims
2. **Use descriptive anchor text** that indicates where the link leads
3. **Configure external links** to open in new tabs:
   ```markdown
   <a href="https://hbr.org/topic/technology" target="_blank" rel="noopener noreferrer">Harvard Business Review</a>
   ```

4. **Balance external links** - aim for 2-4 per blog post
5. **Regularly check for broken links** and update as needed

### Recommended External Resources:

- [Google's AI Principles](https://ai.google/principles/)
- [MIT Technology Review](https://www.technologyreview.com/)
- [World Economic Forum: AI and Machine Learning](https://www.weforum.org/agenda/archive/artificial-intelligence-and-machine-learning/)

## Step 7: Review and Publish

Before publishing your blog post:

1. **Proofread thoroughly** for grammar and spelling errors
2. **Verify all links** work correctly
3. **Check image loading** and formatting
4. **Ensure metadata** is complete and accurate
5. **Preview the post** if possible

Once ready, commit the file to the repository. The blog system will automatically:
- Generate the post's slug from the filename
- Calculate reading time
- Update tag and category collections
- Add the post to the main blog page

## Templates and Examples

Use our pre-built templates as starting points for your blog posts. You can find these in the `blog-templates.json` file.

### Popular Templates:

- **AI Strategy Template** - For posts about AI implementation and strategy
- **Marketing Automation Template** - For marketing-focused content
- **SEO Strategy Template** - For search optimization topics

### Using Templates from blog-templates.json

Our project includes a `blog-templates.json` file with structured templates you can use as starting points. To use a template:

1. Open the `blog-templates.json` file in the project root
2. Find the template category that matches your topic
3. Copy the structure and adapt it to your specific post
4. Fill in your own content while maintaining the suggested structure

Example from our templates:
```json
{
  "categoryName": "AI Strategy",
  "templates": [
    {
      "title": "AI Implementation Guide",
      "outline": [
        "Introduction to AI implementation",
        "Benefits of AI integration",
        "Step-by-step implementation process",
        "Common challenges and solutions",
        "Case studies and examples",
        "Conclusion and next steps"
      ]
    }
  ]
}
```

## Troubleshooting

If your blog post doesn't appear correctly:

1. **Check frontmatter format** - Ensure YAML syntax is correct
2. **Verify file location** - Must be in `/app/blog/posts/` directory
3. **Confirm unique slug** - Filename must be unique
4. **Review image paths** - Ensure they point to existing files
5. **Check for invalid characters** - Some special characters may cause issues

For additional help, refer to the [Markdown Guide](https://www.markdownguide.org/) or contact the development team.

---

*Last updated: June 4, 2025*

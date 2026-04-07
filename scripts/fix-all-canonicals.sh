#!/bin/bash

echo "🔧 Fixing canonical URLs in all metadata files..."
echo ""

# Fix blog metadata
echo "Fixing /app/blog/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/blog",\n  },' ../app/blog/metadata.ts

# Fix services metadata
echo "Fixing /app/services/page-metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/services",\n  },' ../app/services/page-metadata.ts

# Fix cookies metadata
echo "Fixing /app/cookies/page-metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/cookies",\n  },' ../app/cookies/page-metadata.ts

# Fix privacy metadata
echo "Fixing /app/privacy/page-metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/privacy",\n  },' ../app/privacy/page-metadata.ts

# Fix terms metadata
echo "Fixing /app/terms/page-metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/terms",\n  },' ../app/terms/page-metadata.ts

# Fix industries metadata
echo "Fixing /app/industries/page-metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/industries",\n  },' ../app/industries/page-metadata.ts

# Fix roofing metadata
echo "Fixing /app/industries/roofing/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/industries/roofing",\n  },' ../app/industries/roofing/metadata.ts

# Fix answercircuit metadata
echo "Fixing /app/answercircuit/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/answercircuit",\n  },' ../app/answercircuit/metadata.ts

# Fix local-marketing metadata
echo "Fixing /app/local-marketing/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/local-marketing",\n  },' ../app/local-marketing/metadata.ts

# Fix medical-spa-ai-audit metadata
echo "Fixing /app/medical-spa-ai-audit/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/medical-spa-ai-audit",\n  },' ../app/medical-spa-ai-audit/metadata.ts

# Fix seo2 metadata
echo "Fixing /app/seo2/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/seo2",\n  },' ../app/seo2/metadata.ts

# Fix resources metadata
echo "Fixing /app/resources/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/resources",\n  },' ../app/resources/metadata.ts

# Fix ai-search-optimization metadata
echo "Fixing /app/resources/ai-search-optimization/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/resources/ai-search-optimization",\n  },' ../app/resources/ai-search-optimization/metadata.ts

# Fix content-strategy-blueprint metadata
echo "Fixing /app/resources/content-strategy-blueprint/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/resources/content-strategy-blueprint",\n  },' ../app/resources/content-strategy-blueprint/metadata.ts

# Fix local-seo-guide metadata
echo "Fixing /app/resources/local-seo-guide/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/resources/local-seo-guide",\n  },' ../app/resources/local-seo-guide/metadata.ts

# Fix technical-seo-checklist metadata
echo "Fixing /app/resources/technical-seo-checklist/metadata.ts"
sed -i '/keywords:.*/ a\  alternates: {\n    canonical: "/resources/technical-seo-checklist",\n  },' ../app/resources/technical-seo-checklist/metadata.ts

echo ""
echo "✅ Done! All metadata files should now have proper canonical URLs."
echo ""
echo "⚠️  Note: You may need to manually check and fix the homepage metadata in app/metadata.ts"
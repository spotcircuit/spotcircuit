import fs from 'fs';
import path from 'path';
import { validateDescriptionLength } from './metadata-generator';

interface MetadataValidation {
  file: string;
  url: string;
  title: string;
  description: string;
  issues: string[];
  descriptionValidation: ReturnType<typeof validateDescriptionLength>;
}

interface ValidationReport {
  totalPages: number;
  uniqueDescriptions: number;
  duplicateDescriptions: { description: string; pages: string[] }[];
  issues: MetadataValidation[];
  summary: {
    duplicatesCount: number;
    tooShortCount: number;
    tooLongCount: number;
    validCount: number;
  };
}

// Regular expressions to extract metadata from file content
const TITLE_REGEX = /title:\s*['"`]([^'"`]*?)['"`]/;
const DESCRIPTION_REGEX = /description:\s*['"`]([^'"`]*?)['"`]/;
const METADATA_EXPORT_REGEX = /export const metadata.*?=\s*{([\s\S]*?)};/;

/**
 * Extract metadata from a file's content
 */
function extractMetadataFromFile(filePath: string, content: string): MetadataValidation | null {
  const relativePath = path.relative(process.cwd(), filePath);

  // Try to find metadata export
  const metadataMatch = content.match(METADATA_EXPORT_REGEX);
  if (!metadataMatch) {
    return null; // No metadata found
  }

  const metadataContent = metadataMatch[1];

  // Extract title and description
  const titleMatch = metadataContent.match(TITLE_REGEX);
  const descriptionMatch = metadataContent.match(DESCRIPTION_REGEX);

  if (!titleMatch || !descriptionMatch) {
    return null; // Invalid metadata structure
  }

  const title = titleMatch[1];
  const description = descriptionMatch[1];
  const issues: string[] = [];

  // Generate URL from file path
  let url = relativePath
    .replace(/^app\//, '')
    .replace(/\/page\.tsx$/, '')
    .replace(/\[[^\]]+\]/g, '[dynamic]'); // Mark dynamic routes

  if (url === '') url = '/';
  if (!url.startsWith('/')) url = '/' + url;

  // Validate description length
  const descriptionValidation = validateDescriptionLength(description);
  if (!descriptionValidation.isValid) {
    issues.push(...descriptionValidation.issues);
  }

  // Check for generic descriptions
  if (description.includes('Experience rapid growth with SpotCircuit')) {
    issues.push('Uses generic layout description');
  }

  return {
    file: relativePath,
    url,
    title,
    description,
    issues,
    descriptionValidation
  };
}

/**
 * Find all page.tsx files in the app directory
 */
function findAllPageFiles(dir: string): string[] {
  const files: string[] = [];

  function walkDirectory(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(entry.name)) {
          walkDirectory(fullPath);
        }
      } else if (entry.name === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }

  walkDirectory(dir);
  return files;
}

/**
 * Validate all metadata across the site
 */
export function validateAllMetadata(): ValidationReport {
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = findAllPageFiles(appDir);

  const metadataValidations: MetadataValidation[] = [];
  const descriptionCounts = new Map<string, string[]>();

  // Process each page file
  for (const filePath of pageFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const metadata = extractMetadataFromFile(filePath, content);

      if (metadata) {
        metadataValidations.push(metadata);

        // Track description usage
        const pages = descriptionCounts.get(metadata.description) || [];
        pages.push(metadata.url);
        descriptionCounts.set(metadata.description, pages);
      }
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
    }
  }

  // Find duplicate descriptions
  const duplicateDescriptions: { description: string; pages: string[] }[] = [];
  for (const [description, pages] of descriptionCounts.entries()) {
    if (pages.length > 1) {
      duplicateDescriptions.push({ description, pages });
    }
  }

  // Calculate summary statistics
  const summary = {
    duplicatesCount: duplicateDescriptions.reduce((sum, dup) => sum + dup.pages.length, 0),
    tooShortCount: metadataValidations.filter(m => m.descriptionValidation.length < 120).length,
    tooLongCount: metadataValidations.filter(m => m.descriptionValidation.length > 155).length,
    validCount: metadataValidations.filter(m => m.descriptionValidation.isValid && m.issues.length === 0).length
  };

  return {
    totalPages: metadataValidations.length,
    uniqueDescriptions: descriptionCounts.size,
    duplicateDescriptions,
    issues: metadataValidations.filter(m => m.issues.length > 0),
    summary
  };
}

/**
 * Generate a detailed validation report
 */
export function generateValidationReport(): string {
  const report = validateAllMetadata();

  let output = '# Metadata Validation Report\n\n';
  output += `Generated at: ${new Date().toISOString()}\n\n`;

  output += '## Summary\n';
  output += `- Total Pages: ${report.totalPages}\n`;
  output += `- Unique Descriptions: ${report.uniqueDescriptions}\n`;
  output += `- Valid Pages: ${report.summary.validCount}\n`;
  output += `- Pages with Issues: ${report.issues.length}\n`;
  output += `- Duplicate Descriptions: ${report.duplicateDescriptions.length}\n`;
  output += `- Too Short Descriptions: ${report.summary.tooShortCount}\n`;
  output += `- Too Long Descriptions: ${report.summary.tooLongCount}\n\n`;

  if (report.duplicateDescriptions.length > 0) {
    output += '## Duplicate Descriptions\n\n';
    for (const dup of report.duplicateDescriptions) {
      output += `### "${dup.description.substring(0, 100)}..."\n`;
      output += `**Pages using this description:**\n`;
      for (const page of dup.pages) {
        output += `- ${page}\n`;
      }
      output += '\n';
    }
  }

  if (report.issues.length > 0) {
    output += '## Pages with Issues\n\n';
    for (const issue of report.issues) {
      output += `### ${issue.url}\n`;
      output += `**File:** ${issue.file}\n`;
      output += `**Title:** ${issue.title}\n`;
      output += `**Description Length:** ${issue.descriptionValidation.length} characters\n`;
      output += `**Issues:**\n`;
      for (const problemIssue of issue.issues) {
        output += `- ${problemIssue}\n`;
      }
      output += '\n';
    }
  }

  return output;
}

/**
 * CLI function to run validation and save report
 */
export function runValidationCLI() {
  console.log('🔍 Validating metadata across all pages...\n');

  const report = validateAllMetadata();
  const reportContent = generateValidationReport();

  // Save report to file
  const reportPath = path.join(process.cwd(), 'metadata-validation-report.md');
  fs.writeFileSync(reportPath, reportContent);

  // Print summary to console
  console.log('📊 Validation Summary:');
  console.log(`✅ Total Pages: ${report.totalPages}`);
  console.log(`✅ Valid Pages: ${report.summary.validCount}`);
  console.log(`⚠️  Pages with Issues: ${report.issues.length}`);
  console.log(`🔄 Duplicate Descriptions: ${report.duplicateDescriptions.length}`);
  console.log(`📏 Too Short: ${report.summary.tooShortCount}`);
  console.log(`📏 Too Long: ${report.summary.tooLongCount}`);
  console.log(`\n📄 Full report saved to: ${reportPath}`);

  if (report.duplicateDescriptions.length > 0 || report.issues.length > 0) {
    console.log('\n⚠️  Issues found! Check the report for details.');
    process.exit(1);
  } else {
    console.log('\n🎉 All metadata looks good!');
    process.exit(0);
  }
}

// If this file is run directly, execute CLI
if (require.main === module) {
  runValidationCLI();
}
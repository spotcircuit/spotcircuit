const sharp = require('sharp');
const svg2img = require('svg2img');
const fs = require('fs').promises;
const path = require('path');

const sourceDir = path.join(__dirname, '../public/static/images');
const targetDir = path.join(__dirname, '../public/static/images/svgtowebp');

async function convertSvgToWebp(svgPath, outputPath) {
  return new Promise((resolve, reject) => {
    // Read the SVG file
    fs.readFile(svgPath)
      .then(svgContent => {
        svg2img(svgContent, async (error, buffer) => {
          if (error) {
            reject(error);
            return;
          }

          try {
            await sharp(buffer)
              .webp({ quality: 90 })
              .toFile(outputPath);
            console.log(`✅ Converted: ${path.basename(svgPath)} -> ${path.basename(outputPath)}`);
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      })
      .catch(reject);
  });
}

async function main() {
  try {
    // Ensure target directory exists
    await fs.mkdir(targetDir, { recursive: true });

    // Get all SVG files
    const files = await fs.readdir(sourceDir);
    const svgFiles = files.filter(file => file.toLowerCase().endsWith('.svg'));

    console.log(`Found ${svgFiles.length} SVG files to convert...`);

    // Convert each SVG to WebP
    const conversions = svgFiles.map(file => {
      const svgPath = path.join(sourceDir, file);
      const webpPath = path.join(targetDir, file.replace('.svg', '.webp'));
      return convertSvgToWebp(svgPath, webpPath);
    });

    await Promise.all(conversions);
    console.log('\n✨ All conversions completed successfully!');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();

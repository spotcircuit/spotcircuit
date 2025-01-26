const { exec } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '../public/static/images');
const targetDir = path.join(__dirname, '../public/static/images/SVGtoWebP');

const svgFiles = [
  'optimization-challenges.svg'  // Just try the original file
];

async function convertSvgToWebp(svgPath, outputPath) {
  return new Promise((resolve, reject) => {
    // First convert to PNG using svgexport
    const tempPngPath = outputPath.replace('.webp', '.png');
    
    exec(`npx svgexport "${svgPath}" "${tempPngPath}" 2x`, async (error) => {
      if (error) {
        console.error(`⚠️ Error converting ${path.basename(svgPath)}: ${error.message}`);
        resolve();
        return;
      }

      try {
        // Convert PNG to WebP using sharp
        await sharp(tempPngPath)
          .webp({ 
            quality: 90,
            lossless: true
          })
          .toFile(outputPath);
        
        // Clean up temporary PNG file
        await fs.unlink(tempPngPath);
        
        console.log(`✅ Converted: ${path.basename(svgPath)} -> ${path.basename(outputPath)}`);
        resolve();
      } catch (err) {
        console.error(`⚠️ Error saving ${path.basename(outputPath)}: ${err.message}`);
        // Try to clean up temp file even if there was an error
        try {
          await fs.unlink(tempPngPath);
        } catch {}
        resolve();
      }
    });
  });
}

async function main() {
  try {
    // Ensure target directory exists
    await fs.mkdir(targetDir, { recursive: true });

    console.log(`Converting ${svgFiles.length} remaining SVG files...`);

    // Convert each SVG to WebP
    for (const file of svgFiles) {
      const svgPath = path.join(sourceDir, file);
      const webpPath = path.join(targetDir, file.replace('.svg', '.webp'));
      await convertSvgToWebp(svgPath, webpPath);
    }

    console.log('\n✨ All conversions completed!');

  } catch (error) {
    console.error('Fatal Error:', error);
    process.exit(1);
  }
}

main();

const fs = require('fs');

const files = [
  'blog-templates.json',
  'scripts/blog-templates.json',
  'app/blog/blog-templates.json'
];

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    // Check for invalid JSON
    JSON.parse(content);
    console.log(`✅ ${file} is valid JSON`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`❌ ${file} does not exist`);
    } else {
      console.error(`❌ ${file} has a JSON error: ${err.message}`);
      // Print the part of the content around the error position
      if (err.message.includes('position')) {
        const position = parseInt(err.message.match(/position (\d+)/)[1]);
        const content = fs.readFileSync(file, 'utf8');
        const start = Math.max(0, position - 50);
        const end = Math.min(content.length, position + 50);
        console.error(`Content around error: "${content.substring(start, end)}"`);
        console.error(`Error at position ${position}, line ${content.substring(0, position).split('\n').length}`);
      }
    }
  }
});
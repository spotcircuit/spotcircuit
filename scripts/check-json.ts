import * as fs from 'fs';
import * as path from 'path';

// Function to check for JSON syntax errors
function checkJson(filePath: string): void {
  try {
    console.log(`Checking ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    try {
      JSON.parse(content);
      console.log(`✅ ${filePath} is valid JSON`);
    } catch (error) {
      console.error(`❌ ${filePath} has JSON syntax error: ${error.message}`);
      
      if (error.message.includes('position')) {
        const position = parseInt(error.message.match(/position (\d+)/)[1]);
        const lines = content.split('\n');
        let pos = 0;
        let lineNum = 0;
        
        for (let i = 0; i < lines.length; i++) {
          const lineLength = lines[i].length + 1; // +1 for newline
          if (pos + lineLength > position) {
            lineNum = i;
            const column = position - pos;
            console.error(`Error at line ${lineNum + 1}, column ${column}`);
            
            // Show the problematic line and a few lines before/after
            const start = Math.max(0, lineNum - 2);
            const end = Math.min(lines.length, lineNum + 3);
            
            for (let j = start; j < end; j++) {
              const prefix = j === lineNum ? '> ' : '  ';
              console.error(`${prefix}${j + 1}: ${lines[j]}`);
            }
            
            break;
          }
          pos += lineLength;
        }
      }
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
  }
}

// Check all the blog-templates.json files
const files = [
  path.join(process.cwd(), 'blog-templates.json'),
  path.join(process.cwd(), 'scripts', 'blog-templates.json'),
  path.join(process.cwd(), 'app', 'blog', 'blog-templates.json')
];

files.forEach(checkJson);
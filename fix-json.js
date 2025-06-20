const fs = require('fs');

// Function to check a JSON file and locate any errors
function checkJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for trailing commas
    let lineNum = 0;
    const lines = content.split('\n');
    let potentialIssues = [];
    
    lines.forEach((line, index) => {
      // Check for unquoted property names
      if (line.trim().match(/^\s*[a-zA-Z0-9_]+\s*:/)) {
        potentialIssues.push({
          line: index + 1,
          column: line.indexOf(':'),
          issue: 'Unquoted property name',
          text: line.trim()
        });
      }
      
      // Check for trailing commas in arrays or objects
      if (line.trim().match(/,\s*$/)) {
        const nextLine = lines[index + 1];
        if (nextLine && nextLine.trim().match(/[\]}]/)) {
          potentialIssues.push({
            line: index + 1,
            column: line.lastIndexOf(','),
            issue: 'Trailing comma',
            text: line.trim() + ' followed by ' + nextLine.trim()
          });
        }
      }
      
      // Check for single quotes instead of double quotes
      if (line.includes("'")) {
        potentialIssues.push({
          line: index + 1,
          column: line.indexOf("'"),
          issue: 'Single quotes instead of double quotes',
          text: line.trim()
        });
      }
    });
    
    // Try to parse the JSON
    try {
      JSON.parse(content);
      console.log(`✓ ${filePath} is valid JSON`);
      
      if (potentialIssues.length > 0) {
        console.log('But found potential issues that might cause problems in some parsers:');
        potentialIssues.forEach(issue => {
          console.log(`  Line ${issue.line}, Column ${issue.column}: ${issue.issue}`);
          console.log(`    ${issue.text}`);
        });
      }
    } catch (parseError) {
      console.error(`✗ ${filePath} has a JSON error: ${parseError.message}`);
      
      // Find the error position and line
      if (parseError.message.includes('position')) {
        const position = parseInt(parseError.message.match(/position (\d+)/)[1]);
        let errorLine = 1;
        let charCount = 0;
        
        for (let i = 0; i < lines.length; i++) {
          if (charCount + lines[i].length + 1 > position) {
            errorLine = i + 1;
            const column = position - charCount + 1;
            console.error(`Error at line ${errorLine}, column ${column}`);
            
            // Print the content around the error
            const start = Math.max(0, errorLine - 3);
            const end = Math.min(lines.length, errorLine + 3);
            
            for (let j = start; j < end; j++) {
              const linePrefix = j + 1 === errorLine ? '> ' : '  ';
              console.error(`${linePrefix}${j + 1}: ${lines[j]}`);
              
              if (j + 1 === errorLine) {
                console.error(`   ${' '.repeat(column - 1)}^`);
              }
            }
            
            break;
          }
          charCount += lines[i].length + 1; // +1 for the newline
        }
        
        // Print relevant potential issues
        if (potentialIssues.length > 0) {
          const relevantIssues = potentialIssues.filter(issue => 
            Math.abs(issue.line - errorLine) <= 2
          );
          
          if (relevantIssues.length > 0) {
            console.error('\nPotential issues near the error:');
            relevantIssues.forEach(issue => {
              console.error(`  Line ${issue.line}, Column ${issue.column}: ${issue.issue}`);
              console.error(`    ${issue.text}`);
            });
          }
        }
      }
    }
  } catch (err) {
    console.error(`Cannot read file ${filePath}: ${err.message}`);
  }
}

// Check all three blog-templates.json files
console.log('Checking blog-templates.json files...\n');

[
  './blog-templates.json',
  './scripts/blog-templates.json',
  './app/blog/blog-templates.json'
].forEach(checkJsonFile);
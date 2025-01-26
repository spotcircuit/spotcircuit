import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function generateAndPublish() {
    try {
        // Step 1: Generate the blog post
        await execAsync('npx ts-node scripts/generate-blog-post.ts');
        
        // Step 2: Post to Ghost
        await execAsync('npx ts-node scripts/post-to-ghost.ts');
        
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

generateAndPublish();

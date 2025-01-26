import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function generateAndPublish() {
    try {
        // Step 1: Generate the blog post
        await execAsync('npx ts-node scripts/generate-blog-post.ts');
        
        // Step 2: Post to Ghost
        await execAsync('npx ts-node scripts/post-to-ghost.ts');
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
        process.exit(1);
    }
}

generateAndPublish();

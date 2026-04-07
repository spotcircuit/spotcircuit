import { exec } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';

/**
 * This script runs:
 *   1) generate-blog-post.ts
 *   2) post-to-ghost.ts
 * so you can do everything in a single command.
 *
 * We build absolute paths to each script to avoid the
 * "Cannot find module" error on Windows.
 */
const execAsync = promisify(exec);

// __dirname gives the folder where THIS script is located.
const SCRIPTS_DIR = __dirname;

async function runScript(scriptName: string): Promise<void> {
  // scriptName might be "generate-blog-post.ts" or "post-to-ghost.ts"
  const scriptPath = path.join(SCRIPTS_DIR, scriptName);
  const command = `npx ts-node "${scriptPath}"`;

  console.log(`Running command: ${command}`);
  
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    throw new Error(`Failed to run ${scriptName}: ${(error as Error).message}`);
  }
}

async function generateAndPublish(): Promise<void> {
  try {
    console.log('--- Step 1: Generate blog post ---');
    await runScript('generate-blog-post.ts');

    console.log('--- Step 2: Publish to Ghost ---');
    await runScript('post-to-ghost.ts');

    console.log('Done generating and publishing!');
  } catch (error) {
    console.error('Error in generateAndPublish:', (error as Error).message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateAndPublish().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

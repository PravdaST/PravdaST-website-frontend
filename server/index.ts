import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startDevServer() {
  try {
    const server = await createServer({
      configFile: resolve(__dirname, '../vite.config.ts'),
      server: {
        host: '0.0.0.0',
        port: 5000,
      },
    });

    await server.listen();
    console.log('Pravdast development server running on http://localhost:5000');
  } catch (error) {
    console.error('Failed to start development server:', error);
    process.exit(1);
  }
}

startDevServer();
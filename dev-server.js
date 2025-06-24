import { createServer } from 'vite'

const server = await createServer({
  configFile: './client/vite.config.ts',
  root: './client',
  server: {
    port: 5000,
    host: '0.0.0.0'
  }
})

await server.listen()
console.log('Development server running on port 5000')
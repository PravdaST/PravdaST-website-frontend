import { createServer } from 'vite'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function startServer() {
  const app = express()
  app.use(express.json())

  // Mock API endpoints for development
  app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'admin' && password === 'pravdast2025!') {
      res.json({ token: 'mock-jwt-token', message: 'Login successful' })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  })

  app.get('/api/admin/categories', (req, res) => {
    res.json([])
  })

  app.get('/api/admin/blog-posts', (req, res) => {
    res.json([])
  })

  // Create Vite server
  const vite = await createServer({
    root: path.resolve(__dirname, '../client'),
    server: { middlewareMode: true },
    appType: 'spa'
  })

  app.use(vite.ssrFixStacktrace)
  app.use(vite.middlewares)

  const server = app.listen(5000, '0.0.0.0', () => {
    console.log('Development server running on port 5000')
  })

  return server
}

startServer().catch(console.error)
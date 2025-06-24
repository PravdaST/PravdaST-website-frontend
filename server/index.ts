import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client')))

// API endpoints for development
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

// Serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
  }
})

const server = app.listen(5000, '0.0.0.0', () => {
  console.log('Development server running on port 5000')
  console.log('Available at: http://localhost:5000')
})

export { server }
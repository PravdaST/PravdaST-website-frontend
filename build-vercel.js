#!/usr/bin/env node
import { build } from 'vite'
import { resolve } from 'path'

async function buildForVercel() {
  try {
    await build({
      root: '.',
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          input: resolve(process.cwd(), 'index.html')
        }
      },
      resolve: {
        alias: {
          '@': resolve(process.cwd(), 'src')
        }
      }
    })
    console.log('Build successful for Vercel!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

buildForVercel()
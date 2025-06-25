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
          input: resolve(process.cwd(), 'index.html'),
          external: [],
          output: {
            manualChunks: undefined
          }
        }
      },
      resolve: {
        alias: {
          '@': resolve(process.cwd(), 'src')
        }
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      },
      esbuild: {
        target: 'es2020'
      }
    })
    console.log('Build successful for Vercel!')
  } catch (error) {
    console.error('Build failed:', error)
    console.error('Error details:', error.message)
    process.exit(1)
  }
}

buildForVercel()
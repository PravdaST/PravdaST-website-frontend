#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Vercel build...');

try {
  // Build the frontend
  console.log('📦 Building frontend...');
  execSync('vite build --outDir dist', { stdio: 'inherit' });
  
  // Copy server files for API routes
  console.log('📋 Copying server files...');
  if (!fs.existsSync('dist/api')) {
    fs.mkdirSync('dist/api', { recursive: true });
  }
  
  // Copy essential server files
  const serverFiles = ['server', 'shared'];
  serverFiles.forEach(dir => {
    if (fs.existsSync(dir)) {
      execSync(`cp -r ${dir} dist/`, { stdio: 'inherit' });
    }
  });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
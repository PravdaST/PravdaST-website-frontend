#!/usr/bin/env node
import { execSync } from "child_process";
import {
  copyFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  statSync,
  rmSync,
} from "fs";
import { join } from "path";

console.log("Starting Vercel build process...");

// Clean up any existing dist
if (existsSync("dist")) {
  rmSync("dist", { recursive: true, force: true });
}

// Build using the main vite build command
console.log("Building with vite...");
execSync("npm run build", { stdio: "inherit" });

// Copy files from client/dist to root dist
console.log("Moving build files to correct location...");

function copyRecursive(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  
  const entries = readdirSync(src);
  
  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    
    if (statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// The build creates files in client/dist, move them to root dist
if (existsSync("client/dist")) {
  copyRecursive("client/dist", "dist");
  console.log("Build files moved successfully!");
} else {
  console.error("Build failed - no dist directory found");
  process.exit(1);
}

// Ensure public files are also copied (including prerender.js)
console.log("Copying public files...");
if (existsSync("public")) {
  copyRecursive("public", "dist");
  console.log("Public files copied successfully!");
}

console.log("Build completed successfully!");

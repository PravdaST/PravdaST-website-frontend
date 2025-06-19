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

// Build using the main vite build commandд
console.log("Building with vite...");
execSync("npm run build", { stdio: "inherit" });

console.log("Build completed successfully!");

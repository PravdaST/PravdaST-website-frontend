import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "client",
  plugins: [
    react(),
    tsconfigPaths({
      root: "..",
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@shared": "../shared",
      "@assets": "../attached_assets",
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide': ['lucide-react'],
          'framer': ['framer-motion'],
          'radix': ['@radix-ui/react-slot', '@radix-ui/react-avatar', '@radix-ui/react-dialog']
        }
      }
    }
  },
});
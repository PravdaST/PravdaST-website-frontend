import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 1. Импортираме 'path' модула на Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 2. Добавяме новата 'resolve' секция
  resolve: {
    alias: {
      // 3. Казваме на Vite, че '@' е пряк път към папката './src'
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

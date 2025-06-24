import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // 1. Импортираме новия пакет
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // 2. Добавяме го тук, за да чете автоматично пътеките
    runtimeErrorOverlay(),
  ],
  // 3. Цялата секция resolve: { alias: { ... } } вече не е нужна и е премахната
  build: {
    // Казваме на Vite да създаде готовата версия в папка "dist"
    outDir: "dist",
    emptyOutDir: true,
  },
});

#!/bin/bash
echo "🚀 Стартиране на Next.js проекта..."
cd pravda-nextjs-export
echo "📁 Работна директория: $(pwd)"
echo "📦 Инсталиране на зависимости..."
npm install --silent
echo "⚡ Стартиране на Next.js development server..."
PORT=3000 npm run dev
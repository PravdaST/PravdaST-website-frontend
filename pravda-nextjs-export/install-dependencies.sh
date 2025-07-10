#!/bin/bash

echo "🚀 Инсталиране на Next.js зависимости за Pravda Agency..."

# Проверка дали Node.js е инсталиран
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не е намерен. Моля инсталирайте Node.js версия 18 или по-нова."
    exit 1
fi

# Проверка на версията на Node.js
NODE_VERSION=$(node -v | cut -d. -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js версия 18+ е необходима. Текущата версия е $(node -v)"
    exit 1
fi

echo "✅ Node.js версия $(node -v) намерена"

# Инсталиране на зависимости
echo "📦 Инсталиране на npm пакети..."
npm install

# Проверка дали инсталацията е успешна
if [ $? -eq 0 ]; then
    echo "✅ Всички зависимости са инсталирани успешно!"
    echo ""
    echo "🎯 Следващи стъпки:"
    echo "1. cd pravda-nextjs-export"
    echo "2. npm run dev (за development сървър)"
    echo "3. npm run build (за production build)"
    echo "4. npm run start (за production сървър)"
    echo ""
    echo "🌐 Development сървърът ще бъде достъпен на: http://localhost:3000"
else
    echo "❌ Грешка при инсталиране на зависимостите"
    exit 1
fi
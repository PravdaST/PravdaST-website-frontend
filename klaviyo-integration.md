# Klaviyo Integration Guide

## Overview
Klaviyo е интегриран за email маркетинг и автоматично проследяване на клиентите. Интеграцията се състои от две части:

1. **Frontend проследяване** - JavaScript код за проследяване на посетителите
2. **Backend API** - Автоматично добавяне на контакти от формата към Klaviyo

## Environment Variables (За Vercel)

### Frontend Variables (VITE_ префикс)
```
VITE_KLAVIYO_PUBLIC_API_KEY=xxxxxx
```
- Това е публичният API ключ от Klaviyo (обикновено 6 символа)
- Безопасен за използване във frontend кода
- Намира се в Settings -> API Keys в Klaviyo dashboard

### Backend Variables (Serverless функции)
```
KLAVIYO_PRIVATE_API_KEY=pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
- Това е таният API ключ за serverless функциите
- НИКОГА не трябва да се експозва във frontend кода
- Използва се за добавяне на профили към Klaviyo от contact формата

## Как да получите ключовете от Klaviyo

1. Влезте в klaviyo.com акаунта си
2. Отидете в Settings -> API Keys
3. **Публичен ключ**: Копирайте "Public API Key" (6 символа)
4. **Частен ключ**: Натиснете "Create Private API Key", дайте име "Vercel Backend Integration"

## Функционалност

### Frontend проследяване
- Автоматично зарежда Klaviyo tracking script
- Проследява посещения на страници
- Работи само ако е настроен VITE_KLAVIYO_PUBLIC_API_KEY

### Contact Form Integration
- При успешно изпращане на contact форма
- Автоматично добавя профил в Klaviyo с данни:
  - Email
  - Име
  - Компания (ако е попълнена)
  - Уебсайт
  - Source: "Pravda Agency Contact Form"

## Сигурност
- Публичният ключ е безопасен за frontend
- Частният ключ се използва само в serverless функции
- Всички заявки към Klaviyo API са server-side
- Няма експозиция на sensitive данни във frontend кода

## Testing
- Формата работи и без Klaviyo ключове (graceful degradation)
- Console logs показват грешки ако ключовете не са настроени
- Може да тествате първо със SendGrid интеграцията
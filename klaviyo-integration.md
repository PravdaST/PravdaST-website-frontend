# Klaviyo Integration Guide

## Overview
Klaviyo е интегриран за email маркетинг и автоматично проследяване на клиентите. Интеграцията се състои от две части:

1. **Frontend проследяване** - JavaScript код за проследяване на посетителите
2. **Backend API** - Автоматично добавяне на контакти от формата към Klaviyo

## Environment Variables (За Vercel)

### Frontend Variables (VITE_ префикс)
```
VITE_KLAVIYO_COMPANY_ID=UTqrCz
```
- Това е Company ID от Klaviyo onsite JavaScript
- Безопасен за използване във frontend кода
- Намира се в Klaviyo dashboard -> Settings -> Klaviyo onsite JavaScript

### Backend Variables (Serverless функции)
```
KLAVIYO_PRIVATE_API_KEY=pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
- Това е таният API ключ за serverless функциите
- НИКОГА не трябва да се експозва във frontend кода
- Използва се за добавяне на профили към Klaviyo от contact формата

## Как да получите ключовете от Klaviyo

### За Frontend (Company ID):
1. Влезте в klaviyo.com акаунта си
2. Отидете в Settings -> Klaviyo onsite JavaScript
3. Копирайте company_id от JavaScript кода (напр. UTqrCz)

### За Backend (Private API Key):
1. Отидете в Settings -> API Keys
2. Натиснете "Create Private API Key"
3. Дайте име "Vercel Backend Integration"
4. Копирайте ключа (започва с pk_)

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
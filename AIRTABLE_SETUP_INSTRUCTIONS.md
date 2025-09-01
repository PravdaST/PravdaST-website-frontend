# ТОЧНИ ИНСТРУКЦИИ ЗА СЪЗДАВАНЕ НА AIRTABLE ПОЛЕТА

## Линк към таблицата
https://airtable.com/appkwDzbKRNTf1WZV/tbl8OOQkbiArX7znY/viwY3bqIeQUz6fVUu

## СТЪПКА 1: Създайте тези полета ТОЧНО с тези имена

### 1. name
- **Тип:** Single line text
- **Име:** `name` (малки букви)

### 2. business_name  
- **Тип:** Single line text
- **Име:** `business_name` (малки букви с долна черта)

### 3. industry
- **Тип:** Single select
- **Име:** `industry` (малки букви)
- **Опции (точно тези стойности):**
  ```
  ecommerce
  services
  restaurant
  beauty
  fitness
  real-estate
  education
  other
  ```

### 4. current_marketing
- **Тип:** Single select  
- **Име:** `current_marketing` (малки букви с долна черта)
- **Опции (точно тези стойности):**
  ```
  facebook-ads
  google-ads
  social-media
  none
  other
  ```

### 5. monthly_budget
- **Тип:** Number
- **Име:** `monthly_budget` (малки букви с долна черта)

### 6. main_goal
- **Тип:** Single select
- **Име:** `main_goal` (малки букви с долна черта)
- **Опции (точно тези стойности):**
  ```
  increase-sales
  brand-awareness
  lead-generation
  customer-engagement
  ```

### 7. email
- **Тип:** Email
- **Име:** `email` (малки букви)

### 8. phone
- **Тип:** Phone number
- **Име:** `phone` (малки букви)

### 9. timestamp
- **Тип:** Date and time
- **Име:** `timestamp` (малки букви)

## СТЪПКА 2: Как да добавите полетата

1. Отидете на линка: https://airtable.com/appkwDzbKRNTf1WZV/tbl8OOQkbiArX7znY/viwY3bqIeQUz6fVUu
2. Кликнете на "+" до последната колона за да добавите ново поле
3. За всяко поле:
   - Въведете точното име (copy-paste от тук)
   - Изберете правилния тип
   - За Single select полетата, добавете всички опции една по една

## ВАЖНО ⚠️
- Имената ТРЯБВА да са точно както са изписани (малки букви, долни черти)
- За Single select полетата, опциите ТРЯБВА да са точно както са изписани
- Без тези полета формулярът НЯМА да работи

## Тест
След като създадете полетата, тествайте формуляра на:
https://[your-domain]/campaigns/creatives
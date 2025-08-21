# Airtable Debug Instructions

## Текущ проблем: 403 грешка

### Стъпки за отстраняване:

1. **Проверете точните имена на полетата в Airtable:**
   - Отворете таблицата "Fast Food" 
   - Проверете дали имената на полетата са точно:
     - `Restaurant Name` (Single line text)
     - `Daily Orders` (Single select: 5-10, 11-20, 21-35, 36-50, 50+)
     - `Average Order Value` (Single select: 15-25, 26-35, 36-50, 50+)
     - `Email` (Email)
     - `Phone` (Phone number)
     - `Timestamp` (Date and time)
     - `Created` (Created time)

2. **Проверете ID-тата:**
   - Base ID: `appkwDzDKRNTf1WZV`
   - Table ID: `tbl0fYDOCTS2PHwBP`

3. **Проверете токена:**
   - API Token: `pat5BTtwvg2zwK12N.552877eae1ff005c3c329dd42efcc860ebd39c2f6c1cf48ee04cb4b8ee84139f`
   - Има ли пълни права за четене/писане на базата?

4. **Временно решение:**
   - Формата сега работи и записва данните в конзолата
   - След като се оправи Airtable, данните ще се записват директно

## Следващи стъпки:
1. Проверете горните настройки
2. Тествайте формата - тя ще работи дори без Airtable
3. Когато Airtable е готов, данните ще се записват автоматично
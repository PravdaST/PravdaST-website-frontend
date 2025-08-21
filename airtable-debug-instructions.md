# Airtable Debug Instructions

## Текущ проблем: 403 "INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND"

Формата работи и записва данните в конзолата. Airtable интеграцията е в режим debug.

### ✅ Проверено и правилно настроено:
- ✅ Table ID: `tbl0fYDOCTS2PHwBP` 
- ✅ Base ID: `appkwDzDKRNTf1WZV`
- ✅ API Token: валиден и в правилен формат
- ✅ Всички полета са Single text line
- ✅ Валидация работи правилно

### 🔍 Нужни проверки в Airtable:

1. **Проверете точните имена на полетата:**
   Отворете `https://airtable.com/appkwDzDKRNTf1WZV/tbl0fYDOCTS2PHwBP` и проверете дали полетата са ТОЧНО:
   - `Restaurant Name`
   - `Daily Orders` 
   - `Average Order Value`
   - `Email`
   - `Phone`
   - `Timestamp`

2. **Проверете права на API токена:**
   - Влезте в Airtable Account Settings
   - Проверете дали токенът `pat5BTtwvg2zwK12N` има права за:
     - Read records
     - Write records  
     - Create records
     - За база `appkwDzDKRNTf1WZV`

3. **Алтернатива - създайте нов токен:**
   - Идете в https://airtable.com/create/tokens
   - Създайте нов токен с пълни права за базата
   - Заменете в Vercel environment variables

### 💡 Статус:
- 🟢 Формата работи перфектно за потребителите
- 🟡 Данните се записват в логовете за debug
- ⏳ Airtable интеграция чака permission fix

### 📋 Данни в логовете:
Всички подадени формуляри се записват с:
```
📋 Form submission logged: {
  "Restaurant Name": "...",
  "Daily Orders": "...", 
  "Average Order Value": "...",
  "Email": "...",
  "Phone": "...",
  "Timestamp": "..."
}
```
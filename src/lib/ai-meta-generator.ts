import OpenAI from "openai";
import crypto from "crypto";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface GeneratedMeta {
  description: string;
  keywords: string[];
}

function smartTruncate(input: string, min = 145, max = 158): string {
  const s = input.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  // режем назад до последния интервал в рамките на max
  const cut = s.slice(0, max + 1);
  const lastSpace = cut.lastIndexOf(" ");
  const core = lastSpace > min ? cut.slice(0, lastSpace) : cut.slice(0, max);
  return core.replace(/[.,;:!\-\s]+$/,"") + "…";
}

function sanitizeForSerp(s: string): string {
  // махаме емоджита/спец. символи и двойни кавички
  return s.replace(/[✓➤→►•◆★☆✅❗️⚡️]/g, "")
          .replace(/["""„"]/g, "„")
          .replace(/\s+/g, " ")
          .trim();
}

// проста нормализация и лимит за ключови думи
function normalizeKeywords(kw: unknown, limit = 7): string[] {
  if (!Array.isArray(kw)) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const k of kw) {
    const v = String(k).toLowerCase().trim();
    if (!v) continue;
    if (/[^\p{L}\p{N}\s\-]/u.test(v)) continue; // махаме странни символи
    if (!seen.has(v)) { seen.add(v); out.push(v); }
    if (out.length >= limit) break;
  }
  return out;
}

function dayBucket(ts = Date.now()): number {
  const DAY = 24 * 60 * 60 * 1000;
  return Math.floor(ts / DAY);
}

const metaCache = new Map<string, { meta: GeneratedMeta; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24h

export async function generateWordPressPostMeta(
  title: string,
  content: string,
  excerpt?: string
): Promise<GeneratedMeta> {
  const clean = (x: string) => x.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  const cleanTitle = clean(title || "");
  const cleanExcerpt = clean(excerpt || "");
  const cleanContent = clean(content || "").slice(0, 3000);

  // guard: ако почти няма данни
  if (!cleanTitle && !cleanContent && !cleanExcerpt) {
    return {
      description: "Практичен анализ с ясни стъпки и реални примери за по‑предвидим растеж.",
      keywords: ["бизнес инженеринг","растеж","системи","маркетинг","pravda st"]
    };
  }

  const prompt = `Анализирай българска статия и върни JSON с:
- "description": естествено човешко meta описание (145–158 символа), без емоджита и без фрази като "научете повече", "открийте".
- "keywords": 5–7 релевантни ключови думи (малки букви).

ЗАГЛАВИЕ: ${cleanTitle || "(няма)"}

СЪДЪРЖАНИЕ (извадка): ${cleanContent || "(няма)"}

${cleanExcerpt ? `ИЗВЛЕЧЕН АКЦЕНТ: ${cleanExcerpt}` : ""}

Тон: директен, разговорен, буди любопитство, без технически жаргон и без роботски фрази.`;

  // Важи: избери един стабилен модел (примерно gpt-4o)
  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "Ти си опитен български копирайтър. Пишеш естествени meta описания, които звучат като нормален човек. Избягваш клишета и продажбени фрази."
      },
      { role: "user", content: prompt }
    ],
    response_format: { type: "json_object" },
    temperature: 0.7,
    max_tokens: 400
  });

  const raw = res.choices?.[0]?.message?.content || "{}";
  const parsed = JSON.parse(raw);

  // sanitize + ограничение
  const descClean = sanitizeForSerp(String(parsed.description || ""));
  const description = smartTruncate(descClean, 145, 158);

  const keywords = normalizeKeywords(parsed.keywords, 7);

  return { description, keywords };
}

export async function getCachedWordPressPostMeta(
  slug: string,
  title: string,
  content: string,
  excerpt?: string
): Promise<GeneratedMeta> {
  // Стабилен ключ: slug + дневен bucket + хеш на съдържанието (усеща промени)
  const hash = crypto.createHash("sha1").update((title||"") + (content||"") + (excerpt||"")).digest("hex").slice(0, 8);
  const key = `${slug}:${dayBucket()}:${hash}`;

  const cached = metaCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.meta;
  }

  const meta = await generateWordPressPostMeta(title, content, excerpt);
  metaCache.set(key, { meta, timestamp: Date.now() });

  return meta;
}
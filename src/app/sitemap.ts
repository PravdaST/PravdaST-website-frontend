import { MetadataRoute } from "next";
import { getWordPressPosts } from "@/lib/wordpress";

type WPPost = {
  slug: string;
  modified?: string;
  date?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://www.pravdast.agency";

  // Статични страници – само indexable
  const staticPages = [
    "", // home
    "/about",
    "/services",
    "/services/seo-struktor",
    "/services/trendlab",
    "/services/clickstarter",
    "/services/clientomat",
    "/campaigns",
    "/campaigns/glovo",
    "/calculators",
    "/blog",
    "/case-studies",
    "/contact",
    "/faq",
    "/terms",
    "/privacy",
  ];

  // WordPress постове – пагинация за >100
  const wordpressBlogPages: { url: string; lastModified?: string }[] = [];
  try {
    let page = 1;
    const perPage = 100;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const wpResp = (await getWordPressPosts({ per_page: perPage, page })) as {
        posts?: WPPost[];
      };
      const posts = wpResp?.posts ?? [];
      if (!posts.length) break;

      for (const p of posts) {
        const lm = p.modified || p.date;
        wordpressBlogPages.push({
          url: `/blog/wp-${p.slug}`,
          lastModified: lm,
        });
      }
      if (posts.length < perPage) break;
      page += 1;
    }
  } catch (err) {
    console.error("Error fetching WP posts for sitemap:", err);
  }

  // Нормализация + дубли guard
  const seen = new Set<string>();
  const all = [
    ...staticPages.map((path) => ({
      url: path,
      lastModified: undefined as string | undefined,
    })),
    ...wordpressBlogPages,
  ]
    .map((item) => {
      const clean = item.url.replace(/\/+$/, "");
      return { ...item, url: clean === "" ? "" : clean };
    })
    .filter((item) => {
      const key = item.url;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  const now = new Date();

  const toEntry = (item: {
    url: string;
    lastModified?: string;
  }): MetadataRoute.Sitemap[0] => {
    const fullUrl = `${baseUrl}${item.url}`;
    const isHome = item.url === "";
    const isService = item.url.startsWith("/services");
    const isBlog = item.url.startsWith("/blog");

    const changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = isHome
      ? "daily"
      : isBlog
        ? "weekly"
        : isService
          ? "monthly"
          : "monthly";

    const priority = isHome ? 1.0 : isService ? 0.9 : isBlog ? 0.8 : 0.7;

    return {
      url: fullUrl,
      lastModified: item.lastModified ? new Date(item.lastModified) : now,
      changeFrequency,
      priority,
    };
  };

  return all.map(toEntry);
}

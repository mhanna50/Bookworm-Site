import type { MetadataRoute } from "next";
import { contentPages } from "@/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: base + "/features", changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/about", changeFrequency: "monthly", priority: 0.6 },
    ...contentPages.map((page) => ({
      url: base + "/" + page.slug,
      ...(page.updatedAt ? { lastModified: page.updatedAt } : {}),
      changeFrequency: page.intent === "guide" ? "monthly" as const : "weekly" as const,
      priority: page.intent === "commercial" || page.intent === "comparison" ? 0.85 : page.intent === "hub" ? 0.8 : 0.7,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { contentPages } from "@/content";

function baseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return "https://" + vercel;
  return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = baseUrl();
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: base + "/features", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/pricing", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/about", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...contentPages.map((page) => ({
      url: base + "/" + page.slug,
      lastModified: now,
      changeFrequency: page.intent === "guide" ? "monthly" as const : "weekly" as const,
      priority: page.intent === "commercial" || page.intent === "comparison" ? 0.85 : page.intent === "hub" ? 0.8 : 0.7,
    })),
  ];
}

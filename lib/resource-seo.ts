import type { ContentPage } from "@/content/types";
import { absoluteUrl } from "./site";

export function toSectionId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

export function resourceDescription(page: ContentPage) {
  return /story health/i.test(page.description) && !/coming soon/i.test(page.description)
    ? `${page.description} Story Health is coming soon in Author and excluded from Writer and the trial.`
    : page.description;
}

export function resourceBreadcrumbs(page: ContentPage) {
  const group = page.slug.split("/")[0];
  const parents: Record<string, { label: string; href: string }> = {
    features: { label: "Features", href: "/features" },
    templates: { label: "Templates", href: "/templates" },
    guides: { label: "Resources", href: "/resources" },
    compare: { label: "Comparisons", href: "/compare" },
    alternatives: { label: "Comparisons", href: "/compare" },
  };
  return [
    { label: "Quilly", href: "/" },
    ...(page.slug.includes("/") && parents[group] ? [parents[group]] : []),
    { label: page.title, href: "/" + page.slug },
  ];
}

export function resourceSchema(page: ContentPage) {
  const url = absoluteUrl("/" + page.slug);
  return {
    "@context": "https://schema.org",
    "@type": page.intent === "guide" ? "Article" : page.intent === "hub" ? "CollectionPage" : "WebPage",
    "@id": url + "#resource",
    url,
    name: page.title,
    headline: page.title,
    description: resourceDescription(page),
    inLanguage: "en",
    mainEntityOfPage: url,
    isPartOf: { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: "Quilly", url: absoluteUrl() },
    publisher: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: "Quilly", url: absoluteUrl() },
    ...(page.intent === "guide" ? { author: { "@type": "Organization", name: "Quilly", url: absoluteUrl("/about") } } : {}),
    ...(page.updatedAt ? { dateModified: page.updatedAt } : {}),
    ...(page.visuals?.some((visual) => visual.src)
      ? { image: page.visuals.filter((visual) => visual.src).map((visual) => absoluteUrl(visual.src!)) }
      : {}),
  };
}

export function breadcrumbSchema(page: ContentPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: resourceBreadcrumbs(page).map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.label, item: absoluteUrl(item.href),
    })),
  };
}

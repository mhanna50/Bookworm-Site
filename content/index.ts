import { commercialPages } from "./commercial";
import { comparisonPages } from "./comparisons";
import { guidePages } from "./guides";
import { supplementalPages } from "./supplemental";
import { expansionPages } from "./expansion";
import { competitorExpansionPages } from "./competitor-expansion";
import type { ContentPage } from "./types";

export const contentPages: ContentPage[] = [
  ...commercialPages,
  ...comparisonPages,
  ...guidePages,
  ...supplementalPages,
  ...expansionPages,
  ...competitorExpansionPages,
];

export const contentPageMap = new Map(contentPages.map((page) => [page.slug, page]));

export function getContentPage(slug: string) {
  return contentPageMap.get(slug);
}

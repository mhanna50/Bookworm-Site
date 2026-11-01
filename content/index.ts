import { commercialPages } from "./commercial";
import { comparisonPages } from "./comparisons";
import { guidePages } from "./guides";
import { supplementalPages } from "./supplemental";
import { expansionPages } from "./expansion";
import { competitorExpansionPages } from "./competitor-expansion";
import { aioReferencePages } from "./aio-reference";
import { templatePages } from "./templates";
import { workflowPages } from "./workflows";
import { deepenPage } from "./depth";
import type { ContentPage } from "./types";

const basePages: ContentPage[] = [
  ...commercialPages,
  ...comparisonPages,
  ...guidePages,
  ...supplementalPages,
  ...expansionPages,
  ...competitorExpansionPages,
  ...aioReferencePages,
  ...templatePages,
  ...workflowPages,
];

export const contentPages: ContentPage[] = basePages.map(deepenPage);

export const contentPageMap = new Map(contentPages.map((page) => [page.slug, page]));

export function getContentPage(slug: string) {
  return contentPageMap.get(slug);
}

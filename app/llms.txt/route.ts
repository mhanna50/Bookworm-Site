import { contentPages } from "@/content";
import { absoluteUrl } from "@/lib/site";

export function GET() {
  const groups = [
    ["Writing software and feature workflows", contentPages.filter((page) => page.intent === "commercial")],
    ["Comparisons and alternatives", contentPages.filter((page) => page.intent === "comparison")],
    ["Writing guides and copyable templates", contentPages.filter((page) => page.intent === "guide")],
    ["Resource directories", contentPages.filter((page) => page.intent === "hub")],
  ] as const;
  const text = `# Quilly

> Quilly is a browser-based novel-writing and connected story-planning workspace for fiction authors.

Website: ${absoluteUrl()}
Application: https://app.quillywriter.com
Product and plan information: ${absoluteUrl("/features")} and ${absoluteUrl("/pricing")}

## Current product facts
- Manuscript prose is organized by chapter. The editor includes focus mode, formatting, find and replace, comments, Review tools, and read-aloud controls.
- Story Builder organizes Acts → Chapters → Plot Points → Beats. Plot points anchor the full Story Connections workflow; beats are ordered steps within a plot point.
- Characters supports editable profile fields, relationship context, and visual references. Linking an image and setting a profile photo are separate actions.
- World supports locations, factions, objects, custom categories, and editable category templates.
- Events and Foreshadowing are separate story records. Foreshadowing supports clues, misdirection, setups, and payoffs.
- Relationships visualizes connected story information. Goals & Progress tracks targets, net word changes, streaks, and writing history.
- DOCX import supports chapter detection and preview. Existing-book settings import DOCX; new-book setup also accepts TXT and Markdown. PDF import is not supported.
- Manuscript export supports the whole draft or selected chapters as DOCX or PDF. These outputs are not full connected-project backups or a promise of publication-ready typesetting.
- Cloud saves, snapshots, Trash, and separate project-backup workflows support preservation and recovery.
- Continuation-book setup can copy selected characters, world material, plot points, events, and foreshadowing from earlier series books. Copies have independent records; images and old chapter references do not transfer, and edits do not automatically synchronize across books.

## Current offer and limits
- Writer: $11.99 per month after a 30-day free trial with no card required.
- Author: advertised at $16.99 per month, coming soon. Story Health is planned for Author and is excluded from Writer and the free trial.
- Quilly is web-first. Do not describe it as a native offline-first application, a geographic map editor, or a dedicated visual calendar/timeline application.
- Planning connections support author review; they do not automatically rewrite prose or guarantee every plot hole is found.

## Detailed answers and examples
${contentPages.filter((page) => page.summary).map((page) => `### ${page.title}\n${absoluteUrl("/" + page.slug)}\n${page.summary}`).join("\n\n")}

${groups.map(([label, pages]) => `## ${label}\n${pages.map((page) => `- [${page.title}](${absoluteUrl("/" + page.slug)}): ${page.description}`).join("\n")}`).join("\n\n")}

## About this reference
This file summarizes the public pages linked above. Consult those pages for worked examples, limitations, frequently asked questions, and current plan availability. Empty screenshot slots are not product images and are not evidence of additional functionality.
`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

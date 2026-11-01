import type { ContentPage } from "./types";

export const resourceBrowseLinks = [
  { href: "/resources#writing-tasks", label: "By writing task", description: "Find help for the part you are working on." },
  { href: "/resources#genres", label: "By genre", description: "Fantasy, mystery, romance, and more." },
  { href: "/resources#templates", label: "Free templates", description: "Practical worksheets and completed examples." },
  { href: "/resources#comparisons", label: "Compare tools", description: "Choose a workspace that fits your process." },
] as const;

export type ResourceCard = Pick<ContentPage, "slug" | "title" | "description">;
export type ResourceTopic = { id: string; title: string; items: ResourceCard[] };
export type ResourceGroup = { id: string; title: string; description: string; topics: ResourceTopic[] };

const genreTopics = [
  { id: "fantasy", title: "Fantasy", slugs: ["writing-software-for-fantasy-authors", "guides/track-magic-system-rules"] },
  { id: "mystery", title: "Mystery", slugs: ["writing-software-for-mystery-writers", "guides/mystery-clue-reveal-map"] },
  { id: "romance", title: "Romance", slugs: ["writing-software-for-romance-authors", "guides/romance-relationship-arc"] },
  { id: "thriller", title: "Thriller", slugs: ["writing-software-for-thriller-authors", "guides/thriller-reveal-pacing"] },
  { id: "science-fiction", title: "Science fiction", slugs: ["writing-software-for-science-fiction-authors"] },
];

function writingTopic(slug: string) {
  if (/import|export|backup|recovery|move-google/.test(slug)) return "move";
  if (/character|worldbuilding|story-bible|series-bible/.test(slug)) return "people";
  if (/foreshadow|continuity|plot-thread|timeline|scene-revision/.test(slug)) return "review";
  if (/plot|outline|story-planning|story-builder|chapter-plan|inciting|midpoint|subplot|story-arc|scene-vs/.test(slug)) return "plan";
  return "draft";
}

export function buildResourceGroups(pages: ContentPage[]): ResourceGroup[] {
  const groups: ResourceGroup[] = [
    { id: "writing-tasks", title: "Find help for what you are working on", description: "Start with the writing problem in front of you. A single useful answer is a good place to begin.", topics: [
      { id: "draft", title: "Start writing & build a routine", items: [] },
      { id: "plan", title: "Outline & shape the story", items: [] },
      { id: "people", title: "Develop characters & build a world", items: [] },
      { id: "review", title: "Track clues & revise with context", items: [] },
      { id: "move", title: "Move, export & protect your draft", items: [] },
    ] },
    { id: "genres", title: "Explore your genre", description: "Work through examples that match the kinds of promises, rules, and relationships your story needs.", topics: genreTopics.map(({ id, title }) => ({ id, title, items: [] })) },
    { id: "templates", title: "Make the blank page a little easier", description: "Copy a practical template, look at a completed example, and keep the questions that help your book.", topics: [{ id: "worksheets", title: "Free templates & checklists", items: [] }] },
    { id: "comparisons", title: "Find a writing workspace that fits", description: "Compare workflows, strengths, and tradeoffs before moving a manuscript or starting a subscription.", topics: [{ id: "tools", title: "Comparisons & alternatives", items: [] }] },
  ];
  for (const page of pages) {
    if (page.slug === "resources") continue;
    const card = { slug: page.slug, title: page.title, description: page.description };
    if (page.slug === "templates" || page.slug.startsWith("templates/")) groups[2].topics[0].items.push(card);
    else if (page.intent === "comparison" || page.slug === "compare" || page.slug.startsWith("best-")) groups[3].topics[0].items.push(card);
    else if (genreTopics.some((topic) => topic.slugs.includes(page.slug))) {
      const genre = genreTopics.find((topic) => topic.slugs.includes(page.slug))!;
      groups[1].topics.find((topic) => topic.id === genre.id)!.items.push(card);
    }
    else groups[0].topics.find((topic) => topic.id === writingTopic(page.slug))!.items.push(card);
  }
  for (const group of groups) for (const topic of group.topics) topic.items.sort((a, b) => a.title.localeCompare(b.title));
  return groups;
}

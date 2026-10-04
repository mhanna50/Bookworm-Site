import type { ContentPage } from "./types";

export const supplementalPages: ContentPage[] = [
  {
    slug: "character-management-for-writers",
    eyebrow: "Character management",
    title: "Character management for writers with large, connected casts",
    description: "Organize character profiles, appearances, relationships, images, events, locations, and story context in Bookworm.",
    intro: "Character notes become difficult to trust when they live in several documents. Bookworm keeps each character as a reusable story entity that can connect to chapters, events, locations, images, and other characters.",
    intent: "commercial",
    sections: [
      { heading: "One character, many story connections", body: [
        "A character profile can hold stable information while the rest of the project records where that person matters. Chapter connections show appearances. Relationship records show how people connect. Events and locations provide narrative context.",
        "This reduces the need to repeat the same character description across outline notes and chapter plans."
      ] },
      { heading: "See the cast as a network", body: [
        "Bookworm's Relationships view can visualize links among characters, locations, and events. That becomes useful when a story contains factions, families, political alliances, romances, rivalries, or multiple points of view.",
        "The graph is intended to help with comprehension rather than become a decorative diagram, so focus and layout behavior are designed to reduce visual clutter."
      ] },
      { heading: "Use appearances as a revision signal", body: [
        "A character disappearing for a long stretch may be intentional. It may also be something the author forgot after restructuring. Story Health can surface characters without recent appearances so the writer can make that decision consciously."
      ] }
    ],
    related: [
      { href: "/guides/how-to-organize-novel-characters", label: "How to organize novel characters" },
      { href: "/guides/how-to-track-character-arcs", label: "How to track character arcs" },
      { href: "/story-bible-software", label: "Story bible software" }
    ]
  },
  {
    slug: "writing-progress-tracker",
    eyebrow: "Writing progress tracker",
    title: "Track writing progress without turning the novel into a scoreboard",
    description: "Set overall, daily, and weekly writing goals; track words today, streaks, chapter counts, sessions, and estimated completion inside Bookworm.",
    intro: "Progress tracking should answer useful questions: Am I writing consistently? Which chapters are growing? Is my current pace moving me toward the target? Bookworm keeps those answers visible without making metrics the point of writing.",
    intent: "commercial",
    sections: [
      { heading: "Track the metrics that change decisions", body: [
        "Bookworm's Goals & Progress page tracks target word count, daily and weekly goals, today's net manuscript change, current and longest writing streaks, progress over time, chapter word counts, recent writing sessions, and an estimated completion date when there is enough history.",
        "The estimate is based on recent positive writing days, while chapter-level counts follow the current Story Builder order."
      ] },
      { heading: "Separate consistency from quality", body: [
        "Word count is a production metric, not a quality score. A revision day that removes 1,000 words can improve a book even though the total shrinks.",
        "The purpose of a progress page is to make habits and pace understandable, not to reward maximum output."
      ] },
      { heading: "Use history to learn your own pace", body: [
        "Writing session history becomes more useful over time because it shows what your actual process looks like rather than what a generic daily target says it should look like."
      ] }
    ],
    related: [
      { href: "/novel-writing-software", label: "Novel writing software" },
      { href: "/features", label: "Explore Bookworm features" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" }
    ]
  },
  {
    slug: "book-writing-app",
    eyebrow: "Book writing app",
    title: "A book writing app built for the parts around the manuscript too",
    description: "Write a novel in Bookworm while organizing chapters, plots, characters, worldbuilding, events, clues, relationships, images, continuity, and progress.",
    intro: "A basic text editor can hold a manuscript. A book writing app becomes useful when it reduces the mental overhead around that manuscript: organization, planning, continuity, reference material, and progress.",
    intent: "commercial",
    sections: [
      { heading: "Write and revise chapter by chapter", body: [
        "Bookworm's manuscript includes focus mode, formatting controls, search and replace, automatic story-reference links, anchored comments, tracked manuscript changes, grammar/style review, and read-aloud.",
        "Chapter and scene context stays connected to story entities, so you can move from the page into characters, events, world entries, or relationships when you need context."
      ] },
      { heading: "Keep planning beside writing", body: [
        "Story Builder, chapter details, Plot Points, Story Events, characters, worldbuilding, foreshadowing, images, relationships, Story Health, and Goals & Progress all live inside the same book project."
      ] },
      { heading: "Bring work in and get it back out", body: [
        "Bookworm can import a Microsoft Word .docx manuscript, detect chapters, let you preview/select them, and either append them or replace the current manuscript while preserving planning data.",
        "For export, you can create DOCX or PDF files from the whole manuscript or selected chapters. PDF import is not currently supported."
      ] },
      { heading: "Keep recovery close", body: [
        "Projects are continuously saved to the cloud. Settings includes recoverable snapshots and Trash-backed recovery, and destructive entity edits can surface an Undo action."
      ] }
    ],
    related: [
      { href: "/novel-writing-software", label: "Novel writing software" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/alternatives/scrivener", label: "Scrivener alternative" }
    ]
  },
  {
    slug: "resources",
    eyebrow: "Bookworm resources",
    title: "Practical guides for planning, writing, and keeping a novel consistent",
    description: "Explore Bookworm's writing resources on novel planning, plotting, chapters, story bibles, characters, foreshadowing, continuity, worldbuilding, and writing software.",
    intro: "These resources are organized around the problems that appear during a long fiction project: making a plan, keeping a large story understandable, and revising without losing track of what changed.",
    intent: "hub",
    sections: [
      { heading: "Plan the story", body: [
        "Start with the guides on planning a novel, plotting cause and effect, and turning high-level structure into chapters. These are method-agnostic: use a named story framework if it helps, but do not force the book into a template just to complete the template."
      ], bullets: ["How to plan a novel","How to plot a novel","How to plan chapters"] },
      { heading: "Keep the story understandable", body: [
        "Story bibles, character organization, worldbuilding, foreshadowing, and continuity systems all solve the same underlying problem: a novel eventually contains more information than working memory can reliably hold."
      ], bullets: ["How to build a story bible","How to organize novel characters","How to track character arcs","How to track foreshadowing","How to track story continuity"] },
      { heading: "Choose the right writing workspace", body: [
        "The software pages explain different approaches to writing and planning tools, including Bookworm's connected-story model and fair comparisons with established products such as Scrivener, Dabble, and NovelPad."
      ] }
    ],
    related: [
      { href: "/guides/how-to-plan-a-novel", label: "Start with novel planning" },
      { href: "/novel-writing-software", label: "Explore novel writing software" },
      { href: "/alternatives/scrivener", label: "Compare Scrivener alternatives" }
    ]
  }
];

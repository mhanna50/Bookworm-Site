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
        "Bookworm's writing progress area is designed around overall target word count, daily and weekly goals, words written today, writing streak, progress over time, words per chapter, and writing sessions.",
        "An estimated completion date can translate recent pace into a planning signal, while chapter-level counts show where the manuscript is becoming unusually long or short."
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
      { heading: "Write chapter by chapter", body: [
        "Bookworm's manuscript area keeps the writing experience focused while the rest of the project remains nearby. Chapters can connect back to story planning and story entities without filling the editor with constant panels.",
        "Entity linking is designed to make names in the manuscript useful entry points to character and story context."
      ] },
      { heading: "Keep planning beside writing", body: [
        "The Story Builder, chapter details, events, characters, world, foreshadowing, and relationships all exist inside the same book project. You can move into planning when you need context and return to prose when you are ready to write."
      ] },
      { heading: "Keep ownership and recovery in mind", body: [
        "Long-form writing software should treat backups, recovery, and export as core product responsibilities. Bookworm includes backup and recovery work as part of the product rather than treating lost work as an edge case."
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

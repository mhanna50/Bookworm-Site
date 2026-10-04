import type { ContentPage } from "./types";

export const commercialPages: ContentPage[] = [
  {
    slug: "novel-writing-software",
    eyebrow: "Novel writing software",
    title: "Novel writing software that keeps the whole story connected",
    description: "Bookworm combines manuscript writing, plot planning, characters, worldbuilding, continuity checks, foreshadowing, relationships, and writing progress in one workspace for novelists.",
    intro: "A novel rarely lives in one document. Drafts, character notes, plot beats, world details, unresolved threads, and research usually end up scattered across files and apps. Bookworm is designed to keep those pieces connected without turning writing into project management.",
    intent: "commercial",
    sections: [
      { heading: "What should novel writing software actually do?", body: [
        "The best novel writing software should make drafting easier while helping you keep track of the information that grows around a long manuscript. At minimum, writers usually need a focused manuscript editor, a way to organize chapters, somewhere to store character and world notes, and a reliable view of progress.",
        "Bookworm goes further by connecting those parts. Characters, Story Events, Plot Points, world entries, foreshadowing, images, and relationships can all sit beside the manuscript. Story Health uses that project structure to surface continuity, plot-thread, character-activity, timeline, orphaned-element, broken-reference, and structure signals worth reviewing."
      ], bullets: ["Chapter-based manuscript editor with focus mode","Comments, tracked changes, grammar/style review, and read-aloud","Acts, chapters, plot points, and beats","Characters, Story Events, worldbuilding, foreshadowing, images, and relationships","Story Health diagnostics","Goals, streaks, chapter word counts, writing sessions, and estimated completion","DOCX import plus DOCX/PDF export","Cloud saves, snapshots, Trash, and Undo"] },
      { heading: "Why connected story data matters", body: [
        "Long projects become difficult when every note is isolated. You may remember that a clue exists but forget where it was planted. You may change a character's background and miss an earlier chapter that contradicts it. Connected story data makes those relationships visible.",
        "Bookworm is built around the idea that planning information should support the manuscript rather than compete with it. You can plan deeply when you need to, then return to a clean writing view."
      ] },
      { heading: "Who Bookworm is built for", body: [
        "Bookworm is intended for novelists and aspiring fiction writers who want more structure than a plain document but less friction than a complicated database. It can support discovery writers, heavy plotters, and writers who move between the two depending on the project.",
        "It is especially useful when a story has a large cast, layered timelines, many locations, planted clues, or multiple plot threads that need to stay consistent."
      ] }
    ],
    related: [
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" }
    ]
  },
  {
    slug: "story-planning-software",
    eyebrow: "Story planning software",
    title: "Plan a novel visually without losing the manuscript",
    description: "Bookworm story planning software organizes acts, chapters, plot points, beats, events, characters, foreshadowing, and story relationships alongside the manuscript.",
    intro: "Story planning works best when the outline can change with the draft. Bookworm gives writers a visual structure for acts, chapters, plot points, and beats while keeping characters, events, clues, and manuscript context nearby.",
    intent: "commercial",
    sections: [
      { heading: "From broad structure to scene-level detail", body: [
        "Bookworm's Story Builder is organized as Acts → Chapters → Plot Points → Beats. That gives you enough hierarchy to see the shape of a book without forcing every idea into a rigid template.",
        "Acts remain stable containers. Chapters hold the sections you will actually write. Plot points capture major narrative movement, and beats let you record the smaller steps that make those moments work."
      ] },
      { heading: "Planning that can evolve", body: [
        "A useful outline is not a contract. As the manuscript changes, the plan should be easy to rearrange, rename, expand, or simplify. Bookworm is designed for that ongoing revision process rather than a one-time prewriting exercise.",
        "Events, characters, locations, and foreshadowing remain separate story entities, so the same event can connect to a chapter, character, and clue without duplicating the information."
      ] },
      { heading: "When visual planning is most useful", body: [
        "Visual planning becomes especially helpful when a novel has multiple point-of-view characters, parallel plots, mystery clues, political factions, or a timeline that is difficult to hold in your head.",
        "The goal is not to make every writer outline more. It is to make the information you do choose to plan easier to understand."
      ] }
    ],
    related: [
      { href: "/plotting-software-for-novelists", label: "Plotting software for novelists" },
      { href: "/chapter-planning-software", label: "Chapter planning software" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" }
    ]
  },
  {
    slug: "story-bible-software",
    eyebrow: "Story bible software",
    title: "A story bible that stays connected to the draft",
    description: "Build a connected story bible for characters, worldbuilding, locations, events, relationships, images, and continuity inside Bookworm.",
    intro: "A story bible is useful only if you can find and trust the information inside it. Bookworm turns the traditional collection of notes into connected story entities that can point back to the manuscript and to each other.",
    intent: "commercial",
    sections: [
      { heading: "What belongs in a story bible?", body: [
        "A story bible can contain character profiles, locations, factions, rules of the world, important objects, relationships, event history, timelines, visual references, terminology, and any detail that needs to stay consistent.",
        "Bookworm lets you organize this information without forcing every project into one universal template. World categories and their fields can be renamed so the structure matches the book."
      ] },
      { heading: "Connected instead of copied", body: [
        "The biggest weakness of a traditional story bible is duplication. A character may be described in one note, mentioned in an outline, and referenced again in a timeline. When one fact changes, the others become stale.",
        "Bookworm's model is built around reusable entities and relationships. That means the same character or location can be referenced across the story instead of recreated."
      ] },
      { heading: "Useful during drafting and revision", body: [
        "During drafting, a story bible helps you answer small questions without breaking momentum. During revision, it becomes a consistency check: ages, relationships, locations, chronology, promises, clues, and unresolved details are easier to review.",
        "Story Health adds another layer by surfacing signals that may indicate missing links or contradictions."
      ] }
    ],
    related: [
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/guides/how-to-build-a-story-bible", label: "How to build a story bible" }
    ]
  },
  {
    slug: "worldbuilding-software-for-writers",
    eyebrow: "Worldbuilding software",
    title: "Worldbuilding software designed around the novel",
    description: "Organize places, factions, lore, systems, rules, images, and custom world categories in a writing workspace connected to your manuscript.",
    intro: "Worldbuilding can become its own hobby. Bookworm keeps it useful by tying world information back to the story you are actually writing.",
    intent: "commercial",
    sections: [
      { heading: "Flexible world categories", body: [
        "Different novels need different worldbuilding. A fantasy epic may need magic systems and kingdoms. A historical novel may need locations, institutions, dates, and social customs. A science-fiction story may need technology, planets, organizations, and rules.",
        "Bookworm supports preset categories but lets writers rename categories and internal fields so the structure can fit the project instead of the other way around."
      ] },
      { heading: "Connect the world to the narrative", body: [
        "Locations and world entities become more useful when they are connected to the characters and events that matter there. Bookworm's relationship model helps make those connections visible.",
        "Images can also be associated with characters, locations, chapters, events, and plot points, turning visual references into part of the same story system."
      ] },
      { heading: "Avoid worldbuilding overload", body: [
        "The purpose of the world page is not to reward filling in endless fields. It is to preserve facts you will need later. Start with the minimum useful structure and expand categories only when the manuscript creates a reason to."
      ] }
    ],
    related: [
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/how-to-build-a-story-bible", label: "Build a story bible" },
      { href: "/features", label: "Explore Bookworm features" }
    ]
  },
  {
    slug: "foreshadowing-tracker",
    eyebrow: "Foreshadowing tracker",
    title: "Track clues, promises, and payoffs across a novel",
    description: "Use Bookworm to track foreshadowing clues and connect them to chapters, events, plot points, and later payoffs.",
    intro: "Foreshadowing is easy to plant and surprisingly easy to forget. Bookworm gives clues a dedicated place so you can see where a promise begins, what it points toward, and whether the story eventually pays it off.",
    intent: "commercial",
    sections: [
      { heading: "Treat clues as story entities", body: [
        "Instead of burying a clue in a chapter note, Bookworm lets foreshadowing exist as its own record. It can be linked to the chapter where it appears and to the event or plot point it supports.",
        "That makes it easier to answer questions such as: Where did I first hint at this reveal? Have I repeated the clue too often? Which promise has no payoff yet?"
      ] },
      { heading: "Useful for more than mysteries", body: [
        "Mystery and thriller writers have obvious reasons to track clues, but foreshadowing also matters in fantasy, romance, science fiction, literary fiction, and any story that creates expectations.",
        "A promise can be a suspicious object, a character fear, a world rule, a relationship tension, or a line of dialogue that becomes meaningful later."
      ] },
      { heading: "Review unresolved threads", body: [
        "Story Health can complement the foreshadowing view by calling attention to unresolved threads. The goal is not to declare a clue wrong, but to give the author a useful list to review before the draft is finished."
      ] }
    ],
    related: [
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/guides/how-to-track-foreshadowing", label: "How to track foreshadowing" },
      { href: "/guides/how-to-track-story-continuity", label: "How to track continuity" }
    ]
  },
  {
    slug: "story-continuity-checker",
    eyebrow: "Story continuity checker",
    title: "Catch continuity problems before they become revision problems",
    description: "Bookworm Story Health helps writers review timeline conflicts, unresolved threads, stale character appearances, unassigned events, and broken story references.",
    intro: "Continuity checking is less about finding typos and more about finding contradictions in the story's logic. Bookworm's Story Health page brings together signals that are difficult to notice when each chapter is viewed alone.",
    intent: "commercial",
    sections: [
      { heading: "What Story Health looks for", body: [
        "Bookworm can surface continuity-related signals such as timeline conflicts, unresolved threads, characters without recent appearances, unassigned events, and broken references. These are review prompts, not automatic judgments.",
        "A signal may be intentional. A character can disappear for ten chapters because the story requires it. The value is that the author sees the gap and decides consciously."
      ], bullets: ["Timeline conflicts","Unresolved story threads","Characters without recent appearances","Events not assigned to the story","Broken entity references"] },
      { heading: "Why continuity errors happen", body: [
        "Long manuscripts create memory problems. Details established months earlier are easy to forget, especially after plot changes. The more connected the cast, timeline, and world become, the harder it is to check consistency manually.",
        "Keeping story entities connected gives Bookworm more context for identifying things worth reviewing."
      ] },
      { heading: "A revision assistant, not a story score", body: [
        "Bookworm does not try to assign a quality score to your novel. Story Health is designed to point to concrete structural questions so the author remains the decision-maker."
      ] }
    ],
    related: [
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/guides/how-to-track-story-continuity", label: "How to track story continuity" },
      { href: "/features", label: "Story Health and more" }
    ]
  },
  {
    slug: "plotting-software-for-novelists",
    eyebrow: "Plotting software",
    title: "Plotting software for novelists who want structure without rigidity",
    description: "Plan acts, chapters, plot points, beats, events, characters, and story connections in Bookworm while keeping the manuscript at the center.",
    intro: "Plotting tools should help you see cause and effect, not force every novel into the same beat sheet. Bookworm provides a flexible hierarchy plus connected story entities for writers who want a clear plan that can still change.",
    intent: "commercial",
    sections: [
      { heading: "A practical hierarchy", body: [
        "Bookworm's Story Builder uses acts, chapters, plot points, and beats because they are broad enough to fit many story structures. You can use a three-act structure, four parts, a mystery sequence, romance beats, or your own system without changing the underlying tool.",
        "Major events can remain separate from the outline and be connected where they matter, which helps keep plot chronology distinct from manuscript organization."
      ] },
      { heading: "Plan at the level you need", body: [
        "Some writers want a one-sentence chapter goal. Others want several beats and linked events. Bookworm supports both approaches. You can keep an outline lightweight at first and deepen it only where the story needs more thought."
      ] },
      { heading: "Move between planning and writing", body: [
        "The most useful plotting software is not a separate stage of the process. In Bookworm, Story Builder, the manuscript, Characters, Plot Points, Story Events, Foreshadowing, World, Relationships, Story Health, and Goals & Progress remain views inside the same book project."
      ] }
    ],
    related: [
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/chapter-planning-software", label: "Chapter planning software" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" }
    ]
  },
  {
    slug: "chapter-planning-software",
    eyebrow: "Chapter planning",
    title: "Plan chapters without losing sight of the full novel",
    description: "Use Bookworm to organize chapter notes, plot points, beats, characters, locations, events, foreshadowing, and manuscript context.",
    intro: "A chapter is where high-level plot structure becomes actual prose. Bookworm's chapter detail view is designed to gather the information you need for that transition without turning every chapter into a giant form.",
    intent: "commercial",
    sections: [
      { heading: "Give each chapter useful context", body: [
        "A chapter can connect to plot points, events, foreshadowing, characters, and locations. Notes can record the chapter's purpose, questions, or revision reminders.",
        "The goal is to answer practical questions before you write: What changes here? Who is present? Where does it happen? Which clue is planted? What plot point is moving forward?"
      ] },
      { heading: "Keep chapter planning compact", body: [
        "Bookworm is intentionally moving away from tall, cluttered chapter panels. Connected characters and other entities are meant to remain scannable so adding more story information does not make the page visually overwhelming."
      ] },
      { heading: "Use chapters as the bridge to the manuscript", body: [
        "The chapter plan should be close enough to the manuscript that you can move from planning to drafting without rebuilding context. That is why Bookworm treats chapter structure and writing as parts of one workflow."
      ] }
    ],
    related: [
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" }
    ]
  }
];

import type { ContentPage } from "./types";

export const competitorExpansionPages: ContentPage[] = [
  {
    slug: "alternatives/plottr",
    eyebrow: "Plottr alternative",
    title: "A Plottr alternative for writers who want planning and manuscript in one place",
    description: "Compare Bookworm and Plottr for visual outlining, manuscript writing, story bibles, worldbuilding, relationships, continuity, cloud access, and pricing model.",
    intro: "Plottr is a strong specialist tool for visual outlining and series planning. Bookworm is a broader author workspace for writers who want the planning structure, manuscript, story entities, continuity signals, and progress to live together.",
    intent: "comparison",
    sections: [
      {
        heading: "Where Plottr is strong",
        body: [
          "Plottr is built around visual timelines, templates, character tools, and series-bible workflows. Its current plans include desktop options plus Plottr Pro for browser access, cloud sync, cloud backups, and real-time collaboration.",
          "Writers who primarily want a visual outlining system—especially template-driven planning—may prefer Plottr's specialized focus."
        ]
      },
      {
        heading: "Why a writer might choose Bookworm instead",
        body: [
          "Bookworm includes a manuscript editor alongside Story Builder, characters, worldbuilding, events, foreshadowing, relationships, Story Health, images, and writing progress. That means the outline does not have to be handed off to a separate drafting environment.",
          "Its planning hierarchy is simpler and more opinionated: Acts → Chapters → Plot Points → Beats, with other story entities connected around that structure."
        ]
      },
      {
        heading: "The deciding question",
        body: [
          "If visual outlining is the main job you need software to do, Plottr is a strong specialist choice. If your larger problem is keeping the outline, manuscript, cast, world, clues, and continuity connected while drafting, Bookworm is closer to that workflow."
        ]
      }
    ],
    table: {
      caption: "Bookworm vs Plottr",
      columns: ["Area", "Bookworm", "Plottr"],
      rows: [
        ["Full manuscript editor", "Yes", "No full manuscript editor"],
        ["Visual planning", "Story Builder", "Timeline + templates"],
        ["Story bible", "Connected entities", "Strong series bible"],
        ["Foreshadowing", "Dedicated feature", "Can be modeled manually"],
        ["Relationship graph", "Yes", "Character/family tools"],
        ["Continuity review", "Story Health", "Manual planning/review"],
        ["Browser access", "Yes", "Plottr Pro"],
        ["Offline-first desktop", "No", "Yes on standard desktop plan"]
      ]
    },
    sources: [
      { label: "Plottr pricing", href: "https://plottr.com/pricing/" }
    ],
    related: [
      { href: "/best-story-planning-software", label: "Best story planning software" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/novel-writing-software", label: "Novel writing software" }
    ]
  },
  {
    slug: "alternatives/campfire-writing",
    eyebrow: "Campfire alternative",
    title: "A Campfire Writing alternative for authors who want lighter worldbuilding and tighter manuscript connections",
    description: "Compare Bookworm and Campfire for manuscript writing, worldbuilding, characters, relationships, timelines, planning, continuity, and connected story organization.",
    intro: "Campfire is one of the deepest worldbuilding-focused writing platforms. Bookworm takes a lighter approach: enough structure for a novel's world, but with more emphasis on how characters, events, clues, chapters, and continuity connect back to the manuscript.",
    intent: "comparison",
    sections: [
      {
        heading: "Where Campfire is strong",
        body: [
          "Campfire is designed around a broad set of writing and worldbuilding modules. It is a strong fit for writers who want dedicated systems for detailed lore, timelines, characters, locations, relationships, research, and other speculative-world information.",
          "That depth is especially attractive for large fantasy universes, roleplaying settings, or series where the world itself needs extensive documentation."
        ]
      },
      {
        heading: "How Bookworm differs",
        body: [
          "Bookworm deliberately avoids making every worldbuilding category equally important. Writers can rename categories and fields, add what the project needs, and keep the world close to chapters and narrative events.",
          "Bookworm also emphasizes Story Health, foreshadowing, a visual relationship graph, and a direct Acts → Chapters → Plot Points → Beats planning hierarchy."
        ]
      },
      {
        heading: "Which is a better fit?",
        body: [
          "Choose Campfire if deep modular worldbuilding is itself a major part of your creative process. Choose Bookworm if you want the worldbuilding to stay comparatively lean and serve a manuscript-centered workflow."
        ]
      }
    ],
    table: {
      caption: "Bookworm vs Campfire Writing",
      columns: ["Area", "Bookworm", "Campfire"],
      rows: [
        ["Manuscript writing", "Yes", "Yes"],
        ["Worldbuilding depth", "Flexible / moderate", "Very deep"],
        ["Custom world categories", "Yes", "Module-driven"],
        ["Relationship mapping", "Graph", "Relationship tools"],
        ["Foreshadowing tracking", "Dedicated", "Can be modeled"],
        ["Continuity signals", "Story Health", "Primarily manual"],
        ["Planning hierarchy", "Acts → Chapters → Plot Points → Beats", "Module/timeline based"]
      ]
    },
    sources: [
      { label: "Campfire Writing", href: "https://www.campfirewriting.com/" }
    ],
    related: [
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/writing-software-for-fantasy-authors", label: "Fantasy writing software" },
      { href: "/story-bible-software", label: "Story bible software" }
    ]
  },
  {
    slug: "best-worldbuilding-software-for-writers",
    eyebrow: "Best worldbuilding software",
    title: "Best worldbuilding software for writers in 2026",
    description: "Compare Bookworm, Campfire, Plottr, Scrivener, and general note tools for fictional worlds, characters, relationships, timelines, lore, and manuscript integration.",
    intro: "Worldbuilding software ranges from deep encyclopedic systems to lightweight notes attached to a manuscript. The best tool depends on whether worldbuilding is the project itself or a support system for the novel.",
    intent: "comparison",
    sections: [
      {
        heading: "For very deep worldbuilding",
        body: [
          "Campfire is one of the strongest choices when you want many specialized worldbuilding modules and a large fictional universe needs its own infrastructure.",
          "A general knowledge tool such as Notion or Obsidian can also work well for writers who enjoy designing their own schemas and linking systems."
        ]
      },
      {
        heading: "For worldbuilding that stays close to the manuscript",
        body: [
          "Bookworm is aimed at writers who want enough world structure to preserve continuity without maintaining a separate encyclopedia. Locations, custom world categories, characters, events, relationships, and images can connect to the same book project.",
          "This makes it easier to move between world reference and actual chapters."
        ]
      },
      {
        heading: "For visual planning plus series reference",
        body: [
          "Plottr combines visual timelines with character sheets, worldbuilding, and a series bible. It is especially strong when plotting and reference material are closely tied to a visual outline."
        ]
      }
    ],
    table: {
      caption: "Worldbuilding tools by workflow",
      columns: ["Tool", "Best for", "World depth", "Manuscript integrated", "Visual relationships"],
      rows: [
        ["Bookworm", "Novel-centered connected worldbuilding", "Moderate / flexible", "Yes", "Yes"],
        ["Campfire", "Deep fictional universes", "Very deep", "Yes", "Yes"],
        ["Plottr", "Visual plot + series bible", "Moderate", "No full manuscript", "Some"],
        ["Scrivener", "Custom research documents", "DIY", "Yes", "Manual"],
        ["Notion/Obsidian", "Build-your-own knowledge system", "Unlimited / DIY", "Separate workflow", "Depends on setup"]
      ]
    },
    sources: [
      { label: "Campfire Writing", href: "https://www.campfirewriting.com/" },
      { label: "Plottr pricing/features", href: "https://plottr.com/pricing/" },
      { label: "Scrivener overview", href: "https://www.literatureandlatte.com/scrivener/overview" }
    ],
    related: [
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/writing-software-for-fantasy-authors", label: "Fantasy writing software" },
      { href: "/story-bible-software", label: "Story bible software" }
    ]
  },
  {
    slug: "best-book-writing-app",
    eyebrow: "Best book writing app",
    title: "Best book writing app for novelists in 2026",
    description: "Compare book writing apps by manuscript organization, planning, cloud access, offline use, character tools, worldbuilding, continuity, progress, collaboration, and publishing.",
    intro: "The best book writing app is the one that solves your specific long-form problem. A novelist managing 90,000 words needs different support from a writer formatting a finished manuscript or collaborating with an editor.",
    intent: "comparison",
    sections: [
      {
        heading: "If your priority is mature long-form drafting",
        body: [
          "Scrivener remains a strong desktop-first choice for organizing long manuscripts, research, notes, and compile workflows. NovelPad is compelling for writers who want desktop ownership and offline-first access.",
          "Dabble offers a smoother cloud-first writing experience with planning, goals, collaboration, and editing-oriented tools."
        ]
      },
      {
        heading: "If your priority is the story around the manuscript",
        body: [
          "Bookworm is built around the information that accumulates around a novel: plot structure, characters, worldbuilding, events, foreshadowing, relationships, continuity signals, images, progress, backups, and recovery.",
          "Its advantage is not a more complicated text editor; it is keeping those surrounding systems connected."
        ]
      },
      {
        heading: "If your priority is publishing",
        body: [
          "A product such as Reedsy Studio or Atticus may be a better fit when print/ebook formatting and publication-ready export are the primary concerns. Bookworm is currently more focused on planning, drafting, and story management."
        ]
      }
    ],
    related: [
      { href: "/book-writing-app", label: "Book writing app" },
      { href: "/best-novel-writing-software", label: "Best novel writing software" },
      { href: "/novel-writing-software-for-beginners", label: "Writing software for beginners" }
    ]
  }
];

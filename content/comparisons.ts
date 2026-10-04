import type { ContentPage } from "./types";

export const comparisonPages: ContentPage[] = [
  {
    slug: "alternatives/scrivener",
    eyebrow: "Scrivener alternative",
    title: "A Scrivener alternative for writers who want a connected story workspace",
    description: "Compare Bookworm and Scrivener for novel writing, planning, characters, worldbuilding, continuity, foreshadowing, relationships, and browser-based access.",
    intro: "Scrivener is a mature long-form writing application with a Binder, Corkboard, Outliner, research tools, and a flexible manuscript workflow. Bookworm takes a different approach: it is built around connected story data and a browser-based author workspace.",
    intent: "comparison",
    sections: [
      { heading: "Where Scrivener is strong", body: [
        "Scrivener is designed for long-form writing and gives authors several mature ways to organize a manuscript. Its Binder, Corkboard, and Outliner can all represent project structure, and research can sit beside the draft. It also offers a 30-day trial and desktop licenses for macOS and Windows.",
        "Writers who want a deeply established desktop writing environment, extensive compilation controls, and flexible document organization may prefer that model."
      ] },
      { heading: "Why a writer might choose Bookworm instead", body: [
        "Bookworm is being built for writers who want characters, locations, events, foreshadowing, worldbuilding, relationships, and Story Health to exist as connected parts of the project rather than primarily as documents or metadata around documents.",
        "Its Story Builder explicitly models Acts → Chapters → Plot Points → Beats, while the Relationships view and Story Health page are designed to reveal connections and possible continuity problems across the story."
      ], bullets: ["Browser-based workspace","Connected character, event, location, and clue data","Relationship graph","Foreshadowing tracking","Story Health continuity signals","Writing progress and goals"] },
      { heading: "Which is a better fit?", body: [
        "Choose based on workflow rather than a feature-count contest. Scrivener makes sense if you want a mature desktop-first long-form writing environment with powerful document organization. Bookworm is a better fit if your biggest pain is keeping the story's people, events, world, clues, relationships, and manuscript connected.",
        "Bookworm is still evolving, so writers who need a decades-mature production tool today should weigh that maturity difference alongside the newer connected-story approach."
      ] }
    ],
    sources: [
      { label: "Scrivener overview", href: "https://www.literatureandlatte.com/scrivener/overview" },
      { label: "Scrivener store", href: "https://www.literatureandlatte.com/store/scrivener" }
    ],
    related: [
      { href: "/compare/scrivener-vs-bookworm", label: "Bookworm vs Scrivener" },
      { href: "/novel-writing-software", label: "Novel writing software" },
      { href: "/story-bible-software", label: "Story bible software" }
    ]
  },
  {
    slug: "compare/scrivener-vs-bookworm",
    eyebrow: "Bookworm vs Scrivener",
    title: "Bookworm vs Scrivener: two different approaches to writing a novel",
    description: "A practical comparison of Bookworm and Scrivener for drafting, outlining, story data, worldbuilding, continuity, relationships, and platform workflow.",
    intro: "Bookworm and Scrivener both aim to help writers manage long projects, but they organize the problem differently. Scrivener centers a flexible document project. Bookworm centers a connected story workspace around the manuscript.",
    intent: "comparison",
    sections: [
      { heading: "Manuscript and structure", body: [
        "Scrivener lets writers break a manuscript into documents and folders, reorganize them through the Binder, Corkboard, or Outliner, and work non-linearly. That flexibility is one of its defining strengths.",
        "Bookworm uses chapters as the writing unit and adds a separate Story Builder hierarchy for acts, chapters, plot points, and beats. The intent is to make narrative structure explicit while still keeping drafting simple."
      ] },
      { heading: "Characters, world, and story relationships", body: [
        "Scrivener can store character sheets, research, notes, labels, custom metadata, and templates inside a project. Bookworm models characters, locations, events, clues, and world items as first-class entities that can connect to chapters and to one another.",
        "That distinction matters most for writers who want a relationship graph, dedicated foreshadowing records, or automated continuity-oriented signals."
      ] },
      { heading: "Desktop maturity vs connected web workflow", body: [
        "Scrivener has mature desktop applications for macOS and Windows plus an iOS version. Bookworm is browser-based, which prioritizes access and cloud-connected project data.",
        "There is no universal winner: the better choice depends on whether you value Scrivener's mature desktop document system or Bookworm's connected story model."
      ] }
    ],
    sources: [
      { label: "Scrivener overview", href: "https://www.literatureandlatte.com/scrivener/overview" },
      { label: "Scrivener store", href: "https://www.literatureandlatte.com/store/scrivener" }
    ],
    related: [
      { href: "/alternatives/scrivener", label: "Scrivener alternative" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/features", label: "Explore Bookworm features" }
    ]
  },
  {
    slug: "alternatives/dabble",
    eyebrow: "Dabble alternative",
    title: "A Dabble alternative focused on connected story structure",
    description: "Compare Bookworm and Dabble for novel drafting, plotting, characters, story notes, goals, cloud access, continuity, foreshadowing, and relationship mapping.",
    intro: "Dabble is a cloud-based novel writing platform with manuscript organization, a Plot Grid, story notes, character profiles, goals and stats, collaboration, versioning, and editing features. Bookworm overlaps with some of that workflow but emphasizes connected story entities and continuity.",
    intent: "comparison",
    sections: [
      { heading: "Where Dabble is strong", body: [
        "Dabble currently offers a polished cross-device writing workflow with cloud backup and sync, unlimited manuscripts on its Writer plan, a Plot Grid, story notebook, character profiles, goals and stats, co-authoring, versioning, and higher-tier editing features.",
        "Its current public pricing begins at $19 per month for the Writer plan, with a 14-day free trial and no card required."
      ] },
      { heading: "How Bookworm differs", body: [
        "Bookworm's strongest distinction is the way story information is modeled. Characters, locations, events, plot points, foreshadowing, images, and relationships can connect across the project. Story Health then uses that structure to surface continuity-oriented review signals.",
        "The Story Builder uses a visible Acts → Chapters → Plot Points → Beats hierarchy instead of a plot grid. Writers who think spatially in columns and nested story structure may prefer that approach."
      ] },
      { heading: "Which workflow fits you?", body: [
        "Dabble is attractive if you want a mature cloud writing product with built-in collaboration and editing-oriented features. Bookworm is aimed at writers whose bigger challenge is understanding and maintaining the network of story information around the draft.",
        "As Bookworm develops, the comparison will continue to change, so this page should be treated as a workflow comparison rather than a permanent feature checklist."
      ] }
    ],
    sources: [
      { label: "Dabble pricing", href: "https://www.dabblewriter.com/pricing" }
    ],
    related: [
      { href: "/compare/dabble-vs-bookworm", label: "Bookworm vs Dabble" },
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/story-planning-software", label: "Story planning software" }
    ]
  },
  {
    slug: "compare/dabble-vs-bookworm",
    eyebrow: "Bookworm vs Dabble",
    title: "Bookworm vs Dabble: connected story data or all-in-one cloud writing?",
    description: "Compare Bookworm and Dabble for manuscript writing, plotting, character notes, collaboration, goals, story relationships, foreshadowing, and continuity.",
    intro: "Both products are browser-friendly tools for novelists, but their priorities differ. Dabble offers a mature cloud writing suite with plotting, collaboration, and editing features. Bookworm is building a more explicit connected model of the story itself.",
    intent: "comparison",
    sections: [
      { heading: "Drafting and planning", body: [
        "Dabble combines manuscript organization with its Plot Grid and story notebook. Bookworm combines a chapter-based manuscript with Story Builder, where acts, chapters, plot points, and beats are visually nested.",
        "Both approaches support planning and drafting in one product; the difference is how much structure is exposed and how that structure connects to other story data."
      ] },
      { heading: "Story intelligence", body: [
        "Bookworm's dedicated Foreshadowing, Relationships, Events, and Story Health views are designed to make narrative connections visible. Story Health is not intended as an AI quality grade; it surfaces concrete signals such as unresolved threads, timeline conflicts, and broken references.",
        "Dabble's current strengths include collaboration, versioning, comments, read-to-me, grammar/style tools on higher plans, and a mature multi-device ecosystem."
      ] },
      { heading: "Pricing context", body: [
        "Dabble's public Writer plan is currently listed at $19 per month, with higher Author and Bestseller tiers. Bookworm's public pricing is still a launch target while the product is being tested, so price should not be the only basis for choosing between them yet."
      ] }
    ],
    sources: [
      { label: "Dabble pricing", href: "https://www.dabblewriter.com/pricing" }
    ],
    related: [
      { href: "/alternatives/dabble", label: "Dabble alternative" },
      { href: "/novel-writing-software", label: "Novel writing software" },
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" }
    ]
  },
  {
    slug: "alternatives/novelpad",
    eyebrow: "NovelPad alternative",
    title: "A NovelPad alternative for writers who want deeper story connections",
    description: "Compare Bookworm and NovelPad for novel writing, planning, cloud access, story boards, characters, relationships, foreshadowing, continuity, and progress.",
    intro: "NovelPad offers web and desktop novel writing with cloud sync, sharing, offline desktop options, and multiple ownership models. Bookworm focuses more heavily on connected planning, relationship mapping, foreshadowing, and continuity-oriented story data.",
    intent: "comparison",
    sections: [
      { heading: "Where NovelPad is strong", body: [
        "NovelPad currently offers a $15 per month Pro Cloud subscription, an $89 desktop-only purchase, and a $349 lifetime option that includes two years of cloud service. Its positioning strongly emphasizes ownership, offline writing, cloud sync when wanted, and sharing with beta readers.",
        "Writers who care most about a native desktop application, offline-first access, or a one-time purchase have clear reasons to consider NovelPad."
      ] },
      { heading: "Why Bookworm may fit a different writer", body: [
        "Bookworm is web-first and is designed around the relationships among manuscript chapters, characters, locations, events, plot points, beats, clues, and world information.",
        "Its differentiators include the Relationships graph, dedicated Foreshadowing page, flexible world categories, Story Health signals, and a structured Story Builder."
      ] },
      { heading: "Choose based on the hard problem", body: [
        "If the hardest part of your process is reliable offline drafting and ownership of a desktop application, NovelPad's model is compelling. If the hardest part is remembering how a large story fits together, Bookworm's connected data model may be more useful."
      ] }
    ],
    sources: [
      { label: "NovelPad pricing", href: "https://novelpad.co/pricing" }
    ],
    related: [
      { href: "/novel-writing-software", label: "Novel writing software" },
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/story-continuity-checker", label: "Story continuity checker" }
    ]
  }
];

import type { ContentPage } from "./types";

export const templatePages: ContentPage[] = [
  {
    slug: "templates/story-bible",
    eyebrow: "Free writing template",
    title: "Story bible template for novels and series",
    description: "A practical story bible template for characters, locations, world rules, organizations, terminology, chronology, relationships, and continuity.",
    intro: "Use this as a starting structure, not a checklist you must complete. Keep only the fields your story actually needs.",
    intent: "guide",
    sections: [
      { heading: "Core story bible template", body: [
        "Create one source of truth for details that would cause continuity problems if they changed accidentally."
      ], bullets: [
        "Characters: name, role, age, appearance details that matter, goals, fears, loyalties, secrets",
        "Locations: name, physical traits, who controls it, travel constraints, scenes that occur there",
        "Organizations/factions: purpose, leadership, members, allies, rivals, rules",
        "World rules: magic, technology, law, social customs, limitations, costs",
        "Terminology: invented words, titles, place names, spellings, pronunciation notes",
        "Chronology: historical events, current timeline, ages, dates, cause-and-effect dependencies",
        "Relationships: family, romance, rivalry, debt, command, loyalty, secrecy",
        "Important objects: ownership, origin, powers/limitations, where they currently are"
      ]},
      { heading: "What not to put in the story bible", body: [
        "Avoid copying chapter summaries, scene prose, or speculative ideas that are not yet canon. Those belong in the outline or notes.",
        "The bible should answer 'what is true?' while the outline answers 'what happens?'"
      ]},
      { heading: "Revision checklist", body: [
        "After major structural edits, review the story bible against the manuscript for names, ages, locations, chronology, relationships, world rules, and promises that changed."
      ]}
    ],
    related: [
      { href: "/guides/what-is-a-story-bible", label: "What is a story bible?" },
      { href: "/guides/story-bible-vs-outline", label: "Story bible vs outline" },
      { href: "/story-bible-software", label: "Story bible software" }
    ]
  },
  {
    slug: "templates/character-profile",
    eyebrow: "Free writing template",
    title: "Character profile template that focuses on story-relevant details",
    description: "A practical character profile template for motivation, conflict, relationships, continuity, knowledge, arc, and appearances.",
    intro: "A character profile should help you write decisions and scenes. Skip trivia that never affects the story.",
    intent: "guide",
    sections: [
      { heading: "Character profile template", body: ["Record the details most likely to influence choices or create continuity issues."], bullets: [
        "Name / aliases / titles",
        "Narrative role",
        "External goal",
        "Internal need",
        "Primary fear",
        "Core belief or misconception",
        "Strengths and useful skills",
        "Weaknesses / blind spots",
        "Important background facts",
        "Appearance details that matter",
        "Secrets and who knows them",
        "Key relationships and current state",
        "What they know at the start",
        "Major arc turning points",
        "Ending state"
      ]},
      { heading: "Relationship notes", body: [
        "For every important relationship, track what each person wants from the other, the source of tension or trust, and the event that last changed the relationship."
      ]},
      { heading: "Continuity notes", body: [
        "Record details readers are likely to remember: injuries, possessions, promises, ages, family ties, knowledge, travel, and recurring habits."
      ]}
    ],
    related: [
      { href: "/guides/what-is-a-character-bible", label: "What is a character bible?" },
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/character-relationship-mapper-for-writers", label: "Relationship mapper" }
    ]
  },
  {
    slug: "templates/character-arc",
    eyebrow: "Free writing template",
    title: "Character arc template for tracking change across a novel",
    description: "Track a character's starting state, pressure points, decisions, setbacks, relationships, turning points, and ending state.",
    intro: "A useful character arc template tracks decisions under pressure, not a mood for every chapter.",
    intent: "guide",
    sections: [
      { heading: "Character arc template", body: ["Use these checkpoints to make the arc causal and visible."], bullets: [
        "Starting belief / worldview",
        "Starting external goal",
        "Starting relationship state",
        "What the character avoids or fears",
        "Inciting pressure",
        "First major compromise or commitment",
        "Midpoint realization or escalation",
        "Major setback",
        "Lowest point / crisis choice",
        "Final decisive choice",
        "Ending belief / worldview",
        "Ending relationship state",
        "What changed and what did not"
      ]},
      { heading: "Arc quality check", body: [
        "For each major change, identify the event or decision that caused it. If the ending state appears without enough prior pressure, add or strengthen the steps that make the change believable."
      ]}
    ],
    related: [
      { href: "/guides/what-is-a-character-arc", label: "What is a character arc?" },
      { href: "/guides/how-to-track-character-arcs", label: "How to track character arcs" },
      { href: "/writing-software-for-romance-authors", label: "Romance writing software" }
    ]
  },
  {
    slug: "templates/novel-outline",
    eyebrow: "Free writing template",
    title: "Flexible novel outline template: acts, chapters, plot points, and beats",
    description: "A flexible novel outline template that works without forcing your story into a rigid beat sheet.",
    intro: "Start broad, then add detail only where uncertainty is blocking the draft.",
    intent: "guide",
    sections: [
      { heading: "Novel outline template", body: ["Build the outline in layers."], bullets: [
        "Premise: protagonist + goal + opposition + stakes",
        "Opening state: what normal looks like before the main disruption",
        "Inciting incident",
        "First major commitment / point of no return",
        "Act or part 1 chapters",
        "Midpoint turn",
        "Act or part 2 chapters",
        "Major setback / crisis",
        "Final act chapters",
        "Climax / decisive confrontation",
        "Resolution / new state"
      ]},
      { heading: "Chapter-level template", body: ["For each chapter, record only what helps you write."], bullets: [
        "Chapter purpose",
        "POV character",
        "Location",
        "Entry state",
        "Primary conflict",
        "Plot point advanced",
        "Important beats",
        "Clue / promise / payoff",
        "Exit state"
      ]},
      { heading: "Keep the outline flexible", body: [
        "Treat the outline as a current model of the story rather than a contract. Update it when the manuscript discovers a better version."
      ]}
    ],
    related: [
      { href: "/novel-outline-software", label: "Novel outline software" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" }
    ]
  },
  {
    slug: "templates/chapter-plan",
    eyebrow: "Free writing template",
    title: "Chapter planning template for novels",
    description: "A concise chapter planning template covering purpose, POV, location, conflict, plot movement, beats, clues, characters, and exit state.",
    intro: "A chapter plan should answer why the chapter exists and what changes by the end.",
    intent: "guide",
    sections: [
      { heading: "Chapter plan template", body: ["Use this before drafting or during revision."], bullets: [
        "Chapter number / working title",
        "POV character",
        "Location and time",
        "Chapter purpose in one sentence",
        "What is true at the beginning",
        "Immediate character goal",
        "Primary obstacle or conflict",
        "Major plot point or subplot advanced",
        "Important beats",
        "Characters present",
        "Foreshadowing or clue planted",
        "Payoff or reveal delivered",
        "What is true at the end",
        "Revision notes"
      ]},
      { heading: "One-sentence test", body: [
        "If you cannot explain the chapter's job in one sentence, the chapter may need a clearer purpose—or you may simply be writing a discovery draft and should plan it afterward."
      ]}
    ],
    related: [
      { href: "/chapter-planning-software", label: "Chapter planning software" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" },
      { href: "/guides/scene-vs-chapter", label: "Scene vs chapter" }
    ]
  },
  {
    slug: "templates/foreshadowing",
    eyebrow: "Free writing template",
    title: "Foreshadowing tracker template for setup and payoff",
    description: "Track each clue, promise, setup, reinforcement, misdirection, and payoff across a novel.",
    intro: "The purpose of a foreshadowing tracker is to make every setup visible during revision without making clues obvious on the page.",
    intent: "guide",
    sections: [
      { heading: "Foreshadowing tracker template", body: ["Create one row or record for each meaningful promise."], bullets: [
        "Clue / setup name",
        "What appears on the page",
        "First chapter introduced",
        "Characters who notice it",
        "What readers may infer",
        "What it actually means",
        "Reinforcement chapters",
        "Misdirection, if any",
        "Connected event / reveal",
        "Payoff chapter",
        "Resolved? yes / no",
        "Revision notes"
      ]},
      { heading: "Final-draft audit", body: [
        "Look in both directions: every major reveal should have enough prior support, and every planted clue should still point to something that exists in the current draft."
      ]}
    ],
    related: [
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/guides/how-to-track-foreshadowing", label: "How to track foreshadowing" },
      { href: "/writing-software-for-mystery-writers", label: "Mystery writing software" }
    ]
  },
  {
    slug: "templates/worldbuilding",
    eyebrow: "Free writing template",
    title: "Worldbuilding template for fiction writers",
    description: "A practical worldbuilding template for places, systems, cultures, factions, history, terminology, rules, and story consequences.",
    intro: "Build only what affects characters, choices, continuity, atmosphere, or plot.",
    intent: "guide",
    sections: [
      { heading: "Worldbuilding template", body: ["Use categories selectively based on genre and story needs."], bullets: [
        "Places and geography",
        "Travel and distance constraints",
        "Government and political power",
        "Organizations and factions",
        "Economy and resources",
        "Technology or magic systems",
        "Rules, costs, and limitations",
        "Religion / belief systems",
        "Culture and social expectations",
        "History and major past events",
        "Languages and terminology",
        "Education / professions / institutions",
        "Conflict between groups",
        "How the world affects the protagonist"
      ]},
      { heading: "The consequence test", body: [
        "For each worldbuilding detail, ask what it changes for a character or scene. Details that create constraints, opportunities, conflict, or meaning deserve the most attention."
      ]}
    ],
    related: [
      { href: "/guides/what-is-worldbuilding", label: "What is worldbuilding?" },
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/writing-software-for-fantasy-authors", label: "Fantasy writing software" }
    ]
  },
  {
    slug: "templates/plot-thread-tracker",
    eyebrow: "Free writing template",
    title: "Plot thread tracker template for unresolved promises and subplots",
    description: "Track open questions, goals, conflicts, clues, subplots, progression, and resolution across a novel.",
    intro: "Track anything the story has taught a careful reader to expect an answer or consequence for later.",
    intent: "guide",
    sections: [
      { heading: "Plot thread template", body: ["Create a record for each meaningful open thread."], bullets: [
        "Thread name",
        "Type: goal / mystery / relationship / conflict / promise / subplot",
        "Chapter opened",
        "Characters involved",
        "What the reader expects",
        "Events that advance the thread",
        "Complications",
        "Related clues or foreshadowing",
        "Current state",
        "Planned payoff or resolution",
        "Resolution chapter",
        "Intentionally left open? yes / no"
      ]},
      { heading: "Revision check", body: [
        "After moving or deleting chapters, review every open thread. Structural edits commonly leave behind setups without payoffs and payoffs without enough setup."
      ]}
    ],
    related: [
      { href: "/plot-thread-tracker", label: "Plot thread tracker" },
      { href: "/guides/what-is-a-subplot", label: "What is a subplot?" },
      { href: "/story-continuity-checker", label: "Story continuity checker" }
    ]
  }
];

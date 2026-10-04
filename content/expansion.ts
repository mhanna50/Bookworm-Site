import type { ContentPage } from "./types";

export const expansionPages: ContentPage[] = [
  {
    slug: "best-novel-writing-software",
    eyebrow: "Best novel writing software",
    title: "Best novel writing software in 2026: which tool fits your workflow?",
    description: "Compare Bookworm, Scrivener, Dabble, NovelPad, Plottr, Campfire, and Reedsy Studio by drafting, planning, worldbuilding, continuity, collaboration, offline access, and price model.",
    intro: "There is no single best novel writing app for every writer. The useful question is which part of your process is hardest: drafting, visual plotting, worldbuilding, continuity, collaboration, formatting, or staying organized across a large manuscript.",
    intent: "comparison",
    sections: [
      {
        heading: "The short version",
        body: [
          "Scrivener remains one of the strongest choices for a mature desktop-first manuscript workflow. Dabble is a polished cloud writing suite with planning and collaboration. NovelPad is attractive for writers who value desktop ownership and offline use. Plottr is excellent when visual outlining is the main problem. Campfire is strongest when deep worldbuilding modules matter most. Reedsy Studio is compelling for writers who want a free web-based drafting and publishing workflow.",
          "Bookworm is aimed at a different pain point: keeping the manuscript, plot, characters, world, events, clues, relationships, continuity signals, and progress connected inside one browser-based workspace."
        ]
      },
      {
        heading: "Choose based on your bottleneck",
        body: [
          "A feature list is less useful than identifying the thing that repeatedly slows you down. If compile and document control are the issue, Scrivener may fit. If you mainly want a visual timeline, Plottr may be enough. If your book contains dozens of characters, layered world rules, unresolved clues, and continuity problems, Bookworm's connected story model becomes more relevant.",
          "The right tool should remove friction from the part of writing you actually struggle with rather than adding a new system to maintain."
        ]
      },
      {
        heading: "Where Bookworm fits",
        body: [
          "Bookworm is strongest for writers who want story planning and story reference data to stay close to the manuscript. It models characters, locations, events, foreshadowing, images, and relationships as reusable story entities and adds Story Health signals for continuity-oriented review.",
          "It is not currently trying to replace every specialized strength of mature competitors. Writers who need advanced book formatting, a mature native desktop ecosystem, or extensive collaboration may prefer another tool."
        ]
      }
    ],
    table: {
      caption: "Novel writing software at a glance",
      columns: ["Tool", "Best for", "Drafting", "Planning", "World/story data", "Offline"],
      rows: [
        ["Bookworm", "Connected story planning + continuity", "Yes", "Strong", "Strong", "Web-first"],
        ["Scrivener", "Mature desktop long-form writing", "Yes", "Strong", "Flexible documents/metadata", "Yes"],
        ["Dabble", "Cloud drafting + planning", "Yes", "Strong", "Moderate", "Desktop apps"],
        ["NovelPad", "Ownership + offline drafting", "Yes", "Story boards", "Moderate", "Yes"],
        ["Plottr", "Visual outlining", "No full manuscript", "Very strong", "Strong series bible", "Yes"],
        ["Campfire", "Deep worldbuilding", "Yes", "Strong", "Very strong", "Partial/desktop"],
        ["Reedsy Studio", "Free drafting + publishing", "Yes", "Basic", "Basic", "No"]
      ]
    },
    sources: [
      { label: "Scrivener pricing", href: "https://www.literatureandlatte.com/why-cant-you-pay-once-for-everything" },
      { label: "Dabble pricing", href: "https://www.dabblewriter.com/pricing" },
      { label: "NovelPad pricing", href: "https://novelpad.co/" },
      { label: "Plottr pricing", href: "https://plottr.com/pricing/" }
    ],
    related: [
      { href: "/novel-writing-software", label: "Novel writing software" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/alternatives/scrivener", label: "Scrivener alternative" }
    ]
  },
  {
    slug: "best-story-planning-software",
    eyebrow: "Best story planning software",
    title: "Best story planning software in 2026: pick the planning model that matches you",
    description: "Compare Bookworm, Plottr, Scrivener, Dabble, and Campfire for visual structure, manuscript integration, worldbuilding, character tracking, relationships, and continuity.",
    intro: "Story-planning tools disagree about what planning should look like. Some use timelines, some grids, some document outlines, some worldbuilding modules, and some connected story entities. The best choice depends on how you think.",
    intent: "comparison",
    sections: [
      {
        heading: "If you think in timelines",
        body: [
          "Plottr is purpose-built around visual timelines and templates. It is a strong choice when you want to see plotlines, character arcs, and scene order spatially before drafting elsewhere.",
          "Bookworm is less template-driven. Its Story Builder uses Acts → Chapters → Plot Points → Beats and keeps events, characters, clues, locations, and manuscript context connected around that structure."
        ]
      },
      {
        heading: "If you plan while drafting",
        body: [
          "Scrivener and Dabble both make sense when planning needs to sit directly beside manuscript writing. Scrivener does this through a flexible project/document model; Dabble combines a manuscript with its Plot Grid and story notes.",
          "Bookworm also keeps planning beside the manuscript, but treats story entities and continuity signals as first-class parts of the workspace rather than only notes around the draft."
        ]
      },
      {
        heading: "If worldbuilding is the hard part",
        body: [
          "Campfire is one of the strongest specialist choices when deep worldbuilding modules are the priority. Bookworm takes a lighter approach: flexible categories, editable fields, connected locations and story entities, and images tied to narrative context.",
          "That makes Bookworm more suitable for writers who want the world to stay connected to the novel without turning worldbuilding into a second project."
        ]
      }
    ],
    table: {
      caption: "Story-planning approaches",
      columns: ["Tool", "Planning model", "Manuscript", "Worldbuilding", "Relationships", "Continuity signals"],
      rows: [
        ["Bookworm", "Acts → Chapters → Plot Points → Beats", "Yes", "Flexible", "Graph", "Yes"],
        ["Plottr", "Visual timelines + templates", "No full manuscript", "Series bible", "Character tools", "No"],
        ["Scrivener", "Binder/Corkboard/Outliner", "Yes", "Document-based", "Custom/manual", "Manual"],
        ["Dabble", "Plot Grid", "Yes", "Story notes", "Character profiles", "Limited"],
        ["Campfire", "Modules + timelines", "Yes", "Deep", "Yes", "Manual"]
      ]
    },
    sources: [
      { label: "Plottr pricing/features", href: "https://plottr.com/pricing/" },
      { label: "Scrivener overview", href: "https://www.literatureandlatte.com/scrivener/overview" },
      { label: "Dabble pricing", href: "https://www.dabblewriter.com/pricing" },
      { label: "Campfire", href: "https://www.campfirewriting.com/" }
    ],
    related: [
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/plotting-software-for-novelists", label: "Plotting software" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" }
    ]
  },
  {
    slug: "writing-software-for-fantasy-authors",
    eyebrow: "Fantasy writing software",
    title: "Writing software for fantasy authors who need the world to stay consistent",
    description: "Organize a fantasy manuscript, cast, locations, factions, lore, magic rules, events, clues, relationships, images, and continuity in Bookworm.",
    intro: "Fantasy novels create an unusually large memory problem. A manuscript can contain invented geography, political structures, magic rules, terminology, long timelines, large casts, and promises that pay off hundreds of pages later.",
    intent: "commercial",
    sections: [
      {
        heading: "Fantasy needs more than a manuscript pane",
        body: [
          "A fantasy writing tool becomes useful when it can answer questions such as: Which characters belong to this faction? What rule limits this magic? Where was this place first introduced? Which prophecy clue has already appeared? Which chapter contradicts a world fact?",
          "Bookworm keeps those details in connected story entities so they can be referenced from chapters, events, relationships, and world categories."
        ]
      },
      {
        heading: "Keep worldbuilding subordinate to the story",
        body: [
          "Fantasy writers can easily spend more time designing a world than writing in it. Bookworm's world system is intentionally flexible rather than encyclopedic by default. Rename categories, rename fields, and only add structure the book actually needs.",
          "The goal is a usable source of truth, not the largest possible lore database."
        ]
      },
      {
        heading: "Continuity becomes more valuable as complexity grows",
        body: [
          "Story Health is particularly useful in complex speculative fiction because changes ripple. Timeline conflicts, broken references, characters disappearing for long stretches, unassigned events, and unresolved threads are all easier to miss when the world is large.",
          "Those signals remain prompts for the writer, not automatic claims that the story is wrong."
        ]
      }
    ],
    related: [
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/how-to-track-story-continuity", label: "Track story continuity" }
    ]
  },
  {
    slug: "writing-software-for-mystery-writers",
    eyebrow: "Mystery writing software",
    title: "Writing software for mystery writers tracking clues, suspects, and reveals",
    description: "Use Bookworm to organize mystery clues, suspects, events, timelines, relationships, foreshadowing, chapters, reveals, and continuity.",
    intro: "Mystery writers have a special planning problem: the reader must receive enough information for the ending to feel fair without receiving so much that the solution becomes obvious.",
    intent: "commercial",
    sections: [
      {
        heading: "Track clue → interpretation → payoff",
        body: [
          "A clue is not useful to the author merely because it exists. Track where it appears, what the reader is likely to infer from it, what it actually means, and which later event or reveal pays it off.",
          "Bookworm's dedicated Foreshadowing records can connect clues to chapters, plot points, and events instead of burying them inside outline notes."
        ]
      },
      {
        heading: "Relationships matter as much as clues",
        body: [
          "Suspects become convincing when motives, loyalties, secrets, and shared history overlap. A relationship graph can make hidden social structure easier to see while planning a mystery with a large cast.",
          "Locations and events can sit in that same network, which helps when access, opportunity, and timing matter to the solution."
        ]
      },
      {
        heading: "Continuity is part of fairness",
        body: [
          "Mysteries are especially vulnerable to timeline mistakes and forgotten setup. If a suspect could not physically be in a location, or if a reveal depends on a clue removed during revision, the plot can stop working.",
          "Story Health and an explicit event structure create useful review points before a final draft."
        ]
      }
    ],
    related: [
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/guides/how-to-track-foreshadowing", label: "How to track foreshadowing" }
    ]
  },
  {
    slug: "writing-software-for-romance-authors",
    eyebrow: "Romance writing software",
    title: "Writing software for romance authors tracking relationship change across the book",
    description: "Plan romance beats, character arcs, relationships, chapters, events, conflict, foreshadowing, and writing progress in Bookworm.",
    intro: "A romance plot is driven by relationship change. The useful planning question is not simply which beat comes next, but what each scene changes about trust, attraction, conflict, vulnerability, or commitment.",
    intent: "commercial",
    sections: [
      {
        heading: "Track the relationship as a changing state",
        body: [
          "A romance can feel repetitive when scenes create chemistry without changing the relationship. Track what each major chapter or event changes: a new vulnerability, a misunderstanding, a boundary, a commitment, or a loss of trust.",
          "Bookworm's character relationships and chapter connections make that evolution easier to review across the whole manuscript."
        ]
      },
      {
        heading: "Use beats without letting them become a checklist",
        body: [
          "Romance frameworks can be valuable diagnostics. They help identify long stretches with no escalation or an emotional turn that has not been earned. They work best as flexible landmarks rather than mandatory scene orders.",
          "Bookworm's Plot Points and Beats can hold your chosen structure without forcing a specific romance template."
        ]
      },
      {
        heading: "Track subplots without losing the central arc",
        body: [
          "Family, career, friendship, mystery, fantasy, and external stakes often run alongside the romance. Separate plot points and connected events let those threads stay visible while the relationship remains the primary arc."
        ]
      }
    ],
    related: [
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/guides/how-to-track-character-arcs", label: "Track character arcs" },
      { href: "/chapter-planning-software", label: "Chapter planning software" }
    ]
  },
  {
    slug: "novel-writing-software-for-beginners",
    eyebrow: "Writing software for beginners",
    title: "Novel writing software for beginners: start simple, add structure when you need it",
    description: "A beginner-friendly guide to choosing novel writing software without overcomplicating your first draft.",
    intro: "New writers are often sold a complete writing system before they know which problems they actually have. The safest approach is to start with a manuscript and add structure only when the project creates a reason for it.",
    intent: "commercial",
    sections: [
      {
        heading: "You need fewer features than you think",
        body: [
          "For a first novel, the essentials are a reliable place to write, chapter organization, backups, and a simple way to store important notes. Plotting systems, relationship maps, and detailed world databases become useful only if your story needs them.",
          "A tool is beginner-friendly when advanced features can remain invisible until they solve a real problem."
        ]
      },
      {
        heading: "Avoid rebuilding your system halfway through",
        body: [
          "The challenge with starting in a plain document is not that plain documents are bad. It is that later you may need characters, timelines, clues, images, chapter plans, and progress tracking, then end up maintaining several separate tools.",
          "Bookworm is designed so you can start with the manuscript and grow into the rest of the workspace over time."
        ]
      },
      {
        heading: "What to evaluate during a trial",
        body: [
          "Write a real chapter. Create two characters. Move a chapter. Add one plot point. Find a note you created yesterday. Export or inspect recovery options. Those tests tell you more than watching a polished feature demo.",
          "Do not choose based on the number of templates included. Choose based on whether the software gets out of your way."
        ]
      }
    ],
    related: [
      { href: "/book-writing-app", label: "Book writing app" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" },
      { href: "/best-novel-writing-software", label: "Compare writing software" }
    ]
  },
  {
    slug: "character-relationship-mapper-for-writers",
    eyebrow: "Character relationship mapper",
    title: "Character relationship mapping for novels with complicated casts",
    description: "Map character, location, and event relationships in Bookworm and keep the graph connected to the rest of your novel.",
    intro: "A relationship map becomes useful when a cast is too interconnected to understand as a list. It should answer who is connected, why the connection matters, and which events or places created that relationship.",
    intent: "commercial",
    sections: [
      {
        heading: "Map more than friend vs enemy",
        body: [
          "Useful relationships include family, romance, rivalry, debt, loyalty, command, secrecy, mentorship, political alliance, shared history, and temporary cooperation. The label matters less than the narrative consequence.",
          "Bookworm's relationship graph can include characters, locations, and events so the network reflects the story rather than only the cast."
        ]
      },
      {
        heading: "Keep the graph readable",
        body: [
          "Large relationship maps become useless when every node overlaps. Bookworm automatically creates connections from story relationships and uses layout/focus behavior to make dense networks easier to inspect.",
          "The goal is not to display every possible link at once. It is to reveal the subset that helps answer the current story question."
        ]
      },
      {
        heading: "Use relationship change during revision",
        body: [
          "A relationship map is especially valuable after structural revisions. If an event is cut, ask which relationships depended on it. If two characters reconcile, verify that the change has enough prior pressure and page time to feel earned."
        ]
      }
    ],
    related: [
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/guides/how-to-organize-novel-characters", label: "Organize novel characters" },
      { href: "/guides/how-to-track-character-arcs", label: "Track character arcs" }
    ]
  },
  {
    slug: "plot-thread-tracker",
    eyebrow: "Plot thread tracker",
    title: "Track plot threads so promises do not disappear during revision",
    description: "Track unresolved plot threads, clues, events, characters, chapter connections, and payoffs in Bookworm.",
    intro: "A plot thread is an open question, goal, conflict, promise, mystery, or relationship tension that the story has asked the reader to remember. Long novels accumulate more of them than most writers can reliably hold in memory.",
    intent: "commercial",
    sections: [
      {
        heading: "Define what makes a thread open",
        body: [
          "A thread begins when the story creates an expectation that something will change, be answered, be resolved, or be paid off later. That could be a missing person, a promised confrontation, an unpaid debt, a secret, a romantic tension, or a political threat.",
          "The key is reader expectation: if a careful reader would reasonably wait for an answer, the thread deserves tracking."
        ]
      },
      {
        heading: "Connect threads to concrete story events",
        body: [
          "Threads become easier to manage when linked to the chapters, events, characters, or clues that advance them. Otherwise they remain vague reminders such as 'resolve king subplot.'",
          "Bookworm separates events and foreshadowing while Story Health can surface unresolved threads for review."
        ]
      },
      {
        heading: "Review after structural edits",
        body: [
          "Moving or deleting chapters often breaks plot-thread progression. A setup can remain after its payoff is gone, or a payoff can survive after the setup was cut.",
          "Run a thread review after major restructuring and before final line editing."
        ]
      }
    ],
    related: [
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/guides/how-to-track-story-continuity", label: "Track continuity" }
    ]
  },
  {
    slug: "novel-outline-software",
    eyebrow: "Novel outline software",
    title: "Novel outline software that can grow with the draft",
    description: "Outline acts, chapters, plot points, beats, events, characters, and story connections in Bookworm.",
    intro: "A useful novel outline should be detailed enough to remove uncertainty but flexible enough to survive contact with the manuscript.",
    intent: "commercial",
    sections: [
      {
        heading: "Outline in layers",
        body: [
          "Begin with the few largest structural turns. Then create chapters between them. Add plot points and beats only where you need more certainty. This layered approach keeps the outline readable while still allowing detailed planning.",
          "Bookworm's Story Builder mirrors that hierarchy with Acts → Chapters → Plot Points → Beats."
        ]
      },
      {
        heading: "Keep events separate from chapter order",
        body: [
          "A chapter is a unit of reader experience. An event is something that happens in the story world. Those are often related but not identical, especially with flashbacks, parallel viewpoints, or off-page events.",
          "Keeping them separate makes timelines easier to reason about."
        ]
      },
      {
        heading: "Let the outline change",
        body: [
          "Writers frequently discover better versions of the story while drafting. Good outline software should make rearranging and renaming easier than defending the original plan."
        ]
      }
    ],
    related: [
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/plotting-software-for-novelists", label: "Plotting software" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" }
    ]
  },
  {
    slug: "guides/what-is-a-story-bible",
    eyebrow: "Writing reference",
    title: "What is a story bible?",
    description: "A story bible is a reference source for the facts your novel establishes: characters, locations, world rules, timeline, relationships, terminology, and continuity.",
    intro: "A story bible is the source of truth for what is already established in a fictional world. An outline records what happens; a story bible records what is true.",
    intent: "guide",
    sections: [
      {
        heading: "The short definition",
        body: [
          "A story bible is an organized reference containing the facts a writer needs to keep consistent across a novel or series. Typical entries include character details, places, organizations, world rules, invented terms, relationships, chronology, and recurring objects.",
          "Its purpose is retrieval. You should be able to answer a continuity question faster from the bible than by searching the manuscript."
        ]
      },
      {
        heading: "Story bible vs outline",
        body: [
          "An outline is sequential: it tells you what happens and in what narrative order. A story bible is referential: it tells you what the story has established as true.",
          "Mixing the two often creates a huge document that is bad at both jobs. Keep planned narrative movement separate from canonical reference information, then connect them where useful."
        ]
      },
      {
        heading: "What belongs in one?",
        body: [
          "Include facts that would make a later scene feel wrong if contradicted. That usually means character identity and relationships, locations, world rules, dates and event order, organizations, terminology, important objects, and knowledge that different characters possess.",
          "Do not add a field merely because a template offers it. A useful story bible is intentionally incomplete."
        ]
      }
    ],
    related: [
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/how-to-build-a-story-bible", label: "How to build a story bible" },
      { href: "/guides/how-to-track-story-continuity", label: "Track story continuity" }
    ]
  },
  {
    slug: "guides/plot-point-vs-beat",
    eyebrow: "Writing reference",
    title: "Plot point vs beat: what is the difference?",
    description: "A plot point changes the direction or state of the story; a beat is a smaller action, decision, revelation, or reaction that helps produce that change.",
    intro: "The easiest distinction is scale. A plot point changes what the story is doing. A beat is one of the smaller steps that makes that change happen.",
    intent: "guide",
    sections: [
      {
        heading: "What is a plot point?",
        body: [
          "A plot point is a meaningful turn that changes the situation, direction, stakes, or available choices. The protagonist accepts the mission, learns the trusted ally is lying, loses access to the safe route, or makes a decision that closes off the old life.",
          "A plot point should matter beyond the immediate moment. If you could remove it without changing later decisions, it may be a beat rather than a major turn."
        ]
      },
      {
        heading: "What is a beat?",
        body: [
          "A beat is a smaller unit of story movement: an action, reaction, realization, exchange, discovery, or decision. Several beats can work together to create one plot point.",
          "For example: the protagonist notices a missing document, confronts a friend, catches a contradiction, then decides not to trust them. Those are beats; the loss of trust may be the plot point."
        ]
      },
      {
        heading: "How to use both in an outline",
        body: [
          "Keep plot points visible at a higher level so you can scan the shape of the novel. Nest beats underneath only when a chapter needs more planning detail.",
          "That is why Bookworm's Story Builder keeps Plot Points and Beats at separate levels."
        ]
      }
    ],
    related: [
      { href: "/plotting-software-for-novelists", label: "Plotting software" },
      { href: "/novel-outline-software", label: "Novel outline software" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" }
    ]
  },
  {
    slug: "guides/what-is-foreshadowing",
    eyebrow: "Writing reference",
    title: "What is foreshadowing in fiction?",
    description: "Foreshadowing is setup that creates an expectation, pattern, or clue whose meaning becomes clearer after a later event or reveal.",
    intro: "Foreshadowing is information placed earlier in a story that helps a later development feel prepared rather than arbitrary. It can be obvious, subtle, misleading, symbolic, or almost invisible on a first read.",
    intent: "guide",
    sections: [
      {
        heading: "Foreshadowing is a promise",
        body: [
          "When a story draws attention to an unusual object, rule, fear, inconsistency, line of dialogue, or unanswered question, readers may treat it as a promise that the detail will matter later.",
          "The strength of that promise depends on emphasis. A lightly mentioned fact can create subtle setup; repeated emphasis can become an explicit expectation."
        ]
      },
      {
        heading: "Foreshadowing vs clue",
        body: [
          "A clue is evidence that can help the reader infer something. Foreshadowing is broader: it can establish mood, danger, character change, thematic patterns, or future consequences without giving the reader a solvable fact.",
          "In mysteries, a detail can be both a clue and foreshadowing."
        ]
      },
      {
        heading: "Why tracking matters",
        body: [
          "Revisions often remove payoffs while leaving setup behind, or add a large reveal without enough prior support. Tracking setup and payoff together makes that easier to audit.",
          "Bookworm gives foreshadowing its own record so clues can connect to chapters, events, and plot points."
        ]
      }
    ],
    related: [
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/guides/how-to-track-foreshadowing", label: "How to track foreshadowing" },
      { href: "/writing-software-for-mystery-writers", label: "Software for mystery writers" }
    ]
  },
  {
    slug: "guides/what-is-a-character-arc",
    eyebrow: "Writing reference",
    title: "What is a character arc?",
    description: "A character arc is the pattern of meaningful internal or relational change a character undergoes because of pressure, decisions, consequences, and experience.",
    intro: "A character arc is not simply a list of emotions. It is the difference between who a character is at the beginning and who they become—or refuse to become—by the end.",
    intent: "guide",
    sections: [
      {
        heading: "What creates an arc?",
        body: [
          "An arc forms when the story repeatedly pressures a character's beliefs, goals, fears, loyalties, or relationships and forces meaningful choices. Those choices create consequences that make later decisions different.",
          "The most convincing change is causal: the reader can point to experiences and decisions that made the ending state possible."
        ]
      },
      {
        heading: "Not every arc is positive",
        body: [
          "Characters can grow, decline, remain fundamentally stable while changing the world around them, become disillusioned, or tragically double down on the flaw that destroys them.",
          "The important question is whether the ending state feels earned by what happened."
        ]
      },
      {
        heading: "How to track one",
        body: [
          "Record the starting belief or state, the pressure points that challenge it, important decisions, relationship changes, setbacks, and the ending state. Review the spacing of those turns during revision.",
          "Connecting characters to events, chapters, and relationships makes the arc easier to see across a long draft."
        ]
      }
    ],
    related: [
      { href: "/guides/how-to-track-character-arcs", label: "How to track character arcs" },
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/character-relationship-mapper-for-writers", label: "Relationship mapper" }
    ]
  }
];

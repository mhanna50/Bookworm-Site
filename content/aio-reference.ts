import type { ContentPage } from "./types";

export const aioReferencePages: ContentPage[] = [
  {
    slug: "guides/what-is-a-plot-beat",
    eyebrow: "Writing reference",
    title: "What is a plot beat?",
    description: "A plot beat is a small unit of story movement: an action, reaction, realization, decision, discovery, or emotional shift that changes what happens next.",
    intro: "A plot beat is one of the smallest meaningful units of narrative movement. Several beats often work together to create a scene, chapter turn, or larger plot point.",
    intent: "guide",
    sections: [
      { heading: "The short definition", body: [
        "A beat is a moment that changes information, intention, emotion, or action. A character notices a detail, makes a choice, lies, changes tactics, realizes something, or reacts to new pressure.",
        "If nothing changes because of the moment, it may be description or atmosphere rather than a narrative beat."
      ]},
      { heading: "Beat vs plot point", body: [
        "A plot point changes the direction or state of the story at a larger scale. Beats are the smaller steps that create that turn.",
        "A confrontation may contain several beats—accusation, denial, evidence, realization, decision—while the resulting break in trust is the plot point."
      ]},
      { heading: "How to use beats in an outline", body: [
        "Use beats only where more detail helps you write. A compact beat list can reduce blank-page friction without turning an outline into a second draft.",
        "Bookworm keeps Beats nested beneath Plot Points so the two levels remain visually distinct."
      ]}
    ],
    related: [
      { href: "/guides/plot-point-vs-beat", label: "Plot point vs beat" },
      { href: "/novel-outline-software", label: "Novel outline software" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" }
    ]
  },
  {
    slug: "guides/what-is-an-inciting-incident",
    eyebrow: "Writing reference",
    title: "What is an inciting incident?",
    description: "An inciting incident is the event or disruption that makes the story's central problem impossible for the protagonist to ignore.",
    intro: "The inciting incident disturbs the character's existing situation and creates the problem, opportunity, danger, or invitation that begins the main story.",
    intent: "guide",
    sections: [
      { heading: "The short definition", body: [
        "An inciting incident is the disruption that activates the central conflict. It can be an attack, discovery, arrival, loss, offer, accusation, meeting, mistake, or any event that changes what the protagonist must deal with.",
        "It does not have to force immediate commitment. The protagonist may resist before making the larger decision that launches the next phase of the plot."
      ]},
      { heading: "Inciting incident vs first plot point", body: [
        "They can be the same event, but they often are not. The inciting incident creates the problem; the first major plot point often represents the protagonist's commitment to dealing with it.",
        "That distinction is useful when a story needs time for hesitation, investigation, preparation, or denial."
      ]},
      { heading: "A useful test", body: [
        "Ask whether the main story could still unfold in roughly the same way if the event were removed. If yes, the event may not be the true inciting incident.",
        "The strongest inciting incidents create consequences that make the old normal difficult to restore."
      ]}
    ],
    related: [
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" },
      { href: "/guides/plot-point-vs-beat", label: "Plot point vs beat" },
      { href: "/story-planning-software", label: "Story planning software" }
    ]
  },
  {
    slug: "guides/what-is-a-story-midpoint",
    eyebrow: "Writing reference",
    title: "What is the midpoint of a story?",
    description: "A story midpoint is a major turn near the center of a narrative that changes the protagonist's understanding, strategy, stakes, or relationship to the central conflict.",
    intro: "The midpoint is useful because a long second act can otherwise feel like repeated obstacles. A strong midpoint changes the kind of story the protagonist thinks they are in.",
    intent: "guide",
    sections: [
      { heading: "What usually changes at the midpoint?", body: [
        "The protagonist may gain crucial information, suffer a major loss, achieve a false victory, discover the true antagonist, change goals, or move from reacting to acting.",
        "The exact event matters less than the change in strategy or understanding."
      ]},
      { heading: "The midpoint is not just the 50% mark", body: [
        "It often appears near the physical center of a novel, but its structural job is more important than its page number.",
        "A midpoint that arrives at 45% or 60% can still work if it meaningfully changes the trajectory of the story."
      ]},
      { heading: "How to diagnose a weak middle", body: [
        "If the same type of obstacle repeats before and after the center, the story may need a stronger midpoint turn. Ask what the protagonist understands after the midpoint that they did not understand before it.",
        "A useful outline makes that before-and-after difference visible."
      ]}
    ],
    related: [
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" },
      { href: "/novel-outline-software", label: "Novel outline software" },
      { href: "/plotting-software-for-novelists", label: "Plotting software" }
    ]
  },
  {
    slug: "guides/what-is-a-subplot",
    eyebrow: "Writing reference",
    title: "What is a subplot?",
    description: "A subplot is a secondary narrative thread that develops alongside the main plot and adds pressure, contrast, character change, theme, or consequence.",
    intro: "A subplot is not merely an extra event. It has its own progression and matters because it changes how the main story feels, develops, or resolves.",
    intent: "guide",
    sections: [
      { heading: "The short definition", body: [
        "A subplot is a secondary sequence of goals, conflicts, and changes that runs beside the central plot. Common examples include relationships, family conflicts, investigations, rivalries, political problems, and personal goals.",
        "The strongest subplots intersect with the main plot rather than existing in isolation."
      ]},
      { heading: "What makes a subplot useful?", body: [
        "A subplot can reveal another side of a character, create pressure on the protagonist's main goal, provide thematic contrast, complicate a decision, or produce consequences that later affect the central plot.",
        "If removing the subplot changes nothing else, it may be decorative rather than integrated."
      ]},
      { heading: "How to track one", body: [
        "Record the subplot's open question or goal, the chapters or events that advance it, its major turning points, and the point where it resolves or deliberately remains open.",
        "A plot-thread tracker is especially useful when several subplots overlap."
      ]}
    ],
    related: [
      { href: "/plot-thread-tracker", label: "Plot thread tracker" },
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" }
    ]
  },
  {
    slug: "guides/scene-vs-chapter",
    eyebrow: "Writing reference",
    title: "Scene vs chapter: what is the difference?",
    description: "A scene is a continuous unit of action or experience; a chapter is a reader-facing organizational unit that can contain one scene, several scenes, or part of a larger sequence.",
    intro: "Scenes describe what the story is doing. Chapters describe how the manuscript packages that experience for the reader.",
    intent: "guide",
    sections: [
      { heading: "What is a scene?", body: [
        "A scene is usually a continuous unit of action with a stable time, place, and point of view. It contains pressure, response, and some form of change.",
        "A scene often ends when the location, time, point of view, immediate objective, or dramatic situation changes."
      ]},
      { heading: "What is a chapter?", body: [
        "A chapter is a manuscript division chosen for pacing, emphasis, readability, suspense, point-of-view organization, or structural clarity.",
        "One chapter can contain several scenes, and one long scene can occupy an entire chapter."
      ]},
      { heading: "Which should you outline?", body: [
        "Outline at the level that helps you think. If your novel is chapter-driven, plan chapters first and identify scenes inside them. If you think in discrete dramatic units, plan scenes and group them into chapters later.",
        "Bookworm currently treats chapters as the primary manuscript unit while allowing plot points, beats, events, characters, and locations to provide finer context."
      ]}
    ],
    related: [
      { href: "/chapter-planning-software", label: "Chapter planning software" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" },
      { href: "/guides/what-is-a-plot-beat", label: "What is a plot beat?" }
    ]
  },
  {
    slug: "guides/plot-vs-story",
    eyebrow: "Writing reference",
    title: "Plot vs story: what is the difference?",
    description: "Story is the broader experience of characters, events, meaning, and change; plot is the designed sequence of cause and effect through which those events are presented.",
    intro: "Writers often use plot and story interchangeably, but separating them can make structural problems easier to diagnose.",
    intent: "guide",
    sections: [
      { heading: "Story is what happens and what it means", body: [
        "Story includes characters, circumstances, events, relationships, internal change, themes, and the larger fictional reality.",
        "It can include things that happen off-page or before the manuscript begins."
      ]},
      { heading: "Plot is how the narrative creates consequence", body: [
        "Plot is the selected and ordered chain of events presented to the reader. It emphasizes causality: this happens, which forces that choice, which creates the next problem.",
        "Two novels could use the same underlying story material but create very different plots by changing order, point of view, revelation, or emphasis."
      ]},
      { heading: "Why the distinction matters", body: [
        "If your world and characters are interesting but the manuscript feels static, the problem may be plot: the selected events are not creating enough consequence.",
        "If the plot moves quickly but feels emotionally empty, the broader story context may not be doing enough work."
      ]}
    ],
    related: [
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/novel-outline-software", label: "Novel outline software" }
    ]
  },
  {
    slug: "guides/story-bible-vs-outline",
    eyebrow: "Writing reference",
    title: "Story bible vs outline: what belongs in each?",
    description: "A story bible records what is true about your fictional world; an outline records what happens and in what narrative order.",
    intro: "Story bibles and outlines solve different problems. Combining them into one giant document often makes both harder to use.",
    intent: "guide",
    sections: [
      { heading: "A story bible is reference", body: [
        "Use a story bible for stable or canonical information: characters, locations, organizations, terminology, world rules, relationships, chronology, important objects, and established facts.",
        "Its job is to answer continuity questions."
      ]},
      { heading: "An outline is sequence", body: [
        "Use an outline for narrative movement: acts, chapters, scenes, plot points, beats, reveals, reversals, and planned progression.",
        "Its job is to answer what happens next and why."
      ]},
      { heading: "Connect them without duplicating them", body: [
        "A chapter in the outline can reference a location from the story bible instead of copying the location description into the chapter note. A reveal can connect to the character or clue it affects.",
        "Bookworm follows this model by keeping story entities separate from Story Builder while allowing them to connect."
      ]}
    ],
    related: [
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/novel-outline-software", label: "Novel outline software" },
      { href: "/guides/what-is-a-story-bible", label: "What is a story bible?" }
    ]
  },
  {
    slug: "guides/plotter-vs-pantser",
    eyebrow: "Writing reference",
    title: "Plotter vs pantser: which writing style are you?",
    description: "Plotters plan before drafting; pantsers discover much of the story while writing. Most novelists use a mix of both approaches.",
    intro: "Plotter and pantser describe tendencies, not permanent identities. A writer can outline the mystery, discover the romance, and plan the ending after drafting the first act.",
    intent: "guide",
    sections: [
      { heading: "What is a plotter?", body: [
        "A plotter develops meaningful structure before or during early drafting. That may include acts, turning points, chapter summaries, scene cards, timelines, character arcs, or beat sheets.",
        "The benefit is reduced uncertainty; the risk is spending too much time planning material that later changes."
      ]},
      { heading: "What is a pantser?", body: [
        "A pantser discovers a significant amount of the story through prose. The writer may begin with characters, a premise, a setting, or a few major events and decide the rest while drafting.",
        "The benefit is discovery and spontaneity; the cost can be more structural revision later."
      ]},
      { heading: "Most writers are hybrids", body: [
        "Many authors plan only the next few chapters, outline one storyline but not another, or create structure after a discovery-heavy first draft.",
        "Flexible software should support that movement instead of forcing a single process."
      ]}
    ],
    related: [
      { href: "/novel-writing-software-for-beginners", label: "Writing software for beginners" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" },
      { href: "/story-planning-software", label: "Story planning software" }
    ]
  },
  {
    slug: "guides/what-is-worldbuilding",
    eyebrow: "Writing reference",
    title: "What is worldbuilding?",
    description: "Worldbuilding is the process of designing and maintaining the places, cultures, systems, history, rules, institutions, and assumptions that shape a fictional setting.",
    intro: "Worldbuilding is not limited to fantasy. Every novel establishes a world: a social environment, physical setting, history, institutions, rules, and expectations.",
    intent: "guide",
    sections: [
      { heading: "The short definition", body: [
        "Worldbuilding is the deliberate construction of the environment in which a story can happen. It includes physical places, culture, politics, technology, economics, religion, history, language, institutions, and any invented rules that shape character choices.",
        "Contemporary fiction still worldbuilds when it establishes a workplace, family culture, neighborhood, school, profession, or social group in enough detail to feel coherent."
      ]},
      { heading: "Useful worldbuilding creates consequences", body: [
        "A world detail matters most when it changes what characters can do, believe, fear, want, or understand. A magic rule matters because it creates a cost. A political institution matters because it limits a choice.",
        "Details that never affect the story can still create atmosphere, but they do not need the same level of documentation."
      ]},
      { heading: "How much should you build?", body: [
        "Build enough to make current scenes coherent, then expand as the manuscript creates questions. This keeps research and lore from replacing drafting.",
        "Bookworm's flexible world categories are designed for that incremental approach."
      ]}
    ],
    related: [
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/best-worldbuilding-software-for-writers", label: "Best worldbuilding software" },
      { href: "/writing-software-for-fantasy-authors", label: "Fantasy writing software" }
    ]
  },
  {
    slug: "guides/what-is-a-story-arc",
    eyebrow: "Writing reference",
    title: "What is a story arc?",
    description: "A story arc is the progression of a narrative thread from setup through development and escalation to a meaningful change, resolution, or new state.",
    intro: "A story arc describes movement across time. It can refer to the whole novel or to a specific relationship, conflict, character, mystery, or subplot.",
    intent: "guide",
    sections: [
      { heading: "An arc needs a changing state", body: [
        "At the beginning, something is unresolved, unstable, unknown, desired, feared, or missing. Through events and decisions, that state develops until it reaches a different condition.",
        "That difference between beginning and ending is what makes the thread an arc rather than a recurring topic."
      ]},
      { heading: "Story arc vs character arc", body: [
        "A story arc can be external: solve the murder, win the war, escape the city, expose the conspiracy. A character arc tracks internal or relational change.",
        "The two often interact, but they are not the same thing."
      ]},
      { heading: "How to track arcs", body: [
        "Record the starting condition, major turns, escalation points, midpoint changes, crisis, and ending condition. Link those turns to chapters or events rather than keeping them as abstract notes.",
        "For large novels, plot-thread tracking helps prevent secondary arcs from disappearing."
      ]}
    ],
    related: [
      { href: "/plot-thread-tracker", label: "Plot thread tracker" },
      { href: "/guides/what-is-a-character-arc", label: "What is a character arc?" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" }
    ]
  },
  {
    slug: "guides/what-is-a-character-bible",
    eyebrow: "Writing reference",
    title: "What is a character bible?",
    description: "A character bible is a reusable reference for a story's cast: identity, background, motivations, relationships, knowledge, appearances, arcs, and continuity-critical facts.",
    intro: "A character bible is the cast-focused portion of a larger story bible. Its purpose is to keep important character facts trustworthy across a long manuscript or series.",
    intent: "guide",
    sections: [
      { heading: "What belongs in a character bible?", body: [
        "Track stable identity facts, narrative role, goals, fears, loyalties, meaningful background, appearance details that matter, important relationships, knowledge, secrets, and arc-related changes.",
        "Avoid filling fields that have no consequence for the story."
      ]},
      { heading: "Profiles are not enough", body: [
        "A static profile tells you who someone is. A useful character system also shows where they appear, who they are connected to, which events affect them, and how those relationships change.",
        "That context becomes more valuable as the cast grows."
      ]},
      { heading: "Use it for revision", body: [
        "After structural edits, review characters for contradictory facts, unexplained absences, knowledge errors, and relationship turns whose setup was removed.",
        "Connected character records make those checks easier than searching isolated notes."
      ]}
    ],
    related: [
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/character-relationship-mapper-for-writers", label: "Relationship mapper" },
      { href: "/guides/how-to-organize-novel-characters", label: "Organize novel characters" }
    ]
  },
  {
    slug: "series-bible-software",
    eyebrow: "Series bible software",
    title: "Series bible software for keeping multiple books consistent",
    description: "Organize recurring characters, locations, world rules, events, relationships, terminology, images, and continuity across a fiction series.",
    intro: "A series multiplies the continuity problem. Facts established in book one may matter years later in book four, while characters, relationships, places, and world rules keep evolving.",
    intent: "commercial",
    sections: [
      { heading: "Preserve canon across books", body: [
        "A series bible should make established facts easy to retrieve without forcing you to reread previous manuscripts. Recurring characters, places, organizations, terminology, historical events, and world rules need an authoritative reference.",
        "The key challenge is distinguishing permanent facts from facts that change over time."
      ]},
      { heading: "Track changes, not only profiles", body: [
        "Relationships evolve, rulers change, places are destroyed, characters learn secrets, and world rules may be clarified. A useful series bible records the events that caused those changes.",
        "That is why event and relationship data become increasingly important across multiple books."
      ]},
      { heading: "Bookworm's direction", body: [
        "Bookworm already organizes projects at the book level and models connected story entities inside each project. Series-level continuity is a natural extension of that connected model as multi-book workflows deepen.",
        "For a single novel, the same story-bible structure already helps keep complex projects coherent."
      ]}
    ],
    related: [
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/what-is-a-story-bible", label: "What is a story bible?" },
      { href: "/story-continuity-checker", label: "Story continuity checker" }
    ]
  },
  {
    slug: "timeline-software-for-writers",
    eyebrow: "Timeline software for writers",
    title: "Timeline software for writers who need event order to stay believable",
    description: "Track fictional chronology, chapter order, character timing, event relationships, and continuity without confusing narrative order with chronological order.",
    intro: "Timeline problems appear when the order readers experience events differs from the order those events actually happen. Flashbacks, parallel viewpoints, travel, investigations, and long time spans make that distinction important.",
    intent: "commercial",
    sections: [
      { heading: "Chronology and manuscript order are different", body: [
        "A chapter can reveal an event long after it occurred. Two chapters can cover the same day from different viewpoints. An important event can happen off-page.",
        "Timeline software should therefore track event chronology separately from chapter sequence."
      ]},
      { heading: "Timing creates continuity constraints", body: [
        "Travel time, age, injuries, messages, knowledge, deadlines, and cause-and-effect all depend on chronology. A timeline makes those constraints visible before they become contradictions.",
        "Story Health can complement that data by surfacing possible timeline conflicts for review."
      ]},
      { heading: "Keep the timeline connected to story entities", body: [
        "An event is more useful when you can see who was involved, where it happened, which chapter reveals it, and which later consequences depend on it.",
        "Bookworm's event model is built to connect chronology to the rest of the story rather than maintain a separate calendar."
      ]}
    ],
    related: [
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/guides/how-to-track-story-continuity", label: "Track story continuity" },
      { href: "/story-planning-software", label: "Story planning software" }
    ]
  },
  {
    slug: "writing-software-for-science-fiction-authors",
    eyebrow: "Science fiction writing software",
    title: "Writing software for science fiction authors managing systems, timelines, and world rules",
    description: "Organize a science fiction manuscript, technology, factions, locations, terminology, characters, events, timelines, and continuity in Bookworm.",
    intro: "Science fiction often asks readers to understand unfamiliar systems while still following character and plot. The writer has to keep those systems consistent without burying the manuscript under reference material.",
    intent: "commercial",
    sections: [
      { heading: "Track invented systems as story rules", body: [
        "Technology, travel constraints, political structures, terminology, scientific assumptions, and social systems create expectations. Once established, later scenes need to respect those rules or intentionally explain why they no longer apply.",
        "Flexible world categories help preserve that source of truth."
      ]},
      { heading: "Timelines matter quickly", body: [
        "Space travel, communication delay, generations, cryosleep, parallel locations, or simply large-scale events can create chronology problems that are easy to miss chapter by chapter.",
        "Connected events and continuity review make those constraints easier to inspect."
      ]},
      { heading: "Keep exposition tied to narrative need", body: [
        "A reference system is valuable when it lets the author know more than the reader without forcing all of that information onto the page.",
        "Bookworm keeps world information outside the manuscript while connecting it back to the characters and events that make it relevant."
      ]}
    ],
    related: [
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/timeline-software-for-writers", label: "Timeline software" },
      { href: "/story-bible-software", label: "Story bible software" }
    ]
  },
  {
    slug: "writing-software-for-thriller-authors",
    eyebrow: "Thriller writing software",
    title: "Writing software for thriller authors tracking pressure, reveals, timelines, and plot threads",
    description: "Plan thriller chapters, escalating stakes, clues, reveals, events, timelines, relationships, and unresolved plot threads in Bookworm.",
    intro: "Thrillers depend on controlled information and escalating pressure. The challenge is maintaining momentum while making sure reveals, clues, character decisions, and timing remain believable.",
    intent: "commercial",
    sections: [
      { heading: "Track escalation, not just events", body: [
        "A thriller outline becomes more useful when each major turn increases danger, narrows options, changes what the protagonist knows, or forces a riskier decision.",
        "Plot points and beats can make that progression visible across chapters."
      ]},
      { heading: "Clues and reveals need continuity", body: [
        "A reveal should have enough prior support to feel earned without becoming predictable. Foreshadowing records help connect setup to later payoffs and make abandoned clues easier to find after revisions.",
        "Unresolved-thread review is equally useful when subplots and conspiracies overlap."
      ]},
      { heading: "Timing is part of suspense", body: [
        "Deadlines, travel, simultaneous events, messages, and character knowledge often determine whether a thriller's tension feels plausible.",
        "Keeping events and chronology explicit makes those constraints easier to audit."
      ]}
    ],
    related: [
      { href: "/plot-thread-tracker", label: "Plot thread tracker" },
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/timeline-software-for-writers", label: "Timeline software" }
    ]
  }
];

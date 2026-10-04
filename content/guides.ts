import type { ContentPage } from "./types";

export const guidePages: ContentPage[] = [
  {
    slug: "guides/how-to-plan-a-novel",
    eyebrow: "Writing guide",
    title: "How to plan a novel without overplanning it",
    description: "A practical novel-planning process covering premise, characters, conflict, acts, chapters, plot points, beats, clues, and revision without forcing every writer into one method.",
    intro: "Planning a novel is not about predicting every sentence. It is about reducing the number of important questions you have to solve at the same time once drafting begins.",
    intent: "guide",
    sections: [
      { heading: "Start with the central change", body: [
        "Before outlining chapters, define what changes over the course of the book. That can be external, such as solving a murder or surviving a war, and internal, such as learning to trust or giving up a false belief. A useful plan connects the plot to that change.",
        "Write down the protagonist, the thing they want, the force opposing them, and what becomes different if they succeed or fail. You do not need a perfect logline; you need a stable enough center to make later decisions."
      ] },
      { heading: "Sketch the major turning points", body: [
        "Instead of immediately planning forty chapters, identify the handful of moments that change the direction of the story. Those may include the inciting event, a first major commitment, a midpoint reversal, a crisis, and the final confrontation.",
        "The labels are optional. What matters is that each major point creates a new situation rather than merely adding information."
      ] },
      { heading: "Turn turning points into chapters and beats", body: [
        "Once the big movement is visible, place chapters between those anchors. Give each chapter a purpose: a decision, discovery, setback, escalation, relationship change, or payoff. Then add only the beats needed to understand how the chapter gets there.",
        "If a chapter has no change, it may still be atmospheric or intentionally quiet, but you should know why it exists."
      ] },
      { heading: "Track the information that can break continuity", body: [
        "As planning deepens, record characters, locations, important objects, clues, promises, timeline facts, and world rules separately from chapter prose. This makes them easier to update when the outline changes.",
        "Bookworm follows this model by separating story entities from the Story Builder while allowing them to connect back to chapters and events."
      ] }
    ],
    related: [
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" }
    ]
  },
  {
    slug: "guides/how-to-plot-a-novel",
    eyebrow: "Writing guide",
    title: "How to plot a novel: from premise to usable story structure",
    description: "Learn a flexible way to plot a novel using conflict, turning points, cause and effect, chapters, plot points, beats, and character change.",
    intro: "A useful plot is a chain of consequences. The goal is not to fill boxes in a template; it is to make each important event create pressure that causes the next meaningful choice.",
    intent: "guide",
    sections: [
      { heading: "Define the story problem", body: [
        "Plot begins when a character cannot continue normally. Give the protagonist a concrete problem, a reason they cannot ignore it, and a cost for failure. This creates direction before you decide on any formal structure.",
        "Then ask what false solution the character might try first. Early plot movement often comes from incomplete understanding."
      ] },
      { heading: "Build a cause-and-effect chain", body: [
        "For every major plot point, ask: what caused this, what choice follows from it, and what becomes harder afterward? If events could be rearranged without changing much, the plot may be episodic rather than cumulative.",
        "Good plotting increases consequence. New information should alter decisions, and decisions should create new situations."
      ] },
      { heading: "Use structure as a diagnostic tool", body: [
        "Three-act structure, four-act structure, Save the Cat, Snowflake, romance beats, and mystery frameworks can all be useful. None should become a reason to force an event that the story has not earned.",
        "Use a framework to notice missing escalation, weak turning points, or long stretches without change. Keep what helps and discard what does not."
      ] },
      { heading: "Separate plot points from scene detail", body: [
        "A plot point is a meaningful change in story direction. A beat is a smaller unit that helps execute that change. Keeping those levels separate prevents an outline from becoming unreadable.",
        "Bookworm's Story Builder reflects this distinction with Acts → Chapters → Plot Points → Beats."
      ] }
    ],
    related: [
      { href: "/plotting-software-for-novelists", label: "Plotting software for novelists" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/guides/how-to-plan-chapters", label: "How to plan chapters" }
    ]
  },
  {
    slug: "guides/how-to-build-a-story-bible",
    eyebrow: "Writing guide",
    title: "How to build a story bible you will actually use",
    description: "Build a practical story bible for characters, locations, world rules, events, relationships, terminology, images, and continuity without creating busywork.",
    intro: "A story bible should answer questions faster than your manuscript can. If maintaining it becomes its own project, the system is too complicated.",
    intent: "guide",
    sections: [
      { heading: "Start with information that must stay consistent", body: [
        "Do not begin with a hundred-field template. Start with facts that are expensive to forget: character ages, relationships, physical details that matter, locations, important dates, world rules, organizations, terminology, and recurring objects.",
        "Add a field when the story creates a reason for it. This keeps the story bible useful instead of aspirational."
      ] },
      { heading: "Separate entities from appearances", body: [
        "A character should have one authoritative profile, not a different mini-biography in every chapter note. The same is true for locations, factions, and important objects.",
        "Then track where those entities appear or what they connect to. This reduces duplicated information and makes later edits safer."
      ] },
      { heading: "Record change, not just facts", body: [
        "A useful story bible also remembers how the story evolves. Relationships change. Allegiances shift. Places are destroyed. Information becomes known to different characters at different times.",
        "Events and timeline records help preserve that dynamic context."
      ] },
      { heading: "Review the bible during revision", body: [
        "The story bible becomes most valuable after the first draft. Use it to check continuity, timeline logic, character appearances, unresolved promises, and world rules against the manuscript.",
        "That is also where connected tools such as Story Health can reduce the amount of manual hunting."
      ] }
    ],
    related: [
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/worldbuilding-software-for-writers", label: "Worldbuilding software" },
      { href: "/guides/how-to-track-story-continuity", label: "How to track continuity" }
    ]
  },
  {
    slug: "guides/how-to-track-foreshadowing",
    eyebrow: "Writing guide",
    title: "How to track foreshadowing without spoiling your own outline",
    description: "A practical system for tracking clues, promises, setup, misdirection, and payoffs across a novel.",
    intro: "Foreshadowing works because readers remember more than they consciously notice. Writers need a system that preserves that subtlety while still making every planted clue visible during revision.",
    intent: "guide",
    sections: [
      { heading: "Record the promise and the payoff", body: [
        "For each clue, write what appears on the page and what it is ultimately meant to support. Keep those as separate ideas. A character noticing a locked door is the visible clue; the reveal about what is behind it is the payoff.",
        "This makes it easier to revise the clue without accidentally changing the underlying purpose."
      ] },
      { heading: "Track where the clue appears", body: [
        "Record the first chapter where the clue appears and any later reinforcement. Too little setup can make a reveal feel arbitrary. Too much repetition can make it obvious.",
        "The useful question is not simply how many clues exist, but how much narrative distance and variation exists between them."
      ] },
      { heading: "Separate clues from unresolved threads", body: [
        "Not every unresolved question is foreshadowing. Some are open plot threads, character goals, mysteries, or world questions. Labeling the type of promise helps you understand what kind of payoff readers are waiting for.",
        "Bookworm keeps Foreshadowing as a dedicated concept while Story Health can separately surface unresolved threads."
      ] },
      { heading: "Audit before the final revision", body: [
        "Near the end of revision, review every clue and ask whether it still points to something that exists in the current draft. Plot changes often leave behind setup for scenes that were removed.",
        "Also review the reverse direction: major reveals should have enough prior support to feel earned."
      ] }
    ],
    related: [
      { href: "/foreshadowing-tracker", label: "Foreshadowing tracker" },
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/guides/how-to-track-story-continuity", label: "Track story continuity" }
    ]
  },
  {
    slug: "guides/how-to-track-story-continuity",
    eyebrow: "Writing guide",
    title: "How to track story continuity in a long novel",
    description: "Track timeline facts, character knowledge, locations, relationships, unresolved threads, world rules, and event order to prevent continuity errors.",
    intro: "Continuity problems happen when the story changes faster than the writer's memory. A reliable system externalizes the facts that are easiest to contradict.",
    intent: "guide",
    sections: [
      { heading: "Track chronology separately from chapter order", body: [
        "The order in which readers experience events is not always the order in which events happen. Flashbacks, parallel points of view, and off-page events make this especially important.",
        "Keep a timeline or event sequence that records when things occur even if the manuscript reveals them later."
      ] },
      { heading: "Track who knows what", body: [
        "Many apparent plot holes are knowledge errors. A character reacts to information they have not learned yet, forgets something important, or knows a secret that was never shared with them.",
        "For important revelations, note when each affected character gains the information."
      ] },
      { heading: "Use authoritative records for recurring facts", body: [
        "Names, ages, injuries, physical descriptions, distances, world rules, and relationship history should have a reliable source outside scattered chapter notes.",
        "When a fact changes, update that source and review the connected places where the old version may still appear."
      ] },
      { heading: "Run continuity reviews at milestones", body: [
        "Do not try to continuously validate every detail while drafting. Review continuity after an act, after a major restructuring pass, and before line editing. Those checkpoints catch more problems with less interruption.",
        "Bookworm's Story Health is intended to support this kind of review by surfacing concrete signals instead of interrupting prose with constant warnings."
      ] }
    ],
    related: [
      { href: "/story-continuity-checker", label: "Story continuity checker" },
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/how-to-build-a-story-bible", label: "Build a story bible" }
    ]
  },
  {
    slug: "guides/how-to-plan-chapters",
    eyebrow: "Writing guide",
    title: "How to plan chapters that change the story",
    description: "Plan novel chapters around purpose, conflict, change, point of view, location, plot movement, clues, and character decisions.",
    intro: "A chapter plan does not need to summarize every action. It needs to tell you why the chapter exists and what becomes different by the end.",
    intent: "guide",
    sections: [
      { heading: "Write the chapter's job in one sentence", body: [
        "Before listing beats, state the chapter's function. Examples: force the protagonist to choose a side, reveal that the alibi is false, break trust between two characters, or move the group into a dangerous location.",
        "If the job is vague, the chapter may still work, but planning its scenes will be harder."
      ] },
      { heading: "Define entry and exit states", body: [
        "Write what is true at the beginning of the chapter and what is true at the end. The difference can be external, emotional, relational, or informational.",
        "This creates a simple test for movement. A chapter that ends in essentially the same state may need stronger pressure or a clearer purpose."
      ] },
      { heading: "Add only the beats that cause the change", body: [
        "Beats are useful when they show the sequence of pressure and response. Avoid turning the outline into prose before the prose exists.",
        "A compact beat list preserves discovery while still preventing the blank-page problem."
      ] },
      { heading: "Attach the relevant story context", body: [
        "Record the point-of-view character, location, key plot point, important event, and any clue or payoff that matters. This context helps revision later without making the drafting view crowded."
      ] }
    ],
    related: [
      { href: "/chapter-planning-software", label: "Chapter planning software" },
      { href: "/story-planning-software", label: "Story planning software" },
      { href: "/guides/how-to-plan-a-novel", label: "How to plan a novel" }
    ]
  },
  {
    slug: "guides/how-to-organize-novel-characters",
    eyebrow: "Writing guide",
    title: "How to organize novel characters without building a spreadsheet monster",
    description: "Organize character profiles, motivations, relationships, appearances, knowledge, images, and arcs in a system that stays useful while drafting.",
    intro: "Character organization should help you write scenes, not become a personality questionnaire. Track the details that create continuity or affect decisions.",
    intent: "guide",
    sections: [
      { heading: "Separate identity from narrative function", body: [
        "Basic facts belong in the character profile: name, role, important physical details, background facts, and stable traits. Narrative function belongs beside them: goals, fears, loyalties, conflicts, and what the character changes in the story.",
        "The second group is often more useful during drafting because it explains behavior."
      ] },
      { heading: "Track relationships explicitly", body: [
        "Relationships are not just labels such as friend or enemy. Record the current state, the source of tension or trust, and major events that changed it.",
        "A relationship graph can help when a large cast becomes difficult to visualize, especially in political stories, mysteries, family sagas, and multi-POV novels."
      ] },
      { heading: "Track appearances only when useful", body: [
        "You do not need a manual list of every chapter if your writing system can connect characters to chapters automatically. What matters is being able to answer whether a character has vanished unintentionally or whether two characters have had enough page time for a later relationship beat to feel earned."
      ] },
      { heading: "Update after structural changes", body: [
        "When chapters move or events are cut, character context can become stale. Review character connections after major revisions rather than trying to keep every note perfect during first-draft writing."
      ] }
    ],
    related: [
      { href: "/character-management-for-writers", label: "Character management for writers" },
      { href: "/story-bible-software", label: "Story bible software" },
      { href: "/guides/how-to-track-story-continuity", label: "Track continuity" }
    ]
  },
  {
    slug: "guides/how-to-track-character-arcs",
    eyebrow: "Writing guide",
    title: "How to track a character arc across a novel",
    description: "Track character beliefs, goals, pressure, decisions, relationship changes, turning points, and end-state to make an arc visible across chapters.",
    intro: "A character arc is easier to understand when you track decisions under pressure rather than trying to assign an emotion to every chapter.",
    intent: "guide",
    sections: [
      { heading: "Define the beginning and ending states", body: [
        "What does the character believe, want, fear, or refuse at the start? What is different at the end? The gap between those states gives the arc direction.",
        "Not every character improves. Negative, flat, tragic, and disillusionment arcs still have meaningful change."
      ] },
      { heading: "Identify pressure points", body: [
        "List the events that challenge the character's current way of thinking. A strong arc usually changes because choices have consequences, not because the character suddenly realizes the theme.",
        "Track moments where the character doubles down, compromises, fails, or makes a new choice."
      ] },
      { heading: "Connect relationships to the arc", body: [
        "Other characters often embody competing values or create the pressure that makes change possible. Relationship changes can therefore be part of the arc itself rather than a separate subplot.",
        "A connected relationship view can make those influences easier to review."
      ] },
      { heading: "Audit the spacing", body: [
        "During revision, look at where the major arc moments occur. Long gaps with no pressure can make change feel abrupt later. Too many repeated lessons can make the arc feel stagnant.",
        "The goal is not perfect spacing; it is visible causality."
      ] }
    ],
    related: [
      { href: "/character-management-for-writers", label: "Character management" },
      { href: "/guides/how-to-organize-novel-characters", label: "Organize novel characters" },
      { href: "/guides/how-to-plan-chapters", label: "Plan chapters" }
    ]
  }
];

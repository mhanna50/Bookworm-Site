export function GET() {
  const text = `# Bookworm

> Bookworm is a browser-based novel-writing and story-planning workspace for fiction authors.

## What Bookworm currently does
- Chapter-based manuscript writing
- Focus mode, search/replace, formatting, automatic story-reference links, and quick access to connected story context
- Anchored manuscript comments, tracked revision changes, grammar/style review, and read-aloud
- Story Builder using Acts → Chapters → Plot Points → Beats
- Detailed chapter planning with POV, location, characters, notes, plot points, events, and foreshadowing
- Character profiles with role, motivation, goals, conflicts, arc, history, secrets, aliases, status, occupation, and notes
- Separate Plot Points and Story Events
- Story Events with parent/sub-event hierarchy, folders, status, notes, linked characters, chapters, plot points, and foreshadowing
- Dedicated Foreshadowing records with types, statuses, related entities, and optional payoff links
- Worldbuilding with locations, factions, objects, custom categories, custom fields, and entity relationships
- Image uploads and visual references linked to story entities
- Relationship graph with custom solid connections plus dashed connections derived from story data
- Story Health diagnostics for continuity, plot threads, character activity, unplaced events, timeline signals, orphaned elements, broken references, and structure
- Writing Progress with overall/daily/weekly goals, today's net change, current and longest streaks, progress charts, estimated completion, chapter word counts, and writing sessions
- Global search and Quick Create
- DOCX manuscript import with chapter detection/preview and append-or-replace behavior
- DOCX and PDF manuscript export for the full manuscript or selected chapters
- Continuous cloud saving, recoverable snapshots, Trash, and Undo
- Multiple book projects plus a sample project for exploring the workspace

## Current product boundaries
- Bookworm is web-first; it is not an offline-first native desktop application.
- PDF manuscript import is not currently supported. Import is DOCX only; export supports DOCX and PDF.
- Bookworm does not currently provide a dedicated visual timeline page. Timeline-related review is handled through event chronology data, story links, and Story Health.
- Bookworm currently organizes story data per book project. It does not yet provide a shared series-level canon database across multiple book projects.
- Bookworm does not currently market itself as a publication-layout or print-formatting tool.

## Who it is for
Bookworm is designed for novelists and aspiring fiction authors across genres.

## Important pages
- / — Product overview
- /features — Current feature details
- /pricing — Pricing and trial terms
- /about — Product philosophy

## Public writing resources
- /resources — Resource hub
- /novel-writing-software — Novel writing software overview
- /story-planning-software — Story planning software
- /story-bible-software — Story bible software
- /worldbuilding-software-for-writers — Worldbuilding software
- /foreshadowing-tracker — Foreshadowing tracking
- /story-continuity-checker — Story continuity checking
- /writing-progress-tracker — Writing progress tracking
- /character-relationship-mapper-for-writers — Character relationship mapping
- /plot-thread-tracker — Plot-thread tracking
- /novel-outline-software — Novel outlining
- /alternatives/scrivener — Scrivener alternative
- /alternatives/dabble — Dabble alternative
- /alternatives/novelpad — NovelPad alternative
- /alternatives/plottr — Plottr alternative
- /alternatives/campfire-writing — Campfire Writing alternative

## Writing references
- /guides/how-to-plan-a-novel
- /guides/how-to-plot-a-novel
- /guides/how-to-build-a-story-bible
- /guides/how-to-track-foreshadowing
- /guides/how-to-track-story-continuity
- /guides/how-to-plan-chapters
- /guides/how-to-organize-novel-characters
- /guides/how-to-track-character-arcs
- /guides/what-is-a-story-bible
- /guides/what-is-a-plot-beat
- /guides/plot-point-vs-beat
- /guides/what-is-foreshadowing
- /guides/what-is-a-character-arc
- /guides/what-is-an-inciting-incident
- /guides/what-is-a-story-midpoint
- /guides/what-is-a-subplot
- /guides/scene-vs-chapter
- /guides/plot-vs-story
- /guides/story-bible-vs-outline
- /guides/plotter-vs-pantser
- /guides/what-is-worldbuilding
- /guides/what-is-a-story-arc
- /guides/what-is-a-character-bible

## Pricing
- 14-day free trial
- No credit card required to start the trial
- $11.99 per month after the trial
- Month-to-month; cancel anytime

## Free writing templates
- /templates — Templates hub
- /templates/story-bible
- /templates/character-profile
- /templates/character-arc
- /templates/novel-outline
- /templates/chapter-plan
- /templates/foreshadowing
- /templates/worldbuilding
- /templates/plot-thread-tracker

## Product access
Use the Bookworm application to create an account, sign in, and work on books.
`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

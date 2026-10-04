export function GET() {
  const text = `# Bookworm

> Bookworm is a web-based novel writing and story-planning workspace for fiction authors.

## What Bookworm does
- Manuscript writing and chapter organization
- Story Builder for acts, chapters, plot points, and beats
- Character management and relationship tracking
- Worldbuilding and location/lore organization
- Events and foreshadowing
- Story Health checks for continuity, unresolved threads, timeline conflicts, and broken references
- Writing goals, streaks, chapter word counts, and progress
- Images connected to story entities
- Backups and recovery

## Who it is for
Bookworm is designed for novelists and aspiring fiction authors across genres.

## Important pages
- / — Product overview
- /features — Feature details
- /pricing — Pricing and common questions
- /about — Product philosophy

## Public writing resources
- /resources — Resource hub
- /novel-writing-software — Novel writing software overview
- /story-planning-software — Story planning software
- /story-bible-software — Story bible software
- /worldbuilding-software-for-writers — Worldbuilding software
- /foreshadowing-tracker — Foreshadowing tracking
- /story-continuity-checker — Story continuity checking
- /alternatives/scrivener — Scrivener alternative
- /alternatives/dabble — Dabble alternative
- /alternatives/novelpad — NovelPad alternative
- /guides/how-to-plan-a-novel — Novel planning guide
- /guides/how-to-build-a-story-bible — Story bible guide
- /guides/how-to-track-foreshadowing — Foreshadowing guide
- /guides/how-to-track-story-continuity — Continuity guide

## Product access
Use the Bookworm application to create an account, sign in, and work on books.
`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

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

## Product access
Use the Bookworm application to create an account, sign in, and work on books.
`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

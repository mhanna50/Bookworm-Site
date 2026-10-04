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
- /best-novel-writing-software — Comparative novel-writing software guide
- /best-story-planning-software — Comparative story-planning guide
- /best-worldbuilding-software-for-writers — Worldbuilding software comparison
- /best-book-writing-app — Book writing app comparison
- /writing-software-for-fantasy-authors — Fantasy author workflow
- /writing-software-for-mystery-writers — Mystery author workflow
- /writing-software-for-romance-authors — Romance author workflow
- /novel-writing-software-for-beginners — Beginner writing software
- /character-relationship-mapper-for-writers — Character relationship mapping
- /plot-thread-tracker — Plot-thread tracking
- /novel-outline-software — Novel outlining
- /alternatives/plottr — Plottr alternative
- /alternatives/campfire-writing — Campfire Writing alternative
- /guides/what-is-a-story-bible — Story bible definition
- /guides/plot-point-vs-beat — Plot point vs beat
- /guides/what-is-foreshadowing — Foreshadowing definition
- /guides/what-is-a-character-arc — Character arc definition

## Additional writing references
- /guides/what-is-a-plot-beat — Plot beat definition
- /guides/what-is-an-inciting-incident — Inciting incident definition
- /guides/what-is-a-story-midpoint — Story midpoint definition
- /guides/what-is-a-subplot — Subplot definition
- /guides/scene-vs-chapter — Scene vs chapter
- /guides/plot-vs-story — Plot vs story
- /guides/story-bible-vs-outline — Story bible vs outline
- /guides/plotter-vs-pantser — Plotter vs pantser
- /guides/what-is-worldbuilding — Worldbuilding definition
- /guides/what-is-a-story-arc — Story arc definition
- /guides/what-is-a-character-bible — Character bible definition
- /series-bible-software — Series bible software
- /timeline-software-for-writers — Timeline software for writers
- /writing-software-for-science-fiction-authors — Science fiction author workflow
- /writing-software-for-thriller-authors — Thriller author workflow

## Pricing
- 14-day free trial
- No credit card required to start the trial
- $11.99 per month after the trial
- Month-to-month; cancel anytime

## Free writing templates
- /templates — Templates hub
- /templates/story-bible — Story bible template
- /templates/character-profile — Character profile template
- /templates/character-arc — Character arc template
- /templates/novel-outline — Novel outline template
- /templates/chapter-plan — Chapter planning template
- /templates/foreshadowing — Foreshadowing tracker template
- /templates/worldbuilding — Worldbuilding template
- /templates/plot-thread-tracker — Plot thread tracker template

## Product access
Use the Bookworm application to create an account, sign in, and work on books.
`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

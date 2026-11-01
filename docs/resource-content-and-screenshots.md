# Resource content and screenshot handoff

Reviewed against Quilly application main `9dde0266a86abcdfd1b7b0566f76e053db142b61` on 2026-11-01. This is a content review, not a live application audit.

## Scope

Twelve existing pages now have direct answers, worked examples, page-specific workflows, 49 visible FAQs, contextual related links, and one screenshot slot each. The resource renderer retains server-rendered HTML and improves social metadata and absolute breadcrumbs across all 85 cluster pages.

## Add the real screenshots

1. Place an optimized screenshot in `public/screenshots/` using the filename below. Use sample story data with no private account, billing, or manuscript information.
2. In `content/depth.ts`, find the visual ID and set its `src` to `/screenshots/<id>.webp`.
3. Update its dimensions, alt text, and caption to match what the real image shows. The preset descriptions are capture briefs, not evidence of an image already supplied.
4. Build and check desktop/mobile layout. Unfilled slots are labeled placeholders and never emit image structured data.

| Page | Visual ID / recommended filename | Capture brief |
| --- | --- | --- |
| /novel-writing-software | novel-workspace.webp | Quilly manuscript chapter with connected character, world, and plot-point references visible |
| /story-planning-software | story-builder-structure.webp | Quilly Story Builder showing an act with chapters, nested plot points, and ordered beats |
| /worldbuilding-software-for-writers | world-template.webp | Quilly World entry with a custom location template and fields for access rules and controlling faction |
| /foreshadowing-tracker | foreshadowing-detail.webp | Quilly foreshadowing detail showing a clue, notes, and linked plot points for setup and payoff |
| /character-management-for-writers | character-profile.webp | Quilly character profile with editable field labels, motivation notes, and related plot points |
| /writing-software-for-fantasy-authors | fantasy-world-rules.webp | Quilly fantasy World entry for a magic rule with ability, cost, limit, and connected plot-point context |
| /writing-software-for-mystery-writers | mystery-clue-trail.webp | Quilly mystery clue entry with interpretation notes and linked plot points for discovery and reveal |
| /writing-software-for-romance-authors | romance-relationship-context.webp | Quilly character relationship context beside related plot points for a romance conflict and reconciliation |
| /templates/story-bible | story-bible-reference.webp | Quilly connected story reference showing character and world entries used by a chapter plot point |
| /templates/character-profile | character-profile-template.webp | Quilly sample character profile with external goal, defensive belief, secret, and current knowledge fields |
| /templates/novel-outline | novel-outline-builder.webp | Quilly Story Builder containing a sample act, chapter, consequential plot point, and beats for a courier story |
| /features/manuscript-import-export | docx-import-preview.webp | Quilly DOCX import preview with detected chapter titles, chapter selection, and append or replace controls |

## Search and AI discovery decisions

- Keep concise answers and all FAQs visible in the HTML; do not replace them with content that requires a client-side API request.
- Do not promise FAQ rich results or special AI eligibility. Google documents no extra markup requirement for AI features.
- JSON-LD describes the actual page, absolute canonical URLs, publisher identity, and only real update dates. Upcoming Author is not represented as a purchasable/preorder offer.
- Sitemap lastmod is set only where a real content-review date is maintained; unrelated deployments do not refresh every page date.
- llms.txt summarizes the same public content and links every resource. It is a convenience reference, not a ranking guarantee.
- Measure indexing, queries, impressions, clicks, and trial conversions before choosing the next expansion. No Search Console performance data was available for this change.

## References

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies

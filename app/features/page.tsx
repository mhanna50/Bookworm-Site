import { SiteShell } from "@/components/SiteShell";
import { ArrowRight, BookOpenText, GitFork, HeartPulse, Images, Map, PenLine, Users } from "lucide-react";

const rows = [
  { icon: PenLine, title: "A manuscript that knows your story", text: "Write chapter by chapter while keeping character, location, event, and story context within reach. Entity references make your manuscript feel connected rather than isolated." },
  { icon: GitFork, title: "A visual story builder without the clutter", text: "Organize acts, chapters, plot points, and beats in a hierarchy that is easy to scan and easy to change as the draft evolves." },
  { icon: Users, title: "Characters with actual narrative context", text: "Track who they are, where they appear, what they are connected to, and how their place in the story changes." },
  { icon: Map, title: "Worldbuilding that stays usable", text: "Create flexible world categories for places, factions, lore, systems, and details without forcing your world into someone else’s template." },
  { icon: HeartPulse, title: "Story health, not story scoring", text: "Spot continuity issues, unresolved threads, timeline conflicts, and missing references. Bookworm points to what deserves a second look instead of pretending to judge your writing." },
  { icon: Images, title: "Visual references attached to the story", text: "Keep images alongside the characters, chapters, places, events, and plot points they belong to." },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">The workspace</span>
          <h1>Every part of the story can <em>speak to the others.</em></h1>
          <p>Bookworm keeps planning and writing connected without making your creative process feel like a spreadsheet.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container feature-rows">
          {rows.map(({ icon: Icon, title, text }, index) => (
            <article className="feature-row" key={title}>
              <div className="feature-row-number">0{index + 1}</div>
              <div className="feature-row-icon"><Icon size={21} /></div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container cta-split">
          <BookOpenText size={30} strokeWidth={1.5} />
          <div><span className="eyebrow">A writing tool first</span><h2>Structure should support the page, not replace it.</h2></div>
          <a className="button" href="https://app.bookworm.com/login">Start writing <ArrowRight size={15}/></a>
        </div>
      </section>
    </SiteShell>
  );
}

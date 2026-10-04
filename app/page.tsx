import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  GitFork,
  HeartPulse,
  Map,
  PenLine,
  Sparkles,
  Users,
  WandSparkles,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { ProductShowcases } from "@/components/ProductShowcases";

const features = [
  { icon: PenLine, title: "Manuscript", text: "Draft chapters in a focused writing space that still knows the rest of your story." },
  { icon: GitFork, title: "Story Builder", text: "Shape acts, chapters, plot points, and beats without losing the big picture." },
  { icon: Users, title: "Characters", text: "Keep motivations, relationships, appearances, and notes close to the manuscript." },
  { icon: Map, title: "World", text: "Build places, lore, factions, rules, and details in a structure that stays usable." },
  { icon: HeartPulse, title: "Story Health", text: "Surface continuity gaps, unresolved threads, and missing links before readers do." },
  { icon: Sparkles, title: "Foreshadowing", text: "Plant clues with intention and trace where each promise is eventually paid off." },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero">
        <div className="hero-glow" />
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark">✦</span> An author workspace for whole stories</div>
            <h1>Your whole story,<br /><em>held in one place.</em></h1>
            <p className="hero-lede">
              Write your manuscript, shape your plot, build your world, and keep every thread connected—without turning your creative process into project management.
            </p>
            <div className="hero-actions">
              <a className="button large" href="https://production-phi-flame.vercel.app/login?mode=signup">Start free for 14 days <ArrowRight size={16} /></a>
              <Link className="button ghost large" href="/features">Explore the workspace</Link>
            </div>
            <div className="hero-notes">
              <span><Check size={14} /> 14-day free trial</span>
              <span><Check size={14} /> No credit card required</span>
              <span><Check size={14} /> Then $11.99/month</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Bookworm workspace preview">
            <div className="ornament ornament-top">❦</div>
            <div className="mock-window">
              <div className="mock-sidebar">
                <div className="mock-book-title">The Ashes of Avarin</div>
                {["Overview","Manuscript","Story Builder","Characters","World","Story Health"].map((item, i) => (
                  <div className={i === 2 ? "mock-nav active" : "mock-nav"} key={item}>{item}</div>
                ))}
              </div>
              <div className="mock-main">
                <div className="mock-kicker">STORY BUILDER</div>
                <div className="mock-heading">Act II — The Hollow Crown</div>
                <div className="mock-chapters">
                  <div className="mock-card">
                    <span>Chapter 08</span><strong>The Glass Orchard</strong>
                    <div className="mock-line" /><div className="mock-line short" />
                  </div>
                  <div className="mock-card featured">
                    <span>Chapter 09</span><strong>A Debt in Ash</strong>
                    <div className="mock-plot">Major plot point</div>
                    <div className="mock-beat">Odessa discovers the sealed letter</div>
                    <div className="mock-beat">The map contradicts Rowan</div>
                  </div>
                  <div className="mock-card">
                    <span>Chapter 10</span><strong>Under the Bell Tower</strong>
                    <div className="mock-line" /><div className="mock-line short" />
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card card-health">
              <HeartPulse size={16} />
              <div><strong>Story health</strong><span>2 threads need attention</span></div>
            </div>
            <div className="floating-card card-link">
              <WandSparkles size={16} />
              <div><strong>Connected</strong><span>Clue → Event → Chapter</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="quiet-strip">
        <div className="site-container quiet-strip-inner">
          <span className="small-caps">One writing room</span>
          <p>Manuscript · Plot · Characters · World · Relationships · Progress</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Everything that matters, close at hand</span>
              <h2>Less switching.<br /><em>More writing.</em></h2>
            </div>
            <p>
              Bookworm is designed around the way stories actually grow: one chapter changes a character, one clue changes an event, and everything is connected.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon"><Icon size={19} strokeWidth={1.7} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductShowcases />

      <section className="section resource-discovery">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">The Bookworm library</span>
              <h2>Useful answers for the <em>hard parts of a novel.</em></h2>
            </div>
            <p>Planning, continuity, characters, foreshadowing, worldbuilding, and choosing the right writing workflow—written to be useful even if you never use Bookworm.</p>
          </div>
          <div className="related-resource-grid resource-home-grid">
            <Link href="/guides/how-to-plan-a-novel" className="related-resource-card"><span>How to plan a novel</span><ArrowRight size={15}/></Link>
            <Link href="/guides/how-to-track-foreshadowing" className="related-resource-card"><span>How to track foreshadowing</span><ArrowRight size={15}/></Link>
            <Link href="/alternatives/scrivener" className="related-resource-card"><span>Looking for a Scrivener alternative?</span><ArrowRight size={15}/></Link>
          </div>
          <Link className="inline-link resource-home-link" href="/resources">Explore all writing resources <ArrowRight size={15}/></Link>
        </div>
      </section>

      <section className="section">
        <div className="site-container cta-panel">
          <BookOpen size={28} strokeWidth={1.5} />
          <span className="eyebrow">Your next chapter is enough</span>
          <h2>Build the story as you write it.</h2>
          <p>Start with a blank page. Add structure only when it becomes useful. Your first 14 days are free—no card required.</p>
          <a className="button large" href="https://production-phi-flame.vercel.app/login?mode=signup">Start free <ArrowRight size={16} /></a>
        </div>
      </section>
    </SiteShell>
  );
}

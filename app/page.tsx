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
              <a className="button large" href="https://app.bookworm.com/login">Start writing <ArrowRight size={16} /></a>
              <Link className="button ghost large" href="/features">Explore the workspace</Link>
            </div>
            <div className="hero-notes">
              <span><Check size={14} /> Built for long-form fiction</span>
              <span><Check size={14} /> Calm by default</span>
              <span><Check size={14} /> Your story stays connected</span>
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

      <section className="section section-paper">
        <div className="site-container product-story">
          <div className="product-copy">
            <span className="eyebrow">Built around your story, not a database</span>
            <h2>Plan deeply.<br /><em>Write naturally.</em></h2>
            <p>
              Structure when you need structure. Disappear into the page when you need focus. Bookworm keeps the context nearby without asking you to stare at it all day.
            </p>
            <Link className="inline-link" href="/features">See how the workspace fits together <ArrowRight size={15} /></Link>
          </div>
          <div className="manuscript-preview">
            <div className="page-ribbon">Chapter 12</div>
            <h3>Where the Pines Remember</h3>
            <p>
              The bells had not rung in Avarin for twelve years, yet Odessa woke before dawn certain she had heard them.
            </p>
            <p>
              Beyond the frost-glazed window, the eastern ridge was still only a charcoal line against the sky.
            </p>
            <div className="entity-chip">Odessa Atkins <span>Character</span></div>
            <div className="margin-note">Linked to 3 events<br/>and 2 foreshadowing clues</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container cta-panel">
          <BookOpen size={28} strokeWidth={1.5} />
          <span className="eyebrow">Your next chapter is enough</span>
          <h2>Build the story as you write it.</h2>
          <p>Start with a blank page. Add structure only when it becomes useful.</p>
          <a className="button large" href="https://app.bookworm.com/login">Enter Bookworm <ArrowRight size={16} /></a>
        </div>
      </section>
    </SiteShell>
  );
}

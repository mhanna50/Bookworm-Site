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
import { jsonLd } from "@/lib/site";

const features = [
  { icon: PenLine, title: "Manuscript", text: "Draft chapter by chapter with focus mode, comments, tracked changes, grammar/style review, read-aloud, and automatic story-reference links." },
  { icon: GitFork, title: "Story Builder", text: "Shape acts, chapters, plot points, and beats without losing the big picture." },
  { icon: Users, title: "Characters", text: "Track goals, conflicts, arc, history, secrets, aliases, relationships, and where characters connect to the story." },
  { icon: Map, title: "World", text: "Organize locations, factions, objects, and custom world entries with flexible fields and relationships." },
  { icon: HeartPulse, title: "Story Health · Author · coming soon", text: "Review continuity, plot threads, character activity, timeline signals, orphaned elements, broken references, and structure." },
  { icon: Sparkles, title: "Foreshadowing", text: "Plant clues with intention and trace where each promise is eventually paid off." },
];

const homeFaqs = [
  { question: "What is Quilly?", answer: "Quilly is web-based novel-writing and story-planning software. Draft your manuscript and organize chapters, plot points, characters, worldbuilding, and foreshadowing in one connected workspace." },
  { question: "Can I import a manuscript I have already started?", answer: "Yes. You can import an existing DOCX manuscript into Quilly, or start a new project from scratch." },
  { question: "Can I export my writing?", answer: "Yes. You can export your manuscript as DOCX or PDF, so you can keep a copy of your writing outside Quilly." },
  { question: "Is Quilly only for fantasy writers?", answer: "No. Quilly supports long-form fiction across genres. Use the planning tools that fit your story, whether you are writing romance, mystery, science fiction, fantasy, or another genre." },
  { question: "What is included in the free trial?", answer: "The 30-day free trial includes Writer's writing and planning tools with no credit card required. Writer costs $11.99/month after the trial. AI-assisted Story Health is coming soon in Author and is not included in Writer or the free trial." },
];

export default function HomePage() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaqs.map(({ question, answer }) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }) }} />
      <section className="hero">
        <div className="hero-glow" />
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark">✦</span> A happier home for your next big idea</div>
            <h1>Big ideas. Messy drafts.<br /><em>Brilliant stories.</em></h1>
            <p className="hero-lede">
              Quilly is novel-writing and story-planning software that brings your manuscript, characters, plot, and world together. A little less juggling, a lot more storytelling.
            </p>
            <div className="hero-actions">
              <a className="button large" href="https://app.quillywriter.com/login?mode=signup">Start free for 30 days <ArrowRight size={16} /></a>
              <Link className="button ghost large" href="/features">Take a look around</Link>
            </div>
            <div className="hero-notes">
              <span><Check size={14} /> 30-day free trial</span>
              <span><Check size={14} /> No credit card required</span>
              <span><Check size={14} /> Plans from $11.99/month</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustrative Quilly workspace preview; Story Health is coming soon in Author">
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
              <div><strong>Story Health · preview</strong><span>Author · coming soon</span></div>
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
          <span className="small-caps">Your story, your space</span>
          <p>Manuscript · Story Builder · Characters · Plot Points · Events · Foreshadowing · World · Relationships · Progress</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">All the good stuff, together</span>
              <h2>Less organizing.<br /><em>More imagining.</em></h2>
            </div>
            <p>
              From the first spark of an idea to the final chapter, keep your characters, plot twists, world, and words happily connected in one welcoming workspace.
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
              <span className="eyebrow">A little help along the way</span>
              <h2>Good stories start with <em>curiosity.</em></h2>
            </div>
            <p>Planning, continuity, characters, foreshadowing, worldbuilding, and choosing the right writing workflow—written to be useful even if you never use Quilly.</p>
          </div>
          <div className="related-resource-grid resource-home-grid">
            <Link href="/guides/how-to-plan-a-novel" className="related-resource-card"><span>How to plan a novel</span><ArrowRight size={15}/></Link>
            <Link href="/guides/how-to-track-foreshadowing" className="related-resource-card"><span>How to track foreshadowing</span><ArrowRight size={15}/></Link>
            <Link href="/alternatives/scrivener" className="related-resource-card"><span>Looking for a Scrivener alternative?</span><ArrowRight size={15}/></Link>
            <Link href="/templates" className="related-resource-card"><span>Free novel-writing templates</span><ArrowRight size={15}/></Link>
          </div>
          <Link className="inline-link resource-home-link" href="/resources">Explore all writing resources <ArrowRight size={15}/></Link>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="home-faq-heading">
        <div className="site-container faq-wrap">
          <span className="eyebrow">Before your first chapter</span>
          <h2 id="home-faq-heading">A few things to know.</h2>
          <div className="faq-list">
            {homeFaqs.map(({ question, answer }) => (
              <div className="resource-faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
          <Link className="inline-link" href="/pricing">Compare plans and trial details <ArrowRight size={14} /></Link>
        </div>
      </section>

      <section className="section">
        <div className="site-container cta-panel">
          <BookOpen size={28} strokeWidth={1.5} />
          <span className="eyebrow">Every story starts somewhere</span>
          <h2>Your next chapter starts here.</h2>
          <p>Start from a blank project, explore the sample book, or import an existing DOCX manuscript. Your first 30 days are free—no card required.</p>
          <a className="button large" href="https://app.quillywriter.com/login?mode=signup">Start free <ArrowRight size={16} /></a>
        </div>
      </section>
    </SiteShell>
  );
}

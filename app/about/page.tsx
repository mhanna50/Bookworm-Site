import { SiteShell } from "@/components/SiteShell";
import { ArrowRight, Feather, Flame, LibraryBig } from "lucide-react";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">Why Bookworm exists</span>
          <h1>Writing software should feel closer to a <em>study than a dashboard.</em></h1>
          <p>Bookworm is being built around a simple idea: serious story planning can be powerful without becoming cold, dense, or distracting.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container manifesto-grid">
          <article><Feather size={22}/><h2>Calm over busy</h2><p>Information should appear when it is useful, not compete with the sentence you are trying to write.</p></article>
          <article><LibraryBig size={22}/><h2>Connected over scattered</h2><p>Your manuscript, plot, characters, events, world, and notes should feel like parts of one book—not six unrelated tools.</p></article>
          <article><Flame size={22}/><h2>Character over generic SaaS</h2><p>A writing space can have warmth, texture, and personality while still being fast, modern, and restrained.</p></article>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container story-note">
          <div className="story-note-mark">“</div>
          <div>
            <span className="eyebrow">The design principle</span>
            <h2>Bookworm should disappear when you are writing and become useful the moment you look up.</h2>
            <p>That is the standard for every feature we add.</p>
            <a className="inline-link" href="https://production-phi-flame.vercel.app/login?mode=signup">Try the workspace <ArrowRight size={15}/></a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

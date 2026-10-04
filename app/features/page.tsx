import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import {
  ArrowRight,
  BookOpenText,
  FileDown,
  GitFork,
  Goal,
  HeartPulse,
  Images,
  Map,
  MessageSquareText,
  PenLine,
  Search,
  Users,
  Volume2,
} from "lucide-react";

const rows = [
  {
    icon: PenLine,
    title: "A manuscript editor built for long-form fiction",
    text: "Write chapter by chapter with focus mode, formatting tools, search and replace, automatic story-reference links, and quick access to connected story context.",
  },
  {
    icon: MessageSquareText,
    title: "Comments and revision tools inside the manuscript",
    text: "Anchor comments to selected text, resolve them when finished, review tracked manuscript changes, and run grammar and style checks without leaving the writing workspace.",
  },
  {
    icon: Volume2,
    title: "Read your work aloud",
    text: "Use the manuscript read-aloud controls on selected text or a section when you want to hear rhythm, repetition, or awkward phrasing.",
  },
  {
    icon: GitFork,
    title: "Story Builder: Acts → Chapters → Plot Points → Beats",
    text: "Plan the book in a clean hierarchy, reorder chapters, add plot points and beats, control chapter numbering, and open any chapter directly into its detailed planning view.",
  },
  {
    icon: Users,
    title: "Characters with narrative context",
    text: "Track role, motivation, goals, conflicts, arc, history, secrets, aliases, status, occupation, notes, and relationships—then connect characters back to the rest of the story.",
  },
  {
    icon: Map,
    title: "Flexible worldbuilding",
    text: "Organize locations, factions, objects, and custom world entries. Custom categories can use fields such as text, long text, number, select, multi-select, entity relationships, and date/label values.",
  },
  {
    icon: HeartPulse,
    title: "Story Health: concrete signals, not a writing score",
    text: "Review continuity, plot threads, character activity, unplaced events, timeline signals, orphaned elements, broken references, and structural issues. You decide whether each signal matters.",
  },
  {
    icon: GitFork,
    title: "Relationships that also reflect story data",
    text: "Create custom relationship arrows between story entities. Bookworm also derives dashed connections automatically from chapter, character, location, plot-point, and event links, with focus and layout tools for dense graphs.",
  },
  {
    icon: Images,
    title: "Visual references inside the project",
    text: "Upload images, search and tag them, and connect visual references to story entities such as characters, locations, events, and plot points.",
  },
  {
    icon: Goal,
    title: "Writing goals and real progress history",
    text: "Track total words, daily and weekly goals, today's net change, current and longest streaks, estimated completion, chapter word counts, progress charts, and writing sessions.",
  },
  {
    icon: FileDown,
    title: "DOCX import, DOCX/PDF export, backups, and recovery",
    text: "Import an existing Word manuscript with chapter detection and preview. Export the whole manuscript or selected chapters to DOCX or PDF. Cloud saves, recoverable snapshots, Trash, and Undo add another safety layer.",
  },
  {
    icon: Search,
    title: "Global search and quick creation",
    text: "Search across the project from anywhere and use Quick Create to capture new story information without navigating through several screens first.",
  },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">What Bookworm actually includes</span>
          <h1>Writing, planning, revision, and story context in <em>one connected workspace.</em></h1>
          <p>
            Bookworm is a browser-based novel workspace built around the manuscript, with dedicated tools for structure,
            characters, worldbuilding, events, foreshadowing, relationships, continuity, progress, and recovery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container feature-rows">
          {rows.map(({ icon: Icon, title, text }, index) => (
            <article className="feature-row" key={title}>
              <div className="feature-row-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="feature-row-icon"><Icon size={21} /></div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Go deeper</span><h2>Explore the workflows behind the features.</h2></div>
            <p>These pages explain the writing problems Bookworm is designed to help with, without implying features the product does not currently ship.</p>
          </div>
          <div className="related-resource-grid">
            <Link href="/story-planning-software" className="related-resource-card"><span>Story planning software</span><ArrowRight size={15}/></Link>
            <Link href="/story-continuity-checker" className="related-resource-card"><span>Story continuity checker</span><ArrowRight size={15}/></Link>
            <Link href="/writing-progress-tracker" className="related-resource-card"><span>Writing progress tracker</span><ArrowRight size={15}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container cta-split">
          <BookOpenText size={30} strokeWidth={1.5} />
          <div><span className="eyebrow">A writing tool first</span><h2>Structure should support the manuscript, not replace it.</h2></div>
          <a className="button" href="https://production-phi-flame.vercel.app/login?mode=signup">Start free for 14 days <ArrowRight size={15}/></a>
        </div>
      </section>
    </SiteShell>
  );
}

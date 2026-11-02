import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, FileText, GitCompareArrows, PenLine } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { contentPages } from "@/content";
import { buildResourceGroups, resourceBrowseLinks } from "@/content/resource-navigation";
import { absoluteUrl, jsonLd } from "@/lib/site";

const title = "Writing Resources, Free Templates & Software Comparisons";
const description = "Browse Quilly's writing resources by task or genre. Find practical guides, free templates, worked examples, and writing-software comparisons.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/resources" },
  openGraph: { title, description, url: "/resources", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};
const icons = [PenLine, Compass, FileText, GitCompareArrows];
const starts = [
  { href: "/guides/how-to-plan-a-novel", title: "I have an idea. Where do I start?", text: "Give your next chapter a direction without needing the whole book figured out." },
  { href: "/templates/character-profile", title: "I want to get to know my characters.", text: "Start with a useful profile and a completed example, then make it your own." },
  { href: "/features/manuscript-import-export", title: "I already have a draft.", text: "Understand manuscript import, chapter detection, and your export options." },
];

export default function ResourcesPage() {
  const groups = buildResourceGroups(contentPages);
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage", name: title, description,
    url: absoluteUrl("/resources"), dateModified: "2026-11-01", isPartOf: { "@id": absoluteUrl("/#website") },
    mainEntity: { "@type": "ItemList", numberOfItems: contentPages.length - 1,
      itemListElement: groups.flatMap((group) => group.topics.flatMap((topic) => topic.items)).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: absoluteUrl("/" + item.slug) })),
    },
  };
  return <SiteShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    <section className="library-hero"><div className="site-container">
      <span className="eyebrow">A little help for your next chapter</span>
      <h1>Find your next <em>way forward.</em></h1>
      <p>For the idea you are still untangling, the character you cannot quite figure out, or the draft you are ready to revisit. Start wherever your story needs you.</p>
      <nav className="library-browse" aria-label="Browse resource categories">{resourceBrowseLinks.map((link, index) => { const Icon = icons[index]; return <Link href={link.href} key={link.href}><Icon size={23} aria-hidden="true" /><strong>{link.label}</strong><span>{link.description}</span><ArrowRight size={17} aria-hidden="true" /></Link>; })}</nav>
    </div></section>
    <section className="library-start site-container" aria-labelledby="library-start-heading"><div className="library-start-heading"><BookOpen size={23} aria-hidden="true" /><h2 id="library-start-heading">Not sure where to begin?</h2></div><div className="library-start-grid">{starts.map((start) => <Link href={start.href} key={start.href}><h3>{start.title}</h3><p>{start.text}</p><span>Start here <ArrowRight size={14} aria-hidden="true" /></span></Link>)}</div></section>
    <ResourceLibrary groups={groups} />
  </SiteShell>;
}

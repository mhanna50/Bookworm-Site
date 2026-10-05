import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Check, CheckCircle2, ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { contentPages, getContentPage } from "@/content";
import type { ContentPage } from "@/content/types";

const appSignup = "https://production-phi-flame.vercel.app/login?mode=signup";

function toSectionId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function practicalSteps(intent: ContentPage["intent"]) {
  if (intent === "comparison") {
    return [
      "Start with the writing job the tools need to solve, not the longest feature list.",
      "Test the manuscript and planning workflow together so you can see how much context switching the tool creates.",
      "Check how easily characters, chapters, events, notes, and plot threads stay connected as a project grows.",
      "Look at export, portability, and switching cost before you move a real manuscript into a new system.",
    ];
  }

  if (intent === "commercial") {
    return [
      "Define the exact friction this kind of tool should remove from your current writing process.",
      "Try the tool with a real chapter and a real planning problem instead of judging it from a feature checklist.",
      "Pay attention to how much duplicate data entry is required between manuscript, outline, character, and worldbuilding views.",
      "Choose a workflow you can keep using during drafting and revision, not only during the exciting setup stage.",
    ];
  }

  if (intent === "hub") {
    return [
      "Start with the part of your writing process that is slowing you down most right now.",
      "Use the linked guides to answer one concrete story question before opening another planning system.",
      "Keep planning notes close to the manuscript so useful context is available when you actually write.",
      "Revisit the resource library as the book moves from planning to drafting and then revision.",
    ];
  }

  return [
    "Decide what this idea changes in your specific story before adding more detail.",
    "Connect it to the chapter, character, event, plot point, or relationship it actually affects.",
    "Write down the before-and-after state so the narrative consequence is easy to see during revision.",
    "Use only as much structure as helps you make the next writing decision; stop before the planning becomes a second draft.",
  ];
}

function practicalHeading(intent: ContentPage["intent"]) {
  if (intent === "comparison") return "How to evaluate this comparison";
  if (intent === "commercial") return "How to choose without overcomplicating it";
  if (intent === "hub") return "A useful way to browse these resources";
  return "Put the idea to work in your draft";
}

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join("/");
  const page = getContentPage(key);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/" + page.slug },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: "/" + page.slug,
    },
  };
}

export default async function SearchContentPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const page = getContentPage(key);
  if (!page) notFound();

  const breadcrumbItems = page.slug.split("/");
  const steps = practicalSteps(page.intent);
  const schema = {
    "@context": "https://schema.org",
    "@type": page.intent === "guide" ? "Article" : "WebPage",
    name: page.title,
    headline: page.title,
    description: page.description,
    about: "Novel writing and story planning",
    isPartOf: { "@type": "WebSite", name: "Bookworm" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bookworm", item: "/" },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.replaceAll("-", " "),
        item: "/" + breadcrumbItems.slice(0, index + 1).join("/"),
      })),
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="resource-page">
        <header className="resource-hero">
          <div className="site-container resource-hero-layout">
            <div className="resource-hero-main">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Bookworm</Link>
                <span>/</span>
                {breadcrumbItems.length > 1 && (
                  <>
                    <Link href={page.intent === "guide" ? "/resources" : "/" + breadcrumbItems[0]}>
                      {breadcrumbItems[0].replaceAll("-", " ")}
                    </Link>
                    <span>/</span>
                  </>
                )}
                <span aria-current="page">{breadcrumbItems.at(-1)?.replaceAll("-", " ")}</span>
              </nav>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="resource-lede">{page.intro}</p>
              <div className="resource-summary">
                <span><Check size={14} /> Written for novelists</span>
                <span><Check size={14} /> Practical, not template-heavy</span>
                <span><Check size={14} /> Connected to relevant Bookworm tools</span>
              </div>
            </div>
          </div>
        </header>

        <div className="site-container resource-layout">
          <div className="resource-body">
            <section className="resource-quick-answer" aria-label="Quick answer">
              <span className="small-caps">Quick answer</span>
              <p>{page.description}</p>
            </section>

            <nav className="resource-on-page" aria-label="On this page">
              <span className="small-caps">On this page</span>
              <div className="resource-on-page-links">
                {page.sections.map((section) => (
                  <a href={"#" + toSectionId(section.heading)} key={section.heading}>
                    {section.heading}
                  </a>
                ))}
                {page.table && <a href="#comparison-table">{page.table.caption}</a>}
                <a href="#practical-next-steps">Practical next steps</a>
              </div>
            </nav>

            {page.sections.map((section) => (
              <section key={section.heading} id={toSectionId(section.heading)} className="resource-section">
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className="resource-list">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            {page.table && (
              <section className="resource-table-section" id="comparison-table">
                <h2>{page.table.caption}</h2>
                <div className="resource-table-wrap">
                  <table className="resource-table">
                    <thead>
                      <tr>{page.table.columns.map((column) => <th key={column}>{column}</th>)}</tr>
                    </thead>
                    <tbody>
                      {page.table.rows.map((row) => (
                        <tr key={row.join("|")}>
                          {row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={index}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <section className="resource-practical-section" id="practical-next-steps">
              <span className="eyebrow">Use the page, then write</span>
              <h2>{practicalHeading(page.intent)}</h2>
              <p className="resource-practical-intro">
                Good planning should reduce uncertainty and make the next writing decision easier. Use these steps to turn the ideas above into something concrete without adding unnecessary process.
              </p>
              <div className="resource-step-grid">
                {steps.map((step, index) => (
                  <div className="resource-step-card" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {page.slug === "resources" && (
              <section className="resource-directory">
                <span className="eyebrow">Browse the library</span>
                {[
                  ["Writing software", contentPages.filter((item) => item.intent === "commercial")],
                  ["Comparisons & alternatives", contentPages.filter((item) => item.intent === "comparison")],
                  ["Writing guides", contentPages.filter((item) => item.intent === "guide")],
                ].map(([label, items]) => (
                  <div className="resource-directory-group" key={label as string}>
                    <h2>{label as string}</h2>
                    <div className="resource-directory-links">
                      {(items as typeof contentPages).map((item) => (
                        <Link key={item.slug} href={"/" + item.slug}>
                          <span>{item.title}</span>
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {page.sources && page.sources.length > 0 && (
              <section className="resource-sources">
                <span className="small-caps">Sources for current competitor details</span>
                <p>Competitor features and pricing change. These comparison details were checked against official public pages in October 2026.</p>
                <div>
                  {page.sources.map((source) => (
                    <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                      {source.label} <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="resource-aside">
            <div className="resource-aside-card">
              <span className="small-caps">In Bookworm</span>
              <BookOpen size={22} />
              <h2>{page.ctaTitle ?? "Keep the story connected while you write."}</h2>
              <p>{page.ctaText ?? "Use Bookworm to move between manuscript, planning, characters, worldbuilding, events, clues, relationships, and progress without rebuilding context."}</p>
              <a className="button full" href={appSignup}>Start writing <ArrowRight size={14} /></a>
            </div>

            <div className="resource-aside-note">
              <CheckCircle2 size={18} />
              <div>
                <strong>Built for real drafting</strong>
                <p>Keep the planning detail you need without turning the writing process into database maintenance.</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="section section-paper resource-related">
          <div className="site-container">
            <div className="resource-related-heading">
              <div>
                <span className="eyebrow">Keep exploring</span>
                <h2>Related resources</h2>
              </div>
              <Link className="inline-link" href="/resources">
                Browse all resources <ArrowRight size={14} />
              </Link>
            </div>
            <div className="related-resource-grid">
              {page.related.map((item) => (
                <Link href={item.href} key={item.href} className="related-resource-card">
                  <span>{item.label}</span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Check, CheckCircle2, ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { ResourceVisual } from "@/components/ResourceVisual";
import { contentPages, getContentPage } from "@/content";
import type { ContentPage } from "@/content/types";
import { breadcrumbSchema, resourceBreadcrumbs, resourceDescription, resourceSchema, toSectionId } from "@/lib/resource-seo";
import { jsonLd } from "@/lib/site";

const appSignup = "https://app.quillywriter.com/login?mode=signup";

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
  return contentPages.filter((page) => page.slug !== "resources").map((page) => ({ slug: page.slug.split("/") }));
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
  const description = resourceDescription(page);
  return {
    title: page.title,
    description,
    alternates: { canonical: "/" + page.slug },
    openGraph: {
      title: page.title,
      description,
      type: "article",
      url: "/" + page.slug,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Quilly — novel writing and story planning" }],
    },
    twitter: { card: "summary_large_image", title: page.title, description, images: ["/twitter-image"] },
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

  const breadcrumbItems = resourceBreadcrumbs(page);
  const steps = practicalSteps(page.intent);
  const mentionsStoryHealth = /story health/i.test(JSON.stringify(page));
  const schema = resourceSchema(page);
  const breadcrumbs = breadcrumbSchema(page);

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />

      <article className="resource-page">
        <header className="resource-hero">
          <div className="site-container resource-hero-layout">
            <div className="resource-hero-main">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                {breadcrumbItems.map((item, index) => (
                  <Fragment key={item.href}>
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {index === breadcrumbItems.length - 1
                      ? <span aria-current="page">{item.label}</span>
                      : <Link href={item.href}>{item.label}</Link>}
                  </Fragment>
                ))}
              </nav>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="resource-lede">{page.intro}</p>
              {page.updatedAt && <p className="resource-byline">By <Link href="/about">Quilly</Link><span aria-hidden="true"> · </span>Updated <time dateTime={page.updatedAt}>{new Date(page.updatedAt + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p>}
              <div className="resource-summary">
                <span><Check size={14} /> Written for novelists</span>
                <span><Check size={14} /> Practical, not template-heavy</span>
                <span><Check size={14} /> Connected to relevant Quilly tools</span>
              </div>
            </div>
          </div>
        </header>

        <div className="site-container resource-layout">
          <div className="resource-body">
            {mentionsStoryHealth && !page.summary && (
              <section className="resource-quick-answer" aria-label="Story Health availability">
                <span className="small-caps">Story Health · coming soon</span>
                <p>Story Health is planned for the Author plan and is not available in Writer or the 30-day free trial. References to its diagnostics on this page describe the upcoming feature. <Link href="/pricing">See current plans.</Link></p>
              </section>
            )}
            <section className="resource-quick-answer" aria-label="Quick answer">
              <span className="small-caps">Quick answer</span>
              <p>{page.summary ?? resourceDescription(page)}</p>
              {page.takeaways && <ul className="resource-takeaways">{page.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>}
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
                {page.faqs?.length ? <a href="#frequently-asked-questions">Frequently asked questions</a> : null}
              </div>
            </nav>

            {page.sections.map((section) => (
              <Fragment key={section.heading}>
              <section id={toSectionId(section.heading)} className="resource-section">
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className="resource-list">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
              {page.visuals?.filter((visual) => visual.afterSection === section.heading).map((visual) => <ResourceVisual visual={visual} key={visual.id} />)}
              </Fragment>
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
              <h2>{page.workflow?.title ?? practicalHeading(page.intent)}</h2>
              <p className="resource-practical-intro">
                {page.workflow?.intro ?? "Good planning should reduce uncertainty and make the next writing decision easier. Use these steps to turn the ideas above into something concrete without adding unnecessary process."}
              </p>
              <div className="resource-step-grid">
                {(page.workflow?.steps ?? steps.map((body) => ({ title: "", body }))).map((step, index) => (
                  <div className="resource-step-card" key={step.title || step.body}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {step.title && <h3>{step.title}</h3>}
                    <p>{step.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {page.faqs?.length ? (
              <section className="resource-faq" id="frequently-asked-questions">
                <span className="small-caps">Questions writers ask</span>
                <h2>Frequently asked questions</h2>
                {page.faqs.map((faq) => <div className="resource-faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
              </section>
            ) : null}

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
                <span className="small-caps">Official sources and further reading</span>
                <p>External products and instructions can change. Check the linked official pages for current details.</p>
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
              <span className="small-caps">In Quilly</span>
              <BookOpen size={22} />
              <h2>{page.ctaTitle ?? "Keep the story connected while you write."}</h2>
              <p>{page.ctaText ?? "Use Quilly to move between manuscript, planning, characters, worldbuilding, events, clues, relationships, and progress without rebuilding context."}</p>
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

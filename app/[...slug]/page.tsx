import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Check, ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { contentPages, getContentPage } from "@/content";

const appSignup = "https://production-phi-flame.vercel.app/login?mode=signup";

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
          <div className="site-container resource-narrow">
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
        </header>

        <div className="site-container resource-layout">
          <div className="resource-body">
            {page.sections.map((section) => (
              <section key={section.heading} className="resource-section">
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className="resource-list">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            {page.intent === "hub" && (
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
          </aside>
        </div>

        <section className="section section-paper resource-related">
          <div className="site-container resource-narrow">
            <span className="eyebrow">Keep exploring</span>
            <h2>Related resources</h2>
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

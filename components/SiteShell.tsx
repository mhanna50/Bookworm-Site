"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ArrowRight, ChevronDown, CircleUserRound, Compass, PencilLine, FileText, GitCompareArrows, LibraryBig } from "lucide-react";
import { useRef, useState } from "react";
import { resourceBrowseLinks } from "@/content/resource-navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/templates", label: "Templates" },
      { href: "/book-writing-app", label: "Book writing app" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Resource library" },
      ...resourceBrowseLinks.slice(0, 2).map((link) => ({ href: link.href, label: link.label })),
      { href: "/resources#templates", label: "Free writing templates" },
    ],
  },
  {
    title: "Writing guides",
    links: [
      { href: "/guides/how-to-plot-a-novel", label: "How to plot a novel" },
      { href: "/guides/what-is-a-story-bible", label: "Story bibles" },
      { href: "/guides/what-is-foreshadowing", label: "Foreshadowing" },
      { href: "/guides/what-is-worldbuilding", label: "Worldbuilding" },
    ],
  },
  {
    title: "Compare",
    links: [
      { href: "/compare", label: "All comparisons" },
      { href: "/compare/google-docs-vs-quilly", label: "Google Docs vs Quilly" },
      { href: "/compare/word-vs-quilly", label: "Word vs Quilly" },
      { href: "/compare/scrivener-vs-quilly", label: "Scrivener vs Quilly" },
    ],
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourceToggle = useRef<HTMLButtonElement>(null);
  const resourceActive = pathname !== "/" && !["/about", "/features", "/pricing"].some((path) => pathname === path || pathname.startsWith(path + "/"));
  const browseIcons = [PencilLine, Compass, FileText, GitCompareArrows];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-container nav-wrap">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <img className="brand-logo" src="/quilly_logo_with_smaller_quill.svg" alt="Quilly" />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.filter((item) => item.href !== "/resources").map((item) => (
              <Link
                key={item.href}
                className={pathname === item.href || pathname.startsWith(item.href + "/") ? "nav-link active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <div className="resources-nav"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) setResourcesOpen(false); }}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setResourcesOpen(false); }}
              onKeyDown={(event) => { if (event.key === "Escape") { setResourcesOpen(false); resourceToggle.current?.focus(); } }}>
              <div className="resources-trigger-row">
                <Link className={resourceActive ? "nav-link active" : "nav-link"} href="/resources" onClick={() => setResourcesOpen(false)}>Resources</Link>
                <button type="button" className="resources-toggle" aria-label="Browse resources" aria-expanded={resourcesOpen} aria-controls="resource-navigation" ref={resourceToggle} onClick={() => setResourcesOpen(!resourcesOpen)}><ChevronDown size={18} aria-hidden="true" /></button>
              </div>
              <div className="resources-dropdown" id="resource-navigation" hidden={!resourcesOpen}>
                <div className="resources-dropdown-col">
                  <span className="resources-dropdown-heading">Find your next step</span>
                  <Link href="/resources" onClick={() => setResourcesOpen(false)}><LibraryBig size={22} aria-hidden="true" /><span><strong>All resources</strong><small>Search the full collection or find a starting point.</small></span></Link>
                  {resourceBrowseLinks.slice(0, 2).map((link, index) => { const Icon = browseIcons[index]; return <Link href={link.href} key={link.href} onClick={() => setResourcesOpen(false)}><Icon size={22} aria-hidden="true" /><span><strong>{link.label}</strong><small>{link.description}</small></span></Link>; })}
                </div>
                <div className="resources-dropdown-col">
                  <span className="resources-dropdown-heading">Something practical</span>
                  {resourceBrowseLinks.slice(2).map((link, index) => { const Icon = browseIcons[index + 2]; return <Link href={link.href} key={link.href} onClick={() => setResourcesOpen(false)}><Icon size={22} aria-hidden="true" /><span><strong>{link.label}</strong><small>{link.description}</small></span></Link>; })}
                  <Link href="/templates/novel-outline" onClick={() => setResourcesOpen(false)}><PencilLine size={22} aria-hidden="true" /><span><strong>Start with an outline</strong><small>A flexible worksheet with a worked example.</small></span></Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-actions">
            <a className="header-signin desktop-only" href="https://app.quillywriter.com/login?mode=signin">
              <CircleUserRound size={25} strokeWidth={1.9} aria-hidden="true" /> <span>Sign in</span>
            </a>
            <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-site-menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-menu" id="mobile-site-menu">
            <div className="site-container mobile-menu-inner">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <nav className="mobile-resource-links" aria-label="Browse resources">{resourceBrowseLinks.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>
              <a href="https://app.quillywriter.com/login?mode=signin">Log in</a>
              <a className="button" href="https://app.quillywriter.com/login?mode=signup">Start free — no card</a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-cta">
            <div>
              <span className="eyebrow">Your story deserves one connected home</span>
              <h2>Plan less in circles. Write with the whole story in view.</h2>
              <p>Bring manuscript, chapters, plot points, characters, worldbuilding, relationships, foreshadowing, and progress into the same workspace.</p>
            </div>
            <div className="footer-cta-actions">
              <a className="button" href="https://app.quillywriter.com/login?mode=signup">
                Start writing free <ArrowUpRight size={14} />
              </a>
              <a className="inline-link" href="https://app.quillywriter.com/login?mode=signin">
                Log in <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="footer-main">
            <div className="footer-intro">
              <Link className="brand footer-brand" href="/">
                <img className="brand-logo footer-logo" src="/quilly_logo_with_smaller_quill.svg" alt="Quilly" />
              </Link>
              <p className="footer-copy">A quieter, more connected workspace for novelists who want planning to support the draft instead of getting in its way.</p>
              <Link className="footer-about-link" href="/about">The story behind Quilly <ArrowRight size={13} /></Link>
            </div>

            <div className="footer-groups">
              {footerGroups.map((group) => (
                <div className="footer-group" key={group.title}>
                  <span className="small-caps">{group.title}</span>
                  <div>
                    {group.links.map((link) => (
                      <Link href={link.href} key={link.href}>{link.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-note">© {new Date().getFullYear()} Quilly. Made for writers.</p>
            <div>
              <Link href="/about">About</Link>
              <Link href="/resources">Resources</Link>
              <a href="https://app.quillywriter.com/login?mode=signin">Log in</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

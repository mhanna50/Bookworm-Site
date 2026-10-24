"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ArrowRight, ChevronDown, CircleUserRound, BookOpen, UsersRound, PencilLine, FileText, CircleHelp, LibraryBig } from "lucide-react";
import { useState } from "react";

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
      { href: "/best-novel-writing-software", label: "Best novel writing software" },
      { href: "/best-story-planning-software", label: "Best story planning software" },
      { href: "/novel-outline-software", label: "Novel outline software" },
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
      { href: "/alternatives/plottr", label: "Plottr alternatives" },
      { href: "/alternatives/campfire-writing", label: "Campfire alternatives" },
      { href: "/character-relationship-mapper-for-writers", label: "Relationship mapping" },
      { href: "/plot-thread-tracker", label: "Plot thread tracking" },
    ],
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-container nav-wrap">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <img className="brand-logo" src="/quilly-logo-transparent.svg?v=20261024-fixed" alt="Quilly" />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.filter((item) => item.href !== "/resources").map((item) => (
              <Link
                key={item.href}
                className={pathname === item.href ? "nav-link active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <div className="resources-nav">
              <Link className={pathname.startsWith("/resources") ? "nav-link resources-trigger active" : "nav-link resources-trigger"} href="/resources" aria-haspopup="true">
                Resources <ChevronDown size={18} aria-hidden="true" />
              </Link>
              <div className="resources-dropdown">
                <div className="resources-dropdown-col">
                  <span className="resources-dropdown-heading">Explore writing</span>
                  <Link href="/resources"><LibraryBig size={22} /><span><strong>Resource library</strong><small>Guides and ideas for every stage of your novel.</small></span></Link>
                  <Link href="/guides/how-to-plot-a-novel"><PencilLine size={22} /><span><strong>Plotting a novel</strong><small>Shape your story from idea to outline.</small></span></Link>
                  <Link href="/guides/what-is-worldbuilding"><BookOpen size={22} /><span><strong>Worldbuilding</strong><small>Build a setting that feels alive.</small></span></Link>
                </div>
                <div className="resources-dropdown-col">
                  <span className="resources-dropdown-heading">More from Quilly</span>
                  <Link href="/guides/what-is-a-story-bible"><FileText size={22} /><span><strong>Story bibles</strong><small>Keep characters, details, and lore together.</small></span></Link>
                  <Link href="/character-relationship-mapper-for-writers"><UsersRound size={22} /><span><strong>Character relationships</strong><small>Track the connections in your cast.</small></span></Link>
                  <Link href="/guides/what-is-foreshadowing"><CircleHelp size={22} /><span><strong>Foreshadowing guide</strong><small>Plant clues and build satisfying payoffs.</small></span></Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-actions">
            <a className="header-signin desktop-only" href="https://production-phi-flame.vercel.app/login?mode=signin">
              <CircleUserRound size={25} strokeWidth={1.9} aria-hidden="true" /> <span>Sign in</span>
            </a>
            <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-menu">
            <div className="site-container mobile-menu-inner">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <a href="https://production-phi-flame.vercel.app/login?mode=signin">Log in</a>
              <a className="button" href="https://production-phi-flame.vercel.app/login?mode=signup">Start free — no card</a>
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
              <a className="button" href="https://production-phi-flame.vercel.app/login?mode=signup">
                Start writing free <ArrowUpRight size={14} />
              </a>
              <a className="inline-link" href="https://production-phi-flame.vercel.app/login?mode=signin">
                Log in <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="footer-main">
            <div className="footer-intro">
              <Link className="brand footer-brand" href="/">
                <img className="brand-logo footer-logo" src="/quilly-logo-transparent.svg?v=20261024-fixed" alt="Quilly" />
              </Link>
              <p className="footer-copy">A quieter, more connected workspace for novelists who want planning to support the draft instead of getting in its way.</p>
              <Link className="footer-about-link" href="/about">Why we built Quilly <ArrowRight size={13} /></Link>
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
              <a href="https://production-phi-flame.vercel.app/login?mode=signin">Log in</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

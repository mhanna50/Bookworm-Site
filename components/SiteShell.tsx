"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Feather, ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
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
            <span className="brand-seal"><Feather size={15} strokeWidth={1.8} /></span>
            <span>Bookworm</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                className={pathname === item.href ? "nav-link active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="text-link desktop-only" href="https://production-phi-flame.vercel.app/login?mode=signin">
              Log in
            </a>
            <a className="button small desktop-only" href="https://production-phi-flame.vercel.app/login?mode=signup">
              Start free <ArrowUpRight size={14} />
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
                <span className="brand-seal"><Feather size={15} /></span>
                <span>Bookworm</span>
              </Link>
              <p className="footer-copy">A quieter, more connected workspace for novelists who want planning to support the draft instead of getting in its way.</p>
              <Link className="footer-about-link" href="/about">Why we built Bookworm <ArrowRight size={13} /></Link>
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
            <p className="footer-note">© {new Date().getFullYear()} Bookworm. Made for writers.</p>
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

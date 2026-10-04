"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Feather, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
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
        <div className="site-container footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-seal"><Feather size={15} /></span>
              <span>Bookworm</span>
            </Link>
            <p className="footer-copy">A quieter place to build stories that last.</p>
          </div>
          <div className="footer-links">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
          </div>
          <p className="footer-note">© {new Date().getFullYear()} Bookworm. Made for writers.</p>
        </div>
      </footer>
    </div>
  );
}

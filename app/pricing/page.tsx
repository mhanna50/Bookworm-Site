"use client";

import Link from "next/link";

import { SiteShell } from "@/components/SiteShell";
import { Check, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Will there be a free trial?", "Yes. The launch plan is to let writers experience the full workspace before committing."],
  ["Can I export my work?", "Export and recovery are treated as core ownership features, not premium lock-ins."],
  ["Is this only for fantasy writers?", "No. The visual language is literary, but the workspace is being built for long-form fiction across genres."],
];

export default function PricingPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">Simple pricing</span>
          <h1>One workspace for the <em>whole book.</em></h1>
          <p>No maze of tiers. No paying extra just to keep the parts of your story connected.</p>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="site-container pricing-wrap">
          <div className="price-card">
            <div className="price-card-top">
              <span className="small-caps">Bookworm</span>
              <div className="price"><strong>$12</strong><span>/ month</span></div>
              <p>Everything you need to plan, write, and understand a novel.</p>
            </div>
            <div className="price-features">
              {["Unlimited projects","Full manuscript editor","Story Builder","Characters & world","Events & foreshadowing","Relationships graph","Story Health","Writing progress","Backups & recovery"].map(item => (
                <div key={item}><Check size={15}/><span>{item}</span></div>
              ))}
            </div>
            <a className="button large full" href="https://production-phi-flame.vercel.app/login?mode=signup">Start free</a>
            <p className="fine-print">Pricing is a launch target and may change before public release.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Compare your options</span><h2>Choose the workflow, not just the price.</h2></div>
            <p>Bookworm is not automatically the right tool for every writer. Compare how its connected-story model differs from established alternatives.</p>
          </div>
          <div className="related-resource-grid">
            <Link href="/compare/scrivener-vs-bookworm" className="related-resource-card"><span>Bookworm vs Scrivener</span><span>→</span></Link>
            <Link href="/compare/dabble-vs-bookworm" className="related-resource-card"><span>Bookworm vs Dabble</span><span>→</span></Link>
            <Link href="/alternatives/plottr" className="related-resource-card"><span>Bookworm vs Plottr</span><span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container faq-wrap">
          <span className="eyebrow">Questions, answered plainly</span>
          <h2>Before you begin.</h2>
          <div className="faq-list">
            {faqs.map(([q,a], i) => (
              <button className="faq-item" key={q} onClick={() => setOpen(open === i ? null : i)}>
                <div><span>{q}</span>{open === i ? <Minus size={17}/> : <span className="faq-plus">+</span>}</div>
                {open === i && <p>{a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

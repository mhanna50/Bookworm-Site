import Link from "next/link";
import { Check, Minus, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { PricingFaq } from "@/components/PricingFaq";

const appSignup = "https://app.quillywriter.com/login?mode=signup";

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">Simple pricing</span>
          <h1>Try Quilly <em>free for 14 days.</em></h1>
          <p>No credit card required. Explore Writer’s writing and planning tools, then continue for $11.99/month. Author is coming soon at $16.99/month with AI-assisted Story Health. Story Health is not included in Writer or the free trial.</p>
          <div className="trial-callout" role="note" aria-label="Quilly trial terms">
            <strong>14 days free</strong>
            <span>No credit card required</span>
            <span>Plans from $11.99/month</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="site-container pricing-wrap">
          {([
            { name: "Writer", price: "11.99", author: false, description: "Your connected writing workspace." },
            { name: "Author", price: "16.99", author: true, description: "Everything in Writer, plus AI-assisted Story Health." },
          ]).map(plan => <article className={`price-card plan-card ${plan.author ? "plan-card-author" : ""}`} key={plan.name} aria-labelledby={`plan-${plan.name}`}>
            {plan.author && <span className="plan-highlight"><Sparkles size={14} aria-hidden="true" /> More insight for your story</span>}
            <div className="price-card-top">
              <h2 id={`plan-${plan.name}`} className="plan-name">{plan.name}</h2>
              <div className="price"><strong>${plan.price}</strong><span>/ month</span></div>
              <p>{plan.description}</p>
              {plan.author && <p className="fine-print">Planned features · not available yet</p>}
            </div>
            <ul className="plan-checklist">
              {[
                ["Multiple book projects", true],
                ["Manuscript editor + revision tools", true],
                ["Story Builder", true],
                ["Characters & flexible worldbuilding", true],
                ["Plot Points, Events & Foreshadowing", true],
                ["Relationships graph", true],
                ["Goals, streaks & writing sessions", true],
                ["DOCX import + DOCX/PDF export", true],
                ["Backups, snapshots & Trash recovery", true],
                ["AI-assisted Story Health", plan.author],
                ["Potential plot-hole detection", plan.author],
                ["Story continuity suggestions", plan.author],
                ["Character and timeline consistency checks", plan.author],
                ["Unresolved threads & foreshadowing insights", plan.author],
              ].map(([label, included]) => <li key={String(label)} className={included ? "" : "plan-excluded"}>
                {included ? <Check size={17} aria-hidden="true" /> : <Minus size={17} aria-hidden="true" />}
                <span><span className="sr-only">{included ? "Included: " : "Not included: "}</span>{label}</span>
              </li>)}
            </ul>
            {plan.author ? <div className="plan-coming-soon" role="note"><strong>Coming soon</strong><span>Author is still in the works.<br />Start writing today with Writer.</span></div> : <a className="button large full" href={appSignup}>Try Writer free for 14 days</a>}
            <p className="fine-print">{plan.author ? "Author is not available to purchase yet. AI suggestions will help guide your review; you stay in control of your story." : "No card upfront. Writer is $11.99/month after your trial. Story Health is not included. Cancel anytime."}</p>
          </article>)}
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Compare your options</span><h2>Choose the workflow, not just the price.</h2></div>
            <p>Quilly is not automatically the right tool for every writer. Compare how its connected-story model differs from established alternatives.</p>
          </div>
          <div className="related-resource-grid">
            <Link href="/compare/scrivener-vs-bookworm" className="related-resource-card"><span>Quilly vs Scrivener</span><span>→</span></Link>
            <Link href="/compare/dabble-vs-bookworm" className="related-resource-card"><span>Quilly vs Dabble</span><span>→</span></Link>
            <Link href="/alternatives/plottr" className="related-resource-card"><span>Quilly vs Plottr</span><span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container faq-wrap">
          <span className="eyebrow">Questions, answered plainly</span>
          <h2>Before you begin.</h2>
          <PricingFaq />
        </div>
      </section>
    </SiteShell>
  );
}

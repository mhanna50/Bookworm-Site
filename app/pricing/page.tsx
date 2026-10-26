import Link from "next/link";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { PricingFaq } from "@/components/PricingFaq";

const appSignup = "https://production-phi-flame.vercel.app/login?mode=signup";

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">Simple pricing</span>
          <h1>Try Quilly <em>free for 14 days.</em></h1>
          <p>No credit card required. Explore Quilly’s Basic writing and planning tools, then choose Basic at $11.99/month or Plus at $16.99/month. Story Health requires a Plus subscription and is not included in the trial.</p>
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
            { name: "Quilly Basic", price: "11.99", plus: false, description: "Your connected writing workspace." },
            { name: "Quilly Plus", price: "16.99", plus: true, description: "Everything in Basic, plus Story Health diagnostics." },
          ]).map(plan => <div className="price-card" key={plan.name}>
            <div className="price-card-top">
              <span className="small-caps">{plan.name}</span>
              <div className="price"><strong>${plan.price}</strong><span>/ month</span></div>
              <p>{plan.description}</p>
            </div>
            <div className="price-features">
              {["Multiple book projects","Manuscript editor + revision tools","Story Builder","Characters & flexible worldbuilding","Plot Points, Events & Foreshadowing","Relationships graph","Goals, streaks & writing sessions","DOCX import + DOCX/PDF export","Backups, snapshots & Trash recovery", ...(plan.plus ? ["Story Health diagnostics"] : [])].map(item => (
                <div key={item}><Check size={15}/><span>{item}</span></div>
              ))}
            </div>
            <a className="button large full" href={appSignup}>Start your free 14-day trial</a>
            <p className="fine-print">No card upfront. Trial includes Basic features; Story Health is not included. Subscribe to {plan.name} for ${plan.price}/month after your trial. Cancel anytime.</p>
          </div>)}
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

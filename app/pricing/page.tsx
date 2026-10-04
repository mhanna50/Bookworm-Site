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
          <h1>Try the whole workspace <em>free for 14 days.</em></h1>
          <p>No credit card required. Explore Bookworm with the full workspace, then continue for $11.99/month if it fits the way you write.</p>
          <div className="trial-callout" role="note" aria-label="Bookworm trial terms">
            <strong>14 days free</strong>
            <span>No credit card required</span>
            <span>Then $11.99/month</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="site-container pricing-wrap">
          <div className="price-card">
            <div className="price-card-top">
              <span className="small-caps">Bookworm</span>
              <div className="price"><strong>$11.99</strong><span>/ month</span></div>
              <p>Start with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="price-features">
              {["Unlimited projects","Full manuscript editor","Story Builder","Characters & world","Events & foreshadowing","Relationships graph","Story Health","Writing progress","Backups & recovery"].map(item => (
                <div key={item}><Check size={15}/><span>{item}</span></div>
              ))}
            </div>
            <a className="button large full" href={appSignup}>Start your free 14-day trial</a>
            <p className="fine-print">No card upfront. After 14 days, add a payment method to continue at $11.99/month. Cancel anytime.</p>
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
          <PricingFaq />
        </div>
      </section>
    </SiteShell>
  );
}

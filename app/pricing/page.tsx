import Link from "next/link";
import { PricingCards } from "@/components/PricingCards";
import { SiteShell } from "@/components/SiteShell";
import { PricingFaq } from "@/components/PricingFaq";


export default function PricingPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="site-container narrow">
          <span className="eyebrow">Simple pricing</span>
          <h1>Try Quilly <em>free for 30 days.</em></h1>
          <p>Explore Writer’s writing and planning tools with no credit card required. Choose Writer monthly or annually when you are ready. Author and its AI-assisted Story Health features are coming soon.</p>
          <p className="fine-print">Your trial does not automatically charge you. After 30 days, explicitly purchase a subscription to continue editing.</p>
          <div className="trial-callout" role="note" aria-label="Quilly trial terms">
            <strong>30 days free</strong>
            <span>No credit card required</span>
            <span>Writer from $10.00/month, billed annually</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <PricingCards />
      </section>

      <section className="section section-paper">
        <div className="site-container narrow">
          <span className="eyebrow">For our earliest supporters</span>
          <h2>Founding Writers get 20% off.</h2>
          <p>Annual savings are already reflected in the prices above. This separate promotion applies at checkout: the first 100 eligible new paid subscriptions can receive 20% off ongoing subscription charges, applied automatically at checkout while spots remain. No code required. The discount stays with that uninterrupted subscription; if you cancel, it doesn't automatically transfer to a new one.</p>
          <p>After your 30-day no-card trial, choose monthly or annual billing. Your manuscripts remain exportable even if you don't subscribe.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Compare your options</span><h2>Choose the workflow, not just the price.</h2></div>
            <p>Quilly is not automatically the right tool for every writer. Compare how its connected-story model differs from established alternatives.</p>
          </div>
          <div className="related-resource-grid">
            <Link href="/compare/scrivener-vs-quilly" className="related-resource-card"><span>Quilly vs Scrivener</span><span>→</span></Link>
            <Link href="/compare/dabble-vs-quilly" className="related-resource-card"><span>Quilly vs Dabble</span><span>→</span></Link>
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

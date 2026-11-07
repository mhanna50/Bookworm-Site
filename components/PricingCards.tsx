"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { paidPlans, writerSignup, type BillingInterval } from "@/lib/pricing";

const features = [
  "Manuscript editor",
  "Story Builder and planning",
  "Characters and worldbuilding",
  "Events and foreshadowing",
  "Relationships and Review",
  "Writing goals and progress",
  "DOCX import · DOCX/PDF export",
  "Autosave, backups, and recovery",
  "AI-assisted Story Health",
  "Plot-hole and continuity suggestions",
];
const plans = [
  { id: "trial", name: "Free Trial", badge: "30 days to explore", description: "Find your writing rhythm. No card required." },
  { id: "writer", name: "Writer", badge: "Available now", description: "Your connected writing and planning workspace." },
  { id: "author", name: "Author", badge: "Coming soon", description: "Writer's tools, plus planned AI-assisted story insights." },
] as const;

export function PricingCards() {
  const [interval, setInterval] = useState<BillingInterval>("year");
  return (
    <>
      <div className="billing-options">
        <div className="billing-toggle" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={interval === "month"} onClick={() => setInterval("month")}>Monthly</button>
          <button type="button" aria-pressed={interval === "year"} onClick={() => setInterval("year")}>Annually</button>
        </div>
        <p id="billing-explanation" aria-live="polite">{interval === "year" ? "Monthly equivalents shown. The full annual total is charged upfront." : "Monthly subscriptions are charged each month."} No automatic charge after the free trial.</p>
      </div>
      <div className="site-container pricing-wrap pricing-three" aria-describedby="billing-explanation">
        {plans.map((plan) => {
          const trial = plan.id === "trial";
          const author = plan.id === "author";
          const prices = trial ? null : paidPlans[plan.id];
          return (
            <article className={`price-card plan-card ${author ? "plan-card-author" : trial ? "plan-card-trial" : "plan-card-writer"}`} key={plan.id} aria-labelledby={`plan-${plan.id}`}>
              <span className={`pricing-badge ${author ? "badge-author" : ""}`}>{plan.badge}</span>
              <div className="price-card-top">
                <h2 id={`plan-${plan.id}`} className="plan-name">{plan.name}</h2>
                <div className="price"><strong>{prices ? `$${interval === "year" ? prices.equivalent : prices.monthly.toFixed(2)}` : "Free"}</strong><span>{trial ? "/ 30 days" : "/ month"}</span></div>
                <p className="billing-total">{prices ? interval === "year" ? `$${prices.annual.toFixed(2)} billed annually` : `$${prices.monthly.toFixed(2)} billed monthly` : "30 days · No credit card required"}</p>
                <div className="annual-saving">{prices && interval === "year" ? <><strong>Save {prices.saving}%</strong><span>Save ${(prices.monthly * 12 - prices.annual).toFixed(2)}/year vs monthly</span></> : <span>{trial ? "No automatic subscription" : "Flexible monthly billing"}</span>}</div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <ul className="plan-checklist">
                <li className="book-allowance"><Check size={17} aria-hidden="true" /><span>Books <strong>{trial ? "3 planned*" : "Unlimited"}</strong></span></li>
                {features.map((label, index) => {
                  const ai = index >= 8;
                  const included = !ai;
                  return <li key={label} className={ai && !author ? "plan-excluded" : ""}>
                    {included ? <Check size={17} aria-hidden="true" /> : <Minus size={17} aria-hidden="true" />}
                    <span><span className="sr-only">{included ? "Included: " : author ? "Planned: " : "Unavailable: "}</span>{label}{ai && author && <span className="planned-feature">Planned</span>}</span>
                  </li>;
                })}
              </ul>
              <div className="plan-action">
                {author ? <button className="button large full" disabled>Coming soon</button> : <a className={`button large full ${trial ? "ghost" : ""}`} href={trial ? "https://app.quillywriter.com/login?mode=signup" : writerSignup(interval)}>{trial ? "Start free trial" : "Choose Writer"}</a>}
                <p className="fine-print">{author ? "Planned features. AI allowance will be defined before launch." : trial ? "30 days · No credit card required. Purchase a subscription to continue editing." : "Choose your subscription in Quilly. Payment begins only when you explicitly purchase."}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="site-container pricing-terms">
        <p>* The three-book trial limit is planned and is not currently enforced. Paid plans have no plan-based book cap.</p>
        <p>Annual monthly equivalents and savings percentages are rounded. Prices shown are before the separate Founding Writers promotion. Cancel renewal anytime; access continues through your paid period.</p>
      </div>
    </>
  );
}

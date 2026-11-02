"use client";

import { Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Do I need a credit card for the free trial?", "No. Quilly includes a 30-day free trial with no credit card required. Your trial includes Writer writing and planning features. Story Health will be available with Author, which is coming soon and is not included in the free trial."],
  ["What happens after the 30-day trial?", "After the trial ends, continue with Writer at $11.99/month. Author is coming soon at $16.99/month with AI-assisted Story Health. You will be asked to add a payment method to continue using the workspace."],
  ["Can I cancel anytime?", "Yes. Cancel renewal at any time. Your access lasts through the end of the current paid period. Monthly and annual subscriptions are both available, and annual billing is prepaid for a year."],
  ["Can I pay annually?", "Yes. Writer is $119.99 per year instead of $11.99 monthly. Author is planned at $179.99 per year and is coming soon. Monthly billing remains an option."],
  ["How does the Founding Writers discount work?", "The first 100 eligible new paid subscriptions can receive an automatic 20% recurring discount at checkout while redemptions remain. The discount is attached to the uninterrupted subscription and does not automatically transfer if you cancel and later resubscribe."],
  ["Can I export my work?", "Yes. Even if your trial ends or you cancel, you can sign in to export your manuscripts without subscribing. Your books are preserved while your editing access is paused."],
  ["Is this only for fantasy writers?", "No. Quilly is built for long-form fiction across genres, including fantasy, mystery, romance, science fiction, thrillers, and more."],
];

export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map(([q, a], i) => (
        <button className="faq-item" key={q} onClick={() => setOpen(open === i ? null : i)}>
          <div><span>{q}</span>{open === i ? <Minus size={17}/> : <span className="faq-plus">+</span>}</div>
          {open === i && <p>{a}</p>}
        </button>
      ))}
    </div>
  );
}

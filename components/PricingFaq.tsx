"use client";

import { Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Do I need a credit card for the free trial?", "No. Quilly includes a 14-day free trial with no credit card required. Your trial includes a preview of Plus, so you can explore the full workspace before deciding whether to subscribe."],
  ["What happens after the 14-day trial?", "After the trial ends, choose Basic at $11.99/month or Plus at $16.99/month. Plus includes Story Health diagnostics. You will be asked to add a payment method to continue using the workspace."],
  ["Can I cancel anytime?", "Yes. Quilly is a month-to-month subscription with no long-term contract."],
  ["Can I export my work?", "Export and recovery are treated as core ownership features, not premium lock-ins."],
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

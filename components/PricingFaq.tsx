"use client";

import { Minus } from "lucide-react";
import { useState } from "react";

import { pricingFaqs as faqs } from "@/lib/pricing";

export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map(([q, a], i) => (
        <button className="faq-item" key={q} aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
          <div><span>{q}</span>{open === i ? <Minus size={17}/> : <span className="faq-plus">+</span>}</div>
          {open === i && <p>{a}</p>}
        </button>
      ))}
    </div>
  );
}

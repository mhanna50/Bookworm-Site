import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Basic $11.99 or Plus $16.99/Month",
  description: "Try Quilly free for 14 days with no credit card required. Choose Basic for $11.99/month with writing, planning, relationships and exports, or Plus for $16.99/month including Story Health.",
  alternates: { canonical: "/pricing" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a credit card for the Quilly free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Quilly includes a 14-day free trial with no credit card required."
      }
    },
    {
      "@type": "Question",
      name: "What does Quilly cost after the free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the 14-day free trial, Basic is $11.99/month and Plus is $16.99/month. Story Health is included in Plus."
      }
    },
    {
      "@type": "Question",
      name: "Can I cancel Quilly anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Quilly is a month-to-month subscription with no long-term contract."
      }
    },
    {
      "@type": "Question",
      name: "Can I export my work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Export and recovery are treated as core ownership features, not premium lock-ins."
      }
    },
    {
      "@type": "Question",
      name: "Is Quilly only for fantasy writers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Quilly is built for long-form fiction across genres."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />{children}</>;
}

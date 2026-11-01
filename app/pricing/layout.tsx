import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Writer $11.99 or Author $16.99/Month",
  description: "Try Quilly free for 14 days with no credit card required. Choose Writer for $11.99/month with writing, planning, relationships and exports, Author is coming soon at $16.99/month with AI-assisted Story Health.",
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
        text: "No. Quilly includes a 14-day free trial of Writer features with no credit card required. Story Health is not included in the free trial."
      }
    },
    {
      "@type": "Question",
      name: "What does Quilly cost after the free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the 14-day free trial, Writer is $11.99/month. Author is coming soon at $16.99/month with AI-assisted Story Health."
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

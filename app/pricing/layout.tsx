import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — 14 Days Free, Then $11.99/Month",
  description: "Try Bookworm free for 14 days with no credit card required. Continue for $11.99/month with manuscript, Story Builder, characters, worldbuilding, Story Health, relationships, writing progress, backups, and recovery.",
  alternates: { canonical: "/pricing" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a credit card for the Bookworm free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bookworm includes a 14-day free trial with no credit card required."
      }
    },
    {
      "@type": "Question",
      name: "What does Bookworm cost after the free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the 14-day free trial, Bookworm costs $11.99 per month."
      }
    },
    {
      "@type": "Question",
      name: "Can I cancel Bookworm anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bookworm is a month-to-month subscription with no long-term contract."
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
      name: "Is Bookworm only for fantasy writers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bookworm is built for long-form fiction across genres."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />{children}</>;
}

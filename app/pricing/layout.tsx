import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Bookworm Writing Software",
  description: "Bookworm pricing for writers who want manuscript, plot, character, worldbuilding, story health, relationship, progress, backup, and recovery tools in one workspace.",
  alternates: { canonical: "/pricing" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Will there be a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes. The launch plan is to let writers experience the full workspace before committing." } },
    { "@type": "Question", name: "Can I export my work?", acceptedAnswer: { "@type": "Answer", text: "Export and recovery are treated as core ownership features, not premium lock-ins." } },
    { "@type": "Question", name: "Is Bookworm only for fantasy writers?", acceptedAnswer: { "@type": "Answer", text: "No. Bookworm is being built for long-form fiction across genres." } },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />{children}</>;
}

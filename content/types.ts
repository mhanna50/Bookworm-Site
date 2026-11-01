export type ContentSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  intent: "commercial" | "comparison" | "guide" | "hub";
  summary?: string;
  takeaways?: string[];
  updatedAt?: string;
  workflow?: {
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  faqs?: { question: string; answer: string }[];
  visuals?: {
    id: string;
    afterSection: string;
    title: string;
    caption: string;
    alt: string;
    src?: string;
    width: number;
    height: number;
  }[];
  sections: ContentSection[];
  related: { href: string; label: string }[];
  ctaTitle?: string;
  ctaText?: string;
  sources?: { label: string; href: string }[];
  table?: {
    caption: string;
    columns: string[];
    rows: string[][];
  };
};

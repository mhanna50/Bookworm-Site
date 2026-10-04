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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Novel Planning, Manuscript & Story Tools",
  description: "Draft your novel and connect chapters, characters, plot points, worldbuilding, and foreshadowing. AI-assisted Story Health is coming soon in Author.",
  alternates: { canonical: "/features" },
  openGraph: {
    type: "website",
    url: "/features",
    siteName: "Quilly",
    title: "Quilly Features | Novel Writing & Story Planning",
    description: "Draft your novel and connect chapters, characters, plot points, worldbuilding, and foreshadowing. AI-assisted Story Health is coming soon in Author.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Quilly — novel writing and story planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quilly Features | Novel Writing & Story Planning",
    description: "Draft your novel and connect chapters, characters, plot points, worldbuilding, and foreshadowing. AI-assisted Story Health is coming soon in Author.",
    images: ["/twitter-image"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

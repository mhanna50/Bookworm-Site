import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const productionHost = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
const siteUrl = productionHost;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bookworm | Novel Writing & Story Planning Software",
    template: "%s | Bookworm",
  },
  description:
    "Bookworm is a writing and story-planning workspace for novelists. Draft manuscripts, organize plots, build characters and worlds, track foreshadowing, relationships, story health, and writing progress in one connected place. Start with a 14-day free trial—no credit card required—then $11.99/month.",
  keywords: [
    "novel writing software",
    "story planning software",
    "book writing app",
    "author software",
    "novel planning app",
    "fiction writing software",
    "story bible",
    "worldbuilding software",
    "plotting software",
  ],
  applicationName: "Bookworm",
  category: "Writing Software",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Bookworm | Novel Writing & Story Planning Software",
    description:
      "Write your manuscript, plan your plot, build your world, and keep every story thread connected. 14 days free, no card required, then $11.99/month.",
    siteName: "Bookworm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookworm | Novel Writing & Story Planning Software",
    description:
      "A connected writing workspace for novelists. Try it free for 14 days with no credit card required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bookworm",
  applicationCategory: "WritingApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "A connected writing and story-planning workspace for novelists with manuscript editing, story structure, characters, worldbuilding, relationships, story health, and writing progress.",
  offers: {
    "@type": "Offer",
    price: "11.99",
    priceCurrency: "USD",
    category: "subscription",
    description: "14-day free trial with no credit card required, then $11.99 per month. Cancel anytime.",
  },
  featureList: [
    "Chapter-based manuscript editor with focus mode",
    "Anchored manuscript comments and tracked revision changes",
    "Grammar and style review and read-aloud",
    "Automatic story-reference links",
    "Story Builder for acts, chapters, plot points and beats",
    "Character management",
    "Flexible worldbuilding with custom categories and fields",
    "Plot points, story events and foreshadowing",
    "Relationship graph with custom and derived connections",
    "Story Health diagnostics",
    "Writing goals, streaks, chapter word counts and writing sessions",
    "DOCX manuscript import",
    "DOCX and PDF manuscript export",
    "Cloud saves, recoverable snapshots and Trash recovery",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bookworm",
  url: siteUrl,
  description: "Novel writing and story planning software for fiction authors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable} ${playfair.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}

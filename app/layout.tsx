import type { Metadata } from "next";
import "./globals.css";

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
    "Bookworm is a writing and story-planning workspace for novelists. Draft manuscripts, organize plots, build characters and worlds, track foreshadowing, relationships, story health, and writing progress in one connected place.",
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
      "Write your manuscript, plan your plot, build your world, and keep every story thread connected.",
    siteName: "Bookworm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookworm | Novel Writing & Story Planning Software",
    description:
      "A connected writing workspace for novelists: manuscript, plot, characters, worldbuilding, story health, and progress.",
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
    price: "12",
    priceCurrency: "USD",
    category: "subscription",
  },
  featureList: [
    "Manuscript editor",
    "Story Builder for acts, chapters, plot points and beats",
    "Character management",
    "Worldbuilding",
    "Events and foreshadowing",
    "Relationship graph",
    "Story Health checks",
    "Writing progress tracking",
    "Backups and recovery",
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
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}

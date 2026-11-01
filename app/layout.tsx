import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { jsonLd, siteUrl } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quilly | Novel Writing & Story Planning Software",
    template: "%s | Quilly",
  },
  description:
    "Write your novel and connect chapters, plot points, characters, worldbuilding, and foreshadowing in Quilly. Try Writer free for 14 days, no card required.",
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
  applicationName: "Quilly",
  icons: {
    icon: "/quilly-favicon-transparent.svg",
    shortcut: "/quilly-favicon-transparent.svg",
    apple: "/quilly-favicon-transparent.svg",
  },
  category: "Writing Software",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Quilly | Novel Writing & Story Planning Software",
    description:
      "Write your manuscript, plan your plot, build your world, and keep every story thread connected. 14 days free, no card required, plans from $11.99/month.",
    siteName: "Quilly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quilly | Novel Writing & Story Planning Software",
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
  "@id": siteUrl + "/#software",
  name: "Quilly",
  applicationCategory: "WritingApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "A connected writing and story-planning workspace for novelists with manuscript editing, story structure, characters, worldbuilding, relationships, and writing progress. Story Health is coming soon in Author.",
  offers: [
    { "@type": "Offer", name: "Writer", price: "11.99", priceCurrency: "USD", category: "subscription", description: "Writer writing and planning tools. 14-day free trial, no card required." },
  ],
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
    "AI-assisted Story Health (Author, coming soon)",
    "Writing goals, streaks, chapter word counts and writing sessions",
    "DOCX manuscript import",
    "DOCX and PDF manuscript export",
    "Cloud saves, recoverable snapshots and Trash recovery",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteUrl + "/#website",
  name: "Quilly",
  url: siteUrl,
  description: "Novel writing and story planning software for fiction authors.",
  publisher: { "@id": siteUrl + "/#organization" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteUrl + "/#organization",
  name: "Quilly",
  url: siteUrl,
  logo: siteUrl + "/quilly-logo-transparent.svg",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable} ${playfair.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }} />
        {children}
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}

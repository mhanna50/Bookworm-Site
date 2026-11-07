import type { Metadata } from "next";
import { pricingFaqs } from "@/lib/pricing";
import { jsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Writer $11.99 or Author $16.99/Month",
  description: "Try Quilly free for 30 days, no card required. Writer is $11.99/month or $119.99/year (save 17%). Author is coming soon at $16.99/month or $179.99/year (save 12%).",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "/pricing",
    siteName: "Quilly",
    title: "Quilly Pricing | Writer $11.99/Month · 30 Days Free",
    description: "Writer: $11.99/month or $119.99/year (save 17%). Try free for 30 days, no card required. Author is coming soon: $16.99/month or $179.99/year (save 12%).",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Quilly — novel writing and story planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quilly Pricing | Writer $11.99/Month · 30 Days Free",
    description: "Writer: $11.99/month or $119.99/year (save 17%). Try free for 30 days, no card required. Author is coming soon: $16.99/month or $179.99/year (save 12%).",
    images: ["/twitter-image"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map(([question, answer]) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />{children}</>;
}

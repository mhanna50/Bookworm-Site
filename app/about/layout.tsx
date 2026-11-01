import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Quilly — A Writing App Built for People I Care About",
  description: "Meet Michael Hanna, the software engineer who built Quilly to help his girlfriend and friends organize their ideas and write with less stress.",
  alternates: { canonical: "/about" },
  openGraph: { title: "The story behind Quilly", description: "A writing app that began with wanting to help the people I care about write with less stress.", url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title: "The story behind Quilly", description: "Why Michael Hanna built a calmer writing space for his girlfriend, friends, and the stories they wanted to tell." },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

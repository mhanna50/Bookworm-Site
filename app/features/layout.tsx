import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Novel Planning, Manuscript & Story Tools",
  description: "Explore Bookworm features for novelists: manuscript writing, visual story structure, characters, worldbuilding, events, foreshadowing, relationships, Story Health, images, and writing progress.",
  alternates: { canonical: "/features" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

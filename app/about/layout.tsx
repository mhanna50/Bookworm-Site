import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Why Quilly Exists",
  description: "Learn why Quilly is building a calmer, connected writing workspace for novelists who want serious planning tools without a cluttered dashboard.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

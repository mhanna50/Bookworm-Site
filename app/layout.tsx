import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookworm — Write, plan, and understand your story",
  description:
    "A calm writing workspace for novelists to draft manuscripts, shape plots, build worlds, and keep every thread connected.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

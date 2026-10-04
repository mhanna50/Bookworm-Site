import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bookworm",
    short_name: "Bookworm",
    description: "A connected novel-writing and story-planning workspace for fiction authors.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e7",
    theme_color: "#6b4f3a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}

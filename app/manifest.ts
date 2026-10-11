import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quilly",
    short_name: "Quilly",
    description: "A connected novel-writing and story-planning workspace for fiction authors.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e7",
    theme_color: "#6b4f3a",
    icons: [
      { src: "/ChatGPT%20Image%20Oct%2011%2C%202026%20at%2003_48_59%20PM-1.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}

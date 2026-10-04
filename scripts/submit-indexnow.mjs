import { promises as fs } from "node:fs";
import path from "node:path";

const KEY = "0984ec6e-c4ca-4ba4-945e-6941bd9adf7d";

if (process.env.VERCEL_ENV !== "production") {
  console.log("IndexNow: skipping non-production deployment.");
  process.exit(0);
}

const base = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://bookwormsite.vercel.app")
).replace(/\/$/, "");

const contentDir = path.join(process.cwd(), "content");
const files = (await fs.readdir(contentDir)).filter((file) => file.endsWith(".ts"));
const slugs = new Set();

for (const file of files) {
  const source = await fs.readFile(path.join(contentDir, file), "utf8");
  for (const match of source.matchAll(/slug:\s*"([^"]+)"/g)) {
    slugs.add(match[1]);
  }
}

const fixed = ["", "features", "pricing", "about", "resources"];
const urlList = [...new Set([
  ...fixed.map((slug) => slug ? `${base}/${slug}` : base),
  ...[...slugs].map((slug) => `${base}/${slug}`),
])];

try {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(base).host,
      key: KEY,
      keyLocation: `${base}/${KEY}.txt`,
      urlList,
    }),
  });

  if (!response.ok && response.status !== 202) {
    console.warn(`IndexNow: submission returned HTTP ${response.status}; deployment will continue.`);
  } else {
    console.log(`IndexNow: submitted ${urlList.length} URLs for discovery.`);
  }
} catch (error) {
  console.warn("IndexNow: submission failed; deployment will continue.", error);
}

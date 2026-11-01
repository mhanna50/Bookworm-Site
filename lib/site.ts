export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://quillywriter.com").replace(/\/$/, "");

export function absoluteUrl(path: string = "/") {
  return new URL(path, siteUrl + "/").toString();
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

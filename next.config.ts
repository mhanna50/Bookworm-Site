import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/compare/scrivener-vs-bookworm", destination: "/compare/scrivener-vs-quilly", permanent: true },
      { source: "/compare/dabble-vs-bookworm", destination: "/compare/dabble-vs-quilly", permanent: true },
    ];
  },
};

export default nextConfig;

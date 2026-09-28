import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The French routes of the previous site lead to the French pages.
      { source: "/a-propos", destination: "/fr/about", permanent: true },
      { source: "/mariages", destination: "/fr/portfolio", permanent: true },
      { source: "/ceremonies-civiles", destination: "/fr/portfolio", permanent: true },
      { source: "/anniversaires", destination: "/fr/portfolio", permanent: true },
      { source: "/maternite-naissance", destination: "/fr/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;

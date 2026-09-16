import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  /**
   * The site is now four pages in English. Every URL that existed before is
   * kept alive and sent to its closest equivalent rather than 404ing.
   */
  async redirects() {
    return [
      { source: "/a-propos", destination: "/about", permanent: true },
      { source: "/mariages", destination: "/portfolio#weddings", permanent: true },
      { source: "/ceremonies-civiles", destination: "/portfolio#celebrations", permanent: true },
      { source: "/anniversaires", destination: "/portfolio#celebrations", permanent: true },
      { source: "/maternite-naissance", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;

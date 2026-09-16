import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The French routes of the previous site keep working.
      { source: "/a-propos", destination: "/about", permanent: true },
      { source: "/mariages", destination: "/portfolio#weddings", permanent: true },
      {
        source: "/ceremonies-civiles",
        destination: "/portfolio#intimate-celebrations",
        permanent: true,
      },
      {
        source: "/anniversaires",
        destination: "/portfolio#intimate-celebrations",
        permanent: true,
      },
      {
        source: "/maternite-naissance",
        destination: "/portfolio#intimate-celebrations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

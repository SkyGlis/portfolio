import type { NextConfig } from "next";

const config: NextConfig = {
  // ponytail: always lands on PT; add Accept-Language detection in proxy.ts if EN visitors complain
  async redirects() {
    return [{ source: "/", destination: "/pt", permanent: false }];
  },
};

export default config;

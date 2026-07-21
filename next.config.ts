import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/homepagekorea" : "",
  assetPrefix: isGitHubPages ? "/homepagekorea/" : "",
  trailingSlash: true,
};

export default nextConfig;

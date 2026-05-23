import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.jearonwong.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      customPages: [
        "https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html",
        "https://www.jearonwong.com/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
        "https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.html"
      ],
      filter: (page) =>
        !page.endsWith("/theory-clusters/") &&
        !page.endsWith("/theory-clusters") &&
        !page.endsWith("/ecosystem-mapping/")
    })
  ],
  server: {
    allowedHosts: true
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});

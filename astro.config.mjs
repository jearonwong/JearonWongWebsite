import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Keep compatibility, support, prototype, and legacy routes out of the
// public sitemap. Their pages remain crawlable where needed so their
// canonical/noindex directives can be observed by search engines.
const sitemapExcludedPathnames = new Set([
  "/ai-agent-governance/",
  "/ecosystem-mapping/",
  "/mapping/extended-ecosystem/autogen/",
  "/playbooks/openai-agent-governance/",
  "/playbooks/anthropic-agent-governance/",
  "/playbooks/deepseek-agent-governance/",
  "/playbooks/kimi-agent-governance/",
  "/prototypes/",
  "/prototypes/quiet-thesis/",
  "/prototypes/research-ledger/",
  "/prototypes/split-signal/",
  "/theory-clusters/",
  "/essays/when-logs-are-no-longer-enough-rethinking-audit-for-agentic-ai/",
  "/essays/the-audit-object-for-agentic-ai-has-changed/"
]);

export default defineConfig({
  site: "https://www.jearonwong.com",
  output: "static",
  trailingSlash: "always",
  redirects: {
    "/essays/when-logs-are-no-longer-enough-rethinking-audit-for-agentic-ai/": "/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/",
    "/essays/the-audit-object-for-agentic-ai-has-changed/": "/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/"
  },
  integrations: [
    sitemap({
      customPages: [
        "https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html",
        "https://www.jearonwong.com/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
        "https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html"
      ],
      filter: (page) => !sitemapExcludedPathnames.has(new globalThis.URL(page).pathname)
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

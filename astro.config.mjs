import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.jearonwong.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("/theory-clusters/") &&
        !page.endsWith("/theory-clusters")
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

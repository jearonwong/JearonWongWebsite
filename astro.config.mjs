import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jearonwong.com",
  output: "static",
  integrations: [sitemap()]
});

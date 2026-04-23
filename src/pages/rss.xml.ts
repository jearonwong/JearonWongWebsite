import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../data/site";

export const GET: APIRoute = async (context) => {
  const essays = (await getCollection("essays")).sort(
    (left, right) => right.data.publishDate.getTime() - left.data.publishDate.getTime()
  );

  return rss({
    title: `${siteConfig.title} Essays`,
    description: "Essays about governance, interface, and proof-oriented projects.",
    site: context.site ?? siteConfig.siteUrl,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.publishDate,
      link: `/essays/${essay.slug}/`
    }))
  });
};

import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../data/site";

export const GET: APIRoute = async (context) => {
  const essays = (await getCollection("essays", ({ data }) => data.status === "published")).sort(
    (left, right) =>
      Number(right.data.flagship) - Number(left.data.flagship) ||
      right.data.publishDate.getTime() - left.data.publishDate.getTime()
  );

  return rss({
    title: `${siteConfig.title} Essays`,
    description: "Essays about protocol engineering, agent governance, and reliable AI agent work delivery.",
    site: context.site ?? siteConfig.siteUrl,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.publishDate,
      link: `/essays/${essay.id}/`
    }))
  });
};

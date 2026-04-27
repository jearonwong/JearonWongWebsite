import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  schema: z.object({
    title: z.string(),
    titleLines: z.array(z.string()).optional(),
    description: z.string(),
    shareTitle: z.string().optional(),
    shareSubtitle: z.string().optional(),
    shareDescription: z.string().optional(),
    shareImage: z.string().optional(),
    shareImageAlt: z.string().optional(),
    publishDate: z.coerce.date(),
    cluster: z.string(),
    projectProof: z.string(),
    featured: z.boolean().default(false),
    flagship: z.boolean().default(false),
    summary: z.string().optional(),
    summaryLines: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
    images: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      thumbnailUrl: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional()
    })).default([]),
    legacySlugs: z.array(z.string()).default([]),
    relatedIdeas: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([])
  })
});

export const collections = {
  essays
};

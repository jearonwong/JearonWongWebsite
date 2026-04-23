import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    cluster: z.string(),
    projectProof: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  essays
};

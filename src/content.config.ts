import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { controlledTags, type ControlledTag } from "./data/taxonomy";

const controlledTagSchema = z.enum(controlledTags as [ControlledTag, ...ControlledTag[]]);

const essays = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    titleLines: z.array(z.string()).optional(),
    subtitle: z.string().optional(),
    description: z.string(),
    shareTitle: z.string().optional(),
    shareSubtitle: z.string().optional(),
    shareDescription: z.string().optional(),
    shareImage: z.string().optional(),
    shareImageAlt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    cluster: z.string(),
    projectProof: z.string(),
    contentRole: z.literal("essay").default("essay"),
    publicationClass: z.enum(["thought", "technical", "field-note", "research-commentary", "whitepaper-adaptation"]).default("thought"),
    editorialTrack: z.enum(["lifecycle", "foundation", "protocol", "research", "general"]).optional(),
    canonicalRoute: z.string().optional(),
    canonicalParent: z.literal("/essays/").default("/essays/"),
    primaryAudience: z.enum(["Builder", "Architect", "Governance", "Decision-maker"]).optional(),
    secondaryAudiences: z.array(z.enum(["Builder", "Architect", "Governance", "Decision-maker"])).default([]),
    distinctReaderQuestion: z.string().min(12),
    sourceRefs: z.array(z.string()).min(1),
    indexability: z.enum(["index", "noindex"]).default("index"),
    nextSteps: z.array(z.string()).default([]),
    maxClickDepth: z.number().int().positive().default(3),
    track: z.enum(["lifecycle", "foundation", "protocol", "research", "general"]).optional(),
    readingTimeMinutes: z.number().int().positive().optional(),
    evidenceLevel: z.string().optional(),
    featured: z.boolean().default(false),
    flagship: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    status: z.enum(["draft", "published"]).default("published"),
    tags: z.array(controlledTagSchema).min(3).max(6).default([]),
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

import { definitions, type DefinitionEntry } from "./definitions";
import { projects } from "./site";
import { whitepaperPublications } from "./whitepaperPublications";

export type AssetType = "Essay" | "Research" | "Project" | "Concept" | "Hub" | "Utility";
export type AssetStatus = "historical" | "candidate" | "public" | "in-development" | "evidence-surface" | "published";

export interface AssetRegistryEntry {
  id: string;
  assetType: AssetType;
  canonicalRoute: string;
  canonicalParent: string;
  status: AssetStatus;
  audience: string;
  distinctReaderQuestion: string;
  sourceOfTruth: string;
  sourceRefs: string[];
  indexability: "index" | "noindex";
  publicationApproval: "owner-approved" | "derived" | "not-applicable";
  relatedAssets: string[];
  derivedSurfaces: string[];
}

const hub = (id: string, route: string, question: string, relatedAssets: string[] = []): AssetRegistryEntry => ({
  id,
  assetType: "Hub",
  canonicalRoute: route,
  canonicalParent: "/",
  status: "published",
  audience: "Public reader",
  distinctReaderQuestion: question,
  sourceOfTruth: "src/data/site.ts pageRegistry",
  sourceRefs: [`pageRegistry.${id}`],
  indexability: "index",
  publicationApproval: "derived",
  relatedAssets,
  derivedSurfaces: ["navigation", "sitemap", "JSON-LD", "public/llms.txt"]
});

const projectAssets: AssetRegistryEntry[] = projects.map((project) => ({
  id: `project-${project.slug}`,
  assetType: "Project",
  canonicalRoute: `/projects/${project.slug}/`,
  canonicalParent: "/projects/",
  status: project.slug === "mplp" ? "in-development" : "evidence-surface",
  audience: "Architects and builders",
  distinctReaderQuestion: `What does the ${project.name} path make inspectable?`,
  sourceOfTruth: "src/data/site.ts projects",
  sourceRefs: [`projects[slug=${project.slug}]`],
  indexability: "index",
  publicationApproval: "derived",
  relatedAssets: ["hub-projects", "hub-start-here"],
  derivedSurfaces: ["src/pages/projects.astro", "src/pages/projects/[slug].astro", "sitemap", "JSON-LD"]
}));

const researchAssets: AssetRegistryEntry[] = whitepaperPublications.map((paper) => ({
  id: paper.id,
  assetType: "Research",
  canonicalRoute: paper.canonicalPath,
  canonicalParent: "/research/",
  status: "public",
  audience: paper.audience,
  distinctReaderQuestion: paper.decisionSummary.researchQuestion,
  sourceOfTruth: "src/data/whitepaperPublications.ts",
  sourceRefs: [`whitepaperPublications[id=${paper.id}]`, paper.assetBase],
  indexability: "index",
  publicationApproval: "owner-approved",
  relatedAssets: ["hub-research", "hub-start-here"],
  derivedSurfaces: ["src/pages/research/index.astro", "WhitePaperPublicationPage", "public/llms.txt", "sitemap", "RSS"]
}));

const definitionAssets: AssetRegistryEntry[] = definitions.map((entry: DefinitionEntry) => ({
  id: `definition-${entry.slug}`,
  assetType: "Concept",
  canonicalRoute: `/definitions/#${entry.slug}`,
  canonicalParent: "/definitions/",
  status: "published",
  audience: "Readers needing a stable citation anchor",
  distinctReaderQuestion: `What does ${entry.term} mean in this vocabulary?`,
  sourceOfTruth: "src/data/definitions.ts",
  sourceRefs: [`definitions[slug=${entry.slug}]`],
  indexability: "index",
  publicationApproval: "owner-approved",
  relatedAssets: ["hub-definitions", "hub-start-here"],
  derivedSurfaces: ["src/pages/definitions.astro", "public/llms.txt", "entity graph"]
}));

export const assetRegistry: AssetRegistryEntry[] = [
  hub("startHere", "/start-here/", "Where should a first-time reader begin?", ["hub-lifecycle", "hub-projects", "hub-evidence"]),
  hub("lifecycle", "/lifecycle/", "What is AI Agent Lifecycle?", ["hub-startHere", "project-mplp"]),
  hub("projects", "/projects/", "Which project paths make the thesis inspectable?", ["hub-startHere"]),
  hub("research", "/research/", "Which research artifacts support the argument?", ["hub-startHere"]),
  hub("definitions", "/definitions/", "What do the core terms mean?", ["hub-startHere"]),
  hub("concepts", "/concepts/", "How are the concepts related?", ["hub-startHere"]),
  hub("essays", "/essays/", "Why is the thesis true?", ["hub-startHere"]),
  hub("contact", "/contact/", "How can a serious inquiry reach the maintainer?", ["hub-startHere"]),
  ...projectAssets,
  ...researchAssets,
  ...definitionAssets
];

export function getAssetRegistryEntry(id: string) {
  return assetRegistry.find((entry) => entry.id === id);
}

import { pageRegistry, siteSemanticBaseline } from "./site";

type RouteRole =
  | "public-headquarters"
  | "field-definition"
  | "publication-registry"
  | "publication-record"
  | "research-ledger"
  | "research-record"
  | "evidence-ledger"
  | "evidence-record"
  | "reference-hub"
  | "reference-record"
  | "method-hub"
  | "method-record"
  | "mapping-record"
  | "identity-sheet";

type InformationArchitectureRule = {
  id: string;
  routePattern: string;
  routeRole: RouteRole;
  canonicalParent: string | null;
  allowedChildren: string[];
  maxDepth: number;
  requiredInboundLinks: number;
  requiredNextActions: string[];
};

type GovernanceSurface =
  | "src/data/site.ts"
  | "src/data/siteGovernance.ts"
  | "src/data/definitions.ts"
  | "src/data/whitepaperPublications.ts"
  | "src/data/governanceMappings.ts"
  | "src/data/gaicSystems.ts"
  | "src/data/extendedEcosystems.ts"
  | "src/data/taxonomy.ts"
  | "src/content/essays/"
  | "src/pages/index.astro"
  | "src/pages/about.astro"
  | "src/pages/lifecycle.astro"
  | "src/pages/essays/index.astro"
  | "src/pages/essays/[slug].astro"
  | "src/pages/research/index.astro"
  | "src/pages/projects.astro"
  | "src/pages/projects/[slug].astro"
  | "src/pages/concepts/"
  | "src/pages/concepts/map/index.astro"
  | "src/pages/concepts/agentic-lifecycle-governance/index.astro"
  | "src/pages/definitions.astro"
  | "src/pages/evidence.astro"
  | "src/pages/governance/"
  | "src/pages/playbooks/"
  | "src/pages/mapping/extended-ecosystem/"
  | "src/pages/mapping/extended-ecosystem/[slug].astro"
  | "src/layouts/BaseLayout.astro"
  | "src/components/SiteHeader.astro"
  | "src/components/SiteFooter.astro"
  | "src/components/RegistryPageHero.astro"
  | "src/components/ReadingGuide.astro"
  | "src/components/ReadingFlowDiagram.astro"
  | "src/components/ProjectProofCard.astro"
  | "src/components/WhitePaperPublicationPage.astro"
  | "src/styles/global.css"
  | "scripts/site-visual-system-audit.mjs"
  | "scripts/generate-site-og-assets.mjs"
  | "scripts/site-package-surface-audit.mjs"
  | "scripts/site-publication-plan.mjs"
  | "scripts/site-publication-sync.mjs"
  | "scripts/site-generated-drift-audit.mjs"
  | "scripts/site-publication-receipt.mjs"
  | ".github/workflows/site-governance.yml"
  | "public/llms.txt"
  | "public/entity/jearonwong-mplp-gaic-entity-graph.json"
  | "public/social/"
  | "public/figures/"
  | "public/research/";

type GovernanceImpactRule = {
  id: string;
  sourceOfTruth: string[];
  trigger: string;
  inspect: GovernanceSurface[];
  requiredEvidence: string[];
  forbiddenShortcut: string;
};

type SemanticDerivedSotRule = {
  id: string;
  sourceOfTruth: string[];
  derivedSurfaces: GovernanceSurface[];
  reverseDependencySearches: string[];
  requiredEvidence: string[];
  forbiddenShortcut: string;
};

export const siteGovernanceCenter = {
  status: "internal-governance-sot",
  publicSurface: false,
  purpose:
    "Internal semantic, brand, and publication-surface governance for JearonWong.com. This file helps Codex discover linked surfaces before changing public copy, metadata, articles, white papers, or visual identity.",
  sourceOfTruthOrder: [
    "Owner instruction for the current task",
    "src/data/siteGovernance.ts impact rules",
    "src/data/siteGovernance.ts semanticDerivedSotRegistry",
    "src/data/site.ts siteSemanticBaseline and pageRegistry",
    "src/data/definitions.ts definition entries",
    "src/data/whitepaperPublications.ts publication records",
    "src/content/essays/* frontmatter and body",
    "public/llms.txt machine-readable public summary",
    "Existing page renderers and shared components"
  ],
  brandCore: {
    identityAnchor: siteSemanticBaseline.identityAnchor,
    problemStatement: siteSemanticBaseline.problemStatement,
    fieldDefinitionStatement: siteSemanticBaseline.fieldDefinitionStatement,
    agenticDeliveryDefinition: siteSemanticBaseline.agenticDeliveryDefinition,
    referencePathDefinition: siteSemanticBaseline.referencePathDefinition,
    avoidedTerms: siteSemanticBaseline.avoidedTerms
  },
  visualSystem: {
    name: "Research Ledger",
    principle: "Research, essays, projects, and evidence share one reading order in a publication-first ledger.",
    desktop: "A dark research banner with a single top navigation, followed by a light ledger surface with a sticky section rail and ruled records.",
    mobile: "The banner collapses to one column; the section rail becomes a horizontal reading index and the navigation opens as a compact drawer.",
    footer: "A light ruled ledger footer uses Outfit for the identity anchor, Inter for supporting copy, and JetBrains Mono for state labels, grouped routes, social links, and trust links.",
    allowedVariation: "Page-specific records may change density and metadata, but must preserve the ledger navigation, Outfit/Inter/JetBrains Mono typography, ruled record structure, and blue interaction accent.",
    forbiddenVariation: "A page must not introduce a fixed identity rail, card-heavy dashboard grids, unrelated gradients, rounded containers, pill-shaped social controls, or a competing navigation taxonomy."
  },
  pageAnchors: {
    home: {
      path: "/",
      role: "Public headquarters and brand thesis entry",
      sot: ["siteSemanticBaseline", "siteConfig", "siteThesis"],
      linkedSurfaces: ["about", "lifecycle", "projects", "essays", "research", "llms"]
    },
    about: {
      path: "/about/",
      role: pageRegistry.about.objectValue,
      sot: ["pageRegistry.about", "siteConfig.author", "siteSemanticBaseline.identityAnchor"],
      linkedSurfaces: ["home", "BaseLayout Person JSON-LD", "SiteHeader", "SiteFooter", "llms"]
    },
    lifecycle: {
      path: "/lifecycle/",
      role: pageRegistry.lifecycle.objectValue,
      sot: ["siteSemanticBaseline.fieldDefinitionStatement", "aiAgentLifecycleColumn", "definitions"],
      linkedSurfaces: ["home", "essays index", "concepts", "definitions", "projects", "llms"]
    },
    essays: {
      path: "/essays/",
      role: pageRegistry.essays.objectValue,
      sot: ["content collection", "essays index manual sections", "article frontmatter"],
      linkedSurfaces: ["rss", "sitemap", "llms", "related ideas", "related projects", "OG metadata"]
    },
    research: {
      path: "/research/",
      role: pageRegistry.research.objectValue,
      sot: ["whitepaperPublications", "public/research artifacts"],
      linkedSurfaces: ["white paper pages", "concept pages", "essays", "llms", "artifact manifests"]
    },
    projects: {
      path: "/projects/",
      role: pageRegistry.projects.objectValue,
      sot: ["projects", "siteSemanticBaseline.projectRoles"],
      linkedSurfaces: ["home", "lifecycle", "essays", "concepts", "llms", "project detail pages"]
    },
    definitions: {
      path: "/definitions/",
      role: pageRegistry.definitions.objectValue,
      sot: ["definitions"],
      linkedSurfaces: ["concept pages", "essays", "lifecycle", "llms"]
    },
    conceptsMap: {
      path: "/concepts/map/",
      role: "Visible semantic navigation surface and entity mesh",
      sot: ["concepts", "whitepaperPublications", "governanceMappings", "gaicSystems", "extendedEcosystems"],
      linkedSurfaces: ["concept routes", "governance routes", "research", "llms", "entity graph"]
    },
    agenticLifecycleGovernance: {
      path: "/concepts/agentic-lifecycle-governance/",
      role: "Special hand-authored concept core for GAIC-derived lifecycle governance",
      sot: ["whitepaperPublications.wp1-gaic", "concepts", "definitions", "governanceMappings"],
      linkedSurfaces: ["lifecycle", "concepts index", "concepts map", "governance", "research", "llms", "entity graph", "evidence"]
    },
    evidence: {
      path: "/evidence/",
      role: "Citation and evidence shelf for owned-canonical, authored-analysis, project, and source-qualified mapping surfaces",
      sot: ["whitepaperPublications", "siteSemanticBaseline", "projects", "governanceMappings"],
      linkedSurfaces: ["research", "concepts", "projects", "llms", "entity graph"]
    }
  }
} as const;

export const publicationRouteRegistry = {
  essay: {
    sourceDirectory: "src/content/essays/",
    routePattern: "/essays/<slug>/",
    canonicalParent: "/essays/",
    contentRole: "essay",
    publicationClasses: ["thought", "technical", "field-note", "research-commentary", "whitepaper-adaptation"],
    editorialTracks: ["lifecycle", "foundation", "protocol", "research", "general"],
    audiences: ["Builder", "Architect", "Governance", "Decision-maker"],
    maxClickDepth: 3,
    orphanPolicy: "blocked",
    requiredNavSurfaces: ["/essays/", "one contextual inbound route"],
    requiredNextSteps: 2
  },
  whitepaper: {
    sourceDirectory: "src/data/whitepaperPublications.ts + public/research/",
    routePattern: "/research/<slug>/",
    canonicalParent: "/research/",
    maxClickDepth: 3,
    artifactMaxClickDepth: 4,
    orphanPolicy: "blocked"
  },
  concept: {
    sourceDirectory: "src/data/site.ts",
    routePattern: "/concepts/<slug>/",
    canonicalParent: "/concepts/",
    maxClickDepth: 3,
    orphanPolicy: "blocked"
  },
  project: {
    sourceDirectory: "src/data/site.ts",
    routePattern: "/projects/<slug>/",
    canonicalParent: "/projects/",
    maxClickDepth: 3,
    orphanPolicy: "blocked"
  },
  governanceMapping: {
    sourceDirectory: "src/data/governanceMappings.ts",
    routePattern: "/governance/<slug>/",
    canonicalParent: "/governance/",
    maxClickDepth: 3,
    requiredNextSteps: ["/governance/", "/concepts/agentic-lifecycle-governance/"],
    orphanPolicy: "blocked"
  },
  playbook: {
    sourceDirectory: "src/data/site.ts appliedPlaybooks",
    routePattern: "/playbooks/<slug>/",
    canonicalParent: "/playbooks/",
    maxClickDepth: 3,
    requiredNextSteps: ["/playbooks/", "/governance/"],
    orphanPolicy: "blocked"
  },
  ecosystemMapping: {
    sourceDirectory: "src/data/extendedEcosystems.ts",
    routePattern: "/mapping/extended-ecosystem/<slug>/",
    canonicalParent: "/mapping/extended-ecosystem/",
    maxClickDepth: 3,
    requiredNextSteps: ["/mapping/extended-ecosystem/", "/concepts/agentic-lifecycle-governance/"],
    orphanPolicy: "blocked"
  }
} as const;

export const informationArchitectureRegistry: InformationArchitectureRule[] = [
  { id: "home", routePattern: "/", routeRole: "public-headquarters", canonicalParent: null, allowedChildren: ["/lifecycle/", "/essays/", "/research/", "/projects/", "/about/"], maxDepth: 0, requiredInboundLinks: 0, requiredNextActions: ["/lifecycle/", "/projects/"] },
  { id: "lifecycle", routePattern: "/lifecycle/", routeRole: "field-definition", canonicalParent: "/", allowedChildren: ["/essays/", "/concepts/", "/definitions/", "/projects/"], maxDepth: 1, requiredInboundLinks: 1, requiredNextActions: ["/essays/", "/projects/"] },
  { id: "essays", routePattern: "/essays/", routeRole: "publication-registry", canonicalParent: "/", allowedChildren: ["/essays/<slug>/"], maxDepth: 1, requiredInboundLinks: 1, requiredNextActions: ["/essays/<slug>/"] },
  { id: "essay-record", routePattern: "/essays/<slug>/", routeRole: "publication-record", canonicalParent: "/essays/", allowedChildren: [], maxDepth: 3, requiredInboundLinks: 2, requiredNextActions: ["frontmatter.nextSteps[0]", "frontmatter.nextSteps[1]"] },
  { id: "research", routePattern: "/research/", routeRole: "research-ledger", canonicalParent: "/", allowedChildren: ["/research/<slug>/"], maxDepth: 1, requiredInboundLinks: 1, requiredNextActions: ["/research/<slug>/"] },
  { id: "research-record", routePattern: "/research/<slug>/", routeRole: "research-record", canonicalParent: "/research/", allowedChildren: ["public research artifacts"], maxDepth: 3, requiredInboundLinks: 1, requiredNextActions: ["/definitions/", "/evidence/"] },
  { id: "projects", routePattern: "/projects/", routeRole: "evidence-ledger", canonicalParent: "/", allowedChildren: ["/projects/<slug>/"], maxDepth: 1, requiredInboundLinks: 1, requiredNextActions: ["/projects/<slug>/"] },
  { id: "project-record", routePattern: "/projects/<slug>/", routeRole: "evidence-record", canonicalParent: "/projects/", allowedChildren: [], maxDepth: 3, requiredInboundLinks: 1, requiredNextActions: ["related essay or research route"] },
  { id: "concepts", routePattern: "/concepts/", routeRole: "reference-hub", canonicalParent: "/", allowedChildren: ["/concepts/<slug>/", "/concepts/map/"], maxDepth: 2, requiredInboundLinks: 1, requiredNextActions: ["/definitions/", "/projects/mplp/"] },
  { id: "concept-record", routePattern: "/concepts/<slug>/", routeRole: "reference-record", canonicalParent: "/concepts/", allowedChildren: [], maxDepth: 3, requiredInboundLinks: 1, requiredNextActions: ["related essay or project route"] },
  { id: "governance", routePattern: "/governance/", routeRole: "method-hub", canonicalParent: "/", allowedChildren: ["/governance/<slug>/"], maxDepth: 2, requiredInboundLinks: 1, requiredNextActions: ["/evidence/", "/research/"] },
  { id: "governance-record", routePattern: "/governance/<slug>/", routeRole: "method-record", canonicalParent: "/governance/", allowedChildren: [], maxDepth: 3, requiredInboundLinks: 1, requiredNextActions: ["/governance/", "/concepts/agentic-lifecycle-governance/"] },
  { id: "playbooks", routePattern: "/playbooks/", routeRole: "method-hub", canonicalParent: "/", allowedChildren: ["/playbooks/<slug>/"], maxDepth: 2, requiredInboundLinks: 1, requiredNextActions: ["/projects/", "/essays/"] },
  { id: "playbook-record", routePattern: "/playbooks/<slug>/", routeRole: "method-record", canonicalParent: "/playbooks/", allowedChildren: [], maxDepth: 3, requiredInboundLinks: 1, requiredNextActions: ["/playbooks/", "/governance/"] },
  { id: "ecosystem-mapping-record", routePattern: "/mapping/extended-ecosystem/<slug>/", routeRole: "mapping-record", canonicalParent: "/mapping/extended-ecosystem/", allowedChildren: [], maxDepth: 3, requiredInboundLinks: 1, requiredNextActions: ["/mapping/extended-ecosystem/", "/concepts/agentic-lifecycle-governance/"] },
  { id: "about", routePattern: "/about/", routeRole: "identity-sheet", canonicalParent: "/", allowedChildren: [], maxDepth: 1, requiredInboundLinks: 1, requiredNextActions: ["/lifecycle/", "/contact/"] }
];

export const navigationRegistry = {
  primary: ["/lifecycle/", "/essays/", "/research/", "/projects/", "/about/"],
  exploreGroups: {
    reference: ["/concepts/", "/definitions/", "/evidence/"],
    methods: ["/governance/", "/playbooks/"],
    context: ["/theories/", "/mapping/extended-ecosystem/"],
    utility: ["/newsletter/", "/contact/", "/rss.xml"]
  },
  desktopMobileParityRequired: true,
  footerOnlyCanonicalRoutesAllowed: false
} as const;

export const siteAutomationRegistry = {
  publicationOrchestrator: {
    controlRecord: "governance/site-publication-control-record.json",
    planCommand: "npm run publication:plan",
    syncCommand: "npm run publication:sync",
    verifyCommand: "npm run publication:verify",
    closeoutCommand: "npm run publication:closeout",
    generatedSurface: "public/generated/publication-manifest.json",
    managedLlmsSurface: "public/llms.txt generated publication registry",
    releaseBoundary: "The orchestrator prepares and verifies derived site surfaces. It does not deploy, publish externally, change navigation promotion, or approve new semantic claims."
  },
  closeout: {
    command: "npm run audit:all",
    workflow: ".github/workflows/site-governance.yml",
    mutates: false,
    purpose: "Build and verify publication generation, IA, editorial, content, package, security, and visual surfaces together."
  },
  governedOgAssets: {
    writeCommand: "npm run assets:og",
    checkCommand: "npm run assets:og:check",
    source: "scripts/generate-site-og-assets.mjs",
    scope: "Seven site-level Research Ledger OG SVG/PNG pairs only; authored artwork remains separate."
  },
  packageSurface: {
    command: "npm run audit:package-surface",
    source: "scripts/site-package-surface-audit.mjs",
    allowlist: ["dist/**", "public/**", "README.md"],
    forbiddenPrefixes: ["gaic_v032_work/", ".agents/", ".codex/", ".claude/", ".github/", "docs/", "design/", "governance/", "src/", "scripts/", "package-lock.json", "local config files"]
  }
} as const;

export const journeyRegistry = [
  { id: "decision-maker", audience: "Decision-maker", entry: "/", path: ["/lifecycle/", "/projects/", "/evidence/"], fallback: "/research/", maxClicks: 3 },
  { id: "builder", audience: "Builder", entry: "/", path: ["/essays/", "/playbooks/", "/projects/"], fallback: "/lifecycle/", maxClicks: 3 },
  { id: "architect", audience: "Architect", entry: "/", path: ["/lifecycle/", "/concepts/", "/projects/mplp/", "/research/"], fallback: "/essays/", maxClicks: 4 },
  { id: "governance-research", audience: "Governance", entry: "/", path: ["/research/", "/definitions/", "/governance/", "/evidence/"], fallback: "/lifecycle/", maxClicks: 4 },
  { id: "subscriber", audience: "Subscriber", entry: "essay or research record", path: ["/newsletter/"], fallback: "/essays/", maxClicks: 1 }
] as const;

export const semanticDerivedSotRegistry: SemanticDerivedSotRule[] = [
  {
    id: "site-identity-and-homepage-thesis",
    sourceOfTruth: ["siteSemanticBaseline", "siteConfig", "siteThesis", "pageRegistry"],
    derivedSurfaces: [
      "src/pages/index.astro",
      "src/pages/about.astro",
      "src/pages/lifecycle.astro",
      "src/layouts/BaseLayout.astro",
      "src/components/SiteHeader.astro",
      "src/components/SiteFooter.astro",
      "public/llms.txt",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json"
    ],
    reverseDependencySearches: [
      "Protocol Architect for the Agent Era",
      "Execution is not Delivery",
      "AI Agent Lifecycle",
      "Agentic Delivery",
      "MPLP"
    ],
    requiredEvidence: [
      "List every visible, metadata, JSON-LD, llms, and entity-graph surface repeating the changed positioning.",
      "Update derived wording from site SOT or mark the surface unchanged with rationale.",
      "Verify no stale identity or thesis copy remains in crawler-facing files."
    ],
    forbiddenShortcut: "Treating homepage copy as a page-local change."
  },
  {
    id: "definition-and-concept-anchor-graph",
    sourceOfTruth: ["src/data/definitions.ts", "src/data/site.ts concepts", "src/data/site.ts theoryClusters"],
    derivedSurfaces: [
      "src/pages/definitions.astro",
      "src/pages/concepts/",
      "src/pages/concepts/map/index.astro",
      "src/pages/concepts/agentic-lifecycle-governance/index.astro",
      "src/content/essays/",
      "src/pages/governance/",
      "src/pages/playbooks/",
      "public/llms.txt",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json"
    ],
    reverseDependencySearches: [
      "definitions",
      "relatedTerms",
      "relatedConcepts",
      "relatedIdeas",
      "relatedProjects",
      "href: \"/concepts/",
      "href: \"#"
    ],
    requiredEvidence: [
      "Check that definition `related` anchors resolve to a definition entry or to a canonical concept route.",
      "Check special hardcoded concept pages in addition to generated `concepts[]` routes.",
      "Check concept map, llms, entity graph, essays, governance pages, and playbooks for stale concept wording."
    ],
    forbiddenShortcut: "Auditing only `concepts[]` and missing hand-authored semantic pages."
  },
  {
    id: "whitepaper-publication-derived-sot",
    sourceOfTruth: ["src/data/whitepaperPublications.ts", "public/research/"],
    derivedSurfaces: [
      "src/pages/research/index.astro",
      "src/components/WhitePaperPublicationPage.astro",
      "src/pages/concepts/",
      "src/pages/concepts/map/index.astro",
      "src/pages/concepts/agentic-lifecycle-governance/index.astro",
      "src/pages/evidence.astro",
      "src/content/essays/",
      "public/llms.txt",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json",
      "public/social/"
    ],
    reverseDependencySearches: [
      "GACWP-2026",
      "AIAAWP-2026",
      "AIIRWP-2026",
      "Global AI Compliance White Paper 2026",
      "Agentic AI Auditability & Assurance White Paper 2026",
      "Agentic AI Insurability & Risk Transfer White Paper 2026",
      "v0.2",
      "Public Research Edition"
    ],
    requiredEvidence: [
      "Use white paper records for document ID, title, subtitle, version, citation, public status, artifacts, and boundary notes.",
      "Check llms, entity graph, evidence page, concept map, special concept pages, and article adaptations for derived citation drift.",
      "Keep withdrawn or rejected artifacts as historical traceability only when the current record says so."
    ],
    forbiddenShortcut: "Updating research routes while leaving crawler or entity-graph wording stale."
  },
  {
    id: "publication-content-derived-sot",
    sourceOfTruth: ["src/content/essays/* frontmatter and body"],
    derivedSurfaces: [
      "src/pages/essays/index.astro",
      "src/pages/essays/[slug].astro",
      "public/llms.txt",
      "public/social/",
      "public/figures/"
    ],
    reverseDependencySearches: [
      "slug:",
      "title:",
      "description:",
      "shareImage",
      "ogImage",
      "relatedIdeas",
      "relatedProjects",
      "projectProof"
    ],
    requiredEvidence: [
      "Check visible essay index placement, canonical route, RSS, sitemap, social metadata, figures, and linked project/concept references.",
      "Do not let frontmatter changes drift away from route metadata or llms summary copy."
    ],
    forbiddenShortcut: "Trusting content collection inclusion without visible and machine-readable exposure checks."
  },
  {
    id: "explore-content-and-taxonomy-derived-sot",
    sourceOfTruth: ["src/data/site.ts appliedPlaybooks", "src/data/governanceMappings.ts", "src/data/extendedEcosystems.ts", "src/data/taxonomy.ts"],
    derivedSurfaces: [
      "src/pages/playbooks/",
      "src/pages/governance/",
      "src/pages/mapping/extended-ecosystem/",
      "src/pages/essays/index.astro",
      "public/llms.txt",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json"
    ],
    reverseDependencySearches: ["contentRole", "canonicalRoute", "canonicalParent", "indexability", "sourceRefs", "controlledTaxonomy", "taxonomyAliases"],
    requiredEvidence: [
      "Every indexable detail has a distinct content role, audience, source basis, canonical parent, and next action.",
      "Noindex support routes are excluded from index lists, sitemap-facing summaries, and primary entity entries.",
      "Published essay tags are controlled, canonical, and mapped to a route; duplicate-content and metadata checks run after build."
    ],
    forbiddenShortcut: "Adding a search-term page or tag without a distinct reader outcome, source boundary, and canonical route contract."
  }
];

export const semanticImpactRules: GovernanceImpactRule[] = [
  {
    id: "brand-positioning-change",
    sourceOfTruth: ["siteSemanticBaseline", "siteConfig", "siteThesis", "pageRegistry.about"],
    trigger: "Identity, homepage positioning, site title, author role, or primary support-line changes.",
    inspect: [
      "src/data/site.ts",
      "src/pages/index.astro",
      "src/pages/about.astro",
      "src/layouts/BaseLayout.astro",
      "src/components/SiteHeader.astro",
      "src/components/SiteFooter.astro",
      "public/llms.txt",
      "public/social/"
    ],
    requiredEvidence: [
      "Report every public page or metadata surface containing the old positioning.",
      "Reuse the updated site SOT wording; do not invent a parallel tagline.",
      "Verify title, description, OG/Twitter copy, Person/WebSite JSON-LD, and visible header/footer alignment."
    ],
    forbiddenShortcut: "Changing only the homepage hero or one visible page."
  },
  {
    id: "core-concept-change",
    sourceOfTruth: ["siteSemanticBaseline", "definitions", "concepts", "theoryClusters"],
    trigger: "Definition or semantic boundary changes for AI Agent Lifecycle, Agentic Delivery, MPLP, Cognitive OS, SoloCrew, Validation Lab, Evidence Chain, or related core terms.",
    inspect: [
      "src/data/site.ts",
      "src/data/definitions.ts",
      "src/pages/concepts/",
      "src/pages/concepts/map/index.astro",
      "src/pages/concepts/agentic-lifecycle-governance/index.astro",
      "src/pages/definitions.astro",
      "src/content/essays/",
      "src/pages/projects.astro",
      "src/pages/projects/[slug].astro",
      "src/pages/governance/",
      "src/pages/playbooks/",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json",
      "public/llms.txt"
    ],
    requiredEvidence: [
      "Identify the current canonical wording before editing.",
      "List every page anchor, essay, project, and machine-readable surface that repeats or depends on the term.",
      "Update linked surfaces from SOT wording or explicitly mark them unchanged with rationale."
    ],
    forbiddenShortcut: "Adding local explanatory copy when the term is missing from the SOT."
  },
  {
    id: "article-publication-change",
    sourceOfTruth: ["src/content/essays", "definitions", "siteSemanticBaseline", "whitepaperPublications when sourced from research"],
    trigger: "Publishing, renaming, rewriting, routing, or changing metadata for an essay or article.",
    inspect: [
      "src/content/essays/",
      "src/pages/essays/index.astro",
      "src/pages/essays/[slug].astro",
      "src/data/definitions.ts",
      "src/data/site.ts",
      "public/llms.txt",
      "public/social/",
      "public/figures/"
    ],
    requiredEvidence: [
      "Classify publication type and source authority.",
      "Ensure /essays/ manual section placement is updated when needed.",
      "Verify canonical route, legacy route/noindex, OG image, RSS, sitemap, llms, related links, and figure semantics."
    ],
    forbiddenShortcut: "Trusting Astro collection generation without checking /essays/ visible placement."
  },
  {
    id: "whitepaper-publication-change",
    sourceOfTruth: ["whitepaperPublications", "public/research artifacts", "definitions"],
    trigger: "Publishing, resealing, renaming, adding, withdrawing, or adapting a white paper or research artifact.",
    inspect: [
      "src/data/whitepaperPublications.ts",
      "src/pages/research/index.astro",
      "public/research/",
      "src/pages/concepts/",
      "src/pages/concepts/map/index.astro",
      "src/pages/concepts/agentic-lifecycle-governance/index.astro",
      "src/pages/evidence.astro",
      "src/content/essays/",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json",
      "public/llms.txt",
      "public/social/"
    ],
    requiredEvidence: [
      "Use the white paper record as SOT for title, document ID, version, status, citation, artifacts, and boundary notes.",
      "Verify HTML/PDF/manifest/checksum references and generated research routes.",
      "Propagate only source-grounded semantic changes into essays, concepts, llms, and social copy."
    ],
    forbiddenShortcut: "Writing fresh summary claims that are not grounded in the white paper SOT."
  },
  {
    id: "visual-identity-change",
    sourceOfTruth: ["src/styles/global.css", "RegistryPageHero", "ReadingGuide", "ReadingFlowDiagram", "SiteHeader", "SiteFooter", "ProjectProofCard"],
    trigger: "Theme, typography, hero, component rhythm, card, navigation, or page-level UI changes.",
    inspect: [
      "src/styles/global.css",
      "src/components/RegistryPageHero.astro",
      "src/components/ReadingGuide.astro",
      "src/components/ReadingFlowDiagram.astro",
      "src/components/SiteHeader.astro",
      "src/components/SiteFooter.astro",
      "src/components/ProjectProofCard.astro",
      "src/components/WhitePaperPublicationPage.astro",
      "scripts/site-visual-system-audit.mjs",
      "src/pages/index.astro",
      "src/pages/lifecycle.astro",
      "src/pages/essays/index.astro",
      "src/pages/projects.astro",
      "src/pages/about.astro"
    ],
    requiredEvidence: [
      "Show which shared token or component owns the changed visual behavior.",
      "Check desktop and mobile for representative public surfaces and the Research Ledger shell contract.",
      "Do not claim visual consistency from code inspection alone."
    ],
    forbiddenShortcut: "Adding page-specific hero-like scales, colors, or card systems without binding them to shared tokens."
  },
  {
    id: "explore-content-change",
    sourceOfTruth: ["src/data/site.ts appliedPlaybooks", "src/data/governanceMappings.ts", "src/data/extendedEcosystems.ts", "src/data/taxonomy.ts"],
    trigger: "Adding, revising, merging, downgrading, or rerouting Explore detail content or public taxonomy.",
    inspect: [
      "src/data/site.ts",
      "src/data/governanceMappings.ts",
      "src/data/extendedEcosystems.ts",
      "src/data/taxonomy.ts",
      "src/pages/governance/",
      "src/pages/playbooks/",
      "src/pages/mapping/extended-ecosystem/",
      "src/pages/essays/index.astro",
      "public/llms.txt",
      "public/entity/jearonwong-mplp-gaic-entity-graph.json"
    ],
    requiredEvidence: [
      "Record content role, source authority, canonical parent, indexability, audience, and distinct reader outcome.",
      "Run duplicate-content, metadata, taxonomy, canonical/noindex, sitemap, RSS, and entity-surface audits after build.",
      "Keep white-paper artifacts and authored figures outside mechanical content or palette rewrites."
    ],
    forbiddenShortcut: "Treating a generated detail route or a vendor keyword variant as a complete publication."
  }
];

export const publicationSurfaceChecklist = {
  essay: [
    "src/content/essays/<slug>.md",
    "governance/site-publication-control-record.json for author decisions",
    "contentRole/publicationClass/editorialTrack/primaryAudience classification",
    "canonicalRoute/canonicalParent/source directory contract",
    "informationArchitectureRegistry and journeyRegistry entry",
    "navigation exposure, breadcrumb, required next steps, and click-depth contract",
    "src/pages/essays/index.astro manual section",
    "src/pages/essays/[slug].astro renderer behavior",
    "legacySlugs/noindex when slug changes",
    "shareImage/shareImageAlt and OG/Twitter metadata",
    "public/llms.txt for flagship or governance-significant work",
    "public/generated/publication-manifest.json deterministic projection",
    "RSS and sitemap build output",
    "relatedIdeas and relatedProjects",
    "public/figures SVG semantics and visual pass",
    "docs/audits record for significant waves"
  ],
  whitepaper: [
    "src/data/whitepaperPublications.ts",
    "src/pages/research/index.astro",
    "white paper public route",
    "public/research HTML/PDF/manifest/checksum artifacts",
    "public/llms.txt",
    "concept pages and definitions",
    "article adaptations",
    "social/OG copy and assets",
    "boundary notes and citation identity",
    "docs/audits record for significant waves"
  ],
  exploreDetail: [
    "contentRole and publication class",
    "canonicalRoute/canonicalParent and indexability",
    "primary audience and distinct reader question",
    "sourceRefs/officialSources with authority and scope",
    "scenario, inputs, outputs, failure modes, and evidence required",
    "index exposure, inbound links, next actions, and click-depth contract",
    "duplicate-content and metadata audit",
    "llms.txt, sitemap, RSS, JSON-LD, and entity graph impact review",
    "white-paper HTML/PDF/checksum and authored SVG exclusion check"
  ],
  taxonomy: [
    "src/data/taxonomy.ts controlled vocabulary",
    "essay frontmatter tags",
    "essay filter labels and route mappings",
    "alias and duplicate-label audit",
    "related concept/project/research links"
  ],
  brandOrTheme: [
    "src/data/site.ts semantic baseline and pageRegistry",
    "src/data/siteGovernance.ts impact rules",
    "src/data/siteGovernance.ts semanticDerivedSotRegistry",
    "home/about/lifecycle/projects/essays/research visible anchors",
    "special concept pages and concepts map",
    "BaseLayout title, description, JSON-LD, OG/Twitter",
    "SiteHeader and SiteFooter",
    "public/llms.txt",
    "public/entity/jearonwong-mplp-gaic-entity-graph.json",
    "representative browser visual checks",
    "scripts/generate-site-og-assets.mjs",
    "npm run assets:og:check",
    ".github/workflows/site-governance.yml"
  ],
  automation: [
    ".github/workflows/site-governance.yml",
    "governance/site-publication-control-record.json",
    "npm run publication:plan",
    "npm run publication:sync",
    "npm run publication:verify",
    "npm run publication:closeout",
    "npm run audit:all",
    "npm run assets:og:check",
    "npm run audit:package-surface"
  ]
} as const;

export function getSemanticImpactRule(id: string) {
  return semanticImpactRules.find((rule) => rule.id === id);
}

export function getSemanticDerivedSotRule(id: string) {
  return semanticDerivedSotRegistry.find((rule) => rule.id === id);
}

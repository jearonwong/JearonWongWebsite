import { absoluteUrl, createBreadcrumbJsonLd } from "./schema";
import { siteConfig } from "./site";

export const whitepaperPublications = [
  {
    id: "wp1-gaic",
    sequence: "01",
    title: "Global AI Compliance White Paper 2026",
    subtitle: "From Model Governance to Agentic Lifecycle Conformance",
    oneLinePositioning:
      "A lifecycle governance foundation for AI agent and multi-agent compliance.",
    abstract:
      "A public edition defining Missing Regulatory Objects, RCCS-T, RCCS-M, ALCS, and lifecycle responsibility for AI agent and multi-agent governance.",
    canonicalPath: "/research/global-ai-compliance-white-paper-2026/",
    assetBase: "/research/global-ai-compliance-white-paper-2026",
    documentId: "GACWP-2026-v0.3.2-FRC-R3",
    version: "v0.3.2",
    versionLabel: "v0.3.2 Public Research Edition",
    statusLabel: "PUBLIC_RESEARCH_EDITION",
    publicStatus: "Public Research Edition",
    releaseState:
      "HTML/PDF artifacts are publicly available as a public research edition; not legal advice, not certification, not a regulator-approved standard, and not procurement or vendor-ranking guidance.",
    artifactRole:
      "Public research edition with HTML and PDF artifacts. Manifest and checksum records are provided for integrity verification.",
    pageCount: 485,
    publicationMonth: "May 2026",
    datePublished: "2026-05-12",
    dateModified: "2026-05-28",
    citationText:
      "Jearon Wong. Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance. Technical Report GACWP-2026-v0.3.2-FRC-R3, May 2026.",
    citationKeywords:
      "AI Agent Lifecycle Governance; Agentic Lifecycle Conformance; Missing Regulatory Objects; RCCS-T; RCCS-M; ALCS; Multi-Agent Lifecycle Protocol; MPLP; AI Agent Compliance; Multi-Agent Systems; Deterministic Delivery",
    keywords: [
      "Jearon Wong",
      "Global AI Compliance White Paper 2026",
      "Agentic Lifecycle Governance",
      "AI Agent Governance",
      "Multi-Agent Systems Governance",
      "Missing Regulatory Objects",
      "RCCS-T",
      "RCCS-M",
      "ALCS",
      "MPLP",
      "Evidence Chain",
      "Accepted Outcome",
      "Authority Boundary",
      "Deterministic Delivery"
    ],
    artifacts: [
      {
        kind: "HTML",
        label: "Read HTML",
        href: "/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html",
        description: "Responsive web-reading edition",
        mediaType: "text/html",
        sha256: "4d24358d0f3a4b78f7239a8cffbda2c54bec17419d6c4e9992eccd49925bace4"
      },
      {
        kind: "PDF",
        label: "Download PDF",
        href: "/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf",
        description: "Fixed-layout public PDF edition",
        mediaType: "application/pdf",
        sha256: "51fb9a1a9019bbca3b7eb8b8ef436451fdb5129806916491589f401cb90ca106"
      },
      {
        kind: "JSON",
        label: "View Manifest",
        href: "/research/global-ai-compliance-white-paper-2026/manifest.json",
        description: "Public artifact manifest",
        mediaType: "application/json",
        sha256: "5d9ef1611a422afab92c8c937b9309ea6932a6ac8e64a928ed63e538be3ecedf"
      },
      {
        kind: "SHA256",
        label: "Verify Checksums",
        href: "/research/global-ai-compliance-white-paper-2026/checksums.sha256",
        description: "Public artifact checksum file",
        mediaType: "text/plain",
        sha256: "2393ebd32ed9e4f00bc527a329dfd52a861b60801437571d68a8b9e148e3f7e7"
      }
    ],
    additionalIntegrityLinks: [
      {
        label: "Public PDF metadata manifest",
        href: "/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json"
      },
      {
        label: "Historical seal manifest",
        href: "/research/global-ai-compliance-white-paper-2026/publication-candidate-manifest.json"
      }
    ],
    overview:
      "The Global AI Compliance White Paper 2026 establishes the series foundation: lifecycle responsibility objects, compliance coverage gaps, and the shift from model-only governance toward agentic lifecycle conformance.",
    whyItMatters:
      "It gives the series its object layer: authority, evidence, accepted outcome, substitution, dispute, remediation, and closure become governable records rather than narrative afterthoughts.",
    artifactNote:
      "HTML and PDF are available. Manifest and checksum records are provided for integrity verification. No public DOCX is authorized.",
    evidenceIntegrity:
      "The public distribution surface exposes the current HTML/PDF artifacts, manifest, checksum, and historical metadata manifests without changing the source truth.",
    boundaryNotes: [
      "Not legal advice.",
      "Not legal compliance proof.",
      "Not certification.",
      "Not a regulator-approved benchmark.",
      "Not procurement recommendation.",
      "Not vendor ranking.",
      "Not a standards-body publication."
    ],
    integrityRows: [
      { label: "Source commit", value: "943a36b65b79e4cf9ca68d75dacc3cbcfcb51a1e" },
      { label: "Repository integrity commit", value: "448afd6f7d9ebef56b3e8afcd3c97c2f22b5daea" },
      { label: "Cleanup commit", value: "a9c5747efb36915470721c11855142f7c7fa9b25" },
      { label: "Page count", value: "485" }
    ],
    keyConcepts: [
      { label: "AI Agent Lifecycle Governance", href: "/concepts/agentic-lifecycle-governance/" },
      { label: "Missing Regulatory Objects", href: "/concepts/missing-regulatory-objects/" },
      { label: "RCCS-M", href: "/concepts/rccs-m/" },
      { label: "ALCS", href: "/concepts/alcs/" },
      { label: "Intent Drift", href: "/concepts/intent-drift/" },
      { label: "Authority Boundary", href: "/concepts/authority-boundary/" },
      { label: "Evidence Chain", href: "/concepts/lifecycle-evidence/" },
      { label: "Accepted Outcome", href: "/concepts/accepted-outcome/" },
      { label: "MPLP as one protocol path", href: "/projects/mplp/" },
      { label: "AI Agent Compliance", href: "/governance/ai-agent-compliance/" }
    ],
    relatedResearch: [
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/",
        body: "The auditability companion for lifecycle evidence and audit evidence chains."
      },
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/",
        body: "The risk-transfer companion for insured subject separation, agentic risk objects, and claim reconstruction."
      }
    ]
  },
  {
    id: "wp2-aiaawp",
    sequence: "02",
    title: "Agentic AI Auditability & Assurance White Paper 2026",
    subtitle: "A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance",
    oneLinePositioning:
      "A lifecycle evidence guide for auditability, assurance boundaries, and enterprise AI governance.",
    abstract:
      "A public research edition defining agentic AI auditability, lifecycle evidence, audit evidence chains, AARM, MRO-to-audit-evidence mapping, and enterprise AI governance boundaries.",
    canonicalPath: "/research/agentic-ai-auditability-assurance-white-paper-2026/",
    assetBase: "/research/agentic-ai-auditability-assurance-white-paper-2026",
    documentId: "AIAAWP-2026-v0.1",
    version: "v0.1",
    versionLabel: "v0.1 Public Research Edition",
    statusLabel: "PUBLIC_RESEARCH_EDITION",
    publicStatus: "Public Research Edition",
    releaseState:
      "HTML/PDF artifacts are publicly available as a public research edition; not legal advice, not an audit standard, not certification, not an assurance opinion, and not regulator or audit-body endorsement.",
    artifactRole:
      "Public research edition with HTML and PDF artifacts. Manifest and checksum records are provided for integrity verification.",
    pageCount: 118,
    publicationMonth: "May 2026",
    datePublished: "2026-05-18",
    dateModified: "2026-05-28",
    citationText:
      "Jearon Wong. Agentic AI Auditability & Assurance White Paper 2026: A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance. Technical Report AIAAWP-2026-v0.1, May 2026.",
    citationKeywords:
      "Agentic AI Auditability; AI Agent Auditability; Audit Evidence Chain; Agentic Audit Object; AARM; MRO; Agentic Lifecycle Governance; Enterprise AI Governance; Lifecycle Evidence",
    keywords: [
      "Agentic AI Auditability",
      "AI Agent Auditability",
      "Audit Evidence Chain",
      "Agentic Audit Object",
      "Agentic Lifecycle Governance",
      "Global AI Compliance White Paper 2026",
      "Missing Regulatory Objects",
      "MRO-to-Audit-Evidence Mapping",
      "AARM",
      "Lifecycle Evidence",
      "Accepted Outcome",
      "Authority Boundary",
      "Enterprise AI Governance"
    ],
    artifacts: [
      {
        kind: "HTML",
        label: "Read HTML",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
        description: "Responsive web-reading artifact",
        mediaType: "text/html",
        sha256: "996a07049b0588ba3c53c44501fcbaf8a67d8c84375a42167037134fc1fa69c4"
      },
      {
        kind: "PDF",
        label: "Download PDF",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf",
        description: "Fixed-layout PDF artifact",
        mediaType: "application/pdf",
        sha256: "85cccf7c177d7f449d33d4d507cc4885828fe334c4715e338282197150423ac7"
      },
      {
        kind: "JSON",
        label: "View Manifest",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json",
        description: "Public artifact manifest",
        mediaType: "application/json",
        sha256: "cadbf8e3429333e18ed54867f99af2b747f499c1ca92c3c3eca879d70b3bee15"
      },
      {
        kind: "SHA256",
        label: "Verify Checksums",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256",
        description: "Public artifact checksum file",
        mediaType: "text/plain",
        sha256: "9d84c3286a5683673ff8ebb20f5d02c2a73b1a1cd7298792e2f31cbedbeecce4"
      }
    ],
    overview:
      "The Agentic AI Auditability & Assurance White Paper 2026 turns lifecycle responsibility into audit evidence: reconstructable authority, roles, tool actions, accepted outcomes, exceptions, remediation, and privacy-preserving disclosure.",
    whyItMatters:
      "It distinguishes raw logs from audit evidence chains and keeps auditability as a bounded evidence discipline rather than an audit opinion, certification, or assurance conclusion.",
    artifactNote:
      "HTML and PDF are available. Manifest and checksum records are provided for integrity verification. No public DOCX is authorized.",
    evidenceIntegrity:
      "The public artifacts are available through the public route with manifest and checksum integrity records while preserving the controlled source-truth boundary.",
    boundaryNotes: [
      "Not an audit standard.",
      "Not certification.",
      "Not legal advice or legal compliance proof.",
      "Not an assurance opinion.",
      "Not regulator approval.",
      "Not Big Four or audit-body endorsement.",
      "Not procurement recommendation or vendor ranking.",
      "No public DOCX is authorized."
    ],
    integrityRows: [
      { label: "Source governance commit", value: "5c05972fe57189bd4d6ae35948429767c9de0735" },
      { label: "Document ID", value: "AIAAWP-2026-v0.1" },
      { label: "Page count", value: "118" },
      { label: "Publication status", value: "Official on-site public research edition." }
    ],
    keyConcepts: [
      { label: "Agentic AI Auditability", href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#executive-thesis" },
      { label: "Agentic Audit Object", href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#agentic-audit-object-overview" },
      { label: "Audit Evidence Chain", href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#4-why-logs-are-not-audit-evidence-chains" },
      { label: "AARM", href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#13-agentic-auditability-readiness-model" },
      { label: "MRO-to-Audit-Evidence Mapping", href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#6-mro-to-audit-evidence-mapping" },
      { label: "Lifecycle Evidence", href: "/concepts/lifecycle-evidence/" },
      { label: "Accepted Outcome", href: "/concepts/accepted-outcome/" },
      { label: "Agentic Lifecycle Governance", href: "/concepts/agentic-lifecycle-governance/" }
    ],
    relatedResearch: [
      {
        label: "Global AI Compliance White Paper 2026",
        href: "/research/global-ai-compliance-white-paper-2026/",
        body: "The lifecycle-governance foundation for Missing Regulatory Objects, RCCS-M, ALCS, and responsibility objects."
      },
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/",
        body: "The risk-transfer companion for insured subject separation, agentic risk objects, and claim reconstruction."
      }
    ]
  },
  {
    id: "wp3-aiirwp",
    sequence: "03",
    title: "Agentic AI Insurability & Risk Transfer White Paper 2026",
    subtitle: "A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer",
    oneLinePositioning:
      "A lifecycle evidence guide for risk-transfer analysis, claim reconstruction, and underwriting-facing reviewability.",
    abstract:
      "A public research edition analyzing agentic AI insurability and risk transfer through lifecycle evidence, insured subject and risk object separation, underwriting reviewability, and claim reconstruction boundaries.",
    canonicalPath: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/",
    assetBase: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026",
    documentId: "AIIRWP-2026-v1.0",
    version: "v1.0",
    versionLabel: "v1.0 Public Research Edition",
    statusLabel: "PUBLIC_RESEARCH_EDITION",
    publicStatus: "Public Research Edition",
    releaseState:
      "HTML/PDF artifacts are publicly available as a public research edition with repository governance seal complete; not legal advice, not insurance advice, not a coverage opinion, not underwriting guidance, not certification, and not insurer or regulator endorsement.",
    artifactRole:
      "Public research edition with HTML and PDF artifacts. Manifest and checksum records are provided for integrity verification.",
    pageCount: 138,
    publicationMonth: "May 2026",
    datePublished: "2026-05-27",
    dateModified: "2026-05-28",
    citationText:
      "Jearon Wong. Agentic AI Insurability & Risk Transfer White Paper 2026: A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer. Technical Report AIIRWP-2026-v1.0, May 2026.",
    citationKeywords:
      "Agentic AI Insurability; AI risk transfer; insured legal subject; agentic risk object; underwriting reviewability; claim evidence chain; lifecycle evidence; Agentic Lifecycle Governance; AI Agent Lifecycle",
    keywords: [
      "Agentic AI Insurability",
      "AI Risk Transfer",
      "Insured Legal Subject",
      "Agentic Risk Object",
      "Claim Evidence Chain",
      "Lifecycle Evidence",
      "Underwriting Reviewability",
      "Agentic Lifecycle Governance",
      "AI Agent Lifecycle",
      "Authority Boundary",
      "Accepted Outcome",
      "MPLP"
    ],
    artifacts: [
      {
        kind: "HTML",
        label: "Read HTML",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html",
        description: "Responsive web-reading artifact",
        mediaType: "text/html",
        sha256: "a55eb18227dc06d134091b4c1fbeb798bcb44823cfe0203a6a1636ec9ea6ca04"
      },
      {
        kind: "PDF",
        label: "Download PDF",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf",
        description: "Fixed-layout PDF artifact",
        mediaType: "application/pdf",
        sha256: "db4866c7421928e65d4563bb25787d9b322d708c59937216da9d04b60991d178"
      },
      {
        kind: "JSON",
        label: "View Manifest",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json",
        description: "Public artifact manifest",
        mediaType: "application/json",
        sha256: "ef732af9257ba96bd2e1302db8e439bec4de376c1811a43f7c18b1558d5450db"
      },
      {
        kind: "SHA256",
        label: "Verify Checksums",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256",
        description: "Public artifact checksum file",
        mediaType: "text/plain",
        sha256: "00305f7b403d548828b5037ac9f149a30ab0a3abfd58f12ac8e6f0498a641f64"
      }
    ],
    overview:
      "This paper connects lifecycle governance and auditability evidence to risk-transfer reasoning while keeping insured legal subjects, agentic risk objects, evidence chains, and coverage questions separate.",
    whyItMatters:
      "It frames how agentic systems may become reviewable for risk-transfer discussion without treating reviewability as coverage, evidence as insurance, governance as claim approval, or auditability as insurability.",
    artifactNote:
      "HTML and PDF are available. Manifest and checksum records are provided for integrity verification. No public DOCX is authorized.",
    evidenceIntegrity:
      "The public artifacts are the current public research edition HTML/PDF/manifest/checksum set with public terminology amended after the repository governance seal. Rejected v0.2 remains historical context only and is not current source truth or citation source.",
    boundaryNotes: [
      "Not legal advice.",
      "Not insurance advice.",
      "Not a coverage opinion.",
      "Not underwriting guidance.",
      "Not actuarial pricing guidance.",
      "Not premium recommendation.",
      "Not claim approval guidance.",
      "Not certification.",
      "Not proof of insurability.",
      "Not insurer endorsement.",
      "Not a regulator-approved method.",
      "Not procurement recommendation.",
      "Not vendor ranking.",
      "Not a score.",
      "Not a standard.",
      "No public DOCX is authorized."
    ],
    integrityRows: [
      { label: "Source basis commit", value: "a459470570b1b84cc89a566abf606efa78491bf9" },
      { label: "Public route", value: "Active" },
      { label: "Rendering profile", value: "Shared whitepaper HTML/PDF publication profile" },
      { label: "Page count", value: "138" },
      { label: "Repository governance seal", value: "Complete with public terminology amendment." },
      { label: "Rejected v0.2", value: "Not current source truth or citation source." }
    ],
    keyConcepts: [
      { label: "Agentic AI Insurability", href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html#executive-thesis" },
      { label: "Insured Legal Subject", href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html#chapter-1-the-new-insurance-question-what-exactly-is-being-transferred" },
      { label: "Agentic Risk Object", href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html#chapter-4-the-insurable-agentic-risk-object" },
      { label: "Claim Evidence Chain", href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html#chapter-19-claim-reconstruction-after-agentic-ai-incidents" },
      { label: "Underwriting-facing reviewability", href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html#chapter-14-underwriting-evidence-architecture" },
      { label: "Lifecycle Evidence", href: "/concepts/lifecycle-evidence/" },
      { label: "Authority Boundary", href: "/concepts/authority-boundary/" },
      { label: "Accepted Outcome", href: "/concepts/accepted-outcome/" }
    ],
    relatedResearch: [
      {
        label: "Global AI Compliance White Paper 2026",
        href: "/research/global-ai-compliance-white-paper-2026/",
        body: "The lifecycle-governance foundation for Missing Regulatory Objects, RCCS-M, ALCS, and responsibility objects."
      },
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/",
        body: "The auditability companion for lifecycle evidence and audit evidence chains."
      }
    ],
    versionNote:
      "The prior AIIRWP v0.2 candidate remains rejected and withdrawn. It is historical traceability context only."
  }
] as const;

export type WhitePaperPublication = (typeof whitepaperPublications)[number];

export function getWhitePaperPublication(id: WhitePaperPublication["id"]) {
  const paper = whitepaperPublications.find((entry) => entry.id === id);
  if (!paper) {
    throw new Error(`Unknown white paper publication id: ${id}`);
  }
  return paper;
}

export function createWhitePaperCitationMetaTags(paper: WhitePaperPublication) {
  const html = paper.artifacts.find((artifact) => artifact.kind === "HTML");
  const pdf = paper.artifacts.find((artifact) => artifact.kind === "PDF");
  return [
    { name: "citation_title", content: `${paper.title}: ${paper.subtitle}` },
    { name: "citation_author", content: "Wong, Jearon" },
    { name: "citation_publication_date", content: "2026/05" },
    { name: "citation_technical_report_number", content: paper.documentId },
    ...(pdf ? [{ name: "citation_pdf_url", content: absoluteUrl(pdf.href) }] : []),
    ...(html ? [{ name: "citation_fulltext_html_url", content: absoluteUrl(html.href) }] : []),
    { name: "citation_language", content: "en" },
    { name: "citation_keywords", content: paper.citationKeywords }
  ];
}

export function createWhitePaperJsonLd(paper: WhitePaperPublication) {
  const pageUrl = absoluteUrl(paper.canonicalPath);
  const encodings = paper.artifacts
    .filter((artifact) => artifact.kind === "HTML" || artifact.kind === "PDF")
    .map((artifact) => ({
      "@type": "MediaObject",
      encodingFormat: artifact.mediaType,
      contentUrl: absoluteUrl(artifact.href),
      sha256: artifact.sha256
    }));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": ["TechArticle", "Report"],
    "@id": `${pageUrl}#whitepaper`,
    headline: paper.title,
    alternativeHeadline: paper.subtitle,
    description: paper.abstract,
    url: pageUrl,
    identifier: paper.documentId,
    inLanguage: "en",
    author: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    publisher: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    datePublished: paper.datePublished,
    dateModified: paper.dateModified,
    version: paper.versionLabel,
    genre: "Technical report",
    creativeWorkStatus: paper.publicStatus,
    citation: paper.citationText,
    keywords: paper.keywords,
    isPartOf: [
      {
        "@type": "CreativeWorkSeries",
        name: "Agentic Lifecycle Governance Industry Series"
      },
      {
        "@id": `${siteConfig.siteUrl}#website`
      }
    ],
    about: paper.keywords.map((term) => ({
      "@type": "Thing",
      name: term
    })),
    encoding: encodings,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`
    }
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: paper.title,
    description: paper.abstract,
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`
    },
    mainEntity: {
      "@id": `${pageUrl}#whitepaper`
    }
  };

  const artifactListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#artifacts`,
    name: `${paper.title} public artifacts`,
    itemListElement: paper.artifacts.map((artifact, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: artifact.label,
      url: absoluteUrl(artifact.href)
    }))
  };

  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${pageUrl}#defined-terms`,
    name: `${paper.title} Terms`,
    description: `Key terms used by ${paper.title}.`,
    hasDefinedTerm: paper.keywords.slice(0, 12).map((term) => ({
      "@type": "DefinedTerm",
      name: term,
      inDefinedTermSet: `${pageUrl}#defined-terms`
    }))
  };

  return [
    pageJsonLd,
    articleJsonLd,
    createBreadcrumbJsonLd(pageUrl, [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research/" },
      { name: paper.title, path: paper.canonicalPath }
    ]),
    artifactListJsonLd,
    definedTermSetJsonLd
  ];
}

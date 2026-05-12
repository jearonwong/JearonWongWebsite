import { siteConfig, siteSemanticBaseline, socialLinks } from "./site";

export const siteEntityTerms = [
  "AI Agent Lifecycle",
  "Agentic Lifecycle Governance",
  "Agentic Delivery",
  "Global AI Compliance White Paper 2026",
  "Missing Regulatory Objects",
  "Lifecycle Responsibility Objects",
  "RCCS-M",
  "MRO-adjusted Regulatory Compliance Coverage Score",
  "ALCS",
  "Agentic Lifecycle Conformance Score",
  "MPLP",
  "Multi-Agent Lifecycle Protocol",
  "Evidence Chain",
  "Accepted Outcome",
  "Authority Boundary",
  "Confirmation Boundary",
  "Multi-Agent Lifecycle Governance",
  "AI Agent Governance",
  "Harness Engineering",
  "AI agent rollback",
  "AI coding agent auditability",
  "human role to multi-agent responsibility mapping",
  "lifecycle protocol",
  "accountable outcomes",
  "accountable delivery",
  "Cognitive OS",
  "SoloCrew",
  "Validation Lab",
  "Semantic Loss",
  "Intent Drift",
  "Context Drift",
  "protocol engineering",
  "production-grade AI agents",
  "multi-agent systems"
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}#person`,
    name: siteConfig.author.name,
    url: siteConfig.siteUrl,
    mainEntityOfPage: {
      "@id": `${siteConfig.siteUrl}/about/#profile`
    },
    jobTitle: siteConfig.author.role,
    image: absoluteUrl(siteConfig.author.image),
    email: `mailto:${siteConfig.author.email}`,
    description: `${siteSemanticBaseline.identityAnchor}. ${siteSemanticBaseline.fieldDefinitionStatement} ${siteSemanticBaseline.agenticDeliveryDefinition}`,
    knowsAbout: siteEntityTerms,
    sameAs: socialLinks.map((link) => link.href),
    subjectOf: [
      {
        "@type": "TechArticle",
        name: "Global AI Compliance White Paper 2026",
        url: absoluteUrl("/research/global-ai-compliance-white-paper-2026/")
      },
      {
        "@type": "WebPage",
        name: "Agentic Lifecycle Governance",
        url: absoluteUrl("/concepts/agentic-lifecycle-governance/")
      }
    ]
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    author: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    inLanguage: "en",
    about: siteEntityTerms.map((term) => ({
      "@type": "Thing",
      name: term
    }))
  };
}

export function createBreadcrumbJsonLd(
  pageUrl: string,
  items: Array<{ name: string; path?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? absoluteUrl(item.path) : pageUrl
    }))
  };
}

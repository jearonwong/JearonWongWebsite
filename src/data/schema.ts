import { siteConfig, siteSemanticBaseline, socialLinks } from "./site";

export const siteEntityTerms = [
  "AI Agent Lifecycle",
  "Agentic Lifecycle Governance",
  "Agentic Delivery",
  "Deterministic Delivery",
  "Rollbackable Agent Workflows",
  "Verifiable AI Agents",
  "Configurable Agent Governance",
  "Agent Architecture Governance",
  "Regulatory and Enterprise Governance Mapping",
  "Regulatory Control Crosswalk",
  "Enterprise AI Control Evidence",
  "AI Agent Compliance",
  "EU AI Act and agentic systems",
  "GDPR and agentic AI evidence",
  "NIST AI RMF and agentic lifecycle governance",
  "ISO/IEC 42001 and agentic AI management systems",
  "Human Role Responsibility Mapping",
  "AI Agent Evidence Retention",
  "Vendor and Runtime Substitution Conformance",
  "Incident Dispute Remediation Closure",
  "Prompt Engineering vs Harness Engineering",
  "Agentic Delivery Architecture Checklist",
  "Global AI Compliance White Paper 2026",
  "Agentic AI Auditability & Assurance White Paper 2026",
  "Agentic AI Insurability & Risk Transfer White Paper 2026",
  "Agentic AI Auditability",
  "Agentic Audit Object",
  "Audit Evidence Chain",
  "AARM",
  "Agentic AI Insurability",
  "Agentic Insurability Objects",
  "Agentic Insurability Readiness Model",
  "Insured Legal Subject",
  "Agentic Risk Object",
  "Claim Evidence Chain",
  "MRO-to-Audit-Evidence Mapping",
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
  "GAIC-Cited Systems",
  "Evidence Registry",
  "Citation Kit",
  "Entity graph JSON artifact",
  "IBM watsonx.governance",
  "Microsoft Azure AI Foundry",
  "AWS Bedrock",
  "AWS Guardrails",
  "AWS AgentCore",
  "Google Vertex AI",
  "Google ADK",
  "Model Armor",
  "LangGraph",
  "LangSmith",
  "OpenAI Agents SDK",
  "CrewAI",
  "Extended Ecosystem Lifecycle Governance Mapping",
  "Claude Code",
  "Qwen",
  "Cursor",
  "Cursor AI coding agents",
  "AutoGen",
  "Model Context Protocol",
  "MCP",
  "Agent2Agent Protocol",
  "A2A",
  "Semantic Kernel",
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
        "@type": "TechArticle",
        name: "Agentic AI Auditability & Assurance White Paper 2026",
        url: absoluteUrl("/research/agentic-ai-auditability-assurance-white-paper-2026/")
      },
      {
        "@type": "TechArticle",
        name: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        url: absoluteUrl("/research/agentic-ai-insurability-risk-transfer-white-paper-2026/")
      },
      {
        "@type": "CreativeWork",
        name: "MPLP",
        alternateName: "Multi-Agent Lifecycle Protocol",
        url: absoluteUrl("/projects/mplp/")
      },
      {
        "@type": "CollectionPage",
        name: "Evidence Registry and Citation Kit",
        url: absoluteUrl("/evidence/")
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

# GAIC-R3H Structured Data Report

Task ID: GAIC-R3H-REGULATORY-AND-ENTERPRISE-GOVERNANCE-SEMANTIC-LAYER

## Governance Index

Route:

- `/governance/`

Structured data:

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`
- `about` terms for R3H search entities

## Governance Detail Routes

Routes:

- `/governance/ai-agent-governance/`
- `/governance/multi-agent-system-governance/`
- `/governance/enterprise-agent-governance/`
- `/governance/ai-agent-compliance/`
- `/governance/eu-ai-act-agentic-systems/`
- `/governance/gdpr-agentic-ai-evidence/`
- `/governance/nist-ai-rmf-agentic-lifecycle/`
- `/governance/iso-42001-agentic-ai/`
- `/governance/human-role-responsibility-mapping/`
- `/governance/ai-agent-evidence-retention/`
- `/governance/vendor-runtime-substitution-conformance/`
- `/governance/incident-dispute-remediation-closure/`

Structured data:

- `WebPage`
- `TechArticle`
- `BreadcrumbList`
- `about` keywords
- `mentions` lifecycle governance objects
- `isBasedOn` GAIC white paper, Agentic Lifecycle Governance, and official sources where used

## Sitewide Terms

`src/data/schema.ts` adds R3H terms to the sitewide Person/WebSite entity graph.

## Boundary

No schema type implies legal advice, certification, regulator approval, official standards-body affiliation, procurement recommendation, audit opinion, or vendor ranking.

## Decision

R3H metadata and JSON-LD are present and boundary-safe.

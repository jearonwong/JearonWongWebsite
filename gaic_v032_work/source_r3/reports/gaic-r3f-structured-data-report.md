# GAIC-R3F Structured Data Report

Task ID: GAIC-R3F-EXTENDED-ECOSYSTEM-SEMANTIC-MAPPING

## Routes

R3F adds:

- `/mapping/extended-ecosystem/`
- `/mapping/extended-ecosystem/claude-code/`
- `/mapping/extended-ecosystem/qwen/`
- `/mapping/extended-ecosystem/cursor-ai-coding-agents/`
- `/mapping/extended-ecosystem/autogen/`
- `/mapping/extended-ecosystem/mcp/`
- `/mapping/extended-ecosystem/a2a/`
- `/mapping/extended-ecosystem/semantic-kernel/`

## Index Metadata

The index route includes:

- title: `Extended Ecosystem Lifecycle Governance Mapping`
- meta description: independent lifecycle governance mappings for model, agent, framework, and protocol ecosystems not treated as first-layer GAIC scored systems
- canonical through `BaseLayout`
- robots `index, follow` through `BaseLayout`
- OG/Twitter metadata through `BaseLayout`
- keywords covering Claude Code, Qwen, Cursor, AutoGen, MCP, A2A, Semantic Kernel, MRO, RCCS-M, ALCS, and Harness Engineering

## Index JSON-LD

The index route includes:

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

## Detail Metadata

Each detail route includes:

- title: `{Ecosystem} Lifecycle Governance Mapping`
- meta description connecting the ecosystem to Agentic Lifecycle Governance, MRO, RCCS-M, ALCS, Authority Boundary, Evidence Chain, Accepted Outcome, rollback, auditability, and Harness Engineering
- canonical through `BaseLayout`
- robots `index, follow` through `BaseLayout`
- OG/Twitter metadata through `BaseLayout`

## Detail JSON-LD

Each detail route includes:

- `WebPage`
- `TechArticle`
- `BreadcrumbList`
- `about` terms from the ecosystem registry
- `mentions` for the ecosystem and core GAIC concepts
- `isBasedOn` links to Agentic Lifecycle Governance and official source URLs
- `isPartOf` link to the extended ecosystem collection

## Boundary

No schema implies vendor affiliation, official vendor documentation, certification, procurement recommendation, legal compliance proof, or regulator approval.

## Sitewide Entity Terms

`src/data/schema.ts` now adds the extended ecosystem terms to the sitewide WebSite/Person knowledge graph:

- Extended Ecosystem Lifecycle Governance Mapping
- Claude Code
- Qwen
- Cursor / Cursor AI coding agents
- AutoGen
- Model Context Protocol / MCP
- Agent2Agent Protocol / A2A
- Semantic Kernel

## Decision

R3F structured data is present for the index and detail pages and remains boundary-safe.

# AIIRWP R5 JSON-LD Plan

**Status:** Future JSON-LD plan only.
**Boundary:** Not wired into the site. R5 creates no public route, JSON-LD block, entity graph entry, sitemap entry, `llms.txt` entry, or Evidence Registry entry.

## Future JSON-LD Types

| Type | Future role | Boundary |
| --- | --- | --- |
| WebPage | Canonical public hub route if later staged. | No public route in R5. |
| TechArticle or Report | White paper content identity, following GAIC/AIAAWP pattern. | No certification, endorsement, insurer acceptance, or coverage guarantee. |
| BreadcrumbList | Research > white paper route navigation. | Future route only. |
| ItemList | Artifact list if HTML/PDF artifacts are later public. | Do not list artifacts before they exist. |
| DefinedTermSet / DefinedTerm | AIO, AIRM, claim evidence chain, coverage boundary, responsibility mapping if terms are public-mapped. | Terms are Jearon Wong synthesis / analytical terms, not standards. |
| Person / Organization | Jearon Wong author/entity references consistent with existing site model. | No external endorsement. |

## Planned Relationship Edges

- `isPartOf`: Agentic Lifecycle Governance Industry Series.
- `about`: agentic AI insurability, lifecycle evidence, underwriting evidence, claims reconstruction, risk transfer.
- `mentions`: GAIC, AIAAWP, MRO, Audit Evidence Chain, AIO, AIRM, claim evidence chain.
- `citation`: future HTML/PDF URLs only after artifact staging.
- `author`: Jearon Wong.
- `relatedLink` / `significantLink`: GAIC and AIAAWP public hubs if route is staged.

## Required Boundary Statements in JSON-LD Adjacent Copy

- AIO and AIRM are Jearon Wong synthesis / analytical terms.
- The white paper is not legal advice, insurance advice, a coverage opinion, an underwriting standard, or claims approval guidance.
- No public DOCX encoding unless owner explicitly authorizes public editable-derivative distribution later.
- No insurer acceptance, certification, coverage guarantee, legal proof, endorsement, procurement recommendation, vendor ranking, or SEO/GEO outcome claim.

## R6/R7 JSON-LD QA Requirements

- Parse every JSON-LD block after staging.
- Verify artifact URLs and checksums match actual public files.
- Verify relationship language matches the semantic mapping plan.
- Verify internal shorthand is not used as public document identity.

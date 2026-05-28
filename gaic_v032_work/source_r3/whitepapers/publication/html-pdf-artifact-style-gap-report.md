# HTML/PDF Artifact Style Gap Report

**Wave:** WP3-V1-R3AB-WHITEPAPER-PUBLICATION-STYLE-SYSTEM-REPAIR-01
**Scope:** Public HTML and PDF artifacts for WP1, WP2, and WP3
**Decision:** Superseded by R3AC. R3AB produced an intermediate repair, but owner review found HTML/PDF rendering parity still failed.

## Artifact Inventory

| Paper | HTML | PDF | PDF page count | R3AB classification |
| --- | --- | --- | --- | --- |
| WP1 GAIC | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | 485 A4 pages | Mature GAIC publication artifact with historical metadata manifests. |
| WP2 AIAAWP | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf` | 118 A4 pages | Public research candidate artifact from the WP2 publication pipeline. |
| WP3 AIIRWP | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` | 95 A4 pages at R3AB; 138 A4 pages after R3AC | R3AB intermediate repair superseded by R3AC WP2/R8 rendering parity repair. |

## R3AB Repairs

- Repaired WP3 public-facing HTML shell from a light document export into the WP1/WP2 professional-shell lineage.
- Regenerated WP3 PDF from the repaired professional-shell public HTML using the existing Chrome headless print pattern with no browser header/footer.
- Refreshed WP3 public manifest and checksum file.
- Updated shared publication data hashes for HTML, PDF, manifest, and checksum.
- Recorded an intermediate page-count change from the R3AA 117-page technical-route PDF to the R3AB 95-page style-system PDF. R3AC later supersedes this with a 138-page R8-profile PDF.

## Style Gap Assessment

| Dimension | WP1 | WP2 | WP3 | R3AB result |
| --- | --- | --- | --- | --- |
| Public route page | Shared R3AB page component | Shared R3AB page component | Shared R3AB page component | Aligned. |
| HTML artifact status shell | GAIC publication-shell lineage | WP2 candidate-shell lineage | Professional-shell lineage applied | Repaired; visual QA still required. |
| PDF page style | A4, mature long-form publication | A4, candidate publication | 95-page intermediate artifact in R3AB; 138-page R8-profile artifact after R3AC | R3AB insufficient; R3AC repaired. |
| Table handling | Mature GAIC wide-table repairs | Candidate pipeline table handling | Wide-table risk tracked from R3X/R3Y | R3AC should inspect wide tables before any final seal. |
| Manifest/checksum | Public integrity files plus historical manifests | Public integrity files | Public integrity files refreshed in R3AB | Aligned enough for route QA. |

## Required Future QA

R3AC must inspect:

- whether WP3 HTML table behavior remains acceptable on desktop and mobile;
- whether WP3 PDF wide tables remain readable after R3AB regeneration;
- whether WP1/WP2/WP3 artifact shells need further template consolidation beyond the WP3 style-system repair;
- whether any artifact-style repair is required before final seal or announcement preparation.

## Non-Blocking Rationale

The user's R3AB correction targets publication-system alignment across public routes and public-facing artifact framing. R3AB repairs the route/page system and repairs the WP3 artifact shell into the professional whitepaper lineage. Full regeneration of WP1/WP2 is not required because those artifacts already form the canonical baseline.

## Boundary

This report does not authorize final/sealed/release-ready status, public announcement, DOCX, certification, insurer acceptance, coverage-ready, underwriting-ready, claim-ready, score, standard, readiness certification, or regulator approval.

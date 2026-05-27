# HTML/PDF Artifact Style Gap Report

**Wave:** WP3-V1-R3AB-PUBLICATION-SYSTEM-ALIGNMENT-REPAIR-01
**Scope:** Public HTML and PDF artifacts for WP1, WP2, and WP3
**Decision:** Not blocking public route post-restoration QA; carry artifact-template parity into R3AC.

## Artifact Inventory

| Paper | HTML | PDF | PDF page count | R3AB classification |
| --- | --- | --- | --- | --- |
| WP1 GAIC | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | 485 A4 pages | Mature GAIC publication artifact with historical metadata manifests. |
| WP2 AIAAWP | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf` | 118 A4 pages | Public research candidate artifact from the WP2 publication pipeline. |
| WP3 AIIRWP | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` | 117 A4 pages | R3AB-normalized artifact shell; PDF regenerated from repaired public HTML. |

## R3AB Repairs

- Repaired WP3 public-facing HTML shell language from route-restoration process wording to public research candidate wording.
- Regenerated WP3 PDF from the repaired public HTML using the existing Chrome headless print pattern with no browser header/footer.
- Refreshed WP3 public manifest and checksum file.
- Updated shared publication data hashes for HTML, PDF, manifest, and checksum.

## Style Gap Assessment

| Dimension | WP1 | WP2 | WP3 | R3AB result |
| --- | --- | --- | --- | --- |
| Public route page | Shared R3AB page component | Shared R3AB page component | Shared R3AB page component | Aligned. |
| HTML artifact status shell | GAIC publication-shell lineage | WP2 candidate-shell lineage | R3AB shell language repaired | Accept for route QA; future template parity still useful. |
| PDF page style | A4, mature long-form publication | A4, candidate publication | A4, regenerated from R3AB-repaired HTML | Accept for route QA; visual parity should be checked in R3AC. |
| Table handling | Mature GAIC wide-table repairs | Candidate pipeline table handling | Wide-table risk tracked from R3X/R3Y | R3AC should inspect wide tables before any final seal. |
| Manifest/checksum | Public integrity files plus historical manifests | Public integrity files | Public integrity files refreshed in R3AB | Aligned enough for route QA. |

## Required Future QA

R3AC must inspect:

- whether WP3 HTML table behavior remains acceptable on desktop and mobile;
- whether WP3 PDF wide tables remain readable after R3AB regeneration;
- whether WP1/WP2/WP3 artifact shells should converge into a future shared artifact-generation template;
- whether any artifact-style repair is required before final seal or announcement preparation.

## Non-Blocking Rationale

The user's R3AB correction targets publication-system alignment across public routes and public-facing artifact framing. R3AB repairs the route/page system and normalizes the WP3 artifact shell language. Full regeneration of all WP1/WP2/WP3 long-form artifacts would be a larger artifact-style repair wave and is not required before public route post-restoration QA.

## Boundary

This report does not authorize final/sealed/release-ready status, public announcement, DOCX, certification, insurer acceptance, coverage-ready, underwriting-ready, claim-ready, score, standard, readiness certification, or regulator approval.

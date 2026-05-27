# WP3-V1-R3P Build and Validation

## Scope

Build and validation report for WP3-V1-R3P full draft integration draft.

This wave creates a new internal integrated Markdown draft package and governance/report files only. It does not edit the R3J source body in place, edit the R3M appendix source in place, create public files, generate public artifacts, update the public route, or create DOCX files.

## Commands Run

| Check | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS_WITH_EXISTING_HINTS | Astro check completed with 0 errors and two existing inline-event hints in `src/layouts/BaseLayout.astro`. |
| `npm run lint` | PASS | ESLint completed with no reported issues. |
| `npm run build` | PASS | Astro static build completed successfully. |
| `git diff --check` | PASS | No whitespace errors. |
| YAML parse | PASS | `whitepaper-series-registry.yaml` parsed successfully. |
| JSON parse | PASS | `public/entity/jearonwong-mplp-gaic-entity-graph.json` parsed successfully. |
| no-DOCX scan | PASS | No `.docx` files found under `public/research` or `dist/research`. |
| WP3 public artifact scan | PASS_WITH_CONTEXT | No tracked public WP3 artifact files exist under `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`; built `dist` route remains withdrawn/noindex and says no current HTML/PDF/manifest/checksum/DOCX artifact is promoted. |
| active v0.2 promotion regression scan | PASS_WITH_CONTEXTUAL/HISTORICAL HITS | Hits are robots disallows, rejected-version registry paths, existing withdrawn/noindex route language, historical reports, and source-boundary records. No active WP3 public artifact was restored. |
| forbidden-claim scan | PASS_WITH_CONTEXTUAL HITS | Hits for forbidden terms are negative-use or boundary-control statements. No positive public, score, standard, certification, insurer-adopted, coverage-ready, underwriting-ready, or claim-ready claim was introduced. |
| integrated draft structure scan | PASS | R3P integrated draft exists; Chapters 1-28, Appendix A-H, and Appendix I deferred note are present. |
| table ID scan | PASS | Body table headings `T-02-01` and `T-04-01` through `T-27-01` are present with no duplicate body table headings. Appendix H references body table IDs as inventory only. |
| source ref scan | PASS | Source refs `[1]` through `[62]` are present in the integrated draft. |
| public route modification scan | PASS | No public WP3 route, public artifact path, robots file, or entity graph file was modified in R3P. |
| R3M appendix source modification scan | PASS | R3M appendix source file is not modified. |
| R3J body source modification scan | PASS | R3J revised body source file is not modified. |

## Public Artifact Validation

- WP3 public route must remain withdrawn and noindex.
- No WP3 public artifact should be restored.
- No public PDF, HTML, DOCX, manifest, or checksum should be introduced.
- GAIC public artifacts should remain unaffected.
- AIAAWP public artifacts should remain unaffected.
- Pre-existing untracked `public/social/*` files must remain unstaged.

## Final Validation Result

PASS_WITH_NOTES. R3P validation confirms the new internal integrated Markdown draft package is structurally complete and remains internal-only. Notes are limited to contextual/historical v0.2 hits, negative-use forbidden-claim hits, future wide-table/layout risks, and pre-existing untracked `public/social/*` files that remain unstaged.

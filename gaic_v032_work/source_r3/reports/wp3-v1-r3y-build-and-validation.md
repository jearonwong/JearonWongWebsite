# WP3-V1-R3Y Build and Validation

## Scope

Build and validation report for WP3-V1-R3Y artifact candidate QA and repair.

This wave repairs the internal PDF candidate and updates internal manifest/checksum records. It does not create public files, public route changes, DOCX, public staging, or release package state.

## Commands Run

| Check | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS_WITH_HINTS | 0 errors; existing `src/layouts/BaseLayout.astro` hints only. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Astro build completed; 95 pages built. |
| `git diff --check` | PASS | No whitespace errors. |
| YAML parse | PASS | `whitepaper-series-registry.yaml` parsed successfully. |
| JSON parse | PASS | `public/entity/jearonwong-mplp-gaic-entity-graph.json` parsed successfully. |
| Manifest JSON parse | PASS | `artifact-manifest.json` parsed successfully after R3Y repair metadata update. |
| no-DOCX scan | PASS | No `.docx` files found under R3X candidate package or `public/research`. |
| active v0.2 promotion regression scan | PASS | Rejected v0.2 remains historical boundary context; no active promotion introduced. |
| forbidden-claim scan | PASS_WITH_CONTEXTUAL_HITS | Hits are negative-use, boundary-control, source text non-claim discipline, or future-gate language; no positive forbidden claim introduced. |
| boundary / forbidden wording scan | PASS_WITH_CONTEXTUAL_HITS | R3Y remains internal artifact candidate QA and repair only. |
| candidate source preservation scan | PASS | Front Matter, Parts I-VI, Chapters 1-28, Appendix A-H, Appendix I deferred note preserved. |
| HTML candidate structure scan | PASS | HTML preserves banner/status, source refs, table IDs, appendices, and table wrappers. |
| PDF text/page-count scan | PASS | `pdfinfo` reports 117 A4 pages; `pdftotext -layout` extracts title, Chapters 1-28, Appendix A-H, Appendix I deferred note, refs, and table IDs. |
| source refs `[1]` through `[62]` scan | PASS | All source refs present in Markdown, HTML, and repaired PDF text extraction. |
| table ID scan | PASS | `T-02-01`, `T-04-01` through `T-27-01` preserved. |
| appendix A-H scan | PASS | Present in Markdown, HTML, and repaired PDF text extraction. |
| Appendix I deferred scan | PASS | Present in Markdown, HTML, and repaired PDF text extraction. |
| rejected v0.2 exclusion scan | PASS | Not used as source truth or citation source. |
| no public route diff scan | PASS | No diff under public route files, `src/pages`, `public/robots.txt`, `public/llms.txt`, or `public/entity`. |
| no public/research artifact scan | PASS | No R3Y files under `public/research`; no WP3 public artifact directory created. |
| checksum validation | PASS | `shasum -a 256 -c sha256sums.txt` passed after PDF repair. |
| R3P no-mutation scan | PASS | R3P integrated draft has no diff. |

## PDF Repair Validation

- R3X PDF before repair contained Chrome default local `file://` footer and timestamp/page text in extraction.
- R3Y regenerated the PDF from existing internal HTML using Chrome headless `--no-pdf-header-footer`.
- Repaired PDF hash: `d9eb41fb9fc75217773b88aaf4207c69da0a26c20bdc68cc32cbc802247ddb92`.
- Updated manifest hash: `c70bbe91d83737cfb3c80a886a26da55a87d6c25cfdb482d0a4113d035de9e67`.
- Checksum validation passed.

## Final Validation Result

PASS_WITH_CONTEXTUAL_HITS.

Contextual hits are expected because R3Y candidate files and QA reports explicitly preserve non-claim boundaries. No public route change, public artifact restoration, DOCX, public staging, public CTA, public candidate status, final/sealed status, release-ready status, or public release was introduced.

# WP3-V1-R3X Build and Validation

## Scope

Build and validation report for WP3-V1-R3X internal artifact candidate creation.

This wave creates internal candidate files and governance/report files only. It does not create public files, public route changes, DOCX, public staging, or release package state.

## Commands Run

| Check | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS | 0 errors; existing `src/layouts/BaseLayout.astro` hints only. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Astro build completed. |
| `git diff --check` | PASS | No whitespace errors. |
| YAML parse | PASS | `whitepaper-series-registry.yaml` parsed successfully. |
| JSON parse | PASS | `public/entity/jearonwong-mplp-gaic-entity-graph.json` parsed successfully. |
| no-DOCX scan | PASS | No `.docx` files found under R3X candidate package or `public/research`. |
| active v0.2 promotion regression scan | PASS | Rejected v0.2 remains historical boundary context; no active promotion introduced. |
| forbidden-claim scan | PASS_WITH_CONTEXTUAL_HITS | Hits are negative-use, boundary-control, source text non-claim discipline, or future-gate language; no positive forbidden claim introduced. |
| boundary / forbidden wording scan | PASS_WITH_CONTEXTUAL_HITS | R3X remains internal artifact candidate creation only and records prohibited statuses as blocked or unauthorized. |
| candidate source preservation scan | PASS | Front Matter, Parts I-VI, Chapters 1-28, Appendix A-H, Appendix I deferred note preserved. |
| source refs `[1]` through `[62]` scan | PASS | All source refs present. |
| table ID scan | PASS | `T-02-01`, `T-04-01` through `T-27-01` preserved with no duplicate body table headings. |
| appendix A-H scan | PASS | Present. |
| Appendix I deferred scan | PASS | Present. |
| rejected v0.2 exclusion scan | PASS | Not used as source truth or citation source. |
| no public route diff scan | PASS | No diff under public route files or R3P source file. |
| no public/research artifact scan | PASS | No R3X files under `public/research`. |
| checksum validation | PASS | `shasum -a 256 -c sha256sums.txt` passed. |
| manifest JSON parse | PASS | `artifact-manifest.json` parsed successfully. |
| R3P no-mutation scan | PASS | R3P integrated draft has no diff. |

## Artifact Results

- Markdown candidate source: created.
- Internal HTML candidate: created.
- Internal PDF candidate: created; `pdfinfo` reports 117 A4 pages.
- Manifest/checksum: created and validated.
- Public route/public artifact restoration: not performed.
- DOCX: not created.

## Final Validation Result

PASS_WITH_CONTEXTUAL_HITS.

Contextual hits are expected because R3X candidate files and QA reports explicitly preserve non-claim boundaries. No public route change, public artifact restoration, DOCX, public staging, public CTA, public candidate status, final/sealed status, release-ready status, or public release was introduced.

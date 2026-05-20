# WP3-R6B Build and Validation

Scope: final validation for internal candidate artifact QA only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

## Command Results

| Command | Result | Notes |
| --- | --- | --- |
| `shasum -a 256 -c checksums.sha256` | PASS | R6 source, HTML, PDF, and manifest validate after R6B repairs. |
| `npm run typecheck` | PASS | Astro checked 56 files; 0 errors. Existing hints remain in `src/layouts/BaseLayout.astro`. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Static build completed; 92 pages built. |
| `git diff --check` | PASS | No whitespace errors. |

## Artifact Validation

| Check | Result | Notes |
| --- | --- | --- |
| Internal HTML exists | PASS | `wp3_r6_candidate_artifacts/out/AIIRWP-2026-v0.1-R6-CANDIDATE.html` |
| Internal PDF exists | PASS | `wp3_r6_candidate_artifacts/out/AIIRWP-2026-v0.1-R6-CANDIDATE.pdf` |
| PDF metadata | PASS | Title, author, subject, keywords, creator, and producer are set. |
| PDF page count | PASS | `pdfinfo` reports 59 A4 pages. |
| Internal manifest | PASS | `manifest.json` updated after R6B repairs. |
| Internal checksums | PASS | Checksums validate. |
| Proof images | PASS | HTML and PDF proof images generated under `wp3_r6b_final_candidate_qa/proof/`. |
| DOCX | PASS | No DOCX generated under R6/R6B artifact directories. |

## Public Surface Validation

| Surface | Result | Notes |
| --- | --- | --- |
| Public pages/routes | PASS | No AIIRWP public page or route was created. |
| Public artifacts | PASS | No public AIIRWP HTML, PDF, DOCX, manifest, checksum, or generated artifact exists. |
| `public/` paths | PASS | No AIIRWP / insurability artifact path exists under `public/`. |
| `dist/` public build output | PASS | Build output contains no AIIRWP / insurability artifact. |
| Homepage | PASS | No homepage file was modified. |
| `llms.txt` | PASS | No change. |
| Entity graph | PASS | No change. |
| Sitemap | PASS | No source sitemap file was modified. |
| Evidence Registry | PASS | No change. |
| Research index | PASS | No change. |
| Public DOCX | PASS | No public DOCX was reintroduced. |
| Public/social files | PASS | Pre-existing untracked `public/social/*` files remain untouched and unstaged. |

Build and validation result: PASS.

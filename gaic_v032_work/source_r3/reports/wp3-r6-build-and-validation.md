# WP3-R6 Build and Validation

**Task ID:** WP3-R6-CANDIDATE-ARTIFACT-GENERATION
**Date:** 2026-05-21
**Scope:** Internal candidate artifact generation validation only

## Command Results

| Command | Result | Notes |
| --- | --- | --- |
| `shasum -a 256 -c checksums.sha256` | PASS | Internal R6 source, HTML, PDF, and manifest checksums validate. |
| `npm run typecheck` | PASS | Astro checked 56 files; 0 errors, 0 warnings, 2 existing hints in `src/layouts/BaseLayout.astro`. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Static build completed; 92 pages built. |
| `git diff --check` | PASS | No whitespace errors. |

## Artifact Validation

| Artifact | Result | Notes |
| --- | --- | --- |
| Internal source | PASS | `wp3_r6_candidate_artifacts/input/AIIRWP-2026-v0.1-R6-CANDIDATE-SOURCE.md` exists. |
| Internal HTML | PASS | `wp3_r6_candidate_artifacts/out/AIIRWP-2026-v0.1-R6-CANDIDATE.html` exists. |
| Internal PDF | PASS | `wp3_r6_candidate_artifacts/out/AIIRWP-2026-v0.1-R6-CANDIDATE.pdf` exists; `pdfinfo` reports 61 A4 pages. |
| Internal manifest | PASS | `wp3_r6_candidate_artifacts/out/manifest.json` exists. |
| Internal checksums | PASS | `wp3_r6_candidate_artifacts/out/checksums.sha256` validates. |
| Proof images | PASS | HTML mobile/desktop screenshots and PDF proof renders were generated under `proof/`. |
| DOCX | PASS | No DOCX was generated. |

## Public Surface Validation

| Surface | Result | Notes |
| --- | --- | --- |
| Public pages/routes | PASS | No AIIRWP public page or route was created. |
| Public artifacts | PASS | No AIIRWP public HTML, PDF, DOCX, manifest, checksum, or generated artifact was created. |
| `public/` paths | PASS | No AIIRWP / insurability path exists under `public/`. |
| `dist/` public build output | PASS | Build output contains no AIIRWP / insurability public artifact. |
| Homepage | PASS | No homepage file was modified. |
| `llms.txt` | PASS | No change. |
| Entity graph | PASS | No change. |
| Sitemap | PASS | No source sitemap file was modified. |
| Evidence Registry | PASS | No change. |
| Research index | PASS | No change. |
| Public DOCX | PASS | No public DOCX was reintroduced. |
| Public/social files | PASS | Pre-existing untracked `public/social/*` files remain untouched and unstaged. |
| Public assets | PASS | No tracked public asset was modified by R6. |

## Validation Conclusion

PASS. WP3-R6 generated internal candidate HTML/PDF artifacts only, validated artifact checksums, passed build validation, and introduced no public route, public artifact, public staging, or public surface mutation.

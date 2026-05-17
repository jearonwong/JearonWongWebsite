# WP2-R4C Build and Validation

**Task ID:** WP2-R4C-CONTENT-AND-PUBLIC-NAMING-QA
**Date:** May 18, 2026
**Status:** PASS

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS - 0 errors; 2 existing Astro hints in `src/layouts/BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS - 90 static pages built |
| `git diff --check` | PASS after whitespace cleanup and regeneration |

## Scope Validation

| Check | Result | Notes |
|---|---|---|
| No public page created | PASS | No `src/pages` file changed. |
| No public route added | PASS | No route, sitemap, or public nav integration added. |
| No artifacts copied to `public/` | PASS | Candidate artifacts remain under internal `wp2_r4_publication_candidate/out/`. |
| No GAIC public artifacts changed | PASS | Public/sealed GAIC hashes match expected values. |
| No GAIC scores/methodology changed | PASS | No score/methodology files changed. |
| `public/social/*` untracked remain unstaged | PASS | Pre-existing untracked assets remain outside R4C scope. |
| Candidate artifacts remain internal only | PASS | HTML/PDF/DOCX exist only under internal R4 candidate package. |
| Document ID changed to AIAAWP | PASS | Manifest, source, HTML, PDF metadata, DOCX metadata updated. |
| Public-facing title does not contain WP2 | PASS | Title is `Agentic AI Auditability & Assurance White Paper 2026`. |
| Internal reports may use WP2 task shorthand | PASS | Allowed by naming policy. |

## Candidate Artifact Hashes

| Artifact | SHA256 |
|---|---:|
| Candidate HTML | `73de805c623c8edbc43f46374a4ef614e485b46d374b77b2c1cb6805a5db7a5a` |
| Candidate PDF | `74c047ef5c23e8218568958ea64bc7fab0626f4246c5a4c83a8ac9a813f99bb7` |
| Candidate DOCX | `86a8802594aae479478358f0c4624ee3bfc0e61301e7e68d0f20e3c27639ddf3` |

## GAIC Artifact Hash Validation

| Artifact | Expected hash | Actual hash | Result |
|---|---|---|---|
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Final Result

PASS - R4C build, scope, naming, artifact, checksum, and GAIC artifact integrity checks passed.

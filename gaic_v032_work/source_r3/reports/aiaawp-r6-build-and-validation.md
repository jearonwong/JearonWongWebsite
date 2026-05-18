# AIAAWP-R6 Build and Validation

**Task:** AIAAWP-R6 Publication Staging
**Date:** May 18, 2026
**Status:** PASS

## Scope

This validation covers repository publication staging only. It does not claim production live verification.

## Commands Run

| Command | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS | 0 errors. Existing `BaseLayout.astro` preload `onload/rel` hints remain non-blocking. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Astro generated 91 static pages. |
| `git diff --check` | PASS | No whitespace errors. |
| `shasum -a 256 -c checksums.sha256` in the AIAAWP public artifact directory | PASS | HTML, PDF, DOCX, and manifest validated. |

## Public Route and Build Output

| Check | Result |
|---|---|
| Public route builds | PASS: `dist/research/agentic-ai-auditability-assurance-white-paper-2026/index.html` exists. |
| Public HTML artifact copied to build output | PASS. |
| Public PDF artifact copied to build output | PASS. |
| Public DOCX artifact copied to build output | PASS. |
| Public manifest copied to build output | PASS. |
| Public checksums copied to build output | PASS. |
| Sitemap includes AIAAWP hub route | PASS. |
| Sitemap includes AIAAWP HTML artifact custom page | PASS. |
| Route contains title/document ID/artifact links | PASS. |
| Route JSON-LD parses | PASS: all 7 JSON-LD blocks in the route parse. |
| HTML artifact JSON-LD parses | PASS. |
| Entity graph JSON parses | PASS. |

## Browser Smoke Test

Local preview server:

`npm run preview -- --host 127.0.0.1 --port 4327`

Browser check:

| Check | Result |
|---|---|
| Route URL | PASS: `http://127.0.0.1:4327/research/agentic-ai-auditability-assurance-white-paper-2026/` |
| Page title | PASS: `Agentic AI Auditability & Assurance White Paper 2026 | Jearon Wong - Protocol Architect for the Agent Era` |
| Not blank | PASS: title, subtitle, document ID, status panel, and artifact actions visible. |
| Framework overlay | PASS: none observed. |
| Console errors/warnings | PASS: none returned by Browser runtime. |
| Artifact link presence | PASS: HTML, PDF, DOCX, manifest, and checksums links present. |

Mobile viewport automation note: the in-app Browser runtime did not expose a working viewport resize path in this session, and a direct Chrome CLI mobile probe timed out. Static route CSS includes the GAIC-style responsive breakpoints at `max-width: 980px` and `max-width: 640px`; R5 previously verified the inherited GAIC R3D-3 responsive/WAP rules for the AIAAWP artifact. Production mobile/desktop checks remain required in R6B live verification.

The temporary preview server was stopped after testing.

## Public Artifact Integrity

| Artifact | SHA256 |
|---|---|
| HTML | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` |
| PDF | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` |
| DOCX | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` |
| Manifest | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` |

Public checksum validation result:

| File | Result |
|---|---|
| `agentic-ai-auditability-assurance-white-paper-2026.html` | OK |
| `agentic-ai-auditability-assurance-white-paper-2026.pdf` | OK |
| `agentic-ai-auditability-assurance-white-paper-2026.docx` | OK |
| `manifest.json` | OK |

## GAIC Artifact Integrity

| Artifact | Expected SHA256 | Observed SHA256 | Result |
|---|---:|---:|---|
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

Note: the sealed GAIC candidate PDF is present in the current tree as `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.pdf`.

## Boundary and Staging Validation

| Check | Result |
|---|---|
| No GAIC public artifacts changed | PASS |
| No GAIC sealed artifacts changed | PASS |
| No GAIC scores/methodology changed | PASS |
| AIAAWP public artifacts staged in correct public path | PASS |
| No public-facing WP2 document identity | PASS |
| No production live verification claim | PASS |
| No final/sealed claim | PASS |
| No unrelated `public/social/*` files staged | PASS: existing untracked social assets remain unstaged. |

## Status

**AIAAWP-R6 BUILD AND VALIDATION PASS / DEPLOYMENT VERIFICATION REQUIRED**

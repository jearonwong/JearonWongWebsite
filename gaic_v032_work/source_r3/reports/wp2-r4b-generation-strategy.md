# WP2-R4B Generation Strategy

**Task ID:** WP2-R4B-CANDIDATE-ARTIFACT-GENERATION
**Date:** May 17, 2026
**Status:** PASS

## Decision

R4B generated all three requested internal candidate artifacts:

1. Candidate HTML: generated safely.
2. Candidate PDF: generated safely.
3. Candidate DOCX: generated safely.

## Strategy

| Item | Decision |
|---|---|
| Input source | `wp2_r4_publication_candidate/WP2-2026-R4-PUBLICATION-CANDIDATE.md` |
| Source appendices | `sources/wp2-r4-source-register.md` and `sources/wp2-r4-citation-map.md` |
| Generator | `generation/generate-wp2-r4-candidate-html.mjs` |
| Output directory | `wp2_r4_publication_candidate/out/` |
| HTML path | `out/WP2-Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.html` |
| PDF path | `out/WP2-Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.pdf` |
| DOCX path | `out/WP2-Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.docx` |

## Toolchain Used

- Node.js bundled runtime for source assembly, HTML generation, manifest update, and checksum update.
- `marked` for Markdown-to-HTML conversion where available.
- LibreOffice for HTML-to-PDF conversion.
- `pdf-lib` for PDF metadata normalization.
- LibreOffice HTML -> ODT -> DOCX bridge for DOCX generation.
- DOCX-specific landscape conversion stylesheet to keep wide tables readable.

## Risk Controls

- Generator reads only the R4 candidate source, R4 source register, and R4 citation map.
- Generator writes only under the internal WP2 R4 package.
- No GAIC WP1 generation script was modified.
- No public route, page, sitemap, navigation, or public artifact path was touched.
- Candidate artifacts include internal-only status and boundary language.
- HTML includes `noindex, nofollow` metadata and no public canonical URL.
- Checksums are generated using package-relative paths and exclude `checksums.sha256` to avoid recursive instability.
- Transient LibreOffice profile files are excluded and removed.

## Artifact Status Labels

All generated artifacts are labeled and governed as:

`internal_candidate_only`

They are not public, final, sealed, live, certification, audit standard, assurance opinion, legal compliance proof, regulator approval, procurement guidance, vendor ranking, Big Four endorsement, audit body endorsement, MPLP requirement, or external outcome claim.

## QA Approach

- Verify file existence and nonzero size.
- Verify manifest and checksums.
- Verify HTML structure, table count, noindex metadata, and no public canonical URL.
- Verify PDF metadata, page count, title/status text, source register, citation map, and extracted text.
- Verify DOCX unzip/openability, extracted text, real Word table tags, and rendered sample pages.
- Sweep generated text and package files for boundary-sensitive claims.
- Validate GAIC public/sealed artifact hashes.

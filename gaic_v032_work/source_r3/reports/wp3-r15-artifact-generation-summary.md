# WP3-R15 Artifact Generation Summary

## Result

Internal candidate artifact generation completed.

## Internal Outputs

- Candidate source: `wp3_r15_candidate_artifacts/input/AIIRWP-2026-v0.4-R15-CANDIDATE-SOURCE.md`.
- Figure asset: `wp3_r15_candidate_artifacts/assets/responsibility-bridge.svg`.
- Candidate HTML: `wp3_r15_candidate_artifacts/out/AIIRWP-2026-v0.4-R15-CANDIDATE.html`.
- Candidate PDF: `wp3_r15_candidate_artifacts/out/AIIRWP-2026-v0.4-R15-CANDIDATE.pdf`.
- Internal manifest and checksums: `wp3_r15_candidate_artifacts/out/manifest.json` and `checksums.sha256`.
- HTML/PDF/figure proof assets and artifact-level QA reports under `wp3_r15_candidate_artifacts/proof/` and `qa/`.

## Generation Notes

The candidate source preserves Chapters 0-10, Appendices A-D, numbered source-note families, scenarios, AIO/AIRM synthesis boundaries, and non-claim language from the accepted body. The Chapter 4 Mermaid source was retained only as internal figure provenance and rendered artifacts use the SVG responsibility bridge figure.

Headless Chrome wrote the internal PDF and reported a late process-exit timeout after PDF creation; R15 continued with `pdfinfo`, `pdftotext`, visual proof extraction, checksums, and PDF QA. HTML element proof screenshots were recaptured through Chrome DevTools Protocol at the required responsive targets.

## Boundary

No file was created under `public/`, no public route was changed, no public CTA was restored, and no DOCX was generated. R15 does not claim release, production verification, final/sealed status, insurer acceptance, coverage readiness, underwriting readiness, certification, legal proof, or advice.

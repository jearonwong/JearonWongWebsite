# WP3-V1-R0 Public Withdrawal QA

Decision: PASS.

## Chosen Withdrawal Behavior

R0 uses the stronger withdrawal path:

- Copy current v0.2 public artifacts into an internal rejected-candidate archive.
- Remove the current v0.2 HTML/PDF/manifest/checksum/SVG files from `public/`.
- Keep the AIIRWP route online only as a noindex under-rewrite status page.
- Remove active artifact CTAs and citation prompts for v0.2.
- Block obsolete v0.1 and v0.2 artifact paths in `robots.txt`.

Rationale: direct public artifact URLs should return 404 after deployment. This is safer than leaving rejected artifacts reachable as if they remain citable public distribution files.

## Public Artifacts Removed From Distribution

Removed from `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`:

- `AIIRWP-2026-v0.2.html`
- `AIIRWP-2026-v0.2.pdf`
- `manifest.json`
- `checksums.sha256`
- `assets/responsibility-bridge.svg`

Post-build, `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` contains only `index.html`.

## Public Route

The route at `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` now states:

- `WITHDRAWN_FOR_V1_REWRITE`
- Current public candidate withdrawn.
- WP3 v1.0 rewrite in progress.
- No current public AIIRWP HTML/PDF/manifest/checksum/DOCX artifact is promoted.
- Not final.
- Not sealed.
- Not legal advice.
- Not insurance advice.
- Not a coverage opinion.
- Not an underwriting standard.
- Not claims approval guidance.

The route has `noindex` metadata and parsed JSON-LD.

## CTA QA

The AIIRWP route no longer provides:

- Read HTML CTA for v0.2.
- Download PDF CTA for v0.2.
- View manifest CTA for v0.2.
- Verify checksums CTA for v0.2.
- Cite this paper prompt for v0.2.
- DOCX CTA.

## Archive Hashes

The withdrawn public artifacts were preserved under `gaic_v032_work/source_r3/archive/wp3-rejected-v0.2/public-artifacts/` with these SHA256 hashes:

- HTML: `5fcd9cfef51ba47c97c9901e601adb23612a4dda465265a46dea6999e001bedb`
- PDF: `1edd9b09f088b3b65ec35ff96709050dce6b5525a5c2704b5f97fc9d05090c73`
- Manifest: `55227b2f5341f017f36ad0bf201d4b05f37c8dcff8f8d380bb2bb572d73670da`
- Checksums: `ab15560bf48a7c5c3c56ca913270aec9fb635ad82fb1ce2d874ab64b65171e0c`
- SVG: `0d62a96f3bb1a92f09f7112ff661a21883c415a788aaad1653bcbd7d17a2d9df`

## Boundary

R0 does not claim the withdrawn v0.2 candidate is final, sealed, publication-quality accepted, author-release executed, externally adopted, indexed, coverage-ready, underwriting-ready, certified, endorsed, legal proof, insurance advice, legal advice, a coverage opinion, an underwriting standard, actuarial pricing guidance, or claims approval guidance.

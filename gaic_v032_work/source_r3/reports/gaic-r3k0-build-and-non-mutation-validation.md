# GAIC-R3K-0 Build and Non-Mutation Validation

**Generated:** 2026-05-14

## Command Results

- `npm run typecheck`: PASS. Astro check reported 0 errors, 0 warnings, and 2 pre-existing hints in `src/layouts/BaseLayout.astro` for inline `onload` / `rel`.
- `npm run lint`: PASS.
- `npm run build`: PASS. Astro built 89 pages.
- `git diff --check`: PASS.

## Non-Mutation Validation

- Public content page modification: PASS. `src/` and `public/` content files were not changed by R3K-0.
- Sealed white paper artifact modification: PASS. Public white paper HTML/PDF/DOCX/log/checksum hashes match sealed values.
- GAIC scoring file modification: PASS. No score source files were changed.
- Reports created: PASS. R3K-0 audit reports were created under `gaic_v032_work/source_r3/reports/`.
- Governance/status mutation: PASS. Only SOURCE MASTER, known issues, and reconstruction notes were updated to record R3K-0 audit completion; no repair completion was claimed.

## Sealed Artifact Hashes

| Artifact | SHA256 |
|---|---|
| `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | `2693eb11826e9930e7c2d0587a67d5e2aada3c5999fadce4c70e1e0d9f9cfb06` |
| `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.docx` | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` |
| `public/research/global-ai-compliance-white-paper-2026/generation-log.json` | `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e` |
| `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` | `6c2a47a42e7dfb1e6418b6c73c6c228265f18480a23e50b7cbfe66cdd1f4f1b6` |

## Result

GAIC-R3K-0 validation passed. The audit created reports and allowed governance/status notes only; no public page repair or sealed artifact mutation occurred.

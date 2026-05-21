# WP3-R7B Build and Validation

## Local Commands

| Command | Result |
| --- | --- |
| `shasum -a 256 -c checksums.sha256` in AIIRWP public artifact directory | PASS |
| `npm run typecheck` | PASS; existing BaseLayout inline `onload/rel` hints only |
| `npm run lint` | PASS |
| `npm run build` | PASS; 93 pages built |
| `git diff --check` | PASS |
| JSON parse checks for entity graph and AIIRWP manifest in `public` and `dist` | PASS |
| AIIRWP route JSON-LD parse | PASS; 7 blocks |
| DOCX scan in `public` and `dist` | PASS; no AIIRWP DOCX |
| Sitemap check | PASS; AIIRWP route and HTML artifact present, DOCX absent |

## Build Output

- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.html`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.html`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.pdf`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`
- `dist/llms.txt`
- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`

## R7B Repair Validation

- GAIC hub local build now displays AIAAWP as `02` and AIIRWP as `03` in the related white papers section.
- This is a route semantic repair only.
- GAIC/AIAAWP standalone HTML/PDF/manifest hashes remain unchanged.
- No public/social untracked files were staged.

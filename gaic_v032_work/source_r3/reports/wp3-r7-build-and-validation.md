# WP3-R7 Build and Validation

Internal only. No public release claim. No final seal. No production verification.

## Checks

- `shasum -a 256 -c checksums.sha256` in the public artifact directory: pass
- `npm run typecheck`: pass
- `npm run lint`: pass
- `npm run build`: pass
- `git diff --check`: pass
- `jq empty public/entity/jearonwong-mplp-gaic-entity-graph.json`: pass
- `jq empty public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`: pass
- `find public dist -iname '*AIIRWP*docx' -o -path '*agentic-ai-insurability-risk-transfer-white-paper-2026*/*.docx'`: no matches

## Build Output

- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.html`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.html`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.pdf`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`
- `dist/llms.txt`
- `dist/sitemap-0.xml`
- `dist/sitemap-index.xml`

## Notes

- No GAIC or AIAAWP artifact files were intentionally changed in this wave.
- No unrelated `public/social/*` file was staged.

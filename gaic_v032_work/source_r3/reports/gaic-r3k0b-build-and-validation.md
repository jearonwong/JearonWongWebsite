# GAIC-R3K-0B Build and Validation

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

## Typecheck Notes

Astro reported 0 errors. Existing `BaseLayout.astro` inline preload `onload` attributes produced two TypeScript hints already associated with Astro's parsing of inline HTML attributes; they did not fail typecheck.

## Build Notes

- Astro static build completed.
- 89 pages built.
- Sitemap generated.
- White paper hub route built.
- Responsive public HTML full-text file remains copied as public asset.

## JSON-LD Validation

Local Node parse checks:

| File | Citation meta count | JSON-LD blocks | Result |
|---|---:|---:|---|
| `dist/research/global-ai-compliance-white-paper-2026/index.html` | 8 | 6 | PASS |
| `dist/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | 8 | 5 | PASS |

## Sitemap Validation

Both URLs were present in `dist/sitemap-0.xml`:

- `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/`
- `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html`

## Checksum Validation

| Artifact | SHA256 after R3K-0B |
|---|---|
| Public responsive HTML web edition | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` |
| Public PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| Public DOCX | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` |
| Public generation log | `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e` |
| Public manifest | `ee1d9f62b309efb48312f8ef8353fee10a3482ed76b201488e46e6e3b4323c30` |
| Public seal report | `285f2eca0bdd38c0d19e761ac581dbda8fca1869ec8f9931a3ad13257c04c528` |
| Sealed candidate HTML | `0bb6d33d7fa5c2930fc4f0da449b9bce37ba5f968300bd0fd3a251bcc5c925af` |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| Sealed candidate DOCX | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` |
| Sealed candidate generation log | `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e` |

## Non-Mutation Validation

- PDF/DOCX unchanged.
- Sealed candidate artifacts unchanged.
- White paper source unchanged.
- Scores and methodology unchanged.
- R3K-1A P0 pages not repaired.
- P1/P2 pages not repaired.

## Result

PASS, with PDF metadata re-seal decision pending.


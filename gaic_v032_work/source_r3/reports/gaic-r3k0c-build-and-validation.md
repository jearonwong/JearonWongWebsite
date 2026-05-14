# GAIC-R3K-0C Build and Validation

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

## Typecheck Notes

Astro reported 0 errors. Existing `BaseLayout.astro` preload `onload` attributes continue to produce two non-blocking hints.

## Build Notes

- Astro static build completed.
- 89 pages built.
- White paper hub built with new public PDF checksum and re-seal manifest link.
- Sitemap generated.

## Hub JSON-LD Validation

Local Node parse on `dist/research/global-ai-compliance-white-paper-2026/index.html`:

- JSON-LD blocks: 6
- Parse result: PASS
- New PDF hash present: PASS
- Public PDF metadata re-seal manifest link present: PASS

## Artifact Integrity

| Artifact | SHA256 |
|---|---|
| Public metadata-hardened PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| Public DOCX | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` |
| Sealed candidate DOCX | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` |
| Public responsive HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` |
| Sealed candidate HTML | `0bb6d33d7fa5c2930fc4f0da449b9bce37ba5f968300bd0fd3a251bcc5c925af` |

## Scope Validation

- Public PDF metadata updated.
- Public PDF checksum updated.
- Public PDF metadata re-seal manifest created.
- White paper hub updated only for checksum/manifest/integrity consistency.
- No responsive public HTML mutation.
- No DOCX mutation.
- No sealed candidate artifact mutation.
- No white paper source mutation.
- No scores or methodology mutation.
- No P0/P1/P2 public page repair included.

## Result

PASS.


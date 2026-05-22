# WP3-R15B Manifest / Checksum / No-DOCX Final QA

## Decision

PASS.

The R15 internal manifest parses as JSON, the R15 checksum file validates, and no DOCX artifact exists in R15/R15B outputs. A filename-only false positive appears for `qa/no-docx-qa.md`; this is a QA report name, not a DOCX artifact or public DOCX reference.

## Checksum Validation

`shasum -a 256 -c checksums.sha256` passed for:

- `../input/AIIRWP-2026-v0.4-R15-CANDIDATE-SOURCE.md`
- `AIIRWP-2026-v0.4-R15-CANDIDATE.html`
- `AIIRWP-2026-v0.4-R15-CANDIDATE.pdf`
- `../assets/responsibility-bridge.svg`
- `manifest.json`

## Manifest Checks

| Field / Rule | Result |
| --- | --- |
| Manifest JSON parse | PASS |
| Source hash valid | PASS |
| HTML hash valid | PASS |
| PDF hash valid | PASS |
| Figure asset hash valid | PASS |
| Manifest hash valid | PASS |
| Manifest says internal candidate only | PASS |
| Manifest says no public route/artifact | PASS |
| Manifest says no DOCX | PASS |
| Manifest avoids final/seal claim | PASS |
| Manifest avoids production verification claim | PASS |
| Manifest avoids insurer acceptance / coverage-ready / underwriting-ready claims | PASS |

## No-DOCX Checks

| Scan | Result |
| --- | --- |
| DOCX file scan in R15/R15B outputs | PASS, no DOCX artifact found |
| `.docx` / DOCX MIME scan in R15 output/input/assets | PASS |
| Public DOCX references from R15B work | PASS, none introduced |
| False positives | `qa/no-docx-qa.md` filename only |


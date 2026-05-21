# WP3-R7B Production Artifact Integrity

Downloaded production AIIRWP HTML, PDF, manifest, and checksums were hashed and checked against the R7 expected staged hashes.

## SHA-256 Results

| Artifact | Production SHA-256 | Expected | Result |
| --- | --- | --- | --- |
| HTML | `7af4b31b551a0e469548529d6b5d1c253e7ec738f8f13fc109d6f1b506c65777` | `7af4b31b551a0e469548529d6b5d1c253e7ec738f8f13fc109d6f1b506c65777` | PASS |
| PDF | `742d97a7cbbd2d69ec35a1988ae39ca80ff29f60a2df1e46bf33680c14e3ceaf` | `742d97a7cbbd2d69ec35a1988ae39ca80ff29f60a2df1e46bf33680c14e3ceaf` | PASS |
| Manifest | `aa0e690184c7dd136d471fe7f3b29a890c5bb4ba5732ce3cd0c0734784661893` | `aa0e690184c7dd136d471fe7f3b29a890c5bb4ba5732ce3cd0c0734784661893` | PASS |
| Checksums file | `550f14c7425332ca67dc63c162304b886960d34f32120327def9821a0df0a790` | informational | PASS |

## Checksum Validation

`shasum -a 256 -c checksums.sha256` against downloaded production AIIRWP artifacts:

```text
AIIRWP-2026-v0.1.html: OK
AIIRWP-2026-v0.1.pdf: OK
manifest.json: OK
```

## DOCX Offboarding

- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.docx` returned `404`.
- Local `public` and `dist` checks found no AIIRWP `.docx` file.

## PDF Metadata / Layout Facts

`pdfinfo` on the downloaded production PDF:

| Field | Result |
| --- | --- |
| Title | `Agentic AI Insurability & Risk Transfer White Paper 2026` |
| Author | `Jearon Wong` |
| Subject | `A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer` |
| Creator | `AIIRWP R7 public staging normalization using GAIC/AIAAWP publication standard patterns` |
| Producer | `Chrome headless print-to-pdf without default header/footer; PyPDF2 metadata pass` |
| Pages | `59` |
| Page size | `594.96 x 841.92 pts (A4)` |
| JavaScript | `no` |
| Encrypted | `no` |

`pdftotext` sample extraction confirmed title, status, boundary statement, TOC, source/citation text, and no Chrome default local file URL/date/header/footer.

# WP3-R6B Cross-Artifact and Manifest QA

Scope: cross-artifact parity, manifest, and checksum QA for internal HTML/PDF candidate artifacts only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

## Manifest Facts

| Field | Value |
| --- | --- |
| Candidate ID | `AIIRWP-2026-v0.1-R6-CANDIDATE` |
| Artifact status | `internal_candidate_artifacts` |
| Source SHA-256 | `a7b19cb39e0dfe69d423fd250cbdb3eead6eedea6a6802a34125b9869abc9bd7` |
| HTML SHA-256 | `311b1ded83a2b1f6ba5a8b415499f22533748bcf136bbca23c9e563edf85d733` |
| PDF SHA-256 | `651753f529a18629feb8d588b2b4f16a1b6d35a9e4024910672980ff26a06b7b` |
| PDF page count | 59 |
| Table stats | 25 total, 24 matrix-like, 1 registry-card/source-register section |
| Public route | None |
| Public artifact | None |
| Public DOCX | None |

## Checksum Validation

Command:

```sh
cd gaic_v032_work/source_r3/wp3_r6_candidate_artifacts/out
shasum -a 256 -c checksums.sha256
```

Result:

```text
../input/AIIRWP-2026-v0.1-R6-CANDIDATE-SOURCE.md: OK
AIIRWP-2026-v0.1-R6-CANDIDATE.html: OK
AIIRWP-2026-v0.1-R6-CANDIDATE.pdf: OK
manifest.json: OK
```

## Cross-Artifact Checks

| Check | Result |
| --- | --- |
| HTML hash matches manifest/checksum | PASS |
| PDF hash matches manifest/checksum | PASS |
| Source hash matches manifest/checksum | PASS |
| Page count matches pdfinfo | PASS, 59 pages |
| Candidate ID consistent across source/HTML/PDF/manifest | PASS |
| No DOCX appears | PASS |
| No public artifact path appears | PASS |
| No public route claimed | PASS |
| No public checksum/manifest claimed | PASS |
| No sitemap/entity/llms mapping claimed | PASS |

## R6B Manifest Repair Record

R6B changed the internal artifacts and therefore updated `manifest.json` and `checksums.sha256`. The manifest records:

- Appendix F AIRM readiness matrix repair.
- PDF regeneration without Chrome default file URL/date/page header/footer.
- Print footer shortening to prevent clipping.
- Literal legacy A2A URL removal from rendered source-note hygiene text.
- Page count change from 61 to 59.
- No substantive content change.

Cross-artifact and manifest QA result: PASS.

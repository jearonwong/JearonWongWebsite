# WHITEPAPER-R8F Production Artifact Integrity QA

Date: 2026-05-20

Production artifacts were downloaded to `/tmp/whitepaper-r8f-live/` and hashed with SHA256.

## Expected vs Observed Hashes

| Artifact | Expected | Observed | Result |
| --- | --- | --- | --- |
| GAIC HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | PASS |
| GAIC PDF | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` | PASS |
| AIAAWP HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | PASS |
| AIAAWP PDF | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` | PASS |

## Checksum Validation

- GAIC local post-repair `checksums.sha256`: PASS.
- AIAAWP local post-repair `checksums.sha256`: PASS.
- GAIC HTML/PDF artifacts were not regenerated.
- AIAAWP HTML/PDF artifacts were not regenerated.

## Manifest Notes

- AIAAWP production `manifest.json` was available and parsed.
- GAIC production lacked `/manifest.json` before repair; R8F adds a current GAIC public manifest while preserving the historical `publication-candidate-manifest.json` and `public-pdf-metadata-reseal-manifest.json`.

## Result

PASS. Artifact hashes match the expected R8E-2/R8E-3 facts. Manifest surface repair is bounded metadata wiring and does not mutate PDF/HTML artifacts.

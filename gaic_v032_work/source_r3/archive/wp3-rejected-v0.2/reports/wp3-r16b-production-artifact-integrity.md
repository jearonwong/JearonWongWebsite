# WP3-R16B Production Artifact Integrity QA

Decision: PASS_WITH_NOTES.

R16B is production reverification only. It does not claim author release execution, public announcement, external adoption, indexing outcome, SEO/GEO uplift, answer-engine recognition, or Final Seal. No DOCX is introduced.

Live AIIRWP artifact hashes after production deployment:

| Artifact | Live status | Live SHA-256 | Repo/staged expected | Result |
| --- | ---: | --- | --- | --- |
| `AIIRWP-2026-v0.2.html` | 200 | `5fcd9cfef51ba47c97c9901e601adb23612a4dda465265a46dea6999e001bedb` | `5fcd9cfef51ba47c97c9901e601adb23612a4dda465265a46dea6999e001bedb` | PASS |
| `AIIRWP-2026-v0.2.pdf` | 200 | `1edd9b09f088b3b65ec35ff96709050dce6b5525a5c2704b5f97fc9d05090c73` | `1edd9b09f088b3b65ec35ff96709050dce6b5525a5c2704b5f97fc9d05090c73` | PASS |
| `assets/responsibility-bridge.svg` | 200 | `0d62a96f3bb1a92f09f7112ff661a21883c415a788aaad1653bcbd7d17a2d9df` | `0d62a96f3bb1a92f09f7112ff661a21883c415a788aaad1653bcbd7d17a2d9df` | PASS |
| `manifest.json` | 200 | `55227b2f5341f017f36ad0bf201d4b05f37c8dcff8f8d380bb2bb572d73670da` | `55227b2f5341f017f36ad0bf201d4b05f37c8dcff8f8d380bb2bb572d73670da` | PASS |
| `checksums.sha256` | 200 | `ab15560bf48a7c5c3c56ca913270aec9fb635ad82fb1ce2d874ab64b65171e0c` | repo checksum file hash | PASS |

Manifest checks:

- Live manifest parses as JSON.
- Live manifest matches repo manifest contents.
- Public document ID: `AIIRWP-2026-v0.2-PUBLIC-CANDIDATE`.
- Status: `public research candidate`.
- Manifest states no DOCX.
- Manifest states not final, not sealed, not legal advice, not insurance advice, not coverage opinion, not underwriting standard, not claims approval guidance, not insurer acceptance, not coverage-ready, not underwriting-ready, not certification, and not endorsement.

Note:

- R16B found a machine-readable production gap in `llms.txt`: the AIIRWP route was present, but the direct HTML/PDF/manifest/checksum links were absent. That was a verified production blocker and was repaired with a minimal `public/llms.txt` commit before final acceptance. Artifact contents and hashes did not change.

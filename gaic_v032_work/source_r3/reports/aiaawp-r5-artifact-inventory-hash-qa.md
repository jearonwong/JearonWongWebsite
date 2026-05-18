# AIAAWP-R5 Artifact Inventory And Hash QA

**Status:** PASS

## Inventory

| Required item | Path | Result |
|---|---|---|
| Candidate Markdown | `wp2_r4_publication_candidate/AIAAWP-2026-v0.1-R4-CANDIDATE.md` | PASS |
| HTML candidate | `out/Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.html` | PASS |
| PDF candidate | `out/Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.pdf` | PASS |
| DOCX candidate | `out/Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.docx` | PASS |
| Manifest | `manifest.json` | PASS |
| Checksums | `checksums.sha256` | PASS |
| Metadata plan | `metadata/wp2-r4-metadata-plan.md` | PASS |
| JSON-LD plan | `metadata/wp2-r4-jsonld-plan.json` | PASS |
| Source register | `sources/wp2-r4-source-register.md` | PASS |
| Citation map | `sources/wp2-r4-citation-map.md` | PASS |
| Generation log | `out/aiaawp-r4d-generation-log.json` | PASS |
| QA reports | R4D and R5 report set | PASS |

## Hash Verification

`shasum -a 256 -c checksums.sha256` returned OK for all listed package files, R4D QA reports, R5 final candidate QA reports, and committed R5 PDF proof sample images.

Current generated artifact hashes:

| Artifact | SHA256 |
|---|---|
| HTML | `74d0256280dcf9f6805594520a52536f3a1821af39afa267c743c013bee2a5a4` |
| PDF | `df9ea5759e2e499ee1e2e9e682484956dbf9c567d81052b5afe4ef96727c2e17` |
| DOCX | `d7495424872f5013d754bc4974ddddaf6dbe907fc3303970f65c78701d6b0590` |

## Boundary

- All generated artifacts remain under the internal package `gaic_v032_work/source_r3/wp2_r4_publication_candidate/out/`.
- No artifact was copied to `public/`.
- No public route, sitemap entry, or public canonical URL exists for AIAAWP.

# Artifact Repair Change Log

## Candidate Files Repaired or Regenerated

| File | Change |
|---|---|
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.pdf` | Regenerated from existing internal HTML candidate using Chrome headless no-pdf-header-footer print option. Removed Chrome default local file URL/date/page header-footer text. |
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/artifact-manifest.json` | Updated with R3Y repair metadata and repaired PDF checksum. |
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/sha256sums.txt` | Regenerated hashes for repaired PDF and updated manifest. |

## Candidate Files Confirmed Unchanged

| File | Result |
|---|---|
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-publication-candidate-source.md` | Confirmed unchanged; QA passed. |
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.html` | Confirmed unchanged; QA passed and served as PDF regeneration source. |

## Manifest/Checksum Regeneration

Manifest and checksum records were regenerated after PDF repair. `shasum -a 256 -c sha256sums.txt` passes.

## Deferred Risks

- Wide-table visual QA remains a future gate before public route restoration execution.
- Source gaps remain strengthening opportunities: exact exclusion / sublimit primary wording, insurer claim documentation, and AI underwriting questionnaires.
- R3Y does not publish, restore public route, create public staging, create DOCX, claim final/sealed/release-ready status, or claim public release.


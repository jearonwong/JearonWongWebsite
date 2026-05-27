# Public Artifact Placement Plan

## Placement Rule

R3AA should copy only R3Y-accepted internal candidates into the existing WP3 public artifact directory if public route restoration execution is authorized. R3Z does not copy any file.

## Future Public Directory

`public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`

This directory currently exists and is empty.

## Planned Artifact Placement

| Artifact | Internal Source Path | Future Public Path | Public Visibility | Notes |
|---|---|---|---|---|
| HTML candidate | `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.html` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html` | Public readable HTML | Rename from internal candidate filename to route slug filename. |
| PDF candidate | `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.pdf` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` | Public downloadable PDF | 117-page A4 repaired internal candidate; downloadable from route. |
| Artifact manifest | `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/artifact-manifest.json` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json` | Public integrity metadata | Should be regenerated for public paths/status before publish. |
| Checksum file | `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/sha256sums.txt` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256` | Public checksum verification | Should be regenerated for public paths/status before publish. |
| Source Markdown | `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-publication-candidate-source.md` | Optional only; no default public path | Not public by default | Publish only if owner separately authorizes source Markdown distribution. |
| DOCX | none | none | Prohibited | No DOCX is authorized. |

## Filename Conventions

- Use lowercase route slug filenames for public web artifacts.
- Avoid `final`, `sealed`, `release-ready`, or `certified` in filenames.
- Public artifact filenames should not include internal wave IDs.
- Keep internal candidate filenames unchanged in source workspace.

## PDF Download Policy

The PDF path should be directly downloadable at `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` if R3AA executes route restoration.

## Manifest/Checksum Public Policy

Manifest and checksum should be publicly visible if route restoration executes, because WP1/WP2 already expose public integrity artifacts. The public manifest must state public candidate/research status carefully and must not claim final/sealed/release-ready/public release beyond authorized route restoration state.

## No DOCX

No DOCX should be copied, generated, linked, or referenced as available.

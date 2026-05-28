# Public Artifact Integrity QA Report

## Expected Public Files

Public directory:

`public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`

Files present:

- `agentic-ai-insurability-risk-transfer-white-paper-2026.html`
- `agentic-ai-insurability-risk-transfer-white-paper-2026.pdf`
- `manifest.json`
- `checksums.sha256`

No public DOCX, DOC, or Markdown file is present in the WP3 public artifact directory.

## Manifest

`manifest.json` parses and records:

- `wave_id`: `WP3-V1-R3AC-HTML-PDF-RENDERING-PARITY-FORENSICS-AND-REPAIR`
- `public_status`: `public-research-candidate`
- `route_status`: `public-route-active`
- `no_docx_status`: `public DOCX unauthorized`
- `rejected_v0_2_exclusion`: `true`
- `source_refs_range`: `[1]-[62]`
- PDF artifact page count: `138`

Manifest paths match actual public files.

## Checksums

`shasum -a 256 -c public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`: PASS.

## Verdict

Public artifact integrity QA passes. No artifact regeneration was needed in R3AD.

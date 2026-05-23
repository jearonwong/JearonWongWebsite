# WP3-R16 Public Artifact Staging

Status: PASS.

R16 staged the accepted AIIRWP candidate into the public research directory with public-facing artifact names. This is public staging preparation only, not production verification, public release execution, or Final Seal.

Source basis:

- HTML source: `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/out/AIIRWP-2026-v0.4-R15C-CANDIDATE.html`
- Figure source: `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/assets/responsibility-bridge.svg`
- Artifact acceptance basis: R12 accepted body + R13 body acceptance + R15D artifact acceptance.

Staged public files:

- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.html`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.pdf`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/assets/responsibility-bridge.svg`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`

Public-facing transformations:

- Public document ID set to `AIIRWP-2026-v0.2-PUBLIC-CANDIDATE`.
- Visible artifact body uses public research candidate language.
- Visible public artifact body does not expose R15C/R15D wave IDs or internal-candidate status.
- Public HTML/PDF preserve title, subtitle, Chapters 0-10, Appendices A-D, 12 source-note families, Chapter 4 rendered figure, AIO/AIRM synthesis framing, and boundary/non-claim language.
- Public PDF regenerated from public HTML with public metadata; it was not copied with internal candidate metadata.
- Old active public v0.1 HTML/PDF artifacts were removed from the public directory and remain blocked by robots as obsolete historical paths.

Hashes:

- HTML: `5fcd9cfef51ba47c97c9901e601adb23612a4dda465265a46dea6999e001bedb`
- PDF: `1edd9b09f088b3b65ec35ff96709050dce6b5525a5c2704b5f97fc9d05090c73`
- Figure SVG: `0d62a96f3bb1a92f09f7112ff661a21883c415a788aaad1653bcbd7d17a2d9df`
- Manifest: `55227b2f5341f017f36ad0bf201d4b05f37c8dcff8f8d380bb2bb572d73670da`

No-DOCX confirmation:

- No `.docx` file was created under `public/research`.
- No DOCX CTA was added.
- Manifest states HTML/PDF-only public distribution.

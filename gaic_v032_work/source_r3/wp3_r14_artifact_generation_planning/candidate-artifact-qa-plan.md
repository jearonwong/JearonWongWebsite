# Candidate Artifact QA Plan

## R15 / R15B Split

- R15 creates internal candidate HTML/PDF and internal manifest/checksums.
- R15B performs final candidate artifact QA before any public staging preparation.

## R15 QA Areas

- HTML visual / responsive.
- PDF A4 / page layout.
- Cover / TOC / chapter starts.
- Source notes / endnotes.
- Figure rendering.
- Table layout.
- Body-to-artifact parity.
- Citation rendering.
- Boundary rendering.
- Manifest/checksum validation.
- No DOCX.
- No public staging.
- No public CTA restoration.

## R15B Acceptance Options

1. `ACCEPTED_FOR_PUBLICATION_STAGING_PREPARATION`
2. `ACCEPTED_WITH_NOTES_FOR_PUBLICATION_STAGING_PREPARATION`
3. `NOT_ACCEPTED_REQUIRES_ARTIFACT_REPAIR`

## R15B Hard Fail Conditions

- Raw Mermaid appears in HTML/PDF.
- Any high-comparison table becomes unreadable.
- Body text diverges from accepted R12 semantics.
- Source notes are broken or unreadable.
- Public artifact paths are generated.
- DOCX is generated.
- Boundary language overclaims publication, coverage, acceptance, certification, legal proof, or claim outcome.

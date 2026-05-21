# Manifest / Checksum Plan

## R15 Internal Candidate Manifest

R15 should generate internal candidate integrity records only.

Required fields:

- Source markdown path.
- Source markdown SHA256.
- Internal HTML path.
- Internal HTML SHA256.
- Internal PDF path.
- Internal PDF SHA256.
- Rendered figure asset path and SHA256 if created.
- Generated timestamp.
- Generator/script identity.
- Body source version.
- Candidate artifact status.
- No public route status.
- No public artifact status.
- No DOCX status.
- No final/seal status.

## R15 Internal Checksums

R15 should produce an internal `checksums.sha256` for generated internal candidate files only.

## Later Public Staging

Public manifest/checksum files should be created only after public staging authorization. They must match staged public files, state no public DOCX, and avoid final/seal/insurer acceptance language.

## QA

- Hash every generated internal candidate file.
- Validate manifest paths are relative or repo-safe.
- Verify no public artifact path is listed during R15.
- Verify no DOCX entry exists.

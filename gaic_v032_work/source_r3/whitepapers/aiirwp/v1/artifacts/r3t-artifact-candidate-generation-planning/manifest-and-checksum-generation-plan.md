# Manifest and Checksum Generation Plan

## Purpose

Plan future manifest/checksum generation without creating either.

## Planned Manifest Fields

If a future generation wave is separately authorized, the manifest should include:

- source file path;
- generated artifact paths;
- generation timestamp;
- version/wave identifier;
- public/private status;
- non-claim status note;
- SHA-256 checksum entries;
- route status;
- no-DOCX status;
- rejected-v0.2 exclusion note;
- source refs continuity note;
- boundary QA reference;
- artifact QA reference.

## Integrity Boundary

Integrity records are not release certification. A checksum confirms file integrity only; it does not imply final/sealed status, public candidate status, release-ready status, public release, insurer acceptance, certification, standard status, or artifact-readiness proof.

## R3T Boundary

No manifest is created in R3T.

No checksum is created in R3T.

No manifest/checksum path is staged, published, or linked.

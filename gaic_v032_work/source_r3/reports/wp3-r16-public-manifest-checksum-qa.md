# WP3-R16 Public Manifest and Checksum QA

Status: PASS.

R16 is public staging preparation only. The public manifest/checksum package does not claim production verification, public release execution, Final Seal, author release execution, insurer acceptance, coverage-ready status, underwriting-ready status, certification, legal proof, legal advice, insurance advice, coverage opinion, underwriting standard, actuarial pricing guidance, or claims approval guidance.

Validation:

- `shasum -a 256 -c checksums.sha256`: PASS.
- `manifest.json` parse: PASS.
- Manifest status: `public research candidate`.
- Public document ID: `AIIRWP-2026-v0.2-PUBLIC-CANDIDATE`.
- Page count recorded: 27.
- Source basis recorded: R12 accepted body + R13 body acceptance + R15D artifact acceptance.
- Manifest includes no-DOCX, not-final, not-sealed, not-production-verified, not-public-release-execution, not-legal-advice, not-insurance-advice, not-coverage-opinion, not-underwriting-standard, not-claims-approval-guidance, not-insurer-acceptance, not-coverage-ready, not-underwriting-ready, not-certification, and not-endorsement flags.

Checksum output:

```text
AIIRWP-2026-v0.2.html: OK
AIIRWP-2026-v0.2.pdf: OK
assets/responsibility-bridge.svg: OK
manifest.json: OK
```


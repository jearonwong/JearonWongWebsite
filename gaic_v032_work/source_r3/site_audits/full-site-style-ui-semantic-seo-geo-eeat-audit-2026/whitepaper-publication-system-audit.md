# Whitepaper Publication System Audit

## Current Public Research Editions

| Paper | Route | HTML | PDF | Manifest | Checksum | Page count |
| --- | --- | --- | --- | --- | --- | --- |
| Global AI Compliance White Paper 2026 | `/research/global-ai-compliance-white-paper-2026/` | PASS | PASS | PASS | PASS | 485 |
| Agentic AI Auditability & Assurance White Paper 2026 | `/research/agentic-ai-auditability-assurance-white-paper-2026/` | PASS | PASS | PASS | PASS | 118 |
| Agentic AI Insurability & Risk Transfer White Paper 2026 | `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` | PASS | PASS | PASS | PASS | 138 |

## Integrity Results

- Manifest JSON parses for all three papers.
- Checksum validation passes for all three artifact sets when run from repo root.
- PDF metadata/page size:
  - All three are A4.
  - All three use `Whitepaper A4 PDF Print Profile renderer`.
  - All three use `Headless Chrome whitepaper A4 PDF Print Profile; PyPDF2 metadata pass`.

## Publication Page Consistency

PASS:

- Shared component/data pattern.
- Shared hero grammar.
- Shared status panel grammar.
- CTA order: Read HTML, Download PDF, View Manifest, Verify Checksums, Cite this paper.
- Artifact access block.
- Citation/identity block.
- Manifest/checksum integrity block.
- Boundary/non-claim block.
- Related research block.
- No public DOCX.

## Artifact Consistency

PASS with notes:

- PDF profile is consistent across all three.
- HTML artifact style is acceptable and broadly aligned.
- Third whitepaper artifact has repaired terminology and R8-style parity.

P1 note:

- Third whitepaper HTML artifact lacks canonical/JSON-LD parity with first and second artifacts.

P2 note:

- GAIC artifact retains multiple H1 elements and historical publication-candidate records. This is not a publication blocker, but it should be cleaned or contextualized in a future artifact metadata/hierarchy wave.

## Public Terminology

- No public-facing `WP1`, `WP2`, `WP3`, `R3AA`, `R3AF`, `R3AG`, or `R8` hits were found in the scanned current `src`, `public`, and `dist` surfaces, excluding internal governance.
- Remaining `publication candidate` hits are historical first-whitepaper integrity records, rejected AIIRWP v0.2 notes, or ordinary prose uses of "candidate" as a noun.

## Publication Verdict

No whitepaper publication blocker found.

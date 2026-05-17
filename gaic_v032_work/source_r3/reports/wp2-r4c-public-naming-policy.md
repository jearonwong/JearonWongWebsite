# WP2-R4C Public Naming Policy

**Status:** ACTIVE FOR R4C

## Internal Shorthand Allowed

`WP2`, `WP2-R4C`, `wp2_r4_publication_candidate/`, internal task IDs, internal reports, SOURCE MASTER status lines, and governance notes may continue to use WP2 as repository shorthand.

## Public-Facing Forbidden

The following must not identify the white paper in public-facing candidate artifact content:

- WP2 as document title or artifact title
- WP2 as HTML `<title>`
- WP2 as visible document ID / trace tag
- `WP2-2026-R4-PUBLICATION-CANDIDATE` as visible document ID
- WP2 as PDF metadata title, subject, or artifact identity keyword
- WP2 as DOCX core title or subject
- WP2 in future public filenames

## Public-Facing Required

| Field | Required value |
|---|---|
| Title | Agentic AI Auditability & Assurance White Paper 2026 |
| Subtitle | A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance |
| Document ID | `AIAAWP-2026-v0.1-R4-CANDIDATE` |
| Status | Internal publication candidate artifact; not public; not final; not sealed |
| Series relation | A core white paper in the Agentic Lifecycle Governance Industry Series |

## Patch Plan Applied

- Candidate Markdown source renamed and visible status block changed to AIAAWP document ID.
- HTML title/status block regenerated with AIAAWP document ID.
- PDF metadata regenerated with public title, subtitle, author, and neutral keywords.
- DOCX core metadata patched with public title, subtitle, author, description, and keywords.
- Manifest document ID, artifact paths, and checksums updated.
- Metadata plan and JSON-LD plan updated from trace tag to document ID.
- Source register and citation map headings publicized to AIAAWP.
- Future public filenames now omit internal WP2 shorthand.

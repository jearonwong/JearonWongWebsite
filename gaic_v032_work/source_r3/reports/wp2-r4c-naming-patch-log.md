# WP2-R4C Naming Patch Log

**Status:** COMPLETE

| File | Old wording / identity | New wording / identity | Reason | Classification |
|---|---|---|---|---|
| `WP2-2026-R4-PUBLICATION-CANDIDATE.md` | Filename used public-facing WP2 trace | `AIAAWP-2026-v0.1-R4-CANDIDATE.md` | Public artifact identity must not be WP2 | Public-facing candidate source |
| Candidate source status block | `WP2-2026-R4-PUBLICATION-CANDIDATE` trace tag | `AIAAWP-2026-v0.1-R4-CANDIDATE` document ID | Required public-facing document ID | Visible artifact content |
| Candidate source body | Repeated `WP2` as paper name | `this paper`, `this framework`, `Agentic AI Auditability & Assurance White Paper 2026`, or series-specific names | Avoid public artifact naming the paper WP2 | Visible artifact content |
| Source register | `WP2-R4 Source Register`, `endorsement of WP2`, `WP2 is not...` | `AIAAWP R4 Source Register`, `endorsement of this paper`, `This paper is not...` | Source register is included in generated artifacts | Visible artifact appendix/source section |
| Citation map | `WP2-R4 Citation Map`, `WP2 author synthesis` | `AIAAWP R4 Citation Map`, `author synthesis in this paper` | Citation map is included in generated artifacts | Visible artifact appendix/source section |
| Metadata plan / JSON-LD plan | `WP2-2026-R4-PUBLICATION-CANDIDATE` trace tag | `AIAAWP-2026-v0.1-R4-CANDIDATE` document ID | Future public metadata should use AIAAWP identity | Metadata planning |
| Generator | `WP2-Agentic...` output filenames and visible trace tag | `Agentic-AI-Auditability...` filenames and AIAAWP document ID | Future/public-facing filenames must omit WP2 | Generation tooling |
| PDF metadata | R4B candidate metadata tied to old trace context | Public title/subtitle/author/keywords, PyPDF2 fallback | PDF metadata must not expose WP2 identity | Artifact metadata |
| DOCX metadata | LibreOffice-generated metadata | Public title/subtitle/author/description/keywords via core.xml patch | DOCX metadata must not expose WP2 identity | Artifact metadata |
| Manifest/checksums | Old WP2 file/artifact paths and hashes | AIAAWP source path, WP2-free artifact paths, new hashes | Package integrity must match regenerated artifacts | Package records |

## Internal Shorthand Preserved

Internal report filenames, package path `wp2_r4_publication_candidate/`, task IDs, SOURCE MASTER status lines, and governance notes may continue to use WP2 shorthand.

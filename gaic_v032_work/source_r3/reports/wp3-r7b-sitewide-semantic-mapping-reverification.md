# WP3-R7B Sitewide Semantic Mapping Reverification

Live production surfaces were checked for AIIRWP presence, safe relationship language, route/artifact links, and no DOCX/forbidden positive claims.

| Surface | Production Result |
| --- | --- |
| Homepage | PASS: trilogy stack visible with GAIC `01 / Foundation`, AIAAWP `02 / Auditability & Assurance`, AIIRWP `03 / Insurability & Risk Transfer`; no WP4 public card. |
| Research index | PASS: AIIRWP present with route, HTML, PDF, 03 / Insurability & Risk Transfer, and no DOCX. |
| GAIC hub | R7B repaired local route display so related white papers use series positions `02` and `03` instead of local `01`/`02`; production pre-repair text was otherwise boundary-safe. Deployment must carry this repair. |
| AIAAWP hub | PASS: AIIRWP present as `03` adjacent risk-transfer interpretation; no claim auditability equals insurability. |
| Evidence Registry | PASS: AIIRWP hub, HTML, PDF, manifest, and checksums are present; no DOCX. |
| Concepts Map | PASS: AIIRWP relationships visible; AIO/AIRM synthesis language preserved. |
| Definitions | PASS: Agentic AI Insurability, AIO, AIRM, Insured Legal Subject, Agentic Risk Object, and Claim Evidence Chain are present and boundary-safe. |
| Governance | PASS: AIIRWP appears as governance interpretation/reference, not insurance rule. |
| Playbooks | PASS: AIIRWP appears as research/reference input, not underwriting guide. |
| About / Entity Authority | PASS: AIIRWP authored by Jearon Wong; no adoption/endorsement claim. |
| MPLP project page | PASS: AIIRWP relation is restrained; MPLP is optional lifecycle evidence path, not required insurance claim. |
| Extended Ecosystem Mapping | PASS: AIIRWP mapped as insurability layer; not vendor ranking or procurement guidance. |

## R7B Repair

Changed `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` so GAIC hub related white papers display their actual series positions:

- AIAAWP: `02`
- AIIRWP: `03`

This is a public route semantic repair only. It does not alter standalone GAIC/AIAAWP/AIIRWP public HTML artifacts, PDFs, manifests, or checksums.

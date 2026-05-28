# WP1/WP2/WP3 HTML Style Forensics

| Dimension | WP1 GAIC | WP2 AIAAWP | WP3 before R3AC | WP3 after R3AC |
|---|---|---|---|---|
| Body background | Professional dark/evidence shell lineage | Professional shell | Intermediate R3AB shell, not fully tied to WP2 grammar | WP2 CSS grammar reused |
| Artifact shell | `professional-shell` lineage | `cover-page professional-shell` | Partial | Aligned |
| Cover/title block | Dense GAIC cover with series identity | Candidate cover with six-field meta | Similar but not canonical | WP2-like cover, six-field meta, five-lane thesis strip |
| Status/boundary block | Important notice | Important notice | Present | Aligned important notice and cover notice |
| Table of contents | Generated TOC | `nav.generated-toc` | Present | `nav.generated-toc` with publication contents |
| Heading hierarchy | Long-form GAIC | Candidate scale | Inconsistent body sectionization | Sectionized front/chapter/appendix blocks |
| Table styling | Mature table-block classes | `table-block table-scroll` | Partial | `table-block table-scroll` normalized |
| Artifact nav | GAIC web edition nav | No sticky artifact nav in WP2 artifact | R3AB one-off sticky artifact nav | Removed to match WP2 |
| Print CSS | A4 print rules plus R8 PDF injection | A4 print rules plus R8 PDF injection | One-off print output | Shared R8 renderer source |
| Mobile behavior | Existing public artifact behavior | Canonical candidate behavior | Needed parity repair | Matches WP2 CSS baseline |

## Findings

WP2 is the closest canonical sibling for WP3. R3AC imports WP2 inline CSS from the public AIAAWP artifact and applies equivalent cover/status/table/TOC grammar to WP3 while preserving WP3 content markers.

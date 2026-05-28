# Severity Matrix

Severity definitions:

- P0: must fix before announcement / high trust or indexability risk.
- P1: should fix before major outreach.
- P2: improve during site polish.
- P3: backlog / optional.

## Counts

- P0: 0
- P1: 4
- P2: 9
- P3: 6

## P0

None.

## P1

| ID | Finding | Category | Blocker class | Recommended wave |
| --- | --- | --- | --- | --- |
| P1-01 | Third whitepaper HTML artifact lacks canonical link and JSON-LD while the first and second artifacts have them. | SEO/GEO | Announcement blocker, not publication blocker | Whitepaper artifact metadata parity repair |
| P1-02 | Concepts Map still uses `public-research-candidate` statuses and public acronyms for the second and third whitepaper relationship nodes. | Semantic/GEO | Announcement blocker | Public semantic surface terminology/status hardening |
| P1-03 | Historical first-whitepaper `publication candidate` artifacts are linked from public evidence/integrity surfaces without enough current-vs-historical framing. | Trust/UX | Announcement blocker if left unexplained | Evidence registry historical artifact labeling repair |
| P1-04 | Site does not yet clearly frame "three whitepapers complete; MPLP v2.0 object-model consolidation next; fourth whitepaper/guides held." | Strategic/GEO | Announcement narrative blocker | Research foundation and MPLP v2.0 positioning wave |

## P2

| ID | Finding | Category |
| --- | --- | --- |
| P2-01 | `/governance/` and `/governance/ai-agent-governance/` duplicate page titles. | SEO |
| P2-02 | `/concepts/ai-agent-lifecycle/` and `/lifecycle/` overlap and should clarify concept vs category roles. | SEO/Semantic |
| P2-03 | Several meta descriptions are too short or too long for clean snippets. | SEO |
| P2-04 | GAIC HTML artifact has 34 H1 elements. | Semantic HTML |
| P2-05 | Artifact HTML metadata parity differs across the three papers beyond the P1 third-paper issue. | Whitepaper system |
| P2-06 | Governance/mapping pages are dense and need first-fold scan hierarchy polish. | UI/UX |
| P2-07 | Project pages could better connect MPLP and proof path to the three-whitepaper foundation. | Semantic/E-E-A-T |
| P2-08 | `llms.txt` is comprehensive but could use a compact answer-engine summary near the top. | GEO |
| P2-09 | Footer visual treatment is less integrated with the registry shell. | Visual style |

## P3

| ID | Finding | Category |
| --- | --- | --- |
| P3-01 | Pre-existing untracked `public/social/*` files remain. | Git hygiene |
| P3-02 | `public/research/.DS_Store` exists. | Public tree hygiene |
| P3-03 | Astro check reports inline font preload `onload` hints. | Framework hygiene |
| P3-04 | Large whitepaper artifacts should be watched for performance and crawl cost. | Performance |
| P3-05 | Existing playbook layer should be distinguished from held future guide releases. | Strategic content |
| P3-06 | External identity/backlink/Search Console/Bing submission status is not represented in current site records. | E-E-A-T |

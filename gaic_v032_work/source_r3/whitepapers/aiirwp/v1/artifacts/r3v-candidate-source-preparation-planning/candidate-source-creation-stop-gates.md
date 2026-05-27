# Candidate Source Creation Stop Gates

## Purpose

Define stop gates before a future wave may create the candidate source.

## Required Stop Gates

| Gate | Required condition |
|---|---|
| Owner authorization gate | Explicit later authorization for candidate source creation. |
| Current-status gate | Registry confirms the correct wave and public status. |
| Source-basis gate | R3P integrated internal draft is the approved source basis unless separately changed. |
| Rejected-v0.2 exclusion gate | Rejected v0.2 is not used as source truth or citation source. |
| Preservation scan gate | Front Matter, Parts I-VI, Chapters 1-28, Chapter 28 conclusion, Appendix A-H, Appendix I deferred note, source refs, and table IDs are preserved. |
| Source/citation continuity gate | Source refs `[1]` through `[62]` and caveats remain intact. |
| Table ID continuity gate | `T-02-01`, `T-04-01` through `T-27-01` remain present without duplicate body table IDs. |
| Boundary/non-claim gate | No forbidden positive claim appears. |
| Public-status gate | WP3 remains withdrawn / v1.0 rewrite in progress unless separately changed. |
| No-DOCX gate | Public DOCX remains unauthorized. |
| No-artifact-generation gate | Candidate source creation does not create HTML/PDF/DOCX, manifest, checksum, or artifacts. |
| No-public-route-change gate | Public route, CTA, staging, sitemap, robots, `llms.txt`, and entity graph remain unchanged unless separately authorized. |
| No-final/sealed/release-ready gate | No final, sealed, release-ready, public candidate, or public release status is claimed. |

## Authorization Boundary

Passing R3V does not authorize candidate source creation.

Candidate source creation requires a later explicit wave.

## R3V Boundary

R3V defines gates only. It does not execute the gates against a newly created candidate source because no candidate source is created in R3V.

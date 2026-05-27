# Public Release Gate Plan

## Scope

This gate plan separates public route restoration from public announcement or final release. R3Z authorizes neither. It only defines gates for the next execution wave.

## Route Restoration Gates

R3AA may restore the public WP3 route only if all gates pass:

| Gate | Required Result |
|---|---|
| R3Z verdict gate | `ACCEPTED_FOR_PUBLIC_ROUTE_RESTORATION_EXECUTION_WITH_NOTES` |
| Owner authorization gate | Explicit owner authorization for R3AA route restoration execution |
| Artifact candidate QA gate | R3Y accepted internal Markdown/HTML/PDF candidates |
| HTML existence gate | Public HTML candidate exists after R3AA copy |
| PDF existence gate | Public PDF candidate exists after R3AA copy |
| Manifest/checksum gate | Public manifest and checksums parse and validate |
| Boundary QA gate | No positive insurance/legal/certification/scoring/final claims |
| Metadata QA gate | Title, description, OG/Twitter, canonical, citation metadata, and JSON-LD parse |
| Route no stale v0.2 gate | No active links to rejected v0.2 artifacts |
| Robots/sitemap gate | Current WP3 public route/artifacts handled intentionally; stale v0.2 remains blocked |
| llms/entity graph gate | WP3 status updated without overclaiming |
| No DOCX gate | No DOCX created, copied, linked, or described as available |
| Wide-table gate | Wide-table risks reviewed and accepted for public route restoration, or repaired |
| Public artifact integrity gate | HTML/PDF/manifest/checksum paths and hashes match |
| Git scope gate | Only R3AA route restoration files staged; unrelated `public/social/*` left unstaged |

## Public Announcement Gates

R3Z does not authorize public announcement. A later owner-controlled announcement may occur only after:

- deployed route verified live;
- public HTML link verified live;
- public PDF download verified live;
- manifest and checksum verified live;
- metadata and OG preview verified;
- sitemap output verified after build/deploy;
- robots treatment verified;
- `llms.txt` and entity graph verified;
- final visible non-claim language verified;
- LinkedIn/X/newsletter/post copy separately approved;
- owner explicitly authorizes announcement.

## Public Release Status Gates

R3AA route restoration must not claim final/sealed/release-ready status. Any later final/sealed/public release status requires a separate owner authorization and a separate QA record.

## Non-Claim Gate Language

The public route must visibly preserve that AIIRWP v1.0 is:

- not legal advice;
- not insurance advice;
- not underwriting guidance;
- not a coverage opinion;
- not actuarial pricing guidance;
- not a premium recommendation;
- not claim approval guidance;
- not a legal liability determination;
- not certification;
- not proof of insurability;
- not insurer endorsement;
- not a regulator-approved method;
- not procurement recommendation;
- not vendor ranking;
- not a score;
- not a standard;
- not readiness certification;
- not insurer-adopted method;
- not final;
- not sealed;
- not release-ready.

## R3Z Authorization Boundary

R3Z does not authorize route restoration, public announcement, public release, final/sealed status, release-ready status, DOCX, source Markdown publication, social posting, or external distribution.

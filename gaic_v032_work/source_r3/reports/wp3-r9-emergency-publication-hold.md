# WP3-R9 Emergency Publication Hold

## Decision

AIIRWP is placed on emergency publication hold. The current public body is not accepted as a release-quality white paper because it reads like an evidence/source/QA mapping package rather than a coherent industry white paper.

## Public Hold Applied

| Surface | R9 action |
| --- | --- |
| AIIRWP public route | Retained as an editorial review placeholder to avoid a hard 404. |
| AIIRWP route metadata | Changed to `noindex`; route now presents `UNDER EDITORIAL REVIEW`. |
| AIIRWP route CTAs | Removed active public `Read full HTML` and `Download PDF` calls to action. |
| Homepage research series | AIIRWP remains visible only as `Under editorial review` / `Publication revision pending`; PDF CTA is disabled. |
| Research index | AIIRWP status changed to `UNDER_EDITORIAL_REVIEW`; artifact links removed. |
| Evidence Registry | AIIRWP reframed as editorial review status; current staged artifact treated as internal evidence/source-pack history. |
| Concepts / Definitions / Governance / Playbooks | AIIRWP relationship language downgraded to planned / under editorial review; old artifact deep links removed from semantic terms. |
| GAIC and AIAAWP hubs | AIIRWP relationship text changed to editorial review status without weakening GAIC or AIAAWP. |
| Entity graph JSON | AIIRWP node and related concepts changed from public staging candidate / technical report promotion to editorial review status. |
| `llms.txt` | Direct AIIRWP HTML/PDF/manifest/checksum artifact promotion removed; route described as editorial review / revision pending. |
| Sitemap config | AIIRWP artifact custom page removed and AIIRWP editorial hold route filtered from generated sitemap. |
| Robots | Old AIIRWP HTML/PDF/manifest/checksum artifact URLs disallowed while the editorial review route remains available. |
| Public artifacts | Existing staged files remain in place as historical staging artifacts but are no longer promoted as release-quality public artifacts. |

## Artifact Discipline

- No new public HTML artifact was generated.
- No new PDF was generated.
- No DOCX was created.
- GAIC and AIAAWP public artifacts were not modified.
- Pre-existing untracked `public/social/*` files were not touched or staged.

## R9 Status Language

Public-facing and machine-readable surfaces now use boundary-safe language:

- `Under editorial review`
- `Publication revision pending`
- `The previous staged body is treated as internal evidence/source-pack history`
- `A publication-grade rewrite must pass the Whitepaper Body Quality Gate before a new candidate is generated`

## Boundary

R9 does not claim Final Seal, author release execution, external adoption, indexing, SEO/GEO uplift, answer-engine recognition, insurer acceptance, coverage-ready status, underwriting-ready status, certification, endorsement, legal proof, insurance advice, legal advice, coverage opinion, underwriting standard, actuarial pricing guidance, or claims approval guidance.

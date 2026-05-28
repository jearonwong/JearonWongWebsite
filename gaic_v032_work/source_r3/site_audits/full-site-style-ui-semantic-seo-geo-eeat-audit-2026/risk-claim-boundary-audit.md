# Risk / Claim Boundary Audit

## Scan Scope

Scanned:

- `src/pages`
- `src/components`
- `src/data`
- `public/llms.txt`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- `public/research`
- `dist`

Search terms included legal advice, insurance advice, underwriting guidance, coverage opinion, certification, regulator approval, insurer acceptance, coverage-ready, underwriting-ready, claim-ready, score, standard, vendor ranking, procurement recommendation, official standard, only standard, universal protocol, and complete stack.

## Result

PASS with contextual negative-control hits.

The scan returns many instances because the site repeatedly denies those claims. The dominant pattern is boundary wording such as:

- Not legal advice.
- Not insurance advice.
- Not certification.
- Not regulator approval.
- Not insurer acceptance.
- Not coverage-ready, underwriting-ready, or claim-ready.
- Not vendor ranking or procurement guidance.
- MPLP is one protocol path, not the only standard or required method.

## P1 / P2 Risk Notes

No P0 or P1 positive overclaim was found.

P2 cleanup candidates:

- `Validation Lab` should continue to be described as an evidence adjudication surface, not a certifier. Current wording appears bounded.
- Public pages using `score` terms such as RCCS-M and ALCS should keep the author-analytical boundary near first mention.
- `Delivery Standard` is a page/category phrase. Its public boundary should remain clear that it is not a standards-body or regulator-approved standard.

## Announcement Readiness Boundary

Before any public announcement, announcement copy should preserve:

- Auditability is not insurability.
- Evidence is not insurance.
- Governance is not claim approval.
- MPLP provides one protocol path, not certification.
- The three whitepapers are public research editions.
- The fourth whitepaper and guides are not being published now.

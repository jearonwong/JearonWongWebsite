# WP3-R2A High-Risk Source Audit

**Task ID:** WP3-R2A-EXTERNAL-SOURCE-ACCURACY-AUDIT
**Mode:** External source audit only

## High-Risk Source Register

| Source | Why high risk | Can remain? | Required framing | Downgrade / replacement |
| --- | --- | --- | --- | --- |
| INS-03 | Adoption map can change | Yes | Use only for current adoption variability; recheck before publication | P1 freshness recheck before publication |
| INS-06, INS-07 | U.S.-oriented legal encyclopedia | Yes | Plain-English terminology only | Do not cite for legal conclusion |
| AI-02 | EU jurisdiction-specific regulation | Yes | AI regulation context only | Do not generalize globally |
| MKT-01 | Reinsurer product/marketing page | Yes | Market example only | Not proof of industry standard |
| MKT-02 | Reinsurer-authored report | Yes | Reinsurer view on GenAI risk/insurance | Not consensus or coverage opinion |
| MKT-03 | Product announcement; automated 403 | Yes | Market signal that one insurer announced AI-related cyber coverages | Do not rely on it for policy wording |
| MKT-05 | Broker thought leadership; automated 429 | Yes | Supporting market framing only | Not sole support for thesis |
| MKT-06 | Broker report | Yes | Multi-line/silent AI exposure framing | Not policy interpretation |
| MKT-07 | Broker/podcast/insight format | Yes | D&O/corporate risk discussion context | Not legal or coverage conclusion |
| MKT-08 | GenAI-focused association report | Yes | GenAI insurance role/insurability context | Do not convert to all agentic AI |
| CYB-01 | Survey/report PDF blocked by automated access | Yes | Risk environment context only | Not coverage proof |
| CYB-03 | Marketplace press release | Yes | Cyber-threat context | Not policy or reinsurance conclusion |
| CYB-05 | Old URL broken; current access partial/lead-capture | Only as optional context | Use current source only if manually verified | Replace or remove from R3-critical claims |
| TECH-01 | Official docs but automated 403 | Yes | Technical SDK capability only | Do not cite for insurance evidence |
| TECH-03 | Old A2A URL broken | Yes after replacement | Use current `a2a-protocol.org` specification | Replace URL before R3 |
| TECH-04 | Two URLs combined in one R1 table cell | Yes after split | Cite durable execution and persistence separately | Split URLs before R3 |

## High-Risk Rule

No high-risk source may be the sole support for a central thesis claim. Product pages, broker thought leadership, press releases, and technical docs may support context, examples, and market signals only.

## Downgrade Decisions

- `CYB-05` is downgraded to optional context unless a stable report URL is manually verified for R3.
- `MKT-03`, `MKT-05`, `CYB-01`, and `TECH-01` are access-caveated because automated checks returned 403/429 while search/browser evidence shows source existence.
- `TECH-03` is not usable at the old URL and must be cited through the current A2A documentation.

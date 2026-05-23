# WP2 to Claim Evidence Mapping Register

This register uses WP2 / AIAAWP source truth as internal analytical source material. The mapping distinguishes auditability from insurability and claim review.

## Mapping Register

| WP2 object | Claim evidence interpretation | Underwriting use | Post-loss reconstruction use | Gap between audit evidence and claim approval | External source dependency | Synthesis status | Overclaim boundary |
|---|---|---|---|---|---|---|---|
| Audit Evidence Chain | Can be translated into a claim reconstruction chain when paired with policy/loss context | Helps ask what evidence exists before loss | Helps connect work unit, authority, role, tool, outcome, exception, and closure | Audit evidence may be useful but does not determine coverage, causation, amount, or claim outcome | NIST/CISA/QBE support incident evidence; policy sources needed for coverage | Internal analytical mapping | Auditability does not equal insurability |
| AARM levels | Can describe evidence readiness states for reconstruction planning | Helps discuss whether evidence is unobservable/log-visible/trace-linked/evidence-structured | Helps identify whether post-loss records can reconstruct the event | AARM is not an underwriting standard or score | External underwriting sources needed for insurer use | Internal synthesis | AARM does not bind insurers |
| Auditability object | Can become a candidate claim reconstruction object | Helps define what work object should be examined | Helps identify which object caused or contributed to loss | Claim file also needs policy, insured, loss category, limits/exclusions, causation review | Insurance policy/claim sources needed | Internal synthesis | Not a legal category |
| Evidence request | Can be adapted into post-loss evidence requests | Helps pre-loss evidence inventory | Helps claims/IR team collect records | Evidence request is not formal claim demand or audit procedure | NIST/CISA incident procedures; insurer claim docs needed | Internal synthesis with external evidence support | Not claims approval guidance |
| Evidence sufficiency | Helps separate raw logs from reconstructable evidence | Helps identify gaps in controls and documentation | Helps decide whether reconstruction is possible | Professional audit sufficiency differs from insurance proof sufficiency | Audit/professional sources + insurance claim sources | Internal synthesis | Does not set evidentiary sufficiency standard |
| Boundary language | Provides non-claim discipline for audit/assurance terms | Helps prevent underwriting overstatement | Helps prevent claim overstatement | Insurance claim boundaries require policy/legal review | All external sources for context | Internal boundary carryover | No coverage opinion |
| Assurance vs audit vs claim distinction | Clarifies different professional decisions | Helps keep underwriting discussion separate from assurance claims | Helps keep claim reconstruction separate from audit opinions | Assurance readiness does not approve claims | NIST/CISA/SEC plus insurance sources | Internal synthesis | No audit standard or insurance standard |

## Analytical Note

WP2 provides the clearest bridge from logs and traces to responsibility-linked evidence. That bridge is valuable for WP3, but it must be reframed. A claim file may need an evidence chain, but the existence of an evidence chain is not the same as coverage, liability, loss amount, policy compliance, or claim approval.

## R2 Requirements

- Use "Claim Evidence Chain" only as an analytical translation, not as an industry standard.
- Keep AARM as readiness vocabulary, not underwriting standard.
- Do not claim auditability equals insurability.
- Do not claim AARM equals an underwriting standard.
- Pair WP2 mapping with NIST/CISA/QBE evidence sources when discussing incident reconstruction.

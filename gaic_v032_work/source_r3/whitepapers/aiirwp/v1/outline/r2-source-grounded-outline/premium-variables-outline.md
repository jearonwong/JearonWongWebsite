# Premium Variables Outline

**Status:** Source-grounded outline support only. This is not pricing guidance, actuarial guidance, a premium recommendation, or an underwriting standard.

## Chapter Role

Chapter 12 should help readers understand which exposure variables may matter in risk-transfer discussion without pretending to price them. The chapter should be useful to CFOs, CROs, brokers, risk teams, and underwriting-facing teams, while making clear that actual premium, pricing, appetite, limits, sublimits, and coverage decisions remain external and policy-specific.

## Source Basis

- R1 source-to-claim map, especially claims 7, 8, and 9.
- R1 reinsurance/aggregation source register.
- R1 AI-linked cyber/sublimit register.
- R1 silent AI exposure matrix.
- Geneva Association cyber accumulation and generative AI/systemic-risk context.
- Swiss Re cloud concentration / dependency context.
- QBE LLMjacking and AI cyber evidence context.
- Aon AI risk context.
- WP1 ALCS and lifecycle evidence fields.
- WP2 AARM and evidence sufficiency boundaries.

## Global Forbidden Pricing Language

R3 must not include:

- Premium formula, rate, multiplier, discount, surcharge, credit, or actuarial factor.
- Statement that a variable will increase or decrease premium.
- Statement that completing an evidence pack makes coverage cheaper or available.
- Statement that AIRM, AIO, ALCS, AARM, or MROs are accepted by insurers for pricing.
- Statement that any model produces an underwriting score, actuarial score, or insurability score.

## Analytical Variable Dictionary

| Variable | Why it matters | Exposure discussion use | Source basis | Forbidden pricing language |
|---|---|---|---|---|
| Frequency | Repeated agentic workflows can create more loss opportunities than rare use cases | Helps describe how often a work object acts or is relied on | QBE AI cyber context; WP1 lifecycle inventory | Do not convert frequency into rate |
| Severity | Some workflows touch money movement, customer harm, regulated data, or professional reliance | Helps classify potential impact bands qualitatively | Aon risk context; silent exposure matrix | Do not assign dollar loss estimate unless sourced |
| Authority scope | More delegated authority changes what can happen without direct human action | Helps distinguish draft-only, recommend, approve, transact, or execute authority | WP1 authority boundary; NIST AI RMF | Do not say a given authority level is insurable/uninsurable |
| Transaction value | Financial value of agentic decisions changes exposure conversation | Helps identify workflows needing higher evidence discipline | WP1 accepted outcome; QBE cyber examples | Do not recommend limits |
| Autonomy level | Autonomy affects timing, intervention, and traceability expectations | Helps describe whether human review is preventive, sampled, or post hoc | WP1 ALCS; WP2 AARM | Do not turn autonomy into certification level |
| Human review depth | Review design changes responsibility and evidence quality | Helps distinguish HITL event from responsibility structure | WP1 responsibility object; WP2 evidence chain | Do not claim review guarantees coverage |
| Evidence completeness | Missing records weaken underwriting discussion and claim reconstruction | Helps identify readiness gaps | WP2 Audit Evidence Chain; NIST/CISA incident evidence | Do not claim complete evidence ensures claim payment |
| Model/tool/vendor concentration | Shared dependencies can create correlated losses | Helps map dependency concentration and aggregation exposure | Geneva Association; Swiss Re; Beazley/QBE context | Do not quantify systemic premium effect |
| Cloud/API dependency | Cloud AI services and APIs can create accumulation and availability concerns | Helps identify single points of failure and service dependencies | Swiss Re cloud concentration; QBE LLMjacking | Do not state cloud use is priced in a specific way |
| Incident history | Prior incidents affect risk discussion and remediation maturity | Helps show what happened, how it was remediated, and whether evidence improved | NIST/CISA; WP1 remediation closure | Do not say incident-free history earns lower premium |
| Remediation latency | Slow closure can extend loss and evidence uncertainty | Helps discuss time from detection to containment, fix, retest, and reauthorization | NIST/CISA response lifecycle; WP1 closure | Do not create latency thresholds |
| Aggregation exposure | Many work units may share model, vendor, data, or control dependencies | Helps reinsurer/broker/enterprise readers see portfolio risk | Geneva cyber accumulation; generative AI systemic risk context | Do not provide capital or reinsurance pricing conclusions |
| Privacy/regulatory exposure | AI workflows may touch regulated data or disclosure obligations | Helps identify policy-line ambiguity and evidence requirements | SEC cyber disclosure; NIST AI RMF; NAIC governance context | Do not provide legal compliance advice |
| Customer harm exposure | Customer-facing decisions can create service, financial, or professional harm | Helps tie workflow object to claimant/loss scenario | Silent exposure matrix; Aon risk context | Do not determine liability |
| Professional reliance exposure | Professional advice workflows may implicate E&O or professional liability ambiguity | Helps separate drafting support from relied-upon professional output | Silent exposure matrix; Aon context | Do not provide coverage opinion |

## Suggested Chapter Structure

1. Open with the CFO/CRO problem: readers ask about premium, but the defensible answer starts with exposure variables, not rates.
2. Explain why agentic AI variables differ from model-only variables: authority, work object, dependency, evidence, and remediation matter.
3. Present the variable dictionary in the body with concise rows.
4. Move detailed variable notes to Appendix F.
5. Close by pointing to Chapter 13: variables are not only enterprise-level; shared dependencies can create aggregation concerns.

## R3 Drafting Notes

- Use "may matter," "can shape the exposure discussion," "risk reviewers may ask," and "analytical input."
- Avoid "premium will," "insurer will," "priced as," "rate," "discount," "surcharge," and "actuarial factor."
- Tie each variable back to evidence or exposure, not to premium outcome.
- Keep the chapter practical, but visibly bounded.

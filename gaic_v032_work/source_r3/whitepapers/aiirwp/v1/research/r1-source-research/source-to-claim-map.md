# Source-to-Claim Map

## Central v1.0 Claims

| Claim | Supported by sources | Source strength | Allowed wording | Forbidden wording | Chapter target | More research needed |
|---|---|---|---|---|---|---|
| 1. AI agents are usually not the insured legal subject. | Aon line-of-business context; SEC governance; WP1/WP2 subject/object synthesis | Medium external + strong internal synthesis | "The insured subject is typically a legal person or organization, while the agent is a loss-relevant risk object." | "AI agents are never insured"; "this determines legal liability" | 4, 5 | Policy-form examples by line would strengthen |
| 2. Enterprises need to distinguish insured subject from agentic risk object. | Verisk, Aon, QBE, Munich Re, WP1/WP2 | Strong synthesis | "AI risk transfer analysis needs both the insured subject and the object that generated or shaped the loss." | "AIO is an insurance standard" | 1, 4, 5 | More insurer underwriting forms useful |
| 3. Current AI insurance market is split across cover, exclusion, sublimit, and silent exposure. | Verisk; QBE; Munich Re; Armilla; Chaucer; Aon; Geneva; FT-derived caveats | Strong for split-market frame; caveat on sublimit/exclusion specifics | "Public sources show a mixed market of affirmative products, endorsements/exclusions, AI-linked cyber, and silent exposure." | "All insurers exclude AI"; "AI is broadly covered"; "market has accepted agentic AI" | 2 | Primary filings for named exclusions; sublimit wording |
| 4. Model-performance coverage is not the same as agentic lifecycle risk transfer. | Munich Re; Armilla; Chaucer; QBE; WP1/WP2 | Strong | "Model-performance and warranty products define narrower objects than end-to-end agentic lifecycle work." | "aiSure/Armilla covers all agentic lifecycle risk" | 3 | Full policy terms would deepen |
| 5. Logs and traces are useful but insufficient as claim evidence. | NIST; CISA; QBE LLMjacking; WP2 AEC | Strong | "Logs and traces support reconstruction but need authority, role, outcome, and remediation context to become claim reconstruction evidence." | "Logs are useless"; "evidence chain guarantees approval" | 9, 15 | More insurer claim docs useful |
| 6. Claim reconstruction requires authority, responsibility, causality, evidence, and remediation records. | NIST; CISA; QBE; SEC; WP1/WP2 | Strong | "Claim reconstruction can use incident evidence plus lifecycle responsibility records." | "This proves legal causation"; "this is claims approval guidance" | 15, 17 | Claims-specific insurer source could strengthen |
| 7. Underwriting agentic AI requires exposure inventory, authority scope, dependency visibility, and evidence readiness. | Aon; NAIC; NIST AI RMF; Geneva; Swiss Re; WP1/WP2 | Strong synthesis | "A credible underwriting discussion would need exposure inventory, authority scope, dependencies, and evidence readiness." | "Underwriting-ready"; "underwriting standard"; "insurer acceptance" | 11, 14 | Underwriter questionnaire examples |
| 8. Premium variables can be discussed as analytical inputs without pricing guidance. | Geneva cyber accumulation; Swiss Re cloud; QBE LLMjacking; Aon; WP1 ALCS | Medium-strong synthesis | "Variables such as frequency, severity, authority scope, dependency concentration, and evidence completeness are analytical exposure inputs." | "Pricing formula"; "actuarial model"; "premium guidance" | 12, App. F | Actuarial literature optional if carefully bounded |
| 9. Aggregation risk matters because shared models/tools/vendors can create correlated losses. | Geneva cyber accumulation; Geneva GenAI; Swiss Re cloud; Beazley Google Cloud; QBE LLMjacking | Strong | "Shared cloud, model, API, and vendor dependencies can create correlated exposure that matters for insurability analysis." | "Reinsurers accept this"; "we can price it" | 13 | AI-specific reinsurer material useful |
| 10. WP1/WP2 can be translated into insurability reasoning but do not make systems insurable. | WP1-GAIC; WP2-AIAAWP; external sources for context | Strong internal boundary | "WP1/WP2 provide analytical vocabulary for evidence and lifecycle responsibility." | "GAIC/AIAAWP makes systems insurable"; "auditability equals insurability" | 8-10, 18-20 | None for R2; maintain caveat |
| 11. AIO/AIRM v2 are analytical models, not standards or certification. | Registry; v1 writing rules; WP1/WP2 boundary language | Strong internal boundary | "AIO/AIRM v2 are proposed analytical vocabularies for evidence readiness and object clarity." | "certification"; "standard"; "insurer accepted"; "coverage-ready" | 18, 19, App. G | None for R2; external adoption absent by design |

## Claim Strength Summary

- Strongest externally supported claims: split-market signal, model-performance distinction, cyber/LLMjacking evidence, incident response reconstruction, aggregation/dependency visibility.
- Strongest internal analytical claims: insured subject vs agentic risk object, WP1/WP2 translation, AIO/AIRM boundary.
- Weakest claims without more research: named insurer exclusion filings and precise AI cyber sublimits.

## R2 Requirements

R2 should keep each chapter's claims tied to source IDs. Any claim using AIG, WR Berkley, Great American, or AI cyber sublimits should be marked as reported/caveated unless primary filings or policy wording are obtained.

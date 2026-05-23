# Claims Reconstruction Source Register

## Source Register

| Source ID | Source | Evidence process supported | Incident timeline relevance | Causality trace relevance | Remediation evidence relevance | Legal causation boundary | Claim approval boundary | WP3 use |
|---|---|---|---|---|---|---|---|---|
| CLAIM-NIST-80061R3 | NIST SP 800-61 Rev. 3 | Preparation, detection, analysis, response, recovery, continuous improvement, integration with cyber risk management | Supports a structured incident timeline and role/process records | Helps identify events, affected systems, response decisions, and evidence sources | Supports lessons learned and recovery/remediation records | NIST incident response does not determine legal causation | Does not approve or deny insurance claims | Chapters 15 and 17; Appendix E |
| CLAIM-CISA-PLAYBOOK | CISA incident and vulnerability response playbooks | Operational procedures for identification, coordination, containment, remediation, recovery, reporting | Strong support for event sequence, coordination, and status tracking | Supports technical reconstruction of vulnerability/incident path | Strong for mitigation tracking and recovery status | Federal playbook does not resolve private liability | Does not establish coverage or claim payment | Chapters 15 and 17; Appendix E |
| CLAIM-SEC-CYBER-2023 | SEC cyber disclosure rules | Material incident disclosure, governance, risk management, board oversight reporting | Supports public-company disclosure timing and materiality analysis | Shows governance and disclosure relevance, not technical causation | Requires governance/process records relevant to remediation disclosure | Securities disclosure rules do not resolve insurance causation | Not an insurance claim standard | Chapters 6, 15, 16 |
| INS-QBE-LLM-2025 | QBE Understanding LLMjacking | AI-linked cyber evidence: access, API usage, credentials, consumption, containment | Useful for concrete LLMjacking timeline and detection/response evidence | Strong for technical causality trace of unauthorized LLM resource use | Supports mitigation and prevention evidence | Does not decide legal cause or covered cause | Service guidance, not policy claim approval | Chapters 12, 15 |
| INS-QBE-CYBER | QBE cyber insurance page | Cyber incident services: forensics, data restoration, BI, regulatory investigation categories | Useful for claim-document category planning | Shows categories that may matter in cyber claim reconstruction | Supports restoration/remediation documentation categories | Coverage depends on policy terms | Not a promise of claim approval | Chapters 11, 15 |
| GOV-NIST-AIRMF | NIST AI RMF | AI governance lifecycle, measurement, management, documentation context | Helps structure pre-incident risk records | Supports governance-to-event trace, not legal causation | Supports risk management improvement records | Not an insurance or legal source | Not claim evidence standard by itself | Chapters 8, 11, 18 |
| WP2-AIAAWP | AIAAWP Audit Evidence Chain | Responsibility-linked evidence requests, audit object, trace-vs-evidence boundary | Strong internal bridge from logs/traces to lifecycle evidence | Strong internal bridge from causality trace to responsibility-linked reconstruction | Strong for exception/remediation closure evidence design | Internal synthesis; legal causation remains external | Auditability does not equal claim approval | Chapters 9, 15, Appendix C |
| WP1-GAIC | GAIC MRO / ALCS | Authority, evidence partition, accepted outcome, remediation closure, substitution conformance | Strong internal bridge for lifecycle work reconstruction | Helps name responsibility objects and dependency transitions | Strong internal bridge for remediation closure as evidence state | Internal synthesis; not insurance law | Does not bind insurer or claim reviewer | Chapters 8, 10, 15, 17, Appendix B |

## Required Analytical Output

Incident response evidence can be mapped into claim reconstruction evidence, but it must not be presented as claim approval. NIST, CISA, SEC, and QBE sources support a practical evidence flow:

1. Identify the incident, affected systems, actors, and timeline.
2. Preserve relevant logs, API records, identity/access records, tool calls, cloud usage, and vendor notices.
3. Record authority, escalation, containment, remediation, and recovery decisions.
4. Separate technical causality trace from legal causation and coverage review.
5. Preserve policy/notice/loss measurement documents without implying the claim outcome.

For agentic AI, the reconstruction gap is that ordinary cyber records may show what happened technically, while WP3 needs to ask whether the event can also be linked to delegated authority, human role, agent/tool role, accepted outcome, responsibility holder, dependency chain, and closure state.

## Claim Reconstruction Evidence Categories for R2

| Category | Evidence examples | Source basis | Boundary |
|---|---|---|---|
| Incident timeline | Detection time, escalation time, containment, recovery | NIST, CISA, QBE | Not legal causation |
| Technical trace | Logs, API calls, identity records, cloud usage, tool action records | NIST, CISA, QBE | Not sufficient alone |
| Authority and responsibility | Delegation record, reviewer role, business owner, approval | WP1, WP2 synthesis | Internal analytical mapping |
| Causality chain | Event sequence linking action to loss | NIST/CISA + WP2 synthesis | Legal causation remains separate |
| Policy/coverage boundary | Notice, policy line, exclusions, limits, sublimits, loss category | Insurance sources + policy terms | No coverage opinion |
| Remediation closure | Fix, patch, model/tool change, access control repair, recheck | NIST, CISA, WP1/WP2 | Does not prove no residual liability |

## R2 Use Rules

- Say "claim reconstruction evidence," not "claims approval evidence."
- Say "causality trace," not "legal causation determination."
- Use NIST/CISA/SEC/QBE as external evidence sources; use WP1/WP2 as analytical translation only.
- Keep legal, coverage, and claim outcome decisions outside the paper's authority.

# WP1 to Insurability Mapping Register

This register uses WP1 / GAIC source truth as internal analytical source material. Each mapping remains analytical synthesis unless supported by external insurance sources.

## Mapping Register

| WP1 object | Insurability interpretation | Underwriting relevance | Claims relevance | Evidence needed | External source dependency | Synthesis status | Overclaim boundary |
|---|---|---|---|---|---|---|---|
| MRO objects | MROs can name lifecycle work objects that may become risk objects for underwriting discussion | Helps inventory what agentic work exists and which object creates exposure | Helps reconstruct what object was involved in a loss | Work unit ID, role, authority, evidence pointer, accepted outcome, closure state | Insurance sources needed to connect object to line/coverage | Internal analytical mapping | MROs are not legal categories or insurance standards |
| ALCS logic | Lifecycle conformance can inform evidence maturity discussion | Helps describe control/evidence posture without pricing | Helps identify missing lifecycle evidence after loss | ALCS dimensions, evidence completeness, remediation latency | External underwriting sources needed for any insurer-specific use | Internal analytical mapping | ALCS does not make systems insurable |
| Authority boundary | Delegated scope can define exposure perimeter | Underwriters may need authority scope and escalation rules | Claim reconstruction needs whether action was inside authority | Delegation grant, limits, expiry, escalation, approval | NIST/CISA/QBE support incident evidence; insurance source needed for policy use | Strong internal plus external evidence analogy | Not legal delegation proof or coverage determination |
| Evidence partition | Separation of model, tool, human, vendor, project, and data evidence | Helps identify dependencies and third-party risks | Helps allocate technical trace and responsibility | Partition keys, logs, tool records, vendor records, privacy filters | QBE LLMjacking, Swiss Re cloud, Geneva cyber accumulation | Internal synthesis with external analogy | Not a mandatory schema |
| Accepted outcome | Marks the point where output/action became business-accepted | Helps distinguish generated output from adopted business decision | Helps identify loss-relevant acceptance moment | Reviewer role, acceptance record, criteria, timestamp | Claims reconstruction sources support timeline; external insurance source needed for line-specific use | Internal analytical mapping | Not legal acceptance or liability determination |
| Substitution conformance | Component/model/vendor changes must preserve evidence continuity | Helps underwriters understand change risk and dependency concentration | Helps claims teams reconstruct which model/tool version caused event | Prior/new component, version, reauthorization, validation, continuity record | Swiss Re cloud, Geneva cyber accumulation | Internal synthesis with aggregation analogy | Not vendor certification |
| Remediation closure | Closure state can show what was fixed and when | Helps evaluate operational readiness and incident history | Helps post-loss evidence package show containment/recovery | Fix record, recheck, owner, residual risk, closure approval | NIST/CISA support remediation/recovery documentation | Internal synthesis with incident-response grounding | Does not prove no residual liability |
| Cross-project lifecycle | Agentic work may cross projects, teams, systems, and vendors | Helps identify accumulation and enterprise exposure | Helps trace loss across business process boundaries | Cross-project IDs, transfer records, dependency map | Swiss Re cloud, Geneva cyber accumulation | Internal synthesis | Not a coverage trigger |
| Dependency / aggregation risk | Shared tools/models/vendors create correlated exposure | Supports exposure inventory and accumulation review | Supports reconstruction of common-cause losses | Vendor map, cloud/API map, model version, shared workflow inventory | Geneva Association, Swiss Re, Beazley/QBE examples | External analogy plus internal synthesis | No actuarial pricing conclusion |
| Responsibility object | Separates human role, agent role, corporate owner, and remediation owner | Helps identify accountability structure | Helps allocate reconstruction questions | RACI, role-responsibility map, authority/acceptance/closure records | NIST/CISA for roles/process; insurance source needed for coverage use | Internal synthesis | Does not determine legal liability |
| Lifecycle conformance | Overall ability to keep agentic lifecycle evidence reconstructable | Helps discuss evidence readiness and governance maturity | Helps assemble claim reconstruction evidence | Evidence inventory, lifecycle records, exception handling, closure evidence | NIST/CISA, NAIC governance, NIST AI RMF context | Internal synthesis | Not compliance proof, certification, or underwriting-ready claim |

## Analytical Note

WP1 gives WP3 a vocabulary for the object layer. That vocabulary becomes useful for insurance only when WP3 keeps the boundary straight: MRO/ALCS can help identify and organize evidence, but external insurance sources and policy terms determine whether a given risk is covered, excluded, limited, sublimited, or silent.

## R2 Requirements

- Mark this mapping as author/internal analytical synthesis.
- Use external insurance sources for market claims.
- Do not imply WP1 makes systems insurable.
- Use WP1 to explain why "insured subject" and "agentic risk object" are different.

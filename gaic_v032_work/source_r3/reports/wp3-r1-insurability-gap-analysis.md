# WP3-R1 Insurability Gap Analysis

**Task ID:** WP3-R1-INSURABILITY-SOURCE-RESEARCH
**Mode:** Source research only
**Boundary:** This analysis identifies research-backed gaps for later outline work. It is not a legal liability determination, insurance advice, underwriting standard, coverage opinion, claims approval guide, actuarial model, or certification.

## Core Conclusion to Carry into R2

For large-scale enterprise adoption, the insurability gap is not simply "AI is risky." The gap is that current insurance and technical sources do not yet expose a widely accepted lifecycle object layer that binds:

`legal subject -> human role -> agent/MAS role -> authority -> work unit -> loss event -> causality -> dependency -> remediation -> claim evidence`

This is author synthesis grounded by insurance basics, AI insurance market evidence, cyber/claims evidence sources, technical framework docs, and WP1/WP2 internal source truth.

## Gap Register

| Gap | Plain-English explanation | Insurer question | Enterprise question | Source support | AIO mapping | Related chapters | WP1/WP2 mapping |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1. Legal subject gap | A policy attaches to a person, company, officer, professional, vendor, or organization, not to the AI agent as a legal subject. | Who is the insured or responsible subject? | Which company, role, officer, vendor, or professional owns this agentic exposure? | INS-04, INS-06, INS-08 | AIO-01 | 0, 1, 3 | WP1 MRO-01/MRO-03; WP2 human/agent responsibility mapping |
| 2. Insurable object gap | A model name, app name, or workflow label is not enough to define the exposure. | What bounded work unit or operation is being reviewed? | Can we identify scope, authority, data, tools, time, expected outcome, and review state? | INS-01, MKT-01, MKT-02, INT-06 | AIO-02, AIO-04 | 2, 4, 5, 8, 12 | WP1 MRO-02/MRO-04/MRO-05/MRO-08; WP2 audit object clarity |
| 3. Responsibility mapping gap | Human-in-the-loop review is not the same as a responsibility path. | Who authorized, supervised, accepted, escalated, or remediated? | Can human roles be mapped to agent/MAS roles and evidence responsibilities? | INS-01, INS-08, MKT-07, INT-01, INT-05 | AIO-03 | 3, 6, 8, 10, 13 | WP1 MRO-01/MRO-03/MRO-06/MRO-16; WP2 Agentic Audit Object |
| 4. Authority / coverage boundary gap | Tool permission is a technical capability; it is not business authority or coverage authority. | Was the action inside delegated authority and policy scope? | Can the enterprise prove the agent was allowed to perform this action under these conditions? | INS-05, INS-07, TECH-01, TECH-02, INT-05 | AIO-04, AIO-05, AIO-12 | 2, 7, 9, 12, 13 | WP1 authority/confirmation boundary; WP2 authority traceability |
| 5. Causality reconstruction gap | Logs/traces show activity but may not prove what caused the loss. | Can the event sequence be reconstructed across human, agent, tool, vendor, and system actions? | Can we explain what happened, in what order, and what alternative causes remain? | CLAIM-01, CLAIM-02, CLAIM-03, TECH-04, INT-05 | AIO-06, AIO-07, AIO-09 | 7, 10, 13 | WP1 trace/evidence chain; WP2 logs-vs-evidence distinction |
| 6. Claim evidence gap | A claim needs a coherent, dispute-ready package, not only screenshots, logs, or vendor dashboards. | What evidence package supports review and challenge? | Can we assemble event, authority, dependency, loss, remediation, and boundary evidence? | CLAIM-01, CLAIM-02, INS-01, INT-04, INT-05 | AIO-09, AIO-14 | 7, 10, 13, 16 | WP2 Audit Evidence Chain -> WP3 Claim Evidence Chain |
| 7. Exclusion trigger gap | Unauthorized action, privacy breach, cyber event, professional-service mistake, IP issue, or regulatory exposure may classify differently. | Which facts trigger policy boundary review or exclusion analysis? | Can the enterprise classify the event without overstating coverage? | INS-05, INS-07, INS-09, MKT-03, MKT-05, MKT-08 | AIO-04, AIO-12 | 4, 9, 13 | WP1 confirmation boundary; WP2 exception traceability |
| 8. Dependency gap | Agentic systems depend on models, tools, cloud platforms, data sources, protocols, vendors, and subprocessors. | Which dependency caused, amplified, or constrained the event? | Can we map vendor/model/tool involvement and substitutions? | TECH-01 through TECH-05, CYB-02, CYB-03, INT-03 | AIO-11 | 5, 7, 11, 12, 14 | WP1 MRO-14/MRO-15; WP2 agent/tool partitioning |
| 9. Aggregation gap | Shared model/tool/provider/template failures can create correlated losses across many work units or insureds. | What could fail together, and how concentrated is the exposure? | Can we see repeated agentic work units and dependency concentration? | CYB-01, CYB-02, CYB-03, MKT-08 | AIO-13 | 5, 11, 14, 15 | WP1 enterprise failure scenarios and cross-project reuse; WP2 evidence partitioning |
| 10. Remediation closure gap | A prompt fix or bug fix does not equal business recovery, claim closure, or dispute closure. | What containment, recovery, recheck, and owner acceptance evidence exists? | Can we prove the fix, recovery state, and accepted closure? | CLAIM-01, CLAIM-02, CLAIM-03, INT-05 | AIO-08, AIO-10, AIO-14 | 10, 13, 15, 16 | WP1 remediation closure; WP2 remediation evidence |

## Gap Classification

| Gap category | Is it a company problem? | Is it an agent problem? | Is it a work-object problem? | Is it an evidence problem? | Is it a liability mapping problem? | Is it a claim reconstruction problem? |
| --- | --- | --- | --- | --- | --- | --- |
| Legal subject | Yes | No | Partial | Partial | Yes | Partial |
| Insurable object | Partial | Partial | Yes | Yes | Partial | Yes |
| Responsibility mapping | Yes | Yes | Yes | Yes | Yes | Yes |
| Authority boundary | Yes | Yes | Yes | Yes | Yes | Yes |
| Causality reconstruction | Partial | Yes | Yes | Yes | Partial | Yes |
| Claim evidence | Yes | Yes | Yes | Yes | Yes | Yes |
| Exclusion trigger | Yes | Yes | Yes | Yes | Yes | Yes |
| Dependency | Partial | Yes | Yes | Yes | Partial | Yes |
| Aggregation | Yes | Yes | Yes | Yes | Partial | Yes |
| Remediation closure | Yes | Partial | Yes | Yes | Partial | Yes |

## R2 Writing Guidance

- State external facts with source IDs.
- Mark AIO/AIRM as author synthesis unless a source directly supports the same object.
- Use "claim reviewability" and "evidence readiness," not "coverage guarantee" or "insurer acceptance."
- Explain technical traces as ingredients, not claim evidence by themselves.

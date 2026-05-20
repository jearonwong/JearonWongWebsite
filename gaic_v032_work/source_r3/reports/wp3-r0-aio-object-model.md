# WP3-R0 Agentic Insurability Object Model

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**Model:** AIO v2  
**Boundary:** AIO is an analytical object layer. It is not an insurance standard, underwriting rule, legal liability test, pricing model, coverage opinion, claims approval framework, certification, or insurer acceptance model.

## AIO v2 Catalog

### AIO-01: Legal Insured Subject

- Definition: The company, person, officer, professional, vendor, or organization that may be situated as the insured or legally responsible subject.
- Plain English: Who is the policy or risk-transfer question about?
- Underwriting use: Identify which subject's operations, duties, and responsibilities are under review.
- Claims review use: Link the event back to the relevant legal or organizational subject.
- Dispute use: Clarify whether the dispute concerns subject identity, responsibility path, or policy boundary.
- WP1/MRO mapping: MRO-01, MRO-03.
- WP2/Audit Evidence Chain mapping: Human/agent responsibility mapping.
- Related chapter: 1.
- Boundary risk: Legal liability determination or coverage opinion.

### AIO-02: Insurable Agentic Work Unit

- Definition: A bounded agentic workflow, operation, delegated activity, or loss-triggering exposure.
- Plain English: What agentic work are we actually reviewing?
- Underwriting use: Bound the exposure by scope, authority, tools, data, time, oversight, and outcome.
- Claims review use: Identify the work unit involved in the loss event.
- Dispute use: Separate covered or disputed work from unrelated agentic activity.
- WP1/MRO mapping: MRO-02, MRO-04, MRO-05, MRO-08.
- WP2/Audit Evidence Chain mapping: Audit object clarity and evidence sufficiency.
- Related chapter: 2, 8, 12.
- Boundary risk: Treating object definition as a policy form.

### AIO-03: Human-Agent Responsibility Map

- Definition: A map connecting human roles, organizational roles, agent/MAS roles, lifecycle duties, and evidence responsibilities.
- Plain English: Which human and organizational roles connect to what the agent did?
- Underwriting use: Review governance and responsibility structure before deployment or renewal.
- Claims review use: Reconstruct who authorized, reviewed, accepted, escalated, or remediated.
- Dispute use: Distinguish operational responsibility mapping from legal liability assignment.
- WP1/MRO mapping: MRO-01, MRO-03, MRO-06, MRO-16.
- WP2/Audit Evidence Chain mapping: Human/agent responsibility mapping.
- Related chapter: 3.
- Boundary risk: Legal liability determination.

### AIO-04: Coverage Boundary

- Definition: A scoped boundary describing included, excluded, limited, disputed, and outside-scope risk categories for review.
- Plain English: Where might the risk-transfer question begin, end, or become disputed?
- Underwriting use: Frame exposure questions and required evidence without deciding coverage.
- Claims review use: Link loss facts to coverage/exclusion review questions.
- Dispute use: Identify boundary facts that need evidence.
- WP1/MRO mapping: MRO-02, MRO-04, MRO-07.
- WP2/Audit Evidence Chain mapping: Scope and exception traceability.
- Related chapter: 2, 9.
- Boundary risk: Coverage opinion.

### AIO-05: Authority and Delegation Boundary

- Definition: Evidence of what the agent was allowed to do, under what conditions, with which tools, and when escalation or reauthorization was required.
- Plain English: Was the agent acting inside or outside its delegated lane?
- Underwriting use: Assess authority design and control visibility.
- Claims review use: Reconstruct whether the relevant action matched delegated authority.
- Dispute use: Support boundary disputes about authority drift or unauthorized action.
- WP1/MRO mapping: MRO-02, MRO-05, MRO-06, MRO-07.
- WP2/Audit Evidence Chain mapping: Authority traceability and exception traceability.
- Related chapter: 9, 12.
- Boundary risk: Automatic legal breach or coverage exclusion claim.

### AIO-06: Loss Event Record

- Definition: A structured record of the event, consequence, time, affected parties, affected assets, work unit, and claimed or potential loss.
- Plain English: What happened, when, and what was affected?
- Underwriting use: Inform scenario planning and evidence requirements.
- Claims review use: Start the claim evidence chain.
- Dispute use: Anchor conflicting narratives to a scoped event record.
- WP1/MRO mapping: MRO-04, MRO-08, MRO-16.
- WP2/Audit Evidence Chain mapping: Evidence sufficiency and accepted outcome evidence.
- Related chapter: 10, 13.
- Boundary risk: Treating record as proof of legal causation.

### AIO-07: Causality Reconstruction Trace

- Definition: Linked evidence showing the sequence of human, agent, tool, vendor, data, and system actions that may have caused or contributed to the loss event.
- Plain English: How did the event unfold?
- Underwriting use: Identify whether the system can be reconstructed before risk transfer.
- Claims review use: Support event reconstruction across components.
- Dispute use: Test alternative explanations and causality narratives.
- WP1/MRO mapping: MRO-05, MRO-07, MRO-08, MRO-15, MRO-16.
- WP2/Audit Evidence Chain mapping: Evidence sufficiency, agent/tool partitioning, exception traceability.
- Related chapter: 10.
- Boundary risk: Causation finding or expert opinion.

### AIO-08: Control Failure Record

- Definition: Evidence describing a control weakness, failure, bypass, drift, escalation failure, or missing guardrail connected to an event.
- Plain English: Which control did not work as expected?
- Underwriting use: Review control design and residual risk.
- Claims review use: Connect the loss to control facts without deciding liability.
- Dispute use: Support debate over preventability, authority, and remediation.
- WP1/MRO mapping: MRO-07, MRO-16, ALCS.
- WP2/Audit Evidence Chain mapping: Exception traceability and remediation closure.
- Related chapter: 10, 13.
- Boundary risk: Compliance violation or negligence finding.

### AIO-09: Claim Evidence Chain

- Definition: The linked evidence chain connecting subject, work unit, authority, action, loss event, causality trace, control failure, remediation, and boundary review.
- Plain English: Can the claim story be reconstructed from evidence rather than memory?
- Underwriting use: Evaluate whether future claims would be reviewable.
- Claims review use: Provide the central post-loss evidence structure.
- Dispute use: Supply the package structure for challenge and response.
- WP1/MRO mapping: MRO-08, MRO-16.
- WP2/Audit Evidence Chain mapping: Direct translation from Audit Evidence Chain.
- Related chapter: 7, 10, 13.
- Boundary risk: Claims approval framework.

### AIO-10: Remediation and Recovery Record

- Definition: Evidence of containment, correction, recovery, recheck, responsible owner, and closure.
- Plain English: What was fixed, who accepted closure, and what evidence proves it?
- Underwriting use: Review recovery discipline and control maturity.
- Claims review use: Connect post-loss remediation to event closure.
- Dispute use: Show whether corrective actions were scoped and evidenced.
- WP1/MRO mapping: MRO-16, MRO-04.
- WP2/Audit Evidence Chain mapping: Remediation closure and accepted outcome evidence.
- Related chapter: 10, 13.
- Boundary risk: Legal settlement or compliance closure claim.

### AIO-11: Vendor / Model / Tool Dependency Map

- Definition: A map of vendors, models, tools, processors, runtimes, integrations, substitutions, and dependency roles affecting the agentic work unit.
- Plain English: Which outside or replaceable components mattered?
- Underwriting use: Evaluate dependency concentration and substitution exposure.
- Claims review use: Reconstruct component involvement in a loss event.
- Dispute use: Separate internal responsibility from vendor/model/tool dependency facts.
- WP1/MRO mapping: MRO-14, MRO-15.
- WP2/Audit Evidence Chain mapping: Agent/tool partitioning.
- Related chapter: 11, 12.
- Boundary risk: Vendor ranking or endorsement.

### AIO-12: Exclusion Trigger / Boundary Breach Map

- Definition: A review map of facts that may relate to exclusions, sublimits, unauthorized activity, authority drift, or outside-scope operations.
- Plain English: Which facts might make the risk-transfer question disputed?
- Underwriting use: Clarify boundary-sensitive evidence needs before loss.
- Claims review use: Link event facts to coverage/exclusion review questions.
- Dispute use: Structure disputed boundary issues.
- WP1/MRO mapping: MRO-02, MRO-05, MRO-07.
- WP2/Audit Evidence Chain mapping: Exception traceability and scope definition.
- Related chapter: 9, 13.
- Boundary risk: Coverage opinion or exclusion determination.

### AIO-13: Aggregation and Accumulation Risk View

- Definition: A view of correlated or concentrated agentic exposures across work units, insureds, systems, vendors, models, tools, time windows, and event types.
- Plain English: What could fail together?
- Underwriting use: Review concentration and correlated exposure questions.
- Claims review use: Identify whether a loss is isolated or part of a wider event pattern.
- Dispute use: Support event grouping and dependency disputes.
- WP1/MRO mapping: Enterprise failure scenarios, MRO-14, MRO-15.
- WP2/Audit Evidence Chain mapping: Evidence partitioning and agent/tool partitioning.
- Related chapter: 14.
- Boundary risk: Actuarial model or loss estimate.

### AIO-14: Dispute-Ready Claim Package

- Definition: A scoped evidence package prepared for review, challenge, response, remediation, and boundary analysis.
- Plain English: Can the enterprise hand over a coherent evidence package if the claim is contested?
- Underwriting use: Evaluate whether the system can support post-loss review.
- Claims review use: Provide the post-loss review packet structure.
- Dispute use: Central object for disputed claim handling.
- WP1/MRO mapping: MRO-08, MRO-12, MRO-16.
- WP2/Audit Evidence Chain mapping: Selective disclosure, evidence sufficiency, remediation closure.
- Related chapter: 13, 16.
- Boundary risk: Guarantee of claim payment, legal privilege analysis, or insurer acceptance.

## AIO-to-Chapter Dependency Summary

| Chapter range | Primary AIOs |
| --- | --- |
| 1-3 | AIO-01, AIO-02, AIO-03 |
| 4-5 | AIO-01 to AIO-14 as gap-analysis targets |
| 6-8 | Full AIO model and WP1/WP2 mapping |
| 9-10 | AIO-04 to AIO-10, AIO-12 |
| 11 | AIO-11, AIO-13 |
| 12 | AIO-01 to AIO-05, AIO-11, AIO-13 |
| 13 | AIO-06 to AIO-10, AIO-12, AIO-14 |
| 14 | AIO-13 |
| 15-16 | Full AIO model through AIRM |

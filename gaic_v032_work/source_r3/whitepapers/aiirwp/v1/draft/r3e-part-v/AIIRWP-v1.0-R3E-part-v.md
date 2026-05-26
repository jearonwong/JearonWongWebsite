# AIIRWP v1.0 R3E - Part V Body Draft

**Draft Scope:** Part V only.

## Part V: Claims, Disputes, and Post-Loss Responsibility Evidence

Part IV organized agentic AI risk before loss: exposure inventory, underwriting-facing evidence, non-pricing variables, renewal change records, and optional reviewer evidence requests. Part V moves to the other side of the event.

The question changes after a loss. The enterprise is no longer asking only whether an agentic workflow is understandable enough for a risk discussion. It is asking what happened, who or what acted, what authority existed, what evidence survived, what cannot be reconstructed, what policy boundary questions may arise, what was fixed, and what the event should change before the next review.

That is not the same as claim approval. It is not coverage determination. It is not legal causation. It is not a liability finding. It is post-loss responsibility evidence: the disciplined reconstruction of a bounded agentic work unit after something has gone wrong.

Agentic AI makes this harder because the loss may not be located in a single model output. A model may have produced a plausible answer. An agent may have converted it into an action. A tool may have changed a customer record. A human may have approved a summary without seeing the full evidence. A vendor may hold the logs. A privacy rule may limit disclosure. A model or runtime may have changed before anyone investigated. The claim file may contain fragments, but fragments are not reconstruction.

Part V therefore builds the post-loss layer of the paper. It asks how claim reconstruction, dispute handling, coverage-boundary questions, remediation closure, and renewal feedback can be organized without pretending that evidence decides the legal or insurance outcome.

WP1 supplies lifecycle vocabulary for authority, accepted outcome, substitution, and remediation closure. WP2 supplies audit-evidence vocabulary for joining traces, records, and source pointers. In Part V, both are used as analytical scaffolding only, not insurance proof. [54] [55]

### Chapter 19: Claim Reconstruction After Agentic AI Incidents

An incident notice is not claim reconstruction.

"The AI system made an error" is a useful alarm, but it is a weak claim narrative. It does not say which work unit failed, what the agent was authorized to do, what the human saw, what tool action occurred, which data changed, what loss followed, whether the event was exceptional or ordinary, what was remediated, or which evidence is missing. It may be enough to start an internal response. It is not enough to reconstruct an agentic incident for insurance-facing review.

Claim reconstruction begins with the bounded work unit. The unit may be a refund workflow, customer notice workflow, claims triage workflow, professional deliverable workflow, deployment assistant, payment exception process, or account-update agent. The phrase "AI failure" should be translated into "this work unit acted under this authority, through this role and tool path, producing this consequence, with this evidence and these gaps."

Consider a customer-support agent that incorrectly triggers a refund and sends a confirmation email. The customer receives money they were not owed. The account record changes. A finance reconciliation process flags the mismatch two days later. The team can produce a model trace and an email record, but it cannot immediately answer whether the agent had refund authority, whether a human reviewer approved the action or only reviewed the message, whether the CRM update and payment action were linked, whether the tool action exceeded a threshold, whether the model endpoint changed that week, or whether the exception was closed.

That is the difference between notice and reconstruction.

The first reconstruction layer is initiating intent. What task was the work unit supposed to perform? Was it answering a customer question, correcting an account, processing a refund, triaging a complaint, drafting professional advice, or changing production code? Without intent, the event is only a sequence of technical actions.

The second layer is authority boundary. Was the agent allowed to recommend, draft, approve, send, pay, update, delete, deploy, file, or escalate? Was the action inside a threshold, outside a threshold, or ambiguous? Authority does not decide legal liability, but it frames whether the work acted as designed, drifted, or exceeded the expected perimeter.

The third layer is agent role. Did the agent draft, classify, recommend, decide, execute, monitor, or remediate? A model output is not the same as an agentic role. The reconstruction has to identify whether the agent merely produced text or actually caused a tool-mediated external consequence.

The fourth layer is human role. Human-in-the-loop is not enough. The file should show who reviewed, what they could see, when they reviewed, what authority they held, what criteria applied, and whether they accepted the outcome. A human reviewer who sees only a summary is not in the same position as a reviewer who sees the work-unit evidence chain.

The fifth layer is tool action. This is where generated output becomes business consequence: email sent, refund issued, account changed, code deployed, vendor ticket opened, database updated, filing submitted, credential used, cloud resource consumed, or customer notice published. Tool action is often the hinge between "the model said something" and "the organization did something."

The sixth layer is external consequence. Who or what was affected? A customer, vendor, employee, applicant, patient, investor, regulator, public audience, cloud bill, data system, production service, or professional client may each require different evidence. The consequence also shapes which internal teams, policy lines, vendors, counsel, or response partners may become relevant.

The seventh layer is affected data. Personal data, payment data, employee records, customer records, credentials, source code, privileged material, health data, vendor data, and operational logs carry different evidence and disclosure constraints. Claim reconstruction that ignores data class may either over-disclose sensitive material or fail to preserve source pointers.

The eighth layer is evidence chain. Logs and traces are ingredients. A reconstruction needs source pointers that connect intent, authority, role, prompt/output, tool action, human confirmation, external consequence, exception, remediation, and gap records. NIST and CISA incident-response sources support structured incident timelines, containment, response, recovery, remediation, and tracking. They do not determine claim approval, legal causation, or coverage. [49] [50]

The ninth layer is exception record. Was there a warning, override, failed validation, repeated near miss, manual correction, vendor outage, permission change, abnormal consumption pattern, or threshold breach? In AI-linked cyber settings such as LLMjacking, QBE materials point to access, API usage, abnormal consumption, containment, and remediation evidence as concrete reconstruction inputs. That support remains cyber-evidence support, not a promise of policy response. [51]

The tenth layer is remediation action and closure state. Was the workflow disabled, permission changed, account corrected, affected party notified, customer reimbursed, code rolled back, model endpoint reverted, prompt updated, human review strengthened, or vendor ticket resolved? Was the work unit retested and reauthorized? Was residual risk accepted? Closure is a lifecycle state, not a settlement.

The final layer is missing evidence. Missing evidence should not be hidden inside narrative. It should be named. Vendor-held logs, expired retention, redacted records without source pointers, missing approval screens, overwritten prompts, unjoined payment records, unavailable cloud usage data, and unclear version history all shape what can and cannot be reconstructed.

#### T-19-01 - Agentic Claim Reconstruction Map

| Reconstruction layer | Question it answers | Evidence needed | What it cannot determine | Boundary note |
|---|---|---|---|---|
| Bounded work unit | Which agentic work is being reconstructed? | Work unit ID, business function, owner, scope, status | Whether coverage applies | Not coverage opinion |
| Initiating intent | What was the work supposed to do? | Task request, trigger, workflow purpose, input context | Whether the intent was legally sufficient | Not legal advice |
| Authority boundary | What was the agent allowed to do? | Permission scope, threshold, escalation rule, prohibited actions | Whether authority creates legal liability | Not liability determination |
| Agent role | What did the agent contribute? | Role record, prompt/output, plan, decision or action trace | Whether the agent is an insured subject | Analytical object only |
| Human role | What did the human see, approve, or accept? | Reviewer role, evidence visible, approval record, timing | Whether the human is legally liable | Not legal causation |
| Tool action | Where did output become action? | API call, payment, email, account update, deployment, filing | Which policy line responds | Not policy interpretation |
| External consequence | Who or what was affected? | Customer/vendor/employee/system/data impact record | Damages or covered loss amount | Not loss valuation |
| Affected data | What data classes were involved? | Data map, labels, source pointers, redaction profile | Privacy compliance conclusion | Not privacy legal advice |
| Evidence chain | Can the event be joined end to end? | Source pointers, logs, approvals, tool records, exception links | Claim approval or denial | Not claim approval guidance |
| Exception record | What warnings or abnormal events occurred? | Override, near miss, anomaly, vendor outage, threshold breach | Fault allocation | Not fault determination |
| Remediation and closure | What was contained, fixed, retested, and closed? | Containment, fix, retest, reauthorization, residual-risk note | No residual liability | Not settlement proof |
| Missing evidence | What cannot be reconstructed? | Missing, stale, redacted, vendor-held, overwritten, inaccessible records | Claim denial or coverage result | Gap register only |

The important distinction is between four different kinds of inquiry. The technical sequence asks what systems, prompts, tools, identities, and records moved in what order. The operational incident asks what business process failed and how it was contained. Legal causation asks questions that belong to counsel, courts, dispute forums, contracts, and applicable law. Insurance claim analysis asks policy-specific questions about notice, facts, wording, exclusions, limits, deductibles, causation, loss category, and claim handling authority.

Agentic claim reconstruction can support the first two and organize facts for the latter two. It cannot replace them.

This chapter's boundary: claim reconstruction after agentic AI incidents is not legal advice, not insurance advice, not underwriting guidance, not coverage opinion, not claim approval guidance, not legal liability determination, not certification, not proof of insurability, not insurer endorsement, not regulator-approved method, not actuarial pricing guidance, and not premium recommendation.

The next chapter turns to what happens when the reconstruction is incomplete or contested. Agentic incidents do not only create loss. They create disputes about responsibility, authority, acceptance, and evidence gaps.

### Chapter 20: Dispute, Responsibility, and Evidence Gaps

Disputes often begin where the evidence stops.

An enterprise may tell a customer that an AI agent made an error. The customer may say the company made a promise. The enterprise may tell an insurer that the incident was a covered cyber event. The insurer may ask whether it was authorized operational misuse. The enterprise may tell a vendor that the platform failed. The vendor may point to configuration. A business team may say legal approved the workflow. Legal may say it never saw the tool-action authority. Security may have logs. Privacy may restrict disclosure. Engineering may know the model endpoint changed. No one may own the complete reconstruction.

This is why evidence gaps should be explicit, not hidden.

A dispute can arise between enterprise and customer. The customer experienced the external consequence: wrong notice, wrong refund, wrong account status, wrong professional deliverable, wrong access decision, wrong service interruption. The enterprise needs to explain what happened without overclaiming what the evidence proves.

A dispute can arise between insured and insurer. The question may not be "did AI cause a loss?" but whether the event fits the policy wording, notice requirements, covered peril, loss category, exclusion, sublimit, deductible, or condition. This paper does not answer that. It helps show which facts would need to be reconstructed.

A dispute can arise between enterprise and vendor. The enterprise may depend on a model provider, orchestration platform, cloud service, identity provider, data processor, tool connector, or evidence repository. Vendor-held logs, service notices, model versions, runtime defaults, and API records can be essential. If they are unavailable, the dispute becomes partly an evidence-access dispute.

A dispute can arise around human and agent responsibility. The human may have approved an output, but not the action. They may have seen a summary, but not the source. They may have been responsible for exceptions, but not routine executions. The agent may have acted within configured authority, but the authority may have been poorly designed. Responsibility evidence should not be collapsed into legal liability conclusions.

A dispute can arise inside the enterprise. Business, security, legal, privacy, compliance, engineering, procurement, finance, and risk teams often hold different pieces of the event. Each team may have a true fragment. The review problem is that none of the fragments alone reconstructs the lifecycle work.

The most common gaps are ordinary. There is no authority record. The approval context is missing. The tool-action record is separate from the model trace. The human approval screen did not show the evidence the reviewer would later need. The vendor has logs but the contract does not make them available. Retention expired. Redaction removed the useful source pointer. A model substitution occurred without conformance review. A remediation ticket closed operationally without lifecycle closure.

Those gaps are not just embarrassing documentation defects. They define the boundary of what the event can say.

An evidence gap register should therefore include the missing item, why it is missing, who may control it, whether it is recoverable, whether the absence affects reconstruction, whether a privacy or privilege constraint applies, and whether future remediation is planned. The register should not be written as an accusation. It should be written as a map of uncertainty.

NIST and CISA sources support the value of incident tracking, coordination, recovery, and remediation records. SEC cyber disclosure rules support governance and material incident disclosure context for public companies, but they do not turn an evidence gap into a securities, coverage, or liability conclusion. [49] [50] [52]

#### T-20-01 - Dispute and Evidence Gap Register

| Dispute type | Typical trigger | Evidence gap | Review consequence | Boundary note |
|---|---|---|---|---|
| Enterprise/customer | Wrong notice, refund, account change, decision, advice, or service action | Missing accepted outcome or customer-impact record | Harder to explain what was accepted and communicated | Not customer liability advice |
| Insured/insurer | Policy line, notice, exclusion, sublimit, causation, or loss category question | Missing timeline, authority, tool action, or loss category evidence | Harder to frame claim facts | Not coverage opinion |
| Enterprise/vendor | Platform, model, runtime, logging, API, or service dependency question | Vendor-held logs, inaccessible service record, missing version history | Dependency responsibility remains unclear | Not vendor liability determination |
| Human/agent responsibility | Human approved summary; agent executed action | Missing reviewer-visible evidence or role boundary | HITL cannot be evaluated as responsibility structure | Not legal causation |
| Business/security/legal teams | Different teams hold different fragments | No shared incident evidence index | Reconstruction becomes narrative-driven | Not claim handling guidance |
| Privacy/evidence conflict | Sensitive data appears in prompts, logs, payloads, or records | Redacted evidence lacks source pointer | Review may lose factual continuity | Not privacy legal advice |
| Substitution dispute | Model, vendor, runtime, prompt, or tool changed before/after event | Missing change or conformance record | Reviewed object may not match incident object | Not vendor certification |
| Remediation dispute | Fix claimed but closure unclear | No retest, reauthorization, owner signoff, or residual-risk note | Event remains open as lifecycle object | Not settlement proof |
| Retention dispute | Logs or prompts expired before review | Expired, overwritten, or unavailable evidence | Technical sequence may be incomplete | Not claim denial basis |
| Privilege/confidentiality dispute | Counsel/vendor/security records cannot be shared directly | No protected source-pointer strategy | Review may need scoped access or summary | Not disclosure advice |

The value of a gap register is discipline. It prevents a team from filling uncertainty with confidence. It also prevents the opposite mistake: treating one missing record as proof that nothing can be reconstructed. Some events can be reconstructed from multiple partial sources. Others cannot. The register helps reviewers see the difference.

Responsibility disputes should remain responsibility disputes until the right forum decides otherwise. A role map can show who initiated, configured, approved, executed, accepted, remediated, and closed. It cannot decide legal liability. An evidence chain can show what happened. It cannot decide coverage. A missing-evidence register can show uncertainty. It cannot by itself approve or deny a claim.

This chapter's boundary: dispute and evidence-gap analysis is not legal advice, not insurance advice, not underwriting guidance, not coverage opinion, not claim approval guidance, not legal liability determination, not certification, not proof of insurability, not insurer endorsement, not regulator-approved method, not actuarial pricing guidance, and not premium recommendation.

The next chapter addresses the most sensitive post-loss question: where the coverage boundary might sit. The paper can help frame the question. It cannot answer it.

### Chapter 21: Coverage Boundary Analysis Without Coverage Opinion

Agentic incidents often cross insurance lines before anyone agrees what kind of loss occurred.

A payment agent sends funds to the wrong party after a manipulated email. Is the review about cyber, crime, social engineering, authorized instruction, operational error, professional services, or internal control failure? A coding agent deploys a bad change that interrupts customer service. Is the question cyber, tech E&O, business interruption, professional liability, contract, or service failure? A generative content workflow publishes a misleading statement. Is the issue media liability, professional liability, D&O disclosure, advertising, IP, or operational governance?

The answer depends on policy wording, jurisdiction, facts, notice, exclusions, limits, sublimits, deductibles, causation, loss category, and claim handling control. This paper does not interpret policy language. It does not provide coverage opinion.

What it can do is identify why agentic evidence matters to coverage-boundary questions.

The first boundary is cyber versus authorized operational misuse. If credentials were stolen, an API abused, data exposed, cloud resources consumed, or service interrupted through unauthorized access, cyber evidence may be central. If a permitted workflow performed the wrong business action under configured authority, the question may look different. QBE's AI-linked cyber and LLMjacking materials support the need for access, API usage, abnormal consumption, containment, and remediation evidence, but they do not decide policy response. [51]

The second boundary is technology E&O versus professional liability. A vendor-provided AI service may fail as a product or platform. A professional firm may deliver advice, analysis, design, legal, financial, engineering, medical, or consulting work using agentic support. The same model output can appear in both settings. The evidence question is who promised what service, who accepted the output, what human judgment applied, and where the tool action affected the client.

The third boundary is product versus service. An AI-enabled device, software product, SaaS feature, or embedded agent may create different questions from an internal workflow that supports a service. The evidence needs include product version, use context, model/runtime record, tool action, user interaction, monitoring, and remediation. The paper can name those evidence needs. It cannot determine whether a product or service policy responds.

The fourth boundary is D&O or governance versus operational failure. A board or officer may be relevant where oversight, disclosure, public statements, securities claims, cyber governance, or risk-management failures are alleged. SEC cyber disclosure rules support the importance of governance and material incident context for public companies. They do not create D&O coverage proof or determine securities liability. [52]

The fifth boundary is crime/social engineering versus cyber. Deepfake fraud, invoice manipulation, synthetic identity, agent-assisted payment approval, and credential misuse can straddle policy concepts. The reconstruction should preserve communication records, authentication evidence, approval steps, payment authorization, identity proofing, and tool actions. It should not assume the line outcome.

The sixth boundary is media/IP versus generated content workflow. A workflow may create text, code, images, audio, marketing claims, legal summaries, or public statements. The coverage question may depend on publication, rights review, source material, approval, takedown, and policy wording. The agentic evidence helps show what was generated, reviewed, accepted, and published.

The seventh boundary is business interruption or property versus cloud/API/service interruption. A shared cloud, model, API, identity, data, or vendor dependency may affect operations. The evidence question is dependency map, service status, incident timeline, affected work units, restoration steps, and loss measurement. That evidence may help frame a boundary question, but it is not a business interruption determination.

The eighth boundary is privacy or regulatory investigation versus operational event. A prompt, memory, log, tool payload, customer record, employee record, or evidence pack may contain personal or regulated data. The claim file may need source pointers and redaction controls, but privacy/legal conclusions remain outside this paper.

Aon materials support the general reality that AI risk can touch cyber, E&O, professional liability, crime, D&O, governance, employment, and other enterprise risk lines. R1 silent-exposure research uses that market context to explain why line ambiguity matters. Neither source permits a universal coverage conclusion. [53] [56]

#### T-21-01 - Coverage Boundary Question Map

| Boundary question | Agentic fact pattern | Evidence needed | Why ambiguous | Boundary note |
|---|---|---|---|---|
| Cyber vs authorized operational misuse | Agent uses valid credentials or API to perform wrong action | Access records, authority scope, API logs, incident timeline | Unauthorized access and authorized misuse may require different review | Not coverage opinion |
| Tech E&O vs professional liability | AI platform fails or professional output causes client impact | Service promise, deliverable, human review, model/tool record | Product/service failure and professional judgment may overlap | Policy wording controls |
| Product vs service | Embedded AI feature or internal service workflow causes harm | Product version, use context, workflow record, monitoring, remediation | Product defect, software, service, and contract theories may mix | Not product liability advice |
| D&O/governance vs operational failure | Incident raises oversight, disclosure, or risk-management allegations | Board/risk records, disclosure timeline, incident escalation | Governance claims may arise from operational events | Not securities or D&O advice |
| Crime/social engineering vs cyber | Agent-assisted payment, impersonation, or manipulated instruction | Payment approval, authentication, communication, tool-action record | Voluntary instruction, fraud, cyber, and crime concepts may straddle | No line determination |
| Media/IP vs generated content workflow | Generated or agent-published content creates dispute | Prompt/output, source material, rights review, approval, publication, takedown | Content, technology, professional, and advertising issues may overlap | Not IP or media coverage opinion |
| BI/property vs cloud/API/service interruption | Shared model, cloud, API, identity, or vendor outage affects operations | Dependency map, service status, affected work units, restoration, loss records | Operational interruption and covered interruption differ by wording | Not loss valuation |
| Privacy/regulatory vs operational event | Personal data appears in prompts, logs, payloads, or evidence packs | Data map, affected data, source pointers, redaction, notification records | Operational error may trigger privacy, regulatory, or cyber questions | Not GDPR/legal advice |
| Exclusion/sublimit boundary | AI, cyber, professional, privacy, or technology terms may limit response | Actual policy text, event facts, source evidence, loss category | Public market signals cannot replace policy wording | No exclusion application |
| Notice/control boundary | Event timing, notice, consent, defense, vendor involvement, or remediation control is contested | Notice timeline, claim communications, response authority, vendor coordination | Policy conditions and claim handling authority are case-specific | Not claim handling guidance |

The table should be read as a question map, not an answer key. It helps a team avoid two errors: treating every AI-linked event as one line, and treating line ambiguity as hopeless. The right posture is narrower. Preserve the facts. Separate the work unit. Identify the action. Map the affected data and consequence. Preserve policy-specific questions for authorized review.

This chapter's boundary: coverage-boundary analysis is not legal advice, not insurance advice, not underwriting guidance, not coverage opinion, not claim approval guidance, not legal liability determination, not certification, not proof of insurability, not insurer endorsement, not regulator-approved method, not actuarial pricing guidance, and not premium recommendation. Policy wording, jurisdiction, facts, notice, exclusions, limits, sublimits, deductibles, causation, loss category, and claim handling control remain external and case-specific.

The next chapter moves from boundary questions to post-loss closure. Even when the coverage outcome is unresolved, the enterprise still needs to contain, fix, retest, reauthorize, and record residual risk.

### Chapter 22: Post-Loss Remediation, Reauthorization, and Residual Risk

An operational fix is not necessarily remediation closure.

After an agentic incident, teams often move quickly. Disable the workflow. Revoke a permission. Patch the prompt. Change the model endpoint. Roll back code. Refund a customer. Send a correction. Update a playbook. Close the ticket. The organization feels the event is over because operations are stable again.

From a lifecycle evidence perspective, the event may still be open.

Post-loss remediation should show what was contained, what caused the event, which work units were affected, which customers or third parties were affected, which data was involved, which authority boundary failed, which tool permissions changed, whether a model/vendor/runtime substitution mattered, whether the human review boundary was updated, what was retested, who reauthorized the workflow, what residual risk remains, and whether the renewal/change register was updated.

Take a payment workflow incident. An agent incorrectly approves a refund above its intended limit. The team disables the refund tool, manually reverses what it can, updates the threshold, and apologizes to affected customers. That may be a real operational response. But remediation closure still needs to show root cause, affected work units, affected customers, data involved, authority correction, tool permission correction, evidence chain preservation, retest, reauthorization, residual-risk acceptance, and any unresolved gaps.

The first stage is containment. What was stopped, isolated, disabled, suspended, blocked, or escalated? Containment evidence should identify the time, owner, work units affected, tool permissions changed, and immediate customer/system impact. NIST and CISA sources support containment, response, recovery, coordination, and tracking as incident-response disciplines, not insurance requirements. [49] [50]

The second stage is root-cause analysis. Root cause in this paper does not mean legal causation. It means the operational explanation the organization can support: authority misconfiguration, tool permission drift, missing human context, prompt failure, model/runtime change, vendor outage, data-quality issue, identity/access problem, exception-handling failure, or monitoring gap.

The third stage is affected work-unit mapping. Agentic systems are reused. A fix for one work unit may not cover another. The remediation record should identify all workflows that used the same model, tool connector, prompt pattern, permission, vendor, runtime, identity path, or evidence repository.

The fourth stage is affected customer, third-party, and data mapping. Who or what experienced consequence? Which data classes were touched? Was any evidence redacted, privileged, vendor-held, or restricted? This mapping helps preserve reviewability without turning the remediation record into legal advice.

The fifth stage is authority correction. If the agent had too much authority, the record should show the corrected permission, threshold, escalation path, prohibited action, or human confirmation boundary. If the authority was correct but misunderstood, the record should show clarification and training context.

The sixth stage is tool permission correction. The most important post-loss changes may be outside the model: API permission, CRM write access, payment threshold, deployment right, data export, email send capability, ticketing integration, or cloud console access. Tool records connect remediation to consequence.

The seventh stage is substitution review. If the model, vendor, runtime, orchestration layer, logging setting, data processor, or tool connector changed, the organization should ask whether the new component preserves the work unit's authority, role, evidence, privacy, outcome, exception, and remediation boundaries. This continues the R3D substitution conformance logic without turning it into vendor certification.

The eighth stage is human review boundary update. If the incident showed that the reviewer lacked context, saw only a summary, reviewed after action, reviewed too many items, or lacked authority to block, the remediation record should say what changed.

The ninth stage is retest and reauthorization. A fix should not only be made. It should be tested against the relevant work-unit scenario and reauthorized by an accountable owner. Reauthorization is not regulatory approval or insurer approval. It is an internal lifecycle state.

The tenth stage is residual-risk acceptance. Some risk remains after remediation. The question is whether the organization names it, owns it, monitors it, and carries it into renewal and future review.

#### T-22-01 - Post-Loss Remediation Evidence Map

| Remediation stage | Evidence artifact | Responsible owner | Renewal relevance | Boundary note |
|---|---|---|---|---|
| Containment | Disablement record, permission block, escalation time, affected work-unit list | Security, engineering, business owner | Shows immediate control of event | Not claim approval guidance |
| Root-cause analysis | Operational cause note, event timeline, contributing factor map | Incident owner, engineering, risk | Shows what changed after event | Not legal causation |
| Affected work units | Shared model/tool/vendor/runtime/dependency map | Enterprise risk, product owner | Updates exposure inventory | Not coverage-ready evidence |
| Affected customers/third parties/data | Impact record, data-class map, source pointers, notification status if applicable | Business owner, privacy, counsel | Updates consequence and privacy profile | Not legal notice advice |
| Authority correction | Revised authority scope, threshold, escalation, prohibited action list | Business owner, governance owner | Updates authority map | Not legal delegation proof |
| Tool permission correction | API, payment, CRM, deployment, email, database, cloud permission change | Engineering, security, system owner | Updates tool-action risk | Does not decide policy line |
| Model/vendor/runtime substitution review | Version record, vendor notice, runtime setting, conformance note | Procurement, engineering, risk | Updates dependency and substitution register | Not vendor certification |
| Human review boundary update | Reviewer role, evidence visible, timing, criteria, approval screen change | Business owner, governance, compliance | Updates confirmation boundary | HITL is not proof of transferability |
| Retest | Scenario test, regression evidence, exception test, monitoring check | Engineering, risk, business owner | Supports reauthorization | Not assurance opinion |
| Reauthorization | Owner signoff, reactivation decision, monitoring plan | Accountable business owner | Shows lifecycle restart state | Not insurer approval |
| Residual-risk acceptance | Residual-risk note, owner, monitoring, open gaps | CRO/risk owner, business owner | Carries risk into renewal/change review | Does not prove no residual liability |
| Renewal/change register update | Incident, remediation, substitution, gap, and authority updates | Risk, broker-facing owner | Feeds future review | Not premium recommendation |

Remediation closure is the state in which the organization can say: the event was contained, the work unit was understood, affected parties and data were mapped, authority and tool boundaries were corrected where needed, substitutions were reviewed, human review was updated where needed, the workflow was retested, an accountable owner reauthorized or retired it, residual risk is visible, and future review records were updated.

That is not the same as legal settlement. It is not claim closure. It is not proof of no liability. It is not a renewal guarantee. It is the lifecycle discipline that prevents incidents from remaining unresolved objects inside the enterprise.

This chapter's boundary: post-loss remediation and reauthorization evidence is not legal advice, not insurance advice, not underwriting guidance, not coverage opinion, not claim approval guidance, not legal liability determination, not certification, not proof of insurability, not insurer endorsement, not regulator-approved method, not actuarial pricing guidance, and not premium recommendation. Remediation closure does not eliminate liability or guarantee renewal, coverage, pricing, or claim outcome.

The next chapter closes Part V by sending post-loss learning back into the pre-loss architecture. A serious incident should change the future risk file.

### Chapter 23: Claims-to-Renewal Feedback Loop

A serious agentic incident should not disappear after operational closure.

If the event revealed unclear authority, weak human review, missing tool-action evidence, vendor-held logs, privacy/redaction tension, dependency concentration, model substitution, or unclosed remediation, those lessons should feed the next review. Otherwise, the enterprise repeats the same story at renewal: "we have AI governance," while the actual risk object remains hard to understand.

The claims-to-renewal feedback loop is risk learning. It is not pricing guidance. It does not say an incident will increase premium, reduce premium, trigger a surcharge, earn a discount, change appetite, or determine renewal. It says that post-loss facts should update the evidence architecture that future reviewers use.

The loop begins with the incident record. The record should identify the bounded work unit, event timeline, action, consequence, affected data, parties involved, source pointers, and open questions. It should avoid unsupported conclusions about liability, coverage, or claim outcome.

The second input is the evidence gap register. Gaps should not be forgotten because the event was contained. If vendor logs were inaccessible, retention was too short, redaction lacked source pointers, or a tool action was not joined to authority, the gap belongs in future evidence design.

The third input is remediation closure. What was fixed, retested, reauthorized, retired, or left open? Who owns residual risk? What monitoring changed? Which unresolved items should be visible at renewal?

The fourth input is exposure inventory. If the event showed that a work unit had more authority, data sensitivity, customer impact, dependency concentration, or reversibility difficulty than expected, the inventory should change. If the same component appears in other work units, those work units should be reviewed.

The fifth input is the authority map. Did the event reveal unclear delegation, excessive permissions, weak thresholds, missing escalation, emergency override misuse, or an approval role without enough evidence? Authority changes should not live only in engineering tickets.

The sixth input is the dependency map. A model, cloud region, API, identity provider, vendor, processor, evidence repository, or runtime may have become a concentration point. That dependency should be visible before the next broker, risk-engineering, underwriting, reinsurance, or enterprise risk review.

The seventh input is the privacy and redaction profile. Post-loss evidence often exposes where the organization either hoarded sensitive traces or failed to preserve useful source pointers. The next review should improve selective disclosure, access control, data labels, privilege flags, and retention design.

The eighth input is the renewal/change register. Part IV argued that agentic risk changes over time. Part V adds that incidents are change events. A serious incident should update workflow status, authority, tools, data classes, dependencies, human review, remediation closure, missing evidence, and residual risk.

The ninth input is the reviewer-facing request package. The next time a broker, risk engineer, counsel, internal reviewer, or underwriter asks for evidence, the package should reflect what the organization learned. It should not be a static template that ignores observed failure.

Different users will use this feedback differently. Enterprise risk teams use it to own the internal risk story. Engineering teams use it to improve controls and evidence capture. Counsel uses it to preserve legal boundaries. Brokers and risk engineers may use it to frame future conversations. Underwriters may ask their own questions under their own forms, appetite, and judgment. None of those uses converts the loop into a market-wide standard.

#### T-23-01 - Claims-to-Renewal Feedback Loop

| Post-loss signal | Update required | Who uses it | Why it matters | Boundary note |
|---|---|---|---|---|
| Incident record | Work-unit event timeline, action, consequence, affected data, source pointers | Enterprise risk, claims/IR, counsel | Preserves factual starting point | Not claim approval guidance |
| Evidence gap register | Missing, stale, vendor-held, redacted, privileged, or overwritten evidence | Risk, engineering, broker-facing owner | Prevents uncertainty from disappearing | Not claim denial basis |
| Remediation closure | Containment, fix, retest, reauthorization, residual-risk note | Business owner, security, renewal team | Shows whether event became closed lifecycle object | Not settlement proof |
| Exposure inventory | Update authority, data, consequence, dependency, reversibility, reuse | CRO, broker, risk engineer | Keeps exposure units current | Not coverage-ready status |
| Authority map | Correct delegation, threshold, escalation, approval, override | Governance, business owner, counsel | Prevents repeated authority ambiguity | Not legal delegation proof |
| Dependency map | Update model, cloud, API, vendor, processor, evidence system dependencies | Reinsurer-facing review, risk, engineering | Shows concentration and correlation | Not reinsurance pricing guidance |
| Privacy/redaction profile | Add source pointers, access controls, data labels, retention, privilege flags | Privacy, counsel, risk engineer | Makes evidence usable without uncontrolled disclosure | Not privacy legal advice |
| Renewal/change register | Record incident, changes, substitutions, gaps, residual risk | Renewal team, broker, enterprise risk | Carries post-loss facts into future review | Not premium recommendation |
| Reviewer-facing request package | Update examples, samples, gaps, dependency and remediation records | Broker, risk engineer, underwriter, counsel | Aligns future evidence requests with observed risk | Not underwriting checklist |
| Governance and training record | Update role training, approval criteria, monitoring, escalation playbooks | Governance, business units, HR/compliance where relevant | Shows learning and ownership | Not certification |

The feedback loop also clarifies what should remain separate. Enterprise internal learning is not insurer acceptance. Broker or risk-engineering review is not underwriting decision. Underwriting review is not coverage opinion. Legal and coverage claim handling remains case-specific. Claim reconstruction is not claim approval. Remediation closure is not no-liability proof. Renewal learning is not premium guidance.

The value of the loop is memory. Agentic systems change quickly. Without a feedback loop, a serious incident becomes a story, then a ticket, then an archived file. With a feedback loop, it becomes a source of better exposure segmentation, better authority design, better evidence capture, better privacy controls, better dependency visibility, better remediation closure, and a more honest future risk discussion.

This chapter's boundary: claims-to-renewal feedback is not legal advice, not insurance advice, not underwriting guidance, not coverage opinion, not claim approval guidance, not legal liability determination, not certification, not proof of insurability, not insurer endorsement, not regulator-approved method, not actuarial pricing guidance, and not premium recommendation. It does not provide pricing, discount, surcharge, insurer appetite, renewal, binding, endorsement, or claim outcome claims.

Part V has moved the paper from pre-loss reviewability to post-loss responsibility evidence. It has shown that agentic AI claims need bounded work-unit reconstruction, explicit evidence gaps, careful coverage-boundary questions, remediation closure, and a claims-to-renewal learning loop. The next part can turn the body into the paper's concluding analytical models and final architecture, while preserving the same boundary discipline: models can organize risk reasoning, but they cannot create coverage.

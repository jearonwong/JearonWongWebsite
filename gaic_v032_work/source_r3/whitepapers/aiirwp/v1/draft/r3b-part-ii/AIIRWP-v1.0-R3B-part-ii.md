# AIIRWP v1.0 R3B - Part II Body Draft

**Draft Scope:** Part II only.

## Part II: The Insurable Agentic Risk Object

Part I ended with a map, not a slogan. The market does not need another broad claim that AI is insured, uninsurable, excluded, covered, risky, or revolutionary. It needs a cleaner object.

That object is not usually the AI agent itself. It is not simply the model output, the cloud event, the API trace, the workflow label, or the fact that a human clicked approve. Those records matter, but they do not by themselves say what was transferred, who owned it, what authority was delegated, what evidence survived, or what kind of policy question was created.

Part II defines the working object for the rest of the paper: the Insurable Agentic Risk Object. The phrase is an authored analytical construct. It is not an insurance standard, not a coverage trigger, not a policy definition, not a certification, and not proof that any insurer accepts the object. Its purpose is narrower and more useful. It gives insurers, brokers, reinsurers, risk leaders, counsel, boards, and engineering teams a way to describe the bounded work that might generate or shape loss.

The policyholder remains the legal insured subject. The agentic work can become the loss-relevant risk object. Part II is about keeping those layers separate long enough for underwriting discussion, incident response, and claim reconstruction to become possible.

### Chapter 4: The Insurable Agentic Risk Object

The practical question after an agentic AI loss is rarely "which model was used?" That question matters, but it is not enough.

A company deploys an agent that can receive a customer request, classify the issue, approve a refund within a defined range, update the customer account, send a confirmation email, and trigger a downstream payment API. The model output looks plausible. The workflow completes. A human supervisor reviews only a summary queue. Days later, the company discovers that the agent applied the refund rule to the wrong class of customers and triggered a series of account changes that created financial loss, customer complaints, and regulatory concern.

The first insurance question is not whether "the AI" was involved. It is what object should be examined.

If the object is the model output, the analysis may miss the delegated refund authority. If the object is the cyber event, the analysis may miss that the action used valid credentials and ordinary system permissions. If the object is the runtime trace, the analysis may miss the human role and the accepted business outcome. If the object is the completed workflow, the analysis may miss the vendor dependency, substitution history, and exception record. If the object is only the company, the analysis may name the insured subject but fail to identify the work that produced the loss.

The Insurable Agentic Risk Object is the bounded lifecycle work unit that connects these fragments. It is the work as authorized, planned, executed, evidenced, handed off, accepted, excepted, remediated, and closed. It is a unit of analysis for insurance-facing review. It is not the insured legal subject.

This distinction is the hinge of WP3. The company may be the policyholder. A professional may be relevant under professional liability. An officer may matter in a governance or D&O context. A vendor or platform may matter in contract, service, technology, or liability analysis. But the agentic risk object is the bounded work that generated, shaped, amplified, or obscured the loss. It is where the insurance question becomes operational.

The object must be bounded because "AI system" is too large. It must be lifecycle-based because the loss may arise before or after the final output. It must be evidence-linked because post-loss reconstruction cannot depend on memory, dashboard summaries, or generic control claims. It must preserve responsibility because insurance conversations eventually ask who owned authority, review, acceptance, remediation, and external consequence.

The object has several minimum fields:

- initiating intent: what business purpose started the work;
- authority boundary: what the work was allowed to do, by whom, under what limit;
- agent role: what the agent drafted, recommended, selected, executed, monitored, or escalated;
- human role: who configured, supervised, approved, accepted, escalated, or remediated;
- tool action: which system, API, database, account, message, payment, code repository, or external service was touched;
- dependency chain: which model, runtime, vendor, cloud, data source, or orchestration layer shaped the work;
- evidence partition: where model, tool, human, vendor, data, project, and incident records are stored and how they can be joined;
- accepted outcome: what counted as done, correct, approved, or business-accepted;
- exception path: what happened when the work exceeded threshold, encountered uncertainty, or failed control checks;
- remediation closure: who fixed, rechecked, reauthorized, and closed the residual risk.

These fields borrow analytical vocabulary from WP1 and WP2, but they are not insurance facts by themselves. WP1 helps name lifecycle objects such as authority boundary, accepted outcome, evidence partition, substitution conformance, and remediation closure. WP2 helps distinguish raw logs from evidence chains. In WP3, those ideas become inputs to insurability reasoning only when tied back to insured subject, policy line, loss event, and claim reconstruction. [20] [21]

This is why model output is insufficient as an insurable object. A model output can be correct while the work is wrong. The output may be applied to the wrong customer, used outside scope, executed by the wrong tool, accepted by a human without full context, or preserved without enough evidence to reconstruct the event. Model-performance products can define valuable and narrower objects, as Part I explained, but agentic lifecycle work requires a broader object.

AI cyber event framing is also insufficient by itself. Cyber coverage may be central when there is unauthorized access, credential abuse, compute theft, API misuse, business interruption, regulatory investigation, or data exposure. But an agentic loss may arise from a validly authorized business action performed through ordinary credentials. QBE's LLMjacking materials are useful because they show how access, usage, API records, containment, and remediation become evidence in a cyber-linked AI incident. They do not convert every agentic workflow loss into cyber risk. [22]

Runtime traces are insufficient for a different reason. A trace can show sequence. It can show a prompt, output, function call, API response, tool invocation, latency, token use, or model endpoint. But a trace often does not show why the work was authorized, which human role had authority, whether the action was business-accepted, whether a vendor substitution changed behavior, which evidence was withheld for privacy, or which policy line is implicated. A trace is an ingredient. It is not the meal.

Workflow completion is also insufficient. Enterprise software loves completed states: ticket closed, refund processed, email sent, pull request merged, alert resolved. Insurance review cares less about whether the workflow completed and more about whether the completed work can be reconstructed as a loss-relevant object. A workflow can complete successfully and still create the wrong legal, financial, professional, cyber, or customer consequence.

The Insurable Agentic Risk Object therefore works as a bridge. It sits between market categories and technical systems. It does not replace a policy. It helps the policy conversation ask better questions.

#### T-04-01 - Insurance Object Shift

| Traditional insurance object | AI governance object | Agentic insufficiency | WP3 proposed risk object | Boundary note |
|---|---|---|---|---|
| Named insured, legal person, policyholder, officer, professional, vendor, or service provider | AI system, model, control, policy, risk register, audit object | Names the actor or system but may not name the loss-generating work | Insurable Agentic Risk Object: bounded lifecycle work unit tied to insured subject and policy-line context | Analytical construct only; not a policy definition |
| Cyber incident, data breach, credential misuse, compute abuse, API misuse | Security event, access log, identity record, trace, cloud bill | May capture unauthorized activity but miss authorized harmful delegation | Authority-bounded tool-action work unit with identity, access, action, and remediation evidence | Does not determine cyber coverage |
| Professional service, advice, deliverable, technology service, product function | Human review, AI-assisted output, model response, workflow completion | May hide who accepted the output and how it became client- or customer-facing | Accepted-outcome work unit with human role, agent role, and external consequence | Does not determine professional liability |
| Governance event, board oversight record, disclosure issue, risk-management failure | AI governance policy, model inventory, control attestation | May show governance posture without reconstructing the specific work | Responsibility-linked work unit connecting oversight, delegation, incident, and remediation records | Does not determine D&O liability |
| Claim file, incident report, notice, loss narrative | Log bundle, audit evidence chain, incident timeline | May collect artifacts without object boundaries | Claim-reconstructable work unit with source pointers and missing-evidence register | Does not approve claims |

The table is intentionally modest. It does not say the WP3 object is insured. It says the object is what must be named before the insurance discussion becomes precise.

The boundary note for this chapter is simple: defining an Insurable Agentic Risk Object is not legal advice, not insurance advice, not underwriting guidance, not a coverage opinion, not certification, not proof of insurability, not insurer endorsement, and not a regulator-approved method. It is an analytical way to keep the insured subject, the work object, and the evidence path from collapsing into one vague phrase.

The next chapter asks what happens when that work object crosses hands. Agentic risk does not stay inside a single model call. It moves across humans, agents, tools, vendors, processors, projects, and remediation owners. The question becomes continuity.

### Chapter 5: Agentic Risk Transfer and Responsibility Continuity

Risk does not transfer just because work moves.

In agentic systems, work moves constantly. A business user gives intent to an agent. The agent decomposes the task. A model generates text or selects a next step. A tool updates a record. A vendor service processes the request. A human approves a summary. A downstream workflow accepts the result. Another team reuses the same component in a different context. A later model substitution changes behavior. A support team remediates the incident. Each transition feels operationally normal.

For insurance analysis, every transition asks a harder question: did responsibility move with the work, or did only activity move?

Handoff is not risk transfer unless the responsibility transfer is evidenced. That does not mean every handoff needs legal ceremony. It means that post-loss reconstruction must be able to show who had authority, who understood the work boundary, who accepted the next state, what evidence moved with the task, and what remained with the prior actor.

Consider a professional services firm using an agent to draft client-facing recommendations. A consultant initiates the work. The agent retrieves prior engagement notes, uses a model to generate a recommendation, calls a document automation tool, and routes a summary for partner approval. The partner approves the summary but does not see the retrieval context or tool-action record. The document goes to the client. The client relies on it. A loss follows.

The firm may say the partner approved the work. The insurer or claims reviewer may ask a different question: approved what? The model output? The summary? The final deliverable? The retrieval context? The tool action? The client-specific suitability? The authority to send? The evidence that exceptions were absent?

That is the responsibility continuity problem.

Tool-action liability is where AI output becomes external consequence. A model can generate a recommendation without changing the world. A tool call can change an account, submit a filing, deploy code, send a payment instruction, issue a customer notice, post content, alter a medical workflow, or update an ERP record. Once the tool acts, the analysis shifts from information generation to external consequence. The risk object must preserve that shift.

Human approval is also not enough unless the human role authority is clear. A human can approve a queue item without owning the whole business decision. A reviewer can verify tone without verifying authority. A manager can approve deployment without seeing sensitive-data treatment. A professional can sign off on output without knowing that a model endpoint was substituted. The phrase "human in the loop" becomes meaningful only when the loop has role, authority, criteria, evidence, and accountability.

Vendor, model, and runtime substitution can break insurability reasoning when responsibility and evidence continuity are lost. A workflow that was reviewed under one model version may run under another. A tool connector may change. A vendor platform may modify logging behavior. A data processor may alter retention settings. A cloud or API dependency may become concentrated across many workflows. Swiss Re's cloud concentration work is useful here as an analogy: visibility into shared dependency matters because correlated infrastructure can affect many insured operations at once. [23]

Cross-project reuse creates another break. The same agentic component may be safe in one business context and risky in another. A refund classifier reused in collections, dispute handling, or compliance review now acts under a different authority scope, different customer impact, different policy line, and different evidence expectation. Reuse without reauthorization is not merely an engineering pattern. It is an exposure multiplier.

Responsibility continuity has five review questions:

1. What work moved?
2. Who or what received it?
3. What authority moved with it?
4. What evidence moved with it?
5. Who owned acceptance, exception, remediation, and closure after the move?

WP1's responsibility object and authority boundary concepts help name those states. WP2's audit evidence chain helps keep records from becoming disconnected artifacts. But again, these are analytical supports, not insurance standards. They help the risk reviewer ask whether continuity exists. They do not determine coverage, liability, claim outcome, or premium. [20] [21]

The responsibility map should include humans, agents, tools, vendors, processors, projects, and remediation owners. It should also include the absence of a responsible role. An empty cell is not a formatting problem. It is a risk signal.

#### T-05-01 - Responsibility Continuity Map

| Lifecycle transition | Insurance-relevant question | Evidence needed | Related MRO | Failure if missing |
|---|---|---|---|---|
| Human intent to agent task | Was the task authorized, bounded, and tied to an insured business activity? | Initiating request, business owner, authority grant, scope limits, timestamp | Authority boundary; responsibility object | The work cannot be tied to a responsible role or policy-line context |
| Agent plan to tool action | Did the agent have permission to execute the external action it selected? | Plan trace, tool permission, policy constraint, API call record, exception threshold | Tool-action evidence; evidence partition | Output is visible but external consequence is not accountable |
| Tool action to business outcome | What changed outside the model environment? | Account update, payment instruction, email, filing, code deployment, customer notice, system state | Accepted outcome; external consequence record | The loss event cannot be separated from ordinary workflow completion |
| Agent/human review to acceptance | What did the human approve, under what criteria, with what evidence? | Review screen, approval criteria, reviewer role, visible evidence, override record | Accepted outcome; human responsibility role | HITL becomes a comfort phrase rather than a responsibility record |
| Vendor/model/runtime substitution | Did a component change preserve authority, evidence, and expected behavior? | Version history, vendor notice, conformance review, regression evidence, reauthorization | Substitution conformance; dependency visibility | Later loss cannot be tied to the correct dependency or version |
| Project reuse to new context | Was the work reauthorized for the new business scope and loss profile? | Reuse approval, changed authority scope, data/context change, policy-line review marker | Cross-project lifecycle; authority boundary | Safe behavior in one context is assumed transferable to another |
| Incident response to remediation closure | Who owned containment, fix, recheck, residual risk, and closure? | Incident timeline, containment action, fix record, retest, owner signoff, residual-risk note | Remediation closure; evidence partition | The enterprise can describe the incident but not show closure |

The map is not a liability allocation chart. It does not say which actor is legally responsible. It says which responsibility questions must be reconstructable if agentic work is to be discussed as a risk-transfer object.

The insurance significance is practical. If responsibility continuity is missing, the insurer, broker, counsel, or risk engineer may not be able to understand the event. The missing record may not be fatal in every policy context, and this paper does not decide that. But missing continuity makes the discussion harder because it turns a bounded work unit back into an undifferentiated AI system.

The boundary note for this chapter: responsibility continuity is not legal liability determination, not insurance advice, not coverage opinion, not underwriting guidance, not certification, not proof of insurability, and not insurer endorsement. It is an evidence architecture for making responsibility questions reviewable.

The next chapter turns from responsibility continuity to evidence. If the work object and responsibility handoffs can be named, what would an insurer, broker, reinsurer, or risk engineer need to review before treating the work as a more understandable risk?

### Chapter 6: Underwriting Evidence Model for Agentic AI

Evidence does not guarantee coverage. Evidence does not guarantee insurability. Evidence does not guarantee a quote, a premium, an endorsement, a claim payment, or a favorable coverage position.

Evidence does something more basic: it makes the risk reviewable.

That distinction matters because enterprises often overestimate their evidence posture. A model inventory is not an underwriting evidence model. A SOC report is not a work-unit inventory. A log store is not a responsibility map. A dashboard showing agent runs is not a claim-reconstructable evidence chain. A policy document saying "human approval required" is not proof that the right human saw the right evidence at the right time.

For agentic AI, underwriting-facing evidence should be separated into four time horizons:

- pre-bind evidence: what the organization can show before coverage discussion or renewal;
- runtime evidence: what the system records while work occurs;
- post-incident evidence: what can be reconstructed after a loss or near miss;
- renewal evidence: what changed after incidents, substitutions, new workflows, or control improvements.

The categories overlap, but they should not be collapsed. Pre-bind evidence tells the reviewer what the enterprise intends and how it governs the work. Runtime evidence shows what actually happened. Post-incident evidence reconstructs event, authority, responsibility, consequence, and remediation. Renewal evidence shows whether the organization learned from experience or simply continued operating.

NIST AI RMF is useful as governance context because it frames AI risk management around governance, mapping, measuring, and managing risk. NAIC's model bulletin is useful because it shows insurance regulators thinking about insurer AI governance, risk management, controls, and third-party oversight. Those sources do not create an underwriting standard for enterprise insureds. They support the more cautious point that AI risk review increasingly requires governance, control, evidence, and third-party visibility. [24] [25]

Underwriting evidence for agentic work should include at least nine categories.

First is authority boundary. What can the agentic workflow do? What can it not do? What transaction value, customer impact, data class, tool permission, or external action requires escalation? Authority without boundaries is difficult to underwrite because the range of possible loss-generating behavior is undefined.

Second is role map. Which human role owns intent, configuration, review, acceptance, escalation, remediation, and closure? Which agent role drafts, recommends, executes, monitors, or escalates? Which vendor or platform role provides model, runtime, data, tool, storage, or logging service?

Third is tool-action record. The risk often becomes external when a tool acts. The evidence model should preserve not only model output, but the action taken: account update, API call, payment instruction, code deployment, customer message, content publication, database change, service ticket, or vendor handoff.

Fourth is evidence partition. The reviewer needs to know where records live and how they connect: model record, prompt/output record, tool record, human approval record, vendor record, privacy/redaction profile, incident record, remediation record, and missing-evidence note.

Fifth is privacy treatment. Agentic evidence can contain customer data, employee data, secrets, regulated data, trade secrets, prompts, source code, credentials, or privileged material. Evidence hoarding is not evidence maturity. A usable model must preserve what is needed while filtering or partitioning sensitive data responsibly.

Sixth is accepted outcome. The model output is not the business outcome. The evidence should show what counted as accepted, completed, delivered, filed, deployed, paid, sent, closed, or escalated.

Seventh is exception history. What thresholds were exceeded? What uncertainty was detected? What overrides occurred? What warnings were ignored? What false positives or false negatives happened? What near misses were recorded?

Eighth is remediation closure. Underwriting discussion may care not only that incidents occurred, but whether they were contained, investigated, fixed, rechecked, reauthorized, and closed. NIST and CISA incident-response sources support the value of preparation, response, recovery, remediation, tracking, and continuous improvement records. [26] [27]

Ninth is substitution conformance. If a model, tool, vendor, runtime, data source, or cloud dependency changes, the evidence should show whether the work remained within the same authority, evidence, privacy, and accepted-outcome boundaries. A silent substitution can make a previously reviewed workflow a different risk object.

Logs and traces appear in several categories, but they are not the category. A trace without authority is sequence without permission. A log without role mapping is activity without responsibility. A runtime dashboard without accepted outcome is motion without business consequence. A tool-call record without remediation history is action without closure.

#### T-06-01 - Underwriting Evidence Request Model

| Evidence category | Insurance relevance | Example evidence artifact | Related MRO | Boundary note |
|---|---|---|---|---|
| Work-unit inventory | Shows what agentic work exists and what business process it touches | Work unit ID, process owner, business function, customer/financial impact flag | MRO object; cross-project lifecycle | Inventory supports review, not coverage readiness |
| Authority boundary | Defines delegated scope and escalation threshold | Permission matrix, transaction limits, tool scope, policy constraints | Authority boundary | Not legal delegation proof |
| Role map | Connects human, agent, corporate, vendor, and remediation roles | RACI, reviewer role, agent role, owner signoff, vendor support role | Responsibility object | Does not determine legal liability |
| Tool-action record | Shows where AI output became external consequence | API call, account update, email, payment, filing, code deployment | Tool-action evidence; accepted outcome | Does not decide policy line |
| Evidence partition | Shows how logs, traces, approvals, vendor records, and privacy-filtered data are joined | Evidence index, source pointers, retention map, redaction profile | Evidence partition | Not a mandatory schema |
| Privacy treatment | Shows evidence can be reviewed without uncontrolled sensitive-data retention | Redaction rules, data-class map, access controls, privilege flags | Evidence partition; privacy profile | Evidence hoarding is not maturity |
| Accepted outcome record | Shows what counted as complete, approved, or business-adopted | Approval criteria, final-state record, reviewer-visible evidence, delivery marker | Accepted outcome | Not legal acceptance or coverage proof |
| Exception history | Shows operational failure patterns, overrides, uncertainty, and near misses | Exception log, override register, incident/near-miss review | Exception path; remediation closure | Not a loss prediction formula |
| Remediation closure | Shows containment, fix, retest, reauthorization, and closure state | Incident timeline, fix record, retest evidence, owner signoff | Remediation closure | Does not prove no residual liability |
| Substitution conformance | Shows component changes preserved evidence and authority boundaries | Model/tool/vendor version change, conformance review, reauthorization | Substitution conformance | Not vendor certification |
| Dependency concentration | Shows shared model, cloud, API, vendor, or orchestration dependency | Dependency map, common service register, cross-workflow exposure list | Dependency visibility | Not actuarial pricing guidance |

This model is useful because it turns "we have AI controls" into reviewable questions. What work? What authority? Which human? Which tool? Which vendor? Which evidence? Which accepted outcome? Which exception? Which closure? Which substitution?

For brokers, the model can help translate enterprise AI operations into risk-review language without promising a policy result. For insurers and reinsurers, it can help separate reviewable work from opaque automation. For CTOs and engineering leaders, it clarifies which records must be designed into the system before loss. For counsel, it keeps evidence architecture separate from legal conclusion.

The boundary note for this chapter: the Underwriting Evidence Model is not underwriting guidance, not an underwriting standard, not a premium recommendation, not actuarial pricing guidance, not coverage opinion, not insurance advice, not certification, not proof of insurability, and not insurer endorsement. It improves reviewability. It does not decide transfer.

The next chapter turns the same evidence model toward loss. When an incident occurs, the question changes from "what would a reviewer need to understand the risk?" to "what can the enterprise reconstruct now?"

### Chapter 7: Claim Evidence Pack for Agentic Incidents

Incident notice is not enough.

An enterprise can notify an insurer, broker, vendor, regulator, customer, or internal executive that an AI-linked incident occurred. That notice may be important. It may be time-sensitive. It may be required by a policy, contract, regulation, or internal process. But the notice itself does not reconstruct the loss.

Agentic AI incidents require a Claim Evidence Pack: an authored analytical construct for organizing the records needed to understand the event. Like the other constructs in this paper, it is not a claims approval method, not a legal proof package, not an audit opinion, not a certification, and not a guarantee that a claim will be accepted.

Its job is to keep the event from dissolving into disconnected artifacts.

Take a small example. An agent incorrectly triggers a refund, sends a customer email, and changes a customer record. The business discovers the issue because a finance reconciliation flags an abnormal pattern. The engineering team retrieves logs. The support team sees the customer emails. The product team sees the workflow configuration. The AI team sees prompts and model outputs. The vendor has a tool-call trace. Counsel asks whether customer notice is required. The broker asks what policy line might be implicated.

Each group has a piece of the event. None has the whole object.

The Claim Evidence Pack should organize those pieces around the work unit:

- work unit ID;
- initiating intent;
- authority boundary;
- agent role;
- human role;
- tool action;
- external consequence;
- affected data;
- evidence chain;
- exception record;
- remediation action;
- closure state;
- privacy/redaction profile.

NIST and CISA sources support the value of structured incident-response processes, timelines, coordination, remediation, recovery, and tracking. QBE's LLMjacking materials show how AI-linked cyber incidents can require access, API, usage, containment, and remediation records. These sources do not define an insurance claim standard. They support the narrower point that reconstruction needs organized evidence, not only technical traces. [22] [26] [27]

The pack should answer six questions.

First: what was the work? This is the work unit ID and scope. A claim file cannot rely on "the AI made a mistake" as the object. It should identify the workflow, transaction, customer segment, project, repository, account, decision, deliverable, or tool action involved.

Second: what authority applied? The pack should show whether the agentic work was inside or outside delegated authority. Did it exceed transaction limits? Did it act on a protected data class? Did it bypass escalation? Did it use a tool permission that was technically available but not authorized for that context?

Third: who or what acted? The pack should separate agent role, human role, vendor role, model/tool role, and corporate owner. It should not assign legal fault. It should identify the roles needed for review.

Fourth: what external consequence occurred? A model output may have no loss by itself. The consequence may be account change, payment, customer message, professional deliverable, code deployment, privacy exposure, regulatory issue, service outage, publication, or other downstream effect.

Fifth: what evidence links the sequence? The pack should connect prompts, outputs, logs, tool calls, approvals, vendor records, data snapshots, exception history, incident timeline, and remediation records. It should also identify missing evidence.

Sixth: what privacy treatment applies? Claim evidence can include sensitive customer data, employee records, proprietary models, privileged communications, source code, security secrets, and vendor confidential information. A useful pack needs redaction, access controls, and source pointers, not uncontrolled data dumping.

#### T-07-01 - Claim Evidence Pack Components

| Component | What it answers | Evidence pointer | Privacy treatment | Boundary note |
|---|---|---|---|---|
| Work unit ID | Which bounded agentic work created or shaped the event? | Workflow ID, run ID, ticket ID, transaction ID, repository or customer/account reference | Use scoped identifiers where possible | Analytical claim object only |
| Initiating intent | Why did the work begin? | User request, system trigger, scheduled job, business instruction | Redact personal data not needed for reconstruction | Does not prove authority |
| Authority boundary | What was the work allowed to do? | Permission matrix, delegated limit, escalation rule, policy constraint | Protect security-sensitive permissions | Not legal delegation proof |
| Agent role | What did the agent draft, select, execute, monitor, or escalate? | Prompt/output trace, plan record, tool call, agent state | Redact prompt content if sensitive while preserving pointer | Not insured legal subject by itself |
| Human role | Who reviewed, approved, accepted, overrode, or remediated? | Role record, approval record, reviewer-visible evidence, escalation note | Consider privilege and personnel data controls | Does not determine liability |
| Tool action | What external system or service changed? | API record, database update, email, payment, code deployment, filing | Mask secrets, credentials, and customer data | Does not determine policy line |
| External consequence | What loss-relevant effect occurred outside the model? | Customer impact, account change, service impact, financial record, notice record | Use data minimization and evidence index | Does not determine loss amount |
| Affected data | What data class was touched? | Data inventory pointer, class label, affected population, retention note | Apply redaction and access control | Not regulatory legal advice |
| Evidence chain | How do records connect across model, tool, human, vendor, and incident systems? | Evidence index, source pointers, timestamps, hash/checksum if used | Preserve source pointers over bulk copying when possible | Not audit opinion or claim approval |
| Exception record | What warning, threshold, override, or failure occurred? | Exception log, override note, near-miss record, alert history | Protect sensitive security/employee details | Does not prove causation |
| Remediation action | What was contained, fixed, rechecked, and reauthorized? | Incident ticket, patch, rollback, model/tool change, retest record | Separate operational secrets from review evidence | Does not prove no residual liability |
| Closure state | Who accepted closure and residual risk? | Owner signoff, closure note, residual-risk entry, follow-up task | Limit distribution of privileged or sensitive notes | Not settlement or claim outcome |

The Claim Evidence Pack should include a missing-evidence register. Missing evidence is not a moral failure; it is a fact that must be visible. The pack should identify which records are absent, stale, overwritten, inaccessible, vendor-controlled, privileged, redacted, or outside retention. That register may be as important as the records that exist because it tells reviewers what cannot be reconstructed.

The pack should also distinguish technical causality from legal causation. A technical sequence can show that an agent called an API before a customer account changed. It cannot, by itself, decide proximate cause, liability, coverage, exclusion, damages, or claim outcome. That boundary protects the paper from pretending that evidence architecture replaces legal and insurance review.

The Claim Evidence Pack is useful before the claim too. If an enterprise designs the pack only after an incident, the most important records may already be missing. The pack is therefore an incident-readiness design pattern as much as a post-loss organizing tool. It asks engineering, risk, legal, and business teams to preserve the records that future review will need.

The boundary note for this chapter: a Claim Evidence Pack is not claims approval guidance, not legal proof, not legal advice, not insurance advice, not a coverage opinion, not certification, not proof of insurability, and not insurer endorsement. It is a structured way to preserve and organize evidence for review.

The next chapter defines the negative space. If the risk object cannot be bounded, the responsibility cannot be traced, the evidence cannot be reconstructed, or remediation cannot be closed, then the agentic work may remain hard to discuss as a transferable risk.

### Chapter 8: Uninsurable or Hard-to-Insure Agentic Risk Patterns

The most useful insurability architecture is honest about what it cannot carry.

This chapter does not declare final insurer positions. It does not say a system is legally uninsurable. It does not create underwriting rules. It identifies risk-readiness patterns that make agentic work difficult to review, difficult to reconstruct, or difficult to discuss as a transferable risk object.

The word "hard-to-insure" is safer than "uninsurable" for most of this discussion because insurance outcomes depend on policy language, market appetite, jurisdiction, insured profile, loss type, limits, exclusions, underwriting judgment, and claim review. Still, some patterns are so weak from an evidence and responsibility perspective that an enterprise should treat them as severe blockers for serious risk-transfer discussion.

The first pattern is fully opaque agentic execution. If the enterprise cannot identify what the agent did, which model or tool it used, which data it touched, or why it selected a path, the risk object is not reviewable. A black box may be commercially convenient, but insurance review needs some path from event to evidence.

The second pattern is no delegated authority boundary. If an agent can draft, decide, execute, message, transact, or deploy without a recorded scope, the range of possible consequences is undefined. The problem is not autonomy by itself. The problem is unbounded autonomy without authority evidence.

The third pattern is no human-role-to-agent-responsibility map. If the enterprise says "a human reviewed it" but cannot show who reviewed what, under what authority, using what criteria, with what visible evidence, the human step may not reduce ambiguity. It may add it.

The fourth pattern is no accepted outcome state. If the enterprise cannot show when an output became an accepted business action, it cannot separate generation from adoption. That matters for customer communications, professional deliverables, payments, filings, code deployments, account changes, and operational decisions.

The fifth pattern is no tool-action liability boundary. The agent may use tools that create external consequence, but the organization has not separated suggestion from action. It cannot tell when text became transaction, when recommendation became instruction, or when internal output became customer-facing effect.

The sixth pattern is broken or non-reconstructable evidence chain. Logs exist, but they are not joined. Traces exist, but they omit human acceptance. Vendor records exist, but are inaccessible. Retention is too short. Privacy controls erased needed pointers. Incident records do not connect to model or tool records. The result is evidence fog.

The seventh pattern is cross-project reuse without reauthorization. A component built for one workflow is reused in another business context with different authority, data, customer impact, policy-line exposure, or dependency concentration. The object looks familiar to engineers but different to risk reviewers.

The eighth pattern is vendor, runtime, or model substitution without conformance review. If the behavior of the work changes because a model endpoint, orchestration layer, tool connector, data source, or vendor platform changes, the enterprise needs evidence that the risk object remained within its approved boundary. Without that evidence, the prior review may not travel.

The ninth pattern is privacy evidence hoarding or uncontrolled sensitive-data trace retention. Insurability reasoning needs evidence, but evidence maturity is not the same as keeping every prompt, customer detail, credential, secret, privileged communication, or employee record forever. A serious evidence model must handle redaction, minimization, access control, privilege, and source pointers.

The tenth pattern is no dispute or remediation closure. The enterprise notices a failure, patches something, and moves on. Months later it cannot show who owned the fix, whether it was retested, whether residual risk was accepted, whether the workflow was reauthorized, or whether the customer impact was closed. The loss may be over operationally, but not reconstructable.

These patterns often appear together. Fully opaque execution tends to create weak evidence chains. Weak evidence chains make human responsibility harder to show. Weak responsibility makes tool-action consequences harder to explain. Tool-action ambiguity makes claim reconstruction harder. Poor remediation closure makes renewal evidence weaker.

#### T-08-01 - Hard-to-Insure Agentic Risk Patterns

| Pattern | Why it is hard to insure | Missing object | Evidence failure | Possible remediation path |
|---|---|---|---|---|
| Fully opaque agentic execution | The reviewer cannot identify what happened or why | Bounded work unit | Missing plan, action, model/tool, and dependency records | Add work-unit IDs, action traces, dependency pointers, and exception capture |
| No delegated authority boundary | The possible loss perimeter is undefined | Authority-bounded task | No permission scope, escalation threshold, or transaction limit | Define authority grants, limits, expirations, and escalation rules |
| No human-role-to-agent-responsibility map | HITL cannot be evaluated as responsibility | Responsibility bridge | Approval record lacks role, criteria, and visible evidence | Map intent, review, acceptance, escalation, remediation, and closure roles |
| No accepted outcome state | The enterprise cannot show when output became business action | Accepted outcome | Completion state is not tied to business acceptance | Record acceptance criteria, reviewer-visible evidence, and final-state marker |
| No tool-action liability boundary | External consequence is not separated from generated output | Tool-action object | API/payment/email/code/account action not linked to authority and outcome | Log tool actions with authority, role, and external consequence pointer |
| Broken evidence chain | Records exist but cannot reconstruct the event | Evidence chain | Logs, traces, approvals, vendor records, and incident records are disconnected | Build evidence index, source pointers, retention map, and missing-evidence register |
| Cross-project reuse without reauthorization | Prior review may not match new scope or loss profile | Reauthorized work object | New project context lacks authority and policy-line review marker | Require reuse review for authority, data, dependency, and external consequence changes |
| Vendor/runtime/model substitution without conformance review | The reviewed object may have changed silently | Substitution-conformant dependency | Version, endpoint, vendor, or tool change lacks reauthorization evidence | Record substitution, regression check, evidence continuity, and owner signoff |
| Privacy evidence hoarding | Evidence creates separate privacy/security/legal exposure | Privacy-filtered evidence object | Excess sensitive trace retention or uncontrolled access | Use redaction, minimization, access control, privilege flags, and source pointers |
| No dispute/remediation closure | The event cannot be closed as a reviewable lifecycle record | Remediation closure | Fix, retest, residual risk, and owner signoff are absent | Create closure checklist, retest record, residual-risk note, and reauthorization marker |

The possible remediation paths in the table are not underwriting requirements. They are engineering, governance, and evidence design moves that can make the risk object more reviewable. Whether any insurer values them, requires them, discounts for them, excludes without them, or accepts them remains external.

This negative space is important because it prevents WP3 from becoming a confidence machine. The paper is not here to say every agentic workflow can be insured if the enterprise fills out the right template. Some work may remain too opaque, too unbounded, too poorly evidenced, too privacy-invasive, too dependent on unreviewable vendors, or too hard to reconstruct.

The point is not pessimism. It is precision. A hard-to-insure pattern is often a design problem that can be surfaced earlier. If an enterprise identifies the missing object before deployment, it may be able to redesign authority, evidence, privacy, responsibility, substitution, and remediation. If it discovers the gap only after a loss, it may have fewer options.

The boundary note for this chapter: the hard-to-insure patterns are an analytical risk-readiness view, not final insurer position, not underwriting rule, not legal advice, not insurance advice, not coverage opinion, not certification, not proof of insurability, not proof of non-insurability, not insurer endorsement, and not regulator-approved method.

Part II has now built the object layer. Part I showed that the market is already splitting AI risk. Part II explains why the object has to be bounded, responsibility-linked, evidence-backed, claim-reconstructable, and honest about negative space. Part III can now return to WP1 and WP2 without confusing them for insurance facts: lifecycle governance and auditability matter because they help create reviewable objects, not because they make systems insurable by themselves.

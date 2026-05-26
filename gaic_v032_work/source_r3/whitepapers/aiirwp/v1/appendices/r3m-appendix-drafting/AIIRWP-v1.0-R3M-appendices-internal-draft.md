# AIIRWP v1.0 R3M Appendices Internal Draft

## Internal Draft Status

This appendix set is an internal draft for WP3 / AIIRWP v1.0. It is reference material for the R3J revised internal body and does not revise that body. It does not create public artifacts, public route changes, public candidate status, final/sealed status, release-ready status, or publication approval.

These appendices preserve the paper's non-claim discipline. They are not legal advice, insurance advice, underwriting guidance, coverage opinion, actuarial pricing guidance, premium recommendation, claim approval guidance, legal liability determination, certification, proof of insurability, insurer endorsement, regulator-approved method, procurement recommendation, vendor ranking, score, standard, readiness certification, insurer-adopted method, or public release claim.

## Appendix A - Agentic Insurability Object Model Reference

### Purpose

Appendix A provides a compact reference version of the Agentic Insurability Object Model introduced in Chapter 24 and supported by Chapters 4, 5, 6, 7, 9, 14, 19, 22, and 23. It is intended to help a reader see the loss-relevant agentic work object as a bounded analytical unit rather than as a general AI system, a raw log set, or a governance program.

This appendix references body tables T-04-01, T-05-01, T-06-01, T-07-01, T-09-01, T-14-01, T-19-01, T-22-01, T-23-01, and T-24-01.

### Reference Object Layers

| Object layer | Field or evidence focus | Body relationship | Reviewability function | Boundary note |
|---|---|---|---|---|
| Insured legal subject | Named entity, business unit, contracting party, or responsible legal person associated with the activity. | Chapters 4 and 5; T-04-01 and T-05-01. | Separates the person or entity whose risk may be reviewed from the technical artifact performing work. | Does not determine legal liability, coverage, or insurer acceptance. |
| Loss-relevant agentic work object | The bounded task, workflow, decision support step, transaction, or operational action in which an agent participates. | Chapters 4, 6, 14, and 24; T-04-01, T-06-01, T-14-01, T-24-01. | Provides the unit around which authority, evidence, consequence, and responsibility can be organized. | Not a policy definition, coverage trigger, or proof of insurability. |
| Initiating intent | Business purpose, user instruction, system objective, or workflow trigger. | Chapters 6, 7, 19; T-06-01, T-07-01, T-19-01. | Helps reconstruct why the agentic work object began and whether later actions stayed inside the intended work unit. | Does not prove authorization, compliance, or proper use by itself. |
| Delegated authority boundary | Permitted action range, approval threshold, escalation rule, tool permission, or blocked action. | Chapters 5, 6, 14, 19; T-05-01, T-06-01, T-14-01, T-19-01. | Shows whether the agentic action can be compared with an explicit boundary rather than inferred after the fact. | Not underwriting guidance, legal advice, or claim approval guidance. |
| Agent role | The agent's assigned function, autonomy level, tool access, and workflow position. | Chapters 4, 6, 14, 24; T-04-01, T-06-01, T-14-01, T-24-01. | Identifies what the agent was expected to do and which actions were within the modeled work object. | Does not classify the agent as insurable or uninsurable. |
| Human role | Human initiator, reviewer, approver, override actor, escalation recipient, or post-loss reviewer. | Chapters 5, 7, 19; T-05-01, T-07-01, T-19-01. | Preserves responsibility continuity between automated action and human governance. | Does not decide negligence, liability, employment responsibility, or claims outcome. |
| Vendor/runtime/model context | Model, tool, agent framework, cloud service, API, version, runtime configuration, or vendor-held dependency relevant to the work object. | Chapters 12, 14, 17, 23; T-12-01, T-14-01, T-17-01, T-23-01. | Makes dependency, substitution, concentration, and version-change questions visible. | Does not endorse or rank any vendor, model, or platform. |
| Tool-action consequence | External command, transaction, data movement, message, system change, or operational effect. | Chapters 6, 7, 19, 24; T-06-01, T-07-01, T-19-01, T-24-01. | Connects agentic behavior to potential loss, dispute, remediation, or renewal review. | Does not prove causation, damages, coverage, or claim payment entitlement. |
| Evidence chain | Pointers to logs, approvals, prompts, tool-call records, exception records, human review, and remediation evidence. | Chapters 7, 10, 14, 19; T-07-01, T-10-01, T-14-01, T-19-01. | Supports reconstruction of the work unit without treating raw traces as sufficient evidence. | Evidence improves reviewability; it is not insurance or audit proof by itself. |
| Privacy/selective disclosure profile | Redaction, minimization, retention, privileged data, sensitive data, and disclosure-control posture. | Chapters 13, 14, 18; T-13-01, T-14-01, T-18-01. | Allows evidence review to be framed without assuming unlimited disclosure or over-retention. | Not privacy legal advice, disclosure advice, or regulator-approved method. |
| Dependency/substitution context | Third-party service, model replacement, API dependency, fallback path, or substitution record. | Chapters 12, 17, 23; T-12-01, T-17-01, T-23-01. | Helps explain whether a change in the operating environment changed the reviewed risk object. | Does not establish aggregation pricing, reinsurance treatment, or policy response. |
| Accepted outcome | Expected output, completion criterion, authorized result, or business acceptance condition. | Chapters 4, 5, 9, 24; T-04-01, T-05-01, T-09-01, T-24-01. | Provides a reference point for deciding whether an incident involved deviation, incomplete work, or disputed completion. | Does not certify quality, compliance, or claim validity. |
| Exception/dispute/remediation state | Incident status, exception type, dispute posture, remediation step, closure evidence, or residual gap. | Chapters 19, 20, 22, 23; T-19-01, T-20-01, T-22-01, T-23-01. | Connects post-loss evidence to the original work object and later review. | Does not settle a dispute, prove no residual liability, or decide coverage. |
| Renewal/change feedback | Evidence of control changes, reauthorization, substitution, recurring gaps, or revised operating assumptions. | Chapters 17 and 23; T-17-01 and T-23-01. | Makes claims-to-renewal learning visible without converting it into pricing or acceptance. | Not actuarial pricing guidance, premium recommendation, or renewal instruction. |

### Minimal Object Card

An appendix-level object card may later summarize the object model in a shorter form:

| Card field | Prompt for internal use | Boundary note |
|---|---|---|
| Work object | What bounded agentic work unit is being reviewed? | Not a coverage trigger. |
| Responsible subject | Which legal subject or business owner is connected to the work unit? | Not a liability determination. |
| Authority | What was the agent allowed and not allowed to do? | Not underwriting guidance. |
| Evidence | Which evidence pointers reconstruct intent, action, review, and consequence? | Not proof of claim approval. |
| Consequence | What external action, loss, dispute, or remediation issue made the work object loss-relevant? | Not causation proof. |
| Boundary | Which privacy, dependency, substitution, or dispute limits affect review? | Not legal or insurance advice. |
| Feedback | What should be visible for later renewal/change review? | Not pricing or renewal guidance. |

### Boundary Note

Appendix A is an authored analytical model only. It is not a policy definition, coverage trigger, underwriting standard, certification, proof of insurability, insurer endorsement, regulator approval, or insurer-adopted method.

## Appendix B - Non-Scoring Agentic Insurability Reasoning Model

### Purpose

Appendix B provides a compact reference version of the non-scoring Agentic Insurability Reasoning Model from Chapter 25. It supports Chapters 8, 10, 13, 14, 18, 21, 23, and 24 by describing reviewability states without ranking, scoring, certifying, or predicting an insurance outcome.

This appendix references body tables T-08-01, T-10-01, T-13-01, T-14-01, T-18-01, T-21-01, T-23-01, T-24-01, and T-25-01.

### Non-Scoring Reasoning States

| Reasoning state | What exists | What remains missing | Reviewability implication | What it does not prove |
|---|---|---|---|---|
| Opaque / not reconstructable | AI use is known or suspected, but the work unit, authority, action, evidence, and consequence are not reconstructable. | Bounded work object, role map, tool-action record, evidence chain, exception state, and privacy-aware disclosure plan. | Risk discussion remains vague because the reviewer cannot locate what acted, who was responsible, or what evidence exists. | Does not prove uninsurability, policy exclusion, legal liability, or claim denial. |
| Log-visible but responsibility-poor | Logs, traces, prompts, tickets, or system records exist. | Responsibility continuity, authority boundary, accepted outcome, human role, and consequence mapping. | Technical visibility improves but still does not explain who owned the work or whether action stayed inside authority. | Logs alone do not prove auditability, insurability, liability, coverage, or claim approval. |
| Evidence-linked but boundary-incomplete | Evidence pointers can connect intent, action, and outcome for selected work units. | Complete authority boundaries, privacy treatment, dependency context, substitution record, and dispute/remediation state. | A reviewer can begin reconstruction, but the risk object may still be too boundary-poor for serious insurance-facing discussion. | Does not create a coverage path, underwriting rule, or readiness certification. |
| Reviewable work-unit architecture | Work units, responsible subjects, authority, evidence, privacy controls, and accepted outcomes are organized. | Insurance-facing aggregation, renewal/change feedback, post-loss evidence handling, and external source caveats. | The enterprise can discuss agentic risk as bounded work rather than generic AI use. | Does not guarantee insurability, premium effect, insurer acceptance, or claim outcome. |
| Underwriting-facing evidence architecture | Evidence requests, exposure inventory, authority maps, privacy/redaction profiles, dependency maps, and change registers can be presented for review. | Actual insurer appetite, policy terms, exclusions, sublimits, endorsements, jurisdictional facts, and final underwriting judgment. | Risk is more legible for a reviewer without turning the paper into an underwriting standard. | Does not bind an insurer, create underwriting guidance, or imply coverage-ready status. |
| Post-loss reconstructable and renewal-updatable | Claim reconstruction, dispute gaps, remediation closure, and claims-to-renewal feedback can be tied back to the work object. | Legal determination, coverage determination, claim handling judgment, settlement posture, actuarial pricing, and future market response. | The evidence environment can support post-loss analysis and future change review. | Does not approve claims, prove liability, determine coverage, or set renewal terms. |

### Use Notes

- The states are descriptive, not hierarchical grades.
- Movement between states is analytical, not a pass/fail path.
- A higher reviewability state means more reconstructable evidence, not guaranteed insurability.
- Source refs `[1]` through `[62]` remain preserved in the body; this appendix does not add new external claims.

### Boundary Note

Appendix B is non-scoring. The reasoning states describe reviewability, not insurance outcomes. They are not a score, grade, benchmark, rating model, maturity score, pass/fail certification, readiness certification, insurer appetite statement, underwriting rule, coverage path, or insurer-adopted method.

## Appendix C - Underwriting-Facing Evidence Request Structure

### Purpose

Appendix C provides an optional analytical structure for evidence a reviewer might ask to see when discussing agentic AI risk. It supports Chapters 6, 14, 15, 16, 17, and 18 and references T-06-01, T-14-01, T-15-01, T-16-01, T-17-01, and T-18-01.

This appendix is deliberately framed as an optional request structure, not as a checklist or condition for insurance.

### Optional Evidence Request Categories

| Category | Example request | Purpose | Sensitive boundary | Non-claim note |
|---|---|---|---|---|
| Work-unit inventory | Identify the recurring agentic work units that can create external consequences. | Separates general AI use from loss-relevant work. | Avoid collecting more operational detail than review requires. | Not a procurement requirement or underwriting checklist. |
| Authority and role map | Show the permitted action range, escalation rule, human role, and agent role for selected work units. | Connects delegated authority to responsibility continuity. | Role evidence may include privileged, employment, or sensitive governance context. | Not a legal liability determination or insurer acceptance condition. |
| High-impact work-unit list | Identify work units that affect payments, customer communications, regulated decisions, production systems, data movement, or external commitments. | Focuses review on work likely to matter for loss, dispute, or dependency analysis. | Avoid implying that unlisted work units are risk-free. | Not a coverage-ready or underwriting-ready label. |
| Tool-action sample | Provide selected examples of tool calls, system changes, messages, transactions, or external actions. | Shows whether the agent could create consequences outside model output. | Samples may contain customer, employee, security, or confidential business data. | Not proof of causation, claim approval, or claim payment support. |
| Evidence chain sample | Provide pointers to intent, approval, tool action, exception, human review, remediation, and closure evidence. | Tests whether the work unit can be reconstructed. | Use pointers and redaction rather than unnecessary bulk disclosure. | Evidence improves reviewability only. |
| Privacy/redaction profile | Explain how sensitive evidence is minimized, redacted, retained, or selectively disclosed. | Keeps reviewability separate from over-collection. | Privacy, privilege, retention, and disclosure issues remain external. | Not privacy legal advice or regulator-approved treatment. |
| Incident/near-miss history | Summarize relevant incidents, near misses, exceptions, escalations, and disputed outcomes. | Helps distinguish theoretical AI risk from observed operational patterns. | Incident records may require legal, privacy, HR, customer, or security review. | Not a claim demand or admission. |
| Remediation closure examples | Show how selected incidents were remediated, reauthorized, or closed with residual gaps noted. | Connects post-loss learning to future review. | Closure language should avoid overclaiming no residual risk or no liability. | Not settlement guidance or proof of no residual liability. |
| Substitution/change register | Identify model, tool, vendor, API, runtime, prompt, workflow, or permission changes that affect reviewed work units. | Makes renewal/change review possible. | Vendor and security details may require minimization. | Not renewal guidance, pricing guidance, or binding condition. |
| Dependency map | Map cloud, API, model, data, vendor, or runtime dependencies for selected work units. | Supports aggregation, concentration, and operational dependency review. | Dependency maps may expose security or commercial sensitivities. | Not reinsurance guidance or vendor ranking. |
| Missing evidence register | Identify known gaps, unavailable records, vendor-held logs, expired retention, or redacted evidence without pointers. | Makes uncertainty explicit rather than hiding it. | Some gaps may reflect legitimate minimization or privilege decisions. | Not claim denial support or underwriting rejection guidance. |

### Boundary Note

Appendix C is an optional analytical request structure only. It is not an underwriting checklist, claim demand, procurement requirement, certification checklist, premium-credit path, binding condition, insurer acceptance statement, mandatory coverage requirement, or insurer-adopted method.

## Appendix D - Claim Reconstruction and Evidence Gap Register

### Purpose

Appendix D provides a reference structure for organizing post-loss reconstruction and evidence gaps. It supports Chapters 7, 10, 19, 20, 22, and 23 and references T-07-01, T-10-01, T-19-01, T-20-01, T-22-01, and T-23-01.

The register is designed to make evidence questions visible after an agentic AI incident. It does not decide legal liability, coverage, settlement, claim payment, or claim approval.

### Claim Reconstruction Fields

| Field | What to capture | Why it matters | Boundary note |
|---|---|---|---|
| Work unit ID | Identifier for the bounded agentic work object involved in the incident. | Prevents the claim discussion from collapsing into generic AI use. | Not a policy definition or coverage trigger. |
| Initiating intent | User instruction, system objective, workflow trigger, or business purpose. | Helps reconstruct why the agentic work started. | Does not prove authorization or proper use. |
| Authority boundary | Permission, threshold, escalation rule, blocked action, or delegated authority scope. | Shows what the agent was allowed to do. | Not legal liability proof or underwriting guidance. |
| Agent role | Assigned agent function, autonomy level, and tool access. | Connects the agent's role to later action. | Does not prove insurability or claim outcome. |
| Human role | Initiator, reviewer, approver, override actor, escalation recipient, or post-loss reviewer. | Preserves responsibility continuity. | Does not determine negligence or liability. |
| Tool action | Tool call, message, transaction, system change, data access, or external command. | Connects the agentic work to possible consequence. | Does not prove causation or damages by itself. |
| External consequence | Customer, system, financial, operational, regulatory, security, or third-party effect. | Identifies why the work unit became loss-relevant. | Does not decide coverage or claim value. |
| Affected data | Data, records, credentials, customer information, intellectual property, or business process affected. | Supports privacy, evidence, and impact review. | Not privacy legal advice. |
| Evidence chain pointer | Location of relevant approvals, logs, prompts, tool records, reviews, exceptions, and remediation records. | Supports reconstruction without requiring all evidence in one place. | Evidence pointers are not claim approval guidance. |
| Exception record | Escalation, anomaly, override, control break, or disputed action. | Shows where the normal work-unit path changed. | Does not prove fault. |
| Remediation action | Containment, correction, reauthorization, rollback, notice, user communication, or control change. | Connects post-loss response to the original work object. | Not settlement guidance or proof of no residual liability. |
| Closure state | Open, remediated, reauthorized, monitored, disputed, incomplete, or unresolved. | Makes residual uncertainty explicit. | Does not close legal, claim, or coverage questions. |
| Missing evidence | Unavailable, expired, vendor-held, privileged, redacted, or not collected evidence. | Prevents silent gaps from being mistaken for proof. | Missing evidence is not automatic claim denial support. |
| Privacy/redaction treatment | Redaction basis, minimization method, disclosure pointer, or protected category. | Balances reviewability with sensitive evidence handling. | Not privacy legal advice or disclosure instruction. |

### Evidence Gap Register

| Evidence gap | Typical issue | Reviewability effect | Boundary note |
|---|---|---|---|
| Missing authority record | No clear record of what the agent was allowed to do. | Weakens responsibility and boundary reconstruction. | Does not prove liability or coverage position. |
| Missing approval context | Human approval exists but lacks purpose, timing, or scope. | Makes it difficult to connect human review to agent action. | Not claim approval guidance. |
| Missing tool-action record | External action is known, but tool-call detail is absent. | Breaks the link between agentic work and consequence. | Does not itself decide causation. |
| Vendor-held logs | Relevant records are controlled by a provider or platform. | Creates dependency and disclosure friction. | Not vendor ranking or procurement advice. |
| Expired retention | Records existed but were overwritten or aged out. | Creates a reconstruction gap. | Not retention legal advice. |
| Redacted evidence without pointer | Information is withheld or redacted but no substitute pointer exists. | Preserves privacy but may weaken reviewability. | Not a privacy compliance conclusion. |
| Missing version/substitution record | Model, prompt, tool, API, or workflow changed without traceable record. | Makes recurrence and renewal review harder. | Not renewal or pricing guidance. |
| Unclear remediation closure | Response occurred but closure state or residual gap is unclear. | Leaves post-loss responsibility and future review unresolved. | Not settlement or no-liability proof. |

### Boundary Note

Appendix D organizes reconstruction evidence. It does not provide claim approval guidance, legal liability proof, settlement guidance, coverage determination, legal causation determination, claim payment support, insurer endorsement, or insurer-adopted method.

## Appendix E - Coverage Boundary Question Map

### Purpose

Appendix E maps recurring coverage-boundary questions that agentic AI incidents can raise. It supports Chapters 3, 7, 11, 19, 20, and 21 and references T-07-01, T-11-01, T-19-01, T-20-01, and T-21-01.

The purpose is to preserve questions, not answer them. Policy wording, facts, jurisdiction, notice, exclusions, limits, sublimits, deductibles, causation, loss category, and claim handling remain external to this paper.

### Coverage-Boundary Question Categories

| Category | Agentic fact pattern | Evidence needed | Why ambiguous | External decision note |
|---|---|---|---|---|
| Cyber vs authorized operational misuse | An agent uses valid credentials or permitted tools in a harmful but not obviously unauthorized way. | Authority boundary, credential context, tool-action record, human role, external consequence. | The event may look operational, cyber, insider-like, or control-failure-like depending on policy wording and facts. | Coverage analysis belongs to policy, facts, claim handling, and applicable law. |
| Tech E&O vs professional liability | Agentic output or workflow action harms a client, customer, or third party in a service context. | Work unit, service obligation, accepted outcome, review record, human role, customer effect. | The boundary between technology service failure and professional service error may be fact-sensitive. | This map does not interpret policy forms or assign coverage. |
| Product vs service | Agentic capability is embedded in a product, platform, API, or managed service. | Product/service description, deployment context, user control, vendor/runtime context, consequence. | The loss may be framed as product defect, service failure, operational negligence, or contractual performance issue. | Product and service characterization remains external. |
| D&O/governance vs operational failure | Board or executive governance decisions are challenged after an agentic AI incident. | Governance record, authority delegation, risk reporting, oversight evidence, incident record. | Governance allegations may overlap with operational control failures without being the same risk object. | This appendix does not determine director/officer liability or policy response. |
| Crime/social engineering vs cyber | Agentic workflow is used in deceptive payment, identity, invoice, or communication events. | Instruction path, human approval, payment flow, tool-action record, fraud indicators, exception record. | Loss may involve deception, authorized transfer, unauthorized access, or social engineering depending on policy terms. | Claim handling and policy wording remain external. |
| Media/IP vs generated content workflow | Generated content or agent-assisted publication triggers IP, media, defamation, or content dispute. | Prompt/objective record, source material, human review, publication path, takedown/remediation record. | The event may involve content creation, publication, vendor tool use, human review, and rights questions. | This appendix does not provide IP or media-liability advice. |
| Business interruption/property vs cloud/API/service interruption | Agentic workflow fails because a cloud, model, API, or service dependency is unavailable or degraded. | Dependency map, outage record, affected work unit, fallback path, business process impact. | The boundary between technology dependency, business interruption, cyber event, and operational outage can be policy-specific. | Loss category and policy response remain external. |
| Privacy/regulatory investigation vs operational event | Agentic system accesses, discloses, transforms, or retains sensitive data in a disputed way. | Affected data, authority, tool-action record, privacy/redaction profile, notice/investigation record. | The event may be framed as privacy incident, regulatory issue, cyber event, professional failure, or operational control problem. | Privacy, regulatory, and coverage conclusions remain external. |

### Boundary Note

Appendix E frames coverage-boundary questions only. It is not a coverage opinion, legal advice, policy interpretation, exclusion application, sublimit application, claim handling instruction, or insurer-adopted method.

## Appendix F - Source and Claim Boundary Notes

### Purpose

Appendix F consolidates source-use and claim-boundary notes for the appendices and the R3J revised body. It supports Front Matter and Chapters 1-28.

The R3J revised body preserves source refs `[1]` through `[62]`. This appendix does not create new source IDs, add unsupported external factual claims, or use rejected v0.2 as source truth.

### Source Group Notes

| Source group | How it is used | Caveat to preserve |
|---|---|---|
| Market/context sources | Used to ground the observation that AI risk transfer is already being discussed through market products, exclusions, sublimits, warranties, governance expectations, and silent exposure concerns. | Market/context sources are not proof of market-wide acceptance, insurer endorsement, policy availability, or universal coverage treatment. |
| Product examples | Used to illustrate that AI-related cover, warranty, or risk-transfer signals exist in the market. | Product examples do not prove agentic lifecycle coverage, policy response, claim outcome, or adoption of the paper's models. |
| Governance and incident-response sources | Used to support evidence architecture, lifecycle controls, remediation, and reconstruction concepts. | Governance and incident-response sources do not become insurance advice, underwriting standards, or claim handling guidance. |
| Cyber/cloud/reinsurance analogies | Used to reason by analogy about aggregation, concentration, dependency, incident evidence, and reviewability. | Analogies remain analogies unless directly tied to AI or agentic AI by the cited source. |
| Regulatory/legal context | Used to understand the external environment in which AI governance, privacy, liability, and insurance questions may arise. | These sources do not create legal advice, coverage opinion, legal authority, or regulator approval of the paper. |
| WP1/WP2 foundations | Used as internal analytical foundations for lifecycle governance, Missing Regulatory Objects, auditability, Audit Evidence Chain, Agentic Audit Object, and related concepts. | WP1/WP2 are analytical foundations only; they do not prove insurability, coverage, or claim approval. |
| Author synthesis | Used when the paper combines source-supported context with authored analytical models such as AIO/AIRM-style constructs. | Author synthesis must remain labeled as analytical construction, not external standard, score, certification, insurer-adopted method, or market fact. |

### Rejected v0.2 Exclusion

The rejected v0.2 candidate remains archived for traceability only. It is not current source truth and is not a citation source for this appendix set.

### Unresolved Source Gaps

The following gaps remain strengthening opportunities, not blockers for the R3M appendix draft:

- exact exclusion/sublimit primary wording;
- insurer claim documentation;
- AI underwriting questionnaires.

If a later wave adds insurer-specific, claims-handling, regulatory, reinsurance, broker, or vendor-specific factual claims beyond the current body, those claims should be source-backed or explicitly marked as author inference.

### Boundary Note

Appendix F supports traceability and caveat discipline. It does not convert sources into legal, insurance, underwriting, actuarial, claim, regulator, or market conclusions. It does not imply legal authority, insurer endorsement, regulator approval, market-wide acceptance, policy wording proof, or source support beyond actual source scope.

## Appendix G - Final Non-Claim Language Register

### Purpose

Appendix G provides a consolidated non-claim language register for future QA and drafting control. It supports Front Matter and Chapters 6, 7, 16, 18, 19, 21, 24, 25, 27, and 28, and it references T-27-01.

This appendix is a publication guardrail only. It is not legal advice.

### Restricted Claim Register

| Restricted claim | Why it matters | Safer language | Where to preserve |
|---|---|---|---|
| Legal advice | Legal conclusions depend on facts, jurisdiction, counsel, and applicable law. | legal context; legal question; counsel-reviewed issue; external legal determination | Front Matter, Chapters 21 and 27, Appendix E. |
| Insurance advice | Insurance decisions depend on broker, insurer, policy wording, facts, and appetite. | insurance-facing reasoning; risk-transfer discussion; reviewer question | Front Matter, Chapters 1, 6, 18, 27. |
| Underwriting guidance | Underwriting decisions remain external to the paper. | underwriting-facing evidence architecture; reviewer-facing evidence; risk review question | Chapters 6, 14, 18, Appendix C. |
| Coverage opinion | Coverage depends on policy wording, facts, law, claim handling, exclusions, limits, sublimits, and notice. | coverage-boundary question; coverage ambiguity; external coverage analysis | Chapters 11 and 21, Appendix E. |
| Actuarial pricing guidance | Pricing requires actuarial data, assumptions, insurer practice, and regulatory context. | non-pricing exposure variable; pricing-relevant question; exposure signal | Chapter 16, Appendix C. |
| Premium recommendation | Premiums are insurer and market decisions. | premium-sensitive factor; pricing-relevant exposure; non-pricing discussion | Chapter 16. |
| Claim approval guidance | Claim handling is external and fact-specific. | claim reconstruction; evidence gap; post-loss reviewability | Chapters 7, 19, 20, Appendix D. |
| Legal liability determination | Liability depends on facts, law, contracts, duties, causation, and adjudication or settlement. | responsibility continuity; liability question; legal determination remains external | Chapters 5, 19, 20, 22. |
| Certification | Certification implies an external attestation not created by the paper. | internal reference; authored analytical model; reviewability construct | Chapters 24 and 25, Appendices A and B. |
| Proof of insurability | Insurability depends on insurer judgment, policy terms, market appetite, and facts. | improves reviewability; makes risk more legible; supports discussion | Chapters 24, 25, 28. |
| Insurer endorsement | The paper's models are not adopted or endorsed by insurers. | insurer-facing; reviewer-facing; market context | Front Matter, Appendices A, F. |
| Regulator-approved method | No regulator approval is claimed. | regulatory context; governance context; external regulatory question | Chapters 13 and 27, Appendix F. |
| Procurement recommendation | Vendor and procurement choices are outside scope. | dependency context; vendor/runtime context; source caveat | Chapters 12, 17, Appendices A, F. |
| Vendor ranking | The paper does not compare vendors or tools. | vendor/runtime context; dependency visibility | Chapters 12, 17, Appendix A. |
| Score | Scores imply numeric evaluation or ranking. | non-scoring reasoning state; reviewability state | Chapter 25, Appendix B. |
| Standard | Standards imply normative external requirements. | reference model; analytical construct; optional structure | Chapters 18, 24, 25, Appendices A-C. |
| Readiness certification | Readiness language can imply external acceptance. | reviewability; internal preparedness for discussion; evidence architecture | Chapter 25, Appendix B. |
| Insurer-adopted method | Adoption requires evidence outside the paper. | authored analytical model; not insurer-adopted | Chapters 24, 25, Appendices A and B. |
| Public release | Release requires later authorization. | internal draft; future workflow; not public artifact | Front Matter, README/governance files. |
| Public candidate | Candidate status requires later authorization. | internal appendix draft; internal revision package | README/governance files. |
| Final/sealed status | Final Seal requires separate owner authorization. | internal draft; subject to QA | README/governance files. |
| Release-ready status | Artifact and public readiness require later planning, QA, and owner decision. | not release-ready; artifact generation blocked | README/governance files. |

### Boundary Note

Appendix G is a drafting and publication guardrail only. It is not legal advice, insurance advice, underwriting guidance, coverage opinion, claim handling guidance, regulator-approved language, certification language, or release authorization.

## Appendix H - Table Inventory and Layout Risk Register

### Purpose

Appendix H inventories body tables and flags future layout risk before any artifact planning. It supports Chapters 2 and 4-27 and references T-02-01 and T-04-01 through T-27-01.

This appendix does not implement HTML, PDF, CSS, DOCX, manifest, checksum, public artifact, public route change, or visual acceptance.

### Table Inventory

| Table ID | Chapter | Title | Appendix posture | Wide-table risk flag | Future artifact note |
|---|---:|---|---|---|---|
| T-02-01 | 2 | AI Insurance Split-Market Signal Matrix | Appendix-summary candidate; source caveat support. | Yes | May need responsive/abbreviated treatment later. |
| T-04-01 | 4 | Insurance Object Shift | Body-only; Appendix A reference support. | No | Keep body version unless later layout QA requires change. |
| T-05-01 | 5 | Responsibility Continuity Map | Body-only; Appendix A reference support. | No | Keep body version. |
| T-06-01 | 6 | Underwriting Evidence Request Model | Body-only; Appendix C reference support. | No | Keep body version; avoid checklist framing. |
| T-07-01 | 7 | Claim Evidence Pack Components | Body-only; Appendix D reference support. | No | Keep body version; preserve claim-approval boundary. |
| T-08-01 | 8 | Hard-to-Insure Agentic Risk Patterns | Body-only; Appendix B reference support. | No | Keep body version; avoid uninsurability overclaim. |
| T-09-01 | 9 | MRO-to-Insurability Translation Map | Appendix-summary candidate; Appendix A/B reference support. | Yes | May need shortened body version or appendix parity QA later. |
| T-10-01 | 10 | Auditability-to-Claim-Reconstruction Crosswalk | Body-only; Appendix D reference support. | No | Preserve auditability/insurability distinction. |
| T-11-01 | 11 | Insurance Line Ambiguity Map | Body-only; Appendix E reference support. | No | Preserve coverage-opinion boundary. |
| T-12-01 | 12 | Agentic Aggregation Risk Map | Body-only; Appendix F source caveat support. | No | Keep analogy caveats visible. |
| T-13-01 | 13 | Insurance Evidence vs Privacy Control Map | Body-only; Appendix C/F reference support. | No | Preserve privacy/selective disclosure boundary. |
| T-14-01 | 14 | Underwriting Evidence Architecture Components | Appendix-summary candidate; Appendix C/H reference support. | Yes | May need responsive or appendix-detailed treatment later. |
| T-15-01 | 15 | Agentic Exposure Inventory Template | Body-only; Appendix C reference support. | No | Preserve non-certification posture. |
| T-16-01 | 16 | Non-Pricing Exposure Variables | Body-only; Appendix C/G boundary support. | No | Preserve no-pricing/no-premium boundary. |
| T-17-01 | 17 | Renewal and Change Evidence Register | Body-only; Appendix C reference support. | No | Preserve no-renewal-instruction boundary. |
| T-18-01 | 18 | Optional Reviewer Evidence Request Structure | Appendix-summary candidate; Appendix C/H reference support. | Yes | May need body/appendix split later; avoid checklist framing. |
| T-19-01 | 19 | Agentic Claim Reconstruction Map | Body-only; Appendix D reference support. | No | Preserve no-claim-approval boundary. |
| T-20-01 | 20 | Dispute and Evidence Gap Register | Body-only; Appendix D reference support. | No | Keep dispute/evidence-gap framing. |
| T-21-01 | 21 | Coverage Boundary Question Map | Appendix-summary candidate; Appendix E/H reference support. | Yes | May need careful PDF/HTML treatment later; no coverage opinion. |
| T-22-01 | 22 | Post-Loss Remediation Evidence Map | Body-only; Appendix D reference support. | No | Preserve no-settlement/no-liability-proof boundary. |
| T-23-01 | 23 | Claims-to-Renewal Feedback Loop | Body-only; Appendix A-D reference support. | No | Preserve no-pricing/no-renewal-outcome boundary. |
| T-24-01 | 24 | Agentic Insurability Object Model | Body-only; Appendix A reference support. | No | Preserve authored analytical model framing. |
| T-25-01 | 25 | Non-Scoring Insurability Reasoning Model | Body-only; Appendix B reference support. | No | Preserve non-scoring framing. |
| T-26-01 | 26 | Audience Takeaway Matrix | Body-only; Appendix F/G support. | No | Keep audience implications non-advisory. |
| T-27-01 | 27 | Final Non-Claim Boundary Register | Appendix-summary candidate; Appendix G/H reference support. | Yes | May need future layout treatment; do not weaken caveats. |

### Wide-Table Risk List

The tables currently carried forward as wide-table risks are:

- T-02-01;
- T-09-01;
- T-14-01;
- T-18-01;
- T-21-01;
- T-27-01.

### Future Artifact Note

Future artifact planning may consider responsive HTML wrappers, shorter body tables with appendix detail, PDF landscape treatment, table footnote compression, or body-to-appendix parity QA. None of those treatments is implemented in R3M.

### Boundary Note

Appendix H is layout risk planning only. It does not create artifact generation, layout implementation, publication readiness, final PDF readiness, visual acceptance, HTML readiness, DOCX readiness, manifest creation, checksum creation, public artifact status, or public route change.

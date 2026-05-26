# AIIRWP v1.0 R3D - Part IV Body Draft

**Draft Scope:** Part IV only.

## Part IV: Underwriting-Facing Architecture for Agentic AI Risk

Part IV moves from translation to architecture.

Part I showed that the insurance market is already splitting AI risk across affirmative cover, exclusions, sublimits, silent exposure, model-performance products, cyber-linked exposure, and unresolved lifecycle gaps. Part II defined the Insurable Agentic Risk Object as a bounded analytical object, not the insured legal subject. Part III translated WP1 and WP2 into insurability reasoning without treating governance or auditability as insurance proof.

The next question is practical: what would an enterprise need to organize if it wanted agentic AI risk to be reviewable by a broker, risk engineer, underwriter, reinsurer, counsel, or internal risk team?

The answer is not a checklist that guarantees coverage. It is not an underwriting standard. It is not a rating model. It is not a certification path. It is not a premium-reduction playbook. It is an underwriting-facing architecture: a way to organize exposure, evidence, change, and review questions around bounded agentic work units.

The phrase "underwriting-facing" is deliberate. It means the architecture is useful for a risk-transfer discussion. It does not mean an insurer requires it, accepts it, discounts for it, or treats it as sufficient. Evidence can make the risk more legible. It cannot by itself make the risk covered, insurable, priced, or accepted.

### Chapter 14: Underwriting Evidence Architecture

An enterprise can have a mature AI program and still be difficult to review from an insurance perspective.

It may have a model inventory, AI policy, model-risk committee, vendor list, security controls, incident process, privacy review, and logging system. Those are useful. But when a broker or risk engineer asks what the enterprise is actually trying to transfer, the answer may still be too broad: "We use AI in customer operations," "We use agents in engineering," or "We have governance controls for generative AI."

Underwriting-facing review needs something more exact. It needs evidence organized around bounded agentic work units.

Picture a mid-sized software company preparing for renewal. It has an AI coding assistant, a customer-support response agent, a finance reconciliation agent, and a sales proposal generator. The risk team can name the vendors and models, but it cannot say which work units can send external messages, which can update customer records, which can touch production code, which data classes are involved, which human role accepts the outcome, which tool actions are logged, which model/runtime changes occurred during the period, or which incidents were remediated and closed. The company has AI governance. It does not yet have underwriting-facing evidence architecture.

The architecture should begin with the work-unit inventory. The reviewer needs to know which bounded agentic work exists, not only which AI applications or models exist. A work unit may be a refund workflow, code-deployment assistant, claims triage process, contract review support workflow, customer message generator, invoice matching agent, procurement agent, or regulatory filing assistant. The work unit connects business function, authority, tool action, data, human role, vendor dependency, evidence, and consequence.

Authority boundaries come next. A draft-only agent creates a different review question from an agent that can approve, send, transact, deploy, delete, transfer, or update records. The boundary should show what the agentic work is allowed to do, what requires confirmation, what is prohibited, what thresholds apply, and where escalation occurs.

Role maps matter because agentic work rarely belongs to one actor. The architecture should identify the human role, agent role, vendor role, corporate owner, remediation owner, and any processor or subprocessor that holds relevant evidence. This is not a liability allocation. It is a review map.

Tool-action records are the point where output becomes consequence. Underwriting-facing evidence should identify the systems or services the agent can touch: email, CRM, ERP, payment system, code repository, deployment pipeline, ticketing system, database, cloud console, identity provider, third-party API, or customer record. The existence of tool records is not enough; the records should be linked to authority, role, outcome, exception, and closure.

Accepted outcome states help distinguish generated output from business action. A model response may be provisional. A sent message, approved payment, merged code change, updated customer account, or delivered professional recommendation may be accepted. Reviewers need to see how the enterprise knows the difference.

Exception history tells the reviewer where the system has already struggled. Overrides, threshold breaches, escalations, false positives, near misses, warning suppressions, vendor outages, prompt failures, and tool failures are not embarrassing side notes. They are evidence of how the risk behaves.

Privacy and redaction profiles make evidence usable. As Part III explained, a serious evidence model should not dump every prompt, payload, customer record, credential, secret, privileged note, or vendor log into a portable file. The architecture should show what can be disclosed, what must remain source-pointed, what is redacted, and who can access it.

Substitution and change records are central because agentic systems do not stay fixed. Model endpoints change. Vendor defaults change. Tool permissions widen. Data classes expand. Human review moves from required to sampled. A reviewed risk object can silently become a different risk object.

Remediation closure shows whether the organization can learn from events. A reviewer may need to see not only that incidents occurred, but whether they were contained, fixed, retested, reauthorized, and closed with residual risk visible. NIST and CISA incident-response sources support the importance of preparation, detection, response, recovery, remediation, coordination, and tracking, but they do not create insurance claim or underwriting standards. [41] [42]

Finally, the architecture should include a missing-evidence register. Missing evidence is part of the truth. It may be vendor-held, overwritten, outside retention, privileged, redacted, inaccessible, or never collected. A missing-evidence register helps reviewers understand uncertainty rather than pretend completeness.

Different users will use the architecture differently.

A broker may use it to translate enterprise AI operations into risk-transfer language. A risk engineer may use it to understand exposures, controls, dependencies, and reconstruction gaps. An underwriter may use it to ask better questions, subject to that insurer's own appetite, forms, guidelines, and judgment. A reinsurer may use it to see dependency concentration and aggregation shapes. Counsel may use it to preserve boundaries between evidence, privilege, legal advice, and coverage review. Enterprise risk teams may use it to make internal risk ownership visible.

None of those uses means the architecture is required, accepted, sufficient, or price-relevant. R1 source research supports the general proposition that AI risk review may need exposure inventory, authority scope, dependencies, and evidence readiness, drawing on Aon, NAIC, NIST AI RMF, Geneva Association, Swiss Re, QBE, WP1, and WP2. The exact use by any insurer remains external. [43] [44] [45]

#### T-14-01 - Underwriting Evidence Architecture Components

| Component | Review question | Evidence artifact | User of evidence | Boundary note |
|---|---|---|---|---|
| Work-unit inventory | Which bounded agentic work creates exposure? | Work unit ID, business function, owner, external consequence tag | Broker, risk engineer, enterprise risk | Reviewability layer only |
| Authority boundaries | What can the work do without additional approval? | Permission scope, threshold, escalation rule, prohibited action list | Underwriter, counsel, risk engineer | Not legal delegation proof |
| Human/agent/vendor role maps | Who initiates, executes, reviews, accepts, supports, remediates, and closes? | RACI, agent role record, vendor support role, processor map | Counsel, underwriter, enterprise risk | Does not determine legal liability |
| Tool-action records | Where does output become external consequence? | API calls, account updates, emails, payments, code deployments, filings | Risk engineer, claims/IR, underwriter | Does not determine policy line |
| Accepted outcome states | When does the enterprise treat the work as done or business-adopted? | Final-state marker, approval criteria, reviewer-visible evidence | Underwriter, counsel, business owner | Not coverage or legal acceptance proof |
| Exception history | What warnings, overrides, failures, or near misses occurred? | Exception log, override register, incident/near-miss review | Risk engineer, underwriter, renewal team | Not a loss prediction formula |
| Privacy/redaction profile | Can evidence be reviewed without uncontrolled sensitive-data exposure? | Data-class labels, source pointers, access controls, redaction rules | Counsel, broker, risk engineer | Not privacy legal advice |
| Substitution/change records | Did the reviewed object change over time? | Model/tool/vendor version history, reauthorization, conformance note | Underwriter, reinsurer, enterprise risk | Not vendor certification |
| Remediation closure | What was fixed, retested, reauthorized, and closed? | Incident timeline, fix record, retest evidence, owner signoff | Renewal team, claims/IR, risk engineer | Does not prove no residual liability |
| Missing-evidence register | What cannot be reconstructed? | Missing, stale, inaccessible, redacted, vendor-held, or overwritten record list | All reviewers | Not a claim denial or approval basis |

The table is intentionally architectural. It does not say "submit these documents to get coverage." It says that a serious discussion of agentic AI risk needs a common evidence map before the parties can even understand the exposure.

The boundary for this chapter: underwriting evidence architecture is not legal advice, not insurance advice, not underwriting guidance, not an underwriting standard, not coverage opinion, not certification, not proof of insurability, not insurer endorsement, not a regulator-approved method, not actuarial pricing guidance, and not a premium recommendation.

The next chapter turns the architecture into an exposure inventory. Once the evidence components are known, the enterprise still needs to segment where agentic work creates different kinds of exposure.

### Chapter 15: Agentic Exposure Inventory and Risk Segmentation

Many AI inventories are built for technology management, not risk transfer.

They list the application name, vendor, model family, business owner, data source, risk rating, and approval status. That may help procurement, security, or governance. It does not necessarily help a reviewer understand exposure. A single AI application may contain many agentic work units. A single model may support dozens of workflows. A single workflow may straddle cyber, professional liability, governance, crime, privacy, product, and business interruption questions.

An agentic exposure inventory should therefore sit at the level of work units, not only tools or models.

Consider a bank that lists "customer-service AI assistant" in its AI inventory. That label hides several different exposures. One work unit drafts customer responses. Another updates contact details. Another flags suspected fraud. Another recommends fee reversals. Another opens support tickets with a vendor. Another summarizes complaint history for a human reviewer. These work units differ in authority, data sensitivity, customer impact, external consequence, reversibility, dependency concentration, and line ambiguity.

Risk segmentation is the discipline of separating those work units before the insurance conversation starts.

The first segmentation dimension is business function. Agentic work in customer support, finance, engineering, legal, HR, procurement, sales, operations, claims, compliance, or security may create different exposure patterns. Function is not enough, but it orients the reviewer.

The second is external consequence. Does the work only draft internally, or can it send, file, deploy, pay, approve, deny, update, delete, publish, notify, or instruct an outside party? External consequence changes the risk conversation because the work leaves the model environment and affects someone or something else.

The third is authority level. A recommendation-only workflow is different from one that can transact. A sampled human review boundary is different from mandatory pre-action approval. An agent with emergency override permission is different from one confined to low-value routine activity.

The fourth is data sensitivity. Public content, internal business data, customer personal data, payment data, health data, employee data, source code, credentials, trade secrets, privileged material, and regulated records do not carry the same evidence and privacy implications.

The fifth is tool-action type. Emailing a customer, updating a CRM record, changing code, opening a vendor ticket, querying a database, initiating a payment, publishing content, or changing cloud infrastructure all produce different evidence and loss questions.

The sixth is customer or third-party impact. Some work units affect only internal productivity. Others affect customers, counterparties, vendors, employees, investors, regulators, patients, applicants, or the public. Impact surface matters even when the policy line is not yet known.

The seventh is dependency concentration. A work unit dependent on the same model, runtime, cloud region, identity service, tool connector, or vendor as many other work units carries aggregation relevance. Swiss Re and Geneva Association sources support the importance of dependency concentration and accumulation visibility as context and analogy. They do not provide agentic AI pricing conclusions. [46] [47]

The eighth is human confirmation boundary. "Human in the loop" is too vague. The inventory should record whether human confirmation is pre-action, post-action, sampled, threshold-based, exception-triggered, summary-only, or absent. It should also record what evidence the human sees.

The ninth is reversibility and remediation difficulty. A draft can be deleted. A sent customer notice may be corrected. A payment may or may not be reversible. A code deployment may be rolled back, but customer impact may persist. A regulatory filing may create a different closure problem. Reversibility changes the remediation story.

The tenth is cross-project reuse. A component reused across projects may create hidden exposure drift. The same agentic component can be low-risk in one context and high-impact in another.

This inventory helps risk discussion because it separates exposure units before they are bundled into broad claims like "AI use," "GenAI," or "agent platform." It also connects back to R3B's Insurable Agentic Risk Object and R3C's insurance line ambiguity. The inventory tells the reviewer which object is being discussed and what kinds of line questions may arise.

It still does not create insurability. A clean inventory can support discussion, but actual insurance outcomes depend on policy language, underwriting appetite, limits, exclusions, loss history, controls, insured profile, jurisdiction, and the facts of the event.

#### T-15-01 - Agentic Exposure Inventory Template

| Exposure dimension | What to record | Why it matters | Related lifecycle object | Boundary note |
|---|---|---|---|---|
| Business function | Support, finance, engineering, HR, legal, sales, operations, compliance, security | Locates the exposure in the enterprise | Work-unit inventory | Not a coverage category by itself |
| External consequence | Draft, send, file, deploy, pay, approve, deny, update, delete, publish, notify | Shows whether work affects third parties or systems | Tool-action boundary; accepted outcome | Does not decide policy line |
| Authority level | Recommend, approve, transact, execute, escalate, override, block | Defines delegated action perimeter | Authority boundary | Not legal delegation proof |
| Data sensitivity | Public, internal, personal, payment, health, employee, source code, credential, privileged | Shapes evidence, privacy, and security controls | Privacy lifecycle mapping | Not privacy legal advice |
| Tool-action type | Email, CRM/ERP update, API call, payment, code deployment, filing, database update | Identifies the consequence channel | Tool-action record | Not claim causation proof |
| Customer/third-party impact | Internal only, customer-facing, vendor-facing, employee-facing, public-facing, regulator-facing | Frames potential harm surface | Accepted outcome; external consequence | Not liability determination |
| Dependency concentration | Shared model, runtime, cloud, API, identity, vendor, data processor, evidence repository | Shows common failure and aggregation pathways | Dependency visibility | Not actuarial pricing guidance |
| Human confirmation boundary | Pre-action, post-action, sampled, threshold-based, exception-only, summary-only, absent | Shows whether review is meaningful and evidenced | Human role mapping; accepted outcome | HITL is not proof of transferability |
| Reversibility/remediation difficulty | Easy rollback, delayed correction, irreversible transaction, public correction, regulatory closure | Helps frame containment and closure complexity | Remediation closure | Not loss estimate or claim outcome |
| Cross-project reuse | Original scope, reused scope, changed authority, changed data, changed consequence | Shows exposure drift across contexts | Cross-project lifecycle; substitution conformance | Not procurement recommendation |

The strongest inventories will also show gaps. A work unit with unknown authority, unknown data class, unknown human confirmation, unknown vendor dependency, or unknown evidence location should not be forced into a false sense of completeness. Unknowns are risk information.

This chapter's boundary: an agentic exposure inventory is not legal advice, not insurance advice, not underwriting guidance, not an underwriting standard, not coverage opinion, not certification, not proof of insurability, not insurer endorsement, not a regulator-approved method, not actuarial pricing guidance, and not a premium recommendation. It organizes exposure units for review.

The next chapter addresses the question that CFOs and CROs often ask too quickly: which variables matter to premium? The safe answer is to discuss exposure variables without turning them into pricing.

### Chapter 16: Premium and Exposure Variables Without Pricing Guidance

The premium question is understandable. It is also easy to mishandle.

A CFO asks whether better AI controls will lower premium. A CRO asks whether autonomous agents will cost more to insure. A broker asks what evidence to gather before renewal. A product leader asks whether a human approval gate changes the insurance conversation. An engineering leader asks whether dependency concentration matters. The pressure is to answer with a formula.

This chapter does not provide one.

It does not provide actuarial pricing guidance, rating methodology, premium recommendation, underwriting rule, insurer appetite statement, rate factor, surcharge, discount, credit, model score, band, or threshold. It identifies variables that may matter for risk review because they affect exposure, evidence, control, aggregation, or reconstruction.

The first variable is autonomy level. A system that drafts text for human use raises different review questions from one that can approve refunds, deploy code, transfer funds, change records, or send customer-impacting instructions. Autonomy matters because it changes timing, intervention, authority, and evidence expectations. It still cannot be converted into a pricing band.

The second is tool-action severity. The same model output can be harmless in a draft and serious when connected to payment, production infrastructure, regulated filing, customer notice, medical workflow, legal advice, or financial decision support. Tool action shows where consequence becomes concrete.

The third is transaction volume. A workflow that runs five times a month has a different opportunity surface from one that acts thousands of times per day. Volume may matter to frequency discussion, but frequency is not a rate formula.

The fourth is customer or third-party reach. Internal productivity tools, customer-facing tools, vendor-facing tools, employee-facing tools, investor-facing disclosures, and public content do not create the same external impact surface.

The fifth is data sensitivity. Agentic work involving personal data, payment data, credentials, source code, health data, employee data, privileged material, or regulated records may raise privacy, security, cyber, professional, and governance questions.

The sixth is reversibility. A low-value internal recommendation may be easy to correct. A payment, customer communication, production deployment, regulatory filing, or public statement may be harder to unwind. Reversibility shapes remediation discussion without deciding loss amount.

The seventh is human confirmation strength. A meaningful confirmation boundary includes role, authority, criteria, visible evidence, timing, and exception handling. A summary-only click may not have the same review value as pre-action approval with full context. This does not mean human review guarantees coverage or lowers premium.

The eighth is evidence maturity. Reviewers may ask whether records connect work unit, authority, role, tool action, accepted outcome, exception, privacy treatment, remediation, and change. Evidence maturity makes the risk more reviewable. It does not guarantee coverage, quote, or claim payment.

The ninth is vendor, model, and runtime concentration. Shared dependencies can create correlated exposure across workflows or insureds. Geneva Association and Swiss Re sources support the importance of accumulation and cloud concentration as context and analogy. QBE LLMjacking materials show concrete AI-linked cyber evidence needs around access, usage, containment, and remediation. None of these sources creates agentic AI pricing guidance. [46] [47] [48]

The tenth is prior incidents and near misses. Events matter because they show how the system behaves under stress and whether controls work. Near misses may be as informative as losses. The safe question is not "what premium change follows?" but "what happened, what evidence exists, and what changed after remediation?"

The eleventh is remediation maturity. Detection is only the beginning. The reviewer may ask how quickly the organization contained, fixed, retested, reauthorized, and closed the issue, and whether residual risk remained visible. NIST and CISA support structured incident and remediation records. They do not provide insurance pricing rules. [41] [42]

The twelfth is cross-project reuse. A component reused across many contexts can spread exposure. A model or tool that was reviewed for one workflow may not be reviewable in another without reauthorization. Reuse matters because it changes object boundaries.

These variables are still incomplete without policy language, line of coverage, insured profile, jurisdiction, market appetite, loss history, controls, exclusions, limits, sublimits, deductibles, retention, and the underwriter's own framework. A variable dictionary is therefore only a way to organize the conversation.

#### T-16-01 - Non-Pricing Exposure Variables

| Variable | Why it may matter | Evidence signal | Misuse to avoid | Boundary note |
|---|---|---|---|---|
| Autonomy level | Changes timing, intervention, and delegated authority | Draft/recommend/approve/execute profile, escalation rule | Turning autonomy into a rate band | Not pricing guidance |
| Tool-action severity | Shows where output becomes consequential action | Payment, code, account, filing, email, infrastructure, database action | Assuming severity determines coverage | Not coverage opinion |
| Transaction volume | Indicates how often the work can create exposure | Run count, transaction count, customer interactions, API usage | Converting volume into rate | Not actuarial model |
| Customer/third-party reach | Expands potential external impact surface | Customer-facing, vendor-facing, employee-facing, regulator-facing marker | Treating reach as liability determination | Not legal advice |
| Data sensitivity | Shapes privacy, cyber, regulatory, and evidence controls | Data-class label, affected data map, redaction profile | Providing privacy compliance advice | Not GDPR advice |
| Reversibility | Affects containment and remediation complexity | Rollback path, correction process, irreversible action flag | Estimating claim amount from reversibility | Not loss valuation |
| Human confirmation strength | Shows whether review is role-based and evidence-aware | Reviewer role, visible evidence, approval criteria, timing | Claiming HITL lowers premium or guarantees transfer | Not premium recommendation |
| Evidence maturity | Makes authority, role, action, outcome, exception, and closure reviewable | Evidence index, source pointers, missing-evidence register | Treating completeness as claim approval | Not proof of insurability |
| Vendor/model/runtime concentration | Reveals correlated dependency exposure | Dependency map, version register, affected work-unit list | Quantifying systemic premium effect | Not capital or pricing model |
| Prior incidents / near misses | Shows observed failure and response patterns | Incident log, near-miss review, exception history | Saying incident-free history earns a discount | Not insurer appetite statement |
| Remediation maturity | Shows containment, fix, retest, reauthorization, and closure | Timeline, fix record, retest, owner signoff, residual-risk note | Creating closure thresholds | Not underwriting rule |
| Cross-project reuse | Shows exposure drift across contexts | Reuse register, changed authority/data/consequence marker | Treating reuse as procurement defect | Not procurement recommendation |

The careful language is "may matter," "can shape exposure discussion," "risk reviewers may ask," and "evidence signal." The unsafe language is "will affect premium," "earns a discount," "creates a surcharge," "qualifies for coverage," "fails underwriting," or "meets a rating level."

This chapter's boundary: premium and exposure variables are analytical inputs for risk review. They are not actuarial pricing guidance, not rating methodology, not premium recommendation, not underwriting guidance, not underwriting standard, not coverage opinion, not legal advice, not insurance advice, not certification, not proof of insurability, not insurer endorsement, and not a regulator-approved method.

The next chapter adds time. Even a well-described exposure can change quickly when workflows, authority, tools, models, vendors, data classes, human review boundaries, incidents, or evidence gaps change.

### Chapter 17: Renewal, Change, and Substitution Evidence

Agentic AI risk does not stand still between renewal cycles.

A workflow that was draft-only in January may send customer messages in April. A model endpoint may change in June. A tool connector may gain write permission in July. A vendor may change logging defaults in August. A team may reuse the same agent in a new business unit in September. A near miss may reveal that the human reviewer was seeing only a summary, not the full evidence. By renewal, the original risk object may exist only on paper.

Underwriting-facing evidence cannot be one-time only. It needs a change layer.

Renewal review should begin with new workflows. Which agentic work units were added, retired, expanded, merged, or reused? The reviewer should not have to infer change from a model inventory.

Changed authority is often the most important update. Did any workflow move from draft to send, recommend to approve, approve to transact, or human-required to sampled review? Did thresholds change? Were emergency overrides added? Was escalation weakened?

New tools matter because tool actions create external consequence. A workflow that gains access to email, payment, CRM, ERP, cloud infrastructure, code deployment, data export, vendor ticketing, or customer records has changed its exposure shape.

New models, vendors, and runtimes matter because substitution can alter behavior and evidence. A reviewed work unit may depend on a model version, orchestration layer, cloud service, logging tool, data processor, or API. If that dependency changes, the enterprise needs substitution conformance evidence.

Changed data classes matter because privacy, cyber, regulatory, and claim reconstruction implications change. A workflow that originally touched public content may now touch customer records, payment data, employee records, code, credentials, or privileged material.

Changed customer impact matters because an internal productivity tool can become customer-facing. A tool used for internal drafting can become a communication channel. A recommendation can become a decision. A decision can become an automated action.

Changed human review boundaries matter because a control may weaken without appearing to disappear. A reviewer may shift from full-context review to summary review, from pre-action review to post-action review, from every action to sampled review, or from named role to rotating queue.

Incidents and near misses matter because they are the evidence of how the system behaves. Renewal evidence should record what happened, which work units were affected, what was contained, what changed, what remains open, and what lessons were implemented. NIST and CISA support continuous improvement and remediation tracking as incident-response disciplines, not as insurance requirements. [41] [42]

Remediation actions matter only if closure is visible. A fix without retest, reauthorization, residual-risk note, owner signoff, or monitoring plan may not close the review question.

Unresolved evidence gaps should travel into renewal. If a vendor-held log was inaccessible, a retention period was too short, a prompt record was redacted without pointer, a human approval screen lacked context, or a tool action was not joined to authority, the gap should not disappear from the file.

The useful frame is before execution, during execution, and after execution.

Before execution, the enterprise defines work unit, authority, role, data, tool, dependency, and evidence expectations. During execution, it records action, confirmation, exception, and outcome. After execution, it records incident, remediation, substitution, closure, and renewal change. This dynamic lifecycle record is what keeps the reviewed object from going stale.

#### T-17-01 - Renewal and Change Evidence Register

| Change category | Evidence to review | Why it matters | Trigger for escalation | Boundary note |
|---|---|---|---|---|
| New workflows | Added work-unit list, business owner, external consequence marker | New work may create new exposure units | Customer/third-party impact, regulated data, tool action | Not coverage-ready status |
| Changed authority | Permission change, threshold update, escalation change, override addition | Authority defines the action perimeter | Draft-to-send, recommend-to-approve, approve-to-transact | Not legal delegation proof |
| New tools | Tool connector, API permission, system access, action log | Tools convert output into external consequence | Write/delete/payment/deployment/customer-message access | Does not decide policy line |
| New models/vendors/runtimes | Version change, vendor notice, runtime config, conformance review | Substitution may change behavior and evidence | New provider, endpoint, logging default, model class | Not vendor certification |
| Changed data classes | Data map update, data-class label, privacy/redaction change | Data sensitivity changes privacy and cyber exposure | Personal/payment/health/employee/credential/privileged data | Not privacy legal advice |
| Changed customer impact | Customer-facing marker, notice channel, third-party dependency | Internal tools can become external-impact tools | Public/customer/regulator-facing action | Not liability determination |
| Changed human review boundary | Reviewer role, evidence visible, pre/post/sampled review, exception trigger | HITL value depends on role, timing, criteria, and evidence | Summary-only, sampled, post-action, queue-based review | Not proof of transferability |
| Incidents / near misses | Incident log, near-miss review, exception history, affected work units | Observed behavior informs future review | Repeated pattern, severe action, missing evidence | Not claim approval guidance |
| Remediation actions | Fix, retest, reauthorization, residual-risk note, owner closure | Shows whether the event changed the risk object | Unclosed fix, unresolved residual risk, no retest | Does not prove no residual liability |
| Unresolved evidence gaps | Missing, stale, overwritten, vendor-held, inaccessible, privileged, redacted records | Gaps define uncertainty at renewal | Gap affects high-impact work unit or claim reconstruction | Not claim denial or underwriting rule |

Substitution conformance is the connective tissue. It asks whether a changed component preserves the work unit's authority, role, evidence, privacy, outcome, exception, and remediation boundaries. It is not vendor certification. It is a continuity question.

This chapter's boundary: renewal and change evidence is not legal advice, not insurance advice, not underwriting guidance, not underwriting standard, not coverage opinion, not certification, not proof of insurability, not insurer endorsement, not regulator-approved method, not actuarial pricing guidance, and not premium recommendation. It organizes change so review does not depend on stale descriptions.

The next chapter turns the architecture into a practical evidence request structure while preserving the most important boundary: optional evidence requests should not masquerade as standards.

### Chapter 18: Reviewer-Facing Evidence Requests Without Creating a Standard

Evidence request lists are useful. They are also dangerous.

If written badly, they become fake standards. A template starts to sound like a requirement. A request list starts to sound like an underwriting checklist. A readiness package starts to sound like certification. A missing field starts to sound like automatic denial. A completed field starts to sound like coverage readiness.

That is not what this paper is doing.

This chapter offers a structured, optional evidence request model for enterprises, brokers, risk engineers, counsel, and reviewers who need a practical way to organize agentic AI risk discussions. It is not a claim demand, not an underwriting checklist, not a certification checklist, not a regulator-approved checklist, not a procurement requirement, and not proof that any insurer will accept, price, quote, renew, bind, endorse, or pay a claim.

The first request area is an inventory summary. It should name the population of agentic work units, not simply the AI tools. The summary should identify business function, owner, authority class, data class, external consequence, dependency concentration, and current status.

The second is a high-impact work-unit list. Reviewers do not need every low-risk experiment at the same depth. They may need to see work units that touch customers, money, regulated data, production systems, professional deliverables, employee decisions, public communications, or high-volume automated actions.

The third is an authority and role map. The request should ask who initiates, configures, approves, accepts, escalates, remediates, and closes, and what the agent, tool, vendor, and corporate owner do. This turns HITL into a responsibility structure.

The fourth is a tool-action sample. A useful sample should show how model output becomes external action: API call, email, payment, account update, code deployment, database change, filing, or vendor ticket. It should also show authority and accepted outcome.

The fifth is an evidence-chain sample. The goal is not a full data dump. It is to show that prompts, outputs, tool actions, human approvals, vendor records, exception history, incident records, remediation notes, and missing evidence can be joined through source pointers.

The sixth is a privacy and redaction profile. Reviewers may need to know how personal data, credentials, secrets, privileged material, source code, customer records, and vendor confidential information are protected. The request should ask for data-class labels, access controls, redaction rules, and source-pointer strategy.

The seventh is incident and near-miss history. The request should identify relevant events, affected work units, external consequence, evidence available, containment, fix, retest, reauthorization, and closure state. It should not ask the enterprise to pre-judge coverage or liability.

The eighth is remediation closure examples. A few examples can show whether the organization closes incidents as evidence objects or merely resolves tickets operationally.

The ninth is a substitution and change register. Reviewers may ask what changed since the last review or deployment: models, tools, vendors, runtimes, permissions, data classes, customer impact, and human review boundaries.

The tenth is a dependency map. This should show shared models, cloud services, APIs, identity providers, data processors, tool connectors, evidence systems, and vendors across work units. For reinsurers and portfolio-minded reviewers, dependency concentration can be as important as individual workflow design.

The eleventh is a missing-evidence register. This is where the enterprise shows intellectual honesty. It should say what is missing, why, who controls it, whether it is recoverable, whether it is redacted, whether retention expired, and whether remediation is planned.

#### T-18-01 - Optional Reviewer Evidence Request Structure

| Request area | Example request | Purpose | Sensitive boundary | Non-claim note |
|---|---|---|---|---|
| Inventory summary | Provide a summary of agentic work units by function, owner, authority, data class, consequence, and dependency | Establish review population | Avoid exposing unnecessary low-level logs | Optional structure only |
| High-impact work-unit list | Identify work units touching customers, money, regulated data, production systems, professional outputs, or public communications | Focus attention on material exposure units | Use scoped identifiers where possible | Not coverage-ready evidence |
| Authority and role map | Show who initiates, reviews, accepts, escalates, remediates, and closes, and what the agent/vendor/tool does | Convert HITL into responsibility structure | Protect personnel and privileged details | Not liability determination |
| Tool-action sample | Provide a sample showing output, action, authority, and accepted outcome | Show where external consequence occurs | Mask secrets, credentials, and customer data | Does not decide policy line |
| Evidence chain sample | Show source pointers connecting prompts, outputs, tool calls, approvals, exceptions, incidents, remediation, and gaps | Demonstrate reconstructability | Prefer pointers/redaction over bulk export | Not claim approval guidance |
| Privacy/redaction profile | Describe data classes, redaction rules, access controls, privilege flags, and disclosure path | Avoid evidence hoarding and uncontrolled sharing | Preserve privacy, security, privilege, and vendor confidentiality | Not legal or privacy advice |
| Incident/near-miss history | Summarize events, affected work units, consequence, containment, fix, retest, and closure | Show observed risk and response maturity | Separate factual timeline from legal analysis | Not claim outcome prediction |
| Remediation closure examples | Provide examples of closure records, owner signoff, residual risk, and reauthorization | Show whether events become closed lifecycle records | Segment privileged and sensitive notes | Does not prove no residual liability |
| Substitution/change register | List model, tool, vendor, runtime, permission, data, customer-impact, and review-boundary changes | Keep the reviewed object current | Avoid vendor confidential over-disclosure | Not vendor certification |
| Dependency map | Show shared model, cloud, API, identity, vendor, data processor, tool connector, and evidence system dependencies | Identify aggregation and concentration | Limit disclosure of security architecture | Not reinsurance pricing guidance |
| Missing-evidence register | Identify missing, stale, overwritten, inaccessible, vendor-held, privileged, or redacted records | Make uncertainty visible | Protect privileged and sensitive explanations | Not claim denial or underwriting rule |

The request model should be used with judgment. A small internal drafting assistant does not need the same depth as a high-volume payment workflow. A professional-services workflow may need different evidence from a customer-support bot. A cyber-linked LLMjacking event may require different access and usage records than a model-performance warranty scenario. QBE, Aon, Geneva, Swiss Re, NAIC, NIST, WP1, and WP2 sources all support pieces of the evidence, governance, dependency, and reconstruction logic, but no source in R1 supports treating this request structure as a market-wide insurer requirement. [41] [42] [43] [44] [45] [46] [47] [48]

The final discipline is tone. A request should ask, not command. It should say "provide if available," "describe," "identify," "summarize," "show source pointers," and "note gaps." It should not say "must provide to qualify," "required for coverage," "certification evidence," "underwriting pass/fail," or "premium credit."

This chapter's boundary: reviewer-facing evidence requests are optional analytical structures. They are not legal advice, insurance advice, underwriting guidance, underwriting standards, coverage opinions, claim demands, certification checklists, proof of insurability, insurer endorsements, regulator-approved methods, actuarial pricing guidance, premium recommendations, procurement requirements, or claim approval guidance.

Part IV has built the underwriting-facing architecture: evidence components, exposure inventory, non-pricing variables, renewal/change evidence, and optional reviewer requests. It does not say the architecture is accepted by the market. It says the architecture is what an enterprise can use to make agentic AI risk more legible before underwriting, renewal, reinsurance, counsel, and risk-engineering discussions.

Part V can now move to the other side of the loss event: claims, disputes, responsibility and coverage boundaries, and post-loss remediation evidence.

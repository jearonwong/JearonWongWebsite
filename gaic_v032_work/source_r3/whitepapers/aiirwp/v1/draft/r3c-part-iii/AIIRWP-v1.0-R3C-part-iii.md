# AIIRWP v1.0 R3C - Part III Body Draft

**Draft Scope:** Part III only.

## Part III: From Lifecycle Governance and Auditability to Insurability Reasoning

Part I established the market reality: AI risk is not moving through insurance in one clean line. Some risk is affirmatively addressed. Some is bounded. Some is silent inside existing lines. Some belongs closer to model performance or cyber than to the full agentic lifecycle.

Part II then named the object problem. The policyholder remains the insured legal subject. The agentic work can become the loss-relevant risk object. That object must be bounded, responsibility-linked, evidence-backed, claim-reconstructable, and honest about negative space.

Part III translates the first two white papers into this insurance-facing layer.

WP1 gives lifecycle governance vocabulary. It names missing regulatory objects, authority boundaries, responsibility states, accepted outcomes, evidence partitions, privacy constraints, substitution conformance, and remediation closure. WP2 gives auditability vocabulary. It distinguishes raw logs from evidence chains, trace visibility from audit evidence, and audit readiness from professional assurance. Those foundations matter for WP3 because they help describe the risk object. They do not create coverage, determine liability, approve claims, bind insurers, set underwriting rules, or make a system insurable.

This part is therefore a translation exercise. It asks how lifecycle governance and auditability become useful to insurability reasoning without being mistaken for insurance facts.

### Chapter 9: From WP1 MROs to Insurability Objects

Many enterprises now have AI governance language. They can describe models, controls, inventories, policies, risk committees, approval workflows, and sometimes even agentic use cases. After a loss, however, the insurance question often arrives in a different grammar.

What was the insured subject? What object generated or shaped the loss? What authority was delegated? What action crossed into the world? What evidence survived? Which policy line might be implicated? Which records show responsibility, acceptance, exception, and remediation?

WP1 helps because it names lifecycle objects that ordinary governance language often leaves vague. Missing Regulatory Objects, or MROs, are not insurance objects in themselves. They are not coverage triggers, policy definitions, underwriting standards, legal proof, or insurer-endorsed categories. Their value in WP3 is more precise: they help identify what must be bounded, evidenced, reviewed, transferred, or closed before agentic work can be discussed as a reviewable risk object. [28]

Consider a customer-operations agent that can classify requests, approve account adjustments, send customer messages, and trigger an external service ticket. The enterprise may have an AI policy, a model inventory, and a control statement saying that humans supervise the system. A risk reviewer will still need a sharper map. Who gave the agent authority to adjust accounts? Which human role accepted the outcome? Was the customer message treated as a draft, recommendation, or authorized communication? Did the external service ticket create a downstream obligation? If the model or runtime changed, did the prior review still apply? If customer data appears in traces, what evidence is retained, redacted, or minimized?

Those are MRO-shaped questions.

The first insurance-relevant MRO is the human-role-to-MAS-responsibility mapping. Agentic systems often make work look shared. A business owner initiates. A system designer configures. A model generates. An agent selects a tool. A reviewer approves. A vendor hosts. A support team remediates. The insurance problem is not that many roles exist. It is that the roles may not connect to responsibility. A role map does not determine legal liability, but without it the work unit can become difficult to reconstruct.

The second is the delegated authority boundary. Insurance analysis needs an exposure perimeter. If the agent can draft but not send, recommend but not execute, approve below a threshold but escalate above it, use one data class but not another, or call one API but not another, that scope matters. Authority boundary is not legal delegation proof. It is a record of what the agentic work was allowed to do and when escalation should have occurred.

The third is the distinction between agent role and human role. An agent role is not a human role wearing technical clothing. A human may own intent, professional judgment, business acceptance, escalation, remediation, or closure. An agent may draft, route, classify, retrieve, score, execute, monitor, or trigger. The same work unit can involve both. If the enterprise collapses those layers into "AI-assisted," the insurance object becomes blurry.

The fourth is accepted outcome compliance. Model output is not the same as business acceptance. A recommendation becomes risk-relevant when it is sent, filed, paid, deployed, relied on, published, merged, recorded, or otherwise adopted. Accepted outcome records help show when generated content became organizational action. They do not decide legal acceptance, policy compliance, or coverage.

The fifth is the tool-action liability boundary. This is where the agentic lifecycle often becomes external. A generated answer may be internal. A tool action can change a customer record, transmit funds, send an email, alter code, open a ticket, submit a form, or call a vendor API. The tool-action boundary helps separate suggestion from consequence.

The sixth is responsibility transfer across agents. Agentic work may pass from one agent to another, from an agent to a workflow platform, from a workflow to a vendor, or from a vendor to a human team. The insurance-relevant question is whether the responsibility state traveled with the work. Handoff is operational. Responsibility continuity is evidentiary.

The seventh is authority drift. A workflow that begins with a narrow authority can widen through reuse, configuration change, prompt update, tool permission expansion, or role confusion. Drift matters because the risk object originally reviewed may no longer be the object that caused loss.

The eighth is evidence partitioning. Agentic evidence is scattered by design: model records, prompts, tool calls, human approvals, vendor logs, cloud records, data labels, incident tickets, remediation notes, and privacy redactions may live in different systems. An evidence partition tells the reviewer where the pieces are and how they can be joined without pretending that a single log stream is enough.

The ninth is cross-project reuse compliance. Agentic components rarely stay in one place. A classifier built for support may be reused in billing. A code agent built for internal tooling may be reused in customer-facing deployment. A retrieval agent built for policy search may be reused in professional advice. Reuse changes exposure when authority, data, external consequence, or policy-line ambiguity changes.

The tenth through thirteenth MRO families sit around privacy: lifecycle privacy mapping, privacy-preserving third-party validation, evidence minimization and selective disclosure, and data subject rights versus evidence retention. These matter because insurance review needs evidence, while privacy and security disciplines limit what should be retained, copied, disclosed, or shared. Evidence maturity is not evidence hoarding.

The fourteenth is the third-party processor and subprocessor chain. Agentic systems often depend on vendors, cloud services, model providers, orchestration layers, data processors, and logging tools. The insured organization may not control every record needed for reconstruction. The processor chain is therefore not a procurement appendix. It is part of the evidence object.

The fifteenth is vendor, model, and runtime substitution conformance. A change in model endpoint, vendor platform, tool connector, runtime policy, embedding store, or API behavior can make a previously reviewed work unit behave differently. The insurance concern is not simply that change occurred. It is whether authority, evidence, privacy, and accepted-outcome boundaries remained continuous.

The sixteenth is incident, dispute, and remediation closure. A loss event does not end when a ticket is closed. Reviewers may need to know what was contained, what was fixed, who rechecked it, whether the workflow was reauthorized, what residual risk remained, and whether affected parties or business processes were closed out.

NIST AI RMF and NAIC insurer-governance materials are useful context here because they show the broader movement toward governance, mapping, risk management, documentation, controls, validation, and third-party oversight. They do not turn MROs into insurance standards, and they do not prove coverage or underwriting acceptance. [29] [30]

#### T-09-01 - MRO-to-Insurability Translation Map

| MRO | Insurance-relevant question | Evidence or control needed | Risk-transfer relevance | Boundary note |
|---|---|---|---|---|
| Human Role to MAS Responsibility Mapping | Who owned intent, review, acceptance, escalation, remediation, and closure? | Role map, RACI, approval record, owner signoff | Makes responsibility questions reviewable | Does not determine legal liability |
| Delegated Authority Boundary | What was the agentic work allowed to do? | Permission scope, transaction limits, data class limits, escalation rules | Defines exposure perimeter | Not legal delegation proof |
| Agent Role is not Human Role | What did the agent do versus what the human owned? | Agent task record, human approval criteria, reviewer-visible evidence | Prevents HITL from becoming a vague control claim | Not an employment, agency, or liability conclusion |
| Accepted Outcome Compliance | When did output become organizational action? | Final-state marker, delivery record, approval criteria, acceptance timestamp | Separates generation from business adoption | Not coverage proof or legal acceptance |
| Tool-Action Liability Boundary | Where did a recommendation become external consequence? | API call, account update, email, filing, payment, deployment record | Identifies loss-relevant action point | Does not decide policy line |
| Responsibility Transfer Across Agents | Did responsibility move with the work or only activity? | Handoff record, receiving role, evidence transfer, exception state | Supports reconstruction across agent chains | Not risk transfer by itself |
| Authority Drift | Did scope widen after review? | Permission change log, reuse review, prompt/config change record | Shows whether the reviewed object changed | Not a coverage trigger |
| MAS Evidence Partitioning | Where are model, tool, human, vendor, incident, and privacy records? | Evidence index, source pointers, retention map, missing-evidence note | Converts scattered records into a reviewable object | Not a mandatory schema |
| Cross-Project Reuse Compliance | Was the component reauthorized for the new context? | Reuse approval, changed data/authority map, policy-line marker | Controls exposure drift across business contexts | Not procurement guidance |
| Privacy / GDPR Lifecycle Mapping | What personal or regulated data appears in the work and evidence? | Data-class labels, processing map, retention notes | Keeps evidence review from creating unmanaged privacy exposure | Not GDPR or legal advice |
| Privacy-Preserving Third-Party Validation | Can evidence be reviewed without excessive disclosure? | Selective disclosure, access control, redaction, trusted review channel | Supports reviewability where vendor or personal data is sensitive | Not assurance certification |
| Evidence Minimization and Selective Disclosure | What is needed, what can be pointed to, and what should not be copied? | Source pointer, redaction profile, privilege flag, minimization rule | Balances reconstruction with privacy/security | Not a legal sufficiency rule |
| Data Subject Rights vs Evidence Retention | Can retention support review without ignoring data rights? | Retention schedule, deletion exception process, access log | Flags tension before incidents occur | Not privacy compliance advice |
| Third-Party Processor / Subprocessor Chain | Which outside parties hold records or shape behavior? | Vendor map, subprocessor list, contract pointer, logging access terms | Shows dependency and evidence custody | Not vendor ranking |
| Vendor / Model / Runtime Substitution Conformance | Did component change preserve the reviewed boundary? | Version change, conformance review, regression record, reauthorization | Protects continuity of the risk object | Not vendor certification |
| Incident, Dispute, and Remediation Closure | What ended, what remained, and who accepted closure? | Incident timeline, fix record, retest, residual-risk note, closure signoff | Supports post-loss and renewal review | Not claim approval or settlement guidance |

The table should be read as a translation map, not a scoring model. It says that MROs can help describe the work object that insurance analysis needs to see. It does not say that the presence of an MRO creates coverage, satisfies an insurer, proves compliance, resolves causation, or makes the risk transferable.

The boundary for this chapter is deliberately narrow: WP1 provides lifecycle governance object vocabulary for insurability reasoning. It does not provide legal advice, insurance advice, underwriting guidance, a coverage opinion, certification, proof of insurability, insurer endorsement, or a regulator-approved method.

The next chapter moves from WP1's governance objects to WP2's auditability architecture. If MROs help name the object, audit evidence helps reconstruct what happened. But auditability still does not equal insurability.

### Chapter 10: From WP2 Audit Evidence Chain to Claim Reconstruction

After an incident, teams often say the same thing: "We have logs."

Sometimes they do. They have model traces, API records, prompts, outputs, identity logs, cloud usage records, tool-call histories, approval timestamps, service tickets, alerts, and vendor dashboards. But a pile of logs is not a claim reconstruction. It may not even be an evidence chain.

WP2 matters because it separated raw trace visibility from audit evidence. It introduced the idea that evidence must be linked to an object, a responsibility state, a request, a sufficiency boundary, and a review purpose. WP3 uses that discipline for a different purpose: claim reconstruction. [31]

The difference is important. An audit evidence chain can help organize facts. It can show what work unit was reviewed, what evidence was requested, what records were available, and what gaps existed. A claim reconstruction effort may use the same records, but it asks additional questions: what loss occurred, which insured subject is involved, which policy line may be implicated, what event triggered notice, what evidence links action to consequence, what exclusions or limits may be relevant, what remediation occurred, and what remains unresolved?

Auditability is necessary for reconstruction because unreconstructable systems make post-loss review harder. It is insufficient for insurability because insurance decisions depend on policy language, underwriting appetite, line of coverage, loss facts, legal analysis, exclusions, limits, notice, causation, damages, and claim handling. WP2 helps make the facts legible. It does not decide the insurance outcome.

Consider an agentic code-deployment workflow. A developer asks an agent to propose a patch. The agent retrieves context, writes code, runs tests, opens a pull request, and recommends deployment. A human reviewer approves a summary. The deployment tool pushes the change. A service outage follows.

The engineering logs may show the commit, deployment time, test output, and rollback. The agent traces may show the prompt, retrieved files, tool calls, and recommendation. The ticketing system may show the approval. The incident system may show detection, escalation, containment, recovery, and closure. A claim reconstruction needs all of that, but it also needs responsibility semantics. Was the agent authorized to modify the affected service? What did the reviewer see? Was the deployment inside an approved change window? Did a vendor or model substitution alter behavior? Was customer data exposed? What loss category is being asserted? What remediation closed the event?

NIST and CISA incident-response materials support the value of preparation, detection, coordination, containment, remediation, recovery, reporting, tracking, and continuous improvement. They are not insurance claim rules. They support the narrower point that reconstruction depends on organized, time-linked, role-aware records. [32] [33]

The WP2-to-WP3 translation has several layers.

The work unit becomes the claim reconstruction object. The reviewer cannot reconstruct "AI failure" in the abstract. The event needs a bounded work unit: deployment run, customer-account update, refund approval, professional deliverable, payment instruction, email campaign, investigation workflow, or vendor handoff.

Authority becomes a reconstruction question. Was the work inside delegated scope? Did it exceed a threshold? Did it use a tool permission that existed technically but was not authorized for the context? Was escalation required?

Role becomes responsibility context. Who initiated, configured, reviewed, accepted, overrode, remediated, and closed the work? What did the agent do? What did the human do? What did the vendor do? What did the organization own?

Tool action becomes the external consequence bridge. The claim file may need to show how an output became an account change, payment, code deployment, customer message, data transfer, filing, or service interruption.

Evidence pointer becomes the opposite of evidence dumping. The evidence chain should point to source records, retention status, redaction profile, access controls, and missing evidence. In many cases the reviewer needs proof that a record exists and can be accessed under appropriate controls, not a bulk export of every prompt and payload.

Accepted outcome becomes the moment of adoption. A model answer may be tentative. A business state may be final. Claim reconstruction needs to know when the organization accepted the action and what criteria were visible.

Exception becomes the early warning record. Thresholds, overrides, uncertainty, alerts, failed checks, near misses, and ignored warnings may explain why the event occurred or why it was not contained earlier.

Remediation closure becomes the post-loss state. The record should show what was contained, fixed, retested, reauthorized, monitored, or left open. It should also show who accepted residual risk.

Privacy treatment becomes part of evidence quality. A claim evidence chain that exposes unnecessary personal data, secrets, privileged materials, or vendor confidential information can create a second risk problem. Evidence must be reconstructable and controlled.

#### T-10-01 - Auditability-to-Claim-Reconstruction Crosswalk

| WP2 auditability concept | Claim reconstruction use | What it can show | What it cannot show | Boundary note |
|---|---|---|---|---|
| Agentic Audit Object | Identifies the bounded work that should be examined | Work unit, system boundary, evidence scope | Whether the object is covered or legally responsible | Analytical object only |
| Audit Evidence Chain | Organizes records across model, tool, human, vendor, and incident systems | Sequence, source pointers, gaps, reviewable record path | Claim approval, causation, damages, settlement, or coverage | Evidence chain is not claim outcome |
| Evidence Request | Helps define records needed after loss | Prompt/output, tool action, role, authority, incident, remediation records | Formal claim demand or insurer-required checklist | Not claims approval guidance |
| AARM Readiness Vocabulary | Helps discuss whether facts are observable, trace-linked, or evidence-structured | Evidence maturity and reconstruction gap | Underwriting score, certification, or insurer-adopted model | Not an underwriting standard |
| Trace vs Evidence Distinction | Prevents raw logs from being overclaimed | Technical sequence and available artifacts | Responsibility, authority, accepted outcome, policy fit | Logs are ingredients only |
| Evidence Sufficiency Boundary | Makes missing evidence visible | What is present, missing, stale, overwritten, vendor-held, or redacted | Legal sufficiency or proof burden | Not legal advice |
| Exception and Remediation Records | Links failure, containment, fix, retest, and closure | Operational response and post-loss state | No residual liability or guaranteed recovery | Closure does not decide liability |
| Selective Disclosure / Privacy Controls | Makes review possible without uncontrolled data exposure | Redaction, source pointers, access control, data labels | GDPR compliance or privilege decision | Not privacy legal advice |

This crosswalk should prevent two mistakes.

The first mistake is technical overconfidence. A trace can show that a tool was called. It may not show whether the tool call was authorized, whether the human reviewer saw the relevant context, whether a vendor substitution changed behavior, whether the action became an accepted business outcome, or whether the affected data should have been retained or redacted.

The second mistake is insurance overconfidence. A strong evidence chain can make a claim file more coherent. It cannot decide causation, liability, coverage, exclusions, limits, damages, settlement, or claim payment. Those decisions sit outside this paper.

AI-linked cyber examples show why this matters. QBE's LLMjacking guidance points toward access, API usage, abnormal consumption, containment, and remediation records. Those records can be essential for reconstructing a cyber-linked AI event. They still do not answer every agentic lifecycle question: who authorized the workflow, what business action was accepted, what responsibility bridge existed, and what line ambiguity remains? [34]

The boundary for this chapter: WP2 provides auditability and evidence-chain vocabulary that can support claim reconstruction. It does not provide legal advice, insurance advice, underwriting guidance, coverage opinion, certification, proof of insurability, claim approval guidance, legal liability determination, insurer endorsement, or a regulator-approved method.

The next chapter turns from evidence architecture to policy-line ambiguity. The same agentic event may be legible as cyber, professional liability, technology E&O, governance, crime, media, employment, product, or business interruption exposure. Evidence can help sort the questions, but it does not resolve coverage.

### Chapter 11: Insurance Lines and Agentic Risk Ambiguity

An agentic incident rarely arrives wearing one policy label.

A customer-support agent triggers refunds to the wrong accounts. Is that a cyber event because credentials and APIs were involved? A technology E&O issue because a deployed software service failed? A professional liability issue because customer-facing advice or service was wrong? A crime or social-engineering issue if payment controls were manipulated? A regulatory or media issue if customer notices were misleading? A D&O or governance issue if the board had ignored known AI control gaps? The answer cannot be inferred from the word "AI."

Policy language controls. Facts matter. Jurisdiction, insured role, policy line, endorsements, exclusions, limits, sublimits, definitions, notice, causation, and loss category all matter. This chapter does not interpret policy wording or provide a coverage opinion. Its purpose is to show why agentic lifecycle evidence can help sort line ambiguity without resolving it.

Broker and market sources already frame AI as a cross-line exposure. Aon discusses AI risk across cyber, E&O/professional liability, employment, crime, D&O/governance, and related enterprise risk categories. That is useful context, not a coverage determination. [35] [36]

Cyber is often the first line people think of because AI systems touch identity, credentials, APIs, cloud services, data stores, prompts, and model endpoints. Cyber may be relevant when there is unauthorized access, credential misuse, data exposure, API abuse, service interruption, compute misuse, LLMjacking, or regulatory investigation tied to a cyber event. QBE's AI cyber and LLMjacking materials show why access records, usage logs, cloud bills, containment steps, and remediation records matter. They do not make every agentic incident a cyber claim. [34]

Technology E&O and professional liability ask different questions. Was there a client deliverable, service failure, implementation defect, professional advice, platform error, or AI product underperformance? Did the insured provide a technology service or professional service? Was the loss tied to a model output, product behavior, integration failure, workflow configuration, or human professional judgment? Model-performance and AI warranty products can be relevant examples, but they are narrower than agentic lifecycle risk transfer.

D&O and governance exposure sits at another layer. The loss may not be only the operational event. It may also involve oversight, disclosure, risk management, AI governance failure, cyber governance, or alleged misstatement. SEC cyber disclosure rules are relevant as governance and disclosure context, not as insurance coverage proof. [37]

General liability and product liability may enter where an AI-enabled product, physical system, public interaction, or generated content creates bodily injury, property damage, or other covered categories, depending on policy language. Verisk's ISO filing discussion is evidence that GenAI liability exposure is being addressed in form development, but exact wording and jurisdictional adoption need careful verification before any precise policy claim is made. In Part III, the point is narrower: agentic evidence must identify the product, action, outcome, and loss path.

Media and IP exposures may appear when agentic systems generate, publish, recommend, train on, or distribute content. The relevant object may be a generated article, image, ad, recommendation, takedown response, rights review, or publication workflow. Evidence should preserve prompt/output records, content provenance, approval, publication, and remediation. This does not decide media liability, copyright, defamation, or advertising coverage.

Employment practices liability may be implicated when agents support hiring, screening, performance review, scheduling, discipline, termination, or workplace investigations. Evidence may need to show human role, decision criteria, data sources, notices, adverse action records, and exception handling. This paper does not provide employment-law analysis or coverage interpretation.

Crime and fraud lines may be implicated by deepfake fraud, synthetic identity, invoice manipulation, AI-enabled social engineering, payment instruction abuse, or internal control bypass. The claim ambiguity may turn on voluntary transfer, social-engineering wording, employee involvement, authentication controls, and cyber overlap. Agentic evidence helps show communications, approvals, identity checks, payment paths, and tool actions. It does not decide policy response.

Property and business interruption may appear when agentic systems affect operational continuity, cloud services, supply chain, code deployment, or physical systems. Beazley and cloud-related cyber examples show that AI/cloud services can enter product-specific cyber or business interruption contexts. Those examples should not be generalized beyond their terms.

The same event can straddle several of these lines. That is why WP3 insists on the risk object. A line-of-business question cannot be answered if the enterprise cannot name the work unit, authority, tool action, accepted outcome, affected data, external consequence, dependency chain, incident timeline, remediation closure, and missing evidence.

#### T-11-01 - Insurance Line Ambiguity Map

| Potential insurance line | Agentic trigger pattern | Evidence needed | Ambiguity | Boundary note |
|---|---|---|---|---|
| Cyber | Unauthorized access, credential misuse, LLMjacking, API abuse, data exposure, service interruption, compute misuse | Identity logs, API usage, cloud bills, forensics, containment, data impact, remediation | Cyber event versus authorized operational misuse; sublimits/exclusions; causation | Does not determine cyber coverage |
| Tech E&O | AI product, platform, software, integration, API, or implementation failure | Product version, model/tool logs, SLA/KPI context, customer impact, change history | Product failure versus professional service versus cyber | Not a product coverage opinion |
| Professional Liability / E&O | AI-assisted advice, deliverable, client decision support, professional workflow error | Engagement scope, AI use record, reviewer role, accepted output, client reliance, remediation | Professional judgment versus tool failure; disclosure and standard-of-care issues | Not legal or professional-liability advice |
| D&O / Governance | Board oversight, disclosure, risk-management failure, AI governance failure, cyber governance issue | Board materials, risk register, AI inventory, incident escalation, disclosure timeline | Governance claim versus operational loss; knowledge, materiality, conduct exclusions | Not D&O coverage analysis |
| General Liability / Product | AI-enabled product or generated action causes bodily injury, property damage, or other third-party loss | Product version, user interaction, tool action, physical-world effect, incident record | Product defect versus software/service; emerging form wording | Policy terms control |
| Media / IP | Generated or distributed content creates IP, defamation, advertising, or publication dispute | Prompt/output, provenance, rights review, publication approval, takedown/remediation | Media liability versus IP exclusions versus tech service | Not IP or media coverage advice |
| Employment Practices | AI-supported hiring, screening, discipline, scheduling, or performance decision | Decision workflow, data sources, criteria, human review, adverse action record | Employment practice versus technology error; discrimination causation | Not employment-law advice |
| Crime / Fraud | Deepfake, invoice manipulation, synthetic identity, payment instruction abuse, social engineering | Communication record, payment approval, callback controls, identity verification, authority trace | Crime versus cyber/social-engineering limit; voluntary transfer issues | Does not assume crime coverage |
| Property / Business Interruption | Agentic workflow, cloud, deployment, or automation disrupts operations | Outage timeline, dependency map, affected systems, recovery record, financial impact | Cyber/technology/property boundary; direct versus contingent BI | Not loss measurement or coverage opinion |

Evidence helps sort these lines because it prevents the event from being described as "an AI problem." It shows whether the loss-relevant action was access, advice, deployment, payment, content publication, governance disclosure, data handling, service outage, or product behavior. But sorting is not deciding. The paper does not interpret policies, advise insureds, recommend procurement, or tell claims teams how to pay or deny a claim.

The boundary for this chapter: insurance line ambiguity analysis is not legal advice, insurance advice, underwriting guidance, coverage opinion, claim approval guidance, legal liability determination, certification, proof of insurability, insurer endorsement, or a regulator-approved method. It is an object-and-evidence map for understanding why the same agentic event can raise multiple insurance questions.

The next chapter moves from line ambiguity to portfolio ambiguity. Even when one event can be reconstructed, agentic AI can create aggregation and concentration risk through shared models, vendors, runtimes, cloud dependencies, reusable agents, and common workflows.

### Chapter 12: Aggregation, Reinsurance, and Concentration Risk in Agentic AI

One agentic incident is difficult enough. Many similar incidents across the same dependency can become a different kind of insurance problem.

An enterprise may deploy a procurement agent in one division, a refund agent in another, a code agent in engineering, and a customer-response agent in support. Each workflow looks separate to its business owner. Under the surface, they may share the same model provider, orchestration framework, cloud region, authentication service, vector database, tool connector, logging vendor, or prompt library. A failure in that shared layer can affect many work units at once.

For insurers and reinsurers, the concern is not only individual incident severity. It is repeated, correlated, or systemic event shape.

Cyber insurance already gives the closest external analogy. Geneva Association cyber-accumulation work highlights the challenge of common technologies, shared vulnerabilities, providers, systemic loss, quantification limits, and capital capacity. Swiss Re's cloud concentration work emphasizes visibility into shared infrastructure dependencies. Geneva Association's GenAI insurance work adds a more direct AI-business risk context. These sources do not provide an actuarial model for agentic AI. They support the narrower conclusion that shared dependencies matter for insurability reasoning. [38] [39] [40]

Agentic AI adds a lifecycle layer to the cyber/cloud accumulation problem. The question is not only "which technology dependency failed?" It is also "which delegated work objects depended on it, under what authority, with what evidence, and with what accepted outcomes?"

A single reusable agent component can create correlated loss inside one organization. The same agent that classifies support tickets may be reused to classify refund requests, compliance inquiries, and escalation severity. If the component has a hidden failure mode, the losses may appear in different business units and policy lines. Without cross-project lifecycle records, the organization may not see the common object.

A single model or runtime change can create correlated behavior across many workflows. The model may become more permissive, less cautious, more verbose, more likely to call a tool, or less stable under certain prompts. If substitution conformance is not recorded, the enterprise may be unable to identify which workflows changed and which accepted outcomes were affected.

A single vendor or cloud dependency can create portfolio-level exposure. The same API, cloud region, identity provider, logging service, data processor, or orchestration platform can sit inside many insured operations. If it fails, is compromised, changes behavior, or becomes unavailable, the loss may not stay inside one policyholder's isolated workflow.

A single tool connector can create action concentration. Many agents may share the same permission to send emails, update accounts, create tickets, execute code, transfer files, approve payments, or access customer data. The concentration is not just the connector. It is the authority attached to the connector.

A single prompt, policy, or guardrail pattern can create governance concentration. If an enterprise copies one agent instruction template across many workflows, the same ambiguity can repeat across customer service, finance, operations, and engineering. A reused guardrail may be a control. It may also be a common failure point.

A single evidence architecture can create reconstruction concentration. If logs are retained too briefly, vendor records are inaccessible, privacy redaction removes source pointers, or tool-action records are not joined to approvals, then many agentic incidents may become unreconstructable at once.

Reinsurers care about aggregation because an apparently diversified book can contain hidden common dependencies. Enterprises should care for the same reason inside the firm. A risk leader may think ten workflows create ten separate exposures. In practice, they may create one concentrated dependency repeated ten times.

Dependency mapping and substitution conformance make aggregation visible. They do not solve it automatically. A dependency map should identify shared models, runtime layers, cloud services, APIs, tool connectors, data sources, processors, subprocessors, prompt libraries, authentication services, and evidence repositories. Substitution records should show when those dependencies changed, which work units were affected, and whether authority, privacy, evidence, and accepted-outcome boundaries remained intact.

#### T-12-01 - Agentic Aggregation Risk Map

| Aggregation vector | Example pattern | Evidence needed | Reinsurance or portfolio concern | Boundary note |
|---|---|---|---|---|
| Shared model provider | Many workflows use one model endpoint for customer, finance, and code tasks | Model inventory, endpoint/version map, affected work units, substitution record | Correlated behavior change or outage across business lines | Not an actuarial pricing model |
| Shared runtime/orchestration layer | One agent framework routes plans, tools, memory, and approvals across teams | Runtime version, policy config, tool permissions, incident logs | Common control failure across workflows | Not reinsurer acceptance proof |
| Shared cloud/API dependency | Agents depend on one cloud region, API, identity provider, or service account | Cloud/API map, identity logs, usage records, outage/incident timeline | Accumulation through common infrastructure | Cloud analogy does not fully solve AI risk |
| Reusable agent component | A classifier or planner is reused across support, billing, compliance, and operations | Component registry, reuse approvals, authority changes, context changes | Same defect repeated under different scopes | Not a procurement recommendation |
| Shared tool connector | Multiple agents can send email, approve refunds, update ERP, deploy code, or transfer files | Tool permission map, action logs, escalation rules, external consequence records | Concentrated external-action authority | Does not determine policy line |
| Shared vendor/processor chain | Model, logging, storage, data labeling, or monitoring vendors hold key records | Vendor/subprocessor map, record access terms, retention and notice records | Evidence custody and common vendor failure | Not vendor ranking |
| Shared prompt or policy template | One instruction pattern is copied into many workflows | Prompt library, template version, deployment map, exception history | Repeated governance ambiguity or guardrail failure | Not a compliance certification |
| Shared evidence repository | Many workflows rely on one logging or evidence system | Evidence partition, retention rules, access controls, missing-evidence register | Reconstruction failure can affect many incidents | Not claim approval guidance |
| Cross-insured dependency | Many insureds rely on the same cloud, model, API, or AI service vendor | Portfolio dependency data, public/vendor incident records, concentration analysis | Correlated losses across a portfolio | Author analytical inference unless source-backed |

The table deliberately stops before pricing. It does not offer rates, capital models, actuarial assumptions, accumulation thresholds, reinsurance attachment points, or portfolio management instructions. It says only that agentic AI can concentrate exposure through shared components and that the concentration must become visible before it can be discussed responsibly.

There is also a governance lesson. If the enterprise does not know which workflows depend on the same component, it cannot know which work units to review after a vendor change, model incident, cloud outage, prompt vulnerability, or tool permission error. The loss may look isolated because the evidence architecture is isolated.

The boundary for this chapter: aggregation analysis is not actuarial pricing guidance, not reinsurance underwriting guidance, not capital modeling, not legal advice, not insurance advice, not coverage opinion, not certification, not proof of insurability, not insurer endorsement, and not a regulator-approved method. Cyber and cloud accumulation sources are used as analogy and context unless the source directly addresses GenAI business risk.

The next chapter addresses a tension that runs through every evidence discussion in this paper. Insurance review needs records. Privacy, security, privilege, and data-minimization duties limit what records should be collected, retained, copied, or disclosed.

### Chapter 13: Privacy, Evidence Minimization, and Insurance Review

Agentic AI creates a temptation: keep everything.

Keep every prompt. Keep every output. Keep every tool call. Keep every customer payload. Keep every memory entry. Keep every retrieved document. Keep every approval screen. Keep every vendor log. Keep every incident note. Keep every trace forever, just in case an insurer, auditor, regulator, lawyer, customer, or executive asks for it later.

That instinct is understandable. It is also dangerous.

Insurance review needs evidence, but uncontrolled evidence retention can create privacy, security, privilege, contractual, and legal exposure. Personal data may appear in prompts, memory, tool payloads, customer records, employee records, model outputs, retrieval context, incident tickets, vendor logs, screenshots, monitoring dashboards, and claim evidence packs. Secrets and credentials may appear in traces. Privileged communications may appear in remediation notes. Vendor confidential information may appear in dependency records.

Evidence maturity is not the same as hoarding. A mature evidence model preserves the ability to reconstruct the event while minimizing unnecessary sensitive-data exposure.

This is where WP1 privacy MROs and WP2 selective-disclosure concepts become important. WP1 helps name privacy lifecycle mapping, evidence minimization, selective disclosure, data subject rights tension, and third-party processor chains. WP2 helps distinguish source pointers from bulk evidence dumps and reviewable evidence from unrestricted trace collection. These are analytical foundations, not GDPR advice, privacy legal advice, insurance requirements, or certification methods. [28] [31]

The core tension is simple. Underwriting and claim review may need to understand authority, role, tool action, accepted outcome, affected data class, external consequence, exception history, and remediation closure. But those records may contain more data than the reviewer needs to see. A good evidence architecture therefore separates existence, pointer, class, access, and disclosure.

Source pointers are often better than copies. A claim evidence pack can identify the system of record, timestamp, owner, retention period, hash or integrity marker where appropriate, and access pathway without duplicating sensitive payloads into a new uncontrolled file.

Redaction profiles should be designed before incidents. The organization should know which fields can be masked, tokenized, summarized, or disclosed under role-based access. If redaction is invented after a loss, the team may either over-disclose sensitive data or destroy context needed for reconstruction.

Access controls matter because evidence audiences differ. Engineering, counsel, brokers, insurers, vendors, auditors, regulators, and executives do not all need the same records. Some may need summaries. Some may need source pointers. Some may need full technical logs under controlled conditions. Some should not receive personal data, secrets, privileged materials, or vendor confidential information at all.

Data-class labels make evidence more useful. A prompt containing public information, personal data, payment data, health information, source code, security secret, regulated customer record, or privileged communication should not be treated as one generic trace. Labeling helps decide what can be retained, disclosed, minimized, or escalated.

Retention notes matter because evidence can disappear. Logs roll off. Vendor dashboards expire. Model records may be inaccessible after version changes. Data rights requests may require deletion or restriction. Contract terms may limit retention. Security policies may delete secrets. If evidence must be preserved for review, the retention basis and limits should be visible.

Privilege flags matter because incident response and legal review may create protected communications. WP3 does not define privilege. It simply observes that evidence packs should not flatten privileged and non-privileged records into one uncontrolled bundle.

Third-party evidence creates a special problem. A vendor may hold model logs, runtime records, security events, cloud usage, monitoring data, or subprocessor details. The enterprise may need those records for reconstruction but may not have them by default. Processor and subprocessor mapping therefore belongs in the insurance evidence conversation. It is not only a privacy or procurement exercise.

Privacy-preserving third-party validation may become useful when direct disclosure is too sensitive. A reviewer may need assurance that evidence exists and supports a fact without receiving raw data. That can mean selective disclosure, controlled review rooms, redacted extracts, attestations limited to existence and integrity, or source-pointer verification. This paper does not define a validation standard. It identifies the evidence problem.

#### T-13-01 - Insurance Evidence vs Privacy Control Map

| Evidence need | Privacy risk | Control pattern | Related MRO | Boundary note |
|---|---|---|---|---|
| Work unit ID and event scope | Identifier can expose customer, employee, project, or account information | Scoped ID, pseudonymous reference, system-of-record pointer | Evidence partitioning | Not legal sufficiency proof |
| Prompt/output record | May contain personal data, secrets, proprietary content, or privileged material | Redaction, field masking, source pointer, access tier | Privacy / GDPR lifecycle mapping | Not GDPR advice |
| Tool-action record | API payloads may include sensitive customer or operational data | Payload minimization, action metadata, protected source record | Tool-action boundary; evidence minimization | Does not determine policy line |
| Human review record | Personnel data and privileged notes may be exposed | Role-based summary, privilege flag, reviewer-visible evidence pointer | Human role mapping; accepted outcome | Not liability determination |
| Vendor/model/runtime record | Vendor confidential data or subprocessor information may be restricted | Contract pointer, vendor evidence request path, controlled disclosure | Processor/subprocessor chain; substitution conformance | Not vendor certification |
| Affected data class | Overbroad disclosure can expose unnecessary personal data | Data-class label, affected population range, redacted sample if needed | Privacy lifecycle mapping | Not regulatory advice |
| Incident timeline | Security-sensitive details may expose vulnerabilities or response playbooks | Need-to-know access, segmented timeline, sensitive-detail appendix | Incident and remediation closure | Not claims approval guidance |
| Exception and override history | Employee behavior or customer details may appear | Aggregated pattern plus source pointer for detailed review | Exception path; evidence partition | Not employment or legal advice |
| Remediation closure | Legal strategy, privileged analysis, or vendor defects may be included | Closure summary, residual-risk note, privilege segmentation | Remediation closure | Does not prove no residual liability |
| Claim Evidence Pack disclosure | Bulk evidence sharing can create secondary privacy/security exposure | Selective disclosure, redaction profile, access log, retention note | Evidence minimization and selective disclosure | Not insurance advice or coverage opinion |

The most practical design move is an evidence index. The index should not be a dump of sensitive data. It should tell future reviewers what exists, where it lives, who owns it, what class of data it contains, what access controls apply, what retention limits exist, what redactions are available, what privilege concerns may exist, and what evidence is missing.

That index can support underwriting conversations, claim reconstruction, renewal review, and governance oversight without turning every agentic trace into a portable liability file.

The privacy chapter also reinforces the negative space from Chapter 8. A system can be hard to insure not only because it lacks evidence, but because it keeps evidence irresponsibly. Opaque execution is a problem. So is uncontrolled trace retention. The insurability question is not "more logs or fewer logs." It is whether the right evidence can be preserved, minimized, protected, and reconstructed for the right review purpose.

The boundary for this chapter: privacy and evidence-minimization analysis is not GDPR advice, privacy legal advice, legal advice, insurance advice, underwriting guidance, coverage opinion, certification, proof of insurability, insurer endorsement, regulator approval, or claim approval guidance. It is an evidence design lens for reconciling reviewability with data protection, security, privilege, and controlled disclosure.

Part III closes the translation layer. WP1 contributes lifecycle governance objects. WP2 contributes auditability and evidence-chain discipline. Insurance adds separate questions: insured subject, line ambiguity, covered object, aggregation, privacy-controlled evidence, claim reconstruction, and risk transfer boundary. Part IV can now move into underwriting-facing architecture with a clearer warning: evidence can make agentic risk more reviewable, but reviewability is still not coverage, pricing, or acceptance.

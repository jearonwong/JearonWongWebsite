# Agentic AI Insurability & Risk Transfer White Paper 2026

## A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer

**R3A Draft Scope:** Front Matter and Part I only.

## Front Matter

### Executive Thesis

The first insurance question for agentic AI is not whether "AI" is insured. That question is too large to answer and too vague to underwrite, broker, govern, or reconstruct after a loss.

The better question is more precise: when an AI agent participates in a loss, what exactly is being transferred? Is the insured subject the company that deployed the workflow, the professional who relied on it, the director or officer who oversaw the program, the vendor that supplied a model or platform, or another legal person named by a policy? Is the risk object the model, the output, the tool call, the business workflow, the delegated authority, the human approval event, the vendor dependency, the cyber event, or the completed work unit that produced the loss?

That distinction is the center of this paper. AI agents are usually not the insured legal subject. They are better understood, for insurance analysis, as loss-relevant parts of an agentic risk object: a bounded lifecycle work unit that can generate, shape, amplify, or obscure a loss. The insurable question is how that risk object maps back to a legal subject, a human responsibility role, a policy line, a coverage boundary, an underwriting evidence package, a claim reconstruction path, and a lifecycle evidence chain.

This is why agentic AI creates pressure that ordinary AI governance language does not resolve. A model can produce an output. A tool can execute an action. A human can approve a step. A vendor can host a service. A company can be the policyholder. A customer can suffer harm. An insurer can ask for evidence. A claim reviewer can ask what happened, who had authority, what policy line is implicated, what exclusion or sublimit may apply, and whether the event can be reconstructed. Those questions do not collapse into "AI was involved."

The public insurance market is already showing that split. Some AI-related risks are being packaged into affirmative products, including model-performance insurance, AI warranties, and AI-linked cyber coverages. Some AI risks are being bounded through form development, exclusions, endorsements, underwriting flexibility, limits, or sublimits. Some exposure remains silent inside existing lines such as cyber, E&O, Tech E&O, D&O, professional liability, media/IP, crime, and employment practices liability. Reinsurers and industry researchers are also watching accumulation, shared dependency, and systemic-loss questions around digital infrastructure and generative AI. The result is not a single market verdict. It is a mixed market that asks for sharper objects, better evidence, and cleaner boundaries. [1] [2] [3] [4] [5] [6] [7]

This paper uses that market split as the starting point. It does not begin with an internal model, a protocol claim, a maturity score, or a promise that lifecycle governance makes systems insurable. It begins with the practical problem faced by insurers, reinsurers, brokers, risk leaders, counsel, boards, finance leaders, and engineering teams: if an agentic workflow causes or contributes to a loss, can the organization identify the insured subject, the agentic risk object, the delegated authority, the human role, the dependency chain, the policy line, the relevant evidence, and the post-loss reconstruction path?

WP1 and WP2 matter because they help answer that evidence problem. WP1 provides lifecycle governance objects: authority boundary, evidence partition, accepted outcome, substitution conformance, remediation closure, responsibility objects, and dependency visibility. WP2 provides auditability concepts: an Audit Evidence Chain, auditability object, evidence request logic, and evidence sufficiency boundaries. But these papers do not make an AI system insurable. Auditability is necessary for risk transfer discussion because records matter. It is not sufficient because insurance also depends on legal subject, policy language, exclusions, limits, causation, notice, loss measurement, underwriting appetite, and claim review. [8] [9]

The role of this paper is therefore narrower and more useful than a claim that agentic AI is or is not insurable. It is a lifecycle evidence guide for reasoning about insurability. It explains what can be discussed as an insurable object, what cannot be assumed to be transferable, what evidence an insurer or risk reviewer would likely need, how compliance and auditability translate into insurance-facing reasoning, and why agentic AI needs claim reconstruction architecture before loss, not only incident response after loss.

Throughout the paper, the terms Agentic Insurability Objects and Agentic Insurability Readiness Model are analytical vocabulary only. They are not standards, certifications, coverage triggers, underwriting requirements, pricing tools, claim approval methods, or evidence of insurer acceptance. Actual coverage, pricing, underwriting, liability, and claim outcomes remain external, policy-specific, jurisdiction-specific, and decision-specific.

The thesis can be stated simply:

An AI agent is usually not the insured legal subject. The risk-transfer problem is whether the agentic work that caused or shaped a loss can be bounded, evidenced, mapped to responsible legal and human actors, reviewed against a policy line, and reconstructed after the event.

Everything that follows is a way of making that sentence operational without overclaiming it.

### Reader Map

This paper is written for readers who are facing the same problem from different sides of the table.

For insurers, the core need is object clarity. An underwriting or claim conversation cannot responsibly proceed if "AI system" means model, workflow, vendor service, customer-facing decision, human approval, API call, or all of those at once. Insurers need a way to separate the insured legal subject from the loss-generating work object, the policy line, the event trigger, the evidence set, and the reconstruction path. This paper does not provide an underwriting standard or pricing formula. It provides a vocabulary for asking cleaner questions.

For reinsurers, the central pressure is accumulation. Agentic AI can concentrate loss through shared models, cloud services, API dependencies, vendor platforms, common workflow patterns, or common failure modes. A single enterprise may see a workflow problem. A reinsurer may see a portfolio problem if many insureds depend on the same service layer or model ecosystem. This paper does not quantify capital, price systemic risk, or claim reinsurer acceptance. It explains why dependency visibility belongs in any serious insurability discussion. [7]

For brokers, the practical challenge is translating a confusing market into client language. A client may hear that AI coverage exists, that AI is excluded, that a cyber policy may respond to LLMjacking, that model warranties are available, or that D&O and E&O issues may arise. All of those statements can be partly true in different contexts. This paper gives brokers a way to explain the split without promising coverage or giving policy advice.

For CROs, the problem is risk inventory. Many enterprises can list AI tools, but cannot list the agentic work units that matter for risk transfer: what each workflow is authorized to do, what business value or customer impact it touches, what data and tools it uses, what human role accepts the outcome, what dependencies it has, what incident history exists, and what evidence survives after loss.

For CFOs, the question is risk transfer boundary. Finance leaders may ask whether AI risk can be insured, what might affect premium, or whether evidence maturity changes the discussion. The paper answers carefully: variables such as authority scope, severity, frequency, dependency concentration, incident history, and evidence completeness may matter as analytical exposure inputs. They are not pricing formulas or premium recommendations.

For CTOs and CIOs, the paper is a warning that technical logs are not the same as insurance evidence. Logs, traces, prompts, tool calls, API records, and cloud bills can be essential. They still need to be connected to authority, responsibility, accepted outcome, dependency, remediation, and policy-line context. Engineering systems that cannot preserve those links before loss will struggle to reconstruct them after loss.

For counsel, the value is boundary discipline. The paper separates evidence architecture from legal conclusions. It does not determine liability, legal causation, coverage, exclusions, notice obligations, or claim outcomes. It provides a structure for preserving and organizing facts so that legal and coverage review can happen with fewer blind spots.

For boards, the issue is oversight. AI risk is no longer only a model-management question. It may become a governance, disclosure, cyber, professional liability, operational, customer harm, or vendor concentration question. Boards do not need another abstract AI taxonomy. They need to know what records would show who approved the agentic work, what authority was delegated, what incident escalation occurred, what remediation closed the loop, and whether the organization can explain the loss after the fact.

For AI governance leaders, this paper translates governance into risk-transfer reasoning. Policies, controls, model inventories, and review gates matter only if they can be tied to the work that created the risk. The paper keeps governance useful by asking whether each governance object survives underwriting discussion and claim reconstruction.

For engineering implementation leaders, the paper is concrete. It asks what must be recorded before something goes wrong: authority grants, tool permissions, model and vendor versions, human review criteria, accepted outcomes, incident timelines, substitution records, and remediation closure. Those records do not guarantee coverage. They make the work legible.

The shared reader problem is this: everyone can say "AI was involved." That is not enough. The paper is for readers who need to know what was involved, who owned it, what it was authorized to do, how it failed or contributed to loss, what evidence exists, and what kind of insurance question that evidence can support.

### Boundary and Non-Claim Note

This paper is an analytical lifecycle evidence guide. It is not legal advice. It is not insurance advice. It is not a coverage opinion. It is not an underwriting standard. It is not actuarial pricing guidance. It is not a premium recommendation. It is not claims approval guidance. It does not determine legal liability, legal causation, policy interpretation, loss amount, claim payment, exclusion application, sublimit application, or insurer appetite.

The paper does not claim that AI is broadly insurable. It does not claim that AI is uninsurable. It does not claim that insurers accept agentic AI risk transfer as a category. It does not claim that any insurer, reinsurer, broker, regulator, standards body, or market participant has adopted the analytical vocabulary used here. It does not claim that AIO, AIRM, WP1, WP2, GAIC, AIAAWP, or any lifecycle evidence method makes a system coverage-ready, underwriting-ready, certified, approved, endorsed, or claim-ready.

The paper does make a narrower claim: public sources show a split insurance market around AI-related risk, and that split makes object clarity and evidence discipline more important. Some sources show affirmative AI-related products. Some show form development and boundary tools. Some show cyber-linked AI coverage or cyber evidence needs. Some show silent exposure across traditional lines. Some show aggregation and dependency concerns. Together, those sources support a practical conclusion: agentic AI risk transfer cannot be discussed responsibly unless the insured subject, agentic risk object, event trigger, evidence chain, responsibility map, and policy line are kept separate. [1] [2] [3] [4] [5] [6] [7]

The paper uses source notes to distinguish public market evidence from analytical synthesis. Product pages are used as product examples, not as proof of market-wide acceptance. Broker and industry reports are used for market context, not for policy wording. Technical and incident-response sources are used for evidence architecture, not for insurance-market proof. WP1 and WP2 are used as internal source truth for lifecycle governance and auditability concepts, not as external insurance facts.

That discipline matters. Insurance is a contract and a market practice. Agentic AI is an operating pattern. A lifecycle evidence model can help the two meet, but it cannot replace policy terms, underwriting judgment, broker advice, legal review, actuarial analysis, or claim handling.

### Relationship to WP1 and WP2

This is the third paper in an intended series, but it should not be read as a simple continuation of the first two. It changes the pressure test.

WP1, the Global AI Compliance White Paper, asks how agentic and multi-agent systems become governable across lifecycle responsibility. It develops Missing Regulatory Objects, authority boundary, evidence partition, accepted outcome, substitution conformance, remediation closure, and lifecycle conformance reasoning. These concepts matter because insurance-facing evidence is rarely created at the moment of claim. It is created, or lost, during ordinary system operation. If the enterprise never records who authorized the work, which object was accepted, which dependency changed, or who closed remediation, it cannot reliably invent those facts after loss. [8]

WP2, the Agentic AI Auditability & Assurance White Paper, asks how agentic systems become auditable. It develops the Audit Evidence Chain and related auditability concepts. That matters because logs alone are not enough. A log can show that an API was called. It may not show whether the call was authorized, whether the output was accepted, whether a human reviewer understood the boundary, whether a vendor dependency changed, whether an exception was escalated, or whether remediation closed the risk. [9]

WP3 translates those ideas into insurability reasoning, but only after starting with the insurance market. That sequence is deliberate. If the paper began with governance objects, it would risk sounding like it is declaring insurance categories by theory. It does not. The market reality comes first: some AI risks are covered, some bounded, some silent, some cyber-linked, some warranty-like, some aggregation-sensitive, and some not yet cleanly named. Only after that reality is visible does WP1/WP2 vocabulary become useful.

The relationship can be summarized this way:

| Layer | What it asks | What it contributes to WP3 | What it does not do |
|---|---|---|---|
| Compliance and lifecycle governance | Can the enterprise define authority, responsibility, evidence, accepted outcome, substitution, and remediation? | Gives agentic work a lifecycle structure that can later support risk review | Does not prove coverage or legal compliance |
| Auditability and assurance | Can a reviewer reconstruct evidence, sufficiency, scope, and boundary? | Gives logs and records an evidence chain rather than a pile of artifacts | Does not approve claims or make risk transferable |
| Insurability reasoning | Can an insurer or risk reviewer identify the insured subject, risk object, policy line, event, evidence, and reconstruction path? | Connects governance and auditability to underwriting and claims questions | Does not bind insurers or decide coverage |

The key sentence for readers is this: auditability is necessary but not sufficient for risk transfer. It is necessary because a loss that cannot be reconstructed is difficult to discuss. It is not sufficient because even excellent evidence must still meet policy terms, legal standards, underwriting judgment, claim handling requirements, and coverage boundaries outside this paper.

### How to Read This Paper

Part I establishes market reality. It asks what is being transferred, shows how the market is already splitting AI risk, and explains why model-performance or AI-linked cyber coverage is not the same as agentic lifecycle risk transfer. If you read only one part first, read Part I. It prevents the rest of the paper from becoming internal theory.

Part II defines the core object problem. It separates insured subject from agentic risk object, then shows why responsibility must be mapped across human roles, agent roles, corporate ownership, and vendor/platform dependencies. It also explains why "human in the loop" is not a responsibility structure by itself.

Part III translates WP1 and WP2 into insurability reasoning. It shows how lifecycle governance objects and audit evidence chains can support underwriting discussion and claim reconstruction, while preserving the boundary that governance and auditability do not equal insurance.

Part IV turns the object problem into underwriting-facing evidence. It defines the evidence pack, exposure inventory, premium-relevant analytical variables, dependency concentration, and aggregation visibility needed for serious risk-transfer discussion. It does not price risk.

Part V turns the same architecture toward claims and disputes. It asks what evidence would be needed after loss: incident timeline, technical trace, authority trace, human/agent role trace, causality trace, policy boundary, and remediation closure. It does not approve claims or determine liability.

Part VI introduces AIO v2 and AIRM v2 only after the market, object, underwriting, and claim problems are established. These models are vocabulary for organizing evidence and readiness. They are not standards or certifications.

The appendices are intended to make the body usable: a market signal register, WP1/WP2 mappings, underwriting evidence request template, claim reconstruction package, premium variable dictionary, and boundary language table.

The best way to read the paper is from the outside in. Start with the market. Then define the object. Then ask what evidence survives. Then ask what underwriting and claim reconstruction can responsibly do with that evidence.

## Part I: The Insurance Market Has Already Split AI Risk

### Chapter 1: The New Insurance Question: What Exactly Is Being Transferred?

The meeting usually starts with the wrong question.

A business leader asks, "Are our AI agents insured?" A broker hears a version of it from a client. A CFO asks whether the new AI program changes premium. A CTO asks whether logs will be enough if something goes wrong. Counsel asks whether the vendor agreement or the company's own policy responds. A board member asks whether oversight records are adequate. Everyone wants a direct answer.

The direct answer is not available because the question is not precise enough.

Insurance does not usually begin with "the AI system." It begins with a named or described insured, a policy line, a covered event, conditions, exclusions, limits, sublimits, notice obligations, loss measurement, and claim evidence. Even before one reaches the policy text, there is a factual problem: what happened? Who did it? What was authorized? What object caused or shaped the loss? Was the event cyber, professional error, product failure, governance failure, employment practice, media/IP, crime, or something else? What evidence exists?

Agentic AI compresses those questions into one operational surface. A single workflow may involve a model, a prompt, a planning step, a tool call, an API, a vendor platform, a cloud service, a human reviewer, a business owner, a customer-impacting action, and a remediation record. After a loss, the enterprise may call that an "AI incident." The insurance file cannot stop there.

Consider a simple support workflow. A company deploys an AI agent to handle customer account requests. It can approve refunds under a threshold, update account records, trigger an external payment or CRM API, and send customer-facing notices. A customer asks for a refund after a disputed transaction. The agent reads the account history, selects a response, updates the account, triggers an external API, and sends a notice. Something goes wrong. The wrong customer receives the notice. The refund is processed twice. An account flag is changed incorrectly. A downstream partner receives an instruction that causes a service interruption. A complaint follows.

The first question is not "was AI involved?" Of course it was. That fact is too broad to settle anything. The useful questions are:

- Who is the insured subject?
- Which policy line could be implicated?
- What work object generated or shaped the loss?
- What authority was delegated to the workflow?
- Which human role reviewed, approved, supervised, or accepted the outcome?
- What model, tool, API, vendor, or cloud dependency participated?
- What event trigger matters for the policy line?
- What exclusion, limitation, or sublimit may need to be reviewed?
- What evidence exists to reconstruct the event?
- What remediation was performed and by whom?

Those questions reveal the core architecture of agentic AI insurability. The company may be the policyholder. A director or officer may be relevant if the loss turns into an oversight, disclosure, or governance question. A professional may be relevant under professional liability if the workflow supported advice or client service. A vendor or service provider may be relevant under contract, technology liability, or indemnity analysis. The AI agent may be central to the facts. But the AI agent is usually not the insured legal subject. It is not the policyholder. It is not usually the legal person whose liability is being insured. It is part of the work object that must be reconstructed.

This separation sounds simple until a loss occurs. In ordinary software incidents, the organization may identify the application, transaction, user, and failure mode. In agentic workflows, the failure may sit across a chain: a model output was plausible, a planner selected a tool, an API call executed, a human reviewer relied on a summary, a vendor service returned stale data, and the final business action caused loss. The "object" is not one component. It is the bounded work unit that connects authority, action, dependency, evidence, accepted outcome, and remediation.

That is why the phrase "AI risk transfer" can mislead. Risk transfer does not transfer a vibe. It transfers defined risks through policy language and market mechanisms. If the enterprise cannot say whether the risk object is model performance, cyber abuse, professional reliance, product underperformance, governance failure, customer harm, fraud, or vendor dependency, then it cannot have a serious conversation about transfer. It can only ask for a broad reassurance that the market is not in a position to give.

Public market sources already show this narrowing. Verisk/ISO has described form-development work around generative AI liability exposure in general liability filings, which signals that insurance infrastructure is trying to create language for boundaries rather than treating all AI exposure as one thing. [1] QBE has announced AI-focused cyber coverages and published LLMjacking guidance, which signals that AI-linked cyber risk can be addressed through a cyber lens while still requiring access, usage, and incident evidence. [2] [3] Munich Re describes AI performance insurance structures, which signals that some AI performance risk can be defined as a covered or warranty-like object. [4] These are different signals. They do not answer the same question.

If a customer refund agent causes a loss, a model-performance product might ask whether an AI model failed a defined performance promise. A cyber policy might ask whether there was unauthorized access, credential abuse, data compromise, or compute misuse. A professional liability policy might ask whether a professional service error occurred. A D&O policy might ask whether governance or disclosure failures are implicated. A general liability or product liability context might ask whether a third-party injury or property damage theory exists, subject to policy language. The agentic workflow sits across those questions, but none of them is identical to "the AI system."

This is the first principle of the paper:

The insured subject and the agentic risk object must be separated.

The insured subject is the legal person or organization whose risk may be addressed by a policy. The agentic risk object is the bounded work unit that generated, shaped, or obscured the loss. The two must connect, but they are not the same.

The second principle is that evidence must be separated from conclusion. Logs, traces, prompts, outputs, API records, and cloud usage records may be useful. They do not by themselves determine coverage, causation, liability, or claim outcome. They are inputs into reconstruction. For an agentic workflow, useful evidence must connect what happened technically to who had authority, who reviewed or accepted the outcome, which dependency participated, what policy line is implicated, and what remediation closed or failed to close the event. NIST and CISA incident response materials support the importance of structured timelines, response coordination, containment, recovery, and remediation records, but they do not turn those records into claim approval. [10] [11]

The third principle is that market signal is not market consensus. A product page, filing description, broker report, or industry research paper can show that a category is emerging or being bounded. It cannot be stretched into a universal statement that AI is covered, excluded, insurable, uninsurable, accepted, or rejected. The market is not making one decision about AI. It is sorting AI into narrower objects.

That sorting changes enterprise preparation. If a company wants to discuss risk transfer for an agentic workflow, it should not begin with a slide listing model names. It should begin with the insurance transfer question stack:

| Question | What the reader must identify | Why it matters |
|---|---|---|
| Insured subject | Company, officer, professional, vendor, platform, or other legal subject | Insurance attaches to legal subjects and policy definitions, not loose technology labels |
| Risk object | Model, output, workflow, delegated action, API call, professional deliverable, governance decision, or bounded work unit | The object shapes the policy line, evidence, and causality review |
| Event trigger | Cyber event, professional error, product failure, governance failure, fraud, media/IP event, customer harm, or other loss type | Different lines ask different questions |
| Authority | What the agentic workflow was allowed to do and under whose control | Delegated authority changes exposure and responsibility analysis |
| Evidence | Logs, traces, approvals, prompts, tool calls, dependency records, incident timeline, remediation records | Without evidence, the event cannot be reconstructed reliably |
| Boundary | Exclusion, endorsement, limit, sublimit, condition, notice, or policy-specific review point | Transfer may be partial, bounded, or unavailable depending on policy terms |

This table is not an underwriting standard. It is a thinking tool. Its purpose is to stop the enterprise from collapsing the whole loss into "AI." It gives the broker, insurer, counsel, risk team, and engineering team a common starting point.

The hardest part is cultural. Organizations like broad labels because they are easy to govern at the dashboard level. "AI system" is a broad label. "Agentic workflow" is a broad label. "LLM incident" is a broad label. But insurance is often forced to ask a narrower question after the fact. What was the action? Who authorized it? What line is implicated? What evidence survived? What changed after the event? What can be reconstructed?

Agentic AI makes that question urgent because the work is not only predictive. It can be delegated, tool-using, workflow-shaping, customer-facing, vendor-dependent, and partially autonomous. The final output may be less important than the path by which the work was authorized, executed, accepted, and remediated.

This is where WP1 and WP2 will later help. WP1 gives language for lifecycle objects such as authority boundary, accepted outcome, evidence partition, substitution conformance, and remediation closure. WP2 gives language for evidence chains and auditability. But those are not the opening argument. The opening argument is market-facing: if the insurance question is unclear, the enterprise has not yet defined the thing it is trying to transfer.

Once that becomes visible, the next chapter can ask what the market is doing with the ambiguity. It is not answering with one yes or no. It is covering some AI risks, excluding or bounding some, limiting some, leaving some silent, and packaging some model-performance risks in narrower products. That split is the market's way of telling enterprises that the object problem is real.

### Chapter 2: What the Market Is Already Doing: Cover, Exclude, Sublimit, or Leave Silent

The AI insurance market is not a clean story. That is the point.

One buyer hears that AI insurance products exist. Another hears that insurers are writing AI exclusions. A cyber team hears that LLMjacking may be addressed through a cyber product. A professional-services firm hears that AI errors may create E&O exposure. A board hears that AI governance and cyber disclosure are becoming oversight concerns. A cloud-dependent engineering team hears that shared infrastructure creates accumulation risk. Everyone is hearing a fragment of the same larger pattern.

The market is splitting AI risk.

That split is more useful than either extreme. It is not accurate to say that AI is broadly covered. It is not accurate to say that AI is uninsurable. It is not accurate to say that all insurers are excluding AI. It is not accurate to say that affirmative AI coverage proves market acceptance of agentic AI lifecycle risk transfer. Public sources show a more practical market reality: AI risk is being sorted into cover, exclusion, endorsement, sublimit, silent exposure, cyber-linked coverage, professional liability ambiguity, governance exposure, claim reconstruction needs, aggregation concerns, and model-performance warranty structures. [1] [2] [3] [4] [5] [6] [7] [12]

That is why Chapter 2 matters. It proves that the paper is not inventing a theoretical problem. The problem is already visible in market behavior.

Imagine a broker receiving three questions in the same week.

The first client is an AI vendor that wants to offer buyers a performance warranty for its model. It asks whether underperformance against agreed metrics can be insured or backed by an insurance-linked product. Public sources from Munich Re, Armilla, and Chaucer show that product-specific AI performance and underperformance structures exist in defined contexts. [4] [5] [6]

The second client is a company whose cloud bill has spiked because stolen credentials were used to access LLM resources. It asks whether its cyber policy responds. QBE has published AI-focused cyber coverage announcements and LLMjacking materials that make this kind of AI-linked cyber risk concrete. [2] [3]

The third client is a company deploying generative AI into customer-facing and content-producing workflows. It asks whether general liability, professional liability, cyber, D&O, media/IP, or E&O policies will silently absorb the exposure. Verisk/ISO form-development activity and Aon market materials suggest that insurers and brokers are not treating these questions as settled. [1] [12] [13]

Those are not one question. They are three different insurance conversations. The fact that each contains "AI" does not make them interchangeable.

The following matrix is the evidence spine for Part I. It is intentionally framed as signal, not conclusion.

| Market signal | What is happening | What it proves | What it does not prove | AIIRWP implication |
|---|---|---|---|---|
| Affirmative AI cover | Munich Re, Armilla, Chaucer/Armilla, QBE, and Beazley examples show defined AI-related products or coverage contexts for performance, warranty, liability, cyber, or cloud/AI service risk. [2] [4] [5] [6] | Some AI-related risks can be packaged for transfer or warranty-like remediation in defined settings. | Broad agentic AI insurability, claim payment certainty, policy applicability to all AI workflows, or insurer acceptance of this paper's vocabulary. | Name the covered object and event before saying "AI coverage." |
| Exclusion / endorsement development | Verisk/ISO describes optional endorsements and rules around generative AI liability exposure; secondary reports point to named insurer exclusion activity that needs primary confirmation. [1] [14] | Insurance infrastructure is developing boundary tools for AI-related liability exposure. | Universal exclusion, AI uninsurability, final wording across all jurisdictions, or proof that every insurer is retreating. | Boundary formation shows the need to define the risk object and evidence boundary. |
| Sublimit / cap | Secondary reports describe AI-linked cyber caps or sublimit activity, while official QBE sources support AI-linked cyber coverage categories without giving all policy terms. [2] [15] | Some AI-linked transfer may be partial, limited, or specifically structured. | That cyber coverage equals agentic lifecycle coverage, or that exact sublimit wording is verified for all products. | Limit architecture is separate from coverage existence. |
| Silent AI exposure | Broker and insurer research discusses AI risk across existing lines such as cyber, E&O, Tech E&O, D&O, EPLI, crime, media/IP, and professional liability. [12] [13] | Existing insurance programs may face AI-linked ambiguity before dedicated AI products or exclusions resolve the issue. | That coverage applies, that coverage is denied, or that an insured is protected for every AI loss. | The insured subject may be covered while the agentic work object remains unclear. |
| Cyber-linked AI risk | QBE LLMjacking materials and AI-focused cyber announcements, plus cloud/AI service cyber examples, show compute abuse, API misuse, regulatory exposure, and cloud dependency as concrete risk channels. [2] [3] [16] | Cyber is one immediate channel for AI-linked loss and evidence reconstruction. | Complete AI insurance doctrine or lifecycle risk transfer. | Cyber records are useful, but they do not replace authority and responsibility evidence. |
| Professional liability ambiguity | Aon and product-specific AI liability sources point toward errors, professional reliance, technology services, and third-party liability issues. [6] [13] | AI can complicate professional service, technology, and liability analysis. | That professional liability coverage applies to every AI-assisted output. | The work unit and human acceptance path matter. |
| D&O / governance exposure | Aon AI risk materials, SEC cyber disclosure rules, and NAIC insurer AI governance context show governance, oversight, disclosure, and risk management relevance. [13] [17] [18] | AI risk can become a governance and oversight problem. | That D&O coverage applies or that any director/officer is liable. | Governance records must be separated from agent action and technical trace. |
| Claim reconstruction need | NIST, CISA, SEC, and QBE sources support timelines, incident response, coordination, containment, recovery, access logs, API records, and remediation evidence. [3] [10] [11] [17] | AI-linked losses require structured evidence after the event. | That incident response records guarantee claim approval. | Claim reconstruction requires more than final output or model trace. |
| Aggregation / reinsurance concern | Geneva Association and Swiss Re sources discuss cyber accumulation, generative AI risk, and cloud concentration. [7] [19] | Shared dependency and correlated loss matter to insurability analysis. | Actuarial pricing conclusions or reinsurer acceptance of agentic AI. | Agentic AI underwriting will need dependency visibility. |
| Model-performance warranty | Munich Re, Armilla, and Chaucer/Armilla examples focus on performance shortfall, KPI failure, model drift, hallucination, or underperformance in defined products. [4] [5] [6] | Model performance can be a defined object for transfer or warranty-like remediation. | That the entire agentic lifecycle is covered. | Model output/performance must be separated from delegated work. |
| Agentic lifecycle gap | The market examples mostly address model performance, cyber, product liability, professional liability, form boundaries, or silent exposure. | There is a gap between AI product coverage and end-to-end lifecycle work reconstruction. | That this paper's models are externally adopted or required. | WP3 can provide analytical vocabulary for subject, object, evidence, responsibility, and reconstruction. |

The first pattern in the matrix is affirmative coverage. It is real, and it matters. Munich Re's aiSure and related materials describe insurance approaches for AI performance risk and performance guarantees. Armilla describes AI insurance and warranty structures linked to performance, verification, and liability contexts. Chaucer's announced work with Armilla describes an AI third-party liability product for mechanical underperformance, hallucinations, model drift, and claims arising from underperformance. QBE has announced AI-focused cyber coverages. These examples show that market participants are not simply walking away from AI risk. [2] [4] [5] [6]

But the object matters. A model-performance warranty is not the same as a policy responding to every loss produced by an autonomous customer workflow. A cyber coverage extension is not the same as professional liability protection for AI-assisted advice. A cloud/AI service cyber product is not the same as coverage for every downstream business action triggered by an agent. The fact that a product exists tells us that a risk object can sometimes be defined. It does not tell us that all agentic risk has been made transferable.

The second pattern is exclusion and boundary formation. Verisk/ISO's general liability filing discussion is important because it shows that the market is developing optional endorsements and rules around generative AI liability exposures. [1] Whether a specific endorsement is adopted, filed, approved, or applied in a particular jurisdiction is a separate question. The safe conclusion is not that generative AI is excluded everywhere. The safe conclusion is that insurers and insurance infrastructure providers see a need for boundary tools.

That boundary formation is not a sideshow. It is the market saying: we need to know what kind of AI-related loss we are talking about. A generative AI content dispute, a product defect theory, a professional service error, a cyber incident, a customer refund error, and a board oversight failure are not interchangeable. If a policy form, endorsement, exclusion, or underwriting rule tries to draw a line, the enterprise needs evidence that can show on which side of the line its event belongs.

The third pattern is limits and sublimits. AI-linked cyber risk may be partially transferable while still being constrained. QBE's official materials support the existence of AI-focused cyber coverage categories and LLMjacking as a concrete cyber risk. Secondary reports about AI-linked cyber caps or sublimits are useful as market context, but not as primary policy wording. [2] [3] [15] The distinction matters because a sublimit is not the same as denial, and coverage existence is not the same as unlimited transfer. Limits are part of the architecture of risk transfer.

The fourth pattern is silent exposure. This may be the most common enterprise problem in the near term. Before a dedicated AI product or exclusion clearly addresses a loss, AI may enter through familiar lines: cyber, E&O, Tech E&O, D&O, EPLI, crime, professional liability, media/IP, or product liability. Aon materials frame AI as a cross-line risk issue for business leaders, not only a standalone product category. [12] [13] That does not mean coverage applies. It means the exposure may arrive through existing insurance language before the organization has built an AI-specific evidence file.

Silent exposure makes the insured subject vs risk object distinction sharper. A company may have a cyber policy. A professional firm may have professional liability coverage. A director or officer may be relevant under D&O. But the loss-generating object may be an agentic workflow, model output, tool call, API dependency, human approval event, or vendor platform. The policy might name the company. The evidence still has to reconstruct the work.

The fifth pattern is cyber-linked AI risk. LLMjacking is a useful example because it is concrete. It can involve stolen credentials, unauthorized use of LLM resources, abnormal token or compute consumption, API logs, identity records, cloud billing, containment, and remediation. QBE's LLMjacking material supports this evidence profile. [3] A cyber incident response file may include exactly the kind of artifacts that a claim reconstruction effort needs. But the same example also shows the limit of cyber framing. If the AI-linked loss is not only unauthorized access or compute abuse, but a delegated business action taken under valid credentials, cyber records may not answer the whole question.

The sixth pattern is professional liability and technology liability ambiguity. AI can sit inside advice, drafting, triage, code generation, underwriting support, claims support, financial analysis, engineering recommendations, medical workflow support, legal workflow support, customer service, or software-as-a-service delivery. If the loss is a professional error, product underperformance, technology service failure, or customer harm event, the policy-line question changes. Public product examples can show that AI liability products exist in defined settings, but they do not remove the need to ask what the professional or technology service actually did. [5] [6] [13]

The seventh pattern is governance exposure. AI risk can become a board, oversight, disclosure, control, or risk management issue. SEC cyber disclosure rules do not create insurance coverage, but they show why incident governance, materiality analysis, and board oversight records can matter for public companies. [17] NAIC insurer AI governance materials do not prove coverage for insureds, but they show that the insurance regulatory environment itself is paying attention to AI governance, risk management, controls, and third-party oversight. [18] For WP3, the implication is not that regulation equals insurance. It is that governance records can become part of the evidence environment.

The eighth pattern is claim reconstruction. NIST, CISA, QBE, and SEC sources point toward timelines, response procedures, access records, escalation, containment, remediation, and governance context. [3] [10] [11] [17] These sources are not insurance claim standards. They do not approve claims. They do show that post-loss review requires structured evidence. For agentic AI, that evidence must extend beyond ordinary incident response when the loss involves delegated authority, tool action, human acceptance, vendor dependency, or remediation closure.

The ninth pattern is aggregation. Reinsurers and insurance researchers are concerned with accumulation and correlated loss in cyber and digital infrastructure. Geneva Association work on cyber accumulation and generative AI risk, and Swiss Re work on cloud concentration, support the idea that shared dependencies matter. [7] [19] Agentic AI can intensify the same visibility problem. If many workflows depend on the same model provider, cloud service, API, orchestration tool, or vendor platform, then the enterprise and its insurers may need to understand correlation, not only isolated use cases.

The tenth pattern is model-performance warranty. This deserves its own category because it is often confused with broader AI insurance. A model-performance warranty can be a serious, useful product. It can define a performance promise, verification process, KPI, or underperformance remedy. It can make AI risk more legible in a narrow product context. But it does not automatically cover the lifecycle of agentic work. If a model performs within expected tolerance but the agent chooses the wrong tool, acts outside intended authority, relies on stale context, bypasses review, or triggers a harmful downstream action, the loss may not be a model-performance failure.

The final pattern is the agentic lifecycle gap. It is not a claim that no one covers AI. It is the gap between the objects the market is beginning to define and the work enterprises are beginning to delegate. The market has examples for model performance, warranty, cyber, technology liability, and form boundaries. Enterprises are building workflows that combine authority, planning, tool use, human review, vendor dependency, and customer impact. The gap is where WP3 lives.

What does this prove?

It proves that the insurance market is already asking narrower questions than "is AI insured?" It proves that AI-related risk can be covered in some settings, bounded in some settings, limited in some settings, and silent in some settings. It proves that evidence matters. It proves that the object being transferred must be named.

What does it not prove?

It does not prove broad agentic AI insurability. It does not prove universal exclusion. It does not prove claim payment. It does not prove that any insurer accepts AIO, AIRM, MPLP, or any WP3 vocabulary. It does not prove that a company with good logs is coverage-ready. It does not prove that auditability equals insurability.

The responsible conclusion is more practical:

The market is splitting AI risk because AI is not one risk object. Enterprises that want risk-transfer conversations need to define the subject, object, event, evidence, boundary, and reconstruction path before the loss, not after it.

That conclusion leads directly to Chapter 3. If some AI products and cyber coverages exist, the next danger is false confidence. The reader may assume that "LLM insurance," "AI warranty," or "AI cyber coverage" solves the agentic lifecycle problem. It does not. Those products may be useful and important. They ask narrower questions.

### Chapter 3: Why LLM Insurance Is Not Agentic Lifecycle Insurance

"AI insurance" is a label. It is not yet an answer.

The label can refer to several different things. It can mean model-performance insurance, where a model or AI solution fails to meet a defined performance target. It can mean a warranty or guarantee tied to AI product underperformance. It can mean third-party liability linked to model drift, hallucination, or underperformance in a defined product. It can mean AI-linked cyber coverage for LLMjacking, API misuse, cloud dependency, or regulatory costs. It can mean technology E&O, professional liability, or cyber lines encountering AI exposure without a dedicated AI product label.

Each of these categories matters. None should be dismissed. But none should be mistaken for end-to-end agentic lifecycle risk transfer.

The difference is easiest to see in a workflow example.

An enterprise uses a vendor model inside a customer-facing agent. The model produces a plausible output. The agent uses the output to select a next action. The agent calls a tool that updates a customer's account and triggers a downstream API. A human reviewer sees a short summary and approves the action. A vendor platform logs the tool call. The customer suffers a financial or service harm. The company later discovers that the model output was not obviously defective. The loss came from a combination of stale context, delegated authority, weak review criteria, and a tool action that was allowed but poorly bounded.

What question does model-performance insurance ask? It may ask whether the model or AI solution failed a defined performance promise, KPI, or agreed function. If the product is structured around underperformance, hallucination, model drift, or performance guarantee, the covered object is the model or AI product performance in that defined setting. Munich Re, Armilla, and Chaucer/Armilla sources support the existence of such product categories in public materials. [4] [5] [6]

What question does cyber coverage ask? It may ask whether there was unauthorized access, credential compromise, malicious activity, data exposure, compute abuse, business interruption, regulatory investigation, or another cyber-defined event. QBE's LLMjacking materials make the cyber version concrete: stolen access to LLM resources, abnormal usage, API logs, cloud or compute records, containment, and remediation. [2] [3]

What question does professional liability ask? It may ask whether a professional service or advice deliverable was defective, whether a human professional relied on AI inappropriately, whether a client relied on the output, and whether policy terms, exclusions, and professional standards are implicated. That is not the same as asking whether an AI model hit its KPI.

What question does agentic lifecycle risk ask? It asks how the work was authorized, planned, executed, reviewed, accepted, evidenced, changed, and remediated. It asks which legal subject owned the workflow, which human role accepted the outcome, which agent or tool performed the action, which vendor or cloud service participated, which authority boundary applied, which evidence survived, and whether the loss can be reconstructed. That is a broader operational question than model performance and a different question from cyber access.

This distinction is not a criticism of model-performance or AI cyber products. It is a boundary. A narrower product can be valuable precisely because it defines its object. If an AI vendor wants to give buyers confidence that a model will meet a specified performance promise, a model-performance warranty or insurance-backed product can address a real commercial problem. If an enterprise faces LLMjacking or AI-linked cyber abuse, cyber coverage and incident response services can address a real risk channel. The point is not that these products are weak. The point is that they are not the whole lifecycle.

Agentic lifecycle risk includes at least eight layers that model or cyber labels may not capture by themselves:

1. Authority: What was the workflow allowed to do?
2. Planning: How did the agent select a path or action?
3. Tool use: What external system, API, database, or service did it touch?
4. Human role: Who reviewed, approved, supervised, escalated, or accepted?
5. Dependency: Which model, vendor, cloud, API, or data source shaped the action?
6. Accepted outcome: What counted as done, correct, or approved?
7. Evidence: What logs, traces, approvals, records, and incident artifacts survived?
8. Remediation: What changed after the event, who owned the fix, and how was closure recorded?

These layers explain why a model can perform as expected while the agentic work still causes loss. A model can produce a plausible answer, but the workflow can apply it to the wrong account. A model can meet an accuracy benchmark, but the agent can call a tool outside the business context intended by the enterprise. A model can avoid hallucination, but a human reviewer can approve a summary without seeing the underlying evidence. A cyber policy can respond to credential theft, but not answer whether a validly authorized agent action created professional or operational loss. A warranty can address underperformance against a KPI, but not reconstruct authority, acceptance, dependency, and remediation across an enterprise workflow.

The same distinction applies to technical traces. Traces are useful. Logs are useful. Prompt records, output records, tool-call records, API logs, cloud bills, identity records, model versions, and vendor notices can be essential. It would be wrong to say they are useless. But they are not the same as claim evidence. A trace can show that a tool was called. It may not show whether the workflow had authority to call it, whether the human reviewer had the right context, whether the output was accepted under a defined criterion, whether the vendor dependency had changed, whether the policy line treats the event as cyber, E&O, Tech E&O, professional liability, product liability, crime, media/IP, or another category, or whether remediation closed the risk.

WP2's auditability concepts become useful here, but with a boundary. An Audit Evidence Chain can help an enterprise move from raw logs to structured evidence. It can ask what object is being reviewed, what evidence was requested, what was sufficient, what was missing, and what boundary caveat applies. For claim reconstruction, that logic helps. But audit evidence is not claim approval. A technically complete evidence chain still needs policy context, legal review, coverage review, causality analysis, loss measurement, and claim handling outside this paper. [9] [10] [11]

Model-performance products also show why "covered object" is the right phrase. In those products, the object is narrowed: a model, AI solution, performance promise, KPI, underperformance event, hallucination, drift, or defined liability scenario. That narrowing makes transfer more plausible because the parties can identify what is being measured. Agentic lifecycle risk must do something similar, but with a different object: not just the model, but the bounded lifecycle work unit.

That work unit is not fully defined in Part I. Part II will do that work. For now, the key is to see why it is needed. Without a bounded work unit, agentic AI remains a blur of model, prompt, tool, vendor, human, and output. With a bounded work unit, the enterprise can begin to ask: what was delegated, what was authorized, what evidence was captured, who accepted the outcome, and what policy line might be implicated?

The market's current signals make this distinction unavoidable. Affirmative AI coverage examples show that some AI objects can be defined. Exclusion and endorsement signals show that insurers want boundary language. AI cyber examples show that some AI-linked losses can be handled through existing or extended cyber lines, but with event and evidence constraints. Silent exposure shows that existing policies may be pulled into AI losses before dedicated language catches up. Aggregation research shows that shared dependencies can turn isolated workflow risk into correlated exposure. [1] [2] [3] [4] [5] [6] [7] [12] [13] [19]

The lifecycle gap sits between those signals.

For an enterprise, the gap is practical. It may have a model inventory but no work-unit inventory. It may have logs but no authority records. It may have a human review step but no responsibility structure. It may have vendor contracts but no dependency map. It may have incident response procedures but no claim reconstruction package. It may have strong governance language but no way to show which agentic work object caused the loss.

For an insurer or broker, the gap is equally practical. The conversation cannot stop at "AI." It must ask whether the loss is model performance, cyber, professional error, technology service failure, governance exposure, product liability, fraud, media/IP, employment practice, or something else. It must ask who is insured, what object is loss-relevant, what evidence exists, what policy language applies, and what remains unresolved.

For a reinsurer, the gap includes dependency concentration. If agentic workflows across many insureds use the same model, cloud service, API, orchestration framework, or vendor platform, then risk may accumulate through common infrastructure or common operating patterns. That is not a pricing conclusion. It is a visibility problem. [7] [19]

This chapter therefore makes a narrow but important claim:

LLM insurance, model-performance insurance, AI warranty products, and AI-linked cyber coverage are important market signals. They do not by themselves solve agentic lifecycle risk transfer.

They do not need to. Their value is that they teach the right lesson: define the object. Model-performance products define a performance object. Cyber products define a cyber event object. Agentic lifecycle risk transfer must define a work object that can connect authority, tool use, human role, dependency, accepted outcome, evidence, and remediation.

That is why Part II begins with the core object problem. Once the market reality is clear, the paper can ask the question that every later chapter depends on:

Is the insured object the company, the human, the officer, the professional, the vendor, the AI agent, or the bounded agentic work unit that created the loss?

The answer is not one object. It is a map. Part II builds that map.

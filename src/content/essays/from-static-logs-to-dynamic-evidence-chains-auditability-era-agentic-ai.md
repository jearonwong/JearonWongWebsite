---
title: "From Static Logs to Dynamic Evidence Chains: The Auditability Era of Agentic AI"
titleLines:
  - "From Static Logs to Dynamic Evidence Chains:"
  - "The Auditability Era of Agentic AI"
subtitle: "Agentic AI does not need more static logs. It needs dynamic, responsibility-linked evidence chains that can reconstruct lifecycle work across authority, tools, roles, exceptions, acceptance, and closure."
description: "Jearon Wong argues that Agentic AI auditability requires a shift from static logs to dynamic, responsibility-linked lifecycle evidence chains."
shareTitle: "Static Logs Cannot Audit Dynamic Agents"
shareSubtitle: "Agentic AI needs responsibility-linked evidence chains, not logs alone."
shareDescription: "Logs show activity. Evidence chains reconstruct responsibility. Agentic AI auditability begins when lifecycle work can be reviewed across authority, tools, roles, exceptions, acceptance, and closure."
shareImage: /social/og-static-logs-dynamic-evidence-chains.png
shareImageAlt: "From Static Logs to Dynamic Evidence Chains: The Auditability Era of Agentic AI — Jearon Wong"
publishDate: 2026-06-04
cluster: lifecycle-governance
projectProof: Validation Lab
featured: true
summary: "Logs show activity. Evidence chains reconstruct responsibility."
summaryLines:
  - "Logs show activity."
  - "Evidence chains reconstruct responsibility."
series: "AIAAWP 2026"
status: published
tags:
  - Agentic AI
  - AI Agents
  - AI Auditability
  - AI Governance
  - Audit Evidence Chain
  - Agentic Audit Object
  - AARM
  - Enterprise AI Governance
  - Agentic Lifecycle Governance
  - Insurability
ogImage: /social/og-static-logs-dynamic-evidence-chains.png
images:
  - url: /figures/aiaawp-article-audit-object-gap.svg
    alt: "Diagram comparing what traditional AI governance covers with the additional lifecycle audit objects introduced by Agentic AI"
    caption: "Figure 1. Traditional AI governance remains necessary, but agentic systems introduce additional lifecycle audit objects."
    thumbnailUrl: /social/og-static-logs-dynamic-evidence-chains.png
    width: 1600
    height: 640
  - url: /figures/aiaawp-article-four-evidence-tiers.svg
    alt: "Four-tier diagram from logs to observability, audit evidence, and responsibility-linked evidence chains"
    caption: "Figure 2. Logs and observability are ingredients. Auditability requires responsibility-linked evidence chains."
    thumbnailUrl: /social/og-static-logs-dynamic-evidence-chains.png
    width: 1600
    height: 620
  - url: /figures/aiaawp-article-agentic-audit-object.svg
    alt: "Component map showing the Agentic Audit Object as a lifecycle work unit with eight evidence components"
    caption: "Figure 3. The Agentic Audit Object defines the evidence components needed to reconstruct a lifecycle work unit."
    thumbnailUrl: /social/og-static-logs-dynamic-evidence-chains.png
    width: 1600
    height: 760
  - url: /figures/aiaawp-article-lifecycle-walkthrough.svg
    alt: "Lifecycle walkthrough diagram showing eight stages from intent to closure"
    caption: "Figure 4. Lifecycle walkthrough reconstructs agentic work from intent through delegation, tool action, review, exception, and closure."
    thumbnailUrl: /social/og-static-logs-dynamic-evidence-chains.png
    width: 1600
    height: 560
  - url: /figures/aiaawp-article-aarm-levels.svg
    alt: "AARM ladder showing six readiness levels from unobservable to assurance-ready"
    caption: "Figure 5. AARM is a readiness vocabulary for auditability gaps, not a score, certification, or assurance opinion."
    thumbnailUrl: /social/og-static-logs-dynamic-evidence-chains.png
    width: 1600
    height: 760
legacySlugs:
  - when-logs-are-no-longer-enough-rethinking-audit-for-agentic-ai
  - the-audit-object-for-agentic-ai-has-changed
relatedIdeas:
  - lifecycle-governance
  - evidence-accepted-outcome
  - ai-agent-lifecycle
  - agent-governance
relatedProjects:
  - Validation Lab
  - MPLP
---

<p class="essay-opening-lead">AI systems are no longer just generating content — they are executing work. The audit framework needed to govern that work does not yet fully exist. This article proposes where to begin.</p>

<aside class="essay-concept-anchor essay-concept-anchor--thesis" aria-label="Central thesis">
  <p class="essay-concept-anchor__label">CENTRAL THESIS / AIAAWP-2026-v0.1</p>
  <p class="essay-concept-anchor__statement">Static logs cannot audit dynamic agents.</p>
  <p class="essay-concept-anchor__support">Agentic auditability begins when lifecycle work can be reconstructed through dynamic, responsibility-linked evidence chains.</p>
</aside>

<section class="essay-ledger-block" aria-label="Five claims this article examines">
  <p class="essay-ledger-block__label">FIVE CLAIMS THIS ARTICLE EXAMINES</p>
  <dl>
    <div>
      <dt>Claim 01</dt>
      <dd>Agentic AI introduces a new audit object: lifecycle work, not model output.</dd>
    </div>
    <div>
      <dt>Claim 02</dt>
      <dd>Existing AI assurance frameworks are moving, but have not yet fully shifted their audit object to match agentic systems.</dd>
    </div>
    <div>
      <dt>Claim 03</dt>
      <dd>Logs and observability infrastructure are necessary but not sufficient for agentic auditability.</dd>
    </div>
    <div>
      <dt>Claim 04</dt>
      <dd>The Agentic Audit Object and Audit Evidence Chain define what a reconstructable agentic work unit looks like.</dd>
    </div>
    <div>
      <dt>Claim 05</dt>
      <dd>Auditability is the prerequisite for regulatability, and regulatability is the prerequisite for insurability.</dd>
    </div>
  </dl>
</section>

## A Scenario That Is No Longer Hypothetical

A compliance team at a financial institution faces a regulatory inquiry about an AI agent system deployed six months earlier. The agents have been handling document classification, client communication routing, and internal workflow approvals — consequential work inside regulated processes.

  <p>The regulator has three questions: Who authorized each consequential action? How were exceptions handled and resolved? Which human roles accepted the outcomes?</p>

  <p>The team exports their logs. Gigabytes of timestamped telemetry, tool call records, workflow state transitions, error events. Clean. Comprehensive. And entirely silent on every question the regulator actually asked.</p>

  <p>This scenario describes an emerging gap — not between AI capability and human expectation, but between how agentic AI systems operate and how existing audit and assurance frameworks are structured to examine them. The gap is not about technical observability. It is about evidence architecture: whether the work an AI agent performs can be reconstructed as a responsibility chain, not merely traced as a sequence of events.</p>

## AI Is No Longer Just Generating — It Is Executing

  <p>For most of its enterprise history, AI governance had a relatively stable audit object: the model. Document the training data. Evaluate outputs for quality and bias. Define use cases. Implement controls. Monitor performance in production. This model-centric approach has been formalized through frameworks including NIST AI RMF,<sup><a href="#ref1">1</a></sup> ISO/IEC 42001,<sup><a href="#ref2">2</a></sup> and the responsible AI programs developed by major technology and professional services organizations.</p>

  <p>The paradigm has shifted.</p>

  <p>Agentic AI systems do not merely generate outputs. They execute work: querying and writing to databases, calling external tools and APIs, routing tasks between specialized agents, sending communications, triggering financial transactions, updating compliance records, making decisions embedded in multi-step business processes. The output of an agentic system is often one event in a lifecycle involving dozens of consequential actions across multiple systems, vendors, and human review points.</p>

  <p>A Deloitte 2026 analysis of enterprise agentic AI adoption found that deployment is scaling substantially faster than organizations' governance and accountability infrastructure.<sup><a href="#ref3">3</a></sup> The constraint is not that enterprises lack the technology to deploy agents. The constraint is that they lack the evidential architecture to answer what matters most when something goes wrong: who was responsible, under what authority, and how was it resolved?</p>

  <p>This is an audit object problem. Traditional model-centric governance asks: <em>"Was the model behaving within its governed parameters?"</em> Agentic AI governance must also ask: <em>"Can the work the agent did be reconstructed across authority, delegation, tool action, human oversight, accepted outcome, exception handling, and remediation closure?"</em> These are different questions. The second cannot be inferred from the first.</p>

## The Audit Establishment Is Moving — But the Audit Object Has Not Yet Shifted

  <p>It would be both inaccurate and counterproductive to suggest that the major audit and assurance institutions are unaware of the AI governance challenge. They are not. The activity is real and substantial.</p>

  <p>PwC's Digital Assurance and Transparency practice has developed structured Assurance for AI offerings, addressing controls, governance frameworks, and risk management for AI systems.<sup><a href="#ref4">4</a></sup> EY Assurance has released new AI-focused capabilities targeting confidence and trust in AI deployments.<sup><a href="#ref5">5</a></sup> KPMG's Trusted AI Framework addresses governance, fairness, explainability, robustness, and ethics as integrated dimensions of AI trust.<sup><a href="#ref6">6</a></sup> Deloitte's advisory practice covers responsible AI transformation and the governance implications of agentic deployments.<sup><a href="#ref3">3</a></sup></p>

  <p>Regulatory frameworks have also been moving. EU AI Act Article 12 mandates automatic logging capabilities for high-risk AI systems to enable operational monitoring throughout their lifecycle.<sup><a href="#ref7">7</a></sup> NIST AI RMF's GOVERN function requires documentation, accountability, and transparency mechanisms.<sup><a href="#ref1">1</a></sup> ISO/IEC 42001 establishes AI management system requirements including risk treatment objectives and evidence records.<sup><a href="#ref2">2</a></sup></p>

  <p>The gap is not a failure of attention or methodology. The gap is architectural.</p>

  <p>Every framework mentioned above was designed primarily around a model-centric audit object: the model, its training data, its outputs, the control environment, the use case policy, and the performance monitoring regime. These are necessary. For agentic AI, they are not sufficient.</p>

  <p>When AI operates through agents, the consequential activity is the lifecycle — not the output. An agent that classifies a document and an agent that classifies a document, then sends a legally binding communication, escalates a compliance flag, updates a regulatory filing, and routes a remediation workflow are not the same audit objects. The second requires evidence of who authorized each step, which human role owned the consequence, whether actions were within delegated scope, what exceptions occurred, and whether everything was properly closed.</p>

<aside class="essay-pairwise-callout" aria-label="Precision on the audit gap">
  <p>Logging requirements are an entry point, not an answer. A log requirement captures what happened. Audit evidence must answer whether what happened was <em>authorized, responsible, accepted, and closed</em> — in terms that a reviewer can examine and rely upon.</p>
</aside>

<figure class="article-figure article-figure--diagram">
  <img src="/figures/aiaawp-article-audit-object-gap.svg" alt="Two-panel diagram comparing what traditional AI governance covers versus what agentic AI introduces, highlighting the audit object gap in the center." width="1600" height="640" loading="lazy" decoding="async" />
  <figcaption>Figure 1. The Audit Object Gap: traditional AI governance remains necessary, but agentic AI introduces additional lifecycle audit objects.</figcaption>
</figure>

## Why Logs Fall Short: The Four-Tier Problem

  <p>At the center of the agentic auditability challenge lies a distinction that is easy to state and critical to operationalize: <strong>logs are not audit evidence chains.</strong></p>

  <p>This is not an argument against logs. Logs, traces, metrics, and workflow histories are necessary evidence ingredients. Without them, any reconstruction may collapse entirely into narrative memory. The argument is more precise: raw technical logs do not automatically possess the properties that transform data into responsibility-linked audit evidence.</p>

  <p>This is why the evidence chain must be dynamic. Agentic work does not remain fixed after deployment. Roles activate, authority changes, tools are invoked, tasks are delegated, exceptions emerge, and outcomes are accepted or disputed across lifecycle stages. A static log archive can preserve activity. It cannot by itself preserve responsibility through change.</p>

  <p>The AIAAWP-2026-v0.1 organizes this distinction across four tiers of increasing evidential value:<sup><a href="#ref8">8</a></sup></p>

<figure class="article-figure article-figure--diagram">
  <img src="/figures/aiaawp-article-four-evidence-tiers.svg" alt="A tiered diagram showing four levels from Logs at the base to Responsibility-Linked Evidence Chains at the top, with increasing evidential value and scope." width="1600" height="620" loading="lazy" decoding="async" />
  <figcaption>Figure 2. From logs to responsibility-linked evidence chains: four tiers of increasing evidential value for agentic systems.</figcaption>
</figure>

  <p>Consider a single tool call in an agentic workflow. A log may capture: tool name, endpoint, timestamp, service identity, HTTP response code. What the audit evidence chain must additionally answer: Was this action authorized, and by whom? Under what delegated scope? Which human role owned accountability? Was the tool action reversible? Was the result accepted or disputed? Did an exception arise, and how was it closed? Was sensitive data involved, and how was disclosure managed in the review evidence?</p>

  <p>Without these connections, the tool call is observable. It is not auditable.</p>

<blockquote class="essay-pull-quote">
  <p>Logs record activity. Observability explains system behavior. Audit evidence supports responsibility review. Responsibility-linked evidence chains make agentic lifecycle work reconstructable.</p>
  <footer>AIAAWP-2026-v0.1<sup><a href="#ref8">8</a></sup></footer>
</blockquote>

  <p>The practical consequence is direct: most enterprise agentic deployments are operating with robust Tier 1 and Tier 2 infrastructure — and an unaddressed gap at Tiers 3 and 4. That gap becomes visible when a regulator, internal audit function, or insurer asks questions that logs cannot answer.</p>

## The Proposed Shift: From Model Output to Lifecycle Work

  <p>If the audit object must shift, what should it become?</p>

  <p>The AIAAWP-2026-v0.1 proposes the <strong>Agentic Audit Object</strong> — a conceptual model for lifecycle-responsibility-linked agent work.<sup><a href="#ref8">8</a></sup> It is important to be precise about what this is and is not. It is not a mandatory database schema. It is not a certification criterion. It is not a replacement for professional audit methodology. It is a structured set of questions that help audit, governance, assurance, and technology teams determine whether a specific piece of agentic work can be reconstructed.</p>

<figure class="article-figure article-figure--diagram">
  <img src="/figures/aiaawp-article-agentic-audit-object.svg" alt="A component map showing the Lifecycle Work Unit and eight surrounding evidence components." width="1600" height="760" loading="lazy" decoding="async" />
  <figcaption>Figure 3. The Agentic Audit Object: eight components of reconstructable lifecycle work.</figcaption>
</figure>

  <p>One distinction deserves particular emphasis for audit practitioners: <strong>human roles and agent roles are not interchangeable.</strong> An "analyst agent" is not an analyst. It is a bounded execution capability with permissions, instructions, constraints, and evidence obligations. The human analyst still owns intent, authorization, acceptance, and remediation closure. When this distinction is blurred — as frequently happens in early agentic deployments — human oversight may exist operationally while being evidentially weak. A reviewer cannot reconstruct who was actually responsible.</p>

  <p>This framework builds on the Global AI Compliance White Paper 2026 (GAIC), which established a set of Missing Regulatory Objects (MROs) for agentic lifecycle governance. The AIAAWP translates those compliance objects into audit evidence terms — an MRO-to-Audit-Evidence Mapping that bridges governance intent and evidential architecture.</p>

## Reconstructing a Lifecycle: How Audit Evidence Actually Works

  <p>What does applying this framework look like in practice?</p>

  <p>The AIAAWP-2026-v0.1 provides a Lifecycle Walkthrough structure — a staged reconstruction of agent work that audit and governance teams can use as a review scaffold.<sup><a href="#ref8">8</a></sup> The walkthrough does not replace professional audit procedures; it maps the lifecycle stages where evidence must exist before a meaningful audit engagement can proceed.</p>

<figure class="article-figure article-figure--diagram">
  <img src="/figures/aiaawp-article-lifecycle-walkthrough.svg" alt="A sequential flow diagram showing the eight stages of agentic work from Intent through Closure, with key audit questions at each stage." width="1600" height="560" loading="lazy" decoding="async" />
  <figcaption>Figure 4. Lifecycle walkthrough: eight stages of reconstructable agentic work, from intent through closure.</figcaption>
</figure>

  <p>Three additional evidence architecture concepts from the white paper deserve mention:</p>

  <p><strong>Evidence Partitioning:</strong> Agentic workflows frequently cross vendor, project, and organizational boundaries. Evidence must be attributable and partitioned — clearly assigned to a lifecycle stage, agent, tool, or project — to be usable in review or dispute. Evidence that cannot be partitioned cannot be examined in context.</p>

  <p><strong>Selective Disclosure:</strong> Full auditability does not require exposing all underlying data. Evidence pointers, integrity hashes, and redaction profiles allow reviewers to verify chain structure without accessing sensitive information. This is particularly important where privacy regulations apply to agent-processed data.</p>

  <p><strong>Exception Closure as a Completeness Test:</strong> An audit chain is incomplete until exceptions are properly closed. A log recording an error does not establish whether that error was assessed, corrected, re-reviewed, accepted, or remains open. The AIAAWP proposes a structured exception-to-closure object that defines lifecycle completeness — not just whether things went right, but whether deviations were properly handled and closed.</p>

## Where Does Your Organization Stand? The AARM Framework

  <p>One of the most practically useful contributions of the AIAAWP-2026-v0.1 is the <strong>Agentic Auditability Readiness Model (AARM)</strong>. AARM is worth understanding carefully for what it is — and for what it explicitly is not.</p>

  <p>AARM is a readiness vocabulary. It provides a shared language for organizations and reviewers to describe and discuss auditability readiness with precision and honesty. It is not a score, benchmark, certification, compliance test, assurance opinion, or procurement criterion. Its purpose is to make the conversation about auditability gaps more specific before those gaps become examination failures.</p>

<figure class="article-figure article-figure--diagram">
  <img src="/figures/aiaawp-article-aarm-levels.svg" alt="A vertical ladder diagram showing six readiness levels from L0 Unobservable at the bottom to L5 Assurance-Ready at the top, with enterprise and regulatory markers." width="1600" height="760" loading="lazy" decoding="async" />
  <figcaption>Figure 5. AARM: Agentic Auditability Readiness Model, from L0 Unobservable to L5 Assurance-Ready.</figcaption>
</figure>

  <p>The practical implication for enterprise AI governance teams is significant: most organizations deploying agentic AI are operating at L1 or L2. The implicit requirements of EU AI Act Article 12 for high-risk AI systems and the accountability objectives of NIST AI RMF's GOVERN function point toward L4 as the meaningful threshold for regulated deployments.</p>

  <p>The distance from L2 to L4 is not a technology gap. The infrastructure to build L4-ready agentic systems exists. It is an architecture and governance design gap: agentic systems have not been designed with lifecycle evidence reconstruction as a first-class requirement, and governance processes have not yet demanded it.</p>

<aside class="essay-pairwise-callout" aria-label="The most consequential insight AARM offers">
  <p>"We have logs" means L1. "We are auditable" requires L4. Conflating the two is a governance risk that will eventually become visible — most likely at the moment of an inquiry, not before.</p>
</aside>

## The Three-Part Threshold: Auditability, Regulatability, Insurability

  <p>For agentic AI to enter the core workflows of regulated industries — financial services, healthcare, legal practice, infrastructure, public administration — it must clear a threshold that has nothing to do with capability.</p>

  <p>It must prove that the work it performs can be reconstructed, reviewed, challenged, corrected, and closed by human reviewers, regulators, and insurers with the evidence they actually require.</p>

  <p>This is the auditability threshold. And it connects directly to two downstream requirements that will increasingly determine whether agentic deployments can operate at enterprise scale in regulated contexts.</p>

  <p><strong>Regulatability depends on auditability.</strong> A system whose lifecycle work cannot be reconstructed cannot be meaningfully regulated. Regulatory oversight — whether from financial supervisors, healthcare regulators, or AI-specific authorities under the EU AI Act — requires that responsible parties can demonstrate what happened, under what authority, and how exceptions were handled. Auditability is not one option among many for meeting these requirements. It is the structural prerequisite.</p>

  <p><strong>Insurability depends on regulatability.</strong> As AI risk insurance products develop, underwriters will require evidence of governance quality, not just system performance metrics. An organization that can demonstrate a documented Audit Evidence Chain, a clear responsibility architecture, and an assessed AARM readiness level presents a fundamentally different risk profile than one with observability dashboards and policy documents alone. Without auditability, insurability cannot be reliably priced or structured.</p>

  <p>The sequence is not coincidental:</p>

<section class="essay-concept-anchor essay-concept-anchor--thesis" aria-label="Auditability, regulatability, insurability progression">
  <p class="essay-concept-anchor__label">THRESHOLD SEQUENCE / AIAAWP-2026-v0.1</p>
  <p class="essay-concept-anchor__statement">Auditability → Regulatability → Insurability</p>
  <p class="essay-concept-anchor__support">Each depends on the one before it. The next stage of enterprise agentic AI is not larger-scale invisible automation. It is lifecycle-accountable automation.</p>
</section>

  <p>That is the standard agentic AI must eventually meet. The question for enterprise leaders, audit professionals, and technology teams is not whether that standard will apply. The question is whether they will be ready when it does.</p>

## A Note on Methodology Provenance

  <p>Given the audience for this article, the origin of this framework deserves explicit statement.</p>

  <p>The <strong>Agentic AI Auditability &amp; Assurance White Paper 2026 (AIAAWP-2026-v0.1)</strong> is a research synthesis. It draws on four source categories:</p>

  <ul>
    <li><strong>Professional audit evidence language</strong> — ISA standards, IAASB conceptual frameworks for assurance, internal audit standards from IIA, and attestation boundary language from professional bodies.</li>
    <li><strong>AI governance guidance</strong> — NIST AI RMF, ISO/IEC 42001, EU AI Act logging and oversight requirements, and published guidance from major governance institutions.</li>
    <li><strong>Provenance, observability, and evidence concepts</strong> — W3C PROV data model, observability engineering practices, incident management frameworks, and log management standards.</li>
    <li><strong>Privacy and data protection frameworks</strong> — GDPR evidence retention tensions, privacy-by-design principles, and data minimization guidance, which shape the selective disclosure and evidence minimization architecture.</li>
    <li><strong>GAIC's Missing Regulatory Object layer</strong> — The Global AI Compliance White Paper 2026 (GAIC) established the MRO object layer for agentic lifecycle governance. AIAAWP builds directly on those objects, translating compliance gaps into audit evidence terms.</li>
  </ul>

  <p>The constructs introduced — Agentic Audit Object, Audit Evidence Chain, and AARM — are author-synthesized. They are not adopted professional standards, externally certified frameworks, regulator-issued requirements, or Big Four endorsed methodologies. They are proposed conceptual objects intended to advance the professional conversation. Their value depends on being tested, critiqued, extended, and — where appropriate — operationalized by practitioners who understand the contexts in which they work.</p>

  <p><strong>The next audit failure in agentic AI will not be caused by the absence of logs. It will be caused by mistaking logs for evidence.</strong></p>

<section class="protocol-example-card" aria-label="Professional dialogue invitation">
  <p class="protocol-example-card__eyebrow">Professional dialogue</p>

  <h3>An Invitation for Professional Dialogue</h3>

  <p>The AIAAWP-2026-v0.1 is a public research edition. It is deliberately not a finished standard — because a finished standard for agentic auditability requires exactly the professional scrutiny this article is meant to invite.</p>

  <p>If you work in external audit, internal audit, AI assurance, technology risk, compliance, legal, enterprise AI architecture, or AI governance policy, your perspective genuinely matters here — including perspectives that disagree with the framing, identify gaps, or propose alternative approaches.</p>

  <p>Questions that would most benefit from practitioner input: How do existing professional audit standards (ISA, IAASB, PCAOB, IIA) accommodate or need to be extended for agentic lifecycle evidence? Where does the evidence chain architecture conflict with existing engagement acceptance, scope, and independence requirements? What does a realistic L4-ready agentic deployment look like in practice, and where are the hardest engineering and governance constraints?</p>

  <p>The full white paper — including appendices with the Evidence Request List, Lifecycle Walkthrough Template, MRO-to-Audit-Evidence Mapping, AARM Matrix, and Exception Closure Checklist — is available at: <a href="https://www.jearonwong.com/research" target="_blank" rel="noopener">jearonwong.com/research</a></p>

  <p>This article is part of the Agentic Lifecycle Governance Industry Series (AIAAWP-2026-v0.1). The series continues with practitioner implementation guides translating the auditability framework into technical architecture (Guide 1) and compliance operating-model design (Guide 2), and a forthcoming insurability white paper.</p>
</section>

## References

<ol class="reference-list">
  <li id="ref1">National Institute of Standards and Technology. (2023). <em>Artificial Intelligence Risk Management Framework (AI RMF 1.0)</em>. U.S. Department of Commerce. <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener">https://www.nist.gov/itl/ai-risk-management-framework</a></li>
  <li id="ref2">International Organization for Standardization. (2023). <em>ISO/IEC 42001:2023 — Information technology: Artificial intelligence: Management system</em>. ISO. <a href="https://www.iso.org/standard/42001" target="_blank" rel="noopener">https://www.iso.org/standard/42001</a></li>
  <li id="ref3">Deloitte. (2026). <em>AI Agents: Scaling Faster Than Governance</em>. Deloitte Insights. <a href="https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-agents-scaling-faster.html" target="_blank" rel="noopener">https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-agents-scaling-faster.html</a></li>
  <li id="ref4">PwC. (2024). <em>Assurance for AI</em>. PwC Digital Assurance &amp; Transparency. <a href="https://www.pwc.com/us/en/services/audit-assurance/digital-assurance-transparency/assurance-ai.html" target="_blank" rel="noopener">https://www.pwc.com/us/en/services/audit-assurance/digital-assurance-transparency/assurance-ai.html</a></li>
  <li id="ref5">EY. (2024). <em>EY Assurance Releases New Technology Capabilities Strengthening Confidence and Trust</em>. EY Newsroom. <a href="https://www.ey.com/en_gl/newsroom/2024/05/ey-asurance-releases-new-technology-capabilities-strengthening-confidence-and-trust" target="_blank" rel="noopener">ey.com/en_gl/newsroom/2024/05/...</a></li>
  <li id="ref6">KPMG. (n.d.). <em>Trusted AI Framework</em>. KPMG. <a href="https://kpmg.com/au/en/services/ai-services/trusted-ai-framework.html" target="_blank" rel="noopener">https://kpmg.com/au/en/services/ai-services/trusted-ai-framework.html</a></li>
  <li id="ref7">European Parliament and Council of the European Union. (2024). <em>Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU AI Act)</em>, Article 12: Record-keeping. <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/" target="_blank" rel="noopener">https://eur-lex.europa.eu/eli/reg/2024/1689/</a></li>
  <li id="ref8">Wong, J. (2026). <em>Agentic AI Auditability &amp; Assurance White Paper 2026: A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance</em> (AIAAWP-2026-v0.1). Agentic Lifecycle Governance Industry Series. <a href="https://www.jearonwong.com/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html" target="_blank" rel="noopener">jearonwong.com/research</a></li>
</ol>

<section class="lifecycle-event-card lifecycle-event-card--critical" aria-label="Publication boundary statement">
  <header>
    <span>Boundary statement</span>
    <strong>Research commentary, not an audit standard.</strong>
  </header>
  <p>This article is a summary of and commentary on AIAAWP-2026-v0.1, a public research edition. It is not an audit standard, assurance opinion, certification, legal compliance proof, regulator-approved method, or endorsement by any audit firm, professional body, or standards organization. AARM is a proposed readiness model — not a score, benchmark, certification, or assurance result. References to Big Four firms are market context only and do not imply endorsement or partnership. Nothing in this article constitutes legal, regulatory, or professional advice.</p>
</section>

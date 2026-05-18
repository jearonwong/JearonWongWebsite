# LinkedIn Newsletter Draft

## Recommended Title

AI Agent Auditability Cannot Be Built on Logs Alone

## Alternative Titles

- From AI Governance to Agentic Auditability
- The Missing Audit Object in AI Agent Systems

## Draft

When I started studying the governance problem around AI agents, I did not begin with a new framework. I began with the documents enterprises are already using to reason about AI risk: NIST AI RMF, the EU AI Act, ISO/IEC 42001, GDPR, Singapore AI governance and AI Verify context, and the internal control language that shows up in enterprise AI governance work.

Those sources are useful. They give us a vocabulary for risk, accountability, oversight, transparency, documentation, privacy, monitoring, and review. But the more I mapped them against agentic systems, the clearer the gap became: model governance and policy control are necessary, but they are not enough for systems that plan, call tools, delegate work, cross boundaries, and produce outcomes through multi-step execution.

The problem is not only whether the model was evaluated. The problem is whether the work can be reconstructed.

For a human auditor, internal audit team, assurance practitioner, CIO, CTO, or Chief Compliance Officer, a log is not automatically an audit evidence chain. A log may show that something happened. It may not show who authorized the action, what responsibility boundary applied, what context was used, which tool was invoked, what exception occurred, what outcome was accepted, how remediation was handled, or whether the evidence can support review without exposing more data than necessary.

That is the core argument of the Agentic AI Auditability & Assurance White Paper 2026.

I use the term Agentic AI Auditability to describe the ability to reconstruct, test, and review agentic work across the lifecycle of responsibility, not just across model inputs and outputs. The unit of auditability shifts from a single prediction to a lifecycle of delegated work: intent, authority, context, tool action, evidence capture, exception handling, accepted outcome, dispute, remediation, and closure.

This is why the paper introduces the Agentic Audit Object. Agentic systems need an object that can carry audit-relevant meaning across the lifecycle. It is not enough to point to a prompt, a model card, or a final result. The audit object has to connect responsibility, evidence, tools, outcomes, and review boundaries in a way that can survive system complexity.

The second construct is the Audit Evidence Chain. In agentic systems, evidence cannot be treated as a bag of logs. It needs structure. It needs to connect authorization, action, context, role, output, acceptance, exception, remediation, and closure. Without that chain, enterprises may have observability without auditability.

The paper also introduces AARM, the Agentic Auditability Readiness Model. AARM is a proposed readiness model, not a certification scheme or scoring benchmark. Its purpose is to help teams ask a sharper question: if an agentic system were reviewed tomorrow, could its work be reconstructed and assessed within a defined scope?

This white paper builds on the Global AI Compliance White Paper 2026. GAIC defined the broader object gap in agentic lifecycle governance through Missing Regulatory Objects, RCCS-M, ALCS, and lifecycle responsibility framing. AIAAWP extends that work into auditability, assurance-readiness boundaries, audit evidence chains, and the MRO-to-audit-evidence mapping.

For CIOs and CTOs, the practical question is architectural: are your agent systems producing evidence that can be reviewed, replayed, challenged, and closed? For CCOs and governance leaders, the question is operational: can policy expectations be translated into lifecycle evidence? For audit, assurance, and internal audit readers, the question is professional: what would count as sufficient evidence for agentic work, and where must the boundary remain carefully stated?

The white paper is now live as a public research candidate:

https://www.jearonwong.com/research/agentic-ai-auditability-assurance-white-paper-2026/

Boundary note: this is not legal advice, not an audit standard, not certification, not an assurance opinion, and not a Big Four or audit-body endorsement. It is source-grounded technical governance research and a proposed evidence model for discussing the auditability of agentic systems.

Read the white paper, review the evidence model, and if you work in audit, assurance, internal control, AI governance, or agent system architecture, I would be interested in your view on the central question:

What should count as audit evidence when the system doing the work is agentic?

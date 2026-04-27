---
title: MCP Connects Tools. A2A Connects Agents. Who Governs the Lifecycle?
titleLines:
  - MCP Connects Tools.
  - A2A Connects Agents.
  - Who Governs the Lifecycle?
description: Production AI agents need a vendor-neutral lifecycle governance layer above tool access and agent coordination.
publishDate: 2026-04-26
cluster: agent-governance
projectProof: MPLP
featured: true
flagship: true
summary: >-
  MCP solves tool access. A2A solves agent coordination. The missing production
  layer is lifecycle governance: structured intent, plans, confirmations, and
  traces that survive the full lifespan of agent work.
summaryLines:
  - MCP solves tool access. A2A solves agent coordination.
  - "The missing production layer is lifecycle governance:"
  - structured intent, plans, confirmations, and traces that survive the full lifespan of agent work.
relatedIdeas:
  - agent-governance
  - protocol-engineering
  - reliable-ai-agent-work-delivery
relatedProjects:
  - MPLP
  - SoloCrew
  - Validation Lab
  - Cognitive OS
---

**Why production AI agents need a vendor-neutral lifecycle governance layer**

The numbers are difficult to ignore.

Recent enterprise security research reports that more than 80% of organizations using AI agents have encountered unintended or risky agent behavior, including unauthorized access to systems and accidental data exposure.<a href="#ref-1" class="citation">[1]</a> Gartner predicts that more than 40% of agentic AI projects will be canceled by the end of 2027, citing escalating costs, unclear business value, and inadequate risk controls.<a href="#ref-2" class="citation">[2]</a> Deloitte's 2026 Tech Trends report states that only 11% of organizations have agentic AI agents in production.<a href="#ref-3" class="citation">[3]</a>

This is not a tooling shortage. It is a lifecycle failure.

We have MCP. We have A2A. We have AgentOps frameworks, orchestration tooling, and a growing stack of agent infrastructure. We have more protocol coverage for AI agents than at any point in history.

So why do most agent initiatives still fail to cross the line from pilot to production?

I want to argue that the answer is not model capability, not integration complexity, and not engineering resourcing. The answer is a missing layer - one that the industry is beginning to recognize, but has not yet widely standardized as a vendor-neutral lifecycle protocol. A layer that sits above MCP and A2A, and beneath application logic. A layer that the industry has been circling without formally naming.

I want to name it.

## What MCP, A2A, and AgentOps Actually Solve

To understand what is missing, we need to be precise about what already exists.

**MCP** - the Model Context Protocol introduced by Anthropic in 2024 - solves the agent-to-tool problem. It defines how an agent reaches external systems such as databases, APIs, file systems, and other tool surfaces through a standardized JSON-RPC interface.<a href="#ref-4" class="citation">[4]</a> It is the plumbing. It is essential. With Anthropic reporting 97M+ monthly SDK downloads across Python and TypeScript, MCP has become one of the strongest de facto standard candidates for the agent-to-tool layer.<a href="#ref-5" class="citation">[5]</a>

**A2A** - the Agent-to-Agent Protocol introduced by Google in 2025 - addresses the agent-to-agent coordination problem. It defines how agents from different vendors discover capabilities, negotiate interaction modes, communicate, and coordinate tasks. It is the coordination layer between agents. It is also essential, and its ecosystem is growing rapidly.

**AgentOps** frameworks address observability and operational monitoring. They tell you what your agents did, how long it took, where they failed, and increasingly, they are beginning to extend into pre-execution guardrails and evaluation.

These are real solutions to real problems. But notice what they share: they were not designed primarily to standardize lifecycle authority - the question of how human intent is structured, carried, confirmed, and traced across the full lifespan of an agent task.

The question every production agent system eventually faces is simple:

> Before the agent acts - who decided it could? Under what conditions? With what constraints? And how is that decision recorded, enforced, and traceable to the original human intent?

That is not a tool-access question. It is not a coordination question. It is a lifecycle authority question.

No widely adopted vendor-neutral standard currently defines a shared lifecycle authority model for what must be true before an agent acts.

## Three Failure Modes Nobody Is Talking About

Let me make the gap concrete. Here are three failure patterns that repeat across failed agent deployments, in forms that MCP, A2A, and AgentOps were not primarily designed to address.

**Failure Mode 1: Intent Evaporates**

A founder instructs an agent to "grow our newsletter audience." The agent interprets this as license to post in twelve communities, follow two thousand accounts, and send two hundred cold emails - all in forty-eight hours. Nothing it did was technically incorrect. The intent, however, was completely lost by the time execution began.

The problem is not the agent's capability. The problem is that there was no protocol-level mechanism to carry the original intent - with its constraints, its boundaries, and its implied limits - from the human decision point all the way through to the execution surface. The intent was stated once in natural language and then abandoned.

**Failure Mode 2: Authorization Becomes Unverifiable**

An enterprise deploys a multi-agent customer support system. One agent handles tier-one queries. Another handles escalations. A third has access to billing records. The question their security team cannot answer six months later is this: at what point in the workflow did agent three become authorized to read a specific customer's billing history for that specific query?

A2A tells you the agents communicated. AgentOps tells you the billing record was accessed. Neither tells you whether the authorization was legitimate - because legitimacy was never defined at the protocol level. It was assumed at the application layer, differently by every team that touched the system.

**Failure Mode 3: Drift Has No Baseline**

A solo operator sets up an AI content system with a clear editorial direction in week one. By week eight, the system is producing content that is technically coherent but strategically inconsistent with the original direction. Nobody changed a setting. Nobody updated a prompt. The drift happened gradually, across sessions, through accumulated context dilution.

There is no shared protocol baseline to detect this. There is no standard way to define what "adherence to original intent" even means in a running agent system. Drift is only discovered when a human notices - usually too late.

## The Layer That Is Missing

These three failure modes share a root cause. They all happen in the space between human intent and agent execution - a space that current protocols mostly treat as application-level responsibility, left to each team to solve ad hoc.

The result is exactly what the data suggests: teams reinventing the same governance wheel in slightly different shapes, at significant cost, with inconsistent results. A large share of failed agent projects are not failed model projects. They are governance projects that nobody realized they were running.

What is missing is a **lifecycle governance layer**: a protocol-level specification that defines how human intent is structured, carried, confirmed, traced, and bounded across the full lifecycle of an agent task - from the moment a decision is made to act, to the moment the task is closed.

This layer needs to answer four questions that today's dominant agent protocols were not primarily designed to standardize:

1. **Intent structuring** - How is the original human intent encoded in a form that survives translation into agent instructions, across sessions, across handoffs, and across time?

2. **Execution planning** - How is that intent decomposed into governable steps, with explicit roles, dependencies, and constraints, before any agent begins acting?

3. **Confirmation boundaries** - At what points in the lifecycle must a human confirm before execution proceeds? How are those boundaries defined and enforced at the protocol level, not merely the application level?

4. **Lifecycle traceability** - How is the complete chain from intent to outcome recorded in a way that is auditable, portable, and not dependent on any single vendor's logging infrastructure?

These are not merely application engineering questions. They are protocol design questions. And they require a protocol-level answer.

## MPLP: One Proposed Answer to This Missing Layer

In late 2025, we froze version 1.0 of the Multi-Agent Lifecycle Protocol (MPLP), an open specification built specifically to define this governance layer. What follows is how MPLP addresses the four questions above. I offer it here as one proposed answer, not as the only possible one.

I want to be direct about what MPLP is not: it is not a replacement for MCP. It is not a competitor to A2A. You still need MCP to connect your agents to tools. You still need A2A to coordinate agents across vendors. MPLP sits above those layers. It defines what must be established before MCP and A2A begin their work - and what must remain traceable while they operate.

MPLP is structured as a four-layer stack with ten modules. I want to focus on the four modules that most directly address the failure modes above.

### The Context Module: Carrying Intent Across Time

The Context module defines how human intent is encoded as a first-class, persistent object - not a prompt, not a configuration variable, but a structured record that travels with the task through every phase of its lifecycle.

A Context record in MPLP contains the original objective, the declared constraints, the operator identity, the session boundary conditions, and a version history of any modifications. Every downstream agent action is bound to a Context record. In a conforming MPLP runtime, an action that cannot be resolved to an active, valid Context should be treated as protocol-invalid.

This directly addresses Failure Mode 1. The intent does not evaporate because it is never allowed to exist only in natural language. It is structured, versioned, and referenced at the protocol level throughout execution.

### The Plan Module: Turning Intent into Governable Execution

The Plan module defines how an intent becomes an executable structure before any agent acts. It decomposes the objective into steps, dependencies, roles, constraints, and expected outcomes.

This matters because confirmation without a plan is only permission. Confirmation over a structured plan becomes governable authorization. In MPLP, a Plan is linked backward to Context and forward to Confirm and Trace. It creates the bridge between what the human intended and what the agent is about to do - preventing the system from jumping directly from intent to action without an auditable intermediate structure.

### The Confirm Module: Encoding Human Decision Points

The Confirm module defines the mechanism by which execution boundaries are established and enforced. It specifies which action classes require human confirmation before proceeding, how that confirmation is requested, how it is recorded, and what happens when it is absent.

This is not a UI pattern. It is a protocol primitive. A Confirm record in MPLP carries the action intent, the requesting agent's role, the scope of the proposed action, and the confirmation status - linked to its parent Plan and parent Context. In a conforming MPLP runtime, an agent that has reached a Confirm boundary without a valid confirmation record is in a protocol-invalid state.

This directly addresses Failure Mode 2. The authorization question becomes answerable because authorization is not assumed - it is recorded as a protocol-level event, with a timestamp, an agent role reference, and a traceable link to the approved Plan and original Context.

### The Trace Module: Lifecycle Auditability as a Protocol Primitive

The Trace module defines how the complete chain of events - from intent formation through planning through confirmation through execution through outcome - is recorded in a portable, vendor-neutral format.

A Trace record links every agent action to its parent Confirm event, its parent Plan, its parent Context, and the role that authorized it. The Trace is not a log. Logs are implementation details. A Trace in MPLP is a protocol-level artifact - structured, schema-validated, and independent of any specific runtime or infrastructure.

This does not eliminate drift by itself. But it makes drift detectable, because current behavior can be compared against the original Context, approved Plan, Confirm boundaries, and historical Trace records. The distance between the current state and the original intent becomes measurable - not as a subjective judgment, but as a protocol-level delta.

## How This Fits the Emerging Protocol Stack

One useful way to map the emerging agent protocol stack is:

<div class="protocol-stack-diagram" aria-label="Emerging agent protocol stack">
  <div class="protocol-layer protocol-layer--application">
    <span class="protocol-layer__label">Application Layer</span>
    <strong>Product logic, workflow, UX</strong>
  </div>
  <div class="protocol-layer protocol-layer--governance">
    <span class="protocol-layer__label">Lifecycle Governance Layer</span>
    <strong>MPLP</strong>
    <span>Context -> Plan -> Confirm -> Trace</span>
    <small>Role, Dialog, Collab, governance, evidence</small>
  </div>
  <div class="protocol-layer protocol-layer--coordination">
    <span class="protocol-layer__label">Agent Coordination Layer</span>
    <strong>A2A / agent-to-agent protocols</strong>
  </div>
  <div class="protocol-layer protocol-layer--tools">
    <span class="protocol-layer__label">Tool Access Layer</span>
    <strong>MCP / agent-to-tool connectivity</strong>
  </div>
  <div class="protocol-layer protocol-layer--runtime">
    <span class="protocol-layer__label">Runtime & Infrastructure</span>
    <strong>Models, tools, sandboxes, execution</strong>
  </div>
</div>

This is a conceptual map, not a claim that every protocol must occupy exactly one layer. The boundaries are porous and the ecosystem is still evolving. But the governance layer - the space between human intent and agent execution - is the one not yet occupied by any widely adopted vendor-neutral standard.

Each layer is necessary. None replaces the others. The governance layer is the one that has been missing - and its absence is what the failure rates reflect.

## An Honest Acknowledgment

MPLP v1.0 is a frozen open protocol specification, published under Apache 2.0. It has SDKs in TypeScript and Python. The first downstream product built on it - SoloCrew, a governed AI operating environment for solo founders - is in active development toward its first fully runnable release.

What MPLP does not yet have is broad third-party adoption, independent implementations at scale, or an established external community. I am not writing this to claim that the problem is solved. I am writing this because I believe the governance layer is real, the timing is right, and the industry deserves to have this layer explicitly named and formally defined - whether the answer turns out to be MPLP, something else, or a combination.

The governance wheel should not be reinvented by every team, in every company, in every slightly different shape. It should be a protocol.

## The Question I Am Leaving Open

Is the lifecycle governance layer best defined at the protocol level - or is it inherently an application-layer concern that resists standardization?

I believe it must be at the protocol level. The evidence is in the failure rates. When governance is left to application teams, it gets cut first when schedules slip, applied inconsistently across systems, and lost entirely when teams change. Protocol-level governance is the only answer that survives at scale.

But I want to hear where this argument breaks. If you are building production multi-agent systems and you have solved the intent-carryover problem, the confirmation-boundary problem, or the lifecycle-traceability problem in a way that does not require a shared protocol layer - I want to know how.

The specification is at [github.com/Coregentis/MPLP-Protocol](https://github.com/Coregentis/MPLP-Protocol). The conversation is open.

---

*Jearon Wong is the founder of Coregentis and the primary author of the Multi-Agent Lifecycle Protocol (MPLP). He is building SoloCrew, a governed AI operating environment for solo founders, on top of the MPLP stack.*

## References

<ol class="reference-list">
  <li id="ref-1">SailPoint, <a href="https://www.sailpoint.com/identity-library/securing-ai-agents-enterprise">"AI agents: The new attack surface"</a>, 2025; McKinsey, "Deploying agentic AI with safety and security," 2025. Both discuss enterprise reports of risky or unintended AI agent behavior, including improper data exposure and unauthorized system access.</li>
  <li id="ref-2">Gartner, "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027," June 25, 2025.</li>
  <li id="ref-3">Deloitte, "Tech Trends 2026," 2026.</li>
  <li id="ref-4">Model Context Protocol, "Specification," 2025-11-25. The MCP specification states that the protocol uses JSON-RPC 2.0 messages for communication.</li>
  <li id="ref-5">Anthropic, "Donating the Model Context Protocol and establishing the Agentic AI Foundation," December 9, 2025.</li>
</ol>

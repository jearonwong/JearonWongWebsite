---
title: "AI Agent Lifecycle: It Was Not Designed. It Grew."
titleLines:
  - "AI Agent Lifecycle:"
  - "It Was Not Designed. It Grew."
subtitle: "From prompt failure to intent drift, I was pushed by real engineering problems toward this definition."
description: "The first essay in Define The AI Agent Lifecycle. A personal engineering origin story of how prompt failure, context drift, intent drift, and multi-agent coordination exposed the need for AI Agent Lifecycle."
shareTitle: "AI Agent Lifecycle: It Was Not Designed. It Grew."
shareSubtitle: "From prompt failure to intent drift, I was pushed by real engineering problems toward this definition."
shareDescription: "From prompt failure to intent drift, Jearon Wong explains how AI Agent Lifecycle grew out of real engineering practice."
shareImage: /social/ai-agent-lifecycle-it-was-not-designed-it-grew-og.png
shareImageAlt: "AI Agent Lifecycle: It Was Not Designed. It Grew. — Define The AI Agent Lifecycle"
publishDate: 2026-04-29
cluster: ai-agent-lifecycle
projectProof: MPLP
featured: true
summary: "From prompt failure to intent drift, AI Agent Lifecycle grew out of real engineering practice."
summaryLines:
  - "From prompt failure to intent drift,"
  - "AI Agent Lifecycle grew out of real engineering practice."
series: "Define The AI Agent Lifecycle"
seriesOrder: 1
status: published
tags:
  - AI Agent Lifecycle
  - Agentic Delivery
  - Intent Drift
  - Lifecycle
  - Multi-Agent Systems
ogImage: /social/ai-agent-lifecycle-it-was-not-designed-it-grew-og.png
images:
  - url: /figures/ai-agent-lifecycle-01-cover.svg
    alt: "AI Agent Lifecycle: It Was Not Designed. It Grew. cover image"
    caption: "The first essay in Define The AI Agent Lifecycle anchors the concept as something that grew out of prompt failure, context drift, intent drift, and multi-agent coordination."
    thumbnailUrl: /social/ai-agent-lifecycle-it-was-not-designed-it-grew-og.png
    width: 1200
    height: 630
  - url: /figures/ai-agent-lifecycle-01-growth-chain.svg
    alt: "Growth chain diagram showing how prompt constraints, rule files, context problems, intent drift, governance needs, and multi-agent amplification led to AI Agent Lifecycle"
    caption: "The growth chain is a memory aid for this origin essay, not the four-layer definition that comes next."
    width: 1280
    height: 720
relatedIdeas:
  - ai-agent-lifecycle
  - agentic-delivery
  - lifecycle-governance
  - project-lifecycle-vs-task-execution
relatedProjects:
  - MPLP
---

<figure class="article-figure article-figure--cover">
  <img src="/figures/ai-agent-lifecycle-01-cover.svg" alt="AI Agent Lifecycle: It Was Not Designed. It Grew. cover image" width="1200" height="630" loading="eager" decoding="async" />
  <figcaption>The first essay in <em>Define The AI Agent Lifecycle</em> anchors the concept as something that grew out of real engineering practice, not a term invented first and justified later.</figcaption>
</figure>

## The beginning: I just wanted to finish a project

In September 2024, I was using AI to build a Web3 automation app for discovering and acting on early token launch opportunities.

The goal was simple: use an AI IDE to build an independent product that could run on its own and potentially make money.

It was not a company project. It was not a client engagement. I was not trying to design a protocol. I only wanted to test one concrete thing: if I could describe the requirements clearly enough, could AI help me take a complete product from zero to delivery?

Cursor was already popular among developers. Augment had just come out of stealth. I used these tools, asked AI to write code, reviewed the output, adjusted it, and pushed the project forward.

At first, it felt different.

Wallet management logic, on-chain data collection, trigger conditions for automated submission — these pieces moved forward one by one. I was not writing every line myself. I was describing direction, and direction was turning into code.

Short tasks worked well. In half an hour, or over one night, I could see visible progress.

Then the project became longer.

After roughly a day, I noticed that once the same thread went through more than a few rounds of conversation, the AI started to lose control of the project. So I opened a new thread, pasted in the previous context, and tried to continue from where I had left off.

The result was just as disappointing.

The AI read the text and started writing. I looked at the output and knew something was wrong.

It was not a bug. It was not a syntax error. It was not that the AI failed to understand the words I had just written. In fact, it produced a response that looked reasonable.

But it only understood the text I pasted in. It did not carry the two days behind that text.

The directions I had abandoned, the choices I had made, the functions I had decided not to build but that still shaped the current design — all of that disappeared. What the AI reconstructed from the text was a clean, reasonable, but already incorrect project state.

The code was not the first thing that broke.

The project state was.

---

## The first break: AI could write, but the project could not carry itself forward

Over the next few days, I tried the most natural fixes.

I pasted in more history, hoping the AI could hold more of the project. It helped for a while, but as the project grew, the boundary appeared quickly.

I wrote more detailed prompts. I described the requirements more completely. I made the constraints clearer. I added what not to do. That also helped, but every new thread still felt like starting over. No matter how detailed the prompt became, it could not reconstruct the judgments that had naturally formed during the previous conversations.

AI could read what needed to be done now.

But it could not understand why certain things should no longer be done.

It could see the current request, but not the abandoned paths behind that request, the confirmed boundaries, or the design judgments that were not written in the current prompt but still shaped the whole project.

I began to realize that this was not simply a problem of writing better prompts.

But I still could not name what the problem was.

All I knew was this:

AI could write, but the project could not carry itself forward.

---

## The prompt stage: I tried to control AI with clearer instructions

At first, I assumed the prompt was not clear enough.

So I made the requirements more specific. I made the boundaries more explicit. I wrote what should not be changed. For example: only modify the wallet management logic; do not touch the automated submission logic. Only handle on-chain data reading; do not restructure the entire project. This function can be changed, but do not alter the external interface.

In the short term, this worked.

The AI became more stable in single responses. The output became closer to what I wanted. It was less likely to drift away from the task, and more likely to complete a local change according to my instruction.

But as the project continued, the same problem came back.

A prompt can constrain one response. It cannot easily constrain a project that is changing over time.

When requirements change, earlier prompts begin to expire. When a judgment changes, the boundaries written before may no longer apply. Worse, some changes are not explicit “requirement changes” at all. They happen gradually during development: I discover that a previous approach is not suitable; I temporarily change the implementation path; I decide not to build a function yet, but that decision still affects the architecture; I confirm a boundary in one conversation, but that boundary never enters the next context.

Prompt solves the problem of current expression.

It does not solve the problem of project state.

It can tell AI how to answer at this moment. It cannot ensure that the project is carried forward in the same state in the next round, the next thread, or the next task.

That was what made me uncomfortable.

I was not working with an AI that could not write code.

I was working with an executor that periodically lost the state of the project.

---

## The rules stage: constraint files kept growing, but the project still drifted

When prompts were not stable enough, I naturally started to externalize constraints.

Project notes, task templates, rule files, development instructions, and project-level files similar to claude.md became new carriers of project knowledge. They looked more engineered. They felt closer to how a real software project should work.

The logic was natural.

If a single prompt is not reliable, write the rules somewhere more stable. Let the AI read them before each task. Let it know the project goal, the technical boundary, the current structure, the coding rules, the parts it should not touch, and the way the current task should be executed.

But soon, another problem appeared.

These files became longer and longer, but their constraint power did not become stronger.

Instead, they started to look like an expanding manual. The AI could read them, but it did not necessarily know which rule mattered most now, which one had expired because of a requirement change, which one was only historical background, and which one was still an active boundary.

Rule files solved the question of where to write constraints.

They did not solve the question of when those constraints were still valid.

I could write everything down, but the project was not static. As long as the project kept moving, the rules started to develop state gaps: some rules were still valid, some had become stale, some only applied to an earlier stage, and some conflicted with new requirements.

That was when I began to see a deeper problem.

The project was not losing control because there were too few constraints.

It was losing control because the project itself was changing, while the constraints were not changing with the project state.

---

## The context stage: the problem was not lack of information, but changing context

At this point, the problem moved from prompt to context.

The AI did have context. It had the current conversation. It had summaries I pasted in. It had rule files, task descriptions, and background notes that I kept adding.

But this context was not a stable project state.

It was more like a pile of text stitched together.

When a requirement changed, which parts of the context should be updated? Which historical judgments should remain? Which constraints should be removed? Which parts were only background, and which still had execution authority?

There was no answer.

The problem became especially visible after context was compacted or summarized.

Compressing a long conversation into a summary can help the model continue. But what exactly gets compressed away? A chat history? Or the reasoning chain behind why the project was designed in a certain way?

Those are not the same thing.

A compact summary may preserve the statement “we chose option B,” while losing why option A was rejected, when option B should be reconsidered, who confirmed the choice, and which downstream modules were affected by it.

Compression can preserve conclusions.

It often loses the trade-offs, boundaries, and judgment process behind those conclusions.

That was when I began to realize that context is not a pile of material.

Context is a slice of project state at a particular moment.

If that slice is not updated, if it does not distinguish validity, if it does not preserve the source of critical judgments, then AI may read more text and still only see a mixture of stale, conflicting, and unweighted information.

This was not a problem of context length.

It was a problem of whether the context still represented the current project state.

---

## Intent Drift: what was really drifting was the project intent

Later, while debugging these problems, AI once described the phenomenon as intent drift.

That phrase connected many scattered problems for me.

What I was facing was not merely a requirement change. It was not merely insufficient context. What was drifting was the project intent.

A project starts by trying to do A. Then, because of implementation difficulty, technical constraints, user judgment, business goals, or risk assessment, it gradually becomes A'. That change may be reasonable. It may even be necessary.

But if the change is not explicitly recorded, confirmed, and propagated, later execution becomes influenced by both the old intent and the new intent.

For example, the original goal may have been “automatically monitor all on-chain launch opportunities.” Later, because of gas costs, noisy data, risk control, and execution complexity, the goal may narrow to “only monitor whitelisted projects.”

That change is reasonable.

But if it is not clearly recorded, the AI may still design the data structure around “all opportunities” in one task, implement filtering around “whitelisted projects” in another task, and write acceptance criteria based on the old goal in a later test.

The project appears to be moving forward.

In reality, it has been split across three different versions of intent.

At that point, the question is no longer “how should I write the prompt?”

The question becomes:

When did this intent change?

Why did it change?

Who confirmed the change?

Which context, plan, code, tests, and acceptance criteria did it affect?

If the change was wrong, can it be rolled back?

A requirement change is not just editing one prompt.

A requirement change is project intent drifting through time.

Once you accept that intent drift exists, you have to face a larger question: drift cannot merely happen. It must be detectable, confirmable, traceable, and, when necessary, reversible.

<figure class="article-figure article-figure--growth-chain">
  <img src="/figures/ai-agent-lifecycle-01-growth-chain.svg" alt="Growth chain diagram showing how prompt constraints, rule files, context problems, intent drift, governance needs, and multi-agent amplification led to AI Agent Lifecycle" width="1280" height="720" loading="lazy" decoding="async" />
  <figcaption>Figure 1. The essay is not introducing the four-layer definition yet. It traces the failure chain that made the lifecycle category necessary.</figcaption>
</figure>

---

## Drift governance: change has to be confirmed, traced, and rolled back

Once I understood the problem as intent drift, the question was no longer “how do I write more clearly?”

It became: how should this change be handled?

This was when I began to give names to the governance needs I was seeing.

At first, they were only four hard constraints:

Plan meant what should be done.

Confirm meant whether it should be done.

Trace meant what had been done.

Delivery meant what counted as accepted.

But as the problem of intent drift became clearer, the meaning of these four words also started to change.

Plan was no longer just a task list. It became the execution expression of the current intent. It had to explain not only what to do now, but why this should be done, and how it related to the previous goal.

Confirm was no longer just human approval. It became the boundary around high-impact changes. Not every operation needs confirmation, but if a change affects the original goal, the core architecture, the interpretation of context, or the acceptance criteria, AI cannot simply slide past it.

Trace was no longer just a log. It became evidence connecting changes in intent to changes in execution. It had to preserve not only what was done, but why it was done, where the change began, and what it affected.

Delivery was no longer just output. It became an accepted state. Generated code is not delivery. A completed task is not delivery. An AI answer is not delivery. Delivery means a result has been placed back into the project state and can be carried forward by future work.

At this point, the problem had shifted from “how can AI execute tasks better?” to “how can a project remain continuous after its intent changes?”

That was the first time I truly felt the danger.

The most dangerous thing about AI in project work is not that it makes one mistake. It is that, across continuous execution, it can gradually change the direction of the project without any mechanism telling you where the change began, who confirmed it, what it affected, and whether you can return to a previous state.

That is when rollback became important.

Not only rolling code back to a previous version, but returning project state, intent state, context state, and execution evidence to a position that can be understood.

Without this, an AI project can keep moving forward while no one can explain when it started drifting away.

---

## Multi-agent amplification: one drift can affect the whole collaboration chain

Intent drift inside a single AI conversation is already difficult.

With multiple roles or multiple agents, it gets amplified.

One agent may plan based on old context. Another agent may execute based on new context. A third agent may review based on a compacted summary. On the surface, they are collaborating. In reality, they may not share the same project state.

At that point, the difficulty of multi-agent systems is not “having more roles.”

It is whether multiple executors can share the same lifecycle state.

How does a change in intent affect the plan?

How does a context update affect execution?

How does a confirmation result change the task boundary for later agents?

How does trace evidence help another agent judge the current state?

If these questions are not defined, multi-agent work may look like division of labor while actually running multiple fragments of context at the same time. Each agent may complete its local task, while the project state is torn apart between tasks.

That is also why I became increasingly cautious about understanding multi-agent systems through traditional human role labels.

The question is not whether we can give AI several role names.

The question is whether these roles share the same project intent, the same context state, the same confirmation boundaries, and the same evidence chain.

As persistent agents, long-term memory, self-learning, and cross-task execution become more powerful, this problem becomes clearer.

The stronger the execution capability becomes, the less we can ask only whether the agent can continue executing.

If lifecycle state is not defined, long-running execution will only amplify drift.

---

## The systems echo: complex systems are hard not because of execution, but because of consistency over time

This is where my previous experience with exchange systems started to matter.

Before this, I had worked through the business logic and architecture of digital asset exchange systems: matching engines, user accounts, perpetual contracts, liquidation, compensation mechanisms, market makers, and broker platforms.

In that world, you learn one thing quickly:

The hardest part of a complex system is not the happy path.

The happy path of a matching engine is not that complicated. The harder questions are: what happens if a trade matches but settlement fails? What happens if a position hits the liquidation threshold while the market is moving violently? How does a compensation mechanism intervene? How does a permission change in a broker platform take effect without breaking ongoing business?

These questions share one structure:

The system must remain consistent through time, and unexpected things will happen through time.

You cannot handle that by improvising. You have to define state, boundaries, compensation, responsibility, and audit paths at the design level.

AI agent systems and exchange systems are not the same business.

But they share a complex systems pattern: execution can be correct while system state still becomes distorted over time.

In an exchange, one trade executing successfully does not mean the account, position, liquidation, and compensation chain are all consistent.

In an AI project, one agent executing successfully does not mean the project intent, context, plan, evidence, and acceptance state are still consistent.

That was the part I recognized.

Not the AI tools themselves.

The difficulty of keeping a complex system consistent through time.

---

## Structure growth: MPLP was forced out by these failure boundaries

These concepts did not appear all at once.

I did not first understand Lifecycle and then design modules around it. It was the opposite. The project broke again and again, and I was forced to give names to the breaks.

The first concepts were Plan, Confirm, Trace, and Delivery, because the first things I needed to solve were: what should AI do, whether it should do it, what it left behind, and what counted as delivery.

Later, Context became unavoidable, because a project is not one prompt. It is a changing state.

Then Intent Drift made me realize that requirement change was not text editing. It was the gap between the original goal, current judgment, and downstream execution.

After that, Role, Dialog, Collab, and Extension gradually appeared. They did not come from theory. They came from repeated failures in multi-round tasks, role switching, multi-agent collaboration, and cross-project reuse.

By June 2025, I had organized these problems into six modules.

By October 2025, they had expanded into ten modules and eleven Kernel Duties.

This was not because I wanted the structure to look complete.

It was because the previous structure could not answer new real situations: how do multiple agents collaborate? How can dialogue become inheritable state? How should extension capability be constrained? How does core system meaning remain consistent? How are boundaries and responsibilities expressed across projects, teams, and organizations?

Behind every new module was a question the previous structure could not answer.

One thing should be clear: before the end of 2025, I was working on the protocol abstraction of MPLP. Cognitive OS, SoloCrew, Dialogue is Asset, Runtime, and product projections came later, in 2026.

They were not the origin of MPLP.

The origin of MPLP was this chain of real failure boundaries.

---

## The concept appears: only later did I call it AI Agent Lifecycle

Through this process, I slowly saw what I had really been dealing with.

It was not a prompt problem.

It was not a context problem.

It was not a tool selection problem.

It was not only a workflow problem.

I was dealing with how AI-participated work remains continuous through time.

From intent, to plan, to confirmation, to execution, to mid-course change, to evidence preservation, to final acceptance, and to whether the work can still be understood and reconstructed in the future.

For a long time, I did not name it.

Only later did I begin to call it:

**AI Agent Lifecycle.**

I did not start with the term and then look for examples to support it. I was pushed toward the term by a real project, repeated failure boundaries, and recurring context breaks.

My definition is:

**AI Agent Lifecycle is the continuity of intent, context, role, plan, confirmation, execution, evidence, learning, and accepted outcome across agent activation, engineering process, project, and cross-project dimensions.**

At this point, the outline of AI Agent Lifecycle becomes clear.

But it is important to distinguish this definition from existing standards.

The phrase “AI lifecycle” is not new. Existing standards and frameworks already discuss AI lifecycle from the perspective of system engineering and risk management. They focus on how an AI system is designed, validated, deployed, operated, monitored, and eventually retired.

My definition of AI Agent Lifecycle addresses a different layer.

It is not about how to build an AI system.

It is about how concrete work performed with AI agents remains continuous through time.

This is the lifecycle of work delivery, not the lifecycle of system engineering.

A simple distinction is this: a system lifecycle can tell you how an AI system should be verified, monitored, and governed during deployment and operation. But it usually does not answer what happens when an agent encounters an intent change in the middle of a project: how that change should be recorded, how it should be propagated to future agent activations, who confirms that the change is valid, and where the resulting execution evidence belongs.

Those questions happen inside active agent work.

They are post-execution questions.

They are questions of how work remains consistent through time.

So AI Agent Lifecycle is not a replacement for existing AI lifecycle frameworks. It operates at a different layer. Existing frameworks define how AI systems are built and governed. AI Agent Lifecycle focuses on how the work performed by agents remains continuous, traceable, and acceptable.

I will write about the standards comparison and compliance mapping separately.

---

## The age of execution is not enough

Looking back at how the market has evolved, I now see the pattern differently.

The industry later gave many names to what was happening.

Vibe coding named the experience of expressing direction in natural language and letting AI turn that direction into code.

Prompt Engineering tried to make single responses more accurate.

Context Engineering began to discuss what the model should see.

Harness Engineering pushed attention toward tools, permissions, workflows, feedback loops, and documentation environments.

Persistent agents pushed long-term memory, self-learning, and cross-task execution further.

These are real advances, and they will continue.

But they share one center of gravity:

They help AI execute better.

Prompt Engineering improves response quality. Context Engineering improves what the model sees. Harness Engineering improves the operating environment of agents. Persistent agents improve cross-task execution capability.

These are execution-layer answers.

The problem I was forced to face in 2024 was one layer above execution.

What remains after execution?

Whose intent was it?

Who confirmed the change?

Where is the evidence?

Who accepts the result?

If something goes wrong, who can trace it?

Can the project state still be reconstructed six months later?

An agent can execute every individual task correctly while the project still loses control at the lifecycle level: requirement drift is not recorded, key decisions are not traceable, change impact is not globally assessed, responsibility boundaries are unclear, and eventually no one can answer why the project looks the way it does.

Execution may be correct.

But the project has not been held by a lifecycle.

That is also why many developers can say these tools are powerful while still calling them toys. The capability is real. But responsibility, auditability, project continuity, and production-grade delivery have not been systematically held.

Architects and enterprise teams responsible for real production delivery do not only ask whether an agent can write more code.

They ask: if something goes wrong, can we trace it? If requirements change, can we locate the impact? Who confirmed the execution? Where is the evidence? Can the project state be reconstructed? Can the risk be assessed?

Without lifecycle, these questions have no stable answer.

As AI agents move into consequential domains such as healthcare, finance, and enterprise delivery, the question becomes even clearer: where is the decision chain? Where is the evidence? Where are the responsibility boundaries?

AI Agent Lifecycle is the mapping layer between those questions and real agent work. You need lifecycle records before you have auditable evidence. You need responsibility boundaries before governance can be applied. You need traceable decision chains before risk can be assessed.

I will expand this part in later essays.

---

## Closing: this first essay only answers why it had to be named

In September 2024, I only wanted to finish a Web3 launch automation app.

I was not thinking about protocols.

I was not thinking about lifecycle.

I was not thinking that this would become a category worth defining.

But the problem was there.

Not because the tools were bad. Not because the models were weak. But because the industry kept optimizing the same thing without systematically asking another question:

**What remains after execution?**

I was already walking into these problems before the market gave many of them names. At that time, all I had was a project, a failure, a temporary fix, and an increasingly clear question.

The first age of AI agents asks:

What can agents do?

That question has driven the innovations from prompt to context, from context to harness, and from harness to persistent agents. It will continue.

The second age asks:

Can what agents do remain through time?

Can it be traced?

Can it be accountable?

Can it be trusted?

**Execution makes agents useful. Lifecycle makes agent work trustworthy.**

This column, **Define The AI Agent Lifecycle**, is where I will systematically answer that question.

This first essay is a prelude. It is not the four-layer definition yet. It explains why this problem grew out of real engineering practice, and why it needed to be named.

In the next essay, I will define the four layers of AI Agent Lifecycle and explain what engineering problem each layer solves.

# 9. Evidence Partitioning Across Agents, Tools, Roles, Vendors, and Projects

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Define how evidence is separated and linked across lifecycle boundaries.
**Reader question:** How do reviewers avoid flattened responsibility in multi-agent and tool-mediated work?

## Key Claims

- Evidence must be partitioned and linkable across agent, tool, role, vendor, project, data class, jurisdiction, and lifecycle state where relevant.
- Partitioning enables reconstruction without blanket disclosure.
- Cross-project reuse, third-party processor chains, and vendor/model/runtime substitution require explicit evidence boundaries.

## Source Grounding Note

Provenance and observability/logging context uses EVID-01, EVID-02, and EVID-03. Privacy context uses PRIV-01, PRIV-02, PRIV-03, and AI-09. GAIC source truth provides MRO-08, MRO-09, MRO-10, MRO-14, and MRO-15.

## Author Synthesis Note

The evidence partitioning model is WP2 author synthesis grounded in provenance, observability, privacy, and GAIC MROs.

## Draft Prose

Agentic evidence becomes difficult to review when everything is flattened into one trace, one log export, one transcript, or one vendor report. Multi-agent systems distribute work across agents, tools, human roles, vendors, processors, projects, and data boundaries. Auditability requires those boundaries to be visible.

Partitioning is the discipline of separating evidence by review-relevant boundary while preserving the links needed for reconstruction. It is not the same as hiding evidence. It is not the same as retaining everything. It is a way to make evidence reviewable, scoped, and privacy-aware.

The first partition is the work unit. Every evidence item should connect to a lifecycle work unit or reconstruction path. Without a work unit, reviewers may know that events happened but not which lifecycle task they belong to.

The second partition is the agent. Agent roles may differ in authority, capability, tool access, evidence duties, and escalation requirements. If evidence only shows that "the system" acted, responsibility surfaces become blurred. Reviewers should be able to distinguish planning agents, execution agents, review agents, monitoring agents, and remediation agents where those roles exist.

The third partition is the tool. Tool actions often create external consequences. Evidence should separate model output from tool execution, tool execution from downstream system state, and reversible actions from irreversible or high-impact actions. Tool-specific evidence can include request/response logs, target system records, affected data categories, rollback records, and owner information.

The fourth partition is the human role. A user account is not enough. Auditability requires role responsibility: request owner, delegating role, reviewer, acceptor, exception owner, remediation owner, privacy owner, or internal audit reviewer. These roles should connect to evidence without implying legal liability.

The fifth partition is vendor, processor, and runtime boundary. Agentic systems may call third-party tools, external APIs, model providers, orchestration runtimes, vector stores, workflow systems, or processors/subprocessors. Evidence should identify where responsibility, data processing, and review access shift. This is not vendor ranking. It is boundary mapping.

The sixth partition is project and reuse context. Cross-project reuse can move prompts, agents, workflows, memory, tools, or policies into a new context. Reuse may be efficient, but auditability requires evidence that scope, authority, privacy treatment, and evidence obligations were reset or revalidated for the new context.

The seventh partition is privacy and disclosure class. Some evidence can be disclosed directly. Some should be redacted. Some may require evidence pointers, hashes, summaries, or reviewer-specific access. The partitioning model should make it possible to review what is necessary without exposing more than the review requires.

## Table 6: Evidence Partitioning Matrix

| Partition dimension | Why it matters | Evidence boundary | Access/disclosure rule | Failure if missing | Related MRO |
|---|---|---|---|---|---|
| Work unit | Anchors reconstruction | Work unit ID and lifecycle stage | Reviewer access tied to scope | Evidence cannot be connected | MRO-08 |
| Agent | Separates responsibility surfaces | Agent ID, role, constraints, work segment | Role-based evidence disclosure | Flattened agent responsibility | MRO-03, MRO-06, MRO-08 |
| Tool | Tracks external consequence | Tool ID, target system, action type, reversibility | Tool-specific disclosure and redaction | Unclear side effects | MRO-05, MRO-08 |
| Human role | Connects governance ownership | Role map, approval, review, acceptance, closure | Need-to-know reviewer access | User identity mistaken for responsibility | MRO-01 |
| Vendor / processor | Maps third-party boundary | Vendor/processor role, subprocessor chain, data path | Contract/privacy-aware disclosure | Responsibility chain disappears | MRO-14 |
| Project / reuse context | Prevents context drift | Source context, target context, reset validation | Reuse-specific review access | Old authority/policy reused incorrectly | MRO-09 |
| Runtime/model substitution | Preserves evidence continuity after change | Prior/new component, revalidation evidence | Change-scoped disclosure | Evidence chain breaks after substitution | MRO-15 |
| Privacy class | Limits overexposure | Data category, redaction profile, retention rule | Minimized disclosure | Privacy leakage or evidence hoarding | MRO-10, MRO-12, MRO-13 |

**Table note:** Mixed source-grounded and author-synthesis table. It does not create universal disclosure or retention rules, vendor rankings, or procurement recommendations.

## Cross-Links

- Chapter 10 covers privacy and selective disclosure.
- Appendix A includes partition fields for evidence requests.
- Appendix C maps partitioning to MRO-08, MRO-09, MRO-14, and MRO-15.

## Boundary Note

Partitioning is a review architecture. It does not decide legal retention, data subject rights, processor obligations, or vendor liability.

## R3 QA Notes

- Vendor/processor language may need deeper source review if expanded.
- Keep cross-project reuse concise unless Guide 1/Guide 2 will take more detail.

# GAIC-R4B WP2 to Guide 1 / Guide 2 Boundary

**Status:** Architecture baseline
**Date:** May 16, 2026
**Boundary:** Planning-only. This file defines series relationships; it does not draft WP2, Guide 1, or Guide 2 body text.

## Fixed Sequence

1. WP2: Agentic AI Auditability & Assurance White Paper 2026
2. Guide 1: CIO/CTO Guide to Audit-Ready AI Agent Systems
3. Guide 2: Chief Compliance Officer Guide to Agentic Lifecycle Governance
4. WP3: Agentic AI Insurability White Paper 2026
5. Guide 3: Enterprise Risk Guide to Insurable AI Agent Systems

## WP2 Role

WP2 defines what audit-ready means for agentic lifecycle work.

It owns the **Audit Evidence Object** layer in the object chain:

Compliance Object -> Audit Evidence Object -> Insurable Risk Object

WP2 should define the evidence architecture needed to reconstruct, test, and review agentic lifecycle work across authority, responsibility, tools, outcomes, exceptions, privacy boundaries, and remediation closure.

## Guide 1 Role

**CIO/CTO Guide to Audit-Ready AI Agent Systems** translates WP2 into enterprise technical architecture and implementation.

Guide 1 likely covers:

- Architecture patterns.
- Runtime evidence capture.
- Tool-action trace.
- Rollback / remediation architecture.
- Vendor integration checklist.
- Audit-ready observability vs ordinary logs.
- Evidence export, replay, retention, and selective disclosure implementation.
- Authority-bound tool-call gates.
- Agent/tool partitioning and lifecycle ID propagation.

Guide 1 must not become an MPLP-only implementation manual. MPLP may appear as one protocol path if later justified, but Guide 1 must remain useful for non-MPLP systems.

## Guide 2 Role

**Chief Compliance Officer Guide to Agentic Lifecycle Governance** translates WP1 + WP2 into an enterprise compliance operating model.

Guide 2 likely covers:

- Policy-to-evidence mapping.
- MRO adoption checklist.
- Human role responsibility governance.
- Audit / board / regulator preparation.
- Vendor due diligence.
- Incident / dispute / remediation governance.
- Evidence request ownership.
- Privacy and selective disclosure governance.
- Compliance committee operating cadence.

Guide 2 must not become legal advice, legal compliance proof, regulator approval, or assurance opinion.

## Shared Objects

| Shared object | WP2 use | Guide 1 use | Guide 2 use |
|---|---|---|---|
| MRO | Source object vocabulary for audit evidence. | Implementation target for data models and runtime evidence. | Policy/control vocabulary for governance reviews. |
| Authority boundary | Evidence object linking delegated authority to action. | Tool-call gate, scope control, drift detection. | Delegation policy, escalation rule, accountability review. |
| Accepted outcome | Evidence state linking lifecycle work to human/business acceptance. | Outcome-state capture in workflow/runtime. | Acceptance authority and review procedure. |
| Evidence chain | Core auditability structure. | Evidence generation, integrity, export, and replay. | Evidence request, review, retention, and escalation. |
| Audit evidence request | Formal ask for reconstructable evidence. | System output requirement. | Governance request and audit-prep procedure. |
| Remediation closure | Evidence-backed resolution state. | Rollback, fix, recheck, and closure records. | Incident/dispute governance and closure acceptance. |
| Privacy / selective disclosure | Evidence minimization and controlled review. | Redaction, disclosure profile, evidence partitioning. | Privacy/legal escalation and review boundary. |

## Strict Boundary

- WP2 does not become a detailed architecture guide.
- Guide 1 does not become an MPLP-only implementation.
- Guide 2 does not become legal advice.
- None claims legal compliance, certification, audit opinion, assurance opinion, regulator approval, Big Four endorsement, procurement recommendation, vendor ranking, or external adoption.
- WP2 is not published by this planning wave.
- Guide 1 and Guide 2 are not drafted by this planning wave.

## Practical Handoff

WP2 should freeze the conceptual architecture, evidence objects, AARM, table inventory, and appendix structure. Guide 1 can then turn these into CIO/CTO implementation patterns. Guide 2 can turn them into CCO-facing governance routines and review workflows.

## Final Status

**WP2 TO GUIDE 1 / GUIDE 2 BOUNDARY COMPLETE**

# Part II Core Object Problem Outline

## Part Thesis

The central insurance problem is not that an AI agent acted. It is that the agentic work must be mapped to an insured legal subject, human responsibility role, corporate owner, vendor/tool boundary, policy line, and evidence chain.

## Chapter 4: The Insured Subject: Company, Person, Officer, Professional, Vendor

| Field | Outline |
|---|---|
| Chapter thesis | The insured subject is typically a company, person, officer, professional, vendor, or platform operator, not the AI agent itself. |
| Reader pain | An enterprise asks whether "the AI" is insured; the insurer asks who is the policyholder, what line applies, and what loss category is claimed. |
| Opening example | A board approves AI deployment, a professional uses it in client work, a vendor hosts the tool, and a company owns the customer relationship. The claim question cannot be answered by naming the AI agent. |
| Argument beats | Define insured legal subject; compare company, director/officer, professional, vendor, platform/operator; map D&O/E&O/Tech E&O/Cyber/Professional Liability/Crime/Media-IP examples; introduce agentic work unit as separate object. |
| Source basis | INS-AON-RISK-2026; CLAIM-SEC-CYBER-2023; silent exposure matrix; WP1 responsibility object; WP2 audit object. |
| WP1/WP2 bridge | WP1 responsibility object and WP2 audit object help define what must be reconstructed about the actor/work relationship. |
| Tables/figures | "Insured Subject vs Agentic Risk Object" table; "Insurance Line vs Agentic Exposure" matrix. |
| Forbidden claims | No legal liability determination; no coverage opinion; no claim that AI agents are never insured in all possible arrangements. |
| R3 drafting notes | Answer explicitly: company, human, AI agent, vendor, or work unit? The safe answer: the legal subject and risk object are different layers. |

## Chapter 5: The Agentic Risk Object: Bounded Lifecycle Work Unit

| Field | Outline |
|---|---|
| Chapter thesis | The agentic risk object is a bounded lifecycle work unit: an analytical object for reconstructing agentic work, not an external insurance standard or insured legal subject. |
| Reader pain | Losses from agentic systems are hard to place because the final output does not show authority, tools, dependencies, acceptance, or downstream action. |
| Opening example | A procurement agent selects a supplier, calls an external API, updates an ERP record, and sends a confirmation. The risk object is the work unit and its lifecycle, not just the model output. |
| Argument beats | Define bounded lifecycle work unit; include purpose, authority scope, agent/tool actions, data/model/vendor dependencies, accepted outcome, exception/remediation state, loss event; explain why this object supports evidence reconstruction. |
| Source basis | CLAIM-NIST-80061R3; INS-QBE-LLM-2025; REIN-SWISSRE-CLOUD-2024; WP1 MROs; WP2 auditability object. |
| WP1/WP2 bridge | WP1 names lifecycle objects; WP2 shows why logs alone are not evidence chains. |
| Tables/figures | "Bounded Lifecycle Work Unit Field Model" table. |
| Forbidden claims | Do not claim external insurance standard, legal category, or coverage trigger. |
| R3 drafting notes | Keep definition practical and short; defer AIO v2 formalization to Chapter 18. |

## Chapter 6: Human Role x Agent Role x Corporate Responsibility

| Field | Outline |
|---|---|
| Chapter thesis | Agentic risk transfer requires a responsibility bridge between human role, agent/tool role, corporate responsibility, vendor/platform role, and remediation owner. |
| Reader pain | Companies often say a human was "in the loop" without showing who owned intent, review, acceptance, escalation, and remediation. |
| Opening example | A human approves a workflow, an agent executes it, a vendor model supplies output, and a business unit accepts the result. After loss, nobody can show who owned each decision state. |
| Argument beats | Separate intent, delegation, execution, review, acceptance, escalation, remediation, and closure; map MAS roles to corporate responsibility; connect D&O/governance exposure and professional liability ambiguity. |
| Source basis | CLAIM-SEC-CYBER-2023; GOV-NIST-AIRMF; INS-AON-RISK-2026; WP1 responsibility object; WP2 role mapping. |
| WP1/WP2 bridge | WP1 authority/responsibility and WP2 Audit Evidence Chain supply the responsibility-linked evidence frame. |
| Tables/figures | "Human Role x Agent Role x Corporate Responsibility Bridge" figure. |
| Forbidden claims | No legal liability determination; no officer/professional coverage conclusion. |
| R3 drafting notes | Figure should be visually central and later reusable in claims chapters. |

## Chapter 7: HITL Is Not a Responsibility Structure

| Field | Outline |
|---|---|
| Chapter thesis | Human-in-the-loop is a review event unless it is tied to authority, criteria, evidence, acceptance, exception handling, and remediation responsibility. |
| Reader pain | HITL is used as a comfort phrase, but claim reconstruction needs more than the fact that someone reviewed something. |
| Opening example | A reviewer clicks approve after an AI workflow completes; later, the company cannot show what the reviewer saw, what authority applied, what criteria were used, or whether exceptions were closed. |
| Argument beats | Define HITL limits; show review event vs responsibility architecture; explain authority, acceptance, evidence, and remediation; connect to underwriting and claim reconstruction. |
| Source basis | GOV-NIST-AIRMF; CLAIM-NIST-80061R3; INS-AON-RISK-2026; WP1 authority/accepted outcome; WP2 AEC. |
| WP1/WP2 bridge | WP1 authority and accepted outcome convert HITL into evidence-backed responsibility; WP2 evidence chain prevents log-only claims. |
| Tables/figures | "HITL Event vs Responsibility Architecture" contrast table. |
| Forbidden claims | Do not claim HITL guarantees coverage, readiness, compliance, or reduced premium. |
| R3 drafting notes | Make this a short high-impact chapter leading into Part III. |

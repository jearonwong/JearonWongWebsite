# Chapter 05
## Why Agentic AI Is Not Yet Broadly Insurable

Agentic AI is not yet broadly insurable because insurers still need to bound the object, attribute the act, reconstruct the event, and understand aggregation before they can review the loss with confidence. [SRC: INS-01][SRC: CLAIM-01][SRC: CYB-02][SRC: CYB-03][SRC: CYB-04]

### Gap Table

| Insurance question | Current AI stack often provides | Missing lifecycle object | Source |
| --- | --- | --- | --- |
| What is the object? | Model name, workflow name, vendor name | Bounded agentic work unit | [SRC: MKT-01][SRC: TECH-01][SYNTHESIS: Jearon Wong] |
| Who is responsible? | Logs, approvals, handoffs | Human-agent responsibility map | [SRC: CLAIM-03][INT: INT-01][INT: INT-05] |
| What happened? | Events and traces | Loss event record with context | [SRC: CLAIM-01][SRC: CLAIM-02][INT: INT-05] |
| What was remediated? | Alerts or tickets | Remediation and recovery record | [SRC: CLAIM-02][SRC: CLAIM-03][INT: INT-05] |
| What depends on what? | Technical dependency lists | Dependency and aggregation view | [SRC: CYB-02][SRC: CYB-03][SRC: CYB-04][INT: INT-03] |

### Draft Body

The core claim should be narrow: current sources show market experimentation and governance pressure, but not a standardized lifecycle object layer for agentic AI. [SRC: MKT-01][SRC: MKT-05][SRC: MKT-08][SRC: CLAIM-01][TECH-01]

That means the gap is not just the LLM, the framework, or the vendor. It is the missing layer that turns action into reviewable risk. [SYNTHESIS: Jearon Wong][INT: INT-06]

### WP1 / WP2 Bridge

- WP1 shows why lifecycle failure modes need object boundaries.
- WP2 shows why auditability needs evidence chains, not just logs. [INT: INT-01][INT: INT-04][INT: INT-05]
- WP3 converts those into insurability terms.

### Boundary

- Do not say "AI agents are uninsurable."
- Do not say "AI agents are insurable."
- Do not imply the market has settled the question.

### Draft Notes

- Use "not yet broadly insurable" instead of stronger absolute claims.
- Keep the gap framed as a missing lifecycle layer.

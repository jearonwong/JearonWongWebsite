# Chapter 11
## Third-Party, Vendor, Model, and Tool Dependency Risk

Agentic AI risk is rarely single-node risk. It spreads across models, tools, vendors, subprocessors, runtimes, templates, and repeated workflows. [SRC: CYB-02][SRC: CYB-03][SRC: CYB-04][SRC: MKT-08][SRC: TECH-01][SRC: TECH-02][SRC: TECH-03][SRC: TECH-04][SRC: TECH-05]

### Dependency Table

| Dependency layer | Risk | Evidence needed | Aggregation concern | Source |
| --- | --- | --- | --- | --- |
| Model provider | Model change, outage, error | Dependency map, version record | Shared model exposure | [SRC: MKT-01][SRC: TECH-01] |
| Tool provider | Tool failure or misuse | Tool inventory, permission scope | Shared tool exposure | [SRC: TECH-02][SRC: TECH-05] |
| Vendor chain | Subprocessor or upstream service issue | Contract and handoff map | Concentrated dependency | [SRC: CYB-02][SRC: CYB-03] |
| Runtime / framework | Checkpoint, handoff, or persistence issues | Trace and state record | Shared orchestration exposure | [SRC: TECH-04] |
| Cross-project reuse | Same template across many work units | Work-unit registry | Correlated loss across projects | [INT: INT-03][INT: INT-06] |

### Draft Body

This chapter should frame dependency risk as evidence for concentration, not as a vendor scorecard. The reader should understand the chain without seeing a ranking. [SYNTHESIS: Jearon Wong][INT: INT-03]

Cyber accumulation sources are useful only as analogy and risk framing. They do not become direct actuarial proof for agentic AI. [SRC: CYB-02][SRC: CYB-03][SRC: CYB-04]

### Boundary

- No vendor ranking.
- No procurement recommendation.
- No claim that one provider is safer by default.

### Draft Notes

- Keep vendor, model, and tool categories distinct.
- Keep the aggregation paragraph explicitly labeled as analogy where it leans on cyber sources.

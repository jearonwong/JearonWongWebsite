# Chapter 07
## Why Logs, Traces, and Vendor Assurances Are Not Claim Evidence

Technical traces are useful inputs, not claim evidence by themselves. They can show activity, timing, and flow, but they do not automatically prove authority, responsibility, remediation, or coverage boundary. [SRC: CLAIM-01][SRC: CLAIM-02][SRC: CLAIM-03][SRC: TECH-01][SRC: TECH-04]

### Sequence Figure

```mermaid
flowchart LR
  A["Intent"] --> B["Authority"]
  B --> C["Agent Action"]
  C --> D["Tool Use"]
  D --> E["Loss Event"]
  E --> F["Control Failure"]
  F --> G["Responsibility"]
  G --> H["Remediation"]
  H --> I["Claim Review"]
```

### Draft Body

Logs and traces can help reconstruct what happened. They cannot, by themselves, answer the insurance questions that matter most: was the action authorized, who owned it, what failed, what was remediated, and what evidence belongs in the claim file. [SRC: CLAIM-01][SRC: CLAIM-02][SRC: CLAIM-03][INT: INT-05]

Vendor assurances can support risk discussion. They are not coverage authority. Framework traces can support technical reconstruction. They are not claim evidence by themselves. [SYNTHESIS: Jearon Wong][INT: INT-05][INT: INT-06]

### Source-Layer Distinction

| Signal | What it shows | What it does not show | Source |
| --- | --- | --- | --- |
| Logs | Events, timestamps, service activity | Authority or accepted outcome | [SRC: CLAIM-01][SRC: TECH-01][INT: INT-05] |
| Traces | Workflow path and service flow | Responsibility transfer or legal causation | [SRC: CLAIM-01][SRC: TECH-04][INT: INT-05] |
| Vendor assurances | Market position or product intent | Coverage boundary or claim approval | [SRC: MKT-03][SRC: MKT-05][SRC: MKT-08] |
| Incident guidance | Response and recovery vocabulary | Insurance decision | [SRC: CLAIM-01][SRC: CLAIM-02][SRC: CLAIM-03] |

### Boundary

- Do not say traces prove the claim.
- Do not say logs are useless.
- Do not say a vendor statement creates insurance evidence.

### Draft Notes

- Keep this chapter readable for claims teams, not only engineers.
- Reuse the safe phrase: "technical traces are useful inputs, not claim evidence by themselves."

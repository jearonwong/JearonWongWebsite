# WP3 R3 Source Register Summary

This summary is a compact guide to the source families used in the R3 draft. It is not a replacement for the R1 source inventory or the R2A accuracy audit.

## External Source Families

| Family | IDs | Best use in R3 | Caveat |
| --- | --- | --- | --- |
| Insurance basics | INS-01 to INS-10 | Policy subject, limits, exclusions, E&O, D&O, cyber basics | Use for plain-English insurance framing only |
| AI insurance market signals | MKT-01 to MKT-08 | Product examples, broker framing, market edge, narrow cover examples | Market signal, not consensus proof |
| Cyber aggregation and systemic risk | CYB-01 to CYB-05 | Accumulation analogy, threat context, concentration risk | Do not turn cyber analogy into agentic actuarial proof |
| Claims and incident reconstruction | CLAIM-01 to CLAIM-03 | Event, response, recovery, and evidence vocabulary | Not claim approval guidance |
| Technical framework context | TECH-01 to TECH-05 | Execution, tracing, interoperability, persistence, state | Technical capability only, not insurance evidence |
| AI governance / legal context | AI-01 to AI-09 | Governance, accountability, logging, privacy, regulatory pressure | Do not convert into legal advice |

## Internal Source Families

| Family | IDs | Best use in R3 | Caveat |
| --- | --- | --- | --- |
| GAIC source master | INT-01 | MRO, ALCS, enterprise scenario, and boundary logic | Internal framework truth only |
| Source coverage / evidence register | INT-02, INT-03 | Source quality and claim boundary support | Not external validation |
| WP2 source truth | INT-04, INT-05 | Audit Evidence Chain and logs-vs-evidence distinction | Internal translation only |
| WP3 architecture | INT-06, INT-07 | AIO v2 and AIRM as analytical objects | Author synthesis, not standards |

## Access and Citation Hygiene

- Use access-caveated sources as market signals or technical context, not sole proof of central claims.
- Keep broker, insurer, and vendor materials framed as examples, not industry consensus.
- Keep technical framework docs inside the technical-capability lane.
- Keep AIO and AIRM marked as Jearon Wong synthesis.
- Use current A2A documentation, not the old `google-a2a.github.io` URL.
- Split LangGraph durable execution and persistence citations into separate source references.
- Do not use the old Coalition `cyber-threat-index` URL for any R3-critical claim.

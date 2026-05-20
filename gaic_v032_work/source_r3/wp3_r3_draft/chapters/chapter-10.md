# Chapter 10
## Loss Event Reconstruction and Causality Tracing

The claim question is not just what happened. It is how the event can be reconstructed, what failed, what was remediated, and what evidence chain supports review. [SRC: CLAIM-01][SRC: CLAIM-02][SRC: CLAIM-03]

### Reconstruction Table

| Reconstruction element | Evidence needed | Source type | Boundary risk |
| --- | --- | --- | --- |
| Loss event record | Time, event, effect, owner | Incident / disclosure guidance | Not a full claim by itself |
| Causality trace | Sequence, dependencies, contributors | Incident response + technical trace | Not legal causation proof |
| Control failure record | Failed or bypassed control | Governance / incident guidance | Not negligence finding |
| Remediation record | Fix, recheck, closure | Response and recovery guidance | Not settlement or legal closure |
| Dispute-ready package | Combined review file | Internal synthesis | Not guaranteed payment |

### Draft Body

Logs and traces can support reconstruction, but reconstruction must reach beyond the raw record. It needs role, authority, and remediation context so the claim file can be reviewed rather than guessed. [SRC: CLAIM-01][SRC: CLAIM-02][SRC: CLAIM-03][INT: INT-05]

This chapter should distinguish sequence from causation. Sequence can be documented. Legal causation cannot be assumed from telemetry. [SRC: TECH-04][INT: INT-06]

### WP1 / WP2 Bridge

- WP1 accepted outcome and remediation closure map to the post-loss story.
- WP2 Audit Evidence Chain becomes the WP3 Claim Evidence Chain.
- AIO-06 to AIO-10 do most of the work here. [INT: INT-01][INT: INT-04][INT: INT-05][INT: INT-06]

### Boundary

- Not legal causation.
- Not claim approval guidance.
- Not a settlement promise.

### Draft Notes

- Use one paragraph for "what happened" and another for "what can be proven."
- Keep "dispute-ready" before "claim-ready" if both appear.

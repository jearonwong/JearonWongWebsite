# Chapter 09
## Coverage Boundaries, Authority, Delegation, and Exclusion Triggers

Coverage boundaries are review questions, not coverage opinions. Authority and delegation boundaries help show whether the action was within the permitted scope, but they do not by themselves decide the claim. [SRC: INS-05][SRC: INS-07][SRC: MKT-03][SRC: MKT-05][SRC: MKT-08][INT: INT-05]

### Boundary Table

| Action | Tool permission | Business authority | Confirmation required | Coverage risk |
| --- | --- | --- | --- | --- |
| Drafts a message | Allowed by tool | Maybe allowed | Low | May be low unless content causes harm |
| Submits a payment | Allowed by tool | Needs explicit scope | High | Higher if outside delegated authority |
| Changes a record | Allowed by tool | Needs role-based approval | High | Boundary review may be needed |
| Escalates an exception | Allowed by tool | Needs owner review | Medium | Coverage depends on facts and terms |
| Calls a vendor tool | Allowed by tool | Depends on business scope | Medium | Dependency and exclusion review may matter |

### Draft Body

This chapter should keep three things separate: technical permission, business authority, and insurance boundary. Tool permission is not coverage authority. [SRC: TECH-01][SRC: TECH-02][SYNTHESIS: Jearon Wong]

Exclusion triggers and boundary breaches are evidence contexts. They are not denial rules in the abstract. The paper should keep the language careful and policy-neutral. [SRC: INS-05][SRC: MKT-03][SRC: MKT-05][SRC: MKT-08]

### WP1 / WP2 Bridge

- WP1 authority and confirmation boundary becomes the review of permission versus delegated scope.
- WP2 exception traceability becomes the claim boundary inquiry.
- AIO-04, AIO-05, and AIO-12 carry the chapter's analytical load. [INT: INT-01][INT: INT-04][INT: INT-05][INT: INT-06]

### Boundary

- Not a coverage opinion.
- Not a denial rule.
- Not an underwriting standard.

### Draft Notes

- Keep "tool permission is not coverage authority" visible.
- Avoid any sentence that sounds like "this action is covered" or "this action is excluded."

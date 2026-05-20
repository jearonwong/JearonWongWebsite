# WP3-R4 Source and Citation Marker QA

## Audit Scope

Reviewed source markers across the R3 master, Chapters 00-16, Appendices A-G, source summaries, and QA notes.

## Issues Found and Patched

| Issue | Location | Action |
| --- | --- | --- |
| Malformed technical source marker | `chapters/chapter-05.md` | Changed `[TECH-01]` to `[SRC: TECH-01]`. |
| WP2-origin external markers not in WP3 R1/R2/R2A marker set | `chapters/chapter-07.md` | Replaced `EVID-02/EVID-03` with `[SRC: CLAIM-01]`, `[SRC: TECH-01]`, `[SRC: TECH-04]`, and `[INT: INT-05]` as appropriate. |
| R3 report still referenced EVID markers | `reports/wp3-r3-source-use-summary.md` | Removed `EVID-02/EVID-03` from Chapter 7 source row. |

## Checks Passed

- External factual claims now use valid `SRC:` source markers from the audited R1/R2/R2A inventory or approved internal source truth.
- Old A2A URL appears only in a warning not to use it.
- Old Coalition `cyber-threat-index` appears only in a warning not to use it for R3-critical claims.
- LangGraph source hygiene remains a future citation-formatting task; no combined table-cell URL appears in draft body.
- QBE/WTW/Allianz/OpenAI-style sources are not sole support for central thesis claims.
- Insurer/broker/product sources are framed as market examples or signals.
- Technical framework docs support technical capability claims only.
- AIO, AIRM, and work-unit claims carry synthesis markers.
- Cyber aggregation is framed as analogy, not direct actuarial proof.

## R5 Citation Formatting Tasks

- Normalize source-note style.
- Add final source register formatting.
- Recheck live URLs before publication-candidate packaging.
- Preserve R2A citation hygiene corrections.


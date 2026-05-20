# WP3-R6B HTML Final Candidate QA

Scope: rendered HTML QA for the internal candidate artifact only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

HTML artifact:

- `gaic_v032_work/source_r3/wp3_r6_candidate_artifacts/out/AIIRWP-2026-v0.1-R6-CANDIDATE.html`

Proof output:

- `gaic_v032_work/source_r3/wp3_r6b_final_candidate_qa/proof/html/`

## Browser Checks

Chrome DevTools Protocol was used against the local `file://` HTML artifact. The proof run captured viewport screenshots and checked body-level overflow, canonical/JSON-LD absence, source-marker counts, synthesis-marker counts, table counts, required section presence, and console issues.

| Viewport / proof | Target | Result |
| --- | --- | --- |
| `html-mobile-375-top.png` | Mobile cover/top | PASS |
| `html-mobile-375-table-sample.png` | Chapter 0 insurance basics table | PASS |
| `html-mobile-390-aio-sample.png` | Chapter 8 AIO table | PASS |
| `html-tablet-768-top.png` | Tablet cover/top | PASS |
| `html-desktop-1440-top.png` | Desktop cover/top | PASS |
| `html-desktop-1440-source-section.png` | Source/citation section | PASS |

## Rendered Behavior

| Check | Result | Notes |
| --- | --- | --- |
| No body-level horizontal overflow | PASS | 375, 390, 768, and 1440 checks show `bodyOverflow: false`. Tables use internal horizontal scroll where needed. |
| Title/subtitle render correctly | PASS | Cover and document title match AIIRWP identity. |
| Candidate ID/status visible | PASS | `AIIRWP-2026-v0.1-R6-CANDIDATE` and internal candidate status are visible. |
| Boundary note visible | PASS | Cover notice and frontmatter boundary language are visible. |
| Chapters 00-16 present | PASS | Required chapter anchors found. |
| Appendices A-G present | PASS | Required appendix anchors found. |
| AIO-01 through AIO-14 present | PASS | Chapter 8 and appendix content preserve AIO labels. |
| AIRM L0-L5 present | PASS | Chapter 15 and Appendix F preserve AIRM labels. |
| Source/citation section readable | PASS | Source Register and Citation Notes section renders and is screenshot-proofed. |
| Tables readable | PASS | High-comparison tables remain matrix-like; mobile behavior uses table scroll, not body overflow. |
| Source markers visible | PASS | 239 `[SRC:]`, 109 `[INT:]`, and 24 synthesis markers appear in rendered HTML. |
| Synthesis markers visible | PASS | `[SYNTHESIS: Jearon Wong]` markers remain visible. |
| Public canonical | PASS | No canonical link is embedded. |
| Public JSON-LD | PASS | No JSON-LD is embedded. |
| Console errors | PASS | No CDP console issues recorded. |

## R6B HTML Repairs

- Repaired Appendix F AIRM readiness matrix rendering from low-comparison registry cards to a high-comparison rubric matrix.
- Removed the literal legacy A2A URL string from rendered source-note hygiene text while preserving the instruction to use current A2A documentation.
- Shortened print footer copyright text in the HTML shell to prevent PDF footer clipping.

HTML QA result: PASS.

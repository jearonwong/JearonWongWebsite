# Phase 1D-11 Semantic Table Type System

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / ACTIVE IN RENDERER

## Table Types

| Type | CSS Class | Default Policy |
|---|---|---|
| matrix_table | `.table-matrix` | Standard fixed table with full width and body-scale text. |
| rubric_table | `.table-rubric` or `.rubric-card-set` | Score/evidence tables use 8/24/68 column policy or card reflow when evidence text is long. |
| scorecard_table | `.table-scorecard` | Compact operational scorecard treatment without implying vendor ranking. |
| source_register_table | `.table-source-register` | Source ID column compact; source/status text gets wider width. |
| mro_object_card_table | `.table-mro-card` | Object field tables use registry-like compact treatment. |
| system_profile_table | `.table-system-profile` or `.system-profile-card-set` | System/category text compact; strengths/gaps/evidence/boundary get wider treatment or profile cards. |
| governance_boundary_table | `.table-boundary` | Boundary/comparison tables preserve balanced claim/non-claim readability. |
| appendix_dense_table | `.table-appendix-dense` | Appendix-only compact technical mode. |

## Rendered Strategy Counts

| Strategy | Count |
|---|---:|
| Single semantic table | 73 |
| Semantic column split | 8 |
| Rubric card reflow | 50 |
| System profile card reflow | 30 |
| Semantic row card reflow | 25 |

## Decision

The renderer no longer treats tables as equal-width default grids. Table role determines class, column policy, and whether long evidence rows become cards.

# GAIC R0 Old Version Sweep Report

**Task:** GAIC-R0-CLEANUP-AND-RELEASE-HYGIENE  
**Date:** May 12, 2026  
**Status:** PASS

## Output Tree Sweep

After cleanup, `gaic_v032_work/source_r3/out/` contains only the sealed publication candidate output:

- `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.html`
- `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.pdf`
- `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.docx`
- `gaic_v032_work/source_r3/out/publication_candidate/phase_1d13f_generation_log.json`
- `gaic_v032_work/source_r3/out/publication_candidate/publication-candidate-manifest.json`

## Old Generated Artifact Sweep

| Check | Result |
|---|---|
| Old generated HTML/PDF/DOCX outside `publication_candidate/` under `source_r3/out/` | PASS - none remain |
| Old rendered PDF page directories outside `publication_candidate/` | PASS - none remain |
| Old contact sheets outside `publication_candidate/` under `source_r3/out/` | PASS - none remain |
| `Phase1D*`, `Publication-Draft`, `QA-Draft`, `Full-White-Paper-Draft`, `Public-White-Paper-Draft`, `Technical-Evidence-Pack` generated artifacts outside `publication_candidate/` | PASS - no generated artifact files remain |

## Public Exposure Sweep

Public site paths inspected:

- `public/`
- `src/`
- `docs/`
- `dist/` after `npm run build`

Search terms included `GACWP`, `Global AI Compliance`, `v0.3.1`, `v0.3.2`, `RCCS`, `ALCS`, `MRO`, `Missing Regulatory Objects`, `AI Agent Lifecycle Governance`, `Agentic Lifecycle Governance`, `Phase 1D`, and `Publication Candidate`.

**Result:** PASS - no GAIC white paper public-current references, stale v0.3.1 links, stale download links, sitemap/robots/metadata/OG/JSON-LD exposure, or duplicate current-download links were found in `public/`, `src/`, `docs/`, or generated `dist/`.

## Allowed Residual Mentions

Residual old-version or phase wording remains only in allowed contexts:

- sealed `publication_candidate` artifact version history and negative/boundary contexts;
- active source version history;
- historical governance reports;
- renderer scripts retained for reproducibility.

No obsolete generated public artifact remains outside `out/publication_candidate/`.

## Required Grep Context

The required old-version grep patterns still appear only in allowed contexts:

- `GACWP-2026-v0.3.1` appears in active source and sealed HTML version-history tables.
- `Phase 1D draft` appears in historical governance reports and reconstruction history.
- No matching public-current route, download link, sitemap, robots, metadata, OG, or JSON-LD exposure was found.

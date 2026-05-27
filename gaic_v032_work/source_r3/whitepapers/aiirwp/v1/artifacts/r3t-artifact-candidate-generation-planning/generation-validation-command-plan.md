# Generation Validation Command Plan

## Purpose

Plan validation command categories and stop gates for a future generation wave. R3T does not execute future generation commands.

## Command and Gate Categories

Future generation should plan or execute the following only after separate authorization:

- typecheck;
- lint;
- build;
- `git diff --check`;
- YAML parse;
- JSON parse;
- no-DOCX scan;
- active v0.2 promotion regression scan;
- forbidden-claim scan;
- boundary QA / forbidden wording scan;
- source ref continuity scan `[1]` through `[62]`;
- integrated structure scan;
- appendix presence scan;
- table ID scan;
- wide-table readiness scan;
- HTML artifact presence scan;
- PDF artifact presence scan;
- manifest/checksum presence and integrity scan;
- public route unchanged scan unless authorized;
- no public CTA/staging scan unless authorized;
- no final/sealed/release-ready scan;
- owner authorization gate.

## Stop Gates

- Stop if source refs `[1]` through `[62]` are broken.
- Stop if Chapters 1-28 or Appendix A-H are missing.
- Stop if Appendix I is included without owner authorization.
- Stop if body table IDs are duplicated, removed, or renamed.
- Stop if wide-table treatment is unresolved.
- Stop if DOCX is created.
- Stop if rejected v0.2 is promoted.
- Stop if public route changes without authorization.
- Stop if public candidate, final/sealed, release-ready, or public release status appears without authorization.

## R3T Boundary

R3T plans validation categories only. It does not execute artifact generation or artifact integrity creation.

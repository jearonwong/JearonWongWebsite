# Shared Component Change Report

## Created

- `src/data/whitepaperPublications.ts`
- `src/components/WhitePaperPublicationPage.astro`

## Updated

- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro`
- `src/pages/research/index.astro`

## Data Model

The shared publication data stores:

- title;
- subtitle;
- one-line positioning;
- abstract;
- canonical path;
- document ID;
- version;
- public status;
- release state;
- artifact role;
- page count;
- citation text;
- keywords;
- artifact URLs and hashes;
- overview and why-it-matters text;
- artifact note;
- evidence-integrity note;
- boundary notes;
- integrity rows;
- key concepts;
- related research;
- WP3 withdrawn-version note.

## Rendering Model

The shared component renders:

- breadcrumb;
- status line;
- hero copy;
- primary CTAs;
- right-side status panel;
- overview;
- concept ledger;
- artifact cards;
- citation identity;
- boundary panel;
- manifest/checksum record;
- non-goal list;
- related research.

## Boundary

The shared component does not introduce final/sealed/release-ready claims, DOCX publication, social announcement, certification, insurer acceptance, score, standard, or regulator approval.

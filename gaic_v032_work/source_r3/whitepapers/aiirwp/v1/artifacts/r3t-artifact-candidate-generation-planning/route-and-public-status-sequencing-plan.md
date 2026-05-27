# Route and Public Status Sequencing Plan

## Purpose

Plan route/public status sequence after candidate artifacts exist, without changing route.

## Current Status

- Current route remains noindex under-rewrite.
- WP3 remains withdrawn / v1.0 rewrite in progress.
- Public artifact remains none.
- Public PDF remains none.
- Public DOCX remains unauthorized.

## Sequencing Rules

Candidate artifact generation does not automatically restore public route.

Public route restoration is a separate wave after:

- artifact candidate QA;
- manifest/checksum QA;
- metadata/SEO/GEO/JSON-LD QA;
- public boundary QA;
- owner authorization.

The noindex/index change is a separate decision. It must not be bundled into generation planning or candidate artifact creation without explicit authorization.

## R3T Boundary

No route or public status change occurs in R3T.

R3T does not restore CTA, create public staging, modify sitemap, modify `llms.txt`, modify robots rules, alter entity graph, or create a release package.

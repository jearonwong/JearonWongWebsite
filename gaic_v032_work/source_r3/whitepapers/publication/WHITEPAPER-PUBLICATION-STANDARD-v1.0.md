# Whitepaper Publication Standard v1.0

**Status:** Active publication standard
**Applies to:** WP1 GAIC, WP2 AIAAWP, WP3 AIIRWP, and future Agentic Lifecycle Governance white papers
**Created by:** WP3-V1-R3AB-PUBLICATION-SYSTEM-ALIGNMENT-REPAIR-01
**Boundary:** This standard governs publication structure and artifact presentation. It does not authorize final/sealed/release-ready status, public announcement, DOCX publication, certification, legal advice, insurance advice, insurer acceptance, score, standard, or regulator approval.

## 1. Purpose

The white paper series must read as one publication system. Every public white paper page, artifact access block, HTML artifact, PDF artifact, metadata surface, manifest, checksum file, `llms.txt` entry, and entity graph entry must preserve a shared publication grammar while allowing each paper to keep its factual version, source basis, status, and boundary language.

This standard prevents:

- page-pattern drift across WP1, WP2, and WP3;
- status-language drift;
- CTA and artifact-access drift;
- manifest/checksum presentation drift;
- metadata / SEO / JSON-LD drift;
- HTML and PDF artifact identity drift;
- public-facing engineering language that belongs in governance reports rather than the reader-facing page.

## 2. Shared Page Structure

Each white paper public route must use this structure:

1. Breadcrumb.
2. Status line.
3. Title.
4. Subtitle.
5. One-line positioning statement.
6. One-paragraph abstract.
7. Primary CTAs in the order:
   - Read HTML.
   - Download PDF.
   - Cite this paper.
8. Right-side status panel with public status, version, document ID, artifact role, artifact list, and boundary.
9. Overview.
10. Why it matters.
11. Artifact access.
12. Citation and identity.
13. Evidence integrity / manifest and checksum.
14. Boundary notes.
15. Related research.
16. Version or withdrawal note when applicable.

The public page should explain the research object, artifact availability, citation identity, and boundary. It should not lead with implementation phrases such as route restored, staging complete, or deployment execution.

## 3. Status Taxonomy

Allowed public-facing status labels:

| Label | Meaning |
| --- | --- |
| `PUBLIC_RESEARCH_CANDIDATE` | Public route and artifacts are available for research-candidate review. Not final, not sealed, not release-ready, and not public announcement executed unless separately authorized. |
| `PUBLICATION_CANDIDATE` | Candidate artifact has been prepared for human release review. It may or may not have a public route. |
| `PUBLIC_EDITION` | Publicly accessible edition. This is not certification, not a regulator-approved standard, and not external adoption. |

Each page must expose these fields:

- public_status;
- version;
- document_id;
- artifact_role;
- release_state;
- boundary;
- artifacts.

## 4. Hero and Status Panel

Hero language must be concise, evidence-led, and restrained:

- one-line positioning begins with a concrete category, for example "A lifecycle evidence guide for ...";
- abstract is one paragraph;
- no hype language;
- no final, sealed, release-ready, certification, insurance, regulator, or adoption claims;
- status panel repeats the governing status and boundary without expanding into process history.

The status panel must be factual, compact, and consistent across WP1/WP2/WP3.

## 5. Artifact Access Block

Required artifact block order:

1. HTML.
2. PDF.
3. Manifest.
4. Checksum.

Required artifact note:

`HTML and PDF are available. Manifest and checksum records are provided for integrity verification. No public DOCX is authorized.`

Manifest and checksum links are integrity aids. They are not a publication seal, certification, insurance acceptance, compliance proof, or readiness proof.

## 6. Citation Block

Each page must include:

- title;
- subtitle;
- author;
- version;
- document ID;
- publication month;
- canonical URL;
- HTML URL;
- PDF URL;
- manifest URL;
- checksum URL.

The citation text must match the white paper identity in the publication registry and route metadata.

## 7. Boundary Note Pattern

Every page must state what the paper does not claim. At minimum:

- not legal advice;
- not insurance advice when the topic touches risk transfer or insurance;
- not coverage opinion when the topic touches coverage;
- not underwriting guidance when the topic touches underwriting;
- not certification;
- not proof of insurability;
- not insurer endorsement;
- not regulator-approved method;
- not procurement recommendation;
- not vendor ranking;
- not score;
- not standard;
- not final;
- not sealed;
- not release-ready.

WP-specific boundaries may add audit, assurance, compliance, legal proof, actuarial pricing, premium recommendation, or claim approval controls.

## 8. Metadata, SEO, GEO, and JSON-LD

Each route must provide:

- canonical URL;
- page title and description based on the white paper title, subtitle, and abstract;
- Open Graph and Twitter title/description/image;
- citation meta tags;
- JSON-LD `WebPage`;
- JSON-LD `TechArticle` or `Report`;
- JSON-LD breadcrumb;
- JSON-LD artifact list;
- defined term set or equivalent entity mapping when useful;
- artifact `MediaObject` encodings for HTML and PDF when available.

Metadata must preserve JearonWong.com semantic baseline:

- Protocol Architect for the Agent Era;
- Agentic Delivery;
- AI Agent Lifecycle;
- MPLP / Multi-Agent Lifecycle Protocol;
- lifecycle evidence and governance concepts.

Metadata must not frame the site as generic SaaS, blog, portfolio, insurance product, audit firm, legal adviser, certification authority, or regulator.

## 9. HTML Artifact Requirements

HTML artifacts must preserve:

- publication title block;
- status and boundary banner;
- stable headings and anchors;
- readable paragraph measure;
- table IDs and captions where present;
- source references;
- appendix identity;
- manifest/checksum or equivalent integrity reference;
- responsive table handling through horizontal overflow, semantic row cards, or split tables.

HTML artifacts should read as JearonWong.com publication assets: architectural, evidence-led, protocol-native, restrained, and registry-like. They must not look like default Markdown export, generic SaaS brochure, generic consulting PDF, or ungoverned Word export.

## 10. PDF Artifact Requirements

PDF artifacts must preserve:

- A4 page size unless owner explicitly authorizes a different format;
- cover/title identity;
- author;
- version and status;
- boundary note;
- page count recorded in registry or manifest;
- readable heading hierarchy;
- source references;
- table treatment that avoids single-letter vertical text, clipped columns, or unreadable collapsed content;
- artifact metadata when feasible;
- manifest/checksum reference when feasible.

PDF generation must not add local `file://` headers, browser dates, or accidental print URLs.

## 11. Visual Consistency Requirements

All public pages must follow the JearonWong.com VI system:

- Architectural Headquarters;
- Evidence First;
- Identity as Infrastructure;
- Restrained Authority;
- Black Box of Protocol / Evidence Ledger feel.

Use shared components or shared data when practical. Public white paper pages should not look like three unrelated products.

## 12. Registry Requirement

The public page layer should derive from a common white paper publication registry or equivalent structured data. Required registry fields:

- title;
- subtitle;
- slug/canonical path;
- version;
- version label;
- document ID;
- public status;
- release state;
- artifact role;
- artifact URLs;
- artifact hashes;
- citation text;
- boundary notes;
- page count;
- related research.

## 13. Forbidden Claims

No public page, artifact shell, manifest, checksum note, metadata surface, `llms.txt` entry, entity graph entry, or governance status may claim:

- final/sealed/release-ready status without separate owner authorization;
- public announcement without separate owner authorization;
- public DOCX authorization;
- legal advice;
- insurance advice;
- underwriting guidance;
- coverage opinion;
- actuarial pricing guidance;
- premium recommendation;
- claim approval guidance;
- legal liability determination;
- certification;
- proof of insurability;
- insurer endorsement;
- insurer acceptance;
- coverage-ready status;
- underwriting-ready status;
- claim-ready status;
- regulator-approved method;
- procurement recommendation;
- vendor ranking;
- score;
- standard;
- readiness certification;
- insurer-adopted method;
- regulator approval.

## 14. R3AB Implementation Baseline

R3AB creates the first shared implementation baseline:

- shared white paper publication data in `src/data/whitepaperPublications.ts`;
- shared publication page renderer in `src/components/WhitePaperPublicationPage.astro`;
- WP1/WP2/WP3 public route wrappers using the shared renderer;
- research index cards generated from the shared publication data;
- WP3 public-facing status language normalized from route-restoration process language to public research candidate language;
- WP3 public HTML/PDF/manifest/checksum refreshed after artifact shell language repair.

R3AB does not authorize final/sealed/release-ready status, public announcement, source Markdown publication, or DOCX.

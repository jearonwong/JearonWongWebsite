# Candidate Source Master Plan

## Purpose

Define how a future controlled publication-candidate Markdown source should be prepared if separately authorized later.

## Source Basis

The source basis is the R3P integrated internal draft:

- `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/integration/r3p-full-draft-integration-draft/AIIRWP-v1.0-R3P-full-draft-internal-integrated.md`

## Why a Controlled Candidate Source Should Exist

A controlled candidate source should exist before HTML, PDF, manifest, or checksum generation because it gives later artifact work a single fixed source target. It separates internal integration history from artifact-generation inputs, makes QA repeatable, and gives preservation scans a stable file to inspect.

The controlled candidate source should function as:

- stable artifact-generation source;
- fixed QA target;
- boundary/status-controlled snapshot;
- source/citation/table preservation target.

## Why R3P Should Not Be Mutated Directly

The R3P integrated draft is the accepted internal integrated draft. It should remain intact as an internal source-of-record for integration. Mutating it directly during artifact preparation would blur the line between internal integration history and publication-candidate source handling.

A later controlled candidate source can be prepared only after explicit authorization and QA gates. That future source should derive from R3P without overwriting, renaming, or editing R3P in place.

## Candidate Source Status

The candidate source is not a public artifact by default. It is not final, sealed, release-ready, public candidate status, or public release.

Candidate source creation remains blocked in R3V.

R3V creates this plan only. It does not create, copy, transform, rename, or fork a candidate source file.

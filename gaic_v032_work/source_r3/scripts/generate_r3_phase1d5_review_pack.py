#!/usr/bin/env python3
"""
Generate the Phase 1D-5 full-text editorial review pack.

This script is deliberately non-mutating for publication content: it reads the
Phase 1D-4 full white paper Markdown/PDF/log and current source files, then
creates review reports that enable human line-by-line review. It does not
rewrite the white paper and does not regenerate DOCX/PDF artifacts.
"""

from __future__ import annotations

import json
import re
import shutil
import subprocess
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

import generate_r3_phase1d4_full_whitepaper as phase1d4


ROOT = Path(__file__).resolve().parents[1]
REPORTS = ROOT / "reports"
OUT = ROOT / "out" / "phase_1d4" / "full_whitepaper"
FULL_MD = OUT / "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-Full-White-Paper-Draft.md"
FULL_PDF = OUT / "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-Full-White-Paper-Draft.pdf"
LOG_PATH = OUT / "phase_1d4_full_whitepaper_generation_log.json"

LINE_NUMBERED = REPORTS / "phase-1d5-line-numbered-full-whitepaper.md"
SECTION_INDEX = REPORTS / "phase-1d5-section-review-index.md"
CONTENT_DIFF = REPORTS / "phase-1d5-content-preservation-diff.md"
TABLE_INTEGRITY = REPORTS / "phase-1d5-table-split-integrity-report.md"
FIGURE_MAP = REPORTS / "phase-1d5-figure-text-integration-map.md"
CITATION_MAP = REPORTS / "phase-1d5-citation-placement-map.md"
CHECKLIST = REPORTS / "phase-1d5-editorial-review-checklist.md"

SOURCE_MASTER = ROOT / "GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md"
KNOWN_ISSUES = REPORTS / "known-issues.md"
RECON_NOTES = REPORTS / "reconstruction-notes.md"

STATUS = "PHASE 1D-5 FULL-TEXT REVIEW PACK GENERATED / HUMAN EDITORIAL REVIEW REQUIRED"
DATE_LABEL = "May 10, 2026"


@dataclass
class SourceChunk:
    rel: str
    start: int
    end: int
    lines: list[str]
    pdf_start: int | None
    pdf_end: int | None


def md_escape(value: object) -> str:
    text = "" if value is None else str(value)
    return text.replace("\n", " ").replace("|", "\\|").strip()


def normalize(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def word_count(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text))


def is_table_start(lines: list[str], i: int) -> bool:
    if i + 1 >= len(lines):
        return False
    first = lines[i].strip()
    second = lines[i + 1].strip()
    return first.startswith("|") and first.endswith("|") and bool(re.match(r"^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$", second))


def count_tables(lines: list[str]) -> int:
    return sum(1 for i in range(len(lines)) if is_table_start(lines, i))


def count_figures(lines: list[str]) -> int:
    text = "\n".join(lines)
    return len(set(re.findall(r"\bFigure\s+(F-\d{2})\b|\b(Figure\s+2:)", text)))


def figure_ids(lines: list[str]) -> set[str]:
    text = "\n".join(lines)
    ids = set(re.findall(r"\bFigure\s+(F-\d{2})\b", text))
    if "Figure 2:" in text:
        ids.add("F-02")
    return ids


def heading_lines(lines: list[str]) -> list[str]:
    return [line for line in lines if re.match(r"^#{1,6}\s+", line)]


def table_ids(lines: list[str]) -> set[str]:
    return set(re.findall(r"\bT-[A-Z0-9]+(?:-[0-9A-Z]+)*\b", "\n".join(lines)))


def sanitize_source_file(rel: str) -> list[str]:
    path = ROOT / rel
    sanitized: list[str] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        value = phase1d4.sanitize_publication_line(line, rel)
        if value is not None:
            sanitized.append(value)
    text = "\n".join(sanitized).strip()
    return text.splitlines() if text else []


def build_chunks(full_lines: list[str], pdf_pages: list[str], page_count: int) -> list[SourceChunk]:
    chunks: list[SourceChunk] = []
    cursor = 1
    starts: list[int | None] = []
    source_lines_by_rel: dict[str, list[str]] = {}
    search_from_page = 1
    for rel in phase1d4.SOURCE_FILES:
        lines = sanitize_source_file(rel)
        source_lines_by_rel[rel] = lines
        heading = next((line for line in lines if re.match(r"^#{1,3}\s+", line)), None)
        key = normalize(re.sub(r"^#+\s*", "", heading or ""))
        page = find_page_for_key(key, pdf_pages, min_page=search_from_page) if key else None
        if page is None:
            page = max(1, min(page_count, round((cursor / max(1, len(full_lines))) * page_count)))
        search_from_page = max(search_from_page, page)
        starts.append(page)
        end = cursor + len(lines) - 1
        chunks.append(SourceChunk(rel=rel, start=cursor, end=end, lines=lines, pdf_start=page, pdf_end=None))
        cursor = end + 4

    for idx, chunk in enumerate(chunks):
        next_page = starts[idx + 1] if idx + 1 < len(starts) else page_count + 1
        if chunk.pdf_start is None:
            chunk.pdf_end = None
        else:
            chunk.pdf_end = max(chunk.pdf_start, (next_page or chunk.pdf_start + 1) - 1)
    return chunks


def run_pdftotext() -> list[str]:
    if not FULL_PDF.exists() or not shutil.which("pdftotext"):
        return []
    result = subprocess.run(
        ["pdftotext", "-layout", str(FULL_PDF), "-"],
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if result.returncode != 0:
        return []
    pages = result.stdout.split("\f")
    return [page for page in pages if page.strip()]


def pdf_page_count_from_info() -> int:
    if not FULL_PDF.exists() or not shutil.which("pdfinfo"):
        return 0
    result = subprocess.run(["pdfinfo", str(FULL_PDF)], check=False, stdout=subprocess.PIPE, text=True)
    match = re.search(r"^Pages:\s+(\d+)", result.stdout, re.MULTILINE)
    return int(match.group(1)) if match else 0


def find_page_for_key(key: str, pages: list[str], min_page: int = 1) -> int | None:
    if not key:
        return None
    words = key.split()
    variants = [key]
    if len(words) > 5:
        variants.append(" ".join(words[:6]))
        variants.append(" ".join(words[-6:]))
    normalized_pages = [normalize(page) for page in pages]
    for variant in variants:
        if len(variant) < 8:
            continue
        for idx, page in enumerate(normalized_pages, 1):
            if idx < min_page:
                continue
            if variant in page:
                return idx
    return None


def pdf_range(chunk: SourceChunk) -> str:
    if chunk.pdf_start is None or chunk.pdf_end is None:
        return "unmapped"
    if chunk.pdf_start == chunk.pdf_end:
        return f"p. {chunk.pdf_start} (approx.)"
    return f"pp. {chunk.pdf_start}-{chunk.pdf_end} (approx.)"


def line_range(chunk: SourceChunk) -> str:
    return f"L{chunk.start:05d}-L{chunk.end:05d}"


def chunk_map(chunks: list[SourceChunk]) -> dict[str, SourceChunk]:
    return {chunk.rel: chunk for chunk in chunks}


def write_line_numbered(full_lines: list[str]) -> None:
    with LINE_NUMBERED.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Line-Numbered Full White Paper\n\n")
        f.write("**Task ID:** GACWP-2026-P1D5-FULL-TEXT-REVIEW-PACK  \n")
        f.write("**Phase:** 1D-5  \n")
        f.write(f"**Date:** {DATE_LABEL}  \n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("## Source\n\n")
        f.write(f"- Source Markdown: `{FULL_MD.relative_to(ROOT)}`\n")
        f.write(f"- Total lines: {len(full_lines)}\n")
        f.write("- Line markers are review scaffolding only; the original Markdown content appears after the separator on each line.\n\n")
        f.write("## Line-Numbered Text\n\n")
        f.write("````````markdown\n")
        for idx, line in enumerate(full_lines, 1):
            f.write(f"L{idx:05d} | {line}\n")
        f.write("````````\n")


def wave_sources() -> list[tuple[str, list[str], str]]:
    return [
        ("Wave 1", ["sections/00-front-matter.md"], "Front matter + Executive Summary"),
        ("Wave 2", [f"sections/{i:02d}-" for i in range(1, 6)], "Chapters 1-5"),
        ("Wave 3", ["sections/06-", "appendices/appendix-a-placeholder.md"], "Chapter 6 + Appendix A"),
        ("Wave 4", ["sections/07-", "sections/08-", "sections/09-", "appendices/appendix-b-placeholder.md", "appendices/appendix-e-placeholder.md", "appendices/appendix-f-placeholder.md"], "Chapters 7-9 + Appendices B/E/F"),
        ("Wave 5", ["sections/10-", "sections/11-", "sections/12-", "sections/13-", "appendices/appendix-d-placeholder.md", "appendices/appendix-g-placeholder.md"], "Chapters 10-13 + Appendices D/G"),
        ("Wave 6", ["sections/14-", "sections/15-", "sections/16-"], "Chapters 14-16"),
        ("Wave 7", ["sections/17-", "sections/18-", "appendices/appendix-h-placeholder.md", "appendices/appendix-i-placeholder.md", "appendices/appendix-j-placeholder.md", "appendices/appendix-k-placeholder.md"], "Chapters 17-18 + Appendices H-K"),
    ]


def rel_matches(rel: str, patterns: Iterable[str]) -> bool:
    return any(rel == pattern or rel.startswith(pattern) for pattern in patterns)


def review_priority(rel: str) -> str:
    if rel == "sections/00-front-matter.md":
        return "Blocker-priority: publication status, disclosure, executive summary"
    if rel.startswith("sections/12-") or rel.startswith("sections/13-") or rel.endswith("appendix-g-placeholder.md"):
        return "Blocker-priority: product/protocol claims, Appendix G non-ranking"
    if rel.startswith("sections/07-") or rel.startswith("sections/08-") or rel.startswith("sections/09-") or rel.endswith("appendix-e-placeholder.md") or rel.endswith("appendix-f-placeholder.md"):
        return "Major: scoring and rubric consistency"
    if rel.endswith("appendix-i-placeholder.md") or rel.endswith("appendix-j-placeholder.md") or rel.endswith("appendix-k-placeholder.md"):
        return "Major: governance/status consistency"
    return "Normal editorial review"


def write_section_index(chunks: list[SourceChunk], page_count: int, full_lines: list[str]) -> None:
    rows: list[list[object]] = []
    for wave, patterns, label in wave_sources():
        for chunk in chunks:
            if rel_matches(chunk.rel, patterns):
                rows.append([
                    wave,
                    f"{label}: `{chunk.rel}`",
                    line_range(chunk),
                    pdf_range(chunk),
                    word_count("\n".join(chunk.lines)),
                    count_tables(chunk.lines),
                    len(figure_ids(chunk.lines)),
                    review_priority(chunk.rel),
                ])
    rows.append([
        "Wave 8",
        "Full-document cross-cutting review",
        f"L00001-L{len(full_lines):05d}",
        f"pp. 1-{page_count or 'unmapped'} (approx.)",
        word_count("\n".join(full_lines)),
        count_tables(full_lines),
        len(figure_ids(full_lines)),
        "Blocker-priority: duplication, terminology drift, citation/source proximity, layout continuity",
    ])

    with SECTION_INDEX.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Section Review Index\n\n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("PDF page ranges are extraction-derived approximations from `pdftotext` and must be reviewer-confirmed against the rendered PDF.\n\n")
        f.write("| Review Wave | Source Section | Generated Markdown Line Range | PDF Page Range | Word Count | Table Count | Figure Count | Review Priority |\n")
        f.write("|---|---|---:|---|---:|---:|---:|---|\n")
        for row in rows:
            f.write("| " + " | ".join(md_escape(v) for v in row) + " |\n")


def write_content_diff(chunks: list[SourceChunk]) -> None:
    with CONTENT_DIFF.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Content Preservation Diff\n\n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("This is an automated preservation index for human review. It compares each current source file against the matching sanitized chunk used in the Phase 1D-4 assembled Markdown. It does not replace line-by-line editorial review.\n\n")
        f.write("| Source File | Source Word Count | Generated Word Count | Headings Preserved | Tables Preserved | Figure References Preserved | Content Loss Risk | Notes |\n")
        f.write("|---|---:|---:|---|---|---|---|---|\n")
        for chunk in chunks:
            raw_lines = (ROOT / chunk.rel).read_text(encoding="utf-8").splitlines()
            raw_words = word_count("\n".join(raw_lines))
            generated_words = word_count("\n".join(chunk.lines))
            raw_headings = [re.sub(r"\s+", " ", h.strip()) for h in heading_lines(raw_lines)]
            gen_headings = [re.sub(r"\s+", " ", h.strip()) for h in heading_lines(chunk.lines)]
            missing_headings = [h for h in raw_headings if h not in gen_headings]
            raw_tables = count_tables(raw_lines)
            gen_tables = count_tables(chunk.lines)
            raw_figures = figure_ids(raw_lines)
            gen_figures = figure_ids(chunk.lines)
            missing_figures = sorted(raw_figures - gen_figures)
            if chunk.rel == "sections/00-front-matter.md":
                risk = "LOW/MEDIUM"
                notes = "Publication-status residue is intentionally sanitized in generated Markdown; substantive front matter retained for review."
            elif missing_headings or raw_tables != gen_tables or missing_figures:
                risk = "REVIEW"
                notes = f"Check missing headings={len(missing_headings)}, table delta={raw_tables - gen_tables}, missing figures={','.join(missing_figures) or 'none'}."
            else:
                risk = "LOW"
                notes = "Automated counts align; human semantic review still required."
            f.write("| " + " | ".join(md_escape(v) for v in [
                f"`{chunk.rel}`",
                raw_words,
                generated_words,
                "YES" if not missing_headings else f"REVIEW ({len(missing_headings)} missing after sanitation)",
                "YES" if raw_tables == gen_tables else f"REVIEW ({raw_tables}->{gen_tables})",
                "YES" if not missing_figures else f"REVIEW ({', '.join(missing_figures)})",
                risk,
                notes,
            ]) + " |\n")


def write_table_integrity(log: dict) -> None:
    split_tables = log.get("split_tables", [])
    with TABLE_INTEGRITY.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Table Split Integrity Report\n\n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("This report lists every table that Phase 1D-4 marked as semantically split or high-risk. Row/column preservation is based on the Phase 1D-4 generation log and must be spot-checked visually during editorial review.\n\n")
        f.write(f"- Split/high-risk table records reviewed: {len(split_tables)}\n")
        preserved = sum(1 for t in split_tables if t.get("content_preserved"))
        f.write(f"- Records marked content-preserved by generator: {preserved}\n\n")
        f.write("| Original Table ID | Source File | Original Rows | Original Columns | Split Table IDs / Headings | Row Preservation Result | Column Preservation Result | Semantic Risk | Reviewer Note |\n")
        f.write("|---|---|---:|---:|---|---|---|---|---|\n")
        for table in split_tables:
            table_id = table.get("table_id") or "unlabeled"
            rendered = int(table.get("rendered_tables") or 1)
            headings = "; ".join(f"{table_id} continuation {i} of {rendered}" for i in range(1, rendered + 1))
            cols = int(table.get("original_cols") or 0)
            if rendered > 1:
                col_result = f"PASS/REVIEW - {cols} source columns split into {rendered} continuation groups with anchor columns repeated where needed"
                risk = "MEDIUM"
            else:
                col_result = "PASS/REVIEW - high-risk readability flag; no column split recorded"
                risk = "LOW/MEDIUM"
            f.write("| " + " | ".join(md_escape(v) for v in [
                table_id,
                f"`{table.get('source_file')}`",
                table.get("original_rows"),
                cols,
                headings,
                "PASS" if table.get("content_preserved") else "REVIEW",
                col_result,
                risk,
                "Reviewer should compare original table semantics against continuation captions and repeated key columns.",
            ]) + " |\n")


def find_line_for_figure(figure_id: str, title: str, full_lines: list[str], chunk: SourceChunk | None = None) -> int | None:
    patterns = [fr"\bFigure\s+{re.escape(figure_id)}\b"]
    if figure_id == "F-02":
        patterns.append(r"\bFigure\s+2:")

    search_start = chunk.start if chunk else 1
    search_end = chunk.end if chunk else len(full_lines)
    scoped = list(enumerate(full_lines[search_start - 1:search_end], search_start))

    # Prefer actual figure markers inside the source chunk over front-matter
    # list-of-figures entries. Bold source markers and caption/interpretation
    # lines are better anchors than bullet list rows.
    for pattern in patterns:
        regex = re.compile(pattern, re.IGNORECASE)
        for idx, line in scoped:
            stripped = line.strip()
            if regex.search(line) and not stripped.startswith("- Figure") and "List of Figures" not in stripped:
                return idx
    if title:
        title_key = normalize(title)
        for idx, line in scoped:
            stripped = line.strip()
            if title_key and title_key in normalize(line) and not stripped.startswith("- Figure"):
                return idx
    return None


def nearest_nonempty(lines: list[str], start: int, step: int, limit: int = 10) -> tuple[int, str] | None:
    idx = start
    hops = 0
    while 1 <= idx <= len(lines) and hops < limit:
        value = lines[idx - 1].strip()
        if value:
            return idx, value
        idx += step
        hops += 1
    return None


def page_for_line(line_no: int, chunks: list[SourceChunk], page_count: int) -> int | None:
    for chunk in chunks:
        if chunk.start <= line_no <= chunk.end and chunk.pdf_start is not None and chunk.pdf_end is not None:
            span_lines = max(1, chunk.end - chunk.start + 1)
            span_pages = max(1, chunk.pdf_end - chunk.pdf_start + 1)
            offset = (line_no - chunk.start) / span_lines
            return min(chunk.pdf_end, max(chunk.pdf_start, chunk.pdf_start + round(offset * (span_pages - 1))))
    if page_count:
        return max(1, min(page_count, round(line_no / 8869 * page_count)))
    return None


def write_figure_map(log: dict, full_lines: list[str], chunks: list[SourceChunk], pdf_pages: list[str], page_count: int) -> None:
    records = log.get("figure_records", [])
    chunks_by_rel = chunk_map(chunks)
    with FIGURE_MAP.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Figure/Text Integration Map\n\n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("Figure page and isolation checks are extraction-derived and require visual confirmation in the rendered PDF.\n\n")
        f.write("| Figure | Title | Source Location | Generated Line Range | PDF Page | Lead-in Paragraph Exists? | Interpretation Paragraph Exists? | Isolated Page? | Visual QA Note |\n")
        f.write("|---|---|---|---|---|---|---|---|---|\n")
        for rec in records:
            figure_id = rec.get("figure_id", "")
            title = rec.get("title", "")
            source_file = rec.get("source_file")
            source_chunk = chunks_by_rel.get(source_file)
            line_no = find_line_for_figure(figure_id, title, full_lines, source_chunk)
            if line_no is None:
                generated_range = "unmapped"
                page = None
                lead = "REVIEW"
                interp = "REVIEW"
                isolated = "REVIEW"
            else:
                generated_range = f"L{max(1, line_no - 2):05d}-L{min(len(full_lines), line_no + 4):05d}"
                page = page_for_line(line_no, chunks, page_count)
                prev = nearest_nonempty(full_lines, line_no - 1, -1, 8)
                nxt = nearest_nonempty(full_lines, line_no + 1, 1, 12)
                lead = "YES" if prev and not prev[1].startswith("#") and not prev[1].startswith("---") else "REVIEW"
                interp = "YES" if nxt and not nxt[1].startswith("#") and not nxt[1].startswith("---") else "REVIEW"
                if page and 1 <= page <= len(pdf_pages):
                    isolated = "NO" if word_count(pdf_pages[page - 1]) >= 80 else "REVIEW"
                else:
                    isolated = "REVIEW"
            f.write("| " + " | ".join(md_escape(v) for v in [
                figure_id,
                title,
                f"`{rec.get('source_file')}`",
                generated_range,
                f"p. {page} (approx.)" if page else "unmapped",
                lead,
                interp,
                isolated,
                "No visible placeholder residue reported by Phase 1D-4; reviewer should confirm panel text and surrounding paragraph flow.",
            ]) + " |\n")


def parse_claim_register() -> list[dict[str, str]]:
    path = ROOT / "inventories" / "claim-evidence-register.md"
    claims: list[dict[str, str]] = []
    headers: list[str] = []
    in_table = False
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("| Claim ID |"):
            headers = [cell.strip() for cell in line.strip().strip("|").split("|")]
            in_table = True
            continue
        if in_table and re.match(r"^\|\s*-", line):
            continue
        if in_table:
            if not line.startswith("|"):
                if claims:
                    break
                continue
            cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
            if len(cells) >= len(headers):
                claims.append(dict(zip(headers, cells)))
    return claims


def location_to_rels(location: str, chunks_by_rel: dict[str, SourceChunk]) -> list[str]:
    rels: list[str] = []
    for chapter in re.findall(r"Chapter\s+(\d+)", location):
        prefix = f"sections/{int(chapter):02d}-"
        rels.extend(rel for rel in chunks_by_rel if rel.startswith(prefix))
    appendix_tokens = re.findall(r"Appendix(?:es)?\s+([A-K](?:-[A-K])?(?:/[A-K])?)", location)
    for token in appendix_tokens:
        letters: list[str] = []
        if "-" in token:
            start, end = token.split("-", 1)
            letters.extend(chr(c) for c in range(ord(start), ord(end) + 1))
        elif "/" in token:
            letters.extend(token.split("/"))
        else:
            letters.append(token)
        for letter in letters:
            prefix = f"appendices/appendix-{letter.lower()}-"
            rels.extend(rel for rel in chunks_by_rel if rel.startswith(prefix))
    # Deduplicate while preserving order.
    seen: set[str] = set()
    ordered: list[str] = []
    for rel in rels:
        if rel not in seen:
            seen.add(rel)
            ordered.append(rel)
    return ordered


def source_ids_from_claim(value: str) -> list[str]:
    ids = []
    for part in re.split(r";|,", value):
        cleaned = part.strip().strip("`")
        if cleaned and re.match(r"^[A-Z0-9][A-Z0-9-]+$", cleaned):
            ids.append(cleaned)
    return ids


def write_citation_map(chunks: list[SourceChunk], full_lines: list[str]) -> None:
    chunks_by_rel = chunk_map(chunks)
    claims = parse_claim_register()
    with CITATION_MAP.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Citation Placement Map\n\n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("This map scopes high-risk claims to generated line ranges for human citation review. `Citation marker nearby` is an automated section-range scan and does not replace final publication citation placement review.\n\n")
        f.write("| Claim ID | Generated Line Range | Source ID | Citation Marker Nearby? | Evidence Level Visible? | Risk Note |\n")
        f.write("|---|---|---|---|---|---|\n")
        for claim in claims:
            rels = location_to_rels(claim.get("Location", ""), chunks_by_rel)
            line_ranges = []
            section_text = ""
            for rel in rels:
                chunk = chunks_by_rel[rel]
                line_ranges.append(f"{rel}: {line_range(chunk)}")
                section_text += "\n".join(full_lines[chunk.start - 1:chunk.end]) + "\n"
            ids = source_ids_from_claim(claim.get("Source ID", ""))
            if ids:
                marker = "YES" if any(source_id in section_text for source_id in ids) else "REVIEW"
            else:
                marker = "REVIEW"
            evidence = "YES" if re.search(r"\bL[1-5]\b|Evidence Basis|Evidence Level", section_text) else "REVIEW"
            if not rels:
                ranges = "unmapped - reviewer search required"
                risk = "Location did not map automatically; inspect claim register location manually."
            else:
                ranges = "; ".join(line_ranges)
                risk = claim.get("Boundary Note", "") or claim.get("Required Action", "")
            f.write("| " + " | ".join(md_escape(v) for v in [
                claim.get("Claim ID", ""),
                ranges,
                "; ".join(ids) if ids else claim.get("Source ID", ""),
                marker,
                evidence,
                risk,
            ]) + " |\n")


def write_checklist() -> None:
    items = [
        "Content completeness: every substantive chapter and appendix item is present in line-numbered text.",
        "Section continuity: each section transitions coherently into the next without stitched-ledger artifacts.",
        "Terminology consistency: AI Agent Lifecycle Governance, MRO, RCCS, ALCS, MPLP, Validation Lab, and evidence hierarchy terms remain stable.",
        "MRO/ALCS consistency: MRO and ALCS labels, numbering, and mappings match canonical dictionaries.",
        "Scoring consistency: RCCS/ALCS/evidence multipliers and composite methodology remain canonical and non-legal.",
        "Boundary/non-claim discipline: no certification, legal compliance proof, regulator approval, vendor endorsement, ranking, or procurement recommendation is introduced.",
        "Citation placement: source markers and evidence levels appear near high-risk claims or table/appendix support scopes.",
        "Table split correctness: continuation tables preserve rows, columns, headers, and semantic relationships.",
        "Figure integration: F-01 through F-11 have lead-in text, captions/panels, and interpretation text without placeholder residue.",
        "No placeholder residue: no visible `FIGURE PLACEHOLDER`, `PHASE 1A-2 TO BE GENERATED`, or raw reconstruction status language remains.",
        "Appendix G no-score/no-ranking: Appendix G remains REVALIDATED PROVISIONAL, qualitative, non-ranking, and non-score-based.",
        "JearonWong VI/readability: publication flow, typography, table density, and figure treatment read as a professional white paper.",
    ]
    with CHECKLIST.open("w", encoding="utf-8") as f:
        f.write("# Phase 1D-5 Editorial Review Checklist\n\n")
        f.write(f"**Status:** {STATUS}\n\n")
        f.write("Use this checklist during the eight review waves. Publication candidate readiness must remain blocked until all review waves pass.\n\n")
        for item in items:
            f.write(f"- [ ] {item}\n")
        f.write("\n## Wave Sign-Off\n\n")
        for idx, label in enumerate([
            "Front matter + Executive Summary",
            "Chapters 1-5",
            "Chapter 6 + Appendix A",
            "Chapters 7-9 + Appendices B/E/F",
            "Chapters 10-13 + Appendices D/G",
            "Chapters 14-16",
            "Chapters 17-18 + Appendices H-K",
            "Full-document cross-cutting review",
        ], 1):
            f.write(f"- [ ] Wave {idx}: {label}\n")


def replace_once(text: str, old: str, new: str) -> str:
    return text.replace(old, new, 1) if old in text else text


def insert_before(text: str, marker: str, block: str) -> str:
    if block.strip() in text:
        return text
    if marker in text:
        return text.replace(marker, block.rstrip() + "\n\n" + marker, 1)
    return text.rstrip() + "\n\n" + block.rstrip() + "\n"


def update_source_master() -> None:
    text = SOURCE_MASTER.read_text(encoding="utf-8")
    text = re.sub(r"\*\*Status:\*\* SOURCE MASTER — .+", f"**Status:** SOURCE MASTER — {STATUS}  ", text, count=1)
    report_links = [
        ("Phase 1D-5 Line-Numbered Full White Paper", "reports/phase-1d5-line-numbered-full-whitepaper.md"),
        ("Phase 1D-5 Section Review Index", "reports/phase-1d5-section-review-index.md"),
        ("Phase 1D-5 Content Preservation Diff", "reports/phase-1d5-content-preservation-diff.md"),
        ("Phase 1D-5 Table Split Integrity Report", "reports/phase-1d5-table-split-integrity-report.md"),
        ("Phase 1D-5 Figure/Text Integration Map", "reports/phase-1d5-figure-text-integration-map.md"),
        ("Phase 1D-5 Citation Placement Map", "reports/phase-1d5-citation-placement-map.md"),
        ("Phase 1D-5 Editorial Review Checklist", "reports/phase-1d5-editorial-review-checklist.md"),
    ]
    for label, path in report_links:
        line = f"- [{label}]({path})"
        if line not in text:
            text = text.replace("- [Reconstruction Notes](reports/reconstruction-notes.md)", line + "\n- [Reconstruction Notes](reports/reconstruction-notes.md)", 1)

    block = """Inventory and QA status after Phase 1D-5 full-text review-pack generation:

- Review pack status: Line-numbered full white paper, section review index, content preservation diff, table split integrity report, figure/text integration map, citation placement map, and editorial checklist generated.
- Human editorial review: REQUIRED; publication candidate not declared.
- Content review model: Eight-wave line-by-line / section-by-section review is now enabled from the Phase 1D-4 full white paper Markdown.
- Governance decision: Phase 1D-5 prepares review materials only; it does not rewrite source content, regenerate DOCX/PDF, or mark the artifact publication ready."""
    text = insert_before(text, "### Publication Design System", block)

    status_line = "**Phase 1D-5:** ◐ FULL-TEXT REVIEW PACK GENERATED / HUMAN EDITORIAL REVIEW REQUIRED — Line-numbered full text, section review index, content preservation diff, table split integrity report, figure/text integration map, citation placement map, and editorial checklist created; publication candidate remains blocked pending human editorial review."
    if status_line not in text:
        text = text.replace("**Phase 1D-4:** ◐ FULL WHITE PAPER DRAFT GENERATED / QA REQUIRED — Phase 1D-3 reduced-public-paper direction corrected; full substantive Chapters 1-18 and Appendices A-K retained; fresh 229-page full-content DOCX/PDF generated into `out/phase_1d4/full_whitepaper/`; wide tables split into continuous portrait subtables; figure placeholders replaced with F-01 through F-11 panels; publication candidate not declared pending final human proofing", "**Phase 1D-4:** ◐ FULL WHITE PAPER DRAFT GENERATED / QA REQUIRED — Phase 1D-3 reduced-public-paper direction corrected; full substantive Chapters 1-18 and Appendices A-K retained; fresh 229-page full-content DOCX/PDF generated into `out/phase_1d4/full_whitepaper/`; wide tables split into continuous portrait subtables; figure placeholders replaced with F-01 through F-11 panels; publication candidate not declared pending final human proofing\n" + status_line, 1)
        text = text.replace("**Phase 1D-4:** ◐ FULL WHITE PAPER DRAFT GENERATED / QA REQUIRED — Fresh full-content artifacts generated into `out/phase_1d4/full_whitepaper/`; full white paper is 229 pages; no old DOCX/PDF used as input; publication candidate remains pending final human proofing.", "**Phase 1D-4:** ◐ FULL WHITE PAPER DRAFT GENERATED / QA REQUIRED — Fresh full-content artifacts generated into `out/phase_1d4/full_whitepaper/`; full white paper is 229 pages; no old DOCX/PDF used as input; publication candidate remains pending final human proofing.\n" + status_line, 1)
    SOURCE_MASTER.write_text(text, encoding="utf-8")


def update_known_issues() -> None:
    text = KNOWN_ISSUES.read_text(encoding="utf-8")
    text = re.sub(r"\*\*Last Updated:\*\* .+", f"**Last Updated:** {DATE_LABEL} (Phase 1D-5 Full-Text Review Pack)", text, count=1)
    block = f"""## Phase 1D-5 Full-Text Editorial Review Pack

### Status: {STATUS}

Phase 1D-5 does not rewrite the white paper and does not regenerate DOCX/PDF artifacts. It prepares the Phase 1D-4 full white paper for human line-by-line editorial review.

**Review-pack artifacts:**

1. `reports/phase-1d5-line-numbered-full-whitepaper.md`
2. `reports/phase-1d5-section-review-index.md`
3. `reports/phase-1d5-content-preservation-diff.md`
4. `reports/phase-1d5-table-split-integrity-report.md`
5. `reports/phase-1d5-figure-text-integration-map.md`
6. `reports/phase-1d5-citation-placement-map.md`
7. `reports/phase-1d5-editorial-review-checklist.md`

**Remaining blockers:**

1. Full human editorial review of the 229-page Phase 1D-4 white paper is still required.
2. Table split integrity must be spot-checked against original source tables.
3. Citation placement must be checked near high-risk claims.
4. Figure/text integration must be visually confirmed in the PDF.
5. Publication candidate readiness is not declared.

**Phase 1D-5 Decision:** {STATUS}.
"""
    text = insert_before(text, "## Phase 1D-4 Full-Content White Paper Reflow", block)
    KNOWN_ISSUES.write_text(text, encoding="utf-8")


def update_reconstruction_notes() -> None:
    text = RECON_NOTES.read_text(encoding="utf-8")
    text = re.sub(r"\*\*Last Updated:\*\* .+", f"**Last Updated:** {DATE_LABEL} (Phase 1D-5)", text, count=1)
    if "15. **Phase 1D-5:** Full-text editorial review pack" not in text:
        text = text.replace("14. **Phase 1D-4:** Research-backed full-content continuous reflow (◐ FULL WHITE PAPER DRAFT GENERATED / QA REQUIRED)", "14. **Phase 1D-4:** Research-backed full-content continuous reflow (◐ FULL WHITE PAPER DRAFT GENERATED / QA REQUIRED)\n15. **Phase 1D-5:** Full-text editorial review pack (◐ HUMAN EDITORIAL REVIEW REQUIRED)", 1)
    block = f"""## Phase 1D-5 Notes ({DATE_LABEL})

**Scope:** Prepare full-text editorial review pack for human/assistant line-by-line review.

**Actions completed:**

1. Created a line-numbered full-text review file from the Phase 1D-4 assembled Markdown.
2. Created an eight-wave section review index with generated line ranges, approximate PDF page ranges, word counts, table counts, figure counts, and review priorities.
3. Created an automated content preservation diff comparing current source files against generated Phase 1D-4 Markdown chunks.
4. Created a table split integrity report covering every Phase 1D-4 split/high-risk table record.
5. Created a figure/text integration map for F-01 through F-11.
6. Created a citation placement map for the 24 high-risk claim-evidence register claims.
7. Created an editorial review checklist for human review waves.

**Boundary discipline:**

- No white paper prose was rewritten.
- No DOCX/PDF artifact was regenerated.
- No substantive content was removed, compressed, or moved.
- Publication candidate readiness was not declared.

**Phase 1D-5 Status:** ◐ FULL-TEXT REVIEW PACK GENERATED / HUMAN EDITORIAL REVIEW REQUIRED.
"""
    text = insert_before(text, "## Phase 1A-4.3 Notes", block)
    RECON_NOTES.write_text(text, encoding="utf-8")


def generate() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    if not FULL_MD.exists():
        raise FileNotFoundError(FULL_MD)
    if not LOG_PATH.exists():
        raise FileNotFoundError(LOG_PATH)
    full_lines = FULL_MD.read_text(encoding="utf-8").splitlines()
    log = json.loads(LOG_PATH.read_text(encoding="utf-8"))
    pdf_pages = run_pdftotext()
    page_count = int(log.get("pdf_page_count") or pdf_page_count_from_info() or len(pdf_pages) or 0)
    chunks = build_chunks(full_lines, pdf_pages, page_count)

    write_line_numbered(full_lines)
    write_section_index(chunks, page_count, full_lines)
    write_content_diff(chunks)
    write_table_integrity(log)
    write_figure_map(log, full_lines, chunks, pdf_pages, page_count)
    write_citation_map(chunks, full_lines)
    write_checklist()
    update_source_master()
    update_known_issues()
    update_reconstruction_notes()

    print(json.dumps({
        "status": STATUS,
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "line_count": len(full_lines),
        "pdf_page_count": page_count,
        "reports": [
            str(LINE_NUMBERED.relative_to(ROOT)),
            str(SECTION_INDEX.relative_to(ROOT)),
            str(CONTENT_DIFF.relative_to(ROOT)),
            str(TABLE_INTEGRITY.relative_to(ROOT)),
            str(FIGURE_MAP.relative_to(ROOT)),
            str(CITATION_MAP.relative_to(ROOT)),
            str(CHECKLIST.relative_to(ROOT)),
        ],
    }, indent=2))


if __name__ == "__main__":
    generate()

#!/usr/bin/env python3
"""
Phase 1D-6 final-regeneration wrapper for GAIC-2026 v0.3.2 FRC-R3.

This script creates fresh Markdown, DOCX, PDF, rendered page images, and a
generation log from the current Wave 8-clean source_r3 Markdown files only. It
does not read or patch prior DOCX/PDF artifacts.
"""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path

import generate_r3_phase1d4_full_whitepaper as full


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "out" / "phase_1d6" / "full_whitepaper"
RENDER_DIR = OUT_DIR / "rendered_pdf_pages"
ARTIFACT_STEM = "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-Full-White-Paper-Publication-QA-Draft"


FIGURE_TITLES = {
    "F-01": "AI Agent Lifecycle Governance Stack",
    "F-02": "Governance Stack / Missing Layer",
    "F-03": "MRO Topology",
    "F-04": "RCCS/ALCS Dual Scoring Model",
    "F-05": "Lifecycle Conformance Mapping Strength Heatmap",
    "F-06": "Enterprise Control Overlay for AI Agent Lifecycle Governance",
    "F-07": "Model Risk in Agentic Lifecycle",
    "F-08": "Evidence-Based Validation Pattern Flow",
    "F-09": "Enterprise Failure Scenario Chain",
    "F-10": "Companion Paper Boundary Map",
    "F-11": "Stage 0-to-7 Adoption Roadmap",
}


def run_git(args: list[str]) -> str:
    result = subprocess.run(["git", *args], cwd=ROOT.parents[1], capture_output=True, text=True, timeout=120)
    if result.returncode != 0:
        return f"ERROR: {result.stderr.strip()}"
    return result.stdout.strip()


def configure_phase_1d6() -> None:
    full.OUT_DIR = OUT_DIR
    full.RENDER_DIR = RENDER_DIR
    full.DOCX_NAME = f"{ARTIFACT_STEM}.docx"
    full.PDF_NAME = f"{ARTIFACT_STEM}.pdf"
    full.MD_NAME = f"{ARTIFACT_STEM}.md"
    full.LOG_NAME = "phase_1d6_generation_log.json"

    for figure_id, title in FIGURE_TITLES.items():
        if figure_id in full.pub.FIGURE_PANELS:
            full.pub.FIGURE_PANELS[figure_id]["title"] = title

    prior_detector = full.is_figure_marker

    def phase_1d6_figure_marker(line: str) -> bool:
        stripped = line.strip()
        if stripped.startswith("-"):
            return False
        if re.match(r"^\*\*Figure F-\d{2}\b", stripped):
            return True
        if re.match(r"^Figure F-\d{2}\b", stripped):
            return True
        return prior_detector(stripped)

    full.is_figure_marker = phase_1d6_figure_marker


def clean_output_dir() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for path in [
        OUT_DIR / f"{ARTIFACT_STEM}.md",
        OUT_DIR / f"{ARTIFACT_STEM}.docx",
        OUT_DIR / f"{ARTIFACT_STEM}.pdf",
        OUT_DIR / "phase_1d6_generation_log.json",
    ]:
        if path.exists():
            path.unlink()
    if RENDER_DIR.exists():
        shutil.rmtree(RENDER_DIR)


def augment_log(log: dict) -> dict:
    log.update(
        {
            "phase": "1D-6",
            "artifact": "full_whitepaper_publication_qa_draft",
            "phase_1d6_status": "PUBLICATION QA DRAFT GENERATED / QA REQUIRED",
            "source_commit": run_git(["rev-parse", "HEAD"]),
            "origin_head": run_git(["ls-remote", "origin", "HEAD"]),
            "branch": run_git(["branch", "--show-current"]),
            "remote": run_git(["remote", "-v"]),
            "output_directory": str(OUT_DIR),
            "design_system": "design/gaic-whitepaper-vi-system.md",
            "old_docx_pdf_used_as_input": False,
            "previous_docx_pdf_artifacts_treated_as_stale": True,
            "publication_candidate_declared": False,
            "final_publication_declared": False,
            "qa_reports_required": [
                "phase-1d6-final-regeneration-report.md",
                "phase-1d6-citation-pinning-and-rendering-qa.md",
                "phase-1d6-visual-layout-qa.md",
                "phase-1d6-table-qa.md",
                "phase-1d6-figure-qa.md",
                "phase-1d6-boundary-claim-qa.md",
                "phase-1d6-appendix-g-final-proofing.md",
                "phase-1d6-content-preservation-qa.md",
            ],
        }
    )
    (OUT_DIR / "phase_1d6_generation_log.json").write_text(json.dumps(log, indent=2, ensure_ascii=False), encoding="utf-8")
    return log


def main() -> int:
    configure_phase_1d6()
    clean_output_dir()

    md_path, _assembled = full.write_assembled_markdown()
    docx_path, table_records, figure_records, source_text = full.build_docx()
    pdf_path = full.convert_docx_to_pdf(docx_path)
    rendered_pages = full.render_pdf_pages(pdf_path)
    log = full.write_log(md_path, docx_path, pdf_path, rendered_pages, table_records, figure_records, source_text)
    log = augment_log(log)

    print(
        json.dumps(
            {
                "generated_at": datetime.now().isoformat(timespec="seconds"),
                "markdown": str(md_path),
                "docx": str(docx_path),
                "pdf": str(pdf_path),
                "pages": log["pdf_page_count"],
                "tables": len(table_records),
                "split_tables": len(log["split_tables"]),
                "figures": len(figure_records),
                "rendered_pages": len(rendered_pages),
                "log": str(OUT_DIR / "phase_1d6_generation_log.json"),
                "old_docx_pdf_used_as_input": False,
                "publication_candidate_declared": False,
            },
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())

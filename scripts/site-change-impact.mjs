/* global console, process */
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base");
const requestedBase = baseIndex >= 0 ? args[baseIndex + 1] : null;
const head = process.env.GITHUB_SHA || "HEAD";
const fallbackBase = process.env.GITHUB_BEFORE_SHA && !/^0+$/.test(process.env.GITHUB_BEFORE_SHA)
  ? process.env.GITHUB_BEFORE_SHA
  : "HEAD~1";
const base = requestedBase || process.env.GITHUB_BASE_SHA || fallbackBase;

function changedFiles() {
  const useWorkingTree = !requestedBase && !process.env.GITHUB_BASE_SHA && !process.env.GITHUB_SHA;
  if (useWorkingTree) {
    const tracked = execFileSync("git", ["diff", "--name-only", "HEAD"], { encoding: "utf8" });
    const staged = execFileSync("git", ["diff", "--cached", "--name-only"], { encoding: "utf8" });
    const untracked = execFileSync("git", ["ls-files", "--others", "--exclude-standard"], { encoding: "utf8" });
    return [...new Set(`${tracked}\n${staged}\n${untracked}`.split(/\r?\n/).map((file) => file.trim()).filter(Boolean))];
  }
  try {
    return execFileSync("git", ["diff", "--name-only", `${base}...${head}`], { encoding: "utf8" })
      .split(/\r?\n/)
      .map((file) => file.trim())
      .filter(Boolean);
  } catch {
    return execFileSync("git", ["diff", "--name-only", "HEAD~1", "HEAD"], { encoding: "utf8" })
      .split(/\r?\n/)
      .map((file) => file.trim())
      .filter(Boolean);
  }
}

const rules = [
  { id: "publication-source", prefixes: ["src/content/essays/", "governance/site-publication-control-record.json"] },
  { id: "semantic-sot", prefixes: ["src/data/site.ts", "src/data/siteGovernance.ts", "src/data/definitions.ts", "src/data/whitepaperPublications.ts", "public/llms.txt", "public/entity/"] },
  { id: "route-renderer", prefixes: ["src/pages/", "src/layouts/", "src/components/"] },
  { id: "visual-system", prefixes: ["src/styles/", "public/social/", "public/figures/"] },
  { id: "research-artifact", prefixes: ["public/research/"] },
  { id: "workflow-or-governance", prefixes: ["scripts/", ".github/", "docs/governance/", "package.json", "package-lock.json", "astro.config.mjs"] }
];

const files = changedFiles();
const impacted = rules
  .filter((rule) => files.some((file) => rule.prefixes.some((prefix) => file === prefix || file.startsWith(prefix))))
  .map((rule) => rule.id);
const requiredChecks = new Set(["publication:plan", "publication:verify", "audit:all"]);
if (impacted.includes("publication-source") || impacted.includes("semantic-sot")) requiredChecks.add("browser route matrix");
if (impacted.includes("route-renderer") || impacted.includes("visual-system")) requiredChecks.add("browser route matrix");
if (impacted.includes("research-artifact")) requiredChecks.add("artifact integrity audit");

console.log(JSON.stringify({
  schemaVersion: 1,
  generatedBy: "scripts/site-change-impact.mjs",
  base,
  head,
  changedFiles: files,
  impactedAreas: impacted,
  requiredChecks: [...requiredChecks]
}, null, 2));

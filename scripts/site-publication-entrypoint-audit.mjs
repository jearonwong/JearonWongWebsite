/* global console, process */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
const relative = (file) => path.relative(root, file).split(path.sep).join("/");

const packagePath = path.join(root, "package.json");
const vercelPath = path.join(root, "vercel.json");
const workflowPath = path.join(root, ".github", "workflows", "site-governance.yml");
const releasePath = path.join(root, "scripts", "site-publication-release.mjs");
const baselinePath = path.join(root, "docs", "governance", "ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md");

let packageData;
try {
  packageData = JSON.parse(read(packagePath));
} catch (error) {
  fail(`${relative(packagePath)} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  packageData = {};
}

if (packageData.scripts?.["publication:release"] !== "node scripts/site-publication-release.mjs") {
  fail("package.json must expose publication:release as the repository publication entrypoint");
}
if (!fs.existsSync(releasePath)) fail("scripts/site-publication-release.mjs is missing");

let vercelData;
try {
  vercelData = JSON.parse(read(vercelPath));
} catch (error) {
  fail(`${relative(vercelPath)} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  vercelData = {};
}
if (vercelData.buildCommand !== "npm run publication:release -- --vercel") {
  fail("vercel.json must invoke publication:release -- --vercel as its buildCommand");
}

const workflow = read(workflowPath);
if (!workflow.includes("npm run publication:release -- --ci")) {
  fail(`${relative(workflowPath)} must invoke publication:release -- --ci`);
}
const requiredWorkflowPaths = [
  "src/**", "public/**", "governance/**", "scripts/**", "docs/governance/**", "design/**",
  ".agents/skills/**", ".codex/skills/**", "AGENTS.md", "README.md", "package.json", "package-lock.json", "astro.config.mjs", "vercel.json"
];
for (const requiredPath of requiredWorkflowPaths) {
  if (!workflow.includes(`- "${requiredPath}"`)) fail(`${relative(workflowPath)} must trigger on ${requiredPath} changes`);
}
if (!workflow.includes("deployment_status") || !workflow.includes("npm run verify:production")) {
  fail(`${relative(workflowPath)} must retain post-deploy production verification`);
}

const baseline = read(baselinePath);
if (!baseline.includes("npm run publication:release")) {
  fail(`${relative(baselinePath)} must document the single publication entrypoint`);
}

if (failures.length > 0) {
  failures.forEach((failure) => console.error(`[FAIL] ${failure}`));
  process.exitCode = 1;
} else {
  pass("single publication entrypoint is wired to package scripts, CI, Vercel, and the governance baseline");
}

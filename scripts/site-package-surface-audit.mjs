/* global process, console */
import { spawnSync } from "node:child_process";
import fs from "node:fs";

const result = spawnSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"]
});

const failures = [];
const fail = (message) => failures.push(message);
const pass = (message) => console.log(`[PASS] ${message}`);

try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  if (packageJson.private !== true) fail("root package must remain private");
  if (JSON.stringify(packageJson.files) !== JSON.stringify(["dist/**", "public/**", "README.md"])) {
    fail("root package files allowlist must remain dist/**, public/**, README.md");
  }
} catch {
  fail("package.json is missing or invalid");
}

if (result.status !== 0) {
  fail(`npm pack --dry-run failed: ${(result.stderr || result.stdout || "unknown error").trim()}`);
} else {
  let report;
  try {
    const output = result.stdout.trim();
    const start = output.indexOf("[");
    const end = output.lastIndexOf("]");
    report = JSON.parse(output.slice(start, end + 1))[0];
  } catch {
    fail("npm pack --dry-run did not return parseable JSON");
  }

  if (report) {
    const files = report.files.map(({ path }) => path.replaceAll("\\", "/"));
    const allowed = /^(?:package\.json|README(?:\.md)?|dist\/|public\/)/i;
    const forbidden = /^(?:gaic_v032_work\/|\.agents\/|\.codex\/|\.claude\/|\.github\/|docs\/|design\/|governance\/|src\/|scripts\/|(?:\.env|.*\.local\.(?:json|js|mjs|ts)|.*\.(?:secret|pem|key))$)/i;
    const unexpected = files.filter((file) => !allowed.test(file));
    const leaked = files.filter((file) => forbidden.test(file));

    if (unexpected.length > 0) fail(`package contains paths outside the allowlist: ${unexpected.slice(0, 12).join(", ")}`);
    if (leaked.length > 0) fail(`package contains forbidden internal paths: ${leaked.slice(0, 12).join(", ")}`);
    if (files.some((file) => file === "package-lock.json")) fail("package contains package-lock.json");

    if (failures.length === 0) {
      pass(`npm pack surface checked (${files.length} files; only dist/, public/, README, and package metadata allowed)`);
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`[FAIL] ${failure}`);
  process.exitCode = 1;
}

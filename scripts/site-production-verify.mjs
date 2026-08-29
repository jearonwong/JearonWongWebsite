/* global process, console, fetch, URL */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const baseArg = args.find((arg) => arg.startsWith("--base="))?.slice("--base=".length) ?? (args.includes("--base") ? args[args.indexOf("--base") + 1] : "");
const base = (baseArg || process.env.SITE_BASE_URL || "").replace(/\/$/, "");
const allowMissingCommit = args.includes("--allow-missing-commit");
const expectedCommit = process.env.VERCEL_DEPLOYMENT_SHA || process.env.VERCEL_GIT_COMMIT_SHA || process.env.EXPECTED_DEPLOY_COMMIT || "";
const failures = [];
const warnings = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);

const criticalRoutes = [
  "/",
  "/start-here/",
  "/lifecycle/",
  "/projects/",
  "/projects/mplp/",
  "/research/",
  "/essays/",
  "/definitions/",
  "/concepts/map/",
  "/evidence/",
  "/about/",
  "/contact/"
];

function readChangedRoutes() {
  const file = path.join(root, "public", "generated", "publication-impact.json");
  if (!fs.existsSync(file)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    return (parsed.records ?? []).map((record) => record.route).filter(Boolean);
  } catch {
    warn("publication-impact.json could not be parsed; using critical routes only");
    return [];
  }
}

function absolute(route) {
  return `${base}${route.startsWith("/") ? route : `/${route}`}`;
}

async function get(route, options = {}) {
  const response = await fetch(absolute(route), { redirect: "follow", ...options });
  const body = options.method === "HEAD" ? "" : await response.text();
  return { response, body };
}

function canonicalFrom(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] ?? "";
}

function titleFrom(html) {
  return html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() ?? "";
}

async function resolveVercelCommit() {
  if (!process.env.VERCEL_API_TOKEN || !process.env.VERCEL_PROJECT_ID) return "";
  const response = await fetch(`https://api.vercel.com/v6/deployments?projectId=${encodeURIComponent(process.env.VERCEL_PROJECT_ID)}&limit=1`, {
    headers: { Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}` }
  });
  if (!response.ok) {
    warn(`Vercel deployment API returned ${response.status}`);
    return "";
  }
  const payload = await response.json();
  return payload.deployments?.[0]?.meta?.githubCommitSha || payload.deployments?.[0]?.meta?.gitCommitSha || "";
}

async function main() {
  if (!base) {
    fail("SITE_BASE_URL is required; production verification cannot use an implicit local URL");
  } else {
    try {
      new URL(`${base}/`);
    } catch {
      fail(`invalid SITE_BASE_URL: ${base}`);
    }
  }
  if (failures.length > 0) return;

  const routes = [...new Set([...criticalRoutes, ...readChangedRoutes()])];
  const checked = [];
  for (const route of routes) {
    try {
      const { response, body } = await get(route);
      const canonical = canonicalFrom(body);
      const h1 = titleFrom(body);
      if (response.status !== 200) fail(`${route} returned HTTP ${response.status}`);
      if (!canonical) fail(`${route} is missing a canonical link`);
      if (!h1) fail(`${route} is missing an H1`);
      if (!/<meta[^>]+property=["']og:image["'][^>]+content=["'][^"']+/i.test(body)) fail(`${route} is missing og:image metadata`);
      checked.push({ route, status: response.status, canonical, h1 });
    } catch (error) {
      fail(`${route} could not be fetched: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  for (const route of ["/robots.txt", "/llms.txt", "/rss.xml"]) {
    try {
      const { response } = await get(route);
      if (response.status !== 200) fail(`${route} returned HTTP ${response.status}`);
    } catch (error) {
      fail(`${route} could not be fetched: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  let sitemapRoute = "/sitemap-index.xml";
  try {
    let result = await get(sitemapRoute);
    if (result.response.status !== 200) {
      sitemapRoute = "/sitemap-0.xml";
      result = await get(sitemapRoute);
    }
    if (result.response.status !== 200) fail("no sitemap index or sitemap-0 route returned HTTP 200");
  } catch (error) {
    fail(`sitemap could not be fetched: ${error instanceof Error ? error.message : String(error)}`);
  }

  const apiCommit = await resolveVercelCommit();
  const deployedCommit = apiCommit || process.env.VERCEL_DEPLOYMENT_SHA || process.env.VERCEL_GIT_COMMIT_SHA || "";
  if (expectedCommit) {
    if (!deployedCommit) fail("expected deployment commit was provided but no deployed commit could be resolved from Vercel");
    else if (deployedCommit !== expectedCommit) fail(`deployed commit mismatch: expected ${expectedCommit}, got ${deployedCommit}`);
    else pass(`deployed commit matches ${deployedCommit}`);
  } else if (allowMissingCommit) {
    warn("deployment commit was not resolved; local or fallback verification only");
  } else {
    fail("VERCEL_GIT_COMMIT_SHA or VERCEL_DEPLOYMENT_SHA is required for production verification (use --allow-missing-commit only for local smoke checks)");
  }

  const receipt = {
    schemaVersion: 1,
    verifiedAt: new Date().toISOString(),
    baseUrl: base,
    expectedCommit: expectedCommit || null,
    deployedCommit: deployedCommit || null,
    routes,
    sitemapRoute,
    checked,
    warnings,
    failures,
    verdict: failures.length === 0 ? "PASS" : "BLOCKED"
  };
  const output = path.join(root, "dist", "production-receipt.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(receipt, null, 2)}\n`, "utf8");
  if (failures.length === 0) pass(`production surface checked (${checked.length} routes)`);
  for (const warning of warnings) console.log(`[WARN] ${warning}`);
}

await main();
if (failures.length > 0) {
  for (const failure of failures) console.error(`[FAIL] ${failure}`);
  process.exitCode = 1;
}

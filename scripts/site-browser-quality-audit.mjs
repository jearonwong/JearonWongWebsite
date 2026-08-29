/* global process, console, document */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseArg = process.argv.find((arg) => arg.startsWith("--base="))?.slice("--base=".length) ?? "";
const base = (baseArg || process.env.SITE_BASE_URL || "").replace(/\/$/, "");
const routes = ["/", "/start-here/", "/lifecycle/", "/projects/", "/projects/mplp/", "/research/", "/essays/", "/definitions/", "/concepts/map/", "/evidence/", "/about/", "/contact/"];
const failures = [];
const warnings = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);

function routeFile(route) {
  return route === "/"
    ? path.join(root, "dist", "index.html")
    : path.join(root, "dist", route.replace(/^\//, ""), "index.html");
}

function checkHtml(route, html, source) {
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) fail(`${route} should have exactly one H1 (found ${h1Count})`);
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) fail(`${route} is missing viewport metadata`);
  if (!/<link[^>]+rel=["']canonical["']/i.test(html)) fail(`${route} is missing canonical metadata`);
  if (/<div[^>]+class=["'][^"']*(?:error|stack-trace)[^"']*["']/i.test(html)) fail(`${route} contains an error-like element`);
  if (/overflow-x\s*:\s*hidden/i.test(source)) warn(`${route} contains overflow-x hidden; verify this is not masking layout overflow`);
}

async function staticAudit() {
  for (const route of routes) {
    const file = routeFile(route);
    if (!fs.existsSync(file)) {
      fail(`${route} is missing from dist`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    checkHtml(route, html, html);
  }
  pass(`static browser-quality contract checked (${routes.length} built routes)`);
}

async function dynamicAudit() {
  let playwright;
  try {
    playwright = await import("playwright");
  } catch {
    warn("Playwright is not installed; static built-route checks were used");
    return;
  }
  const browser = await playwright.chromium.launch({ headless: true });
  const screenshotDir = path.join(root, "dist", "browser-quality");
  fs.mkdirSync(screenshotDir, { recursive: true });
  for (const viewport of [{ name: "desktop", width: 1440, height: 1000 }, { name: "mobile", width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    const consoleErrors = [];
    page.on("console", (message) => { if (["error", "warning"].includes(message.type())) consoleErrors.push(`${message.type()}: ${message.text()}`); });
    for (const route of routes) {
      const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
      if (!response || response.status() !== 200) fail(`${route} ${viewport.name} returned ${response?.status() ?? "no response"}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      if (overflow) fail(`${route} ${viewport.name} has horizontal overflow`);
      await page.screenshot({ path: path.join(screenshotDir, `${viewport.name}${route === "/" ? "-home" : route.replace(/[^a-z0-9]+/gi, "-")}.png`), fullPage: true });
    }
    for (const entry of consoleErrors) warn(`${viewport.name} console ${entry}`);
    await page.close();
  }
  await browser.close();
  pass("dynamic browser checks completed for desktop and mobile");
}

if (base) await dynamicAudit();
else await staticAudit();
for (const warning of warnings) console.log(`[WARN] ${warning}`);
if (failures.length > 0) {
  for (const failure of failures) console.error(`[FAIL] ${failure}`);
  process.exitCode = 1;
}

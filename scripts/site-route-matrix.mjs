/* global console, process, URL, fetch */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base");
const baseUrl = (baseIndex >= 0 ? args[baseIndex + 1] : process.env.SITE_BASE_URL || "http://127.0.0.1:4321").replace(/\/$/, "");
const sitemapFiles = fs.existsSync(dist)
  ? fs.readdirSync(dist).filter((file) => /^sitemap(?:-\d+)?\.xml$/i.test(file)).map((file) => path.join(dist, file))
  : [];
if (sitemapFiles.length === 0) throw new Error("dist sitemap is missing; run npm run build first");

const sitemap = sitemapFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)]
  .map((match) => new URL(match[1]).pathname)
  .filter((route, index, all) => all.indexOf(route) === index);
if (routes.length === 0) throw new Error("sitemap contains no routes");

async function fetchRoute(route) {
  const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
  const html = await response.text();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] ?? "";
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  return { route, status: response.status, canonical, h1Count };
}

const failures = [];
for (let index = 0; index < routes.length; index += 8) {
  const batch = await Promise.all(routes.slice(index, index + 8).map(async (route) => {
    try { return await fetchRoute(route); }
    catch (error) { return { route, error: error instanceof Error ? error.message : String(error) }; }
  }));
  for (const result of batch) {
    if (result.error) failures.push(`${result.route}: ${result.error}`);
    else if (result.status !== 200) failures.push(`${result.route}: expected 200, received ${result.status}`);
    else if (result.h1Count !== 1) failures.push(`${result.route}: expected one H1, received ${result.h1Count}`);
    else if (!result.canonical.endsWith(result.route)) failures.push(`${result.route}: canonical does not resolve to the requested route`);
  }
}

if (failures.length > 0) {
  console.error("Route matrix failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`[PASS] route matrix checked ${routes.length} sitemap routes at ${baseUrl}`);
}

/* global process, console */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const essaysDir = path.join(root, "src", "content", "essays");
const llmsFile = path.join(root, "public", "llms.txt");
const taxonomyFile = path.join(root, "src", "data", "taxonomy.ts");
const failures = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const exists = (file) => fs.existsSync(file);
const read = (file) => fs.readFileSync(file, "utf8");

function parseFrontmatter(source) {
  const block = source.match(/^---\n([\s\S]*?)\n---/m)?.[1] ?? "";
  const scalar = (key) => block.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim().replace(/^['"]|['"]$/g, "") ?? "";
  const list = (key) => {
    const match = block.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s+[^\\n]+\\n?)+)`, "m"));
    return match ? [...match[1].matchAll(/^\s+-\s+(.+)$/gm)].map((entry) => entry[1].trim().replace(/^['"]|['"]$/g, "")) : [];
  };
  return {
    status: scalar("status") || "published",
    primaryAudience: scalar("primaryAudience"),
    secondaryAudiences: list("secondaryAudiences"),
    legacyAudiences: list("audiences"),
    tags: list("tags"),
    series: scalar("series"),
    seriesOrder: Number(scalar("seriesOrder") || 0),
    flagship: scalar("flagship") === "true"
  };
}

function readControlledTaxonomy() {
  if (!exists(taxonomyFile)) return { tags: new Set(), routes: new Map() };
  const source = read(taxonomyFile);
  const taxonomyBlock = source.match(/export const controlledTaxonomy[\s\S]*?\n\} as const;/)?.[0] ?? "";
  const tags = new Set([...taxonomyBlock.matchAll(/"([^"\n]+)"/g)].map((match) => match[1]));
  const routeBlock = source.match(/export const taxonomyRouteByTag[\s\S]*?\n\};/)?.[0] ?? "";
  const routes = new Map();
  for (const match of routeBlock.matchAll(/^\s*(?:"([^"]+)"|([A-Za-z][A-Za-z ]*)):\s*"([^"]+)"/gm)) {
    routes.set(match[1] ?? match[2], match[3]);
  }
  return { tags, routes };
}

function htmlFiles(directory) {
  const files = [];
  if (!exists(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...htmlFiles(file));
    else if (entry.name === "index.html") files.push(file);
  }
  return files;
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&#34;", '"')
    .replaceAll("&#38;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

if (!exists(dist)) {
  fail("dist/ is missing; run npm run build first");
} else {
  const taxonomy = readControlledTaxonomy();
  const essayFiles = fs.readdirSync(essaysDir).filter((file) => file.endsWith(".md"));
  const published = essayFiles
    .map((file) => ({ file, slug: file.replace(/\.md$/, ""), data: parseFrontmatter(read(path.join(essaysDir, file))) }))
    .filter(({ data }) => data.status === "published");

  for (const { file, slug, data } of published) {
    if (data.legacyAudiences.length > 0) {
      fail(`essay uses removed audiences field; use primaryAudience + secondaryAudiences: ${file}`);
    }
    if (!data.primaryAudience) fail(`published essay missing primaryAudience: ${slug}`);
    if (new Set(data.secondaryAudiences).size !== data.secondaryAudiences.length) {
      fail(`essay secondaryAudiences contains duplicates: ${slug}`);
    }
    if (data.secondaryAudiences.includes(data.primaryAudience)) {
      fail(`essay primaryAudience is repeated in secondaryAudiences: ${slug}`);
    }
    if (data.tags.length < 3 || data.tags.length > 6) {
      fail(`published essay must have 3-6 controlled tags: ${slug} (${data.tags.length})`);
    }
    for (const tag of data.tags) {
      if (!taxonomy.tags.has(tag)) fail(`essay tag is outside controlled taxonomy: ${slug} -> ${tag}`);
      const route = taxonomy.routes.get(tag);
      if (!route) fail(`essay tag has no canonical route mapping: ${slug} -> ${tag}`);
      else if (exists(dist) && !exists(path.join(dist, route.replace(/^\//, ""), "index.html"))) {
        fail(`essay tag route is not built: ${slug} -> ${tag} (${route})`);
      }
    }

    const route = path.join(dist, "essays", slug, "index.html");
    if (!exists(route)) continue;
    const html = read(route);
    const audiences = [data.primaryAudience, ...data.secondaryAudiences];
    if (audiences.length > 0 && !html.includes("AUDIENCE")) fail(`essay audience ledger is not rendered: ${slug}`);
    for (const audience of audiences) if (!html.includes(audience)) fail(`essay audience missing from rendered ledger: ${slug} -> ${audience}`);
  }
  pass(`controlled essay audience metadata checked (${published.length} records)`);
  pass(`controlled essay taxonomy checked (${taxonomy.tags.size} tags, ${published.length} records)`);

  const homepage = path.join(dist, "index.html");
  const homepageHtml = exists(homepage) ? read(homepage) : "";
  const lifecycleSeries = published
    .filter(({ data }) => data.series === "Define The AI Agent Lifecycle" && data.seriesOrder > 0)
    .sort((left, right) => left.data.seriesOrder - right.data.seriesOrder);
  let previousPosition = -1;
  for (const { slug } of lifecycleSeries.slice(0, 4)) {
    const route = `/essays/${slug}/`;
    const position = homepageHtml.indexOf(`href="${route}"`);
    if (position < 0) fail(`homepage reading path missing lifecycle essay: ${slug}`);
    if (position >= 0 && position < previousPosition) fail(`homepage lifecycle reading path is out of seriesOrder sequence: ${slug}`);
    if (position >= 0) previousPosition = position;
  }
  if (lifecycleSeries.length > 4 && !homepageHtml.includes("/essays/")) {
    fail("homepage selected essays section must link to the full essays ledger");
  }
  pass(`homepage lifecycle reading path covers the first ${Math.min(4, lifecycleSeries.length)} published series essays in order`);

  const bridge = path.join(dist, "ai-agent-governance", "index.html");
  const governance = path.join(dist, "governance", "ai-agent-governance", "index.html");
  if (!exists(bridge) || !exists(governance)) {
    fail("AI Agent Governance bridge or canonical route is missing from build");
  } else {
    const bridgeHtml = read(bridge);
    const governanceHtml = read(governance);
    if (!/<link rel="canonical" href="https:\/\/www\.jearonwong\.com\/governance\/ai-agent-governance\/"/.test(bridgeHtml)) {
      fail("AI Agent Governance bridge must canonicalize to /governance/ai-agent-governance/");
    }
    if (!/<meta name="robots" content="noindex, follow"/.test(bridgeHtml)) {
      fail("AI Agent Governance bridge must be noindex, follow");
    }
    if (!/<link rel="canonical" href="https:\/\/www\.jearonwong\.com\/governance\/ai-agent-governance\/"/.test(governanceHtml)) {
      fail("AI Agent Governance governance route must remain self-canonical");
    }
    if (!/<meta name="robots" content="index, follow"/.test(governanceHtml)) {
      fail("AI Agent Governance governance route must remain indexable");
    }
  }
  pass("AI Agent Governance canonical hierarchy checked");

  const llms = exists(llmsFile) ? read(llmsFile) : "";
  for (const { slug } of published.filter(({ data }) => data.flagship)) {
    const route = `https://www.jearonwong.com/essays/${slug}/`;
    const lineIndex = llms.indexOf(route);
    if (lineIndex < 0) {
      fail(`flagship essay missing from llms.txt: ${slug}`);
      continue;
    }
    const nextLine = llms.slice(lineIndex).split("\n").slice(1).find((line) => line.trim().length > 0) ?? "";
    if (!/^\s{2,}\S/.test(nextLine)) fail(`flagship essay missing an indented llms.txt summary: ${slug}`);
  }
  pass("flagship llms.txt summary coverage checked");

  let descriptionCount = 0;
  let titleCount = 0;
  const metadataTitleMax = 60;
  const readMeta = (html, attribute, name) => {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `<meta\\b[^>]*${attribute}\\s*=\\s*["']${escapedName}["'][^>]*content\\s*=\\s*["']([^"']*)["'][^>]*>`,
      "i"
    );
    const reversePattern = new RegExp(
      `<meta\\b[^>]*content\\s*=\\s*["']([^"']*)["'][^>]*${attribute}\\s*=\\s*["']${escapedName}["'][^>]*>`,
      "i"
    );
    return html.match(pattern)?.[1] ?? html.match(reversePattern)?.[1] ?? "";
  };
  for (const file of htmlFiles(dist)) {
    const html = read(file);
    const noindex = /<meta name="robots" content="noindex/i.test(html);
    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    if (!noindex && titleMatch) {
      const title = decodeEntities(titleMatch[1]).trim();
      titleCount += 1;
      if (!title) fail(`indexable page has an empty title: ${path.relative(dist, file)}`);
      const titleVariants = [
        ["title", title],
        ["og:title", decodeEntities(readMeta(html, "property", "og:title")).trim()],
        ["twitter:title", decodeEntities(readMeta(html, "name", "twitter:title")).trim()]
      ];
      for (const [label, value] of titleVariants) {
        if (!value) {
          fail(`indexable page is missing ${label}: ${path.relative(dist, file)}`);
          continue;
        }
        if (/\.\.\./.test(value)) {
          fail(`indexable ${label} contains a generated truncation marker (...): ${path.relative(dist, file)}`);
        }
        if (value.length > metadataTitleMax) {
          fail(`${label} exceeds ${metadataTitleMax} characters (${value.length}): ${path.relative(dist, file)}`);
        }
      }
    }
    const match = html.match(/<meta name="description" content="([^"]*)"/);
    if (!match) continue;
    descriptionCount += 1;
    const description = decodeEntities(match[1]);
    if (description.length > 160) {
      fail(`meta description exceeds 160 characters (${description.length}): ${path.relative(dist, file)}`);
    }
  }
  pass(`rendered title, OG/Twitter title, and meta description lengths checked (${titleCount} indexable pages; ${descriptionCount} descriptions; title max ${metadataTitleMax}, descriptions max 160)`);
}

if (failures.length > 0) {
  console.error("\nEditorial audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Editorial audit passed.");
}

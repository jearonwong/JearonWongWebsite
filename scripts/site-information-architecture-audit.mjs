/* global process, console, URL */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const essaysDir = path.join(root, "src", "content", "essays");
const headerFile = path.join(root, "src", "components", "SiteHeader.astro");
const failures = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const exists = (file) => fs.existsSync(file);
const read = (file) => fs.readFileSync(file, "utf8");

function parseFrontmatter(source) {
  const block = source.match(/^---\n([\s\S]*?)\n---/m)?.[1] ?? "";
  const getScalar = (key) => block.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim().replace(/^['"]|['"]$/g, "") ?? "";
  const getArray = (key) => {
    const match = block.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s+[^\\n]+\\n?)+)`, "m"));
    if (!match) return [];
    return [...match[1].matchAll(/^\s+-\s+(.+)$/gm)].map((entry) => entry[1].trim().replace(/^['"]|['"]$/g, ""));
  };
  return {
    status: getScalar("status") || "published",
    track: getScalar("track"),
    editorialTrack: getScalar("editorialTrack"),
    contentRole: getScalar("contentRole"),
    publicationClass: getScalar("publicationClass"),
    canonicalRoute: getScalar("canonicalRoute"),
    canonicalParent: getScalar("canonicalParent"),
    primaryAudience: getScalar("primaryAudience"),
    maxClickDepth: Number(getScalar("maxClickDepth") || 0),
    nextSteps: getArray("nextSteps")
  };
}

function walk(directory, callback) {
  if (!exists(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file, callback);
    else callback(file);
  }
}

function routeForIndex(file) {
  const relative = path.relative(dist, path.dirname(file)).replaceAll(path.sep, "/");
  return relative ? `/${relative}/` : "/";
}

function normalizeLink(raw) {
  if (!raw || raw.startsWith("#") || raw.startsWith("//") || /^[a-z][a-z\d+.-]*:/i.test(raw)) return null;
  const clean = raw.split(/[?#]/, 1)[0];
  if (!clean.startsWith("/") || clean.endsWith(".xml") || clean.endsWith(".json") || clean.endsWith(".png") || clean.endsWith(".svg") || clean.endsWith(".pdf")) return null;
  if (clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

function collectAnchors(html) {
  const anchors = new Set();
  for (const match of html.matchAll(/\b(?:id|name)=["']([^"']+)["']/gi)) anchors.add(decodeHtmlEntities(match[1]));
  return anchors;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#x([\da-f]+);?/gi, (_match, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);?/g, (_match, code) => String.fromCodePoint(Number.parseInt(code, 10)));
}

function parseInternalFragment(raw, fromRoute) {
  if (!raw || raw.startsWith("//") || /^[a-z][a-z\d+.-]*:/i.test(raw)) return null;
  const hashIndex = raw.indexOf("#");
  if (hashIndex < 0) return null;
  const rawPathWithQuery = raw.slice(0, hashIndex);
  const rawPath = rawPathWithQuery.split("?", 1)[0];
  const rawFragment = raw.slice(hashIndex + 1);
  if (!rawFragment) return null;
  // Standalone publication HTML is a separate artifact surface. Its anchors
  // are verified with the publication manifest, not the route graph here.
  if (/\.(?:html|pdf|svg|png|json|xml)$/i.test(rawPath)) return null;
  let fragment;
  try {
    fragment = decodeHtmlEntities(decodeURIComponent(rawFragment));
  } catch {
    return { target: null, fragment: rawFragment };
  }
  return {
    target: rawPathWithQuery ? normalizeLink(rawPathWithQuery) : fromRoute,
    fragment
  };
}

function parseTheoryAliases() {
  const sourceFile = path.join(root, "src", "data", "site.ts");
  if (!exists(sourceFile)) return null;
  const source = read(sourceFile);
  const block = source.match(/export const theoryClusterAliases\b[^=]*=\s*\{([\s\S]*?)\};/)?.[1];
  if (block === undefined) return null;
  return [...block.matchAll(/["']([^"']+)["']\s*:\s*["']([^"']+)["']/g)].map((entry) => ({
    alias: entry[1],
    canonicalSlug: entry[2]
  }));
}

function mainContent(html) {
  return html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html;
}

function internalHrefs(html) {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function hasInternalHref(html, expectedRoute) {
  return internalHrefs(mainContent(html)).some((raw) => normalizeLink(raw) === expectedRoute);
}

function hasInternalHrefUnder(html, prefix, validRoutes) {
  return internalHrefs(mainContent(html)).some((raw) => {
    const normalized = normalizeLink(raw);
    return normalized && normalized.startsWith(prefix) && normalized !== prefix && validRoutes.has(normalized);
  });
}

if (!exists(dist)) {
  fail("dist/ is missing; run npm run build first");
} else {
  const routes = new Map();
  walk(dist, (file) => {
    if (path.basename(file) === "index.html") routes.set(routeForIndex(file), read(file));
  });
  const canonicalRoutes = new Set(
    [...routes].filter(([, html]) => !/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)).map(([route]) => route)
  );

  const anchorsByRoute = new Map([...routes].map(([route, html]) => [route, collectAnchors(html)]));

  // Fragment links are part of the semantic graph. A route can be present and
  // still fail the reader journey when its target anchor was renamed or
  // removed, so resolve internal fragments against the built HTML.
  let fragmentCount = 0;
  for (const [from, html] of routes) {
    if (!canonicalRoutes.has(from)) continue;
    for (const match of html.matchAll(/href=["']([^"']+)["']/gi)) {
      const raw = match[1];
      const fragmentLink = parseInternalFragment(raw, from);
      if (!fragmentLink) continue;
      fragmentCount += 1;
      const { target, fragment } = fragmentLink;
      if (!target || !routes.has(target)) {
        fail(`internal fragment route does not resolve: ${from} -> ${raw}`);
        continue;
      }
      if (!anchorsByRoute.get(target)?.has(fragment)) {
        fail(`internal fragment anchor does not resolve: ${from} -> ${raw}`);
      }
    }
  }
  if (fragmentCount > 0) pass(`internal fragment anchors checked (${fragmentCount} links)`);
  else pass("internal fragment anchor check skipped (no internal fragments)");

  const theoriesHtml = routes.get("/theories/");
  if (!theoriesHtml) {
    fail("theory cluster route missing: /theories/");
  } else {
    const theoryAnchors = anchorsByRoute.get("/theories/") ?? new Set();
    const theoryAliases = parseTheoryAliases();
    if (!theoryAliases) {
      fail("theoryClusterAliases registry is missing or cannot be parsed");
    } else {
      for (const { alias, canonicalSlug } of theoryAliases) {
        if (!theoryAnchors.has(alias)) fail(`theory alias anchor missing from /theories/: ${alias}`);
        if (!theoryAnchors.has(canonicalSlug)) fail(`theory alias target anchor missing from /theories/: ${alias} -> ${canonicalSlug}`);
      }
      pass(`theory alias anchors checked (${theoryAliases.length} aliases)`);
    }
  }

  const inbound = new Map([...canonicalRoutes].map((route) => [route, new Set()]));
  const graph = new Map();
  for (const [from, html] of routes) {
    if (!canonicalRoutes.has(from)) continue;
    const links = new Set();
    for (const match of html.matchAll(/href=["']([^"']+)["']/gi)) {
      const target = normalizeLink(match[1]);
      if (!target || !canonicalRoutes.has(target) || target === from) continue;
      links.add(target);
      inbound.get(target).add(from);
    }
    graph.set(from, links);
  }

  const distances = new Map([["/", 0]]);
  const queue = ["/"];
  while (queue.length > 0) {
    const current = queue.shift();
    for (const target of graph.get(current) ?? []) {
      if (!distances.has(target)) {
        distances.set(target, distances.get(current) + 1);
        queue.push(target);
      }
    }
  }

  const essayFiles = fs.readdirSync(essaysDir).filter((file) => file.endsWith(".md"));
  let publishedCount = 0;
  for (const file of essayFiles) {
    const slug = file.replace(/\.md$/, "");
    const source = read(path.join(essaysDir, file));
    const data = parseFrontmatter(source);
    if (data.status !== "published") continue;
    publishedCount += 1;
    const route = `/essays/${slug}/`;
    const required = ["contentRole", "publicationClass", "editorialTrack", "canonicalRoute", "canonicalParent", "primaryAudience"];
    for (const field of required) if (!data[field]) fail(`published essay missing IA field ${field}: ${slug}`);
    if (data.contentRole && data.contentRole !== "essay") fail(`essay contentRole must be essay: ${slug}`);
    if (data.track && data.editorialTrack && data.track !== data.editorialTrack) fail(`track/editorialTrack mismatch: ${slug}`);
    if (data.canonicalRoute && data.canonicalRoute !== route) fail(`canonicalRoute mismatch: ${slug}`);
    if (data.canonicalParent && data.canonicalParent !== "/essays/") fail(`essay canonicalParent must be /essays/: ${slug}`);
    if (!Number.isInteger(data.maxClickDepth) || data.maxClickDepth < 1) fail(`published essay missing positive maxClickDepth: ${slug}`);
    if (data.nextSteps.length < 2) fail(`published essay needs two governed nextSteps: ${slug}`);
    if (!routes.has(route)) fail(`published essay route missing: ${slug}`);
    const indexHtml = routes.get("/essays/") ?? "";
    if (!indexHtml.includes(route)) fail(`published essay missing from /essays/ index: ${slug}`);
    for (const nextStep of data.nextSteps.slice(0, 2)) {
      const normalized = normalizeLink(nextStep);
      if (!normalized || !canonicalRoutes.has(normalized)) fail(`essay nextStep does not resolve: ${slug} -> ${nextStep}`);
      if (canonicalRoutes.has(route) && !routes.get(route).includes(`href="${nextStep}"`) && !routes.get(route).includes(`href="${normalized}"`)) fail(`essay nextStep not rendered on route: ${slug} -> ${nextStep}`);
    }
    const depth = distances.get(route);
    if (depth === undefined) fail(`published essay is unreachable from home: ${slug}`);
    else if (depth > data.maxClickDepth) fail(`published essay exceeds maxClickDepth ${data.maxClickDepth}: ${slug} (${depth})`);
    const inboundCount = inbound.get(route)?.size ?? 0;
    if (inboundCount < 2) fail(`published essay needs at least two inbound routes: ${slug} (${inboundCount})`);
  }
  pass(`published essay IA contracts checked (${publishedCount} records)`);

  const homepage = routes.get("/") ?? "";
  const expectedPrimary = ["/start-here/", "/lifecycle/", "/essays/", "/research/", "/projects/", "/about/"];
  for (const route of expectedPrimary) if (!homepage.includes(`href="${route}"`)) fail(`primary navigation route missing from home: ${route}`);
  const expectedExplore = ["/concepts/", "/definitions/", "/evidence/", "/governance/", "/playbooks/", "/theories/", "/mapping/extended-ecosystem/", "/newsletter/", "/contact/", "/rss.xml"];
  for (const route of expectedExplore) if (route !== "/rss.xml" && !homepage.includes(`href="${route}"`)) fail(`Explore route missing from home: ${route}`);
  pass("primary navigation and Explore route exposure checked");

  // Keep the canonical hub journeys explicit. These checks complement the
  // route graph: a page may be reachable through global navigation while its
  // main reading surface has lost the intended next action.
  const canonicalHubContracts = [
    { route: "/start-here/", maxDepth: 1, required: ["/lifecycle/", "/projects/", "/evidence/"] },
    { route: "/lifecycle/", maxDepth: 1, required: ["/essays/", "/projects/mplp/"] },
    { route: "/essays/", maxDepth: 1, required: ["/lifecycle/"], requiredPrefixes: ["/essays/"] },
    { route: "/research/", maxDepth: 1, required: ["/evidence/", "/definitions/"], requiredPrefixes: ["/research/"] },
    { route: "/projects/", maxDepth: 1, required: ["/lifecycle/", "/projects/mplp/"], requiredPrefixes: ["/projects/"] },
    { route: "/concepts/", maxDepth: 1, required: ["/lifecycle/", "/concepts/map/", "/projects/mplp/"] },
    { route: "/definitions/", maxDepth: 1, required: ["/concepts/", "/evidence/"] },
    { route: "/evidence/", maxDepth: 1, required: ["/projects/validation-lab/"], requiredPrefixes: ["/research/"] },
    { route: "/governance/", maxDepth: 1, required: ["/playbooks/", "/research/global-ai-compliance-white-paper-2026/"] },
    { route: "/playbooks/", maxDepth: 1, required: ["/governance/", "/evidence/"] },
    { route: "/theories/", maxDepth: 1, required: ["/lifecycle/", "/essays/", "/concepts/"] },
    { route: "/mapping/extended-ecosystem/", maxDepth: 1, required: ["/playbooks/", "/concepts/map/"] }
  ];
  for (const contract of canonicalHubContracts) {
    const html = routes.get(contract.route);
    if (!html || !canonicalRoutes.has(contract.route)) {
      fail(`canonical hub route missing: ${contract.route}`);
      continue;
    }
    for (const requiredRoute of contract.required) {
      if (!hasInternalHref(html, requiredRoute)) fail(`canonical hub missing next action ${requiredRoute}: ${contract.route}`);
    }
    for (const requiredPrefix of contract.requiredPrefixes ?? []) {
      if (!hasInternalHrefUnder(html, requiredPrefix, canonicalRoutes)) fail(`canonical hub missing detail next action under ${requiredPrefix}: ${contract.route}`);
    }
    const depth = distances.get(contract.route);
    if (depth === undefined) fail(`canonical hub is unreachable from home: ${contract.route}`);
    else if (depth > contract.maxDepth) fail(`canonical hub exceeds maxClickDepth ${contract.maxDepth}: ${contract.route} (${depth})`);
  }
  pass(`canonical hub next-action and click-depth contracts checked (${canonicalHubContracts.length} hubs)`);

  const header = exists(headerFile) ? read(headerFile) : "";
  if (!header.includes("secondaryNavGroups") || !header.includes("drawerSecondaryNavGroups")) fail("desktop/mobile navigation grouping is not bound to the same registry");
  if (!header.includes("isRouteActive")) fail("navigation active-state route matching is missing");
  pass("desktop/mobile navigation parity contract checked");

  const coreRoutes = ["/start-here/", "/lifecycle/", "/essays/", "/research/", "/projects/", "/concepts/", "/definitions/", "/evidence/", "/governance/", "/playbooks/"];
  for (const route of coreRoutes) {
    const depth = distances.get(route);
    if (depth === undefined) fail(`core route is unreachable from home: ${route}`);
    else if (depth > 3) fail(`core route exceeds depth 3: ${route} (${depth})`);
  }
  pass("core route reachability and click-depth checked");

  // Detail records have different owners and next actions from their hubs.
  // Keep these contracts explicit so a new generated record cannot silently
  // ship without a canonical parent, return path, or evidence route.
  const detailContracts = [
    {
      id: "governance-record",
      prefix: "/governance/",
      parent: "/governance/",
      maxDepth: 3,
      requiredNextActions: ["/governance/", "/concepts/agentic-lifecycle-governance/"]
    },
    {
      id: "playbook-record",
      prefix: "/playbooks/",
      parent: "/playbooks/",
      maxDepth: 3,
      requiredNextActions: ["/playbooks/", "/governance/"]
    },
    {
      id: "ecosystem-mapping-record",
      prefix: "/mapping/extended-ecosystem/",
      parent: "/mapping/extended-ecosystem/",
      maxDepth: 3,
      requiredNextActions: ["/mapping/extended-ecosystem/", "/concepts/agentic-lifecycle-governance/"]
    }
  ];

  for (const contract of detailContracts) {
    const detailRoutes = [...canonicalRoutes].filter(
      (route) => route.startsWith(contract.prefix) && route !== contract.prefix
    );
    if (detailRoutes.length === 0) {
      fail(`${contract.id} has no canonical detail routes`);
      continue;
    }
    for (const route of detailRoutes) {
      const html = routes.get(route) ?? "";
      const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1];
      if (!canonical) fail(`${contract.id} missing canonical link: ${route}`);
      else {
        try {
          if (new URL(canonical).pathname.replace(/\/$/, "") !== route.replace(/\/$/, "")) {
            fail(`${contract.id} canonical mismatch: ${route} -> ${canonical}`);
          }
        } catch {
          fail(`${contract.id} canonical URL is invalid: ${route}`);
        }
      }
      if (!html.includes(`href="${contract.parent}"`)) fail(`${contract.id} missing parent return link: ${route}`);
      for (const nextAction of contract.requiredNextActions) {
        if (!html.includes(`href="${nextAction}"`)) fail(`${contract.id} missing required next action ${nextAction}: ${route}`);
      }
      const depth = distances.get(route);
      if (depth === undefined) fail(`${contract.id} is unreachable from home: ${route}`);
      else if (depth > contract.maxDepth) fail(`${contract.id} exceeds maxClickDepth ${contract.maxDepth}: ${route} (${depth})`);
      const inboundCount = inbound.get(route)?.size ?? 0;
      if (inboundCount < 1) fail(`${contract.id} has no inbound canonical route: ${route}`);
    }
    pass(`${contract.id} contract checked (${detailRoutes.length} records)`);
  }

  const orphanRoutes = [...canonicalRoutes].filter((route) => route !== "/" && (inbound.get(route)?.size ?? 0) === 0);
  if (orphanRoutes.length > 0) fail(`orphan canonical routes detected: ${orphanRoutes.join(", ")}`);
  else pass("orphan route check passed");

  console.log(`[INFO] route graph: ${canonicalRoutes.size} canonical pages, ${distances.size} reachable from home; ${routes.size - canonicalRoutes.size} noindex routes excluded`);
}

if (failures.length > 0) {
  console.error("\nInformation architecture audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Information architecture audit passed.");
}

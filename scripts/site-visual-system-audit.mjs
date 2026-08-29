/* global process, console */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const failures = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const exists = (file) => fs.existsSync(file);
const read = (file) => fs.readFileSync(file, "utf8");
const toPosixPath = (file) => file.split(path.sep).join("/");
const relativePath = (file) => toPosixPath(path.relative(root, file));
const lineNumberAt = (source, index) => source.slice(0, index).split("\n").length;
const sourceExcerpt = (source, index) => source.slice(source.lastIndexOf("\n", index) + 1, source.indexOf("\n", index) === -1 ? source.length : source.indexOf("\n", index)).trim();
const maskComments = (source) => source
  .replace(/\/\*[\s\S]*?\*\//g, (comment) => comment.replace(/[^\n]/g, " "))
  .replace(/<!--[\s\S]*?-->/g, (comment) => comment.replace(/[^\n]/g, " "));
const collectFiles = (directory, predicate = () => true) => {
  const files = [];
  if (!exists(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(file, predicate));
    else if (predicate(file)) files.push(file);
  }
  return files;
};
const collectIndexFiles = (directory) => collectFiles(directory, (file) => path.basename(file) === "index.html");
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const stripEmbeddedBlocks = (html) => html
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<!--[\s\S]*?-->/g, "");
const hasClassToken = (html, token) => {
  for (const match of html.matchAll(/\bclass\s*=\s*["']([^"']*)["']/gi)) {
    if (match[1].split(/\s+/).includes(token)) return true;
  }
  return false;
};
const hasTagWithClass = (html, tagName, token) => {
  const tagPattern = new RegExp(`<${escapeRegExp(tagName)}\\b[^>]*>`, "gi");
  for (const match of html.matchAll(tagPattern)) {
    if (hasClassToken(match[0], token)) return true;
  }
  return false;
};
const elementContentByClass = (html, token) => {
  const openingTagPattern = /<([a-z][\w:-]*)\b[^>]*>/gi;
  for (const match of html.matchAll(openingTagPattern)) {
    if (!hasClassToken(match[0], token)) continue;
    const contentStart = (match.index ?? 0) + match[0].length;
    const nestedTagPattern = new RegExp(`<\\/?${escapeRegExp(match[1])}\\b[^>]*>`, "gi");
    nestedTagPattern.lastIndex = contentStart;
    let depth = 1;
    let nestedTag;
    while ((nestedTag = nestedTagPattern.exec(html)) !== null) {
      if (/^<\//.test(nestedTag[0])) depth -= 1;
      else if (!/\/>$/.test(nestedTag[0])) depth += 1;
      if (depth === 0) return html.slice(contentStart, nestedTag.index);
    }
    return "";
  }
  return "";
};
const countTags = (html, tagName) => {
  const tagPattern = new RegExp(`<${escapeRegExp(tagName)}\\b`, "gi");
  return [...html.matchAll(tagPattern)].length;
};
const metaTags = (html) => [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag);
const attributeValue = (tag, attribute) => {
  const match = new RegExp(`\\b${escapeRegExp(attribute)}\\s*=\\s*["']([^"']*)["']`, "i").exec(tag);
  return match?.[1]?.trim() ?? "";
};
const hasRobotsDirective = (html, directive) => metaTags(html).some((tag) => {
  if (attributeValue(tag, "name").toLowerCase() !== "robots") return false;
  return attributeValue(tag, "content").toLowerCase().split(/[\s,]+/).includes(directive.toLowerCase());
});
const hasRefreshMeta = (html) => metaTags(html).some((tag) => attributeValue(tag, "http-equiv").toLowerCase() === "refresh");
const canonicalHref = (html) => {
  for (const tag of html.matchAll(/<link\b[^>]*>/gi)) {
    const rel = attributeValue(tag[0], "rel").toLowerCase().split(/\s+/);
    if (rel.includes("canonical")) return attributeValue(tag[0], "href");
  }
  return "";
};
const hasLinkTo = (html, href) => [...html.matchAll(/<a\b[^>]*>/gi)].some((match) => attributeValue(match[0], "href") === href);
const routeFromBuiltFile = (file) => `/${path.relative(dist, file).replace(/index\.html$/, "").replaceAll(path.sep, "/")}`.replace(/\/\/$/, "/");
const hudContracts = [
  {
    id: "homepage",
    marker: "homepage-ledger-banner",
    heading: "homepage-hero__heading",
    support: "homepage-hero__support",
    rail: "ledger-hero__rail"
  },
  {
    id: "registry",
    marker: "registry-page-hero",
    heading: "registry-page-hero__heading",
    support: "registry-page-hero__support",
    rail: "ledger-hero__rail",
    title: "registry-page-hero__title"
  },
  {
    id: "whitepaper",
    marker: "wp-publication-hero",
    heading: "wp-publication-hero__heading",
    support: "wp-publication-hero__support",
    rail: "release-meta-panel"
  },
  {
    id: "concept-core",
    marker: "concept-core-hero",
    heading: "concept-core-hero__heading",
    support: "concept-core-hero__support",
    rail: "concept-core-ledger"
  }
];
const legacyBHeroClassTokens = ["hero-wrapper", "alias-shell", "alias-panel"];
const findHudContract = (route, markup) => {
  if (route === "/") return hudContracts.find(({ id }) => id === "homepage");
  return hudContracts.find(({ marker }) => hasClassToken(markup, marker));
};
const checkBuiltHudContract = (route, html, label = "canonical route") => {
  const markup = stripEmbeddedBlocks(html);
  const contract = findHudContract(route, markup);
  if (!contract) {
    fail(`${label} is missing a recognized production HUD structure: ${route}`);
    return { markup, contract: null };
  }
  for (const [role, token] of [["marker", contract.marker], ["heading", contract.heading], ["support", contract.support], ["rail", contract.rail]]) {
    if (!hasClassToken(markup, token)) fail(`${label} ${route} is missing its HUD ${role} wrapper: ${token}`);
  }
  if (countTags(markup, "h1") !== 1) fail(`${label} ${route} must render exactly one H1 in the HUD`);
  const headingContent = elementContentByClass(markup, contract.heading);
  if (!headingContent || countTags(headingContent, "h1") !== 1) {
    fail(`${label} ${route} must place its unique H1 inside the HUD heading wrapper: ${contract.heading}`);
  }
  if (contract.title && !hasTagWithClass(markup, "h1", contract.title)) {
    fail(`${label} ${route} is missing the HUD title class on its H1: ${contract.title}`);
  }
  for (const token of legacyBHeroClassTokens) {
    if (hasClassToken(markup, token)) fail(`${label} ${route} still renders legacy HUD selector: ${token}`);
  }
  return { markup, contract };
};

const sourceExtensions = new Set([".astro", ".css", ".scss", ".sass", ".less", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const excludedProductionSourcePrefixes = ["src/pages/prototypes/"];
// Prototype route/component files are isolated/noindex. A/C prototype CSS scopes are exempted below;
// shared Research Ledger selectors in prototypes.css remain production-audited.
const excludedProductionSourceFiles = new Set(["src/components/PrototypeNav.astro"]);
const productionSourceFiles = ["components", "layouts", "pages", "styles"]
  .flatMap((directory) => collectFiles(path.join(root, "src", directory), (file) => sourceExtensions.has(path.extname(file))))
  .filter((file) => {
    const relative = relativePath(file);
    return !excludedProductionSourceFiles.has(relative) && !excludedProductionSourcePrefixes.some((prefix) => relative.startsWith(prefix));
  });

const styleRegions = (file, source) => {
  if ([".css", ".scss", ".sass", ".less"].includes(path.extname(file))) return [{ css: source, offset: 0 }];
  if (path.extname(file) !== ".astro") return [];
  const regions = [];
  const stylePattern = /<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi;
  for (const match of source.matchAll(stylePattern)) {
    const css = match[1];
    regions.push({ css, offset: (match.index ?? 0) + match[0].indexOf(css) });
  }
  return regions;
};

const cssRules = (file, source) => styleRegions(file, source).flatMap(({ css, offset }) => {
  const rules = [];
  const rulePattern = /([^{}]+)\{([^{}]*)\}/gs;
  for (const match of css.matchAll(rulePattern)) {
    const selector = match[1].trim();
    const bodyOffset = offset + (match.index ?? 0) + match[1].length + 1;
    rules.push({ selector, body: match[2], bodyOffset, bodyEnd: bodyOffset + match[2].length });
  }
  return rules;
});

const isolatedPrototypeSelector = (relative, selector) => {
  if (relative !== "src/styles/prototypes.css") return false;
  const selectorBranches = selector.split(",").map((branch) => branch.trim()).filter(Boolean);
  return selectorBranches.length > 0 && selectorBranches.every((branch) => /(?:^|\s)(?:body:has\(\.prototype-page\)|\.prototype-(?:page|quiet|signal|index)(?:\b|[-_])|\.quiet-|\.signal-)/.test(branch));
};
const interactiveSelector = (selector) => {
  const normalized = selector.toLowerCase();
  return /(^|[\s>+~,.])a(?=$|[\s>+~,.#:[\]])/.test(normalized)
    || /(^|[\s>+~,.])(button|input|select|textarea|summary)(?=$|[\s>+~,.#:[\]])/.test(normalized)
    || /:(?:global|deep)\(\s*(?:a|button|input|select|textarea|summary)\b/.test(normalized)
    || /:(hover|focus|focus-visible|focus-within|active|checked|target|visited)\b|::selection\b/.test(normalized)
    || /\[(aria-(current|selected|checked|expanded|pressed)|data-(active|selected|state)|open)(?:[\s=\]])/.test(normalized)
    || /(?:^|[-_.#])(link|button|btn|cta|action|nav|tab|toggle|trigger|control|filter|search|share|progress|indicator)(?:$|[-_:.#[\]])/.test(normalized)
    || /(?:^|[-_.#])(?:is-|has-)?(active|selected|current|checked|open|expanded|pressed)(?:$|[-_:.#[\]])/.test(normalized);
};
const interactiveClassNames = (source) => {
  const classNames = new Set();
  const interactiveTagPattern = /<(?:a|button|input|select|textarea|summary)\b[^>]*>/gi;
  for (const tagMatch of source.matchAll(interactiveTagPattern)) {
    const tag = tagMatch[0];
    const staticClass = /\bclass\s*=\s*["']([^"']+)["']/i.exec(tag);
    if (staticClass) {
      for (const className of staticClass[1].split(/\s+/).filter(Boolean)) classNames.add(className);
    }
    const classList = /\bclass:list\s*=\s*\{([\s\S]*)\}/i.exec(tag);
    if (classList) {
      for (const classMatch of classList[1].matchAll(/["']([a-z0-9_-]+)["']/gi)) classNames.add(classMatch[1]);
    }
  }
  return classNames;
};
const selectorUsesInteractiveClass = (selector, classNames) => [...classNames].some((className) => selector.includes(`.${className}`));
// Production headings and named title primitives must carry an explicit rhythm.
// Prototype-only A/C selectors are excluded by isolatedPrototypeSelector below.
const titleLikeSelector = (selector) => {
  const normalized = selector.replace(/:global\(([^)]*)\)/gi, "$1");
  if (/\btitle-line\b/i.test(normalized)) return false;
  if (/\bh[1-4]\b/i.test(normalized)) return true;
  return [...normalized.matchAll(/\.([a-z0-9_-]+)/gi)].some(([, className]) =>
    /(?:^|[-_])(?:title|headline|nameplate)$/i.test(className)
    && !/(?:^|[-_])subtitle$/i.test(className)
  );
};
const hasCssDeclaration = (body, property) => new RegExp(`\\b${property}\\s*:`).test(body);
// Editorial text should keep words intact at normal measures. Long identifiers
// may still break when they would otherwise overflow, but `anywhere` on a
// heading/reading primitive makes ordinary prose collapse into character
// columns when a parent grid becomes narrow.
const textWrapSelector = (selector) => /(?:\\bh[1-4]\\b|registry-page-hero__(?:title|subtitle|lead)|reading-guide|semantic-evidence|reading-flow)/i.test(selector);

const sourceViolations = [];
const sourceViolationKeys = new Set();
const recordSourceViolation = (kind, file, source, index, detail) => {
  const relative = relativePath(file);
  const line = lineNumberAt(source, index);
  const key = `${kind}:${relative}:${line}:${detail}`;
  if (sourceViolationKeys.has(key)) return;
  sourceViolationKeys.add(key);
  sourceViolations.push({ kind, relative, line, detail, excerpt: sourceExcerpt(source, index) });
};

const legacyPalettePatterns = [
  { label: "legacy Registry blue #3b82f6", pattern: /#3b82f6(?:[0-9a-f]{2})?\b/gi },
  { label: "legacy Evidence cyan #22d3ee", pattern: /#22d3ee(?:[0-9a-f]{2})?\b/gi },
  { label: "legacy light blue #60a5fa", pattern: /#60a5fa(?:[0-9a-f]{2})?\b/gi },
  { label: "legacy Registry blue rgb/rgba", pattern: /rgba?\(\s*59\s*(?:,|\s)\s*130\s*(?:,|\s)\s*246(?:\s*(?:,|\/)\s*[^)]+)?\s*\)/gi },
  { label: "legacy Evidence cyan rgb/rgba", pattern: /rgba?\(\s*34\s*(?:,|\s)\s*211\s*(?:,|\s)\s*238(?:\s*(?:,|\/)\s*[^)]+)?\s*\)/gi },
  { label: "legacy light blue rgb/rgba", pattern: /rgba?\(\s*96\s*(?:,|\s)\s*165\s*(?:,|\s)\s*250(?:\s*(?:,|\/)\s*[^)]+)?\s*\)/gi }
];
const legacyTokenPattern = /--(?:accent-signal|accent-proof|accent-electric|accent-kinetic)\b/gi;
const prototypeTokenPattern = /--prototype-blue\b/gi;
const canonicalActionHexPattern = /#2563eb\b/gi;
const canonicalActionRgbPattern = /rgba?\(\s*37\s*(?:,|\s)\s*99\s*(?:,|\s)\s*235(?:\s*(?:,|\/)\s*[^)]+)?\s*\)/gi;
// Match the functional action tokens as complete custom-property names. The
// negative lookahead prevents --color-action-dark from being truncated to the
// --color-action prefix and reported as a structural use.
const actionTokenPattern = /var\(\s*--color-action(?:-soft)?(?![\w-])[^)]*\)/gi;
const structuralBorderPattern = /border(?:-(?:top|right|bottom|left))?(?:-color)?\s*:\s*[^;]*(?:#(?:2563eb|3b82f6|22d3ee|60a5fa)(?:[0-9a-f]{2})?|rgba?\(\s*(?:37\s*(?:,|\s)\s*99\s*(?:,|\s)\s*235|59\s*(?:,|\s)\s*130\s*(?:,|\s)\s*246|34\s*(?:,|\s)\s*211\s*(?:,|\s)\s*238|96\s*(?:,|\s)\s*165\s*(?:,|\s)\s*250)[^)]*\)|var\(\s*--(?:color-action(?:-soft)?|accent-signal|accent-proof|prototype-blue)\b[^)]*\))/gi;

for (const file of productionSourceFiles) {
  const source = read(file);
  const scannedSource = maskComments(source);
  const relative = relativePath(file);
  const rules = cssRules(file, scannedSource);
  const fileInteractiveClasses = interactiveClassNames(scannedSource);
  const isInteractiveRule = (selector) => interactiveSelector(selector)
    || selectorUsesInteractiveClass(selector, fileInteractiveClasses);
  const ruleAt = (index) => rules.find((rule) => index >= rule.bodyOffset && index <= rule.bodyEnd);
  const isIsolatedPrototypeOccurrence = (index) => {
    const rule = ruleAt(index);
    return rule ? isolatedPrototypeSelector(relative, rule.selector) : false;
  };

  for (const { label, pattern } of legacyPalettePatterns) {
    for (const match of scannedSource.matchAll(pattern)) {
      const index = match.index ?? 0;
      if (!isIsolatedPrototypeOccurrence(index)) recordSourceViolation("legacy-palette", file, source, index, label);
    }
  }

  for (const match of scannedSource.matchAll(legacyTokenPattern)) {
    const index = match.index ?? 0;
    if (!isIsolatedPrototypeOccurrence(index)) recordSourceViolation("legacy-token", file, source, index, `${match[0]} is forbidden on production surfaces`);
  }

  for (const match of scannedSource.matchAll(prototypeTokenPattern)) {
    const index = match.index ?? 0;
    if (!isIsolatedPrototypeOccurrence(index)) recordSourceViolation("legacy-token", file, source, index, "--prototype-blue must not remain on production Research Ledger surfaces");
  }

  for (const match of scannedSource.matchAll(canonicalActionHexPattern)) {
    const index = match.index ?? 0;
    const line = sourceExcerpt(source, index);
    const isCanonicalDeclaration = relative === "src/styles/global.css" && /--color-action\s*:\s*#2563eb\s*;?/.test(line);
    if (!isCanonicalDeclaration && !isIsolatedPrototypeOccurrence(index)) {
      recordSourceViolation("hardcoded-action", file, source, index, "#2563eb must be referenced through --color-action outside its single canonical declaration");
    }
  }

  for (const match of scannedSource.matchAll(canonicalActionRgbPattern)) {
    const index = match.index ?? 0;
    const line = sourceExcerpt(source, index);
    const isCanonicalSoftDeclaration = relative === "src/styles/global.css" && /--color-action-soft\s*:/.test(line);
    if (!isCanonicalSoftDeclaration && !isIsolatedPrototypeOccurrence(index)) {
      recordSourceViolation("hardcoded-action", file, source, index, "rgb/rgba action blue must be referenced through --color-action or --color-action-soft outside its canonical token declaration");
    }
  }

  for (const rule of rules) {
    if (isolatedPrototypeSelector(relative, rule.selector)) continue;
    for (const match of rule.body.matchAll(actionTokenPattern)) {
      if (!isInteractiveRule(rule.selector)) {
        recordSourceViolation(
          "structural-action-color",
          file,
          source,
          rule.bodyOffset + (match.index ?? 0),
          `action blue is limited to links and functional states; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 140)}`
        );
      }
    }
    for (const match of rule.body.matchAll(structuralBorderPattern)) {
      if (!isInteractiveRule(rule.selector)) {
        recordSourceViolation(
          "structural-blue-border",
          file,
          source,
          rule.bodyOffset + (match.index ?? 0),
          `blue/cyan borders are limited to functional interaction states; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 140)}`
        );
      }
    }

    if (textWrapSelector(rule.selector) && /overflow-wrap\\s*:\\s*anywhere\\b/i.test(rule.body)) {
      recordSourceViolation(
        "anywhere-text-wrap",
        file,
        source,
        rule.bodyOffset,
        `headings and shared reading primitives must use break-word/normal wrapping; selector: ${rule.selector.replace(/\\s+/g, " ").slice(0, 160)}`
      );
    }
    if (textWrapSelector(rule.selector) && /word-break\\s*:\\s*break-all\\b/i.test(rule.body)) {
      recordSourceViolation(
        "break-all-text-wrap",
        file,
        source,
        rule.bodyOffset,
        `headings and shared reading primitives must not use break-all; selector: ${rule.selector.replace(/\\s+/g, " ").slice(0, 160)}`
      );
    }

    // Keep page-level headings readable when fonts, locale, or viewport width changes.
    // A title-line span intentionally inherits its parent heading rhythm and is skipped.
    if (titleLikeSelector(rule.selector)) {
      const typographyPresent = /(?:font-size|font-weight|line-height|letter-spacing|word-spacing)\s*:/.test(rule.body);
      if (typographyPresent) {
        for (const property of ["line-height", "letter-spacing", "word-spacing"]) {
          if (!hasCssDeclaration(rule.body, property)) {
            recordSourceViolation(
              "heading-typography-contract",
              file,
              source,
              rule.bodyOffset,
              `production title-like selector must declare ${property}; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 160)}`
            );
          }
        }
        const numericLineHeight = /line-height\s*:\s*([0-9]+(?:\.[0-9]+)?)\s*(?:;|$)/i.exec(rule.body);
        if (numericLineHeight && Number(numericLineHeight[1]) < 1.1) {
          recordSourceViolation(
            "tight-heading-line-height",
            file,
            source,
            rule.bodyOffset + (numericLineHeight.index ?? 0),
            `production title-like line-height must be at least 1.1; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 160)}`
          );
        }
        const numericLetterSpacing = /letter-spacing\s*:\s*(-[0-9]+(?:\.[0-9]+)?)em\s*(?:;|$)/i.exec(rule.body);
        if (numericLetterSpacing && Number(numericLetterSpacing[1]) < -0.025) {
          recordSourceViolation(
            "tight-heading-letter-spacing",
            file,
            source,
            rule.bodyOffset + (numericLetterSpacing.index ?? 0),
            `production title-like letter-spacing must not exceed -0.025em; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 160)}`
          );
        }
      }
    }
  }

  const styleRanges = styleRegions(file, scannedSource).map(({ css, offset }) => ({ start: offset, end: offset + css.length }));
  for (const match of scannedSource.matchAll(actionTokenPattern)) {
    const index = match.index ?? 0;
    if (!styleRanges.some(({ start, end }) => index >= start && index <= end)) {
      recordSourceViolation("inline-action-color", file, source, index, "action token use outside a governed CSS rule is not allowed");
    }
  }
}

const globalCssPath = path.join(root, "src", "styles", "global.css");
const headerPath = path.join(root, "src", "components", "SiteHeader.astro");
const baseLayoutPath = path.join(root, "src", "layouts", "BaseLayout.astro");
const registryHeroPath = path.join(root, "src", "components", "RegistryPageHero.astro");
const homepagePath = path.join(root, "src", "pages", "index.astro");
const conceptCorePath = path.join(root, "src", "pages", "concepts", "agentic-lifecycle-governance", "index.astro");
const conceptDetailPath = path.join(root, "src", "pages", "concepts", "[slug].astro");
const governanceDetailPath = path.join(root, "src", "pages", "governance", "[slug].astro");
const playbookDetailPath = path.join(root, "src", "pages", "playbooks", "[slug].astro");
const whitePaperPagePath = path.join(root, "src", "components", "WhitePaperPublicationPage.astro");
const readingGuidePath = path.join(root, "src", "components", "ReadingGuide.astro");
const semanticEvidenceBandPath = path.join(root, "src", "components", "SemanticEvidenceBand.astro");
const readingFlowDiagramPath = path.join(root, "src", "components", "ReadingFlowDiagram.astro");
const gaicSourceTracePath = path.join(root, "src", "components", "GAICSourceTrace.astro");
const essaysIndexPath = path.join(root, "src", "pages", "essays", "index.astro");
const essayRecordRendererPath = path.join(root, "src", "pages", "essays", "[slug].astro");
const portraitPath = path.join(root, "src", "components", "PortraitAnchor.astro");
const siteDataPath = path.join(root, "src", "data", "site.ts");
const essayContentPath = path.join(root, "src", "content", "essays");
const portraitWidths = [320, 480, 640];
const globalCss = exists(globalCssPath) ? read(globalCssPath) : "";
const requiredLedgerColorTokens = [
  ["--color-action", /--color-action\s*:\s*#2563eb\s*;/],
  ["--color-action-soft", /--color-action-soft\s*:/],
  ["--color-rule", /--color-rule\s*:/],
  ["--color-rule-soft", /--color-rule-soft\s*:/],
  ["--color-meta", /--color-meta\s*:/],
  ["--color-paper", /--color-paper\s*:/],
  ["--color-surface", /--color-surface\s*:/],
  ["--color-rule-dark", /--color-rule-dark\s*:/]
];
let colorContractFailureCount = 0;
for (const [token, pattern] of requiredLedgerColorTokens) {
  if (!pattern.test(globalCss)) {
    colorContractFailureCount += 1;
    fail(`Research Ledger shared color token is missing from global.css: ${token}`);
  }
}
const canonicalActionDeclarations = globalCss.match(/--color-action\s*:\s*#2563eb\s*;/g) ?? [];
if (canonicalActionDeclarations.length !== 1) {
  colorContractFailureCount += 1;
  fail(`global.css must declare --color-action: #2563eb exactly once; found ${canonicalActionDeclarations.length}`);
}

if (exists(essaysIndexPath)) {
  const essaysSource = maskComments(read(essaysIndexPath));
  for (const selector of ["registry-log", "log-entry"]) {
    const match = new RegExp(`\\b${selector}\\b`).exec(essaysSource);
    if (match) recordSourceViolation("legacy-essays-selector", essaysIndexPath, read(essaysIndexPath), match.index, `${selector} must be replaced by the Research Ledger record structure`);
  }
}

for (const file of productionSourceFiles) {
  const source = read(file);
  const scannedSource = maskComments(source);
  for (const selector of ["alias-shell", "alias-panel"]) {
    const pattern = new RegExp(`(?:\\.${selector}\\b|["']${selector}["'])`);
    const match = pattern.exec(scannedSource);
    if (match) {
      recordSourceViolation(
        "legacy-hud-selector",
        file,
        source,
        match.index,
        `${selector} must be replaced by the shared RegistryPageHero structure`
      );
    }
  }

  for (const rule of cssRules(file, scannedSource)) {
    if (isolatedPrototypeSelector(relativePath(file), rule.selector)) continue;
    const hudTitleSelectors = [
      ".registry-page-hero__title",
      ".ledger-hero h1",
      ".homepage-ledger-banner .ledger-hero h1",
      ".concept-core-hero h1",
      ".wp-publication-hero h1"
    ];
    const selectorBranches = rule.selector.split(",").map((branch) => branch.trim()).filter(Boolean);
    const titleBranches = selectorBranches.filter((branch) => hudTitleSelectors.some((selector) => branch.includes(selector)));
    if (titleBranches.length === 0 || titleBranches.length !== selectorBranches.length || rule.selector.includes("title-line")) continue;
    const narrowWidth = /max-width\s*:\s*(?:min\([^;}]*)?\d+(?:\.\d+)?(?:ch|em|rem|px)\b/i.exec(rule.body);
    if (narrowWidth) {
      recordSourceViolation(
        "narrow-hud-title",
        file,
        source,
        rule.bodyOffset + (narrowWidth.index ?? 0),
        `production HUD titles must use the full heading row; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 140)}`
      );
    }

    const hasTypographyOverride = /(?:line-height|letter-spacing|word-spacing)\s*:/.test(rule.body);
    if (!hasTypographyOverride) continue;
    for (const property of ["line-height", "letter-spacing", "word-spacing"]) {
      if (!new RegExp(`\\b${property}\\s*:`).test(rule.body)) {
        recordSourceViolation(
          "hud-typography-token",
          file,
          source,
          rule.bodyOffset,
          `production HUD title must declare ${property}; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 140)}`
        );
      }
    }
    const numericLineHeight = /line-height\s*:\s*([0-9]+(?:\.[0-9]+)?)\s*(?:;|$)/i.exec(rule.body);
    if (numericLineHeight && Number(numericLineHeight[1]) < 1.05) {
      recordSourceViolation(
        "tight-hud-line-height",
        file,
        source,
        rule.bodyOffset + (numericLineHeight.index ?? 0),
        `production HUD title line-height must be at least 1.05; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 140)}`
      );
    }
    const numericLetterSpacing = /letter-spacing\s*:\s*(-[0-9]+(?:\.[0-9]+)?)em\s*(?:;|$)/i.exec(rule.body);
    if (numericLetterSpacing && Number(numericLetterSpacing[1]) < -0.05) {
      recordSourceViolation(
        "tight-hud-letter-spacing",
        file,
        source,
        rule.bodyOffset + (numericLetterSpacing.index ?? 0),
        `production HUD title letter-spacing must not exceed -0.05em; selector: ${rule.selector.replace(/\s+/g, " ").slice(0, 140)}`
      );
    }
  }
}

// Inline article diagrams are publication assets too. Keep their markup and
// renderer contract explicit so a dark legacy block cannot bypass the SVG
// media audit simply because it lives in Markdown.
for (const file of collectFiles(essayContentPath, (candidate) => /\.(?:md|mdx)$/.test(candidate))) {
  const source = read(file);
  for (const match of source.matchAll(/<div\b[^>]*class=["'][^"']*\bprotocol-stack-diagram\b[^"']*["'][^>]*>/gi)) {
    const tag = match[0];
    const index = match.index ?? 0;
    for (const [attribute, expected] of [
      ["data-visual-system", "research-ledger-b"],
      ["data-media-category", "article-figure-inline"],
      ["data-palette", "neutral-structure-functional-blue-semantic-exceptions"],
      ["data-visual-revision", "article-figure-b"]
    ]) {
      const value = attributeValue(tag, attribute);
      if (value !== expected) {
        recordSourceViolation(
          "inline-article-figure-contract",
          file,
          source,
          index,
          `${attribute} must be ${expected} on protocol-stack-diagram (found ${value || "missing"})`
        );
      }
    }
  }
}

const essayRendererSource = exists(essayRecordRendererPath) ? maskComments(read(essayRecordRendererPath)) : "";
const protocolStackRule = cssRules(essayRecordRendererPath, essayRendererSource)
  .find((rule) => rule.selector.includes(".protocol-stack-diagram"));
if (!protocolStackRule) {
  fail("article renderer is missing the protocol-stack-diagram visual rule");
} else if (/var\(--bg-monolith\)|var\(--color-rule-dark\)|rgba\(255\s*,\s*255\s*,\s*255/i.test(protocolStackRule.body)) {
  recordSourceViolation(
    "legacy-inline-article-figure-shell",
    essayRecordRendererPath,
    read(essayRecordRendererPath),
    protocolStackRule.bodyOffset,
    "protocol-stack-diagram must use the light Research Ledger surface and neutral structure tokens"
  );
}

for (const violation of sourceViolations) {
  fail(`${violation.kind}: ${violation.relative}:${violation.line} - ${violation.detail}${violation.excerpt ? ` [${violation.excerpt.slice(0, 180)}]` : ""}`);
}
const sourceEssaysLegacyCount = sourceViolations.filter(({ kind }) => kind === "legacy-essays-selector").length;
if (colorContractFailureCount === 0 && sourceViolations.length === 0) {
  pass(`production Research Ledger source palette checked (${productionSourceFiles.length} files; public publication assets and isolated prototypes excluded)`);
}

// Generic site OGs derive directly from the site shell and are governed here.
// Article figures, campaign artwork, and research publication assets remain manual-review surfaces.
const governedSiteOgNames = [
  "og-start-here",
  "jearonwong-og",
  "og-about",
  "og-ai-agent-governance",
  "og-concepts",
  "og-essays",
  "og-lifecycle",
  "og-projects",
];
const governedSiteOgRoutes = {
  "og-start-here": "/start-here/",
  "jearonwong-og": "/",
  "og-about": "/about/",
  "og-ai-agent-governance": "/ai-agent-governance/",
  "og-concepts": "/concepts/",
  "og-essays": "/essays/",
  "og-lifecycle": "/lifecycle/",
  "og-projects": "/projects/",
};
let siteOgFailureCount = 0;
for (const name of governedSiteOgNames) {
  const svgPath = path.join(root, "public", "social", `${name}.svg`);
  const pngPath = path.join(root, "public", "social", `${name}.png`);
  if (!exists(svgPath) || !exists(pngPath)) {
    siteOgFailureCount += 1;
    fail(`governed site OG pair is missing: ${name}`);
    continue;
  }

  const svg = read(svgPath);
  if (!svg.includes('data-visual-system="research-ledger-b"')) {
    siteOgFailureCount += 1;
    fail(`governed site OG is missing its Research Ledger identity: ${relativePath(svgPath)}`);
  }
  const routeMatch = /\bdata-route="([^"]*)"/.exec(svg);
  if (!routeMatch || routeMatch[1] !== governedSiteOgRoutes[name]) {
    siteOgFailureCount += 1;
    fail(`governed site OG route metadata must match ${governedSiteOgRoutes[name]}: ${relativePath(svgPath)}`);
  }
  if (!svg.includes('data-palette="neutral-structure-functional-blue"')) {
    siteOgFailureCount += 1;
    fail(`governed site OG is missing the neutral/functional palette contract: ${relativePath(svgPath)}`);
  }
  if (!/<title\b[^>]*>[^<]+<\/title>/.test(svg) || !/<desc\b[^>]*>[^<]+<\/desc>/.test(svg)) {
    siteOgFailureCount += 1;
    fail(`governed site OG is missing title/desc semantics: ${relativePath(svgPath)}`);
  }
  for (const { label, pattern } of legacyPalettePatterns) {
    pattern.lastIndex = 0;
    if (pattern.test(svg)) {
      siteOgFailureCount += 1;
      fail(`governed site OG contains ${label}: ${relativePath(svgPath)}`);
    }
    pattern.lastIndex = 0;
  }

  const png = fs.readFileSync(pngPath);
  const validPng = png.length >= 24 && png.subarray(1, 4).toString("ascii") === "PNG";
  const width = validPng ? png.readUInt32BE(16) : 0;
  const height = validPng ? png.readUInt32BE(20) : 0;
  if (!validPng || width !== 1200 || height !== 630) {
    siteOgFailureCount += 1;
    fail(`governed site OG PNG must be 1200x630: ${relativePath(pngPath)} (${width}x${height})`);
  }
}
if (siteOgFailureCount === 0) {
  pass(`governed Research Ledger OG assets checked (${governedSiteOgNames.length} source/PNG pairs; authored figures and publications excluded)`);
}

if (!exists(dist)) {
  fail("dist/ is missing; run npm run build first");
} else {
  const header = exists(headerPath) ? read(headerPath) : "";
  const baseLayout = exists(baseLayoutPath) ? read(baseLayoutPath) : "";
  const portraitSource = exists(portraitPath) ? read(portraitPath) : "";
  const siteDataSource = exists(siteDataPath) ? read(siteDataPath) : "";
  const registryHero = exists(registryHeroPath) ? read(registryHeroPath) : "";
  const homepageSource = exists(homepagePath) ? read(homepagePath) : "";
  const conceptCoreSource = exists(conceptCorePath) ? read(conceptCorePath) : "";
  const conceptDetailSource = exists(conceptDetailPath) ? read(conceptDetailPath) : "";
  const governanceDetailSource = exists(governanceDetailPath) ? read(governanceDetailPath) : "";
  const playbookDetailSource = exists(playbookDetailPath) ? read(playbookDetailPath) : "";
  const whitePaperSource = exists(whitePaperPagePath) ? read(whitePaperPagePath) : "";

  // Shared layout primitives must be able to shrink inside page-scoped grids.
  // Keep this contract close to the visual audit so a new route cannot
  // silently reintroduce the narrow-column failure seen in earlier renders.
  const sharedLayoutContracts = [
    [registryHeroPath, "RegistryPageHero", [".registry-page-hero__shell", ".registry-page-hero__heading", ".registry-page-hero__support", ".registry-page-hero__annotation"]],
    [readingGuidePath, "ReadingGuide", [".reading-guide", ".reading-guide__grid", ".reading-guide__actions", ".reading-guide__sections"]],
    [semanticEvidenceBandPath, "SemanticEvidenceBand", [".semantic-evidence-band", ".semantic-evidence-grid", ".semantic-evidence-grid > div"]],
    [readingFlowDiagramPath, "ReadingFlowDiagram", [".reading-flow", ".reading-flow__head", ".reading-flow__steps", ".reading-flow__step"]],
    [gaicSourceTracePath, "GAICSourceTrace", [".gaic-source-trace"]]
  ];
  for (const [file, label, selectors] of sharedLayoutContracts) {
    if (!exists(file)) {
      fail(`${label} shared layout component is missing: ${relativePath(file)}`);
      continue;
    }
    const source = read(file);
    const rules = cssRules(file, maskComments(source));
    for (const selector of selectors) {
      const matchingRule = rules.find((rule) => rule.selector.split(",").some((branch) => branch.trim() === selector));
      if (!matchingRule || !hasCssDeclaration(matchingRule.body, "min-width") || !/min-width\s*:\s*0\b/.test(matchingRule.body)) {
        fail(`${label} must declare min-width: 0 for ${selector}`);
      }
    }
    if (file === registryHeroPath) {
      const annotationRule = rules.find((rule) => rule.selector.split(",").some((branch) => branch.trim() === ".registry-page-hero__annotation"));
      if (!annotationRule || !/flex-wrap\s*:\s*wrap\b/.test(annotationRule.body)) {
        fail("RegistryPageHero annotation must wrap long registry keys at narrow viewports");
      }
    }
    if (file === gaicSourceTracePath) {
      const rootRule = rules.find((rule) => rule.selector.split(",").some((branch) => branch.trim() === ".gaic-source-trace"));
      if (!rootRule || !/grid-template-columns\s*:\s*minmax\(\s*0\s*,\s*1fr\s*\)/.test(rootRule.body)) {
        fail("GAICSourceTrace must use a shrinkable single grid track at narrow widths");
      }
      const annotationRule = rules.find((rule) => rule.selector.split(",").some((branch) => branch.trim() === ".gaic-source-trace > .registry-annotation"));
      if (!annotationRule || !/flex-wrap\s*:\s*wrap\b/.test(annotationRule.body)) {
        fail("GAICSourceTrace annotation must wrap its long source key at narrow viewports");
      }
    }
    if (file === readingFlowDiagramPath) {
      const rootRule = rules.find((rule) => rule.selector.split(",").some((branch) => branch.trim() === ".reading-flow"));
      if (!rootRule || !/width\s*:\s*100%\s*(?:;|$)/.test(rootRule.body) || !/max-width\s*:\s*100%\s*(?:;|$)/.test(rootRule.body)) {
        fail("ReadingFlowDiagram must cap its root width to the owning column");
      }
    }
  }
  pass("shared HUD, reading-guide, evidence-band, and flow primitives carry shrink-safe layout contracts");

  if (!/\.site-ledger-shell\s*\{/.test(globalCss)) fail("Research Ledger shell token is missing from global.css");
  for (const token of [
    "--type-hero-display",
    "--type-hero-entry",
    "--type-hero-display-mobile",
    "--type-hero-entry-mobile",
    "--type-hero-display-line-height",
    "--type-hero-entry-line-height",
    "--type-hero-display-line-height-mobile",
    "--type-hero-entry-line-height-mobile",
    "--type-hero-display-letter-spacing",
    "--type-hero-entry-letter-spacing",
    "--type-hero-display-word-spacing",
    "--type-hero-entry-word-spacing",
    "--type-registry-hero-title-word-spacing",
    "--type-section-title",
    "--type-section-title-line-height",
    "--type-section-title-line-height-mobile",
    "--type-section-title-letter-spacing",
    "--type-section-title-word-spacing",
    "--type-card-title-line-height",
    "--type-card-title-line-height-mobile",
    "--type-card-title-letter-spacing",
    "--type-card-title-word-spacing",
    "--type-nav-line-height",
    "--type-nav-letter-spacing",
    "--type-nav-word-spacing",
    "--measure-reading"
  ]) {
    if (!globalCss.includes(token)) fail(`shared reading-scale token is missing from global.css: ${token}`);
  }
  if (!/body:has\(\.site-ledger-shell\) \.page-content/.test(globalCss)) fail("desktop content offset contract is missing from global.css");
  pass("Research Ledger global token and responsive shell contract checked");

  if (!/@font-face\s*\{[\s\S]*?font-family:\s*["']Inter Variable["'][\s\S]*?inter-latin-wght-normal\.woff2/.test(globalCss)
    || !/@font-face\s*\{[\s\S]*?font-family:\s*["']Outfit Variable["'][\s\S]*?outfit-latin-wght-normal\.woff2/.test(globalCss)
    || !/@font-face\s*\{[\s\S]*?font-family:\s*["']JetBrains Mono Variable["'][\s\S]*?jetbrains-mono-latin-wght-normal\.woff2/.test(globalCss)) {
    fail("global.css must define the three self-hosted Latin variable font faces");
  }
  if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(`${baseLayout}\n${globalCss}`)) {
    fail("site typography must not add render-blocking Google Fonts requests");
  }
  pass("self-hosted Latin typography and non-blocking font request contract checked");

  if (!exists(portraitPath)) {
    fail("PortraitAnchor component is missing");
  } else {
    if (!/srcset=\{avatarWebpSrcset\}/.test(portraitSource) || !/srcset=\{avatarJpgSrcset\}/.test(portraitSource)) {
      fail("PortraitAnchor must provide responsive WebP and JPEG srcset attributes");
    }
    if (!/sizes=\{avatarSizes\}/.test(portraitSource) || !/fetchpriority="high"/.test(portraitSource)) {
      fail("PortraitAnchor must declare sizes and high fetch priority for the first-viewport portrait");
    }
    for (const width of portraitWidths) {
      for (const extension of ["webp", "jpg"]) {
        const file = path.join(root, "public", "images", `jearon-wong-avatar-${width}.${extension}`);
        if (!exists(file)) fail(`Portrait responsive asset is missing: public/images/jearon-wong-avatar-${width}.${extension}`);
      }
    }
  }
  pass("Portrait responsive asset and markup contract checked");
  if (!/image:\s*"\/images\/jearon-wong-avatar-640\.jpg"/.test(siteDataSource)) {
    fail("siteConfig author image must use the optimized 640px portrait asset");
  }
  pass("author entity image source contract checked");

  for (const marker of ["prototype-nav", "site-ledger-nav", "secondaryNavGroups", "isRouteActive", "drawerSecondaryNavGroups", "site-nav__drawer"]) {
    if (!header.includes(marker)) fail(`SiteHeader missing Research Ledger/navigation marker: ${marker}`);
  }
  if (!/\.site-nav__mobile-trigger\s*\{\s*display:\s*flex/.test(header)) fail("SiteHeader mobile navigation trigger is not exposed at the mobile breakpoint");
  pass("SiteHeader ledger navigation and desktop/mobile registry contract checked");

  if (!/class="site-ledger-shell prototype-ledger"/.test(baseLayout)) fail("BaseLayout missing Research Ledger shell hook");
  pass("BaseLayout visual governance hook checked");

  const sharedHudMarkers = [
    "registry-page-hero__heading",
    "registry-page-hero__support",
    '"heading heading"',
    '"support rail"',
    "grid-area: heading",
    "grid-area: support",
    "grid-area: rail"
  ];
  for (const marker of sharedHudMarkers) {
    if (!registryHero.includes(marker)) fail(`RegistryPageHero missing full-width HUD marker: ${marker}`);
  }
  if (!/\.registry-page-hero__title\s*\{[\s\S]*?max-width:\s*none\s*;/m.test(registryHero)) {
    fail("RegistryPageHero title must remain unconstrained across the full HUD heading row");
  }
  for (const [label, source, markers] of [
    ["homepage", homepageSource, [
      "homepage-hero__heading",
      "homepage-hero__support",
      "homepage-hero__portrait",
      '"heading portrait rail"',
      '"support portrait rail"',
      "grid-area: heading",
      "grid-area: support",
      "grid-area: portrait",
      "grid-area: rail"
    ]],
    ["concept core", conceptCoreSource, ["concept-core-hero__heading", "concept-core-hero__support", '"heading heading"', '"support rail"']],
    ["white paper", whitePaperSource, ["wp-publication-hero__heading", "wp-publication-hero__support", '"heading heading"', '"support rail"']]
  ]) {
    for (const marker of markers) {
      if (!source.includes(marker)) fail(`${label} HUD missing full-width heading marker: ${marker}`);
    }
  }
  pass("shared and special HUD full-width source contracts checked");

  // Definition routes use child components inside a page-scoped grid. Keep
  // their placement explicit so a scoped-selector mismatch cannot collapse
  // the semantic evidence band into the 280px reference rail.
  for (const marker of [
    ".concept-detail-shell > :global(.reading-guide)",
    ".concept-detail-shell > :global(.semantic-evidence-band)",
    "grid-row: 1",
    "grid-row: 2",
    "grid-row: 3"
  ]) {
    if (!conceptDetailSource.includes(marker)) fail(`concept detail layout contract is missing: ${marker}`);
  }
  if (/\.concept-detail-shell\s*>\s*\.semantic-evidence-band\b/.test(conceptDetailSource)) {
    fail("concept detail layout must not rely on a scoped selector for SemanticEvidenceBand");
  }
  pass("concept detail reading order and full-width evidence-band contract checked");

  for (const [label, source, shell] of [
    ["governance detail", governanceDetailSource, "governance-detail-shell"],
    ["playbook detail", playbookDetailSource, "playbook-detail-shell"]
  ]) {
    for (const marker of [
      `.${shell} > :global(.reading-guide)`,
      "grid-row: 1",
      "grid-row: 2"
    ]) {
      if (!source.includes(marker)) fail(`${label} layout contract is missing: ${marker}`);
    }
    if (new RegExp(`\\.${shell}\\s*>\\s*\\.reading-guide\\b`).test(source)) {
      fail(`${label} layout must not rely on a scoped selector for ReadingGuide`);
    }
  }
  pass("governance and playbook detail reading-guide placement contracts checked");

  const builtRoutes = collectIndexFiles(dist)
    .filter((file) => !file.includes(`${path.sep}prototypes${path.sep}`))
    .map((file) => ({ file, html: read(file) }))
    .filter(({ html }) => !hasRobotsDirective(html, "noindex") && !hasRefreshMeta(html));
  let canonicalHudCount = 0;
  for (const { file, html } of builtRoutes) {
    const route = routeFromBuiltFile(file);
    const markup = stripEmbeddedBlocks(html);
    if (!hasClassToken(markup, "site-ledger-shell") || !hasClassToken(markup, "site-ledger-nav")) {
      fail(`canonical route is missing the Research Ledger shell: ${route}`);
    }
  if (!html.includes('<meta name="viewport"')) fail(`canonical route missing viewport metadata: ${route}`);
    if (hasClassToken(markup, "site-nav__mobile-trigger")) {
      const triggerTag = [...markup.matchAll(/<button\b[^>]*class=["'][^"']*\bsite-nav__mobile-trigger\b[^"']*["'][^>]*>/gi)][0]?.[0] ?? "";
      if (!/aria-expanded=["']false["']/.test(triggerTag) || !/aria-controls=["']mobile-navigation-drawer["']/.test(triggerTag)) {
        fail(`canonical route mobile navigation trigger is missing initial ARIA state: ${route}`);
      }
      const drawerTag = [...markup.matchAll(/<nav\b[^>]*id=["']mobile-navigation-drawer["'][^>]*>/gi)][0]?.[0] ?? "";
      if (!/aria-hidden=["']true["']/.test(drawerTag)) fail(`canonical route mobile drawer is missing initial aria-hidden state: ${route}`);
    }
    if (checkBuiltHudContract(route, html).contract) canonicalHudCount += 1;
  }
  pass(`canonical Research Ledger route coverage checked (${builtRoutes.length} routes)`);
  pass(`canonical HUD DOM structure checked (${canonicalHudCount} routes; embedded CSS, JS, and comments excluded)`);

  const conceptDetailRoutes = builtRoutes
    .map(({ file, html }) => ({ route: routeFromBuiltFile(file), html }))
    .filter(({ route }) =>
      /^\/concepts\/[^/]+\/$/.test(route)
      && !route.endsWith("/agentic-lifecycle-governance/")
      && !route.endsWith("/map/")
    );
  for (const { route, html } of conceptDetailRoutes) {
    const markup = stripEmbeddedBlocks(html);
    for (const marker of ["concept-detail-shell", "reading-guide", "semantic-evidence-band", "concept-sidebar", "concept-article"]) {
      if (!hasClassToken(markup, marker)) fail(`concept detail route ${route} is missing its layout marker: ${marker}`);
    }
  }
  pass(`concept detail route structure checked (${conceptDetailRoutes.length} routes)`);

  const governedDetailRouteGroups = [
    ["governance", "governance detail", "governance-detail-shell", "governance-sidebar", "governance-article"],
    ["playbooks", "playbook detail", "playbook-detail-shell", "playbook-sidebar", "playbook-article"]
  ];
  for (const [prefix, label, shell, sidebar, article] of governedDetailRouteGroups) {
    const routes = builtRoutes
      .map(({ file, html }) => ({ route: routeFromBuiltFile(file), html }))
      .filter(({ route }) => new RegExp(`^/${prefix}/[^/]+/$`).test(route));
    for (const { route, html } of routes) {
      const markup = stripEmbeddedBlocks(html);
      for (const marker of [shell, "reading-guide", sidebar, article]) {
        if (!hasClassToken(markup, marker)) fail(`${label} route ${route} is missing its layout marker: ${marker}`);
      }
    }
    pass(`${label} route structure checked (${routes.length} routes)`);
  }

  const specialRoutes = [
    ["concepts/agentic-lifecycle-governance", "concept core"],
    ["research/global-ai-compliance-white-paper-2026", "GAIC white paper"],
    ["research/agentic-ai-auditability-assurance-white-paper-2026", "auditability white paper"],
    ["research/agentic-ai-insurability-risk-transfer-white-paper-2026", "insurability white paper"],
    ["mapping/extended-ecosystem", "ecosystem mapping"],
    ["ecosystem-mapping", "ecosystem mapping alias"]
  ];
  for (const [relativeRoute, label] of specialRoutes) {
    const file = path.join(dist, relativeRoute, "index.html");
    if (!exists(file)) fail(`special ${label} route missing from build: /${relativeRoute}/`);
    else {
      const html = read(file);
      checkBuiltHudContract(`/${relativeRoute}/`, html, `special ${label}`);
      if (relativeRoute === "ecosystem-mapping") {
        if (!hasRobotsDirective(html, "noindex")) fail("ecosystem mapping alias must remain noindex");
        if (!canonicalHref(html).endsWith("/mapping/extended-ecosystem/")) {
          fail("ecosystem mapping alias canonical link must target /mapping/extended-ecosystem/");
        }
        if (!hasLinkTo(stripEmbeddedBlocks(html), "/mapping/extended-ecosystem/")) {
          fail("ecosystem mapping alias must retain a visible link to /mapping/extended-ecosystem/");
        }
        const sitemapMarkup = collectFiles(dist, (candidate) => /^sitemap(?:-\d+)?\.xml$/i.test(path.basename(candidate)))
          .map((candidate) => read(candidate))
          .join("\n");
        if (sitemapMarkup.includes("/ecosystem-mapping/")) {
          fail("ecosystem mapping alias must remain excluded from the sitemap");
        }
      }
    }
  }
  pass(`special-route coverage checked (${specialRoutes.length} routes)`);

  const readingGuideRoutes = [
    ["lifecycle", "lifecycle field"],
    ["essays", "essays hub"],
    ["research", "research hub"],
    ["projects", "projects hub"],
    ["concepts", "concepts hub"],
    ["concepts/map", "concept map"],
    ["definitions", "definitions"],
    ["evidence", "evidence registry"],
    ["governance", "governance hub"],
    ["playbooks", "playbooks hub"],
    ["about", "about identity"],
    ["theories", "ideas map"],
    ["delivery-standard", "delivery standard"],
    ["ai-agent-governance", "governance bridge"],
    ["mapping/extended-ecosystem", "ecosystem mapping"]
  ];
  for (const [relativeRoute, label] of readingGuideRoutes) {
    const file = path.join(dist, relativeRoute, "index.html");
    if (exists(file) && !read(file).includes("reading-guide")) fail(`${label} is missing the governed reading guide`);
  }
  pass(`reading-guide coverage checked (${readingGuideRoutes.length} routes)`);

  const visualRoutes = [
    ["lifecycle", "lifecycle flow"],
    ["projects", "projects flow"],
    ["research", "research flow"],
    ["evidence", "evidence flow"],
    ["governance", "governance flow"],
    ["concepts", "concepts flow"],
    ["concepts/map", "concept map flow"],
    ["definitions", "definitions flow"],
    ["essays", "essays flow"],
    ["playbooks", "playbooks flow"],
    ["delivery-standard", "delivery standard flow"],
    ["ai-agent-governance", "governance bridge flow"],
    ["mapping/extended-ecosystem", "ecosystem mapping flow"]
  ];
  for (const [relativeRoute, label] of visualRoutes) {
    const file = path.join(dist, relativeRoute, "index.html");
    if (exists(file) && !read(file).includes("reading-flow")) fail(`${label} is missing an explanatory visual model`);
  }
  pass(`explanatory visual-model coverage checked (${visualRoutes.length} routes)`);
  const homepage = path.join(dist, "index.html");
  if (exists(homepage) && (!read(homepage).includes("ledger-rail") || !read(homepage).includes("reading-flow"))) {
    fail("homepage is missing its governed reading rail or explanatory visual model");
  }

  const builtEssaysIndex = path.join(dist, "essays", "index.html");
  let builtEssaysLegacyCount = 0;
  if (!exists(builtEssaysIndex)) {
    builtEssaysLegacyCount += 1;
    fail("built essays registry is missing: /essays/");
  } else {
    const essaysHtml = read(builtEssaysIndex);
    for (const selector of ["registry-log", "log-entry"]) {
      if (new RegExp(`class=["'][^"']*\\b${selector}\\b`, "i").test(essaysHtml)) {
        builtEssaysLegacyCount += 1;
        fail(`built /essays/ still renders the legacy ${selector} selector`);
      }
    }
  }
  if (sourceEssaysLegacyCount === 0 && builtEssaysLegacyCount === 0) pass("legacy essays registry selectors checked in source and built output");

  const essayRecord = path.join(dist, "essays", "when-an-agent-says-done-who-accepts-the-outcome", "index.html");
  if (exists(essayRecord)) {
    const html = read(essayRecord);
    if (!html.includes("article-toc") || !html.includes("data-article-progress")) fail("long essay record is missing the reading navigation contract");
  }
  const definitions = path.join(dist, "definitions", "index.html");
  if (exists(definitions) && !read(definitions).includes("data-definition-search")) fail("definitions page is missing the search control");
  const conceptsMap = path.join(dist, "concepts", "map", "index.html");
  if (exists(conceptsMap) && !read(conceptsMap).includes("data-map-search")) fail("concepts map is missing the filter control");
  pass("long-form reading and dense reference controls checked");
}

if (failures.length > 0) {
  console.error("\nVisual system audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Visual system audit passed.");
}

/* global console, process */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = [
  "public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html",
  "public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html"
];

for (const relative of files) {
  const file = path.join(root, relative);
  const source = fs.readFileSync(file, "utf8");
  let previousLevel = 0;
  const stack = [];
  const normalized = source.replace(/<(\/?)h([1-6])(\b[^>]*)>/gi, (_tag, closing, rawLevel, attrs) => {
    if (closing) {
      const level = stack.pop() ?? Number(rawLevel);
      return `</h${level}>`;
    }
    let level = Number(rawLevel);
    if (previousLevel > 0 && level > previousLevel + 1) level = previousLevel + 1;
    previousLevel = level;
    stack.push(level);
    return `<h${level}${attrs}>`;
  });
  fs.writeFileSync(file, normalized, "utf8");
  console.log(`Normalized heading outline: ${relative}`);
}

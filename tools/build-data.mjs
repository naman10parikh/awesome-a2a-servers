#!/usr/bin/env node
// Builds list.json from README.md (the one source) and checks the list's format. Node 20 or later, no dependencies.
//   node tools/build-data.mjs          write list.json
//   node tools/build-data.mjs --check  exit 1 if an entry breaks the format or list.json is out of date
import { existsSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const norm = (mark) => mark.replace(/️/g, "");

// Each mark the README's Legend defines, and the field it sets in list.json.
export const MARKS = {
  "🎖": ["official", true], "📝": ["docs", true],
  "🐍": ["languages", "Python"], "📇": ["languages", "TypeScript/JavaScript"], "🏎": ["languages", "Go"],
  "🦀": ["languages", "Rust"], "#⃣": ["languages", "C#"], "☕": ["languages", "Java"],
  "💎": ["languages", "Kotlin"], "💧": ["languages", "Elixir"],
  "☁": ["scope", "cloud"], "🏠": ["scope", "local"],
  "🍎": ["os", "macOS"], "🪟": ["os", "Windows"], "🐧": ["os", "Linux"],
};
const ENTRY = /^\* (?<marks>[^[]*?)\s*\[(?<name>[^\]]+)\]\((?<url>[^)\s]+)\)\s+[-–]\s+(?<description>.+?)\s*$/;
const NOT_ENTRIES = new Set(["Legend", "Contents"]);

// GitHub's heading anchor: lower case, punctuation and emoji dropped, each space a hyphen.
export const slug = (heading) =>
  heading.trim().toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, "").replace(/\s/g, "-");

export function parse(markdown) {
  const errors = [], entries = [], legend = new Set(), anchors = new Set(), links = [], seen = new Map();
  let section = "", category = null, inBlock = false;
  markdown.split("\n").forEach((line, i) => {
    const at = `README.md:${i + 1}`;
    if (/^<!-- fleet:\w+:start -->/.test(line)) inBlock = true;
    if (/^#{1,6} /.test(line)) anchors.add(slug(line.replace(/^#+ /, "")));
    for (const m of line.matchAll(/\]\(#([^)]+)\)/g)) links.push([m[1], at]);
    if (inBlock) {
      if (/^<!-- fleet:\w+:end -->/.test(line)) inBlock = false;
      return;
    }
    if (line.startsWith("## ")) [section, category] = [line.slice(3).trim(), null];
    else if (line.startsWith("### ")) category = line.slice(4).replace(/^[^\p{L}\p{N}]+/u, "").trim();
    if (section === "Legend") {
      const m = line.match(/^\s*\* (\S+)\s+[–-]\s+/);
      if (m) legend.add(norm(m[1]));
      return;
    }
    if (!line.startsWith("* ") || NOT_ENTRIES.has(section)) return;
    const m = line.match(ENTRY);
    if (!m) return errors.push(`${at}: not an entry; use "* <marks> [Name](https://link) - Description."`);
    const { name, url, description } = m.groups;
    const entry = { name, url, description, section, category, official: false, docs: false,
                    languages: [], scope: [], os: [], marks: m.groups.marks.split(/\s+/).filter(Boolean) };
    for (const mark of entry.marks) {
      const field = MARKS[norm(mark)];
      if (!field) errors.push(`${at}: mark ${mark} is not in the legend`);
      else if (field[1] === true) entry[field[0]] = true;
      else entry[field[0]].push(field[1]);
    }
    if (!url.startsWith("https://")) errors.push(`${at}: link must start with https://`);
    const key = `${section}\n${url}`;
    if (seen.has(key)) errors.push(`${at}: ${url} is already listed in ${section} (${seen.get(key)})`);
    seen.set(key, at);
    entries.push(entry);
  });
  for (const mark of Object.keys(MARKS)) if (!legend.has(mark)) errors.push(`README.md: the legend does not define ${mark}`);
  for (const [anchor, at] of links) if (!anchors.has(anchor)) errors.push(`${at}: #${anchor} matches no heading`);
  const sections = [...new Set(entries.map((e) => e.section))];
  return { errors, data: { name: "Awesome A2A Servers", source: "README.md", count: entries.length, sections, entries } };
}

function main() {
  const check = process.argv.includes("--check");
  const { errors, data } = parse(readFileSync(join(ROOT, "README.md"), "utf8"));
  const json = JSON.stringify(data, null, 2) + "\n";
  const out = join(ROOT, "list.json");
  if (check && (!existsSync(out) || readFileSync(out, "utf8") !== json)) {
    errors.push("list.json is out of date: run `node tools/build-data.mjs` and commit list.json with README.md");
  }
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
  if (!check) writeFileSync(out, json);
  console.log(`${check ? "ok" : "wrote list.json"}: ${data.count} entries in ${data.sections.length} sections`);
}

if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();

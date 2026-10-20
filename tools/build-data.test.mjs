// The checker must catch each fault it promises to catch. Run: node --test tools/build-data.test.mjs
import assert from "node:assert/strict";
import { test } from "node:test";
import { MARKS, parse, slug } from "./build-data.mjs";

const LEGEND = "## Legend\n\n" + Object.keys(MARKS).map((m) => `* ${m} – meaning`).join("\n") + "\n";
const doc = (body) => `# List\n\n${body}\n\n${LEGEND}`;

test("an entry becomes a record with its section, category and marks", () => {
  const { errors, data } = parse(doc("## Server Implementations\n\n### 🤖 Browser Automation\n\n"
    + "* 🎖️ 🐍 🏠 [Browser Agent](https://github.com/a/b) - Drives a browser over A2A."));
  assert.deepEqual(errors, []);
  assert.equal(data.count, 1);
  const [e] = data.entries;
  assert.equal(e.section, "Server Implementations");
  assert.equal(e.category, "Browser Automation");
  assert.equal(e.official, true);
  assert.deepEqual(e.languages, ["Python"]);
  assert.deepEqual(e.scope, ["local"]);
});

test("a bullet that is not an entry fails", () => {
  const { errors } = parse(doc("## Clients\n\n* See the [samples](https://github.com/a/b)"));
  assert.match(errors.join("\n"), /README\.md:5: not an entry/);
});

test("a mark missing from the legend fails", () => {
  const { errors } = parse(doc("## Clients\n\n* 🦄 [Client](https://github.com/a/b) - A client."));
  assert.match(errors.join("\n"), /mark 🦄 is not in the legend/);
});

test("a link may repeat across sections but not within one", () => {
  const twice = "* 📇 [Client](https://github.com/a/b) - A client.";
  assert.deepEqual(parse(doc(`## Clients\n\n${twice}\n\n## Utilities\n\n${twice}`)).errors, []);
  const { errors } = parse(doc(`## Clients\n\n### One\n\n${twice}\n\n### Two\n\n${twice}`));
  assert.match(errors.join("\n"), /already listed in Clients/);
});

test("a plain http link fails", () => {
  const { errors } = parse(doc("## Clients\n\n* 📇 [Client](http://example.com) - A client."));
  assert.match(errors.join("\n"), /must start with https/);
});

test("a contents link must find its heading", () => {
  const ok = parse(doc("## Contents\n\n* [Tips](#tips--tricks)\n\n## Tips & Tricks\n\nText."));
  assert.deepEqual(ok.errors, []);
  const { errors } = parse(doc("## Contents\n\n* [Gone](#nowhere)"));
  assert.match(errors.join("\n"), /#nowhere matches no heading/);
});

test("fleet blocks are not entries", () => {
  const { errors, data } = parse(doc("<!-- fleet:use:start -->\n* [AGENTS.md](AGENTS.md) text\n<!-- fleet:use:end -->"));
  assert.deepEqual(errors, []);
  assert.equal(data.count, 0);
});

test("anchors follow GitHub's rule", () => {
  assert.equal(slug("Tutorials & Learning Resources"), "tutorials--learning-resources");
  assert.equal(slug("What is A2A?"), "what-is-a2a");
});

@AGENTS.md

## Claude Code notes

- This is a list, not a package: there is no build step, plugin or MCP server. The only script is
  `tools/build-data.mjs` (Node 20 or later, no dependencies).
- After any edit to `README.md`, run `node tools/build-data.mjs && node tools/build-data.mjs --check` and stage
  `list.json` with it. Stage files by name.
- Before adding a project, open its repository and confirm it uses A2A; do not add entries from a search result alone.

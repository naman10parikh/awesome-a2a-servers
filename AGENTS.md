# AGENTS.md: Awesome A2A Servers

This repository is a curated list of open-source projects that implement or use the Agent2Agent (A2A) protocol, the
open protocol that lets agents built on different frameworks find each other and work together. `README.md` is the
list, written for people. `list.json` holds the same entries for agents, and CI keeps the two in step.

## Read the list

Read `list.json` (raw: `https://raw.githubusercontent.com/naman10parikh/awesome-a2a-servers/main/list.json`):

```json
{
  "name": "Awesome A2A Servers",
  "source": "README.md",
  "count": 177,
  "sections": ["Official Resources", "Clients", "..."],
  "entries": [
    {
      "name": "A2A Samples",
      "url": "https://github.com/a2aproject/a2a-samples",
      "description": "Official sample clients and agents for A2A",
      "section": "Clients",
      "category": null,
      "official": true,
      "docs": false,
      "languages": [],
      "scope": [],
      "os": [],
      "marks": ["🎖️"]
    }
  ]
}
```

- `section` is the README's `##` heading. `category` is its `###` heading (for example "Browser Automation"), or `null`.
- `official`, `docs`, `languages`, `scope` and `os` come from the marks in the README's Legend: 🎖️ official, 📝
  documentation, 🐍 Python, 📇 TypeScript/JavaScript, 🏎️ Go, 🦀 Rust, #️⃣ C#, ☕ Java, 💎 Kotlin, 💧 Elixir, ☁️ cloud,
  🏠 local, 🍎 macOS, 🪟 Windows, 🐧 Linux.
- A project can appear in more than one section (a client that is also a tool), never twice in one section.

Example: every Go entry, name and link.

```bash
jq -r '.entries[] | select(.languages | index("Go")) | "\(.name)  \(.url)"' list.json
```

## Add or change an entry

1. Edit `README.md` only. Never edit `list.json` by hand: it is rebuilt from the README.
2. One line per entry, in the right section: `* <marks> [Name](https://link) - Description.` Marks come from the
   Legend. Title-case the name and keep the description short.
3. Rebuild and check: `node tools/build-data.mjs && node tools/build-data.mjs --check` (Node 20 or later, no install).
4. Commit `README.md` and `list.json` together.

An entry belongs here when it implements or uses A2A, has a public repository, and is documented well enough to use
(see `CONTRIBUTING.md`).

## Checks

| Command | What it proves |
| --- | --- |
| `node tools/build-data.mjs --check` | Every bullet in a list section is an entry in the format above, every link is `https://`, every mark is in the Legend, no link repeats within a section, every contents link finds its heading, and `list.json` matches `README.md`. |
| `node --test tools/build-data.test.mjs` | The checker itself catches each of those faults (8 tests). |

CI (`.github/workflows/ci.yml`) runs both on every push and pull request; a failure blocks the merge. Once a week,
`.github/workflows/refresh.yml` lists dead links and the A2A projects on GitHub that the list does not have yet, in
its run summary. It reads only: a person decides what changes.

## What not to do

- Do not add a project that does not use A2A, has no public repository, or is already in the same section.
- Do not hand-edit `list.json`, and do not commit `README.md` without the rebuilt `list.json`.
- Do not move or rename whole sections without a reason in the pull request: anchors and agents depend on them.
- Do not add tracking links, shortened links or `http://` links.

## Layout

| Path | What it is |
| --- | --- |
| `README.md` | The list, the one source |
| `list.json` | The same entries for agents, generated |
| `tools/build-data.mjs` | Builds `list.json` and checks the format |
| `tools/build-data.test.mjs` | Tests for the checker |
| `.github/workflows/` | `ci.yml` (checks), `refresh.yml` (weekly dead links and new projects) |
| `CONTRIBUTING.md` | The entry format and what qualifies |
| `llms.txt` | A map of this repository for agents that read first |

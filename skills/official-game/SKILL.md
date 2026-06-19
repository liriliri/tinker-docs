---
name: official-game
description: Add or update an official game plugin documentation page to tinker-docs from tinker-games.
---

# Add or Update Official Game Plugin Documentation

When the user asks to add or update a game plugin doc (e.g. "add 2048 doc", "update minesweeper readme"), follow these steps:

## 1. Read plugin info

Read the plugin's `package.json` from `tinker-games/packages/tinker-<name>/package.json` to get:
- `tinker.name` — used as the English sidebar item text
- `tinker.locales.zh-CN.name` — used as the Chinese sidebar item text

Read the plugin's `README.md` from `tinker-games/packages/tinker-<name>/README.md` for content.

## 2. Create or update English doc

Create or update `docs/guide/official-games/<name>.md` based on the README content. Adjust install section to use a link to TINKER and a code block for the npm command.

## 3. Create or update Chinese doc

Create or update `docs/zh/guide/official-games/<name>.md` with the README content translated to Chinese. Keep technical terms (e.g. npm) untranslated.

## 4. Update sidebar config (add only)

If the plugin is new (not already in the sidebar), add an entry in `docs/.vitepress/sidebar.mts` to BOTH sidebar arrays:

- English sidebar (`enSidebar` → `Official Games` items array):
  ```js
  {
    text: '<tinker.name value>',
    link: '/guide/official-games/<name>',
  },
  ```

- Chinese sidebar (`zhSidebar` → `官方游戏` items array):
  ```js
  {
    text: '<tinker.locales.zh-CN.name value>',
    link: '/zh/guide/official-games/<name>',
  },
  ```

## Key rules

- The sidebar item `text` MUST come from `package.json`: English uses `tinker.name`, Chinese uses `tinker.locales.zh-CN.name` (if it exists, otherwise fall back to `tinker.name`)
- The file name under `official-games/` should be the plugin name without the `tinker-` prefix (e.g. `tinker-2048` → `2048.md`)
- The sidebar category is `Official Games` (EN) / `官方游戏` (ZH) with `collapsed: false`
- Sidebar items MUST be sorted by plugin ID in alphabetical order (e.g. 2048 → cube → minesweeper)
- Screenshot images should reference the raw GitHub URL from the README

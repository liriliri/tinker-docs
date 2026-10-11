---
name: official-game
description: Add or update an official game plugin documentation page to tinker-docs from tinker-games.
---

# Add or Update Official Game Plugin Documentation

When the user asks to add or update a game plugin doc (e.g. "add 2048 doc", "update minesweeper readme"), follow these steps:

## 1. Read plugin info

From `tinker-games/packages/tinker-<name>/`:

- `package.json` — `tinker.name`, `tinker.locales.zh-CN.name` (fallback to `tinker.name`), `description`, `tinker.locales.zh-CN.description`, `tinker.category`
- `README.md` — doc content

## 2. Create or update English doc

Create or update `docs/guide/official-games/<name>.md` with the README content copied verbatim.

## 3. Create or update Chinese doc

Create or update `docs/zh/guide/official-games/<name>.md` with the README content translated to Chinese. Keep technical terms (e.g. npm) untranslated.

## 4. Update sidebar config (add only)

If the plugin is new, add to both sidebars in `docs/.vitepress/sidebar.mts` (`Official Games` / `官方游戏`), sorted by plugin id:

```js
// enSidebar
{ text: '<tinker.name>', link: '/guide/official-games/<name>' }

// zhSidebar
{ text: '<tinker.locales.zh-CN.name>', link: '/zh/guide/official-games/<name>' }
```

## 5. Online launcher (always)

All official games support browser play. Always:

1. Copy `icon.png` → `docs/public/icons/<name>.png`
2. Upsert into `docs/.vitepress/theme/lib/onlinePlugins.ts` (`onlinePlugins`, sorted by `id`):

```ts
{
  id: '<name>',
  name: '<tinker.name>',
  nameZh: '<tinker.locales.zh-CN.name>', // omit if same as name
  description: '<package.json description>',
  descriptionZh: '<tinker.locales.zh-CN.description>',
  category: '<tinker.category>',
  kind: 'game',
}
```

`icon` / `url` are derived from `id` + `kind` (`/icons/<name>.png`, `https://tinker.liriliri.io/games/<name>/`).

## Key rules

- File name is the plugin id without `tinker-` prefix (`tinker-2048` → `2048.md`)
- Sidebar / online `name` fields come from `package.json` as above
- Sidebar items MUST be sorted by plugin id (e.g. 2048 → ball-maze → minesweeper)
- Screenshots use the raw GitHub URL from the README

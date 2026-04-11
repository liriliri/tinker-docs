---
name: official-plugin
description: Add or update an official plugin documentation page to tinker-docs from tinker-plugins.
---

# Add or Update Official Plugin Documentation

When the user asks to add or update a plugin doc (e.g. "add xxx plugin doc", "update xxx readme"), follow these steps:

## 1. Read plugin info

Read the plugin's `package.json` from `tinker-plugins/packages/tinker-<name>/package.json` to get:
- `tinker.name` — used as the English sidebar item text
- `tinker.locales.zh-CN.name` — used as the Chinese sidebar item text

Read the plugin's `README.md` from `tinker-plugins/packages/tinker-<name>/README.md` for content.

## 2. Create or update English doc

Create or update `docs/guide/official-plugins/<name>.md` based on the README content. Adjust install section to use a link to TINKER and a code block for the npm command.

## 3. Create or update Chinese doc

Create or update `docs/zh/guide/official-plugins/<name>.md` with the README content translated to Chinese. Keep technical terms (e.g. Chrome DevTools, WHOIS, npm) untranslated.

## 4. Update sidebar config (add only)

If the plugin is new (not already in the sidebar), add an entry in `docs/.vitepress/sidebar.mts` to BOTH sidebar arrays:

- English sidebar (`enSidebar` → `Official Plugins` items array):
  ```js
  {
    text: '<tinker.name value>',
    link: '/guide/official-plugins/<name>',
  },
  ```

- Chinese sidebar (`zhSidebar` → `官方插件` items array):
  ```js
  {
    text: '<tinker.locales.zh-CN.name value>',
    link: '/zh/guide/official-plugins/<name>',
  },
  ```

## Key rules

- The sidebar item `text` MUST come from `package.json`: English uses `tinker.name`, Chinese uses `tinker.locales.zh-CN.name` (if it exists, otherwise fall back to `tinker.name`)
- The file name under `official-plugins/` should be the plugin name without the `tinker-` prefix (e.g. `tinker-whois` → `whois.md`)
- The sidebar category is `Official Plugins` (EN) / `官方插件` (ZH) with `collapsed: false`
- Sidebar items MUST be sorted by plugin ID in alphabetical order (e.g. bilibili-downloader → electron-debug → emoji → gamepad → gba)
- Screenshot images should reference the raw GitHub URL from the README

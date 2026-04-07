---
name: third-party-plugin
description: Add a third-party plugin documentation page to tinker-docs from tinker-third-party.
---

# Add Third-Party Plugin Documentation

When the user asks to add a plugin doc (e.g. "把 xxx 也添加下", "add xxx plugin doc"), follow these steps:

## 1. Read plugin info

Read the plugin's `package.json` from `tinker-third-party/packages/tinker-<name>/package.json` to get:
- `tinker.name` — used as the English sidebar item text
- `tinker.locales.zh-CN.name` — used as the Chinese sidebar item text

Read the plugin's `README.md` from `tinker-third-party/packages/tinker-<name>/README.md` for content.

## 2. Create English doc

Create `docs/guide/third-party-plugins/<name>.md` based on the README content. Adjust install section to use a link to TINKER and a code block for the npm command.

## 3. Create Chinese doc

Create `docs/zh/guide/third-party-plugins/<name>.md` with the README content translated to Chinese. Keep technical terms (e.g. Chrome DevTools, WHOIS, npm) untranslated.

## 4. Update sidebar config

In `docs/.vitepress/config.mts`, add an entry to BOTH sidebar sections:

- English sidebar (`'guide/'` → `Third-Party Plugins` items array):
  ```js
  {
    text: '<tinker.name value>',
    link: '/guide/third-party-plugins/<name>',
  },
  ```

- Chinese sidebar (`'zh/guide/'` → `第三方插件` items array):
  ```js
  {
    text: '<tinker.locales.zh-CN.name value>',
    link: '/zh/guide/third-party-plugins/<name>',
  },
  ```

## Key rules

- The sidebar item `text` MUST come from `package.json`: English uses `tinker.name`, Chinese uses `tinker.locales.zh-CN.name` (if it exists, otherwise fall back to `tinker.name`)
- The file name under `third-party-plugins/` should be the plugin name without the `tinker-` prefix (e.g. `tinker-whois` → `whois.md`)
- The sidebar category is `Third-Party Plugins` (EN) / `第三方插件` (ZH) with `collapsed: false`
- Sidebar items MUST be sorted by plugin ID in alphabetical order (e.g. bilibili-downloader → electron-debug → emoji → gamepad → gba)
- Screenshot images should reference the raw GitHub URL from the README

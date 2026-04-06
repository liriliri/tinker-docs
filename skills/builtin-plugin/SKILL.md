---
name: builtin-plugin
description: Add a built-in plugin documentation page by reading source code from tinker/plugins.
---

# Add Built-in Plugin Documentation

When the user asks to add a built-in plugin doc (e.g. "添加内置插件 xxx 的文档", "add built-in plugin xxx doc"), follow these steps:

## 1. Read plugin info

Read the plugin's `package.json` from `tinker/plugins/tinker-<name>/package.json` to get:
- `tinker.name` — used as the English sidebar item text
- `tinker.locales.zh-CN.name` — used as the Chinese sidebar item text

Since built-in plugins typically don't have a README, read the source code under `tinker/plugins/tinker-<name>/src/` to understand the plugin's functionality:
- `package.json` `description` field for a brief summary
- Components (`src/renderer/components/`) for UI features
- Store (`src/renderer/store.ts`) for core logic and state
- Locale files (`src/renderer/i18n/locales/`) for feature labels
- Preload (`src/preload/index.ts`) for system-level capabilities
- Types (`src/renderer/types.ts`) for data structures

## 2. Create English doc

Create `docs/guide/built-in-plugins/<name>.md` with:
- Title: `# tinker-<name>`
- One-sentence description linking to [TINKER](https://github.com/liriliri/tinker)
- Screenshot: `![Screenshot](/<name_with_underscores>.png)` (referencing `docs/public/<name_with_underscores>.png`, use underscores instead of hyphens, e.g. `audio_editor.png`)
- Features section with key capabilities (use `**bold** —` format)
- Usage section with numbered steps

Refer to existing docs under `docs/guide/built-in-plugins/` for style reference.

## 3. Create Chinese doc

Create `docs/zh/guide/built-in-plugins/<name>.md` with the same structure translated to Chinese. Keep technical terms (e.g. Base64, TOTP, QR, SHA256, npm) untranslated.

## 4. Update sidebar config

In `docs/.vitepress/config.mts`, add an entry to BOTH sidebar sections:

- English sidebar (`'guide/'` → `Built-in Plugins` items array):
  ```js
  {
    text: '<tinker.name value>',
    link: '/guide/built-in-plugins/<name>',
  },
  ```

- Chinese sidebar (`'zh/guide/'` → `内置插件` items array):
  ```js
  {
    text: '<tinker.locales.zh-CN.name value>',
    link: '/zh/guide/built-in-plugins/<name>',
  },
  ```

## Key rules

- The sidebar item `text` MUST come from `package.json`: English uses `tinker.name`, Chinese uses `tinker.locales.zh-CN.name` (if it exists, otherwise fall back to `tinker.name`)
- The file name under `built-in-plugins/` should be the plugin name without the `tinker-` prefix (e.g. `tinker-base64` → `base64.md`)
- The sidebar category is `Built-in Plugins` (EN) / `内置插件` (ZH) with `collapsed: false`
- Sidebar items MUST be sorted by plugin ID in alphabetical order (e.g. ai-assistant → audio-editor → authenticator → base64)
- Screenshot images use absolute path `/<name_with_underscores>.png` referencing files in `docs/public/` (use underscores, e.g. `audio_editor.png`)
- Documentation content is generated from source code analysis, not from a README

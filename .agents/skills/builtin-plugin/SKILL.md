---
name: builtin-plugin
description: Add or update a built-in plugin documentation page from tinker/plugins, including the online launcher when the plugin has build:web.
---

# Add or Update Built-in Plugin Documentation

When the user asks to add or update a built-in plugin doc (e.g. "add built-in plugin xxx doc", "update xxx"), follow these steps.

If the doc and sidebar already exist and the task is only web support, skip to step 5.

## 1. Read plugin info

From `tinker/plugins/tinker-<name>/package.json`:

- `tinker.name`, `tinker.locales.zh-CN.name` (fallback to `tinker.name`)
- `scripts.build:web` — present means browser play is supported
- Online launcher copy: `tinker.description` when set, otherwise root `description`; plus `tinker.locales.zh-CN.description` and `tinker.category`

Built-in plugins usually have no README. Read `src/` for the UI. Layout is either flat or under `renderer/`:

- `src/components/` or `src/renderer/components/`
- `src/store.ts` or `src/renderer/store.ts`
- `src/i18n/en-US.json` and `zh-CN.json` (same paths under `renderer/` when that layout is used)
- `src/preload/index.ts` when the plugin has one
- `src/lib/` for non-UI logic

## 2. Create or update English doc

`docs/guide/built-in-plugins/<name>.md`:

- Title: `# tinker-<name>`
- One-sentence description linking to [TINKER](https://github.com/liriliri/tinker)
- Screenshot: `![Screenshot](/<name_with_underscores>.png)` in `docs/public/` (hyphens become underscores, e.g. `audio_editor.png`)
- Features (`**bold** —`) and numbered Usage

Match existing pages under `docs/guide/built-in-plugins/`.

## 3. Create or update Chinese doc

`docs/zh/guide/built-in-plugins/<name>.md`, same structure in Chinese. Keep technical terms (Base64, TOTP, QR, SHA256, npm) untranslated. Screenshot alt text: `![截图]`.

## 4. Update sidebar config (add only)

If the plugin is new, add to both sidebars in `docs/.vitepress/sidebar.mts` (`Built-in Plugins` / `内置插件`), sorted by plugin id. Use code-point order (`-` before letters):

```js
// enSidebar
{ text: '<tinker.name>', link: '/guide/built-in-plugins/<name>' }

// zhSidebar
{ text: '<tinker.locales.zh-CN.name>', link: '/zh/guide/built-in-plugins/<name>' }
```

Example: `ai-assistant` → `anniversary` → `archive` → `audio-editor`, and `white-noise` before `whiteboard`.

## 5. Online launcher (when supported)

Only if `scripts.build:web` exists. Also do this alone when an existing plugin gains `build:web`.

1. Copy `icon.png` → `docs/public/icons/<name>.png` (keep hyphens; this is not the screenshot path)
2. Upsert into `docs/.vitepress/theme/lib/onlinePlugins.ts` (`onlinePlugins`, same id sort as the sidebar):

```ts
{
  id: '<name>',
  name: '<tinker.name>',
  nameZh: '<tinker.locales.zh-CN.name>', // omit if same as name
  description: '<tinker.description, else package.json description>',
  descriptionZh: '<tinker.locales.zh-CN.description>',
  category: '<tinker.category>',
}
```

`icon` / `url` are derived from `id` (`/icons/<name>.png`, `https://tinker.liriliri.io/plugins/<name>`).

## Key rules

- File name is the plugin id without `tinker-` (`tinker-base64` → `base64.md`)
- Sidebar / online `name` fields come from `package.json` as above
- Docs come from source, not a README
- Screenshots use `/<underscores>.png`; launcher icons use `/icons/<hyphens>.png`

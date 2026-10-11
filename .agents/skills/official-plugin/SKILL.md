---
name: official-plugin
description: Add or update an official plugin documentation page to tinker-docs from tinker-plugins.
---

# Add or Update Official Plugin Documentation

When the user asks to add or update a plugin doc (e.g. "add xxx plugin doc", "update xxx readme"), follow these steps:

## 1. Read plugin info

From `tinker-plugins/packages/tinker-<name>/`:

- `package.json` — `tinker.name`, `tinker.locales.zh-CN.name` (fallback to `tinker.name`)
- `README.md` — doc content; also check for a browser play link

## 2. Create or update English doc

Create or update `docs/guide/official-plugins/<name>.md` based on the README. Adjust the install section to link TINKER and use a code block for the npm command.

## 3. Create or update Chinese doc

Create or update `docs/zh/guide/official-plugins/<name>.md` translated to Chinese. Keep technical terms (e.g. Chrome DevTools, WHOIS, npm) untranslated.

## 4. Update sidebar config (add only)

If the plugin is new, add to both sidebars in `docs/.vitepress/sidebar.mts` (`Official Plugins` / `官方插件`), sorted by plugin id:

```js
// enSidebar
{ text: '<tinker.name>', link: '/guide/official-plugins/<name>' }

// zhSidebar
{ text: '<tinker.locales.zh-CN.name>', link: '/zh/guide/official-plugins/<name>' }
```

## 5. Online launcher (when supported)

Only if the README has a browser play link (e.g. `https://tinker.liriliri.io/plugins/<name>`):

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
}
```

`icon` / `url` are derived from `id` (`/icons/<name>.png`, `https://tinker.liriliri.io/plugins/<name>`).

## Key rules

- File name is the plugin id without `tinker-` prefix (`tinker-whois` → `whois.md`)
- Sidebar / online `name` fields come from `package.json` as above
- Screenshots use the raw GitHub URL from the README

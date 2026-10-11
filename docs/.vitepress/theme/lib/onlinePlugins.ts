export const PLUGIN_CATEGORIES = [
  'dev',
  'file',
  'media',
  'productivity',
  'system',
  'entertainment',
] as const

export type PluginCategory = (typeof PLUGIN_CATEGORIES)[number]
export type PluginCategoryFilter = 'all' | PluginCategory

export interface OnlinePlugin {
  id: string
  name: string
  nameZh?: string
  description?: string
  descriptionZh?: string
  category: PluginCategory
}

export const onlinePlugins: OnlinePlugin[] = [
  {
    id: 'aquarium',
    name: 'Aquarium',
    nameZh: '水族箱',
    description: 'Desktop aquarium fish tank simulation',
    descriptionZh: '桌面鱼缸模拟',
    category: 'entertainment',
  },
  {
    id: 'color-bg',
    name: 'Color Background',
    nameZh: '炫彩背景',
    description: 'Generate colorful abstract backgrounds',
    descriptionZh: '生成彩色抽象背景图',
    category: 'media',
  },
  {
    id: 'emoji',
    name: 'Emoji',
    description: 'Search and copy emojis quickly',
    descriptionZh: '快速搜索并复制表情符号',
    category: 'productivity',
  },
]

export function pluginIcon(plugin: OnlinePlugin) {
  return `/icons/${plugin.id}.png`
}

export function pluginUrl(plugin: OnlinePlugin) {
  return `https://tinker.liriliri.io/plugins/${plugin.id}`
}

export const categoryLabels: Record<
  PluginCategoryFilter,
  { en: string; zh: string }
> = {
  all: { en: 'All', zh: '全部' },
  dev: { en: 'Dev', zh: '开发' },
  file: { en: 'File', zh: '文件' },
  media: { en: 'Media', zh: '多媒体' },
  productivity: { en: 'Productivity', zh: '效率' },
  system: { en: 'System', zh: '系统' },
  entertainment: { en: 'Entertainment', zh: '娱乐' },
}

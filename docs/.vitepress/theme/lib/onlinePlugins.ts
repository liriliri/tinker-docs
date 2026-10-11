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
  /** Defaults to plugin URL under /plugins/; use 'game' for /games/ */
  kind?: 'plugin' | 'game'
}

export const onlinePlugins: OnlinePlugin[] = [
  {
    id: '2048',
    name: '2048',
    description: 'Join the numbers and get to the 2048 tile!',
    descriptionZh: '合并数字，冲向 2048 方块！',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'aquarium',
    name: 'Aquarium',
    nameZh: '水族箱',
    description: 'Desktop aquarium fish tank simulation',
    descriptionZh: '桌面鱼缸模拟',
    category: 'entertainment',
  },
  {
    id: 'ball-maze',
    name: 'Ball Maze',
    nameZh: '滚球迷宫',
    description: 'Roll the ball through the maze and find the exit!',
    descriptionZh: '滚动小球穿越迷宫，找到出口！',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'checkers',
    name: 'Checkers',
    nameZh: '英式跳棋',
    description: 'Play English draughts against a friend or the computer.',
    descriptionZh: '和朋友或电脑下一盘英式跳棋。',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'chess',
    name: 'Chess',
    nameZh: '国际象棋',
    description: 'Play international chess against a friend or a thoughtful computer opponent.',
    descriptionZh: '和朋友或电脑下一盘国际象棋。',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'chinese-chess',
    name: 'Chinese Chess',
    nameZh: '中国象棋',
    description: 'Play Chinese chess against a friend or a thoughtful computer opponent.',
    descriptionZh: '和朋友或电脑下一盘中国象棋。',
    category: 'entertainment',
    kind: 'game',
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
  {
    id: 'gamepad',
    name: 'Gamepad',
    nameZh: '手柄测试',
    description: 'Test and visualize gamepad inputs',
    descriptionZh: '测试并可视化游戏手柄输入',
    category: 'system',
  },
  {
    id: 'gomoku',
    name: 'Gomoku',
    nameZh: '五子棋',
    description: 'Play five in a row against a friend or the computer.',
    descriptionZh: '和朋友或电脑对弈，连成五子即可获胜。',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'hanzi-converter',
    name: 'Hanzi Converter',
    nameZh: '汉字转换',
    description: 'Chinese character tools for pinyin and conversion',
    descriptionZh: '汉字拼音、大写金额、简繁转换工具',
    category: 'productivity',
  },
  {
    id: 'js13k',
    name: 'JS13K Games',
    nameZh: 'JS13K 游戏',
    description: 'Play curated JS13K games',
    descriptionZh: '畅玩精选 JS13K 游戏',
    category: 'entertainment',
  },
  {
    id: 'jump-jump',
    name: 'Jump Jump',
    nameZh: '跳一跳',
    description: 'Hold to charge, release to jump — land on the next platform!',
    descriptionZh: '长按蓄力，松手起跳，落上下一个台子！',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'life-progress',
    name: 'Life Progress',
    nameZh: '人生进度',
    description: 'Visualize life, year, month, week, and day progress',
    descriptionZh: '可视化人生、月份和每日进度',
    category: 'productivity',
  },
  {
    id: 'lunar-calendar',
    name: 'Lunar Calendar',
    nameZh: '万年历',
    description: 'A perpetual calendar with lunar dates, solar terms, Chinese holidays, and almanac details (gan-zhi, yi/ji, chong/sha)',
    descriptionZh: '支持农历、节气、法定节假日与黄历宜忌（干支、冲煞等）的万年历',
    category: 'productivity',
  },
  {
    id: 'mbti-test',
    name: 'MBTI Test',
    nameZh: 'MBTI 人格测试',
    description: 'MBTI personality type test',
    descriptionZh: 'MBTI 十六型人格测试工具',
    category: 'entertainment',
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    nameZh: '扫雷',
    description: 'Clear the minefield without detonating a bomb!',
    descriptionZh: '避开地雷，清空所有安全格子！',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'mouse-tester',
    name: 'Mouse Tester',
    nameZh: '鼠标测试',
    description: 'Test and visualize mouse inputs',
    descriptionZh: '测试并可视化鼠标输入',
    category: 'system',
  },
  {
    id: 'reversi',
    name: 'Reversi',
    nameZh: '黑白棋',
    description: 'Capture territory in the classic game of Reversi.',
    descriptionZh: '在经典黑白棋中包围并翻转对手的棋子。',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'screen-tester',
    name: 'Screen Tester',
    nameZh: '屏幕测试',
    description: 'Test screen for dead pixels, backlight bleed, and color issues',
    descriptionZh: '全屏检测屏幕坏点、漏光与色阶问题',
    category: 'system',
  },
  {
    id: 'spider-solitaire',
    name: 'Spider Solitaire',
    nameZh: '蜘蛛纸牌',
    description: 'Build complete suits from King to Ace in this classic card game.',
    descriptionZh: '经典纸牌游戏，凑齐 K 到 A 的同花顺即可获胜。',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    nameZh: '数独',
    description: 'Fill the grid so every row, column, and box contains 1–9.',
    descriptionZh: '在九宫格中填入 1–9，使每行、每列、每个宫格都不重复。',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'trap-the-cat',
    name: 'Trap the Cat',
    nameZh: '圈小猫',
    description: 'Click dots to trap the cat before it escapes!',
    descriptionZh: '点击圆点围住小猫，别让它跑到边缘！',
    category: 'entertainment',
    kind: 'game',
  },
  {
    id: 'typing-test',
    name: 'Typing Test',
    nameZh: '打字测速',
    description: 'Test and improve your typing speed',
    descriptionZh: '测试并提高你的打字速度',
    category: 'entertainment',
  },
  {
    id: 'white-noise',
    name: 'White Noise',
    nameZh: '白噪音',
    description: 'Play ambient white noise with visual effects',
    descriptionZh: '播放环境白噪音，配合视觉效果',
    category: 'entertainment',
  },
]

export function pluginIcon(plugin: OnlinePlugin) {
  return `/icons/${plugin.id}.png`
}

export function pluginUrl(plugin: OnlinePlugin) {
  if (plugin.kind === 'game') {
    return `https://tinker.liriliri.io/games/${plugin.id}/`
  }
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

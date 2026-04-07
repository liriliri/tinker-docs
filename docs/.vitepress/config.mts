import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'
import {
  kofi,
  wechatpay,
  logo,
  shareAlias,
  googleAnalytics,
} from './share/config.mjs'

const editLinkPattern =
  'https://github.com/liriliri/tinker-docs/edit/master/docs/:path'

const icon = (name: string) => {
  return fs.readFileSync(path.resolve(__dirname, `${name}.svg`), 'utf8')
}

export default defineConfig({
  title: 'TINKER',
  description: 'TINKER Documentation',
  lastUpdated: true,
  outDir: '../dist',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    logo,
    sidebar: {
      'guide/': [
        {
          text: 'Introduction',
          link: '/guide/',
        },
        {
          text: 'Quick Start',
          link: '/guide/quickstart',
        },
        {
          text: 'Built-in Plugins',
          collapsed: false,
          items: [
            {
              text: 'AI Assistant',
              link: '/guide/built-in-plugins/ai-assistant',
            },
            {
              text: 'AI Chat',
              link: '/guide/built-in-plugins/ai-chat',
            },
            {
              text: 'Audio Editor',
              link: '/guide/built-in-plugins/audio-editor',
            },
            {
              text: 'Authenticator',
              link: '/guide/built-in-plugins/authenticator',
            },
            {
              text: 'Base64',
              link: '/guide/built-in-plugins/base64',
            },
            {
              text: 'Calculation Pad',
              link: '/guide/built-in-plugins/calculation-pad',
            },
            {
              text: 'Calculator',
              link: '/guide/built-in-plugins/calculator',
            },
            {
              text: 'Calendar',
              link: '/guide/built-in-plugins/calendar',
            },
            {
              text: 'Calendar',
              link: '/guide/built-in-plugins/calendar',
            },
            {
              text: 'Camera',
              link: '/guide/built-in-plugins/camera',
            },
            {
              text: 'Clipboard',
              link: '/guide/built-in-plugins/clipboard',
            },
            {
              text: 'Clock',
              link: '/guide/built-in-plugins/clock',
            },
            {
              text: 'Code Formatter',
              link: '/guide/built-in-plugins/code-formatter',
            },
            {
              text: 'Code Image',
              link: '/guide/built-in-plugins/code-image',
            },
            {
              text: 'Color',
              link: '/guide/built-in-plugins/color',
            },
            {
              text: 'Config Editor',
              link: '/guide/built-in-plugins/config-editor',
            },
            {
              text: 'Disk Usage',
              link: '/guide/built-in-plugins/disk-usage',
            },
            {
              text: 'Duplicate Cleaner',
              link: '/guide/built-in-plugins/duplicate-cleaner',
            },
            {
              text: 'Duplicate Cleaner',
              link: '/guide/built-in-plugins/duplicate-cleaner',
            },
          ],
        },
        {
          text: 'Official Plugins',
          collapsed: false,
          items: [
            {
              text: 'WHOIS',
              link: '/guide/official-plugins/whois',
            },
            {
              text: 'Bilibili Downloader',
              link: '/guide/official-plugins/bilibili-downloader',
            },
            {
              text: 'Electron Debug',
              link: '/guide/official-plugins/electron-debug',
            },
            {
              text: 'Emoji',
              link: '/guide/official-plugins/emoji',
            },
            {
              text: 'Gamepad',
              link: '/guide/official-plugins/gamepad',
            },
            {
              text: 'GBA',
              link: '/guide/official-plugins/gba',
            },
            {
              text: 'Hanzi Converter',
              link: '/guide/official-plugins/hanzi-converter',
            },
            {
              text: 'NES',
              link: '/guide/official-plugins/nes',
            },
            {
              text: 'OCR',
              link: '/guide/official-plugins/ocr',
            },
            {
              text: 'Token Usage',
              link: '/guide/official-plugins/token-usage',
            },
            {
              text: 'Translate',
              link: '/guide/official-plugins/translate',
            },
            {
              text: 'Trending',
              link: '/guide/official-plugins/trending',
            },
            {
              text: 'Wallpaper',
              link: '/guide/official-plugins/wallpaper',
            },
            {
              text: 'White Noise',
              link: '/guide/official-plugins/white-noise',
            },
          ],
        },
      ],
    },
    socialLinks: [
      kofi,
      wechatpay,
      {
        icon: 'github',
        link: 'https://github.com/liriliri/tinker',
      },
    ],
    footer: {
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright © 2025-present liriliri',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/guide/' }],
      },
    },
    zh: {
      label: '中文',
      lang: 'zh',
      themeConfig: {
        nav: [{ text: '指南', link: '/zh/guide/' }],
        sidebar: {
          'zh/guide/': [
            {
              text: '前言',
              link: '/zh/guide/',
            },
            {
              text: '快速开始',
              link: '/zh/guide/quickstart',
            },
            {
              text: '内置插件',
              collapsed: false,
              items: [
                {
                  text: 'AI 助手',
                  link: '/zh/guide/built-in-plugins/ai-assistant',
                },
                {
                  text: 'AI 聊天',
                  link: '/zh/guide/built-in-plugins/ai-chat',
                },
                {
                  text: '音频编辑',
                  link: '/zh/guide/built-in-plugins/audio-editor',
                },
                {
                  text: '两步验证',
                  link: '/zh/guide/built-in-plugins/authenticator',
                },
                {
                  text: 'Base64',
                  link: '/zh/guide/built-in-plugins/base64',
                },
                {
                  text: '计算稿纸',
                  link: '/zh/guide/built-in-plugins/calculation-pad',
                },
                {
                  text: '计算器',
                  link: '/zh/guide/built-in-plugins/calculator',
                },
                {
                  text: '日历',
                  link: '/zh/guide/built-in-plugins/calendar',
                },
                {
                  text: '相机',
                  link: '/zh/guide/built-in-plugins/camera',
                },
                {
                  text: '剪贴板',
                  link: '/zh/guide/built-in-plugins/clipboard',
                },
                {
                  text: '时钟',
                  link: '/zh/guide/built-in-plugins/clock',
                },
                {
                  text: '代码格式化',
                  link: '/zh/guide/built-in-plugins/code-formatter',
                },
                {
                  text: '代码图片',
                  link: '/zh/guide/built-in-plugins/code-image',
                },
                {
                  text: '颜色',
                  link: '/zh/guide/built-in-plugins/color',
                },
                {
                  text: '配置编辑',
                  link: '/zh/guide/built-in-plugins/config-editor',
                },
                {
                  text: '磁盘空间分析',
                  link: '/zh/guide/built-in-plugins/disk-usage',
                },
                {
                  text: '重复文件清理',
                  link: '/zh/guide/built-in-plugins/duplicate-cleaner',
                },
              ],
            },
            {
              text: '官方插件',
              collapsed: false,
              items: [
                {
                  text: 'WHOIS 查询',
                  link: '/zh/guide/official-plugins/whois',
                },
                {
                  text: 'B站视频下载',
                  link: '/zh/guide/official-plugins/bilibili-downloader',
                },
                {
                  text: 'Electron 调试',
                  link: '/zh/guide/official-plugins/electron-debug',
                },
                {
                  text: 'Emoji',
                  link: '/zh/guide/official-plugins/emoji',
                },
                {
                  text: '手柄测试',
                  link: '/zh/guide/official-plugins/gamepad',
                },
                {
                  text: 'GBA',
                  link: '/zh/guide/official-plugins/gba',
                },
                {
                  text: '汉字转换',
                  link: '/zh/guide/official-plugins/hanzi-converter',
                },
                {
                  text: '红白机',
                  link: '/zh/guide/official-plugins/nes',
                },
                {
                  text: 'OCR 识别',
                  link: '/zh/guide/official-plugins/ocr',
                },
                {
                  text: 'Token 统计',
                  link: '/zh/guide/official-plugins/token-usage',
                },
                {
                  text: '翻译',
                  link: '/zh/guide/official-plugins/translate',
                },
                {
                  text: '热搜榜',
                  link: '/zh/guide/official-plugins/trending',
                },
                {
                  text: '壁纸',
                  link: '/zh/guide/official-plugins/wallpaper',
                },
                {
                  text: '白噪音',
                  link: '/zh/guide/official-plugins/white-noise',
                },
              ],
            },
          ],
        },
        outlineTitle: '在这一页上',
        editLink: {
          pattern: editLinkPattern,
          text: '提出修改意见',
        },
        lastUpdatedText: '修改日期',
        footer: {
          message: '基于 AGPL-3.0 许可发布',
          copyright: '版权所有 © 2025 至今 liriliri',
        },
      },
    },
  },
  vite: {
    resolve: {
      alias: [shareAlias],
    },
  },
  head: googleAnalytics('G-PSDF66BGWZ'),
})

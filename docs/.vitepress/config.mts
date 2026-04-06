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
              text: 'Audio Editor',
              link: '/guide/built-in-plugins/audio-editor',
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

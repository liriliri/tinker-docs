---
layout: page
title: 为所有人打造的工具箱
---
<script setup>
import AppHome from '@share/components/AppHome.vue'
import code from '@theme/lib/code'

const version = "2.3.0"

const downloads = [
  {
    key: 'windows',
    name: 'Windows',
    ext: '.exe',
    href: `https://release.liriliri.io/tinker/TINKER-${version}-win-x64.exe`,
  },
  {
    key: 'mac',
    name: 'macOS Apple silicon',
    ext: '.dmg',
    href: `https://release.liriliri.io/tinker/TINKER-${version}-mac-arm64.dmg `,
  },
  {
    key: 'mac_x64',
    name: 'macOS Intel chip ',
    ext: '.dmg',
    href: `https://release.liriliri.io/tinker/TINKER-${version}-mac-x64.dmg`,
  },
  {
    key: 'linux_deb',
    name: 'Linux DEB',
    ext: '.deb',
    href: `https://release.liriliri.io/tinker/TINKER-${version}-linux-amd64.deb`,
  },
  {
    key: 'linux_rpm',
    name: 'Linux RPM',
    ext: '.rpm',
    href: `https://release.liriliri.io/tinker/TINKER-${version}-linux-x86_64.rpm`,
  }
]

const features = [
  {
    title: '快捷呼出',
    desc: '快捷键唤出，搜索工具回车即开，用完主窗口自动隐藏。',
    image: '/photo_develop.png',
  },
  {
    title: 'Agent 可用',
    desc: '提供 CLI、MCP 与 Agent Skills，让 AI 直接打开和调用工具。',
    image: '/cursor.png',
  },
  {
    title: '开箱即用',
    desc: '内置大量高质量工具，覆盖编码、图片、文件、终端等日常场景。',
    image: '/code_editor.png',
  },
  {
    title: '本地优先',
    desc: '工具在本地运行，数据不出本机，可自由导出备份，日常使用无需联网。',
    image: '/authenticator.png',
  },
  {
    title: '自由扩展',
    desc: '支持安装官方、第三方、网页与游戏插件，一键扩充工具箱。',
    image: '/drawio.png',
  },
]
</script>

<AppHome 
  title="TINKER 桌面工具箱" 
  subtitle="TINKER 是一个集合了多款效率小应用的工具箱。"
  :code="code"
  :version="version"
  :downloads="downloads"
  :features="features"
  :changelogUrl="`https://github.com/liriliri/tinker/releases/tag/v${version}`"
/>

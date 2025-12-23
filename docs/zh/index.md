---
layout: page
title: 为所有人打造的工具箱
---
<script setup>
import AppHome from '@share/components/AppHome.vue'
import code from '@theme/lib/code'

const version = "0.3.0"

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
    key: 'linux',
    name: 'Linux',
    ext: '.AppImage',
    href: `https://release.liriliri.io/tinker/TINKER-${version}-linux-x86_64.AppImage`,
  }
]

const features = [
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

---
layout: page
title: Toolbox for Everyone
---
<script setup>
import AppHome from '@share/components/AppHome.vue'
import code from '@theme/lib/code'

const version = "0.8.0"

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
  {
    title: 'Easy to Use',
    desc: 'Quickly launch with a shortcut, search and open tools with Enter, and auto-hide after use.',
    image: '/calculation_pad.png'
  },
  {
    title: 'High Quality',
    desc: 'Built-in high-quality plugins for common tasks.',
    image: '/image_compressor.png'
  },
  {
    title: 'Extensible',
    desc: 'Supports installing excellent third-party tools.',
    image: '/drawio.png'
  }
]
</script>

<AppHome 
  title="TINKER Desktop Toolbox" 
  subtitle="TINKER is a toolbox that brings together a variety of productivity tools."
  :code="code"
  :version="version"
  :downloads="downloads"
  :features="features"
  :changelogUrl="`https://github.com/liriliri/tinker/releases/tag/v${version}`"
/>

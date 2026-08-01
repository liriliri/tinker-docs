---
layout: page
title: Toolbox for Everyone
---
<script setup>
import AppHome from '@share/components/AppHome.vue'
import code from '@theme/lib/code'

const version = "2.1.1"

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
    title: 'Instant Launch',
    desc: 'Launch with a shortcut, search and open tools with Enter, then auto-hide when done.',
    image: '/photo_develop.png',
  },
  {
    title: 'Agent Ready',
    desc: 'CLI, MCP, and Agent Skills let AI open and call tools directly.',
    image: '/cursor.png',
  },
  {
    title: 'Ready Out of the Box',
    desc: 'A large set of high-quality built-in tools covering coding, images, files, terminal, and more.',
    image: '/code_editor.png',
  },
  {
    title: 'Local First',
    desc: 'Tools run on your device, data stays local and can be freely exported for backup, and everyday use works offline.',
    image: '/authenticator.png',
  },
  {
    title: 'Freely Extensible',
    desc: 'Install official, third-party, web, and game plugins to grow the toolbox.',
    image: '/drawio.png',
  },
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

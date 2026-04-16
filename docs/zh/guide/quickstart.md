# 快速开始

## 安装

TINKER 支持 [Windows x64](https://release.liriliri.io/tinker/TINKER-1.10.0-win-x64.exe)、[macOS Apple silicon](https://release.liriliri.io/tinker/TINKER-1.10.0-mac-arm64.dmg)、[macOS Intel chip](https://release.liriliri.io/tinker/TINKER-1.10.0-mac-x64.dmg) 和 [Linux](https://release.liriliri.io/tinker/TINKER-1.10.0-linux-x86_64.AppImage) 平台，下载安装后直接点击桌面图标开始使用。

## 基本用法

TINKER 的设计理念是尽可能简单高效：

1. 使用快捷键呼出 TINKER。
2. 在搜索栏中输入需要的工具名称。
3. 按回车键打开选中的工具。
4. 使用完毕后，TINKER 会自动隐藏。

:::info 你可以在设置中自定义快捷键。
:::

## 用户界面

TINKER 的主界面由搜索栏和可用工具列表组成。只需开始输入即可过滤工具，按回车键启动所需工具。

## 安装插件

除了内置工具外，TINKER 还支持通过 npm 安装更多插件：

```bash
npm i -g tinker-whois
npm i -g tinker-drawio
npm i -g tinker-deepseek
```

安装完成后，插件会自动出现在搜索界面中。

:::info 网页类插件（如 tinker-deepseek）不支持离线使用。
:::

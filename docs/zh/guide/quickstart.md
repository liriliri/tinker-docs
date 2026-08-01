# 快速开始

## 安装

TINKER 支持 [Windows x64](https://release.liriliri.io/tinker/TINKER-2.1.1-win-x64.exe)、[macOS Apple silicon](https://release.liriliri.io/tinker/TINKER-2.1.1-mac-arm64.dmg)、[macOS Intel chip](https://release.liriliri.io/tinker/TINKER-2.1.1-mac-x64.dmg)、[Linux DEB](https://release.liriliri.io/tinker/TINKER-2.1.1-linux-amd64.deb) 和 [Linux RPM](https://release.liriliri.io/tinker/TINKER-2.1.1-linux-x86_64.rpm) 平台，下载安装后直接点击桌面图标开始使用。

## 基本用法

TINKER 的设计理念是尽可能简单高效：

1. 使用快捷键呼出 TINKER。
2. 在搜索栏中输入需要的工具名称。
3. 按回车键打开选中的工具。
4. 使用完毕后，TINKER 会自动隐藏。

:::info 你可以在设置中自定义快捷键。
:::

## 用户界面

TINKER 的主界面由搜索栏和可用工具列表组成。在搜索栏输入即可过滤工具（支持拼音匹配），按回车打开当前列表中的第一个结果。单击工具图标可打开该工具，双击则以独立新窗口打开。

在工具图标上右键可进行更多操作。你可以打开或关闭工具，选择「新窗口打开」，以及将常用工具置顶，或隐藏暂不需要的工具（隐藏后仍可通过搜索找到并取消隐藏）。也可以创建系统快捷方式，方便从桌面或其它启动器直接打开。

菜单中还可开启「自动分离窗口」，使该工具每次都以独立窗口打开；开启「允许后台运行」后，关闭窗口仍可保持插件进程，并可进一步设置「启动时自动运行」。右上角的更多菜单则可刷新插件列表、全部关闭正在运行的插件，或在打开某个工具后分离窗口、导出 / 导入 / 清除该插件的本地数据。

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

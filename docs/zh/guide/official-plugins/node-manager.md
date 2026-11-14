# tinker-node-manager

基于 [fnm](https://github.com/Schniz/fnm)（通过 `fnm-static`）的 Node.js 版本管理插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-node-manager/screenshot.png)

## 功能特性

- **浏览版本** — 合并展示已安装与远程版本，已安装优先
- **安装 / 卸载** — 在每行直接安装或卸载 Node.js 版本
- **设为默认** — 将已安装版本设为 fnm 默认（高亮当前行）
- **配置终端** — 使用内置二进制写入 fnm shell 初始化（无需单独安装 fnm）
- **筛选与刷新** 版本列表
- **MCP 工具** `list_versions`、`list_remote_versions`、`install_version`、`uninstall_version`、`set_default`，可供 agent / CLI 自动化

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-node-manager
```

## 环境要求

版本由内置的 fnm 二进制管理。Node 安装目录位于 fnm 数据目录（通常为 `~/.local/share/fnm`）。若要让终端中的 `node` 跟随默认版本，请在工具栏使用 **配置终端**（将 fnm 链接到 `~/.tinker/tinker-node-manager/bin` 并写入 shell rc），然后打开新终端。

Shell 目标：**zsh** → `~/.zshrc`，**bash** → `~/.bashrc`，**fish** → `~/.config/fish/config.fish`，**Windows** → PowerShell profile（`Documents/PowerShell/Microsoft.PowerShell_profile.ps1`，或已存在的 Windows PowerShell profile）。

## 使用方法

1. 在表格中浏览已安装与远程 Node.js 版本
2. 对可用版本点击 **安装**，或对已安装版本点击 **卸载**
3. 对已安装版本点击 **设为默认**（当前默认版本会高亮）
4. 使用一次 **配置终端**，使新 shell 能加载 fnm
5. 按版本、别名或 LTS 名称筛选；刷新以重新加载远程版本

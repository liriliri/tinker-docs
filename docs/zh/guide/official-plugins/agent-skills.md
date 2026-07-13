# tinker-agent-skills

[TINKER](https://github.com/liriliri/tinker) 的 Agent 技能管理插件。浏览、安装并关联 `~/.agents/skills` 下的本地 Agent 技能。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-agent-skills/screenshot.png)

## 功能特性

- **浏览与搜索**：查看 `~/.agents/skills` 下已安装的技能
- **从 GitHub 安装**：支持 `owner/repo` 和 `owner/repo@skill` 简写
- **技能市场**：搜索并一键安装
- **本地安装**：支持 ZIP 压缩包或技能文件夹
- **按 Agent 关联**：支持 CodeBuddy、Claude、Codex 和 OpenCode
- **MCP 工具**：可在 CLI 中列出、关联和安装技能

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-agent-skills
```

## 使用方法

1. 浏览已安装技能，并按名称或描述搜索
2. 点击技能，为各个编码 Agent 关联或取消关联
3. 使用 **Add** 从本地文件、技能市场或 GitHub 安装
4. 安装或更改 Agent 关联后刷新列表

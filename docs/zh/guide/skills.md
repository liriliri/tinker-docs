# 配合 AI 使用

TINKER 可以给 Cursor、Claude Code 等 AI 客户端安装技能说明，让它们学会通过命令行打开插件、查看状态，并调用插件的 MCP 工具。安装后，AI 会按技能指引执行 `tinker` 命令，而不是猜测界面操作。

![示例](/cursor.png)

使用前请先完成 [命令行](/zh/guide/cli) 安装。

## 安装

在托盘图标上右键，选择 **安装 Agent 技能...**。TINKER 会将技能写入 `~/.agents/skills/tinker/`；若尚未安装命令行，也会一并安装。

安装成功后，在支持技能的客户端中即可发现 `tinker`。以 Cursor 为例，Agent 会按任务自动匹配技能，也可以在对话里输入 `/tinker` 手动调用。

## 工作方式

技能本身是一份给 AI 看的说明。加载后，通常会先查看内置技能列表，再按任务读取对应指南：

```bash
tinker skills list              # 列出内置技能
tinker skills path core         # 核心用法：list / open / close / ps 等
tinker skills path mcp          # 调用插件 MCP 工具，或接入 MCP 客户端
tinker skills path create       # 从模板创建新插件
tinker skills path debug        # 用 CDP + agent-browser 调试插件界面
```

`tinker skills path <name>` 会打印该技能所在目录，AI 再阅读其中的 `SKILL.md` 并按说明操作。日常让 AI「打开某个工具」「调用某个插件」时，一般会走到 **core**；需要程序化调用工具时再加载 **mcp**。

## 常见用法

直接向 AI 描述你的目标即可，例如：

- 用 TINKER 打开 JSON 编辑器
- 列出已安装插件，并打开正则测试工具
- 调用某个带 MCP 的插件完成具体操作

AI 会先确认 `tinker` 可用，必要时用 `tinker list` 查找插件，再执行 `tinker open` 等命令。若提示找不到命令或无法连接，请回到 [命令行](/zh/guide/cli) 检查安装，并确认 TINKER 可以正常启动。

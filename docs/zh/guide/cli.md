# 命令行

TINKER 附带 `tinker` 命令行工具，可在终端中打开插件、查看运行状态，并配合 AI Agent 调用插件能力。应用未启动时，多数命令会自动拉起 TINKER。

## 安装

安装 TINKER 桌面应用后，在托盘图标上右键，选择 **安装命令行...**。macOS / Linux 会将命令链接到 `/usr/local/bin`（可能需要管理员权限），Windows 会把 CLI 所在目录加入用户 PATH。

安装完成后重新打开终端，执行：

```bash
tinker --version
```

若提示找不到命令，请确认安装步骤已完成，并重启终端后再试。

## 基本用法

```bash
tinker list                 # 列出已安装插件
tinker open json-editor     # 打开插件（独立窗口）
tinker ps                   # 查看正在运行的插件
tinker close json-editor    # 关闭插件
tinker restart json-editor  # 重启插件
tinker launch               # 启动 TINKER
tinker quit                 # 退出 TINKER
```

插件名可使用短名称（如 `json-editor`）或完整 id（如 `tinker-json-editor`），命令行会自动补全前缀。`list` 输出中带 `[mcp]` 的插件支持通过命令行调用其 MCP 工具；带 `[background]` 表示已开启「允许后台运行」。

若插件已开启后台运行，也可以无窗口启动：

```bash
tinker open json-editor --headless
```

## 调用 MCP 工具

带 `[mcp]` 标记的插件可先打开，再列出或调用工具：

```bash
tinker open json-editor
tinker tools json-editor
tinker call json-editor --tool <工具名> --args '{}'
```

也可以用 `tinker mcp <plugin>` 以 stdio 方式启动该插件的 MCP 服务，供 Cursor 等客户端接入。调用前请确保目标插件已在运行。

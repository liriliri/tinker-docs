# tinker-agent-pet

基于 [Petdex](https://petdex.dev) 的桌宠插件。浏览、安装并在桌面上运行动画桌宠。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-agent-pet/screenshot.png)

## 功能特性

- **Petdex 图库** — 按热度、时间或类型搜索、筛选和浏览宠物
- **本地安装** — 下载宠物包并管理已安装的桌宠
- **桌面宠物** — 置顶悬浮窗口，支持拖拽、点击动作、缩放和不透明度
- **Agent Hooks** — 从 CodeBuddy、Claude、Codex、Cursor 等触发宠物动画
- **MCP Tools** — 提供 `play_action`、`list_actions`、`get_status`，供 Agent 与 CLI 调用
- **后台模式** — 配合 Tinker 后台运行 / 开机启动，保持桌宠常驻

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-agent-pet
```

## 使用方法

1. 在图库中浏览并下载喜欢的宠物
2. 点击 **Enable** 打开桌面桌宠
3. 拖拽移动；点击切换动画；在 Settings 中调整大小和不透明度
4. 打开 **Agent Hooks**，将编码 Agent 事件映射到宠物动作，然后 Apply
5. 可选开启 **Run in Background** 和 **Run at Startup**，以便启动时恢复桌宠

## MCP

插件运行时：

```bash
tinker call tinker-agent-pet --tool list_actions
tinker call tinker-agent-pet --tool play_action --args '{"action":"waving"}'
tinker call tinker-agent-pet --tool play_action --args '{"action":"running","loop":true}'
tinker call tinker-agent-pet --tool get_status
```

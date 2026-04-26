# tinker-agent-notification

编码 Agent 提示音插件，允许你为编码 Agent 的事件（如会话开始、提交提示和停止）配置提示音。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-agent-notification/screenshot.png)

## 功能特性

- **多 Agent 支持**：CodeBuddy、Claude、Codex 等
- **5 套内置音效包**，支持自定义音频文件
- **4 种事件触发**：就绪、工作、停止、权限请求
- **逐事件开关**：可单独启用/禁用各个通知

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-agent-notification
```

## 使用方法

1. 从下拉菜单中选择编码 Agent
2. 选择音效包或使用自定义音频文件
3. 切换需要通知的事件开关
4. 点击"Apply"保存配置

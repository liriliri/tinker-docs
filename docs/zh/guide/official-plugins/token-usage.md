# tinker-token-usage

Token 用量统计插件，基于 [ccusage](https://github.com/ryoppippi/ccusage) 可视化 Claude Code 和 Codex 的 Token 使用情况。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-token-usage/screenshot.png)

## 功能特性

- **用量概览** — 显示输入 Token、输出 Token、总 Token 和会话数统计卡片
- **每日图表** — 按日展示 Token 用量趋势图
- **多数据源** — 支持切换不同数据源（Claude Code、Codex 等）
- **系列切换** — 点击统计卡片可显示或隐藏对应图表数据
- **双语界面** — 支持中文和英文
- **深色模式** — 支持深色主题

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-token-usage
```

## 使用方法

1. 打开插件后自动加载 Token 用量数据
2. 通过顶部下拉菜单切换数据源
3. 查看统计卡片了解总体用量
4. 点击卡片切换图表中对应数据系列的显示
5. 点击刷新按钮更新数据

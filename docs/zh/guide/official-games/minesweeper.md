# tinker-minesweeper

避开地雷，清空所有安全格子！一款 [TINKER](https://github.com/liriliri/tinker) 复古风益智游戏插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-minesweeper/screenshot.png)

## 特性

- **经典复古外观** — 手绘风格的 Windows XP 美学，带有凸起边框、凹陷显示屏和标志性的笑脸按钮
- **三种难度级别** — 初级 (9x9)、中级 (16x16) 和专家 (16x30)
- **首次点击安全** — 地雷在你第一次点击后才会放置，开局永远不会踩雷
- **智能自动展开** — 点击空格会自动展开所有相邻的安全格子并显示数字提示
- **多样操作方式** — 完整的键盘快捷键、鼠标和触屏支持，长按标记地雷
- **双语支持** — 完整的中英文界面本地化

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-minesweeper
```

## 玩法

1. 在 TINKER 中打开 **扫雷** 插件
2. 点击任意格子翻开它 — 数字表示附近有多少颗地雷
3. 长按或右键点击可疑的格子**插旗**标记，再次右键标记为未知
4. 使用**双击**（中键或 Ctrl+点击已显示数字的格子）自动翻开所有相邻格子（当已放置足够旗子时）
5. 翻开所有安全格子且不踩雷 — 踩到地雷可就**熄灯了**！

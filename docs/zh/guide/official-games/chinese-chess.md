# tinker-chinese-chess

一款精致的 3D 中国象棋游戏，基于 Three.js 构建，适用于 [TINKER](https://github.com/liriliri/tinker)。

![截图](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-chinese-chess/screenshot.png)

## 特性

- **经典象棋规则** — 标准 9×10 棋盘，支持九宫、楚河汉界、将帅对面、将军、将死与困毙
- **多种玩法** — 本地双人对战，或挑战初级、稳健、大师三种难度的电脑对手
- **智能电脑对手** — 开局库、Alpha-Beta 搜索、迭代加深与着法排序
- **立体棋盘** — 木质纹理棋盘与棋子，落子动画、接触阴影与轨道视角控制
- **灵活操作** — 支持鼠标、触屏、键盘、WASD 与手柄，并附带走子与吃子音效

## 安装

直接在[浏览器](https://tinker.liriliri.io/games/chinese-chess/)中体验，或通过 TINKER 安装：从 `https://tinker.liriliri.io/` 下载，然后运行 `npm i -g tinker-chinese-chess`。

## 玩法

1. 选择本地双人对战或人机对战，并选择难度。
2. 点击棋子查看合法着法，再点击高亮位置落子。
3. 使用**方向键**、**WASD** 或**手柄**移动光标，按 **Space** 或 **Enter** 确认。
4. 拖动棋盘旋转视角，或使用鼠标右键平移。

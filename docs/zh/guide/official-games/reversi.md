# tinker-reversi

一款精致的 3D 黑白棋游戏，基于 Three.js 构建，适用于 [TINKER](https://github.com/liriliri/tinker)。

![截图](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-reversi/screenshot.png)

## 安装

直接在[浏览器](https://tinker.liriliri.io/games/reversi/)中体验，或通过 TINKER 安装：从 `https://tinker.liriliri.io/` 下载，然后运行 `npm i -g tinker-reversi`。

## 特性

- **经典黑白棋规则** — 标准 8×8 棋盘，支持合法着法提示、自动跳过、翻子与终局计分
- **多种玩法** — 本地双人对战，或挑战简单、普通、困难三种难度的电脑对手
- **灵活操作** — 支持鼠标、触屏、键盘与手柄
- **沉浸式 3D 棋盘** — 纹理绒面、木质边框、光照、阴影、反射与落子动画
- **双语界面** — 支持英文与简体中文

## 玩法

1. 选择本地双人对战或人机对战，并选择难度。
2. 在高亮格子落子，包围并翻转对手的棋子。
3. 点击格子，或用方向键、WASD、手柄移动光标。
4. 按 **Space** 或 **Enter** 落子。黑方先行。
5. 若没有合法着法，将自动跳过回合。
6. 双方都无法落子时，棋子较多的一方获胜。

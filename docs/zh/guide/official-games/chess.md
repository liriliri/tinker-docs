# tinker-chess

一款精致的 3D 国际象棋游戏，基于 Three.js 构建，适用于 [TINKER](https://github.com/liriliri/tinker)。

![截图](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-chess/screenshot.png)

## 特性

- **经典国际象棋规则** — 标准 8×8 棋盘，支持王车易位、吃过路兵、升变、将军、将死与逼和
- **公平和棋** — 三次重复局面、五十步规则以及子力不足终局
- **多种玩法** — 本地双人对战，或挑战初级、稳健、大师三种难度的电脑对手
- **智能电脑对手** — Alpha-Beta 搜索、迭代加深、置换表与着法排序
- **立体棋盘** — 精细棋子、反射桌面、光照、走子动画与轨道视角控制
- **灵活操作** — 支持鼠标、触屏、键盘与 WASD，并附带悔棋与走子音效
- **记住选择** — 自动保存模式与难度设置
- **双语界面** — 支持英文与简体中文

## 安装

直接在[浏览器](https://tinker.liriliri.io/games/chess/)中体验，或通过 TINKER 安装：从 `https://tinker.liriliri.io/` 下载，然后运行 `npm i -g tinker-chess`。

## 玩法

1. 选择本地双人对战或人机对战，并选择难度。
2. 点击棋子查看合法着法，再点击高亮格子落子。
3. 使用**方向键**或 **WASD** 移动光标，按 **Space** 或 **Enter** 确认。
4. 拖动棋盘旋转视角，或使用鼠标右键平移。
5. 按 **U** 悔棋，**R** 重新开始，或 **Escape** 打开菜单。白方先行。

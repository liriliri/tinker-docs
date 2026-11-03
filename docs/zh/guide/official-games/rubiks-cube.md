# tinker-rubiks-cube

拖拽转层玩 3D 魔方，打乱计时，挑战最佳成绩。一款适用于 [TINKER](https://github.com/liriliri/tinker) 的触感魔方益智游戏。

![截图](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-rubiks-cube/screenshot.png)

## 亮点

- **3×3 与 4×4** — 随时切换尺寸继续练习
- **自然操作** — 拖拽一层转动，拖拽空白处环视魔方
- **计时复原** — 打乱后开始计时，挑战本地保存的最佳成绩
- **自动复原提示** — 点亮灯泡观看慢速解法，再点一次停止
- **满足感反馈** — 转动音效、胜利短音，复原后还有庆祝旋转
- **双语界面** — 英文与简体中文

4×4 自动复原使用独立 TypeScript 移植的 Shuang Chen TPR 三相归约（运行时构建表；3×3 收尾经由 cubejs）。未引入 csTimer / GWT 源码。

## 安装

直接在[浏览器](https://tinker.liriliri.io/games/rubiks-cube/)中游玩，或通过 TINKER 安装：从 `https://tinker.liriliri.io/` 下载，然后运行 `npm i -g tinker-rubiks-cube`。

## 玩法

1. 在 TINKER 中打开**魔方**插件
2. 选择尺寸（**3** 或 **4**），然后点击**打乱**（在已复原状态也可按 **Space**）
3. **拖拽一层**转动；**拖拽背景**旋转视角
4. 也可使用键盘面键（**R / L / U / D / F / B**，按住 **Shift** 反向）
5. 点击**灯泡**观看慢速自动复原演示；再点一次停止
6. 复原魔方以停止计时 — 尝试打破最佳成绩！

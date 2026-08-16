# tinker-aquarium

TINKER 桌面水族箱插件，渲染玻璃鱼缸、实时水面、程序化礁石和游动的鱼。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-aquarium/screenshot.png)

## 功能特性

- **3D 玻璃鱼缸**，支持轨道相机，基于 [three.js](https://threejs.org/)
- **可交互水面** — 拖动水面产生涟漪；附近的鱼会受惊游开
- **焦散与折射**，作用于沙子、玻璃、礁石和气泡
- **鱼类** — 金鱼、神仙鱼、孔雀鱼和霓虹灯鱼，数量可调
- **程序化礁石**，包含珊瑚、碎石、水草和玻璃弹珠，可通过种子重新生成
- **沙丘与气泡柱**会随每次礁石布局变化
- **光照与视角**会在会话间记住

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-aquarium
```

## 使用方法

1. 用鼠标环绕观察鱼缸；在水面上拖动以产生涟漪
2. 将鼠标移到窗口上，点击右上角的设置按钮
3. 调整光照、鱼类数量、渲染缩放，以及礁石密度、大小和鲜艳度
4. 点击 **Regenerate** 生成新的礁石、沙子和气泡布局

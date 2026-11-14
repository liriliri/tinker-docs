# tinker-vrm-viewer

基于 [three.js](https://threejs.org/) 与 [@pixiv/three-vrm](https://github.com/pixiv/three-vrm) 的 VRM 角色预览插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-vrm-viewer/screenshot.png)

## 功能特性

- **打开 / 拖放** `.vrm` 模型（支持 VRM 0.x 与 1.0）
- **预设 VRMA 动画** — 加载时播放一次出场，随后循环 idle / wait
- **轨道控制**，支持相机复位与自动旋转
- 角色脚下的 **接触阴影**
- 有数据时显示 **模型元信息**（名称、版本、作者）

## 安装

直接在[浏览器](https://tinker.liriliri.io/plugins/vrm-viewer)中体验，或通过 [TINKER](https://tinker.liriliri.io/) 安装：

```bash
npm i -g tinker-vrm-viewer
```

## 使用方法

1. 将 `.vrm` 文件拖放到窗口，或点击打开
2. 用鼠标旋转视角；滚轮缩放
3. 使用工具栏复位相机、切换自动旋转、打开其他文件或关闭

# tinker-3d-viewer

基于 [Google `<model-viewer>`](https://modelviewer.dev/) 和 [three.js](https://threejs.org/) 的 3D 模型预览插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-3d-viewer/screenshot.png)

## 功能特性

- **多格式支持** — GLB / glTF、FBX、OBJ、STL、PLY、DAE、3MF，以及 ZIP / 文件夹
- **拖放**或通过文件 / 文件夹选择器打开模型
- 非 GLB 源文件经 three.js loader **自动转换为 GLB**
- **轨道视角**：自动旋转、动画播放、相机重置
- **第一人称视角**：WASD 移动与鼠标视角（点击锁定指针）
- **视角模式持久化**，跨会话记住

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-3d-viewer
```

## 使用方法

1. 通过拖放或工具栏打开按钮加载模型
2. 用鼠标进行轨道旋转，或从工具栏切换到第一人称视角
3. 第一人称模式下，点击视图锁定鼠标，使用 **WASD** 移动，按 **Esc** 解锁
4. 在工具栏中切换自动旋转 / 动画、重置相机，或进入全屏

# Live2D 桌宠

一款用于 [TINKER](https://tinker.liriliri.io/) 的 Live2D 桌宠插件。导入本地 Cubism 2 / 3–4 模型，以置顶窗口形式在桌面运行。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-live2d/screenshot.png)

## 功能特性

- **本地模型** — 支持 Cubism 2（`model.json` / `index.json`）和 Cubism 3–4（`.model3.json`），可通过拖放或文件选择器导入
- **预览与命名** — 导入时提供实时预览，并可编辑显示名称
- **桌面宠物** — 透明置顶窗口；可拖动移动；在设置中调整缩放和不透明度
- **视线追踪** — 目光跟随光标；指针离开时复位

## 安装

首先，下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行以下命令：

```bash
npm i -g tinker-live2d
```

## 使用方法

1. 将模型文件夹（或入口 `.json`）拖到窗口上，或点击 **添加模型**
2. 预览模型，可选编辑名称，然后点击 **添加**
3. 在卡片上点击 **启用**，即可在桌面显示桌宠
4. 拖动桌宠可移动位置；在设置中调整大小、不透明度和置顶

模型保存在 `~/.tinker/tinker-live2d/models/` 目录下。

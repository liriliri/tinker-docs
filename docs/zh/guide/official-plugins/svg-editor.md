# tinker-svg-editor

基于 [`@svgedit/svgcanvas`](https://www.npmjs.com/package/@svgedit/svgcanvas) 的 [TINKER](https://github.com/liriliri/tinker) SVG 编辑插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-svg-editor/screenshot.png)

## 功能特性

- **绘制工具** — 选择、平移、铅笔、直线、矩形、椭圆、路径、文本、缩放
- **填充与描边** — 颜色色块、交换，以及底部调色板
- **画布尺寸** — 可在工具栏中编辑
- **元素编辑** — 描边宽度、矩形圆角、文本样式
- **排列** — 通过右键菜单对齐、上移 / 下移、组合 / 取消组合
- **撤销 / 重做**，以及剪切 / 复制 / 粘贴 / 复制副本
- **打开与保存** SVG 文件，**导出 PNG**，以及编辑原始 SVG 源码

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-svg-editor
```

## 使用方法

1. 使用左侧工具栏选择绘制工具，或按快捷键，如 `V`（选择）、`H`（平移）、`R`（矩形）、`O`（椭圆）
2. 点击填充 / 描边色块或调色板设置颜色（Shift + 点击调色板色块可设置描边）
3. 点击工具栏中的画布尺寸标签以调整文档大小
4. 右键选中元素可对齐、调整层级、组合或取消组合
5. 使用 **打开** / **保存** 处理 SVG 文件，使用 **导出 PNG** 得到位图副本，或使用 **源码** 编辑 SVG 标记

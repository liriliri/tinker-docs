# tinker-ocr

OCR 文字识别插件，基于 Tesseract.js 从图片中提取文字，支持多语言识别。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-ocr/screenshot.png)

## 功能特性

- **图片文字识别** — 基于 Tesseract.js 的离线 OCR 识别
- **多种输入方式** — 支持文件选择、拖放、粘贴图片和屏幕截图
- **多语言支持** — 可选择不同语言进行识别
- **去除换行** — 一键去除识别结果中的多余换行
- **复制和保存** — 快速复制识别结果或保存为文本文件
- **深色模式** — 支持深色主题

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-ocr
```

## 使用方法

1. 通过文件选择、拖放、粘贴或截图加载图片
2. 选择识别语言
3. 点击 **识别** 按钮开始 OCR 识别
4. 在右侧面板查看识别结果
5. 点击复制按钮复制文字，或点击保存按钮导出为文本文件

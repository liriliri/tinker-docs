# tinker-ocr

基于 ONNX PaddleOCR 的 [TINKER](https://github.com/liriliri/tinker) OCR 插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-ocr/screenshot.png)

## 功能特性

- **图片输入**：支持文件上传、拖放、粘贴或屏幕截图
- **中英文识别**：基于 PP-OCRv4
- **去除换行**：可选去除结果中的换行以获得更干净的输出
- **复制或保存**识别结果

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-ocr
```

## 使用方法

1. 通过点击、拖放、粘贴（Ctrl+V）或截图按钮上传图片
2. 点击 **识别** 提取文字
3. 复制或保存结果

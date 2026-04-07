# tinker-text-encoder

[TINKER](https://github.com/liriliri/tinker) 的文本编码解码工具，支持 URL 编码、Morse 电码和 Unicode 转换。

![Screenshot](/text_encoder.png)

## 功能特性

- **URL 编码** — 使用 URL 百分号编码（encodeURIComponent）对文本进行编码和解码
- **Morse 电码** — 将文本转换为 Morse 电码，或将 Morse 电码解码为文本
- **Unicode 编码** — 将非 ASCII 字符编码为 `\uXXXX` 转义序列，并可解码还原
- **编码与解码** — 一键在输入和输出面板之间进行编码或解码操作
- **剪贴板支持** — 从剪贴板粘贴文本到输入框，或将输出结果复制到剪贴板
- **清除文本** — 一键清除输入或输出内容
- **状态持久化** — 自动保存并恢复输入文本、输出文本和编码类型

## 使用方法

1. 从工具栏选择**编码类型**：URL 编码、Morse 电码或 Unicode
2. 在**输入**面板中输入或粘贴文本
3. 点击**编码**对文本进行编码，或点击**解码**进行解码
4. 结果显示在**输出**面板中
5. 点击**复制**将结果复制到剪贴板

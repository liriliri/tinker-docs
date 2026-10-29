# tinker-asar

浏览、编辑并解压 Electron `.asar` 归档文件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-asar/screenshot.png)

## 功能特性

- **浏览归档** — 打开或拖入 `.asar` 文件并浏览文件树
- **预览与编辑** — 在 Monaco 编辑器中预览和编辑文本文件，并将更改写回归档
- **创建与删除** — 通过右键菜单创建或删除文件和文件夹
- **解压** — 将整个包或选中路径解压到文件夹
- **Unpacked 标记** — 位于 asar 外部（`.asar.unpacked`）的文件会被标注
- **MCP 工具** — 提供 `open`、`list_files` 和 `extract`，支持 agent / CLI 自动化

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-asar
```

## 使用方法

1. 点击 **打开**（或拖入 `.asar` 文件）
2. 在左侧浏览文件树；在右侧预览和编辑文本
3. 右键点击文件或文件夹以解压、创建或删除
4. 使用 **全部解压** 解压整个归档，或使用 **保存** 将编辑写回

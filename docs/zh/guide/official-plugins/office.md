# tinker-office

TINKER 的 Office 文档编辑插件，基于 [onlyoffice-web-local](https://github.com/sweetwisdom/onlyoffice-web-local) 提供的本地 OnlyOffice 能力。

![截图](https://raw.githubusercontent.com/liriliri/tinker-office/master/screenshot.png)

## 功能特性

- **Word / Excel / PowerPoint** — 打开并编辑 `.docx`、`.xlsx`、`.pptx` 及相关 Office 格式
- **新建文档** — 从起始页创建空白 Document、Spreadsheet 或 Presentation
- **最近文件** — 跨编辑窗口同步的快速重新打开列表
- **独立编辑窗口** — 每个文件在各自的无边框窗口中打开
- **完全本地** — 通过 x2t WASM 转换，无需文档服务器

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-office
```

## 使用方法

1. 打开插件，通过 **New** 新建空白 Word、Excel 或 PowerPoint 文件
2. 点击 **Open…**（或将文件拖到窗口上）编辑已有文档
3. 最近文件显示在右侧 — 点击重新打开，或从列表中移除
4. 在 OnlyOffice 工具栏中编辑；出现提示时使用编辑器的保存操作保存
5. 通过标题栏关闭按钮关闭编辑窗口

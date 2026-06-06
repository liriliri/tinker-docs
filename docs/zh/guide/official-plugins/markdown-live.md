# tinker-markdown-live

一个基于 [Milkdown Crepe](https://milkdown.dev/) 的所见即所得 Markdown 编辑器插件，适用于 [TINKER](https://github.com/liriliri/tinker)。

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-markdown-live/screenshot.png)

## 功能

- **所见即所得编辑**，实时 Markdown 预览
- **斜杠命令**快速插入块
- **丰富内容**支持，包括表格、代码块、LaTeX 和图片
- **文件树**浏览项目文件夹并打开 `.md` 文件
- **文件管理**，支持创建、重命名和删除文件与文件夹
- **文档大纲**在当前文件中跳转标题
- **自动刷新**文件列表，当文件夹在磁盘上发生变化时
- **深色模式**支持
- **国际化**支持英文和中文

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-markdown-live
```

## 使用方法

1. 点击工具栏（或侧边栏）中的**打开文件夹**选择工作目录
2. 在文件树中选择一个 Markdown 文件开始编辑
3. 在编辑器中输入或使用 `/` 斜杠命令插入块
4. 展开侧边栏底部的**大纲**导航标题
5. 在文件树中右键创建、重命名或删除文件和文件夹
6. 点击**保存**写入更改；未保存的新文件会提示选择保存位置
7. 使用侧边栏切换按钮显示或隐藏文件树

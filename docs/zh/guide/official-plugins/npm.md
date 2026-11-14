# tinker-npm

npm registry 浏览插件，支持包搜索、详情查看、全局安装，以及下载解压到本地。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-npm/screenshot.png)

## 功能特性

- **搜索** npm registry 上的包，结果实时更新
- **包详情** — README、版本、依赖、许可证、链接与体积
- **全局安装** — 通过本机 `npm install -g`
- **下载解压** — 将 tarball 下载并解压到指定本地目录
- **MCP 工具** `search`、`get_package`、`install_global`、`download`，可供 agent / CLI 自动化

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-npm
```

## 使用方法

1. 在顶部栏搜索包名或关键词
2. 选中结果打开详情侧栏（README / Overview）
3. 选择版本后，点击 **全局安装**，或点击 **下载解压** 并选择目标文件夹

## 数据来源

包元数据与搜索结果来自 [npm registry](https://registry.npmjs.org/)。安装与下载使用本机的 `npm` / `tar` 工具。

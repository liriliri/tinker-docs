# tinker-clipboard-sync

剪贴板同步插件，通过共享文件在宿主机和虚拟机之间同步剪贴板。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-clipboard-sync/screenshot.png)

## 功能特性

- **双向同步** 通过共享 JSON 文件在宿主机和虚拟机之间同步剪贴板内容
- **基于文件** 可靠兼容不同虚拟机环境（UTM、Parallels 等）
- **实时轮询** 自动检测剪贴板和文件变化
- **自动同步** 支持插件启动时自动开始同步
- **国际化** 支持中英文

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-clipboard-sync
```

## 使用方法

1. 输入或浏览选择宿主机和虚拟机都可访问的共享文件路径
2. 点击"开始同步"按钮开始剪贴板同步
3. 在任意一端复制文本，内容将自动同步到另一端
4. 可选启用"启动时自动同步"实现自动同步

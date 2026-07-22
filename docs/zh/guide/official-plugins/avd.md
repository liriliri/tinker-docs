# tinker-avd

Android 虚拟设备管理插件，用于列出、启动和停止本地的 AVD。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-avd/screenshot.png)

## 功能特性

- **列出 AVD** — 查看所有本地 AVD 的分辨率、SDK、ABI、内存、存储和运行状态
- **启动 / 停止** — 通过工具栏或双击行来启动或停止模拟器
- **清除数据** — 清除快照和用户数据以恢复干净状态
- **打开目录** — 在文件管理器中打开 AVD 文件夹
- **MCP 工具** — 通过命令行使用 `list_avds`、`start_avd` 和 `stop_avd`
- **筛选** — 按名称、ABI 或 API 级别筛选列表

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-avd
```

## 使用方法

1. 在表格中浏览本地 AVD
2. 选择一个设备，然后点击 **启动** 或 **停止**
3. 双击已停止的 AVD 来启动它
4. 根据需要使用 **清除数据** 或 **打开目录**
5. 按名称、ABI 或 API 级别筛选列表

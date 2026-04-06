# tinker-electron-debug

[TINKER](https://github.com/liriliri/tinker) 的 Electron 应用调试插件，支持对生产环境 Electron 应用进行远程调试。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-electron-debug/screenshot.png)

## 功能特性

- **自动检测**系统中已安装的 Electron 应用
- **一键启动**并附加调试器
- **页面检查**：查看 Node.js 和渲染进程目标
- **DevTools 集成**：为任意目标打开 Chrome DevTools
- **实时日志**：在内置终端中查看 stdout/stderr 输出
- **多会话支持**：同时调试多个应用

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-electron-debug
```

## 使用方法

1. 从应用列表中选择一个 Electron 应用
2. 应用将以调试端口启动
3. 在页面列表中查看 Node.js 或渲染进程目标
4. 点击**检查**为目标打开 Chrome DevTools
5. 在下方终端中查看实时日志输出

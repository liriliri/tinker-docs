# tinker-dos

适用于 [TINKER](https://github.com/liriliri/tinker) 的 DOS 模拟器插件，基于 em-dosbox。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-dos/screenshot.png)

## 功能特性

- **DOS 模拟** 基于 em-dosbox，打开后启动到 `C:\>` 提示符
- **程序加载** 通过文件选择器或拖放加载（`.exe` / `.com` / `.bat` / `.zip`）
- **重置** 支持
- **全屏** 模式
- **播放历史** 侧边栏显示最近运行的程序

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-dos
```

## 使用方法

1. 打开插件 — DOS 启动到 `C:\>` 提示符
2. 点击 **OPEN PROGRAM** 加载 `.exe`、`.com`、`.bat` 或 `.zip` 文件，或将文件拖放到屏幕上
3. 点击 **RESET** 重新启动当前程序
4. 点击 **FULLSCREEN** 进入全屏模式
5. 切换 **SIDEBAR** 浏览最近运行的程序

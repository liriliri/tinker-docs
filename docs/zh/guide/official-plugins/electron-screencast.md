# tinker-electron-screencast

[TINKER](https://github.com/liriliri/tinker) 的局域网投屏服务插件，可在同一网络的其他设备上远程启动并操控 Electron 应用。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-electron-screencast/screenshot.png)

## 功能特性

- **局域网 HTTP 服务**：可配置 host、端口，以及可选的 Basic Auth
- **自动检测**系统中已安装的 Electron 应用
- **远程启动**：在另一台设备的浏览器中启动应用
- **投屏操控**：通过 CDP 支持鼠标、键盘、滚动和文本输入
- **多窗口选择**：应用有多个页面时可选择目标窗口
- **连接日志**：记录启动、局域网 URL 和客户端活动
- **主题与语言**：远程页面跟随 Tinker 设置

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-electron-screencast
```

## 使用方法

1. 配置监听地址 / 端口 / 可选的用户名与密码
2. 点击**启动**，并在日志中记下 URL（同时会列出局域网地址）
3. 在同一局域网的另一台设备上，用浏览器打开该 URL
4. 若启用了认证则先登录，然后选择一个 Electron 应用
5. 若出现多个窗口，选择其一；通过投屏画布进行操控

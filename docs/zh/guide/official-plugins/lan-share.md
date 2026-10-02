# tinker-lan-share

局域网文件分享插件，通过 HTTP 服务让同一网络下的设备浏览、上传与下载共享文件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-lan-share/screenshot.png)

## 功能特性

- **局域网 HTTP 服务** — 通过浏览器在局域网内分享文件
- **上传与下载** 同一 Wi-Fi 下任意设备可上传或下载文件与文件夹
- **实时同步** — 文件变更时各客户端列表自动更新
- **二维码** — 可配合 `tinker-qrcode` 快速用手机访问

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-lan-share
```

## 使用方法

1. 打开插件并启动服务
2. 在另一台设备上打开显示的 URL（或扫描二维码）
3. 在浏览器中上传、浏览与下载共享文件

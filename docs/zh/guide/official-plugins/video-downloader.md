# tinker-video-downloader

基于 [yt-dlp](https://github.com/yt-dlp/yt-dlp) 的多站点视频下载插件，适用于 [TINKER](https://github.com/liriliri/tinker)。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-video-downloader/screenshot.png)

## 功能特性

- **多站点下载**：支持 yt-dlp 可解析的任意 URL（YouTube、Bilibili 等）
- **画质选择**：下载前从可用格式中选择
- **下载进度**：任务列表展示进度，含合并状态
- **Cookies**：支持手动添加或导入 `cookies.txt`（适合需登录的视频）
- **自定义 yt-dlp 路径**：二进制不在 `PATH` 时可手动指定

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-video-downloader
```

## 环境要求

- 安装 [yt-dlp](https://github.com/yt-dlp/yt-dlp#installation)，并确保其在 `PATH` 中，或在设置中指定自定义路径。
- 需要合并分离的视频/音频流时，会通过 Tinker 使用 FFmpeg。

## 使用方法

1. 粘贴视频链接，点击**解析**
2. 选择格式，点击**下载**
3. 在任务列表中查看进度，完成后可打开输出文件夹
4. 需要登录的站点可使用 **Cookies**；下载目录 / yt-dlp 路径可在**设置**中配置

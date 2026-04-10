# tinker-video-converter

基于 FFmpeg 的视频格式转换插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-video-converter/screenshot.png)

## 功能特性

- **多种容器格式**（MP4、MKV、WebM、AVI、MOV、GIF 等）
- **视频编码器**（H.264、H.265、VP9、AV1、ProRes、Xvid）
- **质量控制**，支持 CRF 或平均码率模式
- **编码器调优**，包含预设、调优、配置文件和级别选项
- **画面设置**，可调整分辨率和帧率
- **视频滤镜**，包括去隔行、降噪和锐化
- **音频编码**，支持编解码器、码率、采样率和混音选项
- **批量队列**，支持多个文件依次转换
- **FFmpeg 命令预览**，可查看和复制生成的命令
- **全局预设**，快速切换配置
- **国际化**，支持中英文

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-video-converter
```

## 使用方法

1. 通过拖放或打开按钮导入视频文件
2. 配置输出格式、编码器、质量等设置
3. 点击**开始**进行转换，或点击**添加到队列**进行批量处理
4. 监控转换进度，完成后打开输出文件

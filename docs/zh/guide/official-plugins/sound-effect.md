# tinker-sound-effect

基于 [audio.cpp](https://github.com/0xShug0/audio.cpp)（通过 `audiocpp-static`）的本地文本生成音效插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-sound-effect/screenshot.png)

## 功能特性

- **本地音效生成** — Stable Audio 3 Small SFX（Q8 / F16 GGUF）
- **English 文本提示**，支持可选负面提示词
- **时长控制**（1–30 秒）
- 模型缺失时通过 Downloader **自动下载** 到 `~/.tinker/models/`
- **生成队列**，支持 WaveSurfer 预览、播放与保存为 WAV

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-sound-effect
```

## 使用方法

1. 用 English 描述音效（例如 “A wooden door creaks open slowly in a quiet hallway”）
2. 可选设置负面提示词、时长、模型与下载源
3. 点击 **生成** — 缺失模型会自动开始下载
4. 在音频列表中预览队列结果；就绪后保存为 WAV

提示词使用 English 效果最好。运行时数据位于 `~/.tinker/tinker-sound-effect/`（日志 / 输出）。模型共享目录为 `~/.tinker/models/`。

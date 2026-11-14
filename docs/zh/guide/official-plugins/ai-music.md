# tinker-ai-music

基于 [audio.cpp](https://github.com/0xShug0/audio.cpp)（通过 `audiocpp-static`）的本地歌词成曲插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-ai-music/screenshot.png)

## 功能特性

- **本地歌词成曲** — ACE-Step 1.5 Turbo（Q8 / BF16 GGUF）
- **风格提示 + 歌词**（支持 `[Verse]` / `[Chorus]` 标签）
- **歌词语言** 选择（中文 / English / Japanese / Korean）
- **时长控制**（15–180 秒）及可选负面提示词
- 安装 `tinker-translate` 后可将风格提示 **翻译为 English**
- 模型缺失时通过 Downloader **自动下载** 到 `~/.tinker/models/`
- **生成队列**，支持 WaveSurfer 预览、播放与保存为 WAV
- **本地推理**，自动选择后端（macOS 使用 Metal，其他平台使用 CPU）

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-ai-music
```

## 使用方法

1. 输入要演唱的歌词（建议使用 `[Verse]` / `[Chorus]` 等结构标签）
2. 描述音乐风格（例如 “cinematic synth pop with clear vocals”）
3. 选择歌词语言；可选设置负面提示词、时长、模型与下载源
4. 点击 **生成** — 缺失模型会自动开始下载
5. 在音频列表中预览队列结果；就绪后保存为 WAV

风格提示使用 English 效果最好。Turbo Q8 包约 **5.8 GB**。运行时数据位于 `~/.tinker/tinker-ai-music/`（日志 / 输出）。模型共享目录为 `~/.tinker/models/`。

# tinker-audio-transcriber

基于 [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) 的 [TINKER](https://github.com/liriliri/tinker) 音频转录插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-audio-transcriber/screenshot.png)

## 功能特性

- **本地 ASR** — 支持 SenseVoice 与 Whisper 模型，无需云端依赖
- **超长媒体支持** — 通过 FFmpeg 处理音频与视频文件
- **语音分段** — 使用 Silero VAD 分割语音并生成带时间轴的字幕列表
- **拖放或选择文件** — 打开媒体文件
- **复制或保存** — 导出纯文本与 SRT 字幕
- **可取消转录** — 实时显示进度

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-audio-transcriber
```

## 使用方法

1. 选择 ASR 模型（SenseVoice 或 Whisper）；如有提示则下载模型文件
2. 通过拖放或打开按钮选择媒体文件
3. 等待识别完成（进度会显示 preparing、VAD、recognizing 等阶段）
4. 在结果面板中复制或保存转写文本与 SRT 字幕

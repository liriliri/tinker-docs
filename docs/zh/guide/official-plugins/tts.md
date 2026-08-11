# tinker-tts

基于 Microsoft Edge 在线 TTS 的文本转语音插件。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-tts/screenshot.png)

## 功能特性

- **Edge 神经语音**：多语言音色可选，无需下载本地模型
- **语速 / 音调 / 音量** 韵律调节
- **长文本** 支持自动分块合成
- 文本面板支持 **粘贴、清空和字数统计**
- **播放或保存** 生成的 MP3（合成完成后自动播放）
- 合成过程 **可取消**，多分块时显示进度

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-tts
```

## 使用方法

1. 在选项面板中选择语言和音色
2. 输入或粘贴文本；按需调节语速 / 音调 / 音量
3. 点击 **生成**，等待合成完成
4. 使用底部播放器播放、拖动进度条或保存 MP3

需要能访问 Microsoft Edge TTS 的网络环境。

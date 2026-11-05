# tinker-piano

[TINKER](https://github.com/liriliri/tinker) 的虚拟钢琴插件，使用真实三角钢琴采样，支持电脑键盘演奏和 MIDI 演示。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-piano/screenshot.png)

## 功能特性

- **可弹奏键盘**，窗口足够宽时覆盖 C1–C8；较窄时显示更少八度
- **电脑按键**映射到钢琴音符；方向键可移动八度范围
- **Salamander 采样**，通过 Tone.js / `@tonejs/piano` 实现真实的起音与释音
- **内置演示曲**：He's a Pirate、Castle in the Sky
- **打开 MIDI**，从磁盘（或浏览器文件选择器）加载并回放
- **按键标注**：关闭、音符名或电脑按键提示
- **按住时长光效**，松开琴键时在上方显示

## 安装

直接在[浏览器](https://tinker.liriliri.io/plugins/piano)中体验，或通过 [TINKER](https://tinker.liriliri.io/) 安装：

```bash
npm i -g tinker-piano
```

## 使用方法

1. 等待采样加载完成，然后点击琴键或用键盘演奏
2. 使用 **Lower / Higher**（或 ← / →）移动可见八度范围
3. 选择演示曲并播放，或打开 `.mid` / `.midi` 文件
4. 在工具栏切换标注模式（Off / Note / Keys）

## 致谢

钢琴采样来自 [Salamander Grand Piano](https://github.com/sfzinstruments/SalamanderGrandPiano)，通过 [`@tonejs/piano`](https://github.com/Tonejs/Piano) 加载。

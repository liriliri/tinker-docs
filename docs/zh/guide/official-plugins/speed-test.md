# tinker-speed-test

网速测试插件，可对可选测试节点测量延迟、下载与上传速度。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-speed-test/screenshot.png)

## 功能特性

- **延迟与抖动** 探测，实时显示中位数
- **多流下载 / 上传** 吞吐测试（Mbps 或 MB/s）
- **多个节点** — 上海电信（Ookla）、新加坡 Singtel（Ookla）、Cloudflare
- **实时仪表** LCD 风格读数、sparkline 与横向刻度
- **公网 IP** 测试过程中显示在工具栏

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-speed-test
```

## 使用方法

1. 打开插件，选择测试节点与单位（Mbps / MB/s）
2. 点击 **Start**，按 IP → 延迟 → 下载 → 上传顺序执行
3. 观察实时读数与 sparkline，结果会显示在下方指标栏
4. 可随时点击 **Stop** 取消当前测试

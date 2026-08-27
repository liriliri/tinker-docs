# tinker-gltf-optimizer

[TINKER](https://github.com/liriliri/tinker) 的 GLB/GLTF 优化插件。

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-gltf-optimizer/screenshot.png)

## 功能特性

- 批量打开或拖入 `.glb` / `.gltf` 模型
- 网格简化与贴图缩放的质量预设
- 通过 [gltf-optimizer](https://github.com/juunini/gltf-optimizer) 进行 Draco + WebP 优化
- 对比原始与输出文件大小
- MCP 工具 `optimize`，支持 agent / CLI 自动化

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-gltf-optimizer
```

## 使用方法

1. 拖入或打开 GLB/GLTF 文件
2. 选择质量预设
3. 可选设置输出目录
4. 点击优化

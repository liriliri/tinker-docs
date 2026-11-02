# tinker-remesher

[TINKER](https://github.com/liriliri/tinker) 的 GLB 重网格插件，基于 [autoremesher](https://github.com/huxingyi/autoremesher) 与 [isotropicremesher](https://github.com/huxingyi/isotropicremesher)。

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-remesher/screenshot.png)

## 功能特性

- **四边形重网格**，支持锐边、平滑法线、自适应与各向异性控制
- **各向同性重网格**，可设置目标三角形数量与迭代参数
- **拖拽或文件选择器**打开 `.glb` 模型
- **原始 / 重网格**预览切换，并显示顶点数与面数
- **Clay 与线框**显示模式（白色 clay 叠加平面线框）
- **保存**重网格结果为 `.glb`
- MCP 工具 `remesh`，支持 agent / CLI 自动化

## 安装

直接在[浏览器](https://tinker.liriliri.io/plugins/remesher)中体验，或通过 [TINKER](https://tinker.liriliri.io/) 安装：

```bash
npm i -g tinker-remesher
```

## 使用方法

1. 拖入或打开 GLB 模型
2. 选择 **Quad** 或 **Isotropic** 模式并调整参数
3. 点击 **Regenerate** 进行重网格
4. 对比原始与重网格结果，然后保存

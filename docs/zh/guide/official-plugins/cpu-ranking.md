# tinker-cpu-ranking

CPU 性能天梯插件，用于浏览桌面与笔记本 Cinebench R23 排行榜。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-cpu-ranking/screenshot.png)

## 功能特性

- **桌面与笔记本** 通过工具栏切换排行榜
- **品牌筛选** 支持 Intel、AMD、Apple 与 Qualcomm
- **搜索** 可按名称、制程或核心数筛选 CPU
- **可排序列** 支持多核、单核与排名排序
- **本地缓存** 带冷却限制的刷新

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-cpu-ranking
```

## 使用方法

1. 打开插件加载缓存排行，或等待首次拉取
2. 切换桌面 / 笔记本，并可按品牌筛选
3. 在搜索框中输入以缩小列表
4. 点击列标题按排名、多核或单核排序
5. 点击某一行可清除筛选并跳转到对应排名位置
6. 点击刷新按钮更新数据（每小时最多一次）

## 数据来源

数据来自 [TopCPU](https://www.topcpu.net/) 的 Cinebench R23 排行榜，仅供参考。

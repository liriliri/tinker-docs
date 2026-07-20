# tinker-stock

股票数据浏览插件，覆盖 A 股、港股和美股，支持自选、行情看板与个股详情。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-stock/screenshot.png)

## 功能特性

- **搜索** — 按名称或代码搜索 A 股 / 港股 / 美股
- **自选** — 展示最新日行情快照，按涨跌幅排序
- **行情看板** — 热门股票、热门 ETF、板块与 IPO 日历
- **个股详情** — 概览、分时 / K 线、资金流向、筹码、财务、股东与分红
- **MCP Tools** — 通过 CLI 搜索、打开个股、切换行情页、管理自选并获取详情数据

## 安装

下载并安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-stock
```

## 使用方法

1. 在顶部搜索栏搜索股票，或浏览热门股票 / ETF / 板块 / IPO
2. 点击股票打开详情页
3. 在侧边栏自选中添加或移除股票
4. 切换详情页查看资金流向、筹码、财务等信息
5. 点击刷新按钮重新加载自选与行情数据

## 数据来源

数据由 [westock-data-clawhub](https://www.npmjs.com/package/westock-data-clawhub)（腾讯微证券）提供。数据仅供参考，不构成投资建议。

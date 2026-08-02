# tinker-ip-info

[TINKER](https://github.com/liriliri/tinker) 的 IP 信息插件，可查看本机/公网 IP 地址、网站延迟与 DNS 出口。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-ip-info/screenshot.png)

## 功能特性

- **局域网 IPv4** 按网卡列出，优先显示首选网卡
- **国内与海外公网 IP** 查询，含地理位置与 ISP（多源回退）
- **延迟测试** 针对常见站点（zh-CN 测国内站，否则测海外站）
- **DNS 出口** 检测，含地理位置信息
- **一键复制** IP 地址

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-ip-info
```

## 使用方法

1. 打开插件，查看局域网 IP、公网 IP、延迟与 DNS 出口
2. 点击 IP 地址（或其复制按钮）即可复制到剪贴板
3. 点击「刷新」重新查询全部数据

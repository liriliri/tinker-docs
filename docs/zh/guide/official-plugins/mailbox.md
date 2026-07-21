# tinker-mailbox

TINKER 邮箱客户端插件，支持 IMAP 收信（[imapflow](https://imapflow.com/)）和 SMTP 发信（[nodemailer](https://nodemailer.com/)）。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-mailbox/screenshot.png)

## 功能特性

- **多账户** IMAP/SMTP 配置，内置 Gmail、Outlook、QQ、163 等预设
- **文件夹浏览**，支持本地缓存、idle 同步，以及下拉加载更早的邮件
- **邮件阅读**，支持纯文本和 HTML 邮件
- **撰写与发送**，支持富文本格式（加粗、列表、字号等）
- **移动与删除**，通过右键菜单将邮件移入垃圾箱或永久删除
- **MCP Tools**，可通过 CLI 列出账户/文件夹/邮件、阅读邮件并发送邮件

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-mailbox
```

## 使用方法

1. 添加邮箱账户并填写 IMAP/SMTP 设置（或根据邮箱域名使用服务商预设）
2. 在侧边栏选择文件夹浏览邮件
3. 点击邮件阅读；右键可移动或删除
4. 点击 **撰写** 编写并发送新邮件
5. 使用工具栏切换账户、编辑设置或刷新当前文件夹

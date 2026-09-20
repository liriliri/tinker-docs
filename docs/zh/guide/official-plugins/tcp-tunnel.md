# tinker-tcp-tunnel

[TINKER](https://github.com/liriliri/tinker) 的 TCP 隧道插件，用于通过公网中继临时暴露本地 TCP 端口。

![截图](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-tcp-tunnel/screenshot.png)

## 功能特性

- **主机列表**：支持按主机连接 / 断开，状态相互独立
- **端口映射**：以独立卡片展示（远程端口 → 本地 host:port）
- **中继 CLI**（`tinker-tcp-tunnel serve`）与插件打包在同一 npm 包中
- **服务端必须使用 token** 鉴权
- **安全默认值**：强制 token、屏蔽敏感端口、每客户端最多 10 个映射

## 安装

下载安装 [TINKER](https://tinker.liriliri.io/)，然后运行：

```bash
npm i -g tinker-tcp-tunnel
```

## 使用方法

### 插件（客户端）

1. 在 Tinker 中打开 **TCP 隧道**
2. 添加中继主机（地址、控制端口、token）
3. 为该主机添加端口映射
4. 点击 **连接**

配置通过 `licia/LocalStore` 保存在 `localStorage` 中。

### 服务端（中继）

中继需运行在具备公网 IP 的机器上（例如 VPS）。控制端口与映射端口默认都绑定 `0.0.0.0`。

在 VPS 上执行：

```bash
tinker-tcp-tunnel serve -p 7700 -t my-secret
```

`--token` **必填**。默认行为：

- 控制监听：`0.0.0.0`
- 映射端口：`0.0.0.0`（可用 `--proxy-bind` 修改）
- 屏蔽特权端口（`< 1024`）及常见敏感端口（MySQL、RDP、Redis 等）
- 每客户端最多 **10** 个映射端口
- 控制端口本身不可被映射

在插件中，将中继主机设为服务器公网 IP（或 `tcp.surunzi.com`），端口 `7700`，并填写相同 token。请在防火墙中放行控制端口及已映射的远程端口。

可选参数：

```bash
tinker-tcp-tunnel serve -p 7700 -t my-secret --max-ports 20
tinker-tcp-tunnel serve -p 7700 -t my-secret --allow-sensitive
tinker-tcp-tunnel serve -p 7700 -t my-secret --proxy-bind 0.0.0.0
```

```bash
tinker-tcp-tunnel serve --help
```

仅适合对本地服务做**临时**访问，不建议长期公网暴露。

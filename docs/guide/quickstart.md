# Quick Start

## Installation

TINKER supports [Windows x64](https://release.liriliri.io/tinker/TINKER-2.3.0-win-x64.exe), [macOS Apple silicon](https://release.liriliri.io/tinker/TINKER-2.3.0-mac-arm64.dmg), [macOS Intel chip](https://release.liriliri.io/tinker/TINKER-2.3.0-mac-x64.dmg), [Linux DEB](https://release.liriliri.io/tinker/TINKER-2.3.0-linux-amd64.deb) and [Linux RPM](https://release.liriliri.io/tinker/TINKER-2.3.0-linux-x86_64.rpm) platforms. After downloading and installing, simply click the desktop icon to start using it.

## Basic Usage

TINKER is designed to be as simple and efficient as possible:

1. Use the keyboard shortcut to bring up TINKER.
2. Type the name of the tool you need in the search bar.
3. Press Enter to open the selected tool.
4. After use, TINKER will automatically hide itself.

:::info You can customize the keyboard shortcut in the settings.
:::

## User Interface

TINKER's main interface consists of a search bar and a list of available tools. Type in the search bar to filter tools, then press Enter to open the first result in the list. Click a tool icon to open it, or double-click to open it in a separate window.

Right-click a tool icon for more actions. You can open or close a tool, choose **Open in New Window**, pin frequently used tools to the top of the list, or hide tools you don't need for now (hidden tools can still be found by search and unhidden). You can also create a system shortcut so the tool can be launched from the desktop or another launcher.

The menu also lets you enable **Auto Detach Window**, so the tool always opens in its own window, and **Run in Background**, which keeps the plugin process running after the window is closed and optionally allows **Run at Startup**. The more menu in the top-right can refresh the plugin list, close all running plugins, or — when a tool is open — detach its window and export, import, or clear that plugin's local data.

## Installing Plugins

In addition to built-in tools, TINKER supports installing more plugins via npm:

```bash
npm i -g tinker-whois
npm i -g tinker-drawio
npm i -g tinker-deepseek
```

Once installed, plugins will automatically appear in the search interface.

:::info Web-based plugins (e.g. tinker-deepseek) do not support offline use.
:::

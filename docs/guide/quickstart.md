# Quick Start

## Installation

TINKER supports [Windows x64](https://release.liriliri.io/tinker/TINKER-1.10.0-win-x64.exe), [macOS Apple silicon](https://release.liriliri.io/tinker/TINKER-1.10.0-mac-arm64.dmg), [macOS Intel chip](https://release.liriliri.io/tinker/TINKER-1.10.0-mac-x64.dmg) and [Linux](https://release.liriliri.io/tinker/TINKER-1.10.0-linux-x86_64.AppImage) platforms. After downloading and installing, simply click the desktop icon to start using it.

## Basic Usage

TINKER is designed to be as simple and efficient as possible:

1. Use the keyboard shortcut to bring up TINKER.
2. Type the name of the tool you need in the search bar.
3. Press Enter to open the selected tool.
4. After use, TINKER will automatically hide itself.

:::info You can customize the keyboard shortcut in the settings.
:::

## User Interface

TINKER's main interface consists of a search bar and a list of available tools. Simply start typing to filter tools, and press Enter to launch the one you need.

Click the <Icon name="setting"/> icon to open settings, where you can configure the application's theme, language, keyboard shortcuts, and manage plugins.

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

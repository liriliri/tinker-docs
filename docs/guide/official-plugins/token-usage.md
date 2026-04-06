# tinker-token-usage

Token usage statistics plugin powered by [ccusage](https://github.com/ryoppippi/ccusage), visualizing token consumption for Claude Code and Codex.

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-token-usage/screenshot.png)

## Features

- **Usage Overview** — Stat cards showing input tokens, output tokens, total tokens, and session count
- **Daily Chart** — Visualize daily token usage trends
- **Multiple Data Sources** — Switch between data sources (Claude Code, Codex, etc.)
- **Series Toggle** — Click stat cards to show or hide corresponding chart series
- **Bilingual UI** — Supports Chinese and English
- **Dark Mode** — Supports dark theme

## Installation

Download and install [TINKER](https://tinker.liriliri.io/), then run:

```bash
npm i -g tinker-token-usage
```

## Usage

1. Token usage data loads automatically when the plugin opens
2. Switch data sources via the dropdown menu at the top
3. View stat cards for an overview of usage
4. Click cards to toggle the corresponding series in the chart
5. Click the refresh button to update data

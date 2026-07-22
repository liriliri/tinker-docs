# tinker-avd

An Android Virtual Device manager plugin for TINKER, for listing, starting, and stopping local AVDs.

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-plugins/master/packages/tinker-avd/screenshot.png)

## Features

- **List AVDs** — View resolution, SDK, ABI, memory, storage, and running status for all local AVDs
- **Start / Stop** — Start or stop emulators from the toolbar or by double-clicking a row
- **Wipe Data** — Clear snapshots and userdata for a clean state
- **Open Directory** — Reveal the AVD folder in Finder or Explorer
- **MCP Tools** — `list_avds`, `start_avd`, and `stop_avd` via the CLI
- **Filter** — Filter the list by name, ABI, or API level

## Installation

Download and install [TINKER](https://tinker.liriliri.io/), then run:

```bash
npm i -g tinker-avd
```

## Usage

1. Browse local AVDs in the table
2. Select a device, then click **Start** or **Stop**
3. Double-click a stopped AVD to start it
4. Use **Wipe Data** or **Open Directory** as needed
5. Filter the list by name, ABI, or API level

# Command Line

TINKER ships with a `tinker` CLI so you can open plugins, check what is running, and let AI agents call plugin capabilities from the terminal. If the app is not running, most commands will launch TINKER automatically.

## Installation

After installing the TINKER desktop app, right-click the tray icon and choose **Install Command Line...**. On macOS / Linux this links the command into `/usr/local/bin` (administrator privileges may be required). On Windows it adds the CLI directory to your user PATH.

Then open a new terminal and run:

```bash
tinker --version
```

If the command is not found, confirm the install step succeeded and restart your terminal.

## Basic usage

```bash
tinker list                 # List installed plugins
tinker open json-editor     # Open a plugin in a detached window
tinker ps                   # List running plugins
tinker close json-editor    # Close a plugin
tinker restart json-editor  # Restart a plugin
tinker launch               # Launch TINKER
tinker quit                 # Quit TINKER
```

Plugin names accept the short form (`json-editor`) or the full id (`tinker-json-editor`); the CLI normalizes the prefix for you. In `list` output, `[mcp]` means the plugin exposes MCP tools, and `[background]` means **Run in Background** is enabled.

If background running is enabled for a plugin, you can also start it without a window:

```bash
tinker open json-editor --headless
```

## Calling MCP tools

For plugins tagged `[mcp]`, open the plugin first, then list or call its tools:

```bash
tinker open json-editor
tinker tools json-editor
tinker call json-editor --tool <tool-name> --args '{}'
```

You can also run `tinker mcp <plugin>` to start a stdio MCP server for that plugin, which clients such as Cursor can connect to. The target plugin must already be running before tools are called.

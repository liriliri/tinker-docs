# tinker-hosts

A hosts file manager plugin for [TINKER](https://github.com/liriliri/tinker), allowing you to create, manage, and quickly switch between multiple hosts configurations.

![Screenshot](/hosts.png)

## Features

- **View system hosts** — read and display the current system hosts file
- **Multiple configurations** — create and manage multiple named hosts configurations
- **Quick toggle** — activate or deactivate configurations with a single click
- **Auto apply** — changes to active configurations are automatically applied to the system hosts file
- **Configuration management** — rename, edit, and delete configurations via context menu
- **Safe merging** — managed content is wrapped in markers so your existing hosts entries are preserved

## Usage

1. The **System Hosts** view in the sidebar shows the current contents of your system hosts file
2. Click **New Config** to create a named hosts configuration (e.g., "Development", "Staging")
3. Select a configuration in the sidebar and edit its hosts entries in the editor
4. Click the indicator dot next to a configuration to activate or deactivate it
5. Active configurations are automatically merged and applied to the system hosts file
6. Right-click a configuration for options to rename, delete, or toggle its active state

> **Note:** Writing to the system hosts file may require administrator privileges.

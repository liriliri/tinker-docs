# tinker-ai-assistant

An AI assistant plugin for [TINKER](https://github.com/liriliri/tinker) that completes tasks through chat, with access to tools for file operations, shell commands, and web search.

![Screenshot](/ai_assistant.png)

![Screenshot](/ai_assistant.png)

## Features

- **Multi-provider support** — works with various AI providers and models
- **Tool calling** — execute shell commands, read/write/edit files, list directories, web search and fetch
- **Session persistence** — conversations are saved and restored across sessions
- **Working directory** — set a custom working directory for file and shell operations
- **Bilingual UI** — supports English and Chinese

## Usage

1. Select an AI provider and model from the dropdown
2. Optionally set a working directory by clicking the folder icon in the toolbar
3. Type your message in the input area and press Enter or click the send button
4. The assistant will respond and may use tools to complete tasks on your behalf

## Available Tools

| Tool | Description |
|------|-------------|
| **exec** | Execute shell commands |
| **read_file** | Read file contents |
| **write_file** | Write content to a file |
| **edit_file** | Edit a file with find and replace |
| **list_dir** | List directory contents |
| **web_search** | Search the web |
| **web_fetch** | Fetch a web page |

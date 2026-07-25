# tinker-websocket

A WebSocket debugging plugin for [TINKER](https://github.com/liriliri/tinker), for connecting to WebSocket servers, sending messages, and inspecting traffic.

![Screenshot](/websocket.png)

## Features

- **Multiple connections** — connect to multiple `ws://` or `wss://` endpoints at the same time
- **Send text & binary** — send text messages or binary payloads from a local file
- **Message history** — view sent, received, and system messages with timestamps and sizes
- **Filter & search** — filter by direction (all / sent / received) and search message content
- **Message detail** — inspect a message in text or hex view
- **URL history** — remember recently used WebSocket URLs for quick reconnect
- **Connection management** — disconnect, delete, or clear message history per connection

## Usage

1. Click **New connection** and enter a WebSocket URL (e.g. `wss://ws.postman-echo.com/raw`)
2. Select the connection in the sidebar once it is open
3. Type a message in the compose panel and press **Enter** or click **Send**
4. Optionally click the file button to send a binary payload
5. Click a message in the list to inspect its content, size, and timestamp

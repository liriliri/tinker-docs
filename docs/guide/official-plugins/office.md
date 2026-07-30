# tinker-office

An Office document editor plugin for [TINKER](https://github.com/liriliri/tinker), powered by the local OnlyOffice stack from [onlyoffice-web-local](https://github.com/sweetwisdom/onlyoffice-web-local).

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-office/master/screenshot.png)

## Features

- **Word / Excel / PowerPoint** — open and edit `.docx`, `.xlsx`, `.pptx` and related Office formats
- **New documents** — create blank Document, Spreadsheet, or Presentation from the start screen
- **Recent files** — quick reopen list synced across editor windows
- **Separate editor windows** — each file opens in its own frameless window
- **Fully local** — conversion via x2t WASM, no document server required

## Installation

Download and install [TINKER](https://tinker.liriliri.io/), then run:

```bash
npm i -g tinker-office
```

## Usage

1. Open the plugin and use **New** to create a blank Word, Excel, or PowerPoint file
2. Click **Open…** (or drag a file onto the window) to edit an existing document
3. Recent files appear on the right — click to reopen, or remove items from the list
4. Edit in the OnlyOffice toolbar; save with the editor’s save action when prompted
5. Close an editor window with the close button on the title bar

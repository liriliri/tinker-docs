# tinker-hash

A hash calculator plugin for [TINKER](https://github.com/liriliri/tinker), supporting MD5, SHA1, SHA256, and SHA512 algorithms.

![Screenshot](/hash.png)

## Features

- **Multiple algorithms** — calculate MD5, SHA1, SHA256, and SHA512 hashes simultaneously
- **Text mode** — hash any text input in real time
- **File mode** — calculate hashes for files of any format
- **Uppercase toggle** — switch between lowercase and uppercase hash output
- **Clipboard support** — paste text or files from clipboard, copy individual hash results
- **Web Worker** — file hashing runs in a background thread for better performance

## Usage

### Text Mode

1. Select **Text** mode in the toolbar
2. Enter text in the input panel
3. Hash results for all four algorithms appear instantly in the right panel
4. Click the copy button next to any hash to copy it to the clipboard

### File Mode

1. Select **File** mode in the toolbar
2. Click or drag a file into the input area
3. Hash results for all four algorithms are calculated and displayed
4. Click the copy button next to any hash to copy it to the clipboard

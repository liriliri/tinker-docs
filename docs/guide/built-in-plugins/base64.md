# tinker-base64

A Base64 encoder/decoder plugin for [TINKER](https://github.com/liriliri/tinker), supporting both text and file encoding.

![Screenshot](/base64.png)

## Features

- **Text mode** — encode and decode Base64 strings
- **File mode** — encode files to Base64, with optional Data URL output
- **Decode to file** — save decoded Base64 data as a file
- **Clipboard support** — paste text or files from clipboard, click output to copy
- **Web Worker** — heavy encoding runs in a background thread for better performance

## Usage

### Text Mode

1. Select **Text** mode in the toolbar
2. Enter text or a Base64 string in the input panel
3. Click **Encode** to convert text to Base64, or **Decode** to convert Base64 back to text
4. Click the output to copy it to the clipboard

### File Mode

1. Select **File** mode in the toolbar
2. Select a file to encode
3. The Base64 result appears in the output panel
4. Optionally enable **Data URL** to include the MIME type prefix
5. Click the output to copy it to the clipboard

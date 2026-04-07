# tinker-text-encoder

A text encoding and decoding tool for [TINKER](https://github.com/liriliri/tinker), supporting URL encoding, Morse code, and Unicode conversions.

![Screenshot](/text_encoder.png)

## Features

- **URL encoding** — encode and decode text using URL percent-encoding (encodeURIComponent)
- **Morse code** — convert text to Morse code and decode Morse code back to text
- **Unicode encoding** — encode non-ASCII characters to `\uXXXX` escape sequences and decode them back
- **Encode & decode** — one-click encode or decode between the input and output panels
- **Clipboard support** — paste text from clipboard into the input, or copy the output to clipboard
- **Clear text** — clear input or output with one click
- **State persistence** — input text, output text, and encoding type are automatically saved and restored

## Usage

1. Select an **Encoding Type** from the toolbar: URL Encoding, Morse Code, or Unicode
2. Enter or paste text in the **Input** panel
3. Click **Encode** to encode the text, or **Decode** to decode it
4. The result appears in the **Output** panel
5. Click **Copy** to copy the result to clipboard

# tinker-regexp

A regular expression testing tool for [TINKER](https://github.com/liriliri/tinker), inspired by RegExr, with real-time matching, syntax highlighting, and detailed match information.

![Screenshot](/regexp.png)

## Features

- **Real-time matching** — matches are highlighted instantly as you type your pattern or edit the test text
- **Syntax highlighting** — the expression editor highlights regex tokens with color coding and hover tooltips explaining each part
- **Regex flags** — toggle JavaScript regex flags including global (g), case insensitive (i), multiline (m), dotall (s), unicode (u), and sticky (y)
- **Match details** — hover over highlighted matches to see position, matched text, and capture group information
- **Error reporting** — invalid patterns are detected and error messages are displayed in real time
- **Clipboard support** — copy your pattern to clipboard or paste a pattern from clipboard
- **State persistence** — your pattern, flags, and test text are automatically saved and restored

## Usage

1. Enter a regular expression pattern in the **Expression** area at the top
2. Type or paste your test text in the **Text** area below
3. Matches are highlighted in blue automatically in real time
4. Click the **Flag** button in the toolbar to toggle regex flags (g, i, m, s, u, y)
5. Hover over highlighted matches to see detailed information including position and capture groups
6. Use the **Copy** button to copy the pattern, or **Paste** to load a pattern from clipboard
7. Click **Clear** to reset the pattern

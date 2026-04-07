# tinker-json-editor

A JSON editor plugin for [TINKER](https://github.com/liriliri/tinker), with text and tree editing modes powered by Monaco Editor and JSONEditor.

![Screenshot](/json_editor.png)

## Features

- **Text mode** — edit JSON with syntax highlighting, validation, and error detection via Monaco Editor
- **Tree mode** — browse and edit JSON in an interactive tree view
- **Format & minify** — format JSON with indentation or minify to compact form
- **Expand/Collapse** — expand or collapse all nodes in tree mode
- **File operations** — create new files, open existing JSON files, save and save as
- **Unsaved changes detection** — track modifications with file change indicator
- **Undo/Redo** — full undo and redo support
- **Clipboard support** — copy JSON to clipboard or paste from clipboard
- **Line count** — display the number of lines in the editor

## Usage

1. Click **Open** to load a JSON file, or start typing in the editor
2. Switch between **Text** and **Tree** modes using the toolbar toggle
3. Click **Format** to pretty-print the JSON, or **Minify** to compact it
4. In tree mode, use **Expand All** / **Collapse All** to navigate the structure
5. Click **Save** to save changes back to the file

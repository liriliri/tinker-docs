# tinker-audio-editor

A full-featured audio editor plugin for [TINKER](https://github.com/liriliri/tinker), supporting multi-format audio editing with waveform visualization.

![Screenshot](/audio_editor.png)

## Features

- **Multi-format support** — open MP3, WAV, OGG, FLAC, M4A, AAC, OPUS, and WebM audio files
- **Waveform visualization** — stereo waveform display with zoom, scroll, and timeline
- **Region selection** — drag to select audio regions for editing operations
- **Basic editing** — trim, delete, silence, copy, cut, and paste audio
- **Signal processing** — gain adjustment, normalization, speed change, fade in/out
- **Insert silence** — add silent sections at any position (1–60 seconds)
- **Real-time monitoring** — VU meters with peak indicators and per-channel muting
- **Undo/Redo** — full history support with up to 20 undo levels
- **Keyboard shortcuts** — Space (play/pause), Ctrl+Z (undo), Ctrl+A (select all), and more
- **Export to WAV** — save edited audio as WAV files

## Usage

### Opening Audio

1. Click the **Open** button in the toolbar, or drag and drop an audio file into the window
2. The audio waveform is displayed with a timeline above it

### Editing Audio

1. Drag on the waveform to select a region
2. Use the toolbar buttons or right-click context menu to apply operations like **Trim**, **Delete**, **Silence**, **Gain**, **Normalize**, **Speed**, **Fade In**, or **Fade Out**
3. Use **Copy**, **Cut**, and **Paste** to move audio between positions
4. Use **Ctrl+Z** to undo and **Ctrl+Y** to redo

### Playback

1. Press **Space** or click the **Play** button to start playback
2. Use the seek buttons to navigate forward/backward
3. Monitor audio levels in the VU meter at the bottom of the waveform
4. Click the **L** or **R** labels to mute individual channels

### Exporting

1. Click the **Export** button in the toolbar
2. Choose a save location and filename
3. The audio is saved as a WAV file

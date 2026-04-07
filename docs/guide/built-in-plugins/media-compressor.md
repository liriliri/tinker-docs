# tinker-media-compressor

A media compression plugin for [TINKER](https://github.com/liriliri/tinker), supporting batch video and audio compression powered by FFmpeg.

![Screenshot](/media_compressor.png)

## Features

- **Video compression** — compress MP4, MKV, AVI, MOV, and WebM files
- **Audio compression** — compress MP3, M4A, AAC, OGG, FLAC, and WAV files
- **Multiple compression modes** — video supports CRF (quality), bitrate, resolution, and target size; audio supports bitrate, sample rate, and target size
- **Quality presets** — five quality levels from Very Low to Excellent
- **GPU acceleration** — automatic GPU encoder detection for faster video compression
- **Batch processing** — compress multiple files at once with progress tracking
- **Target size** — compress to a specific file size (KB, MB, or GB)
- **Custom output directory** — save compressed files to a specified directory or alongside originals
- **Media info display** — view resolution, FPS, duration, bitrate, and sample rate for each file
- **Cancel support** — cancel compression at any time

## Usage

1. Switch between **Video** and **Audio** mode in the toolbar
2. Click **Open** or drag and drop media files to add them
3. Select a compression mode and adjust the quality level
4. Optionally set an output directory
5. Click **Compress** to start batch compression
6. Monitor progress for each file; click **Cancel** to stop at any time
7. Compressed files are saved to the output directory or alongside the originals

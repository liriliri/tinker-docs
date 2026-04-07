# tinker-media-converter

A media format conversion plugin for [TINKER](https://github.com/liriliri/tinker), supporting batch conversion of video, audio, and image files powered by FFmpeg.

![Screenshot](/media_converter.png)

## Features

- **Video conversion** — convert between MP4, MKV, WebM, MOV, AVI, FLV, TS, WMV, 3GP, and GIF with codec options (H.264, H.265, VP9, AV1, ProRes, Xvid, etc.)
- **Audio conversion** — convert between MP3, M4A, AAC, OGG, FLAC, WAV, and Opus
- **Image conversion** — convert between JPG, PNG, WebP, BMP, TIFF, and AVIF
- **Batch processing** — convert multiple files at once with progress tracking
- **Format auto-detection** — skip files already in the target format
- **Custom output directory** — save converted files to a specified directory or alongside originals
- **Media info display** — view resolution, FPS, duration, bitrate, and sample rate for each file
- **Cancel support** — cancel conversion at any time

## Usage

1. Switch between **Video**, **Audio**, and **Image** mode in the toolbar
2. Click **Open** or drag and drop media files to add them
3. Select the target output **Format** from the dropdown
4. Optionally set an output directory
5. Click **Convert** to start batch conversion
6. Monitor progress for each file; click **Cancel** to stop at any time

# tinker-media-splitter

A media splitting plugin for [TINKER](https://github.com/liriliri/tinker), cutting audio and video into multiple segments for lossless export via FFmpeg.

![Screenshot](/media_splitter.png)

## Features

- **Audio & video support** — open MP4, MKV, MOV, MP3, WAV, and more via dialog or drag & drop
- **In / Out points** — mark segment start and end at the playhead (shortcuts **I** / **O**)
- **Timeline editing** — scrub the timeline; audio files show a waveform preview
- **Equal split** — divide the whole media into 2–100 equal parts with duration and size estimates
- **Segment tools** — add, split at cursor, delete, or clear segments; view duration and estimated size per segment
- **Lossless export** — FFmpeg stream copy with optional keyframe-aligned cuts
- **Custom output directory** — save next to the source file or to a chosen folder
- **Progress & cancel** — track export progress and cancel at any time

## Usage

1. Click **Open Media** or drag and drop an audio/video file
2. Play and seek to find cut points; press **I** / **O** (or use the playback bar) to set start and end
3. Optionally use **Split into equal parts**, or add/split/delete segments in the sidebar
4. Choose an output directory if needed; toggle **Keyframe cut** for faster keyframe-aligned seeks
5. Click **Export** to lossless-cut all finished segments

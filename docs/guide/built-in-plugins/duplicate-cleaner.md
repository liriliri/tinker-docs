# tinker-duplicate-cleaner

A duplicate file cleaner plugin for [TINKER](https://github.com/liriliri/tinker) that scans directories to find and remove duplicate files, helping you reclaim disk space.

![Screenshot](/duplicate_cleaner.png)

## Features

- **Duplicate detection** — scans directories and groups duplicate files by content using MD5 hashing
- **Size-based pre-filtering** — groups files by size first, then verifies with hash for efficient scanning
- **File type filtering** — filter results by category: Audio, Video, Document, Image, or Other
- **Interactive selection** — expandable duplicate groups with checkboxes to select files for deletion
- **Scan progress** — real-time display of file count and total size during scanning
- **Cancellable scan** — stop an ongoing scan at any time
- **Safe deletion** — confirmation dialog before deleting, with feedback on deleted count and errors
- **Selection summary** — real-time display of selected file count and total size to be freed

## Usage

1. Click the folder icon or drag and drop a directory to start scanning
2. Wait for the scan to complete — progress is shown in real time
3. View duplicate groups in the expandable result list
4. Use the toolbar tabs to filter by file type (Audio, Video, Document, Image, Other)
5. Check the files you want to remove from each duplicate group
6. Click the "Clean" button and confirm to delete the selected duplicates

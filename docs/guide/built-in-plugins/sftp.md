# tinker-sftp

An SFTP client plugin for [TINKER](https://github.com/liriliri/tinker) to browse and transfer remote files via SSH.

![Screenshot](/sftp.png)

## Features

- **Session management** — organize connections into folders, save credentials for quick access
- **Password and private key auth** — support both password-based and SSH private key authentication
- **Tabbed browsing** — open multiple connections in tabs and switch between them
- **File explorer** — browse remote directories with list or grid view, sort by name/size/modified time
- **Upload and download** — transfer files and directories with progress tracking
- **Remote file operations** — create folders, rename, and delete files/directories on the remote server
- **Path navigation** — go back, forward, up, or type a path directly; filter entries by name
- **Show hidden files** — toggle visibility of hidden files
- **Transfer panel** — view ongoing and completed transfers with progress bars

## Usage

1. Click **New Folder** to create a session group, then **New Session** to add a connection
2. Enter host, port, username, and choose password or private key authentication
3. Double-click a session to connect; the remote directory listing appears
4. Navigate directories by clicking, or use back/forward/up buttons
5. Select files and click **Download** to save locally, or **Upload** to send local files
6. Right-click entries to rename or delete them
7. Open the transfer panel to monitor progress of all file transfers

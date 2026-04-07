# tinker-pomodoro

A Pomodoro timer plugin for [TINKER](https://github.com/liriliri/tinker), helping you stay focused with timed work and break intervals.

![Screenshot](/pomodoro.png)

## Features

- **Pomodoro technique** — cycle through focus sessions, short breaks, and long breaks automatically
- **Circular progress** — visual circular progress indicator showing elapsed time
- **Round tracking** — track current round and total completed focus sessions
- **Configurable durations** — customize focus time (default 25 min), short break (5 min), and long break (15 min)
- **Sound notification** — audio alert when a timer completes, with adjustable volume
- **Skip and reset** — skip to the next phase or reset the entire session
- **Background timer** — timer runs in a Web Worker for accurate timing even when the window is in the background

## Usage

1. Launch the plugin to see the Pomodoro timer set to a 25-minute focus session
2. Click the **play** button to start the timer
3. Focus on your task until the timer completes and plays a sound notification
4. The timer automatically transitions to a **short break** (or **long break** after 4 rounds)
5. Click **skip** to jump to the next phase, or **reset** to start over
6. Adjust the volume to control notification sound level

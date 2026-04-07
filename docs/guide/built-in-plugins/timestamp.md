# tinker-timestamp

A timestamp converter plugin for [TINKER](https://github.com/liriliri/tinker), supporting bidirectional conversion between timestamps and dates across multiple time zones.

![Screenshot](/timestamp.png)

## Features

- **Current timestamp** — displays the current Unix timestamp in real time, updated every second
- **Date to timestamp** — convert a selected date and time to a Unix timestamp
- **Timestamp to date** — convert a Unix timestamp to a human-readable date and time
- **Millisecond/second unit** — switch between millisecond and second precision for timestamps
- **Time zone support** — select from 25 time zones worldwide (UTC-11:00 to UTC+12:00) with city labels
- **Copy to clipboard** — copy converted results to clipboard with one click
- **State persistence** — automatically saves and restores the selected unit and time zone

## Usage

1. View the **Current Timestamp** displayed in real time at the top
2. Select the timestamp unit: **Millisecond** or **Second**
3. Choose a **time zone** from the dropdown
4. To convert a date to a timestamp: select a date and time in the **Date → Timestamp** section
5. To convert a timestamp to a date: enter a timestamp in the **Timestamp → Date** section
6. Click **Copy** to copy the result to clipboard

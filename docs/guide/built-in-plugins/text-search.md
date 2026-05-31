# tinker-text-search

A text search plugin for [TINKER](https://github.com/liriliri/tinker), letting you search the contents of every file inside a directory and preview the matches in place.

![Screenshot](/text_search.png)

## Features

- **Folder-wide search** — pick a folder and search across every file under it
- **Case sensitive** — toggle case-sensitive matching
- **Whole word** — match only complete words
- **Regular expression** — use full regex syntax for the query
- **Include/exclude globs** — narrow the search by file path patterns (e.g. `*.ts`, `**/node_modules`)
- **Max results limit** — cap the number of returned matches to keep large repos responsive
- **File preview** — click a match to open the file with the line scrolled into view
- **Reveal & copy** — reveal a matched file in the system file manager, copy its path, or copy the matched line
- **Persistent settings** — last folder, query, and toggle states are restored across sessions

## Usage

1. Click the **folder** button in the toolbar to choose a directory to search in
2. Type a query in the search box — results appear grouped by file
3. Toggle **Aa** (case), **ab|** (whole word), or **.*** (regex) on the right of the query input as needed
4. Expand the details panel and use **files to include** / **files to exclude** to filter by path
5. Adjust the **Max results** number in the toolbar to control how many matches to load
6. Click any match to preview the file with the matched line highlighted

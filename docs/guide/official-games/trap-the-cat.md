# tinker-trap-the-cat

Click dots to trap the cat before it escapes! A hex-grid puzzle game for [TINKER](https://github.com/liriliri/tinker).

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-trap-the-cat/screenshot.png)

## Highlights

- **Classic gameplay** — surround the cat on a hex grid before it reaches the edge
- **Smart opponent** — the cat picks the escape route with the most paths to the border
- **Fair starts** — random opening walls are checked so the puzzle stays winnable
- **Undo support** — take back your last move when you need a second chance
- **Satisfying feedback** — meow when the cat escapes, victory sound when you win
- **Bilingual** — fully localized in English and Chinese (圈小猫)

## Installation

Play directly in [browser](https://tinker.liriliri.io/games/trap-the-cat/), or install via TINKER: download from `https://tinker.liriliri.io/`, then run `npm i -g tinker-trap-the-cat`.

## How to Play

1. Open the **Trap the Cat** plugin in TINKER
2. Click empty hex cells to place walls and trap the cat
3. After each move, the cat steps one cell toward the nearest edge
4. Win by surrounding the cat with no escape — lose if it reaches the border
5. Use **Reset** to start over or **Undo** to revert your last move

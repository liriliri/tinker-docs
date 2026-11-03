# tinker-rubiks-cube

Drag layers to twist a 3D Rubik's Cube — scramble, time your solve, and chase a new best. A tactile cube puzzle for [TINKER](https://github.com/liriliri/tinker).

![Screenshot](https://raw.githubusercontent.com/liriliri/tinker-games/master/packages/tinker-rubiks-cube/screenshot.png)

## Highlights

- **3×3 and 4×4** — switch sizes anytime and keep practicing
- **Natural controls** — drag a layer to turn, drag empty space to orbit the cube
- **Timed solves** — scramble starts the clock; beat your locally saved best time
- **Auto-solve hint** — light the bulb to watch a slow solution, tap again to stop
- **Satisfying feedback** — turn SFX, victory sting, and a celebration spin when you finish
- **Bilingual interface** — English and Simplified Chinese

4×4 auto-solve uses an independent TypeScript port of Shuang Chen’s TPR three-phase reduction (tables built at runtime; 3×3 finish via cubejs). No csTimer / GWT sources are vendored.

## Installation

Play directly in [browser](https://tinker.liriliri.io/games/rubiks-cube/), or install via TINKER: download from `https://tinker.liriliri.io/`, then run `npm i -g tinker-rubiks-cube`.

## How to Play

1. Open the **Rubik's Cube** plugin in TINKER
2. Pick a size (**3** or **4**), then tap **Scramble** (or press **Space** on a solved cube)
3. **Drag a face layer** to twist it; **drag the background** to rotate the view
4. Use keyboard face keys (**R / L / U / D / F / B**, hold **Shift** to reverse) when you prefer
5. Tap the **lightbulb** for a slow auto-solve demo; tap again to stop
6. Finish the cube to stop the timer — try to beat your best!

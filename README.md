# ShiftyWords

A daily word puzzle. Uncover the word, build a streak, climb from Gray Level to Impossible. Plays in English, French, Hawaiian, Spanish, Russian, and Ukrainian.

Live site: [shiftywords.com](https://shiftywords.com)

## How to play

You get a fixed number of moves to find the day's word. Letters live in columns you can drag to reorder. Tap letters to build a guess, hit Check, and use the feedback (correct, misplaced, wrong) to narrow it down. Win streaks shrink the puzzle and raise the level.

## Stack

Plain HTML, CSS, and JavaScript. No build step. Drag and drop comes from [SortableJS](https://github.com/SortableJS/Sortable). Confetti from [canvas-confetti](https://github.com/catdad/canvas-confetti). Fonts are Source Serif 4 and Geist via Google Fonts.

## Local dev

Drop the folder behind any static server. On macOS, Apache at `/Library/WebServer/Documents/shiftywords` works fine. Visit `http://localhost/shiftywords/`.

## Languages

Each language has three files at the root:

- `gamewords_<code>.js` — the dictionary the game pulls from
- `translations_<code>.js` — UI strings
- `help_<code>.html` — instructions modal

Codes: `eng`, `fre`, `haw`, `spa`, `rus`, `ukr`.

## Design

Reskinned to match [olelodaily.com](https://olelodaily.com). Warm cream background, purple accent, warm orange highlights, Source Serif 4 for display.

## License

MIT. Built with aloha by [Olin Kealoha Lagon](https://www.linkedin.com/in/olinlagon/).

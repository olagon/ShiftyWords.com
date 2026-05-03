// instructions_eng.js
const instructions = {
  eng: `
    <span class="close">&times;</span>
    <h2>How to Play ShiftyWords</h2>
    <p><strong>Objective:</strong> Guess the daily word by rearranging the letters. All non English version include a mini language lesson after every game!</p>
    <p><strong>How to Play:</strong></p>
    <ol>
      <li><strong>Select Letters:</strong> Tap on a letter from one of the columns to fill a box on the guessing board.</li>
      <li><strong>Move Columns:</strong> Use the arrows above or below each column to rearrange them. The arrows on the edges wrap around.</li>
      <li><strong>Submit Your Guess:</strong> When all boxes are filled, press the "Check" button to submit your guess.</li>
      <li><strong>Feedback:</strong> The tiles will change colors:
        <ul>
          <li>Green: Correct letter in the right spot.</li>
          <li>Yellow: Letter is in the word but in the wrong spot.</li>
          <li>Gray: Letter is not in the word.</li>
        </ul>
      </li>
      <li><strong>Winning:</strong> If your guess is correct, you win the game.</li>
      <li><strong>Moves & Board Size:</strong>
        <ul>
          <li>You start with 45 moves. For each win in your streak, you lose 7 moves, but you will always have at least 21 moves.</li>
          <li>Your win streak also reduces the number of guessing rows, making the game more challenging.</li>
        </ul>
      </li>
    </ol>
  `
};

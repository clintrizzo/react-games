import React, { useState } from "react";
import '../components/ticTacToe/css/ticTacToe4x4.css';
import Square from "../components/ticTacToe/4x4/Square4x4/square";
import EndGame from "../components/ticTacToe/4x4/endGame4x4/endGame";
import Footer from "../components/footer/footer"

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
];

console.log('===', winCombination)

function TicTacToe() {
  const [grid, setGrid] = useState(Array(16).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });

  function isGameOver() {
    if (!gameFinished) {
      //* X win check
      for (let i = 0; i < 10; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER &&
          grid[winCombination[i][3]] === X_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X WON");
          return;
        }
      }

      //* O win check
      for (let i = 0; i < 10; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER &&
          grid[winCombination[i][3]] === O_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, O: winCount.O + 1 });
          console.log("O WON");
          return;
        }
      }

      //* Draw game check
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
        console.log("DRAW");
      }
    }
  }

  function restartGame() {
    setGrid(Array(16).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  }

  function clearHistory() {
    setwinCount({ X: 0, O: 0 });
    restartGame();
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div className='ticTacToe'>
      <span className="win-history">
        <p id='xWins'>X's WINS: {winCount.X}</p>
        <p id='oWins'>O's WINS: {winCount.O}</p>
      </span>
      {gameFinished && (
        <EndGame
          winCount={winCount}
          restartGame={restartGame}
          player={player}
          draw={draw}
          clearHistory={clearHistory}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default TicTacToe;
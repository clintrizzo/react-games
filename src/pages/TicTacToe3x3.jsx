import React, { useState } from "react";
import '../components/ticTacToe/css/ticTacToe3x3.css';
import Square from "../components/ticTacToe/3x3/Square3x3/square3x3";
import EndGame from "../components/ticTacToe/3x3/endGame3x3/endGame3x3";
import Footer from "../components/footer/footer"

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });

  function isGameOver() {
    if (!gameFinished) {
      //* X win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER 
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X WON");
          return;
        }
      }

      //* O win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER 
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
    setGrid(Array(9).fill(INITIAL));
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
    <div className='ticTacToe-3x3'>
      <span className="win-history">
        <p id='xWins-3x3'>X's WINS: {winCount.X}</p>
        <p id='oWins-3x3'>O's WINS: {winCount.O}</p>
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
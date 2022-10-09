import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "O WON" : "X WON"}</span>}
      {draw && <span className="win-text">DRAW GAME</span>}

      <span className="win-history">
        X's WINS: {winCount.X}
        <br />
        O's WINS: {winCount.O}
      </span>

      <button className="btn-4x4" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn-4x4" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default EndGame;
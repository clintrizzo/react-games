import React from "react";

function EndGame3x3({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen-3x3">
      {!draw && <span className="win-text-3x3">{player ? "O WON" : "X WON"}</span>}
      {draw && <span className="win-text-3x3">DRAW GAME</span>}

      <span className="win-history-3x3">
        X's WINS: {winCount.X}
        <br />
        O's WINS: {winCount.O}
      </span>

      <button className="btn-3x3" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn-3x3" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default EndGame3x3;
import React from 'react'

import { Box } from "../box/box"
import '../board/board.css'

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <Box value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
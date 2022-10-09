import React from "react";

function Square3x3({ clickedArray, handleClick }) {
  return (
    <div className="board-3x3" id='ipadScreen3x3'>
      {clickedArray.map((item, index) => {
        if (item === "") {
          return (
            <div
              key={index}
              className="square-3x3"
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className="square clicked">
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Square3x3;
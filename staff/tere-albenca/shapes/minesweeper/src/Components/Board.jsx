import { useState } from "react";
function Board() {
  return (
    <>
      <section
        className="board"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {board
          .map((row, i) =>
            row.map((cell, j) => {
              return cell.isClicked ? (
                <div className="clicked-cell">
                  {cell.isBomb ? "Boom" : cell.bombsAside}
                </div>
              ) : (
                <div className="no-clicked-cell">
                  <button
                    onClick={() => handleCellClick(i, j)}
                    className="cell-button"
                  ></button>
                </div>
              );
            })
          )
          .flat()}
      </section>
    </>
  );
}
export default Board;

import React from "react";
import Board from "./Components/Board";

function App() {
  return (
    <>
      <header clasName="header">
        <h1>MINESWEEPER</h1>
        <hr />
      </header>
      <main className="main">
        <Board />
      </main>
    </>
  );
}

export default App;

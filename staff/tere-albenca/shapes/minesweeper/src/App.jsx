import React from "react";
import Board from "./Components/Board";

function App() {
  return (
    <>
      <header>
        <h1>Hola Buscaminas</h1>
        <hr />
      </header>
      <main className="main">
        <Board />
      </main>
    </>
  );
}

export default App;

import React from "react"
import Board from "./Components/Board"

function App() {
  return (
    <>
      <header>
        <h1>Hello MineSweeper</h1>
        <hr />
      </header>
      <main className="main">
        <Board />
      </main >
    </>
  )
}


export default App

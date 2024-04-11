import './App.css'
import React from 'react'
import Board from './components/Board'

function App() {
  return (
    <>
      <header>
        <h1>Hello mine sweeper</h1>
      </header>
      <main className='main'>
        <Board />
      </main>
      <footer></footer>
    </>
  )
}

export default App

import './App.css'
import React from 'react'

function App() {
    const columns = 8
    const rows = 8

    const initialBoard = new Array(rows)


    for (let i = 0; i < initialBoard.length; i++) {
        initialBoard[i] = new Array(columns)
        for (let j = 0; j < initialBoard[i].length; j++) {
            const isBomb = Math.floor(Math.random() * 10)

            const cell = {
                inBomb: !isBomb,
                inClicked: false,
            }

            initialBoard[i][j] = cell
        }
    }

    for (let i = 0; i < initialBoard.length; i++) {
        for (let j = 0; j < initialBoard[i].length; j++) {
            let bombsAside = 0

            if (newBoard)
                if (newBoard)
                    if (newBoard)
                        if (newBoard)
                            if (newBoard)
                                if (newBoard)
                                    if (newBoard)
                                        if (newBoard)

import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'

import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGameFrom } from './logic/board'
import { saveGameStorage, resetGameStorage } from './logic/storage'

import { Square } from './components/Square'
import { GameBoard } from './components/GameBoard'
import { WinnerModal } from './components/WinnerModal'

export default function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    // Update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Switch turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // save game
    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })

    // Check if someone won or if game ended
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>

      <GameBoard board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

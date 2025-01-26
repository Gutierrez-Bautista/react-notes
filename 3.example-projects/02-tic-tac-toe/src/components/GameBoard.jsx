import { Square } from "./Square"

export function GameBoard ({board, updateBoard}) {
  return (
    <section className='game'>
      {
        board.map((squareValue, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {squareValue}
            </Square>
          )
        })
      }
    </section>
  )
}
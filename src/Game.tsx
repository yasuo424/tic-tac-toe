import { useState } from 'react'
import './Game.css'
import { Board } from './components/Board'

export const Game = () => {
  const [state, setState] = useState<GameState>({
    history: [
      {
        squares: [null, null, null, null, null, null, null, null, null],
        xIsNext: true,
      },
    ],
    stepNumber: 0,
  });

  const squares = [null, null, null, null, null, null, null, null, null];
  const status = "next player is X"

  return (
    <div className="App">
      <p>{status}</p>
      <Board squares={squares} />
    </div>
  );
}

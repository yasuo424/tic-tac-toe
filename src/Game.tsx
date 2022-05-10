import { useState } from 'react'
import './Game.css'
import { Board } from './components/Board'

type Step = {
  readonly squares: BoardState;
  readonly xIsNext: boolean;
};

type GameState = {
  readonly history: readonly Step[];
  readonly stepNumber: number;
};

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
  const winner = null; //TODO

  const handleClick = (i: number) => {
    if (winner || current.squares[i]) {
      return;
    }

    const next: Step = (({ squares, xIsNext }) => {
      const nextSquares = squares.slice() as BoardState;
      nextSquares[i] = xIsNext ? "X" : "O";
      return {
        squares: nextSquares,
        xIsNext: !xIsNext,
      };
    })(current);

    setState(({ history, stepNumber }) => {
      const newHistory = history.slice(0, stepNumber + 1).concat(next);

      return {
        history: newHistory,
        stepNumber: newHistory.length - 1,
      };
    });
  };

  const current = state.history[state.stepNumber];

  // const squares = [null, null, null, null, null, null, null, null, null];
  const status = "next player is X"

  return (
    <div className="App">
      <p>{status}</p>
      <Board squares={current.squares} onClick={handleClick} />
    </div>
  );
}

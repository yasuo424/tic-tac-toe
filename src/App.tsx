import { useState } from 'react'
import './App.css'
import { Board } from './components/Board'

export const App = () => {
  const squares = [null, null, null, null, null, null, null, null, null];
  const status = "next player is X"

  return (
    <div className="App">
      <p>{status}</p>
      <Board squares={squares} />
    </div>
  );
}

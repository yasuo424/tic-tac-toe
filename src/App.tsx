import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
    </div>
  )
}

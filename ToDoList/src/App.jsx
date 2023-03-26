import { useState } from 'react'
import './App.css'
import TodoMain from './components/TodoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>TODO List</h1>
      <TodoMain />
    </div>
  )
}

export default App

import { useState } from 'react'

function App() {
  let [count, setCount] = useState(1)
  const add = () => {
    setCount(count + 1)
    console.log('clicked', count)
  }
  const subtract = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>Add value by 1</button>
      <button onClick={subtract}>Reduce value by 1</button>
    </>
  )
}

export default App

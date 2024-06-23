import { useState } from 'react'
import './App.css'
import { Products } from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hello There</h2>
      <Products/>
    </>
  )
}

export default App

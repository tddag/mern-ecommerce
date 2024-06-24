import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products'
import { ManageProducts } from './pages/ManageProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/manageProducts" element={<ManageProducts/>}/>
      </Routes>
    </>
  )
}

export default App

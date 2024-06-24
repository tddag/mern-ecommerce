import { useState } from 'react'
import './App.css'
import { AddProduct } from './pages/AddProduct'
import { Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/addProduct" element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App

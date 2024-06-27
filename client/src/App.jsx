import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products'
import { ManageProducts } from './pages/ManageProducts'
import { Home } from './pages/Home'
import { SingleProduct } from './pages/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/manageProducts" element={<ManageProducts/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
    </>
  )
}

export default App

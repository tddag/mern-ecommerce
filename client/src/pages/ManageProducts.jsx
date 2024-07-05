import React, { useEffect, useState } from 'react'
import { AddProduct } from '../components/AddProduct'
import ProductListAdmin from '../components/ProductListAdmin'
import { NavBar } from '../components/NavBar'



export const ManageProducts = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProductList()
  })

  const getProductList = async () => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/api/products`

    try {
        let res = await fetch(url)

        res = await res.json()
        if (res) {
            setProductList(res)
        } else {
            console.log(res)
        }
    } catch (e) {
        console.log(e)
    }
}

  return (
    <div className="flex flex-col">
        <NavBar/>
        <AddProduct getProductList={getProductList}/>
        <ProductListAdmin productList={productList}/>
    </div>
  )
}

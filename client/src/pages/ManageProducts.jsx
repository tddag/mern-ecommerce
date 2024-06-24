import React from 'react'
import { AddProduct } from '../components/AddProduct'
import ProductList from '../components/ProductList'



export const ManageProducts = () => {
  return (
    <div className="flex flex-col">
        <AddProduct/>
        <ProductList/>
    </div>
  )
}

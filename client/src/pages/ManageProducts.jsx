import React from 'react'
import { AddProduct } from '../components/AddProduct'
import ProductListAdmin from '../components/ProductListAdmin'



export const ManageProducts = () => {
  return (
    <div className="flex flex-col">
        <AddProduct/>
        <ProductListAdmin/>
    </div>
  )
}

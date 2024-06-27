import React, { useState } from 'react'
import { ProductItemUser } from './ProductItemUser'

export const ProductLlistUser = (props) => {

    return (
        <div className="h-screen overflow-auto">
            {props.productList?.length > 0 ? (
                <div className="flex flex-col md:flex-row md:flex-wrap h-full gap-8 py-5 ">
                    {props.productList.map((product, id) => (
                        <ProductItemUser key={id} product={product}/>
                    ))}
                </div>
            ): "No products"}        
        </div>
    )
}

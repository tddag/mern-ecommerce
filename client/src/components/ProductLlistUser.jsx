import React, { useState } from 'react'
import { ProductItemUser } from './ProductItemUser'

export const ProductLlistUser = (props) => {

    return (
        <div>
            {props.productList?.length > 0 ? (
                <div className="flex gap-8  flex-wrap overflow-auto">
                    {props.productList.map((product, id) => (
                        <ProductItemUser key={id} product={product}/>
                    ))}
                </div>
            ): "No products"}        
        </div>
    )
    }

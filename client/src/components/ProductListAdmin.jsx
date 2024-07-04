import React, { useEffect, useState } from 'react'

const ProductListAdmin = (props) => {

    const productList = props.productList;

    return (
        <div className="bg-green-100 w-11/12 md:w-3/4 m-auto mt-20 p-4">
            
            {productList.length > 0 ? (
                <div className="flex flex-col gap-6 ">
                    {productList.map((product, id) => (
                        <div key={id} className="flex items-center"> 
                            {product.name + " | " + "$" + product.price + " | " + product.size}
                            <div className="flex gap-4 ml-10 overflow-auto">
                                {product.images.map((image, imgIdx) => (
                                    <img src={image} key={imgIdx} className="h-20 inline-block"/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )

            : "No products"} 
        </div>
    )
}

export default ProductListAdmin
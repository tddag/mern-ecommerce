import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductList();
    }, [])

    const getProductList = async () => {
        let url = `http://localhost:8000/api/products`

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
        <div className="bg-green-100 w-11/12 md:w-3/4 m-auto mt-20 p-4">
            
            {productList.length > 0 ? (
                <div>
                    {productList.map((product, id) => (
                        <div key={id}> 
                            {product.name + " | " + product.price + " | " + product.size}
                            {product.images.map((image, imgIdx) => (
                                <img src={image} key={imgIdx} className="h-60 inline-block"/>
                            ))}
                        </div>
                    ))}
                </div>
            )

            : "No products"} 
        </div>
    )
}

export default ProductList
import React, { useState } from 'react'
import { ProductItemUser } from './ProductItemUser'

export const ProductLlistUser = () => {
    const [productList, setProductList] = useState([
        {
            "_id": "6678e3241e21d9b17c584f5e",
            "name": "New product 1",
            "price": 100,
            "category": "shirt",
            "color": "black",
            "size": "M",
            "images": [
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/0b51f07a-5dd3-40c8-86d5-ea9fa4187525?alt=media",
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/4070658b-85a6-4a40-9803-8c0696da6f83?alt=media",
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/af891257-57b9-4a53-a8c6-7dbadf0ff346?alt=media"
            ],
            "createdAt": "2024-06-24T03:08:20.386Z",
            "updatedAt": "2024-06-24T03:08:20.386Z",
            "__v": 0
        },
        {
            "_id": "6678ed2d086e1e1a586b9f22",
            "name": "Pant",
            "price": 200,
            "category": "Bottom",
            "color": "grey",
            "size": "M",
            "images": [
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/9b2a0c55-80ce-4044-8a41-37f82d48a84b?alt=media",
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/65a703ea-4aa8-49d2-a1d5-937284466f93?alt=media"
            ],
            "createdAt": "2024-06-24T03:51:09.196Z",
            "updatedAt": "2024-06-24T03:51:09.196Z",
            "__v": 0
        },
        {
            "_id": "6678f2f8086e1e1a586b9f39",
            "name": "Hat",
            "price": 50,
            "category": "Hat",
            "color": "blue",
            "size": "S",
            "images": [
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/e692a0ed-13be-47fa-9854-587a25e96b93?alt=media",
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/99cee7c6-8a62-4a6c-b5ec-bf99d0f3c485?alt=media"
            ],
            "createdAt": "2024-06-24T04:15:52.819Z",
            "updatedAt": "2024-06-24T04:15:52.819Z",
            "__v": 0
        },
        {
            "_id": "6678fc0603049160749f01ac",
            "name": "Bomber",
            "price": 150,
            "category": "Bomber",
            "color": "black",
            "size": "M",
            "images": [
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/d0856be4-9ade-4759-9189-1f12e13fc90d?alt=media",
                "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/37fda0be-b744-471f-8da2-1219afe21b67?alt=media"
            ],
            "createdAt": "2024-06-24T04:54:30.133Z",
            "updatedAt": "2024-06-24T04:54:30.133Z",
            "__v": 0
        }
    ])    
    return (
        <div>
            {productList.length > 0 ? (
                <div className="flex gap-8  flex-wrap overflow-auto">
                    {productList.map((product, id) => (
                        <ProductItemUser key={id} product={product}/>
                    ))}
                </div>
            ): "No products"}        
        </div>
    )
    }
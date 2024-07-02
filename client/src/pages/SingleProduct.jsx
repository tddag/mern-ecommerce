import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { InputNumber } from "antd";
import { addToCart } from '../state/cart/cartSlice';
import { NavBar } from '../components/NavBar';

export const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [id])

    const getProductDetails = async () => {
        try {
            let url = `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`

            let res = await fetch(url)
            if (res.ok) {
                res = await res.json()
                console.log(res);
                setProduct(res);
            } else {
                throw new Error("Failed to fetch Product")
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleAddAction = () => {
        let cartProduct = {...product};
        cartProduct.qty = qty;
        dispatch(addToCart(cartProduct))
    }

    const relatedProducts = [
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
    ]

    return (
        <div className="flex flex-col">
            <NavBar/>

            <div className="bg-blue-200 h-full flex flex-col md:flex-row">
                <div className="bg-purple-200 h-full w-full md:w-1/2 flex flex-col" >
                    <div className="bg-blue-200 h-60 w-60 m-auto mt-5">
                        {product. images && (
                            <img src={product?.images[0]} alt="product big image"/>
                        )}
                    </div>
 
                    {product.images?.length > 0 && (
                        <div className="flex gap-4 h-32 px-8 py-4 overflow-x-auto bg-yellow-100">
                            {product.images.map((productImage, id) => (
                                    <img  className="h-20 w-20" src={productImage} alt="product small image" key={id}/>
   
                            ))}
                        </div>
                    )}

                </div>

                <div className="bg-orange-200 h-full w-full md:w-1/2 p-10 flex flex-col">
                    <h2>{product.name}</h2>
                    <h2>${product.price}</h2>
                    <h2>{product.size}</h2>
                    <h2>{product.color}</h2>
                    <InputNumber prefix="qty: " min={1} defaultValue={1} value={qty} onChange={(val) => setQty(val)}/>
                    <button className="bg-blue-200 p-2 rounded-lg mt-20" onClick={handleAddAction}>Add to Cart</button>
                </div>
            </div>
            <div className="bg-green-200 h-60 flex flex-col">
                <div className="ml-5 mt-2">
                    <h2>Related Items</h2>
                </div>
                {relatedProducts.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start">
                        {relatedProducts.map((otherProduct, id) => (
                            <div className="h-40 w-40 bg-red-100 m-5" key={id}>
                                <div className="ml-2 mt-2">
                                    <div className="h-20 w-20 bg-blue-300 cursor-pointer" onClick={() => navigate(`/product/${otherProduct._id}`)}>
                                        <img src={otherProduct.images[0]} alt="relatedImage"/>
                                    </div>
                                    <div className="mt-4">{otherProduct.name} | {otherProduct.category}</div>
                                    <div>${product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                         
            </div>
        </div>
    )
}

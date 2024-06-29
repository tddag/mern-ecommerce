import React from 'react'
import { NavBar } from '../components/NavBar'
import { useSelector } from 'react-redux'

export const Checkout = () => {

    const cart = useSelector(state => state.cart.products)


    return (
        <div className="flex flex-col">
            <div>
                <NavBar/>
            </div>

            <div className="flex">
                <div className="bg-blue-200 w-1/2 h-screen">
                    {cart.length > 0 && (
                        <div className="p-6 w-full h-full box-border flex flex-col gap-4">
                            {cart.map((product, id) => (
                                <div key={id}  className=" bg-purple-200 p-4 flex flex-col">
                                    <div className="flex">
                                        <div>
                                            <div>
                                                {product.name}
                                            </div>

                                            <div>
                                                ${product.price}
                                            </div>

                                            <div>
                                                Qty: {product.qty}
                                            </div> 

                                            <div>
                                                Total: ${product.qty * product.price}
                                            </div>
                                        </div>

                                        <div className="flex justify-end w-full">
                                            <div>
                                                <img src={product.images[0]} alt="product" className="h-20 w-20 block"/>
                                            </div>
                                           
                                        </div>
                                    </div>
                                   
                                    <div className="flex justify-end">
                                        <button className="p-2 bg-red-200 rounded-lg">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-green-200 w-1/2 h-screen">
                    Summary
                </div>
            </div>
            
        </div>
    )
}

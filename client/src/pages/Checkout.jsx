import React from 'react'
import { NavBar } from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from '../state/cart/cartSlice'

export const Checkout = () => {

    const cart = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const getTotal = () => {
        let sum = 0;
        for (let prod of cart) {
            sum += (prod.qty * prod.price)
        }
        return sum
    }

    return (
        <div className="flex flex-col">
            <div>
                <NavBar/>
            </div>

            <div className="flex">
                <div className="bg-blue-200 w-1/2 h-screen">
                    {cart.length > 0 && (
                        <div className="p-6 w-full h-full box-border flex flex-col gap-4 overflow-auto">
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
                                        <button className="p-2 bg-red-200 rounded-lg" onClick={() => dispatch(removeProductFromCart(product._id))}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-green-200 w-1/2 h-screen">
                    <div className="flex flex-col p-4">
                        <button className={"p-2 rounded-lg bg-orange-300 w-full md:w-1/2 mb-5"} disabled={getTotal() == 0}>Place your order</button>
                        <div className="font-bold">Order Summary</div>
                        <div>Items: ${getTotal()}</div>
                        <div>Tax: ${getTotal()*0.13}</div>
                        <div className="text-red-600 font-bold">Order Total: ${(getTotal() * 1.13).toFixed(2).toLocaleString("en-us")}</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

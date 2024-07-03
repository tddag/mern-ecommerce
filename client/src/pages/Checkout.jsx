import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from '../state/cart/cartSlice'
import { Result, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';


export const Checkout = () => {

    const cart = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [messageApi, contextHolder ] = message.useMessage();

    const [checkoutMessage, setCheckoutMessage] = useState("")
    const [isSuccessfullyCheckOut, setIsSuccessfullyCheckOut] = useState(false)

    useEffect(() => {

        let query = new URLSearchParams(window.location.search)

        if (query.get("success")) {
            setCheckoutMessage("Order placed! You will receive an email confirmation")
            setIsSuccessfullyCheckOut(true)
        }

        if (query.get("canceled")) {
            setCheckoutMessage("Order canceled! Continue shopping and check out when you are ready")
        }        

    }, [])

    const getTotal = () => {
        let sum = 0;
        for (let prod of cart) {
            sum += (prod.qty * prod.price)
        }
        return sum
    }

    const handleMakePayment = async () => {
        try {
            let url = `${import.meta.env.VITE_BACKEND_URL}/api/products/checkout`

            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({products: cart}),
            })

            if (res.ok) {
                res = await res.json();
                window.location.href = res.url
            } else {
                throw new Error("Network response is not ok")
            }
        } catch (e) {
            console.log(e);

        }
    }

    const handleDeleteProduct = (product) => {
        dispatch(removeProductFromCart(product._id))
        messageApi.open({
            type: "success",
            content: `Successfully remove product ${product.name}`
        })
    }

    return (
        <div className="flex flex-col">
            {contextHolder}
            <div>
                <NavBar/>
            </div>

            {checkoutMessage ? (
                    
                <Result
                    status={isSuccessfullyCheckOut ? "success" : "error"}
                    title={isSuccessfullyCheckOut ? "Successfully Ordered" : "Failed to Order"}
                    subTitle={checkoutMessage}
                    extra={[
                        <Button type="primary" onClick={() => navigate("/")}>
                            Shop Again
                        </Button>
                    ]}
                />    
  
            ) : (
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
                                        <button className="p-2 bg-red-200 rounded-lg" onClick={() => handleDeleteProduct(product)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-green-200 w-1/2 h-screen">
                    <div className="flex flex-col p-4">
                        <button className={"p-2 rounded-lg bg-orange-300 w-full md:w-1/2 mb-5"} disabled={getTotal() == 0} onClick={handleMakePayment}>Make Payment</button>
                        {/* <form action="/api/products/checkout" method="POST">
                            <button type="submit">
                                Checkout
                            </button>
                        </form> */}
                        <div className="font-bold">Order Summary</div>
                        <div>Items: ${getTotal()}</div>
                        <div>Tax: ${(getTotal()*0.13).toFixed(2).toLocaleString("en-us")}</div>
                        <div className="text-red-600 font-bold">Order Total: ${(getTotal() * 1.13).toFixed(2).toLocaleString("en-us")}</div>
                    </div>
                </div>
            </div>
            )}


            
        </div>
    )
}

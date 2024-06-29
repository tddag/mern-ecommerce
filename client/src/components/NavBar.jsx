import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart.products)

    return (
        <div className="bg-red-200 flex justify-between p-2 pr-4">
            <span className="cursor-pointer" onClick={() => navigate('/')}>TD Store</span>
            <button className="relative bg-green-300 p-2 rounded-lg" onClick={() => navigate("/checkout")}>
                <div className="absolute -bottom-2 -left-3 bg-blue-200 h-5 w-5 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xs text-center  font-bold">{cart.length}</span>
                </div>
                Cart
            </button>
        </div>
    )
}

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const NavBar = () => {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart.products)
    let defaultProducts = [{"value":"Tshirt"},{"value":"Pant"},{"value":"Hat"},{"value":"Bomber"},{"value":"Vans Shoe Old School"},{"value":"Shirt"},{"value":"Suite"},{"value":"PC Gaming CYBERPOWERPC"},{"value":"PS5"},{"value":"Gaming Chair Secret Lab"},{"value":"MacBook Pro - Apple M3 Pro chip with 12‑core CPU, 18‑core GPU and 16‑core Neural Engine"}]
    const [options, setOptions] = useState([])
    const getPanelValue = (searchText) => !searchText ? [] : defaultProducts.filter(prod => prod.value.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div className="bg-red-200 flex justify-between p-2 pr-4">
            <span className="cursor-pointer" onClick={() => navigate('/')}>TD Store</span>
            <div className="w-3/5 flex gap-4">
            <AutoComplete
                options={options}
                style={{
                    width: "100%"
                }}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="Search Product"
            />
            <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
            </div>
           
            <button className="relative bg-green-300 p-2 rounded-lg" onClick={() => navigate("/checkout")}>
                <div className="absolute -bottom-2 -left-3 bg-blue-200 h-5 w-5 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xs text-center  font-bold">{cart.length}</span>
                </div>
                Cart
            </button>
        </div>
    )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../state/cart/cartSlice';
import { InputNumber, message } from 'antd';

export const ProductItemUser = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const [messageApi, contextHolder] = message.useMessage();

    const navigateToProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const handleAddAction = () => {
        let cartProduct = {...props.product};
        cartProduct.qty = qty;
        dispatch(addToCart(cartProduct))
        messageApi.open({
            type: 'success',
            content: `Successfully add to cart, product: ${props.product.name}, qty: ${qty}`
        })
    }

    return (
    <div>
        {contextHolder}
        <div className="w-60 h-60  rounded-lg p-4 flex flex-col relative border-box border-b-2">
            <div className="cursor-pointer h-5" onClick={() => navigateToProduct(props.product._id)}>{props.product.name}</div>
            {props.product.images && (
                <div className="cursor-pointer" onClick={() => navigateToProduct(props.product._id)}>
                    <img src={props.product.images[0]} className="w-20 h-20"/>
                </div>
            )}

            {props.product.category && (
                <div className="capitalize">
                    {props.product.category}
                </div>
            )}

            <InputNumber prefix="qty: " min={1} defaultValue={1} value={qty} onChange={(val) => setQty(val)}/>

            
            <div className="flex p-4 w-full box-border justify-between absolute bottom-0 pb-5 right-0 items-center">
                <div>
                    ${props.product.price}
                </div>
                <div className="bg-purple-200 p-2 rounded-lg" onClick={handleAddAction}>
                    <button>Add</button>
                </div>
            </div>
        </div>        
    </div>
    )
}

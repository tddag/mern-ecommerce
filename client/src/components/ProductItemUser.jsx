import React from 'react'

export const ProductItemUser = (props) => {
  return (
    <div>
        <div className="w-60 h-60 bg-blue-300 p-4 flex flex-col relative">
            <div>{props.product.name}</div>
            {props.product.images && (
                <div>
                    <img src={props.product.images[0]} className="w-20 h-20"/>
                </div>
            )}

            {props.product.category && (
                <div className="capitalize">
                    {props.product.category}
                </div>
            )}
            
            <div className="flex p-4 w-full box-border justify-between absolute bottom-0 pb-5 right-0 items-center">
                <div>
                    ${props.product.price}
                </div>
                <div className="bg-purple-200 p-2">
                    <button>Add</button>
                </div>
            </div>
        </div>        
    </div>
  )
}

import React, { useState } from 'react'
import { ProductLlistUser } from '../components/ProductLlistUser'

export const Home = () => {



    return (
        <div className="flex flex-col bg-blue-200">
            <div className="flex justify-between p-2 items-center">
                <div>
                    TD STORE
                </div>
                <div className="bg-green-300 p-2">
                    Cart
                </div>
            </div>
            <div className="bg-red-200 h-full flex w-full">
                <div className="h-full bg-yellow-200 w-3/4 md:w-1/6 flex flex-col p-4 gap-4">
                    <div className="bg-pink-100 p-4">
                        Category
                    </div>

                    <div className="bg-pink-100 p-4">
                        Size
                    </div>

                    <div className="bg-pink-100 p-4">
                        Color
                    </div>                    
                    
                </div>
                <div className="flex pt-10 pl-5">
                    <ProductLlistUser/>
                </div>
            </div>

        </div>
    )
}

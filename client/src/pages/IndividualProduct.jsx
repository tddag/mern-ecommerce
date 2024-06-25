import React from 'react'

export const IndividualProduct = () => {

    const product = {
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
    }

    return (
        <div className="flex flex-col">
            <div className="bg-red-200 flex flex-row-reverse p-2 pr-4">
                <button className="bg-green-300 p-2 rounded-lg">Cart</button>
            </div>
            <div className="bg-blue-200 h-80 flex flex-col md:flex-row">
                <div className="bg-purple-200 h-full w-full md:w-1/2 flex flex-col">
                    <div className="bg-blue-200 h-40 w-3/4 m-auto mt-5">
                        Big Image
                    </div>
                    <div className="bg-red-100 h-20 w-20">
                        Small images
                    </div>
                </div>

                <div className="bg-orange-200 h-full w-full md:w-1/2">
                    Details
                </div>
            </div>
            <div className="bg-green-200 h-40">
                Related Items
            </div>
        </div>
    )
}

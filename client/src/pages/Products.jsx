import React, { useState } from 'react'
import { uploadBytes, ref } from 'firebase/storage'
import { storage } from '../../filebase'

export const Products = () => {

    const [formData, setFormData] = useState({
        name: "New product 1",
        price: 100,
        category: "shirt",
        color: "black",
        size: "M",
        images: ""
    })

    const handleFormDataChange = (e) => {
        const { name, value, files } = e.target;

        setFormData(d => ({...d, [name]: files ? files : value}))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        console.log("Submit Data")
        console.log(formData)  

        if (formData.images) {
            let fileRef = ref(storage, "123") // ref(storage, formData.images[0].name)
            await uploadBytes(fileRef, formData.images[0]).then(async (snapshot) => {
                console.log("Uploaded a blob or file!")
                console.log(snapshot)
            })

            console.log("After sending file")
        }

        // const data = new FormData();
        // data.append('name', formData.name)
        // data.append('price', formData.price)
        // data.append('category', formData.category)
        // data.append('color', formData.color)
        // data.append('size', formData.size)
        // data.append('images', formData.images)

        // let url = `http://localhost:8000/api/products`
        // try {
        //     let res = await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "multipart/form-data"
        //         },
        //         body: data,
        //     })

        //     if (res) {
        //         console.log("Successfully create a product")
        //     } else {
        //         console.log("Failed to create the product")
        //     }
        // } catch (e) {
        //     console.log(e)
        // }

    }
    return (
        <div className="bg-red-200 h-20 w-11/12 md:w-2/4 mx-auto" >
            <form onSubmit={handleFormSubmit} className="p-4 shadow-md rounded-md bg-blue-200">
                <div className="flex items-center p-4">
                    <label htmlFor="name" className="text-grey-700 font-bold mr-10">Name:  </label>                        
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleFormDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div className="flex items-center p-4">
                    <label htmlFor="price" className="text-grey-700 font-bold mr-10">Price:  </label>                        
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleFormDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>        

                <div className="flex items-center p-4">
                    <label htmlFor="category" className="text-grey-700 font-bold mr-10">Category:  </label>                        
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleFormDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>           

                <div className="flex items-center p-4">
                    <label htmlFor="color" className="text-grey-700 font-bold mr-10">Color:  </label>                        
                    <input type="text" id="color" name="color" value={formData.color} onChange={handleFormDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>            

                <div className="flex items-center p-4">
                    <label htmlFor="size" className="text-grey-700 font-bold mr-10">Size:  </label>                        
                    <input type="text" id="size" name="size" value={formData.size} onChange={handleFormDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>            

                <div className="flex items-center p-4">
                    <label htmlFor="images" className="text-grey-700 font-bold mr-10">Upload Image  </label>                        
                    <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleFormDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>    

                <div className="mb-4">
                    <button type="submit" className="w-full bg-blue-400 text-white py-2 px-4 rounded-md">
                        Submit
                    </button>
                </div>                                                      

            </form>
        </div>
    )
}

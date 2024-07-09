import { Modal, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../../filebase'
import { uploadBytes, ref } from 'firebase/storage'

const ProductListAdmin = (props) => {

    const productList = props.productList || [];

    const [openModal, setOpenModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState()

    const [ messageApi, contextHolder ] = message.useMessage()

    const handleInitUpdate = (product) => {
        setSelectedProduct(product)
        setOpenModal(true)
    }

    const handleUpdateDataChange = (e) => {
        let { name, value, files } = e.target;
        console.log("name: ", name)
        console.log("value: ", value)
        console.log("files: ")
        console.log(files)
        if (name == 'images') {
            setSelectedProduct(prod => ({...prod, newImageFiles: files}))
        } else {
            setSelectedProduct(prod => ({...prod, [name]: value}))
        }
        console.log(selectedProduct)
    }

    const removeImage = (image) => {
        let images = selectedProduct.images.filter(img => img !== image)
        setSelectedProduct(prod => ({...selectedProduct, images}))
    }

    const handleUpdateProduct = async () => {
        
        try {
            let newImageUrls = [];
            if (selectedProduct.newImageFiles) {
                for (let newImage of selectedProduct.newImageFiles) {
                    let fileRef = ref(storage, uuidv4())
    
                    await uploadBytes(fileRef, newImage)
                        .then((snapshot) => {
                            let url = `https://firebasestorage.googleapis.com/v0/b/${snapshot.ref._location.bucket}/o/${snapshot.ref._location.path}?alt=media`
                            newImageUrls.push(url);
                        })
                }
            }
    
            let combinedImageUrls = selectedProduct.images || []
            combinedImageUrls = combinedImageUrls.concat(newImageUrls);


            let url = `${import.meta.env.VITE_BACKEND_URL}/api/products/${selectedProduct._id}`

            let res = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...selectedProduct, images: combinedImageUrls}),
            })

            if (res) {
                console.log("Successfully update the product")
                messageApi.open({
                    type: 'success',
                    content: 'Successfully update the product'
                })
                setOpenModal(false)
                props.getProductList();
            } else {
                console.log("Failed to create the product")
            }

        } catch (e) {
            console.log(e)
        }
        

    }

    return (
        <div className="w-11/12 md:w-3/4 m-auto mt-20 p-4">
            { contextHolder }
            {productList.length > 0 ? (
                <div className="flex flex-col gap-6 ">
                    {productList.map((product, id) => (
                        <div key={id} className="flex items-center gap-4"> 
                            {product.name + " | " + "$" + product.price + " | " + product.size}
                            <button className="bg-blue-200 p-2 rounded-lg" onClick={() => handleInitUpdate(product)}>Update</button>
                            <div className="flex gap-4 ml-10 overflow-auto">
                                {product.images.map((image, imgIdx) => (
                                    <img src={image} key={imgIdx} className="h-20 inline-block"/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )
            : "No products"} 

            <Modal 
                open={openModal}
                title={"Update: " + selectedProduct?.name }
                onCancel={() => {
                    setOpenModal(false)
                    setSelectedProduct()
                }}
                footer={[
                        <div key="cancel" className="inline-block">
                            <button 
                                className="bg-red-200 p-2 rounded-lg"  onClick={() => setOpenModal(false)}>Cancel
                            </button>
                        </div>,
                        <div key="update" className="inline-block ml-3">
                            <button 
                                className="bg-green-200 p-2 rounded-lg" onClick={handleUpdateProduct} >Update
                            </button>
                        </div>
                ]}
            >
                <div>
                    <div className="flex items-center p-4">
                        <label htmlFor="name" className="text-grey-700 font-bold mr-10">Name:  </label>                        
                        <input type="text" id="name" name="name" value={selectedProduct?.name} onChange={handleUpdateDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div className="flex items-center p-4">
                        <label htmlFor="price" className="text-grey-700 font-bold mr-10">Price:  </label>                        
                        <input type="number" id="price" name="price" value={selectedProduct?.price} onChange={handleUpdateDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>        

                    <div className="flex items-center p-4">
                        <label htmlFor="category" className="text-grey-700 font-bold mr-10">Category:  </label>                        
                        <input type="text" id="category" name="category" value={selectedProduct?.category} onChange={handleUpdateDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>           

                    <div className="flex items-center p-4">
                        <label htmlFor="color" className="text-grey-700 font-bold mr-10">Color:  </label>                        
                        <input type="text" id="color" name="color" value={selectedProduct?.color} onChange={handleUpdateDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>            

                    <div className="flex items-center p-4">
                        <label htmlFor="size" className="text-grey-700 font-bold mr-10">Size:  </label>                        
                        <input type="text" id="size" name="size" value={selectedProduct?.size} onChange={handleUpdateDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>            

                    <div className="flex items-center p-4">
                        <label htmlFor="images" className="text-grey-700 font-bold mr-10">Upload Image  </label>     
                
                        <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleUpdateDataChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                        {selectedProduct?.images && (
                            <div className="flex">
                                {selectedProduct.images.map((image, idx) => 
                                    <div className="h-10 w-10 relative" key={idx}>
                                        <img src={image} alt="prodImg"/>
                                        <span className="absolute -top-3 right-1 text-red-600 cursor-pointer" onClick={() => removeImage(image)}>x</span>
                                    </div>
                                )}
                            </div>
                        )}   
                    </div>  
                </div>
                
            </Modal>
        </div>
    )
}

export default ProductListAdmin